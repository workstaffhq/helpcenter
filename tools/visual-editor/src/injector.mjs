function insertBeforeClosingTag(html, closingTag, snippet) {
  if (!html.includes(closingTag)) {
    return `${html}\n${snippet}`;
  }

  return html.replace(closingTag, `${snippet}\n${closingTag}`);
}

export function injectEditorAssets(html) {
  if (typeof html !== "string") {
    return html;
  }

  let output = html;

  if (!output.includes("/__visual-editor/editor.css")) {
    output = insertBeforeClosingTag(output, "</head>", '<link rel="stylesheet" href="/__visual-editor/editor.css">');
  }

  if (!output.includes('id="__visual_editor_root"')) {
    output = insertBeforeClosingTag(output, "</body>", '<div id="__visual_editor_root"></div>');
  }

  if (!output.includes("/__visual-editor/editor.js")) {
    output = insertBeforeClosingTag(output, "</body>", '<script src="/__visual-editor/editor.js"></script>');
  }

  return output;
}
