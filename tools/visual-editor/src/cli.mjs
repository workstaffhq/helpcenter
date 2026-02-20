import { spawn } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";
import fs from "node:fs";
import open from "open";
import { getPortPromise } from "portfinder";
import { startProxyServer } from "./server.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function readPackageJson(projectRoot) {
  const packageJsonPath = path.join(projectRoot, "package.json");
  return JSON.parse(fs.readFileSync(packageJsonPath, "utf8"));
}

const DOCUSAURUS_CONFIG_CANDIDATES = [
  "docusaurus.config.ts",
  "docusaurus.config.mts",
  "docusaurus.config.cts",
  "docusaurus.config.js",
  "docusaurus.config.mjs",
  "docusaurus.config.cjs"
];

function hasDocusaurusConfig(dir) {
  return DOCUSAURUS_CONFIG_CANDIDATES.some((fileName) => fs.existsSync(path.join(dir, fileName)));
}

function findProjectRoot(startDir) {
  let current = startDir;
  let nearestPackageDir = null;

  while (true) {
    if (hasDocusaurusConfig(current)) {
      return current;
    }

    const candidate = path.join(current, "package.json");
    if (!nearestPackageDir && fs.existsSync(candidate)) {
      nearestPackageDir = current;
    }

    const parent = path.dirname(current);
    if (parent === current) {
      if (nearestPackageDir) {
        return nearestPackageDir;
      }
      throw new Error("Could not locate Docusaurus config or package.json from current directory.");
    }
    current = parent;
  }
}

function resolveStartCommand(projectRoot) {
  const packageJson = readPackageJson(projectRoot);
  const scripts = packageJson.scripts ?? {};

  for (const scriptValue of Object.values(scripts)) {
    if (typeof scriptValue === "string" && scriptValue.includes("docusaurus start")) {
      return scriptValue;
    }
  }

  return "docusaurus start --host 0.0.0.0";
}

async function waitForServer(url, timeoutMs = 15000) {
  const start = Date.now();

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(url, { method: "HEAD" });
      if (response.ok) {
        return true;
      }
    } catch {
      // ignore until timeout
    }

    await new Promise((resolve) => setTimeout(resolve, 250));
  }

  return false;
}

function quoteShellArg(value) {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

async function main() {
  const cwd = process.cwd();
  const projectRoot = findProjectRoot(cwd);
  const startCommand = resolveStartCommand(projectRoot);

  const requestedVisiblePort = Number.parseInt(process.env.VISUAL_EDITOR_PORT ?? "3000", 10);
  const visiblePort = await getPortPromise({ port: Number.isNaN(requestedVisiblePort) ? 3000 : requestedVisiblePort, stopPort: 5000 });
  const internalPort = await getPortPromise({ port: 3055, stopPort: 5000 });

  console.log(`[visual-editor] Project root: ${projectRoot}`);
  console.log(`[visual-editor] Proxy port: ${visiblePort}`);
  console.log(`[visual-editor] Docusaurus internal port: ${internalPort}`);

  const rewrittenStart = startCommand.includes("docusaurus start")
    ? startCommand.replace("docusaurus start", `docusaurus start --port ${internalPort} --no-open`)
    : `${startCommand} --port ${internalPort} --no-open`;

  const fullCommand = `npm exec -c ${quoteShellArg(rewrittenStart)}`;

  const docusaurusProcess = spawn(fullCommand, {
    cwd: projectRoot,
    shell: true,
    stdio: ["pipe", "pipe", "pipe"],
    env: {
      ...process.env,
      FORCE_COLOR: "1"
    }
  });

  docusaurusProcess.stdout.on("data", (chunk) => {
    process.stdout.write(chunk);
  });

  docusaurusProcess.stderr.on("data", (chunk) => {
    process.stderr.write(chunk);
  });

  docusaurusProcess.on("exit", (code) => {
    process.exit(code ?? 0);
  });

  process.stdin.on("data", (chunk) => {
    if (docusaurusProcess.stdin.writable) {
      docusaurusProcess.stdin.write(chunk);
    }
  });

  const proxyServer = await startProxyServer({
    projectRoot,
    visiblePort,
    internalPort,
    toolRoot: path.resolve(__dirname, "..")
  });

  const loaded = await waitForServer(`http://localhost:${internalPort}/`);
  if (loaded) {
    await open(`http://localhost:${visiblePort}/`);
  } else {
    console.warn(`[visual-editor] Could not verify that Docusaurus is reachable on port ${internalPort} yet.`);
  }

  const shutdown = () => {
    proxyServer?.close();
    if (!docusaurusProcess.killed) {
      docusaurusProcess.kill("SIGTERM");
    }
  };

  process.on("SIGINT", shutdown);
  process.on("SIGTERM", shutdown);
}

main().catch((error) => {
  console.error("[visual-editor] Failed to start:", error);
  process.exit(1);
});
