import { forwardRef, useEffect } from "react";
import { flip, offset, shift, useFloating } from "@floating-ui/react";
import { toVirtualElement } from "./floatingVirtual";

type Props = {
  rect: DOMRect;
  onInline: () => void;
  onMarkdown: () => void;
  onOpen: () => void;
  onDelete: () => void;
  onAdd: () => void;
  setRefs: (refs: { hoverActions?: HTMLDivElement | null; addButton?: HTMLButtonElement | null }) => void;
};

const HoverControls = forwardRef<HTMLDivElement, Props>(function HoverControls(
  { rect, onInline, onMarkdown, onOpen, onDelete, onAdd, setRefs },
  _ref
) {
  const topFloating = useFloating({
    placement: "top-start",
    middleware: [offset(8), flip(), shift({ padding: 8 })]
  });

  const bottomFloating = useFloating({
    placement: "bottom-start",
    middleware: [offset(8), flip(), shift({ padding: 8 })]
  });

  useEffect(() => {
    const virtual = toVirtualElement(rect);
    if (virtual) {
      topFloating.refs.setPositionReference(virtual);
      bottomFloating.refs.setPositionReference(virtual);
      void topFloating.update();
      void bottomFloating.update();
    }
  }, [rect, topFloating.refs, topFloating.update, bottomFloating.refs, bottomFloating.update]);

  return (
    <>
      <div
        id="visual-editor-hover-outline"
        style={{
          display: "block",
          top: `${rect.top}px`,
          left: `${rect.left}px`,
          width: `${rect.width}px`,
          height: `${rect.height}px`
        }}
      />

      <div
        id="visual-editor-hover-actions"
        ref={(node) => {
          topFloating.refs.setFloating(node);
          setRefs({ hoverActions: node });
        }}
        style={{
          display: "flex",
          position: "fixed",
          top: topFloating.y ?? 0,
          left: topFloating.x ?? 0
        }}
      >
        <button type="button" className="inline" onClick={onInline}>
          Edit Inline
        </button>
        <button type="button" className="markdown" onClick={onMarkdown}>
          Edit Markdown
        </button>
        <button type="button" className="open" onClick={onOpen}>
          Open in IDE
        </button>
        <button type="button" className="delete" onClick={onDelete}>
          Delete Block
        </button>
      </div>

      <button
        id="visual-editor-add-block-btn"
        ref={(node) => {
          bottomFloating.refs.setFloating(node);
          setRefs({ addButton: node });
        }}
        type="button"
        style={{
          display: "inline-flex",
          position: "fixed",
          top: bottomFloating.y ?? 0,
          left: bottomFloating.x ?? 0
        }}
        onClick={onAdd}
      >
        + Add block
      </button>
    </>
  );
});

export default HoverControls;
