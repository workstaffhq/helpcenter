import fs from "node:fs";
import path from "node:path";
import { normalizeRoutePathname as normalizePathname } from "./shared/pathname.js";

function routeCandidates(pathname) {
  const normalized = normalizePathname(pathname);
  if (normalized === "/") {
    return ["/"];
  }

  return [normalized, `${normalized}/`];
}

function getDocsData(projectRoot) {
  const globalDataPath = path.join(projectRoot, ".docusaurus", "globalData.json");
  const globalDataRaw = fs.readFileSync(globalDataPath, "utf8");
  const globalData = JSON.parse(globalDataRaw);

  return {
    globalDataPath,
    docsData: globalData["docusaurus-plugin-content-docs"]
  };
}

function findMatchingDoc(docsData, lookupRoute) {
  if (!docsData) {
    return null;
  }

  for (const instanceKey of Object.keys(docsData)) {
    const instance = docsData[instanceKey];
    const rootPath = instance.path;

    for (const version of instance.versions ?? []) {
      for (const doc of version.docs ?? []) {
        if (doc.path === lookupRoute) {
          return {
            instanceKey,
            rootPath,
            docPath: doc.path
          };
        }
      }
    }
  }

  return null;
}

function dedupe(values) {
  return [...new Set(values)];
}

function makeFileCandidates(basePathNoExt) {
  return dedupe([
    `${basePathNoExt}.md`,
    `${basePathNoExt}.mdx`,
    path.join(basePathNoExt, "index.md"),
    path.join(basePathNoExt, "index.mdx")
  ]);
}

export function resolveLocalFileFromRoute(projectRoot, currentPathname) {
  const normalized = normalizePathname(currentPathname);
  const isFrenchRoute = normalized === "/fr" || normalized.startsWith("/fr/");

  const lookupPathBase = isFrenchRoute
    ? normalized === "/fr"
      ? "/"
      : normalized.replace(/^\/fr/, "") || "/"
    : normalized;

  const { docsData, globalDataPath } = getDocsData(projectRoot);
  const lookupCandidates = routeCandidates(lookupPathBase);

  let matched = null;
  for (const candidate of lookupCandidates) {
    matched = findMatchingDoc(docsData, candidate);
    if (matched) {
      break;
    }
  }

  if (!matched) {
    return {
      success: false,
      reason: "route-not-found-in-docusaurus-global-data",
      diagnostics: {
        currentPathname,
        normalized,
        lookupCandidates,
        globalDataPath
      }
    };
  }

  const docsRelative = matched.docPath.replace(/^\/docs\/?/, "");

  const sourceRoot = isFrenchRoute
    ? path.join(projectRoot, "i18n", "fr", "docusaurus-plugin-content-docs", "current")
    : path.join(projectRoot, "docs");

  const basePath = docsRelative ? path.join(sourceRoot, docsRelative) : sourceRoot;
  const candidateFiles = makeFileCandidates(basePath);
  const existingFile = candidateFiles.find((candidate) => fs.existsSync(candidate));

  if (!existingFile) {
    return {
      success: false,
      reason: "no-matching-markdown-file-on-disk",
      diagnostics: {
        currentPathname,
        normalized,
        lookupCandidates,
        matched,
        candidateFiles
      }
    };
  }

  return {
    success: true,
    locale: isFrenchRoute ? "fr" : "en",
    filePath: existingFile,
    diagnostics: {
      normalized,
      lookupCandidates,
      matched
    }
  };
}

export function normalizeRoutePathname(pathname) {
  return normalizePathname(pathname);
}
