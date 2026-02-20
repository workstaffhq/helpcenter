import { forwardRef } from "react";
import type { EditorLocale } from "../types";

type Props = {
  enabled: boolean;
  locale: EditorLocale;
  inline: boolean;
  openDisabled: boolean;
  onToggle: () => void;
  onOpen: () => void;
};

const Toolbar = forwardRef<HTMLDivElement, Props>(function Toolbar(
  { enabled, locale, inline, openDisabled, onToggle, onOpen },
  ref
) {
  return (
    <div id="visual-editor-toolbar" ref={ref} style={{ display: "flex" }}>
      <span className="status">
        {enabled ? `Visual Editor (${locale.toUpperCase()})${inline ? " (inline)" : ""}` : `Visual Editor paused (${locale.toUpperCase()})`}
      </span>
      <button type="button" onClick={onToggle}>
        {enabled ? "Disable" : "Enable"}
      </button>
      <button type="button" onClick={onOpen} disabled={openDisabled}>
        Open in IDE
      </button>
    </div>
  );
});

export default Toolbar;
