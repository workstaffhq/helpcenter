import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { findEditableSectionFromEventTarget, normalizedPathname } from "./editorDom";
import { createEditorActions } from "./editorActions";
import { isSaveShortcut, maybeConvertListFromSpaceKey } from "./editorShortcuts";
import type { EditorUiState, SectionRef } from "./types";

const INITIAL_STATE: EditorUiState = {
  enabled: true,
  infoLoaded: false,
  filePath: null,
  locale: "en",
  hovered: null,
  hoverRect: null,
  inlineSession: null,
  inlineRect: null,
  selectionRange: null,
  selectionRect: null,
  markdownModalOpen: false,
  markdownValue: "",
  markdownLocation: null,
  linkModalOpen: false,
  linkMode: "url",
  linkUrl: "https://",
  linkSearch: "",
  linkPagesLoaded: false,
  linkPagesLoading: false,
  linkPagesError: null,
  linkPages: [],
  linkFilteredPages: [],
  linkActiveIndex: -1,
  linkSelectedPage: null,
  lastResolvedPathname: null,
  loadInfoInFlight: false,
  pendingExternalRefresh: false,
  lastSuccessfulSubmitAt: null,
  refreshPromptVisible: false,
  refreshPromptReason: null
};

export function useEditorController() {
  const [uiState, setUiState] = useState<EditorUiState>(INITIAL_STATE);
  const stateRef = useRef(uiState);
  const loadInfoRetryRef = useRef<number | null>(null);

  const interactiveRefs = useRef({
    hoverActions: null as HTMLDivElement | null,
    addButton: null as HTMLButtonElement | null,
    inlineActions: null as HTMLDivElement | null,
    selectionPopover: null as HTMLDivElement | null,
    toolbar: null as HTMLDivElement | null
  });

  const setState = useCallback((next: Partial<EditorUiState> | ((prev: EditorUiState) => EditorUiState)) => {
    setUiState((prev) => {
      const resolved = typeof next === "function" ? next(prev) : { ...prev, ...next };
      stateRef.current = resolved;
      return resolved;
    });
  }, []);

  const actions = useMemo(
    () =>
      createEditorActions({
        getState: () => stateRef.current,
        setState,
        setLoadInfoRetry: (timer) => {
          loadInfoRetryRef.current = timer;
        },
        getLoadInfoRetry: () => loadInfoRetryRef.current
      }),
    [setState]
  );

  const inHoverActionZone = useCallback((mouseX: number, mouseY: number) => {
    const state = stateRef.current;
    if (!state.hoverRect) {
      return false;
    }

    const rect = state.hoverRect;
    const zone = {
      top: rect.top - 48,
      bottom: rect.bottom + 44,
      left: rect.left - 12,
      right: rect.right + 280
    };

    if (mouseX >= zone.left && mouseX <= zone.right && mouseY >= zone.top && mouseY <= zone.bottom) {
      return true;
    }

    const topActions = interactiveRefs.current.hoverActions?.getBoundingClientRect();
    const addButton = interactiveRefs.current.addButton?.getBoundingClientRect();

    const inTopActions =
      !!topActions &&
      mouseX >= topActions.left &&
      mouseX <= topActions.right &&
      mouseY >= topActions.top &&
      mouseY <= topActions.bottom;

    const inAddButton =
      !!addButton && mouseX >= addButton.left && mouseX <= addButton.right && mouseY >= addButton.top && mouseY <= addButton.bottom;

    return inTopActions || inAddButton;
  }, []);

  const isInteractiveEditorElement = useCallback((target: EventTarget | null) => {
    if (!(target instanceof HTMLElement)) {
      return false;
    }

    return !!target.closest(
      "#visual-editor-hover-actions, #visual-editor-toolbar, #visual-editor-inline-actions, #visual-editor-selection-popover, .format-select-content, [data-ve-dialog]"
    );
  }, []);

  useEffect(() => {
    void actions.loadInfo({ force: true });

    const onSelectionChange = () => {
      actions.updateSelectionRect();
    };

    const onMouseMove = (event: MouseEvent) => {
      const state = stateRef.current;
      if (!state.enabled || !state.filePath || state.markdownModalOpen || state.linkModalOpen || state.inlineSession) {
        return;
      }

      if (isInteractiveEditorElement(event.target)) {
        return;
      }

      const section = findEditableSectionFromEventTarget(event.target);
      if (!section) {
        if (inHoverActionZone(event.clientX, event.clientY)) {
          return;
        }

        actions.setHovered(null);
        return;
      }

      actions.setHovered(section);
    };

    const onDblClick = (event: MouseEvent) => {
      const state = stateRef.current;
      if (!state.enabled || !state.filePath || state.markdownModalOpen || state.linkModalOpen || state.inlineSession) {
        return;
      }

      if (isInteractiveEditorElement(event.target)) {
        return;
      }

      const section = findEditableSectionFromEventTarget(event.target);
      if (!section) {
        return;
      }

      event.preventDefault();
      void actions.startInlineEditor(section);
    };

    const onKeyDown = (event: KeyboardEvent) => {
      const state = stateRef.current;
      if (event.isComposing) {
        return;
      }

      if (maybeConvertListFromSpaceKey(event, state.inlineSession)) {
        actions.updateSelectionRect();
        return;
      }

      if (
        state.inlineSession &&
        event.shiftKey &&
        !event.metaKey &&
        !event.ctrlKey &&
        !event.altKey &&
        event.key === "Enter"
      ) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const common = range.commonAncestorContainer;
          const container = common.nodeType === Node.ELEMENT_NODE ? (common as Element) : common.parentElement;
          if (container && state.inlineSession.element.contains(container)) {
            event.preventDefault();
            document.execCommand("insertLineBreak");
            actions.updateSelectionRect();
            return;
          }
        }
      }

      if (isSaveShortcut(event)) {
        if (state.markdownModalOpen && state.markdownLocation) {
          event.preventDefault();
          void actions.saveMarkdownModal();
          return;
        }

        if (state.linkModalOpen) {
          event.preventDefault();
          if (state.linkMode === "page") {
            actions.applyLinkFromPageSelection();
          } else {
            actions.applyLinkFromUrlMode();
          }
          return;
        }

        if (state.inlineSession) {
          event.preventDefault();
          void actions.saveInlineEditor({ auto: false });
          return;
        }
      }

      if (event.key !== "Escape") {
        return;
      }

      if (state.linkModalOpen) {
        event.preventDefault();
        actions.closeLinkModal();
        return;
      }

      if (state.markdownModalOpen) {
        event.preventDefault();
        actions.closeMarkdownModal();
        return;
      }

      if (state.inlineSession && !state.inlineSession.saving) {
        event.preventDefault();
        actions.clearInlineSession({ restoreOriginalHtml: true });
      }
    };

    const onScroll = () => {
      actions.refreshPositions();
      actions.updateSelectionRect();
    };

    const handleRouteChange = () => {
      const pathname = normalizedPathname(window.location.pathname);
      const state = stateRef.current;
      if (state.pendingExternalRefresh) {
        actions.acknowledgeExternalRefresh();
      }
      if (pathname === state.lastResolvedPathname) {
        return;
      }
      void actions.loadInfo({ force: true });
    };

    const markdownRoot = document.querySelector(".markdown");
    let observer: MutationObserver | null = null;
    if (markdownRoot) {
      observer = new MutationObserver(() => {
        if (stateRef.current.pendingExternalRefresh) {
          actions.acknowledgeExternalRefresh();
        }
      });
      observer.observe(markdownRoot, {
        childList: true,
        subtree: true,
        characterData: true
      });
    }

    const originalPushState = history.pushState.bind(history);
    const originalReplaceState = history.replaceState.bind(history);

    history.pushState = (...args) => {
      originalPushState(...args);
      handleRouteChange();
    };

    history.replaceState = (...args) => {
      originalReplaceState(...args);
      handleRouteChange();
    };

    document.addEventListener("selectionchange", onSelectionChange);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("dblclick", onDblClick);
    document.addEventListener("keydown", onKeyDown);
    window.addEventListener("scroll", onScroll);
    window.addEventListener("popstate", handleRouteChange);
    window.addEventListener("hashchange", handleRouteChange);

    const interval = window.setInterval(handleRouteChange, 800);

    return () => {
      actions.clearLoadInfoRetry();
      window.clearInterval(interval);
      observer?.disconnect();
      actions.clearRefreshPrompt();
      history.pushState = originalPushState;
      history.replaceState = originalReplaceState;
      document.removeEventListener("selectionchange", onSelectionChange);
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("dblclick", onDblClick);
      document.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("popstate", handleRouteChange);
      window.removeEventListener("hashchange", handleRouteChange);
    };
  }, [actions, inHoverActionZone, isInteractiveEditorElement]);

  const setHoverUiRefs = useCallback(
    (refs: { hoverActions?: HTMLDivElement | null; addButton?: HTMLButtonElement | null; inlineActions?: HTMLDivElement | null; selectionPopover?: HTMLDivElement | null; toolbar?: HTMLDivElement | null }) => {
      interactiveRefs.current = {
        ...interactiveRefs.current,
        ...refs
      };
    },
    []
  );

  const formatState = actions.getFormatState();

  return {
    uiState,
    actions,
    formatState,
    setHoverUiRefs
  };
}
