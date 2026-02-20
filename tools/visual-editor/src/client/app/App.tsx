import * as Tooltip from "@radix-ui/react-tooltip";
import { useMemo } from "react";
import { useEditorController } from "./controller";
import HoverControls from "./ui/HoverControls";
import InlineActions from "./ui/InlineActions";
import LinkDialog from "./ui/LinkDialog";
import MarkdownDialog from "./ui/MarkdownDialog";
import RefreshPrompt from "./ui/RefreshPrompt";
import SelectionPopover from "./ui/SelectionPopover";
import Toolbar from "./ui/Toolbar";

export default function App() {
  const { uiState, actions, formatState, setHoverUiRefs } = useEditorController();

  const showToolbar = uiState.infoLoaded && !!uiState.filePath;
  const showHover = !!uiState.hoverRect && !uiState.inlineSession && !uiState.markdownModalOpen && !uiState.linkModalOpen;
  const showInlineActions = !!uiState.inlineRect && !!uiState.inlineSession;
  const showSelectionPopover = !!uiState.selectionRect && !!uiState.inlineSession && !uiState.markdownModalOpen && !uiState.linkModalOpen;

  const locale = uiState.locale;

  const activeTag = useMemo(() => formatState.tag, [formatState.tag]);

  return (
    <Tooltip.Provider delayDuration={250}>
      {showToolbar ? (
        <Tooltip.Root>
          <Tooltip.Trigger asChild>
            <div>
              <Toolbar
                ref={(node) => setHoverUiRefs({ toolbar: node })}
                enabled={uiState.enabled}
                locale={locale}
                inline={!!uiState.inlineSession}
                openDisabled={!uiState.filePath}
                onToggle={actions.toggleEnabled}
                onOpen={() => {
                  void actions.openInIde(1);
                }}
              />
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content side="top" sideOffset={6} className="ve-tooltip">
              Local visual editor controls
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      ) : null}

      {showHover && uiState.hoverRect ? (
        <HoverControls
          rect={uiState.hoverRect}
          onInline={() => {
            void actions.startInlineFromHover();
          }}
          onMarkdown={() => {
            void actions.openMarkdownFromHover();
          }}
          onOpen={() => {
            void actions.openSectionInIdeFromHover();
          }}
          onDelete={() => {
            void actions.deleteHoverSection();
          }}
          onAdd={() => {
            if (uiState.hovered) {
              void actions.addBlockAfter(uiState.hovered);
            }
          }}
          setRefs={(refs) => setHoverUiRefs(refs)}
        />
      ) : null}

      {showInlineActions && uiState.inlineRect && uiState.inlineSession ? (
        <InlineActions
          rect={uiState.inlineRect}
          saving={uiState.inlineSession.saving}
          onSave={() => {
            void actions.saveInlineEditor({ auto: false });
          }}
          onCancel={() => actions.clearInlineSession({ restoreOriginalHtml: true })}
          onMarkdown={() => {
            void actions.openMarkdownFromInline();
          }}
          onOpen={() => {
            const lineStart = uiState.inlineSession?.location?.lineStart || 1;
            void actions.openInIde(lineStart);
          }}
          onDelete={() => {
            void actions.deleteInlineSection();
          }}
          setRef={(node) => setHoverUiRefs({ inlineActions: node })}
        />
      ) : null}

      {showSelectionPopover && uiState.selectionRect ? (
        <SelectionPopover
          rect={uiState.selectionRect}
          canFormat={formatState.canFormat}
          tag={activeTag}
          isUnordered={formatState.isUnordered}
          isOrdered={formatState.isOrdered}
          onFormatBlock={(tag) => actions.runSelectionCommand("formatBlock", tag)}
          onBold={() => actions.runSelectionCommand("bold")}
          onItalic={() => actions.runSelectionCommand("italic")}
          onUl={() => actions.runSelectionCommand("insertUnorderedList")}
          onOl={() => actions.runSelectionCommand("insertOrderedList")}
          onLink={() => actions.openLinkModal()}
          setRef={(node) => setHoverUiRefs({ selectionPopover: node })}
        />
      ) : null}

      <MarkdownDialog
        open={uiState.markdownModalOpen}
        value={uiState.markdownValue}
        onValueChange={actions.setMarkdownValue}
        onSave={() => {
          void actions.saveMarkdownModal();
        }}
        onClose={actions.closeMarkdownModal}
      />

      <LinkDialog
        open={uiState.linkModalOpen}
        mode={uiState.linkMode}
        url={uiState.linkUrl}
        search={uiState.linkSearch}
        pagesLoading={uiState.linkPagesLoading}
        pagesError={uiState.linkPagesError}
        filteredPages={uiState.linkFilteredPages}
        activeIndex={uiState.linkActiveIndex}
        selectedPage={uiState.linkSelectedPage}
        onClose={actions.closeLinkModal}
        onMode={(mode) => {
          actions.setLinkMode(mode);
          if (mode === "page") {
            void actions.loadLinkPages();
          }
        }}
        onUrlChange={actions.setLinkUrl}
        onSearchChange={actions.setLinkSearch}
        onRetry={() => {
          void actions.loadLinkPages({ force: true });
        }}
        onSetActiveIndex={actions.setLinkActiveIndex}
        onSelectPage={actions.setLinkSelectedPage}
        onApplyUrl={actions.applyLinkFromUrlMode}
        onApplyPage={actions.applyLinkFromPageSelection}
        onUnlink={actions.unlinkSelection}
        onLoadPages={actions.loadLinkPages}
      />

      <RefreshPrompt
        visible={uiState.refreshPromptVisible}
        reason={uiState.refreshPromptReason}
        onRefresh={actions.refreshNow}
        onDismiss={actions.dismissRefreshPrompt}
      />
    </Tooltip.Provider>
  );
}
