import fs from "node:fs";
import { remark } from "remark";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkFrontmatter from "remark-frontmatter";
import remarkDirective from "remark-directive";
import { toString } from "mdast-util-to-string";

function removeMarkdownComments(content) {
  return content.replace(/<!--([\s\S]*?)-->/g, "");
}

function normalizeAdmonitions(content) {
  const lines = content.split("\n");
  const kinds = ["note", "tip", "info", "warning", "danger"];

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    for (const kind of kinds) {
      const prefix = `:::${kind} `;
      if (line.startsWith(prefix)) {
        const title = line.slice(prefix.length).trim();
        if (title) {
          lines[index] = `:::${kind}{title="${title.replace(/"/g, "'")}"}`;
        }
      }
    }
  }

  return lines.join("\n");
}

function similarityScore(a, b) {
  const normalize = (text) =>
    text
      .toLowerCase()
      .replace(/\s+/g, " ")
      .replace(/[^a-z0-9\s]/g, "")
      .trim();

  const left = normalize(a);
  const right = normalize(b);

  if (!left || !right) {
    return 0;
  }

  if (left === right) {
    return 1;
  }

  const leftWords = new Set(left.split(" ").filter(Boolean));
  const rightWords = new Set(right.split(" ").filter(Boolean));

  const allWords = new Set([...leftWords, ...rightWords]);
  let common = 0;
  for (const word of allWords) {
    if (leftWords.has(word) && rightWords.has(word)) {
      common += 1;
    }
  }

  return common / allWords.size;
}

function expectedNodeTypeFromTag(tagName) {
  const map = {
    h1: "heading",
    h2: "heading",
    h3: "heading",
    h4: "heading",
    h5: "heading",
    h6: "heading",
    p: "paragraph",
    ul: "list",
    ol: "list",
    li: "listItem",
    blockquote: "blockquote"
  };

  return map[tagName] ?? null;
}

function unsupportedNode(nodeType) {
  return new Set([
    "code",
    "mdxJsxFlowElement",
    "mdxFlowExpression",
    "containerDirective",
    "leafDirective"
  ]).has(nodeType);
}

function canInlineEditNode(nodeType) {
  return new Set(["paragraph", "heading", "blockquote", "list", "listItem"]).has(nodeType);
}

function getMarkdownAst(content) {
  const parser = remark().use(remarkParse).use(remarkMdx).use(remarkFrontmatter, ["yaml"]).use(remarkDirective);
  return parser.parse(content);
}

export function findSectionInFile({ filePath, sectionIndex, htmlTag, outerText }) {
  const originalContent = fs.readFileSync(filePath, "utf8");
  const parseReady = normalizeAdmonitions(removeMarkdownComments(originalContent));
  const tree = getMarkdownAst(parseReady);

  const topLevelNodes = (tree.children ?? []).filter(
    (node) => node.type !== "mdxjsEsm" && node.type !== "yaml" && node.type !== "toml"
  );
  const expectedType = expectedNodeTypeFromTag(htmlTag);

  const scoredNodes = [];
  for (let idx = 0; idx < topLevelNodes.length; idx += 1) {
    const node = topLevelNodes[idx];
    const typeMatches = expectedType ? node.type === expectedType : true;
    if (!typeMatches) {
      continue;
    }

    const nodeText = toString(node);
    const score = similarityScore(nodeText, outerText);
    const indexDistance = Math.abs(sectionIndex - idx);
    const distancePenalty = Math.min(indexDistance * 0.05, 0.35);
    const adjustedScore = score - distancePenalty;

    scoredNodes.push({
      idx,
      node,
      score,
      adjustedScore
    });
  }

  scoredNodes.sort((a, b) => b.adjustedScore - a.adjustedScore);
  const best = scoredNodes[0];
  const isListContext = expectedType === "list" || expectedType === "listItem";
  const minimumScore = isListContext ? 0.05 : 0.25;

  let chosen = null;
  if (best && best.score >= minimumScore && best.node.position?.start?.line && best.node.position?.end?.line) {
    chosen = best;
  } else if (isListContext && scoredNodes.length > 0) {
    // Lists can be hard to score from rendered text when spacing/markers differ.
    // Fall back to nearest index match when type already matched list/listItem.
    const nearest = [...scoredNodes].sort(
      (a, b) => Math.abs(a.idx - sectionIndex) - Math.abs(b.idx - sectionIndex)
    )[0];
    if (nearest?.node.position?.start?.line && nearest?.node.position?.end?.line) {
      chosen = nearest;
    }
  }

  if (chosen) {
    const sourceLines = originalContent.split("\n");
    const startLine = chosen.node.position.start.line;
    const endLine = chosen.node.position.end.line;
    const markdown = sourceLines.slice(startLine - 1, endLine).join("\n");

    return {
      success: true,
      payload: {
        markdown,
        type: chosen.node.type,
        unsupported: unsupportedNode(chosen.node.type),
        canInlineEdit: canInlineEditNode(chosen.node.type) && !unsupportedNode(chosen.node.type),
        inlineReason:
          canInlineEditNode(chosen.node.type) && !unsupportedNode(chosen.node.type)
            ? null
            : "Inline editing not supported for this block. Use Edit Markdown.",
        location: {
          fileNamePath: filePath,
          lineStart: startLine,
          lineEnd: endLine
        }
      }
    };
  }

  return {
    success: false,
    message: "Could not resolve selected section in source file.",
    payload: null
  };
}

export function submitSectionEdit({ location, markdown }) {
  const originalContent = fs.readFileSync(location.fileNamePath, "utf8");
  const hasCrlf = originalContent.includes("\r\n");

  const lines = originalContent.split(/\r?\n/);
  const start = Math.max(0, location.lineStart - 1);
  const end = Math.max(0, location.lineEnd - 1);

  lines.splice(start, end - start + 1, markdown);

  const joiner = hasCrlf ? "\r\n" : "\n";
  const updatedContent = lines.join(joiner);
  fs.writeFileSync(location.fileNamePath, updatedContent);

  return {
    success: true,
    payload: {
      filePath: location.fileNamePath
    }
  };
}
