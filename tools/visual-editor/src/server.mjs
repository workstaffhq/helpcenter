import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import path from "node:path";
import fs from "node:fs";
import launchEditor from "launch-editor";
import { createProxyMiddleware } from "http-proxy-middleware";
import { injectEditorAssets } from "./injector.mjs";
import { resolveLocalFileFromRoute } from "./routeResolver.mjs";
import { findSectionInFile, submitSectionEdit } from "./markdownSections.mjs";
import { convertHtmlToMarkdown } from "./htmlToMarkdown.mjs";
import { normalizeRoutePathname } from "./shared/pathname.js";

function readTextFile(filePath) {
  return fs.readFileSync(filePath, "utf8");
}

function fallbackTitleFromId(id) {
  if (typeof id !== "string" || !id.trim()) {
    return "Untitled";
  }

  const raw = id.split("/").filter(Boolean).at(-1) || id;
  return raw
    .split("-")
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function sourceFilePathFromSiteSource(projectRoot, source) {
  if (typeof source !== "string" || !source.startsWith("@site/")) {
    return null;
  }

  return path.join(projectRoot, source.slice("@site/".length));
}

function relativeMarkdownHref(fromFilePath, toFilePath) {
  const relativePath = path.relative(path.dirname(fromFilePath), toFilePath);
  const normalized = relativePath.split(path.sep).join("/");
  if (normalized.startsWith("../") || normalized.startsWith("./")) {
    return normalized;
  }

  return `./${normalized}`;
}

function buildDocsPageIndex(projectRoot) {
  const docsDataDir = path.join(projectRoot, ".docusaurus", "docusaurus-plugin-content-docs", "default");
  if (!fs.existsSync(docsDataDir)) {
    return [];
  }

  const fileNames = fs
    .readdirSync(docsDataDir)
    .filter((name) => name.startsWith("site-") && name.endsWith(".json"));

  const byHref = new Map();

  for (const fileName of fileNames) {
    const filePath = path.join(docsDataDir, fileName);
    let data;
    try {
      data = JSON.parse(fs.readFileSync(filePath, "utf8"));
    } catch {
      continue;
    }

    const permalink = typeof data?.permalink === "string" ? data.permalink : null;
    const id = typeof data?.id === "string" ? data.id : null;
    const source = sourceFilePathFromSiteSource(projectRoot, data?.source);
    if (!permalink || !id || !source) {
      continue;
    }

    if (!permalink.startsWith("/docs/") && !permalink.startsWith("/fr/docs/")) {
      continue;
    }

    if (data?.draft || data?.unlisted) {
      continue;
    }

    const routePath = normalizeRoutePathname(permalink);
    byHref.set(routePath, {
      title: typeof data.title === "string" && data.title.trim() ? data.title.trim() : fallbackTitleFromId(id),
      href: routePath,
      routePath,
      docId: id,
      locale: routePath.startsWith("/fr/docs/") || routePath === "/fr/docs" ? "fr" : "en",
      sourceFilePath: source
    });
  }

  return Array.from(byHref.values()).sort((a, b) => {
    const titleCompare = a.title.localeCompare(b.title);
    return titleCompare !== 0 ? titleCompare : a.routePath.localeCompare(b.routePath);
  });
}

export async function startProxyServer({ projectRoot, visiblePort, internalPort, toolRoot }) {
  const app = express();
  app.disable("x-powered-by");
  const target = `http://localhost:${internalPort}`;

  app.use(cors());
  app.use(bodyParser.json({ limit: "3mb" }));

  const editorJsPath = path.join(toolRoot, "dist", "editor.js");
  const editorCssPath = path.join(toolRoot, "src", "client", "editor.css");

  if (!fs.existsSync(editorJsPath)) {
    throw new Error(
      `Missing visual editor client bundle at ${editorJsPath}. Run 'npm run build:client' in tools/visual-editor or 'npm run edit' from repo root.`
    );
  }

  app.get("/__visual-editor/editor.js", (_req, res) => {
    res.type("application/javascript").send(readTextFile(editorJsPath));
  });

  app.get("/__visual-editor/editor.css", (_req, res) => {
    res.type("text/css").send(readTextFile(editorCssPath));
  });

  app.post("/__visual-editor/info", (req, res) => {
    const pathname = req.body?.pathname;
    if (typeof pathname !== "string") {
      res.status(400).send({ success: false, message: "Missing pathname string." });
      return;
    }

    const result = resolveLocalFileFromRoute(projectRoot, pathname);
    if (!result.success) {
      res.status(200).send({
        success: false,
        message: "Can't find file",
        payload: null,
        diagnostics: result.diagnostics,
        reason: result.reason
      });
      return;
    }

    res.status(200).send({
      success: true,
      payload: {
        filePath: result.filePath,
        locale: result.locale,
        diagnostics: result.diagnostics
      }
    });
  });

  app.post("/__visual-editor/section-info", (req, res) => {
    const filePath = req.body?.filePath;
    const htmlTag = req.body?.htmlTag;
    const outerText = req.body?.outerText;
    const sectionIndex = req.body?.sectionIndex;

    if (
      typeof filePath !== "string" ||
      typeof htmlTag !== "string" ||
      typeof outerText !== "string" ||
      typeof sectionIndex !== "number"
    ) {
      res.status(400).send({ success: false, message: "Invalid section payload.", payload: null });
      return;
    }

    const result = findSectionInFile({ filePath, sectionIndex, htmlTag, outerText });
    res.status(200).send(result);
  });

  app.post("/__visual-editor/submit", (req, res) => {
    const location = req.body?.location;
    const markdown = req.body?.markdown;

    if (
      typeof markdown !== "string" ||
      !location ||
      typeof location.fileNamePath !== "string" ||
      typeof location.lineStart !== "number" ||
      typeof location.lineEnd !== "number"
    ) {
      res.status(400).send({ success: false, message: "Invalid submit payload.", payload: null });
      return;
    }

    const result = submitSectionEdit({ location, markdown });
    res.status(200).send(result);
  });

  app.post("/__visual-editor/html-to-markdown", (req, res) => {
    const html = req.body?.html;
    if (typeof html !== "string") {
      res.status(400).send({ success: false, message: "Invalid html payload.", payload: null });
      return;
    }

    try {
      const markdown = convertHtmlToMarkdown(html);
      res.status(200).send({
        success: true,
        payload: {
          markdown
        }
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: `Failed to convert HTML to Markdown: ${String(error)}`,
        payload: null
      });
    }
  });

  app.post("/__visual-editor/open", (req, res) => {
    const fileNamePath = req.body?.fileNamePath;
    const lineStart = req.body?.lineStart ?? 1;

    if (typeof fileNamePath !== "string") {
      res.status(400).send({ success: false, message: "Invalid open payload." });
      return;
    }

    try {
      launchEditor(`${fileNamePath}:${lineStart}:0`);
      res.status(200).send({ success: true });
    } catch (error) {
      res.status(500).send({ success: false, message: String(error) });
    }
  });

  app.post("/__visual-editor/pages", (req, res) => {
    const locale = req.body?.locale === "fr" ? "fr" : "en";
    const currentPathname = req.body?.currentPathname;
    if (typeof currentPathname !== "string") {
      res.status(400).send({ success: false, message: "Missing currentPathname string.", payload: null });
      return;
    }

    const currentDoc = resolveLocalFileFromRoute(projectRoot, currentPathname);
    if (!currentDoc.success || !currentDoc.filePath) {
      res.status(200).send({
        success: false,
        message: "Can't resolve current page file path.",
        payload: null,
        diagnostics: currentDoc.diagnostics,
        reason: currentDoc.reason
      });
      return;
    }

    const pages = buildDocsPageIndex(projectRoot)
      .filter((page) => page.locale === locale)
      .map(({ title, href, routePath, docId, sourceFilePath }) => ({
        title,
        href,
        routePath,
        docId,
        insertHref: sourceFilePath ? relativeMarkdownHref(currentDoc.filePath, sourceFilePath) : href
      }))
      .filter((page) => typeof page.insertHref === "string" && page.insertHref.length > 0);

    res.status(200).send({
      success: true,
      payload: {
        pages
      }
    });
  });

  const wsProxy = createProxyMiddleware({
    target,
    changeOrigin: false,
    ws: true
  });

  app.use("/ws", wsProxy);
  app.use("/sockjs-node", wsProxy);

  app.get("*", async (req, res, next) => {
    if (req.path.startsWith("/__visual-editor/")) {
      next();
      return;
    }

    if (path.extname(req.path)) {
      next();
      return;
    }

    const accept = req.headers.accept ?? "";
    if (typeof accept === "string" && !accept.includes("text/html")) {
      next();
      return;
    }

    try {
      const upstream = await fetch(`http://localhost:${internalPort}${req.originalUrl}`, {
        signal: AbortSignal.timeout(4000),
        headers: {
          ...(req.headers.cookie ? { cookie: req.headers.cookie } : {})
        }
      });

      const contentType = upstream.headers.get("content-type") ?? "";
      if (!contentType.includes("text/html")) {
        next();
        return;
      }

      const html = await upstream.text();
      const injected = injectEditorAssets(html);
      res.status(upstream.status).type("text/html").send(injected);
    } catch {
      res.status(503).type("text/html").send(`<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Starting Visual Editor...</title>
    <style>
      body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; margin: 0; background: #0f172a; color: #e2e8f0; }
      .box { max-width: 680px; margin: 16vh auto; background: #111827; border: 1px solid #334155; border-radius: 12px; padding: 20px; }
      .muted { color: #94a3b8; }
    </style>
  </head>
  <body>
    <div class="box">
      <h2>Starting docs server...</h2>
      <p class="muted">Visual Editor is waiting for Docusaurus to finish booting. This page will retry automatically.</p>
    </div>
    <script>setTimeout(() => location.reload(), 1000);</script>
  </body>
</html>`);
    }
  });

  const proxy = createProxyMiddleware({
    target,
    changeOrigin: false,
    ws: false
  });

  app.use(proxy);

  const server = app.listen(visiblePort, () => {
    console.log(`[visual-editor] Proxy listening on http://localhost:${visiblePort}`);
  });

  server.on("upgrade", (req, socket, head) => {
    const url = req.url ?? "";
    if (url.startsWith("/ws") || url.startsWith("/sockjs-node")) {
      wsProxy.upgrade(req, socket, head);
    }
  });

  return server;
}
