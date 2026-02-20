import { useEffect, useMemo, useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import {
  useDismiss,
  useFloating,
  useInteractions,
  useListNavigation,
  useRole,
  type FloatingContext
} from "@floating-ui/react";
import type { LinkPage } from "../types";

type Props = {
  open: boolean;
  mode: "url" | "page";
  url: string;
  search: string;
  pagesLoading: boolean;
  pagesError: string | null;
  filteredPages: LinkPage[];
  activeIndex: number;
  selectedPage: LinkPage | null;
  onClose: () => void;
  onMode: (mode: "url" | "page") => void;
  onUrlChange: (value: string) => void;
  onSearchChange: (value: string) => void;
  onRetry: () => void;
  onSetActiveIndex: (index: number) => void;
  onSelectPage: (page: LinkPage) => void;
  onApplyUrl: () => void;
  onApplyPage: (page?: LinkPage) => void;
  onUnlink: () => void;
  onLoadPages: () => void | Promise<void>;
};

function ResultsList({
  context,
  pages,
  activeIndex,
  selectedPage,
  onSetActiveIndex,
  onSelectPage
}: {
  context: FloatingContext;
  pages: LinkPage[];
  activeIndex: number;
  selectedPage: LinkPage | null;
  onSetActiveIndex: (index: number) => void;
  onSelectPage: (page: LinkPage) => void;
}) {
  const listRef = useRef<Array<HTMLButtonElement | null>>([]);

  const listNavigation = useListNavigation(context, {
    listRef,
    activeIndex,
    onNavigate: (index) => {
      if (typeof index === "number") {
        onSetActiveIndex(index);
      }
    },
    loop: true,
    virtual: false
  });

  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "listbox" });

  const { getFloatingProps, getItemProps } = useInteractions([listNavigation, dismiss, role]);

  return (
    <ul className="page-results" {...getFloatingProps()}>
      {pages.map((page, index) => (
        <li key={`${page.routePath}-${index}`}>
          <button
            type="button"
            ref={(node) => {
              listRef.current[index] = node;
            }}
            className={`result-item ${index === activeIndex ? "active" : ""} ${
              selectedPage?.routePath === page.routePath && selectedPage?.insertHref === page.insertHref
                ? "selected"
                : ""
            }`}
            {...getItemProps({
              onMouseDown: (event) => event.preventDefault(),
              onClick: () => {
                onSetActiveIndex(index);
                onSelectPage(page);
              },
              onMouseEnter: () => onSetActiveIndex(index)
            })}
          >
            <span className="result-title">{page.title}</span>
            <span className="result-href">{page.href}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default function LinkDialog(props: Props) {
  const {
    open,
    mode,
    url,
    search,
    pagesLoading,
    pagesError,
    filteredPages,
    activeIndex,
    selectedPage,
    onClose,
    onMode,
    onUrlChange,
    onSearchChange,
    onRetry,
    onSetActiveIndex,
    onSelectPage,
    onApplyUrl,
    onApplyPage,
    onUnlink,
    onLoadPages
  } = props;

  const floating = useFloating({ open });

  const canApply = mode === "url" ? !!url.trim() : !!selectedPage;

  useEffect(() => {
    if (open && mode === "page") {
      void onLoadPages();
    }
  }, [open, mode, onLoadPages]);

  const results = useMemo(() => {
    if (pagesLoading) {
      return <div className="page-status">Loading pages...</div>;
    }

    if (pagesError) {
      return (
        <>
          <div className="page-status">{pagesError} Use URL mode or retry.</div>
          <button className="retry" type="button" onClick={onRetry}>
            Retry
          </button>
        </>
      );
    }

    if (!filteredPages.length) {
      return <div className="page-status">No matching pages.</div>;
    }

    return (
      <ResultsList
        context={floating.context}
        pages={filteredPages}
        activeIndex={activeIndex}
        selectedPage={selectedPage}
        onSetActiveIndex={onSetActiveIndex}
        onSelectPage={onSelectPage}
      />
    );
  }, [pagesLoading, pagesError, filteredPages, floating.context, activeIndex, onSetActiveIndex, onApplyPage, onRetry]);

  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay data-ve-dialog className="ve-dialog-overlay" />
        <Dialog.Content
          data-ve-dialog
          className="ve-dialog-content ve-link-dialog-content"
          onOpenAutoFocus={(event) => event.preventDefault()}
          onKeyDown={(event) => {
            if (event.key === "Enter" && mode === "url") {
              event.preventDefault();
              onApplyUrl();
            }
          }}
        >
          <Dialog.Title className="ve-dialog-title">Insert Link</Dialog.Title>

          <div className="mode-toggle">
            <button className={`mode-btn mode-url ${mode === "url" ? "active" : ""}`} type="button" onClick={() => onMode("url")}>
              URL
            </button>
            <button className={`mode-btn mode-page ${mode === "page" ? "active" : ""}`} type="button" onClick={() => onMode("page")}>
              Page
            </button>
          </div>

          {mode === "url" ? (
            <div className="mode-panel">
              <label htmlFor="visual-editor-link-url-input">URL</label>
              <input
                id="visual-editor-link-url-input"
                className="url-input"
                type="text"
                value={url}
                placeholder="https://example.com"
                onChange={(event) => onUrlChange(event.target.value)}
              />
            </div>
          ) : (
            <div className="mode-panel">
              <label htmlFor="visual-editor-link-search-input">Search pages</label>
              <input
                id="visual-editor-link-search-input"
                className="search-input"
                type="text"
                value={search}
                placeholder="Search by title, route, or id"
                autoComplete="off"
                onChange={(event) => onSearchChange(event.target.value)}
              />
              {results}
            </div>
          )}

          <div className="actions">
            <button className="remove" type="button" onClick={onUnlink}>
              Remove Link
            </button>
            <button className="cancel" type="button" onClick={onClose}>
              Cancel
            </button>
            <button
              className="save"
              type="button"
              disabled={!canApply}
              onClick={() => {
                if (mode === "page") {
                  onApplyPage();
                } else {
                  onApplyUrl();
                }
              }}
            >
              Apply
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
