export type EditorLocale = "en" | "fr";

export type SectionRef = {
  element: HTMLElement;
  sectionIndex: number;
};

export type FileLocation = {
  fileNamePath: string;
  lineStart: number;
  lineEnd: number;
};

export type FloatingAnchor = {
  getBoundingClientRect: () => DOMRect;
};

export type LinkPage = {
  title: string;
  href: string;
  routePath: string;
  docId: string;
  insertHref: string;
};

export type InlineSession = {
  element: HTMLElement;
  section: SectionRef;
  location: FileLocation | null;
  originalHtml: string;
  originalMarkdown: string;
  saving: boolean;
  onBlur: (() => void) | null;
  isTransient: boolean;
  anchorSection?: SectionRef;
  anchorLocation?: FileLocation | null;
  anchorMarkdown?: string;
};

export type EditorUiState = {
  enabled: boolean;
  infoLoaded: boolean;
  filePath: string | null;
  locale: EditorLocale;
  hovered: SectionRef | null;
  hoverRect: DOMRect | null;
  inlineSession: InlineSession | null;
  inlineRect: DOMRect | null;
  selectionRange: Range | null;
  selectionRect: DOMRect | null;
  markdownModalOpen: boolean;
  markdownValue: string;
  markdownLocation: FileLocation | null;
  linkModalOpen: boolean;
  linkMode: "url" | "page";
  linkUrl: string;
  linkSearch: string;
  linkPagesLoaded: boolean;
  linkPagesLoading: boolean;
  linkPagesError: string | null;
  linkPages: LinkPage[];
  linkFilteredPages: LinkPage[];
  linkActiveIndex: number;
  linkSelectedPage: LinkPage | null;
  lastResolvedPathname: string | null;
  loadInfoInFlight: boolean;
  pendingExternalRefresh: boolean;
  lastSuccessfulSubmitAt: number | null;
  refreshPromptVisible: boolean;
  refreshPromptReason: "save" | "delete" | "modal" | "add" | null;
};
