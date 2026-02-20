import TurndownService from "turndown";

const turndown = new TurndownService({
  headingStyle: "atx",
  bulletListMarker: "-",
  codeBlockStyle: "fenced",
  emDelimiter: "*",
  strongDelimiter: "**"
});

// Keep links as standard markdown links.
turndown.keep(["a"]);

turndown.addRule("links", {
  filter: "a",
  replacement(content, node) {
    const href = node.getAttribute("href") || "";
    if (!href) {
      return content;
    }
    return `[${content || href}](${href})`;
  }
});

function normalizeLineEndings(text) {
  return text.replace(/\r\n/g, "\n").trim();
}

function normalizeListSpacing(text) {
  return text
    .split("\n")
    .map((line) =>
      line
        .replace(/^(\s*[-*+])\s{2,}/, "$1 ")
        .replace(/^(\s*\d+\.)\s{2,}/, "$1 ")
    )
    .join("\n");
}

export function convertHtmlToMarkdown(html) {
  const markdown = turndown.turndown(html);
  return normalizeListSpacing(normalizeLineEndings(markdown));
}
