import * as Select from "@radix-ui/react-select";

type Props = {
  rect: DOMRect;
  canFormat: boolean;
  tag: "P" | "H1" | "H2" | "H3";
  isUnordered: boolean;
  isOrdered: boolean;
  onFormatBlock: (tag: "P" | "H1" | "H2" | "H3") => void;
  onBold: () => void;
  onItalic: () => void;
  onUl: () => void;
  onOl: () => void;
  onLink: () => void;
  setRef: (node: HTMLDivElement | null) => void;
};

const TEXT_STYLE_OPTIONS = [
  { value: "P", label: "Body" },
  { value: "H1", label: "Heading 1" },
  { value: "H2", label: "Heading 2" },
  { value: "H3", label: "Heading 3" }
] as const;

export default function SelectionPopover({
  rect,
  canFormat,
  tag,
  isUnordered,
  isOrdered,
  onFormatBlock,
  onBold,
  onItalic,
  onUl,
  onOl,
  onLink,
  setRef
}: Props) {
  const activeLabel = TEXT_STYLE_OPTIONS.find((option) => option.value === tag)?.label ?? "Body";

  return (
    <div
      id="visual-editor-selection-popover"
      ref={setRef}
      style={{
        display: "flex",
        left: `${Math.max(8, rect.left)}px`,
        top: `${Math.max(8, rect.top - 44)}px`
      }}
    >
      <Select.Root
        value={tag}
        onValueChange={(value) => {
          if (value === "P" || value === "H1" || value === "H2" || value === "H3") {
            onFormatBlock(value);
          }
        }}
        disabled={!canFormat}
      >
        <Select.Trigger
          className="format-select-trigger"
          aria-label="Text style"
          onMouseDown={(event) => event.preventDefault()}
          onPointerDown={(event) => event.preventDefault()}
        >
          <Select.Value>{activeLabel}</Select.Value>
          <Select.Icon className="format-select-icon" aria-hidden>
            ▼
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="format-select-content" position="popper" sideOffset={6}>
            <Select.Viewport className="format-select-viewport">
              {TEXT_STYLE_OPTIONS.map((option) => (
                <Select.Item
                  key={option.value}
                  value={option.value}
                  className="format-select-item"
                  onPointerDown={(event) => event.preventDefault()}
                >
                  <Select.ItemText>{option.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <button type="button" className="format" onMouseDown={(e) => e.preventDefault()} onClick={onBold}>
        B
      </button>
      <button type="button" className="format" onMouseDown={(e) => e.preventDefault()} onClick={onItalic}>
        I
      </button>
      <button
        type="button"
        className={`list ${isUnordered ? "active" : ""}`}
        disabled={!canFormat}
        onMouseDown={(e) => e.preventDefault()}
        onClick={onUl}
      >
        UL
      </button>
      <button
        type="button"
        className={`list ${isOrdered ? "active" : ""}`}
        disabled={!canFormat}
        onMouseDown={(e) => e.preventDefault()}
        onClick={onOl}
      >
        OL
      </button>
      <button type="button" className="link" onMouseDown={(e) => e.preventDefault()} onClick={onLink}>
        Link
      </button>
    </div>
  );
}
