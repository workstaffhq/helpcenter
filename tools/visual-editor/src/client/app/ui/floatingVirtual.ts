export function toVirtualElement(rect: DOMRect | null) {
  if (!rect) {
    return null;
  }

  return {
    getBoundingClientRect: () => rect,
    contextElement: document.body
  };
}
