import type { InlineSession } from "./types";

export function maybeConvertListFromSpaceKey(event: KeyboardEvent, inlineSession: InlineSession | null): boolean {
  if (!inlineSession) {
    return false;
  }

  if (event.key !== " " || event.metaKey || event.ctrlKey || event.altKey) {
    return false;
  }

  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || !selection.isCollapsed) {
    return false;
  }

  const range = selection.getRangeAt(0);
  const node = range.startContainer;
  if (node.nodeType !== Node.TEXT_NODE) {
    return false;
  }

  const text = node.textContent || "";
  const offset = range.startOffset;
  const before = text.slice(0, offset);
  const linePrefix = before.includes("\n") ? before.slice(before.lastIndexOf("\n") + 1) : before;

  let command: "insertUnorderedList" | "insertOrderedList" | null = null;
  let removeLen = 0;

  if (linePrefix === "-" || linePrefix === "*") {
    command = "insertUnorderedList";
    removeLen = 1;
  } else if (linePrefix === "1.") {
    command = "insertOrderedList";
    removeLen = 2;
  }

  if (!command) {
    return false;
  }

  event.preventDefault();

  const updatedText = text.slice(0, offset - removeLen) + text.slice(offset);
  node.textContent = updatedText;

  const nextOffset = Math.max(0, offset - removeLen);
  const caret = document.createRange();
  caret.setStart(node, nextOffset);
  caret.collapse(true);
  selection.removeAllRanges();
  selection.addRange(caret);

  document.execCommand(command);
  return true;
}

export function isSaveShortcut(event: KeyboardEvent): boolean {
  return (event.metaKey || event.ctrlKey) && event.key === "Enter";
}
