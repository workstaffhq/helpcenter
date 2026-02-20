import { useEffect } from "react";
import { flip, offset, shift, useFloating } from "@floating-ui/react";
import { toVirtualElement } from "./floatingVirtual";

type Props = {
  rect: DOMRect;
  saving: boolean;
  onSave: () => void;
  onCancel: () => void;
  onMarkdown: () => void;
  onOpen: () => void;
  onDelete: () => void;
  setRef: (node: HTMLDivElement | null) => void;
};

export default function InlineActions({ rect, saving, onSave, onCancel, onMarkdown, onOpen, onDelete, setRef }: Props) {
  const floating = useFloating({
    placement: "top-start",
    middleware: [offset(8), flip(), shift({ padding: 8 })]
  });

  useEffect(() => {
    const virtual = toVirtualElement(rect);
    if (virtual) {
      floating.refs.setPositionReference(virtual);
      void floating.update();
    }
  }, [rect, floating.refs, floating.update]);

  return (
    <div
      id="visual-editor-inline-actions"
      ref={(node) => {
        floating.refs.setFloating(node);
        setRef(node);
      }}
      style={{
        display: "flex",
        position: "fixed",
        top: floating.y ?? 0,
        left: floating.x ?? 0
      }}
    >
      <button type="button" className="save" onClick={onSave} disabled={saving}>
        Save
      </button>
      <button type="button" className="cancel" onClick={onCancel}>
        Cancel
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
  );
}
