import * as Dialog from "@radix-ui/react-dialog";

type Props = {
  open: boolean;
  value: string;
  onValueChange: (value: string) => void;
  onSave: () => void;
  onClose: () => void;
};

export default function MarkdownDialog({ open, value, onValueChange, onSave, onClose }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={(next) => !next && onClose()}>
      <Dialog.Portal>
        <Dialog.Overlay data-ve-dialog className="ve-dialog-overlay" />
        <Dialog.Content data-ve-dialog className="ve-dialog-content" onOpenAutoFocus={(e) => e.preventDefault()}>
          <Dialog.Title className="ve-dialog-title">Edit Markdown Section</Dialog.Title>
          <textarea value={value} onChange={(event) => onValueChange(event.target.value)} />
          <div className="actions">
            <button type="button" className="cancel" onClick={onClose}>
              Cancel
            </button>
            <button type="button" className="save" onClick={onSave}>
              Save
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
