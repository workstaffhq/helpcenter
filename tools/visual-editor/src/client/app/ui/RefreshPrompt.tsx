type Props = {
  visible: boolean;
  reason: "save" | "delete" | "modal" | "add" | null;
  onRefresh: () => void;
  onDismiss: () => void;
};

function reasonLabel(reason: Props["reason"]) {
  if (reason === "delete") {
    return "Block deleted.";
  }
  if (reason === "add") {
    return "Block added.";
  }
  if (reason === "modal") {
    return "Markdown saved.";
  }
  return "Changes saved.";
}

export default function RefreshPrompt({ visible, reason, onRefresh, onDismiss }: Props) {
  if (!visible) {
    return null;
  }

  return (
    <div className="ve-refresh-prompt" role="status" aria-live="polite">
      <span>{reasonLabel(reason)} If content did not refresh automatically, click Refresh.</span>
      <div className="actions">
        <button type="button" className="refresh" onClick={onRefresh}>
          Refresh now
        </button>
        <button type="button" className="dismiss" onClick={onDismiss}>
          Dismiss
        </button>
      </div>
    </div>
  );
}
