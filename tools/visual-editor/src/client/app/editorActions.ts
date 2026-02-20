import {
  activeLinkHrefInSelection,
  currentFormatTag,
  getQueryListStates,
  isDocsPathname,
  isExternalHref,
  normalizedPathname,
  resolveInternalRouteFromHref
} from "./editorDom";
import type { EditorLocale, EditorUiState, FileLocation, InlineSession, LinkPage, SectionRef } from "./types";

type StateApi = {
  getState: () => EditorUiState;
  setState: (next: Partial<EditorUiState> | ((prev: EditorUiState) => EditorUiState)) => void;
  setLoadInfoRetry: (timer: number | null) => void;
  getLoadInfoRetry: () => number | null;
};

type ApiSuccess<TPayload> = {
  success: true;
  payload: TPayload;
  message?: string;
};

type ApiFailure = {
  success: false;
  payload: null;
  message?: string;
};

type InfoResponse = ApiSuccess<{ filePath: string; locale: EditorLocale }> | ApiFailure;

type SectionInfoResponse =
  | ApiSuccess<{
      markdown: string;
      location: FileLocation;
      type: string;
      unsupported: boolean;
      canInlineEdit: boolean;
      inlineReason: string | null;
    }>
  | ApiFailure;

type SubmitResponse = ApiSuccess<{ filePath: string }> | ApiFailure;
type PagesResponse = ApiSuccess<{ pages: LinkPage[] }> | ApiFailure;
type HtmlToMarkdownResponse = ApiSuccess<{ markdown: string }> | ApiFailure;
type OpenInIdeResponse = { success: boolean; message?: string };

async function postJson<TResponse>(path: string, body: unknown): Promise<TResponse> {
  const response = await fetch(path, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  return response.json() as Promise<TResponse>;
}

function updateState(api: StateApi, partial: Partial<EditorUiState>) {
  api.setState((prev) => ({ ...prev, ...partial }));
}

function restoreSelectionRange(state: EditorUiState): boolean {
  if (!state.selectionRange) {
    return false;
  }

  const selection = window.getSelection();
  if (!selection) {
    return false;
  }

  selection.removeAllRanges();
  selection.addRange(state.selectionRange);
  return true;
}

async function resolveSectionInfo(filePath: string, section: SectionRef): Promise<SectionInfoResponse> {
  return postJson<SectionInfoResponse>("/__visual-editor/section-info", {
    filePath,
    htmlTag: section.element.localName,
    outerText: section.element.innerText,
    sectionIndex: section.sectionIndex
  });
}

function deriveFilteredPages({
  pages,
  search,
  activeIndex,
  selectedPage
}: {
  pages: LinkPage[];
  search: string;
  activeIndex: number;
  selectedPage: LinkPage | null;
}) {
  const query = search.trim().toLowerCase();
  const filteredPages = !query
    ? pages.slice(0, 80)
    : pages
        .filter((page) => [page.title, page.href, page.docId].some((field) => field.toLowerCase().includes(query)))
        .slice(0, 80);

  const linkActiveIndex =
    filteredPages.length === 0
      ? -1
      : activeIndex < 0 || activeIndex >= filteredPages.length
        ? 0
        : activeIndex;

  const selectedStillVisible =
    selectedPage &&
    filteredPages.some(
      (page) => page.routePath === selectedPage.routePath && page.insertHref === selectedPage.insertHref
    );

  return {
    linkFilteredPages: filteredPages,
    linkActiveIndex,
    linkSelectedPage: selectedStillVisible ? selectedPage : null
  };
}

export function createEditorActions(api: StateApi) {
  let refreshPromptTimer: number | null = null;

  function clearRefreshPromptTimer() {
    if (!refreshPromptTimer) {
      return;
    }
    window.clearTimeout(refreshPromptTimer);
    refreshPromptTimer = null;
  }

  function clearRefreshPrompt() {
    clearRefreshPromptTimer();
    updateState(api, {
      refreshPromptVisible: false,
      refreshPromptReason: null
    });
  }

  function scheduleRefreshPrompt(reason: "save" | "delete" | "modal" | "add") {
    clearRefreshPromptTimer();
    refreshPromptTimer = window.setTimeout(() => {
      const state = api.getState();
      if (!state.pendingExternalRefresh) {
        return;
      }

      updateState(api, {
        refreshPromptVisible: true,
        refreshPromptReason: reason
      });
    }, 2000);
  }

  function markSubmitSuccess(reason: "save" | "delete" | "modal" | "add") {
    clearRefreshPrompt();
    updateState(api, {
      pendingExternalRefresh: true,
      lastSuccessfulSubmitAt: Date.now(),
      refreshPromptVisible: false,
      refreshPromptReason: null
    });
    scheduleRefreshPrompt(reason);
  }

  function acknowledgeExternalRefresh() {
    clearRefreshPrompt();
    updateState(api, {
      pendingExternalRefresh: false
    });
  }

  function clearLoadInfoRetry() {
    const timer = api.getLoadInfoRetry();
    if (!timer) {
      return;
    }
    window.clearTimeout(timer);
    api.setLoadInfoRetry(null);
  }

  function scheduleLoadInfoRetry(pathname: string) {
    clearLoadInfoRetry();
    const timer = window.setTimeout(() => {
      if (normalizedPathname(window.location.pathname) !== pathname) {
        return;
      }
      void loadInfo({ force: true });
    }, 1000);
    api.setLoadInfoRetry(timer);
  }

  async function loadInfo({ force = false }: { force?: boolean } = {}) {
    const state = api.getState();
    const pathname = normalizedPathname(window.location.pathname);
    if (state.loadInfoInFlight) {
      return;
    }

    if (!force && state.lastResolvedPathname === pathname) {
      return;
    }

    updateState(api, { loadInfoInFlight: true });

    let result: InfoResponse;
    try {
      result = await postJson<InfoResponse>("/__visual-editor/info", {
        pathname
      });
    } catch {
      updateState(api, {
        loadInfoInFlight: false,
        lastResolvedPathname: null
      });
      if (isDocsPathname(pathname)) {
        scheduleLoadInfoRetry(pathname);
      }
      return;
    }

    updateState(api, {
      loadInfoInFlight: false,
      lastResolvedPathname: pathname,
      infoLoaded: true
    });

    if (!result.success || !result.payload?.filePath) {
      updateState(api, {
        filePath: null,
        locale: "en",
        hovered: null,
        hoverRect: null,
        inlineSession: null,
        inlineRect: null,
        selectionRange: null,
        selectionRect: null,
        markdownModalOpen: false,
        markdownLocation: null,
        linkModalOpen: false
      });

      if (isDocsPathname(pathname)) {
        scheduleLoadInfoRetry(pathname);
      } else {
        clearLoadInfoRetry();
      }
      return;
    }

    clearLoadInfoRetry();
    updateState(api, {
      filePath: result.payload.filePath,
      locale: result.payload.locale === "fr" ? "fr" : "en"
    });
  }

  function setHovered(section: SectionRef | null) {
    if (!section) {
      updateState(api, {
        hovered: null,
        hoverRect: null
      });
      return;
    }

    const rect = section.element.getBoundingClientRect();
    if (rect.width < 20 || rect.height < 20) {
      updateState(api, {
        hovered: null,
        hoverRect: null
      });
      return;
    }

    updateState(api, {
      hovered: section,
      hoverRect: rect
    });
  }

  function refreshPositions() {
    const state = api.getState();

    if (state.hovered) {
      updateState(api, {
        hoverRect: state.hovered.element.getBoundingClientRect()
      });
    }

    if (state.inlineSession) {
      updateState(api, {
        inlineRect: state.inlineSession.element.getBoundingClientRect()
      });
    }
  }

  function clearInlineSession({ restoreOriginalHtml }: { restoreOriginalHtml: boolean }) {
    const state = api.getState();
    if (!state.inlineSession) {
      return;
    }

    const { element, originalHtml, onBlur, isTransient } = state.inlineSession;
    if (restoreOriginalHtml) {
      element.innerHTML = originalHtml;
    }

    element.removeAttribute("contenteditable");
    element.classList.remove("visual-editor-inline-active");
    if (isTransient && !element.textContent?.trim()) {
      element.remove();
    }

    if (onBlur) {
      element.removeEventListener("blur", onBlur);
    }

    updateState(api, {
      inlineSession: null,
      inlineRect: null,
      selectionRange: null,
      selectionRect: null
    });
  }

  function updateSelectionRect() {
    const state = api.getState();
    if (!state.inlineSession || state.markdownModalOpen || state.linkModalOpen) {
      if (state.selectionRect || state.selectionRange) {
        updateState(api, {
          selectionRect: null,
          selectionRange: state.linkModalOpen ? state.selectionRange : null
        });
      }
      return;
    }

    const selection = window.getSelection();
    if (!selection || selection.rangeCount === 0 || selection.isCollapsed) {
      updateState(api, {
        selectionRange: null,
        selectionRect: null
      });
      return;
    }

    const range = selection.getRangeAt(0);
    const common = range.commonAncestorContainer;
    const container = common.nodeType === Node.ELEMENT_NODE ? (common as Element) : common.parentElement;
    if (!container || !state.inlineSession.element.contains(container)) {
      updateState(api, {
        selectionRange: null,
        selectionRect: null
      });
      return;
    }

    const rect = range.getBoundingClientRect();
    if (rect.width === 0 && rect.height === 0) {
      updateState(api, {
        selectionRange: null,
        selectionRect: null
      });
      return;
    }

    updateState(api, {
      selectionRange: range.cloneRange(),
      selectionRect: rect
    });
  }

  function runSelectionCommand(command: string, value?: string) {
    const state = api.getState();
    if (!state.inlineSession) {
      return;
    }

    const restored = restoreSelectionRange(state);
    if (!restored) {
      return;
    }

    document.execCommand(command, false, value);
    state.inlineSession.element.focus();
    updateSelectionRect();
  }

  async function openInIde(lineStart: number) {
    const state = api.getState();
    if (!state.filePath) {
      return;
    }

    await postJson<OpenInIdeResponse>("/__visual-editor/open", {
      fileNamePath: state.filePath,
      lineStart
    });
  }

  async function saveMarkdownModal() {
    const state = api.getState();
    if (!state.markdownLocation) {
      return;
    }

    const response = await postJson<SubmitResponse>("/__visual-editor/submit", {
      location: state.markdownLocation,
      markdown: state.markdownValue
    });

    if (!response.success) {
      alert(response.message || "Failed to save section.");
      return;
    }

    updateState(api, {
      markdownModalOpen: false,
      markdownLocation: null,
      markdownValue: ""
    });
    markSubmitSuccess("modal");
  }

  async function openMarkdownEditorForSection(section: SectionRef) {
    const state = api.getState();
    if (!state.filePath) {
      return;
    }

    const response = await resolveSectionInfo(state.filePath, section);
    if (!response.success) {
      alert(response.message || "Could not resolve selected section in source file.");
      return;
    }

    updateState(api, {
      markdownModalOpen: true,
      markdownLocation: response.payload.location,
      markdownValue: response.payload.markdown || ""
    });
  }

  async function deleteSection(section: SectionRef) {
    const state = api.getState();
    if (section?.element?.classList?.contains("visual-editor-transient-block")) {
      section.element.remove();
      return;
    }

    if (!state.filePath) {
      return;
    }

    const proceed = window.confirm("Delete this block?");
    if (!proceed) {
      return;
    }

    const response = await resolveSectionInfo(state.filePath, section);
    if (!response.success || !response.payload?.location) {
      alert(response.message || "Could not resolve selected section in source file.");
      return;
    }

    const submit = await postJson<SubmitResponse>("/__visual-editor/submit", {
      location: response.payload.location,
      markdown: ""
    });

    if (!submit.success) {
      alert(submit.message || "Failed to delete block.");
      return;
    }

    if (section.element?.isConnected) {
      section.element.remove();
    }

    updateState(api, {
      hovered: null,
      hoverRect: null,
      selectionRange: null,
      selectionRect: null
    });
    markSubmitSuccess("delete");
  }

  async function addBlockAfter(section: SectionRef) {
    const state = api.getState();
    if (!state.filePath) {
      return;
    }

    const anchor = await resolveSectionInfo(state.filePath, section);
    if (!anchor.success || !anchor.payload?.location) {
      alert(anchor.message || "Could not resolve insertion point for new block.");
      return;
    }

    const newBlock = document.createElement("p");
    newBlock.className = "visual-editor-transient-block";
    newBlock.innerHTML = "&nbsp;";
    section.element.insertAdjacentElement("afterend", newBlock);

    const transientSection: SectionRef = {
      element: newBlock,
      sectionIndex: section.sectionIndex + 1
    };

    const onBlur = () => {
      setTimeout(async () => {
        const fresh = api.getState();
        if (!fresh.inlineSession || fresh.inlineSession.element !== newBlock || fresh.inlineSession.saving) {
          return;
        }

        const active = document.activeElement;
        if (
          active instanceof HTMLElement &&
          (active.closest("#visual-editor-inline-actions") ||
            active.closest("#visual-editor-selection-popover") ||
            active.closest(".format-select-content") ||
            active.closest("[data-ve-dialog]"))
        ) {
          return;
        }

        await saveInlineEditor({ auto: true });
      }, 0);
    };

    const inlineSession: InlineSession = {
      element: newBlock,
      section: transientSection,
      anchorSection: section,
      anchorLocation: anchor.payload.location,
      anchorMarkdown: anchor.payload.markdown || "",
      location: null,
      originalHtml: "&nbsp;",
      originalMarkdown: "",
      saving: false,
      onBlur,
      isTransient: true
    };

    newBlock.setAttribute("contenteditable", "true");
    newBlock.classList.add("visual-editor-inline-active");
    newBlock.addEventListener("blur", onBlur);
    newBlock.focus();

    updateState(api, {
      hovered: null,
      hoverRect: null,
      inlineSession,
      inlineRect: newBlock.getBoundingClientRect()
    });
  }

  async function saveInlineEditor({ auto }: { auto: boolean }) {
    const initialState = api.getState();
    if (!initialState.inlineSession || initialState.inlineSession.saving) {
      return;
    }

    const changed = initialState.inlineSession.element.innerHTML !== initialState.inlineSession.originalHtml;
    if (!changed && !initialState.inlineSession.isTransient) {
      clearInlineSession({ restoreOriginalHtml: false });
      return;
    }

    api.setState((prev) => {
      if (!prev.inlineSession) {
        return prev;
      }
      return {
        ...prev,
        inlineSession: {
          ...prev.inlineSession,
          saving: true
        }
      };
    });

    const html = initialState.inlineSession.element.innerHTML;
    const conversion = await postJson<HtmlToMarkdownResponse>("/__visual-editor/html-to-markdown", {
      html,
      context: {
        originalMarkdown: initialState.inlineSession.originalMarkdown,
        htmlTag: initialState.inlineSession.section.element.localName
      }
    });

    api.setState((prev) => {
      if (!prev.inlineSession) {
        return prev;
      }
      return {
        ...prev,
        inlineSession: {
          ...prev.inlineSession,
          saving: false
        }
      };
    });

    if (!conversion.success || conversion.payload?.markdown === undefined || conversion.payload?.markdown === null) {
      if (!auto) {
        alert(conversion.message || "Could not convert inline edit to Markdown.");
      }
      return;
    }

    const currentState = api.getState();
    if (!currentState.inlineSession) {
      return;
    }

    let submit: SubmitResponse;
    const isTransient = currentState.inlineSession.isTransient;
    if (isTransient) {
      let anchorLocation = currentState.inlineSession.anchorLocation;
      let anchorMarkdown = currentState.inlineSession.anchorMarkdown || "";

      if (!anchorLocation && currentState.inlineSession.anchorSection && currentState.filePath) {
        const anchor = await resolveSectionInfo(currentState.filePath, currentState.inlineSession.anchorSection);
        if (anchor.success && anchor.payload?.location) {
          anchorLocation = anchor.payload.location;
          anchorMarkdown = anchor.payload.markdown || "";
        }
      }

      if (!anchorLocation) {
        if (!auto) {
          alert("Could not resolve insertion point for new block.");
        }
        return;
      }

      const merged = `${anchorMarkdown}\n\n${conversion.payload.markdown}`.trim();
      submit = await postJson<SubmitResponse>("/__visual-editor/submit", {
        location: anchorLocation,
        markdown: merged
      });
    } else {
      submit = await postJson<SubmitResponse>("/__visual-editor/submit", {
        location: currentState.inlineSession.location,
        markdown: conversion.payload.markdown
      });
    }

    if (!submit.success) {
      if (!auto) {
        alert(submit.message || "Failed to save section.");
      }
      return;
    }

    clearInlineSession({ restoreOriginalHtml: false });
    markSubmitSuccess(isTransient ? "add" : "save");
  }

  async function startInlineEditor(section: SectionRef) {
    const state = api.getState();
    if (!state.filePath || state.inlineSession) {
      return;
    }

    const response = await resolveSectionInfo(state.filePath, section);
    if (!response.success) {
      alert(response.message || "Could not resolve selected section in source file.");
      return;
    }

    if (!response.payload.canInlineEdit) {
      alert(response.payload.inlineReason || "Inline editing not supported for this block. Use Edit Markdown.");
      return;
    }

    const element = section.element;

    const onBlur = () => {
      setTimeout(async () => {
        const fresh = api.getState();
        if (!fresh.inlineSession || fresh.inlineSession.element !== element || fresh.inlineSession.saving) {
          return;
        }

        const active = document.activeElement;
        if (
          active instanceof HTMLElement &&
          (active.closest("#visual-editor-inline-actions") ||
            active.closest("#visual-editor-selection-popover") ||
            active.closest(".format-select-content") ||
            active.closest("[data-ve-dialog]"))
        ) {
          return;
        }

        await saveInlineEditor({ auto: true });
      }, 0);
    };

    const inlineSession: InlineSession = {
      element,
      section,
      location: response.payload.location,
      originalHtml: element.innerHTML,
      originalMarkdown: response.payload.markdown,
      saving: false,
      onBlur,
      isTransient: false
    };

    element.setAttribute("contenteditable", "true");
    element.classList.add("visual-editor-inline-active");
    element.addEventListener("blur", onBlur);
    element.focus();

    updateState(api, {
      hovered: null,
      hoverRect: null,
      inlineSession,
      inlineRect: element.getBoundingClientRect()
    });
  }

  async function startInlineFromHover() {
    const state = api.getState();
    if (!state.hovered) {
      return;
    }
    await startInlineEditor(state.hovered);
  }

  async function openMarkdownFromHover() {
    const state = api.getState();
    if (!state.hovered) {
      return;
    }
    await openMarkdownEditorForSection(state.hovered);
  }

  async function openSectionInIdeFromHover() {
    const state = api.getState();
    if (!state.hovered || !state.filePath) {
      return;
    }

    const response = await resolveSectionInfo(state.filePath, state.hovered);
    if (!response.success) {
      alert(response.message || "Could not resolve selected section in source file.");
      return;
    }

    await openInIde(response.payload?.location?.lineStart || 1);
  }

  async function deleteHoverSection() {
    const state = api.getState();
    if (!state.hovered) {
      return;
    }

    await deleteSection(state.hovered);
  }

  async function openMarkdownFromInline() {
    const state = api.getState();
    if (!state.inlineSession) {
      return;
    }

    if (state.inlineSession.isTransient) {
      alert("Edit Markdown is available after saving the new block.");
      return;
    }

    const changed = state.inlineSession.element.innerHTML !== state.inlineSession.originalHtml;
    if (changed) {
      const proceed = window.confirm("You have unsaved inline changes. Open Edit Markdown and discard inline changes?");
      if (!proceed) {
        return;
      }
    }

    const section = state.inlineSession.section;
    clearInlineSession({ restoreOriginalHtml: true });
    await openMarkdownEditorForSection(section);
  }

  async function deleteInlineSection() {
    const state = api.getState();
    if (!state.inlineSession) {
      return;
    }

    const section = state.inlineSession.section;
    clearInlineSession({ restoreOriginalHtml: true });
    await deleteSection(section);
  }

  function openLinkModal() {
    const state = api.getState();
    if (!state.inlineSession || !state.selectionRange) {
      return;
    }

    const href = activeLinkHrefInSelection() || "";
    const startsAsExternal = isExternalHref(href);

    updateState(api, {
      linkMode: startsAsExternal ? "url" : "page",
      linkUrl: startsAsExternal ? href : "https://",
      linkSearch: startsAsExternal ? "" : href,
      linkSelectedPage: null,
      linkActiveIndex: -1,
      linkModalOpen: true,
      selectionRect: null
    });

    if (!startsAsExternal) {
      void loadLinkPages().then(() => {
        const current = api.getState();
        const normalizedRoute = resolveInternalRouteFromHref(href);
        if (normalizedRoute && current.linkFilteredPages.length) {
          const idx = current.linkFilteredPages.findIndex((page) => page.routePath === normalizedRoute);
          if (idx >= 0) {
            updateState(api, {
              linkActiveIndex: idx,
              linkSelectedPage: current.linkFilteredPages[idx]
            });
          }
        }
      });
    }
  }

  function closeLinkModal() {
    updateState(api, {
      linkModalOpen: false,
      linkSelectedPage: null,
      linkActiveIndex: -1
    });

    const state = api.getState();
    if (state.inlineSession) {
      state.inlineSession.element.focus();
      updateSelectionRect();
    }
  }

  function setLinkMode(mode: "url" | "page") {
    updateState(api, {
      linkMode: mode
    });
  }

  function filterLinkPages() {
    api.setState((prev) => ({
      ...prev,
      ...deriveFilteredPages({
        pages: prev.linkPages,
        search: prev.linkSearch,
        activeIndex: prev.linkActiveIndex,
        selectedPage: prev.linkSelectedPage
      })
    }));
  }

  async function loadLinkPages({ force = false }: { force?: boolean } = {}) {
    const state = api.getState();
    if (!force && (state.linkPagesLoaded || state.linkPagesLoading)) {
      return;
    }

    updateState(api, {
      linkPagesLoading: true,
      linkPagesError: null
    });

    try {
      const response = await postJson<PagesResponse>("/__visual-editor/pages", {
        locale: state.locale === "fr" ? "fr" : "en",
        currentPathname: normalizedPathname(window.location.pathname)
      });

      if (!response.success || !Array.isArray(response.payload?.pages)) {
        throw new Error(response.message || "Failed to load pages.");
      }

      api.setState((prev) => ({
        ...prev,
        linkPages: response.payload.pages,
        linkPagesLoaded: true,
        linkPagesLoading: false,
        linkPagesError: null,
        ...deriveFilteredPages({
          pages: response.payload.pages,
          search: prev.linkSearch,
          activeIndex: prev.linkActiveIndex,
          selectedPage: prev.linkSelectedPage
        })
      }));
    } catch (error: unknown) {
      api.setState((prev) => ({
        ...prev,
        linkPages: [],
        linkPagesLoaded: false,
        linkPagesLoading: false,
        linkPagesError: String(error instanceof Error ? error.message : error || "Failed to load pages."),
        ...deriveFilteredPages({
          pages: [],
          search: prev.linkSearch,
          activeIndex: prev.linkActiveIndex,
          selectedPage: prev.linkSelectedPage
        })
      }));
    }
  }

  function setLinkSearch(search: string) {
    api.setState((prev) => ({
      ...prev,
      linkSearch: search,
      ...deriveFilteredPages({
        pages: prev.linkPages,
        search,
        activeIndex: prev.linkActiveIndex,
        selectedPage: prev.linkSelectedPage
      })
    }));
  }

  function setLinkActiveIndex(index: number) {
    const state = api.getState();
    if (!state.linkFilteredPages.length) {
      return;
    }

    const bounded = Math.max(0, Math.min(state.linkFilteredPages.length - 1, index));
    if (bounded === state.linkActiveIndex) {
      return;
    }

    updateState(api, {
      linkActiveIndex: bounded
    });
  }

  function setLinkSelectedPage(page: LinkPage | null) {
    const state = api.getState();
    if (!page) {
      if (!state.linkSelectedPage) {
        return;
      }
      updateState(api, { linkSelectedPage: null });
      return;
    }

    if (
      state.linkSelectedPage?.routePath === page.routePath &&
      state.linkSelectedPage?.insertHref === page.insertHref
    ) {
      return;
    }

    updateState(api, {
      linkSelectedPage: page
    });
  }

  function applyLinkFromUrlMode() {
    const state = api.getState();
    const href = state.linkUrl.trim();
    if (!href) {
      return;
    }

    runSelectionCommand("createLink", href);
    closeLinkModal();
  }

  function applyLinkFromPageSelection(pageOverride?: LinkPage) {
    const state = api.getState();
    const selected = pageOverride || state.linkSelectedPage;
    if (!selected) {
      return;
    }

    runSelectionCommand("createLink", selected.insertHref || selected.href);
    closeLinkModal();
  }

  function unlinkSelection() {
    runSelectionCommand("unlink");
    closeLinkModal();
  }

  function getFormatState() {
    const state = api.getState();
    const tag = currentFormatTag({
      selectionRange: state.selectionRange,
      inlineRoot: state.inlineSession?.element ?? null
    });
    const list = getQueryListStates();

    return {
      canFormat: !!state.inlineSession && !!state.selectionRange,
      tag,
      isUnordered: list.isUnordered,
      isOrdered: list.isOrdered
    };
  }

  function toggleEnabled() {
    const state = api.getState();
    const enabled = !state.enabled;
    if (!enabled) {
      closeLinkModal();
      clearInlineSession({ restoreOriginalHtml: false });
      updateState(api, {
        hovered: null,
        hoverRect: null
      });
    }

    updateState(api, {
      enabled
    });
  }

  return {
    loadInfo,
    clearLoadInfoRetry,
    scheduleLoadInfoRetry,
    setHovered,
    refreshPositions,
    clearInlineSession,
    updateSelectionRect,
    runSelectionCommand,
    openInIde,
    saveMarkdownModal,
    openMarkdownEditorForSection,
    deleteSection,
    addBlockAfter,
    saveInlineEditor,
    startInlineEditor,
    startInlineFromHover,
    openMarkdownFromHover,
    openSectionInIdeFromHover,
    deleteHoverSection,
    openMarkdownFromInline,
    deleteInlineSection,
    openLinkModal,
    closeLinkModal,
    setLinkMode,
    filterLinkPages,
    loadLinkPages,
    setLinkSearch,
    setLinkActiveIndex,
    setLinkSelectedPage,
    applyLinkFromUrlMode,
    applyLinkFromPageSelection,
    unlinkSelection,
    getFormatState,
    toggleEnabled,
    markSubmitSuccess,
    clearRefreshPrompt,
    scheduleRefreshPrompt,
    acknowledgeExternalRefresh,
    dismissRefreshPrompt: () =>
      updateState(api, {
        refreshPromptVisible: false,
        refreshPromptReason: null
      }),
    refreshNow: () => window.location.reload(),
    setMarkdownValue: (value: string) => updateState(api, { markdownValue: value }),
    closeMarkdownModal: () => updateState(api, { markdownModalOpen: false, markdownLocation: null }),
    setLinkUrl: (value: string) => updateState(api, { linkUrl: value })
  };
}
