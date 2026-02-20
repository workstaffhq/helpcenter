import type { SectionRef } from "./types";
import {
  normalizedPathname as sharedNormalizedPathname,
  normalizeRoutePathname as sharedNormalizeRoutePathname
} from "../../shared/pathname.js";

export function normalizedPathname(pathname: string): string {
  return sharedNormalizedPathname(pathname);
}

export function isDocsPathname(pathname: string): boolean {
  return pathname === "/docs" || pathname.startsWith("/docs/") || pathname === "/fr/docs" || pathname.startsWith("/fr/docs/");
}

export function normalizeRoutePathname(pathname: string): string {
  return sharedNormalizeRoutePathname(pathname);
}

export function isExternalHref(href: string | null): boolean {
  return /^(https?:\/\/|mailto:|tel:)/i.test(href || "");
}

export function resolveInternalRouteFromHref(href: string | null): string | null {
  if (!href || href.startsWith("#") || isExternalHref(href)) {
    return null;
  }

  try {
    const parsed = new URL(href, window.location.href);
    const normalizedPath = normalizeRoutePathname(parsed.pathname)
      .replace(/\.(md|mdx)$/i, "")
      .replace(/\/index$/i, "");
    return normalizeRoutePathname(normalizedPath);
  } catch {
    return null;
  }
}

export function findEditableSectionFromEventTarget(target: EventTarget | null): SectionRef | null {
  if (!(target instanceof HTMLElement)) {
    return null;
  }

  const markdownRoot = target.closest(".markdown");
  if (!markdownRoot) {
    return null;
  }

  let directChild: HTMLElement | null = target;
  while (directChild && directChild.parentElement !== markdownRoot) {
    directChild = directChild.parentElement;
  }

  if (!directChild) {
    return null;
  }

  const children = Array.from(markdownRoot.children);
  const sectionIndex = children.indexOf(directChild);
  if (sectionIndex < 0) {
    return null;
  }

  return {
    element: directChild,
    sectionIndex
  };
}

export function activeLinkHrefInSelection(): string | null {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  const node = selection.anchorNode;
  if (!node) {
    return null;
  }

  const element = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
  const anchor = element?.closest?.("a");
  return anchor?.getAttribute("href") || null;
}

function formatTagFromNode(node: Node | null): "P" | "H1" | "H2" | "H3" | null {
  if (!node) {
    return null;
  }

  const element = node.nodeType === Node.ELEMENT_NODE ? (node as Element) : node.parentElement;
  const block = element?.closest("h1, h2, h3, p");
  if (!block) {
    return null;
  }

  const tag = block.tagName.toUpperCase();
  if (tag === "P" || tag === "H1" || tag === "H2" || tag === "H3") {
    return tag;
  }

  return null;
}

export function currentFormatTag({
  selectionRange,
  inlineRoot
}: {
  selectionRange?: Range | null;
  inlineRoot?: HTMLElement | null;
} = {}): "P" | "H1" | "H2" | "H3" {
  const selectionTag = formatTagFromNode(selectionRange?.commonAncestorContainer ?? null);
  if (selectionTag) {
    return selectionTag;
  }

  const inlineRootTag =
    inlineRoot && (inlineRoot.tagName === "P" || inlineRoot.tagName === "H1" || inlineRoot.tagName === "H2" || inlineRoot.tagName === "H3")
      ? (inlineRoot.tagName as "P" | "H1" | "H2" | "H3")
      : null;
  if (inlineRootTag) {
    return inlineRootTag;
  }

  const commandTag = (document.queryCommandValue("formatBlock") || "")
    .toString()
    .replace(/[<>]/g, "")
    .toUpperCase();
  if (commandTag === "H1" || commandTag === "H2" || commandTag === "H3") {
    return commandTag;
  }

  return "P";
}

export function getQueryListStates(): { isUnordered: boolean; isOrdered: boolean } {
  let isUnordered = false;
  let isOrdered = false;
  try {
    isUnordered = !!document.queryCommandState("insertUnorderedList");
    isOrdered = !!document.queryCommandState("insertOrderedList");
  } catch {
    // ignore unsupported environments
  }

  return { isUnordered, isOrdered };
}

export function selectionRectInElement(element: HTMLElement): { range: Range; rect: DOMRect } | null {
  const selection = window.getSelection();
  if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
    return null;
  }

  const range = selection.getRangeAt(0);
  const common = range.commonAncestorContainer;
  const container = common.nodeType === Node.ELEMENT_NODE ? (common as Element) : common.parentElement;
  if (!container || !element.contains(container)) {
    return null;
  }

  const rect = range.getBoundingClientRect();
  if (rect.width === 0 && rect.height === 0) {
    return null;
  }

  return { range, rect };
}
