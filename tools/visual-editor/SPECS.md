# visual-editor SPECS

Rebuild-oriented specification for `tools/visual-editor`.

## 1. Goal

Provide a local visual editor for Docusaurus docs that supports:

- Section-level inline editing for supported markdown nodes
- Always-available markdown fallback editor for any section
- Deterministic writes to source markdown/mdx files
- Locale-aware route resolution (EN + FR)
- Internal link insertion via searchable page picker (URL + docs page modes)
- Reliable bootstrap on first load and during SPA navigation

## 2. Runtime architecture

1. CLI starts Docusaurus on an internal port (`3055+`) and proxy on visible port (`3000+`).
2. Proxy forwards HTTP/WS to Docusaurus.
3. Proxy injects editor assets and mount root into HTML responses.
4. Client script mounts overlay UI and calls local API endpoints.
5. Save writes happen only through backend `submit` endpoint.

Key files:

- `src/cli.mjs`: process orchestration
- `src/server.mjs`: proxy + API
- `src/injector.mjs`: resilient HTML injection
- `src/client/app/main.tsx`: React bootstrap
- `src/client/app/App.tsx`: UI composition
- `src/client/app/controller.ts`: global event orchestration + route/watch integration
- `src/client/app/editorActions.ts`: mutation/API action layer
- `src/client/app/ui/*`: Radix + Floating UI primitives and dialogs/popovers

## 3. Backend API contract

### `POST /__visual-editor/info`
Input:

```json
{ "pathname": "/docs/managers/" }
```

Output success:

```json
{
  "success": true,
  "payload": {
    "filePath": ".../docs/managers/index.mdx",
    "locale": "en",
    "diagnostics": {}
  }
}
```

### `POST /__visual-editor/section-info`
Input:

```json
{
  "filePath": "...",
  "htmlTag": "p",
  "outerText": "...",
  "sectionIndex": 3
}
```

Output success includes:

- `markdown`
- `location: { fileNamePath, lineStart, lineEnd }`
- `type`
- `unsupported`
- `canInlineEdit`
- `inlineReason`

### `POST /__visual-editor/html-to-markdown`
Input:

```json
{ "html": "<p>...</p>", "context": {} }
```

Output:

```json
{ "success": true, "payload": { "markdown": "..." } }
```

### `POST /__visual-editor/submit`
Input:

```json
{
  "location": { "fileNamePath": "...", "lineStart": 10, "lineEnd": 14 },
  "markdown": "..."
}
```

Behavior:

- Replace exact line span in target file
- Preserve newline style (`LF`/`CRLF`)

### `POST /__visual-editor/open`
Input:

```json
{ "fileNamePath": "...", "lineStart": 42 }
```

Behavior: open local editor using `launch-editor`.

### `POST /__visual-editor/pages`
Input:

```json
{ "locale": "en", "currentPathname": "/docs/managers/staff/" }
```

Output:

```json
{
  "success": true,
  "payload": {
    "pages": [
      {
        "title": "Manage Your Staff",
        "href": "/docs/managers/staff",
        "routePath": "/docs/managers/staff",
        "docId": "managers/staff/index",
        "insertHref": "./index.md"
      }
    ]
  }
}
```

Behavior:

- Page list built from Docusaurus `site-*.json` docs metadata cache.
- `insertHref` is computed server-side from filesystem paths:
  - relative from current page source file directory
  - normalized with `/`
  - explicit extension kept (`.md`/`.mdx`)
  - prefixed with `./` when needed

## 4. Route/file resolution

Implemented in `src/routeResolver.mjs`.

Rules:

- Normalize trailing slash (`/docs/a/` => `/docs/a`; keep `/`)
- Use `.docusaurus/globalData.json` as route index
- EN source root: `docs/`
- FR source root: `i18n/fr/docusaurus-plugin-content-docs/current/`
- Candidate files in order:
  1. `<path>.md`
  2. `<path>.mdx`
  3. `<path>/index.md`
  4. `<path>/index.mdx`

## 5. Section resolution algorithm

Implemented in `src/markdownSections.mjs`.

Process:

1. Read file content
2. Normalize markdown comments/admonitions for parsing
3. Parse with remark (`remark-parse`, `remark-mdx`, frontmatter, directive)
4. Filter non-content nodes
5. Match nodes by expected type + text similarity + index proximity
6. Return node location and markdown source slice

List-specific fallback:

- For list/listItem context, use lower similarity threshold
- If still ambiguous, choose nearest index among type-matched nodes

## 6. Client UX state machine

Implemented across:

- `src/client/app/controller.ts`
- `src/client/app/editorActions.ts`
- `src/client/app/ui/*`
- styles in `src/client/editor.css`

States:

- idle
- hover
- inline editing
- markdown modal
- link modal

### Hover actions

- `Edit Inline`
- `Edit Markdown`
- `Open in IDE`
- `Delete Block`
- `+ Add block` (below block, start side)

Hover persistence requirement:

- Hover remains while pointer moves between block, top actions, and bottom add button.

### Inline editing

- Enter via `Edit Inline` or block double-click
- Active controls: Save/Cancel/Edit Markdown/Open in IDE/Delete
- Saves on:
  - Save click
  - blur (excluding editor controls)
  - `Cmd/Ctrl+Enter`
- `Shift+Enter` inserts soft line break

### Markdown modal

- Can be opened from hover or inline controls
- Save via button or `Cmd/Ctrl+Enter`
- Close via backdrop or `Escape`

### Selection popover

Shown for non-collapsed selection inside active inline block.

Commands:

- Block format buttons: Body, H1, H2, H3
- Bold
- Italic
- Link
- UL / OL toggles

### Link modal

Two modes:

- `URL`: free-form URL (`https://`, `mailto:`, `tel:`)
- `Page`: searchable docs page autocomplete

Behavior:

- Internal page selection uses backend-provided `insertHref`
- Existing internal links are preselected via route matching
- Remove link performs `unlink`
- Apply/unlink executes before modal close to preserve selection range

## 7. Lists behavior

### Toolbar/list command behavior

- UL: `document.execCommand("insertUnorderedList")`
- OL: `document.execCommand("insertOrderedList")`
- Active list state from `document.queryCommandState(...)`

### Typing shortcuts

In inline mode, at line start:

- `-` then `Space` => unordered list
- `1.` then `Space` => ordered list

## 8. Add/delete block behavior

### Delete block

- Confirm action
- Resolve section location
- Submit empty markdown for that range
- Remove block locally on success (no forced full-page reload)

### Add block (transient-first)

- Clicking `+ Add block` creates local transient paragraph after current block
- No backend write at add time
- Enter inline editing immediately on transient block
- On save:
  - convert transient HTML to markdown
  - insert after previous block by using stored anchor reference captured at add time
- Empty transient block removed on cancel/clear
- `Edit Markdown` unavailable for transient block until saved

## 9. HTML->Markdown conversion requirements

Implemented in `src/htmlToMarkdown.mjs` using Turndown.

Required output properties:

- Stable markdown for headings/paragraphs/bold/italic/links/lists
- Normalize list spacing:
  - `-   Item` => `- Item`
  - `1.  Item` => `1. Item`

## 10. Reliability constraints

- Use same-origin `/__visual-editor/*` in client (no hardcoded port)
- Forward websocket routes (`/ws`, `/sockjs-node`) in proxy
- Avoid HTML interception mode that can hang responses
- Injector must be idempotent and robust to non-empty SSR markup
  - inject CSS before `</head>`
  - inject `#__visual_editor_root` before `</body>`
  - inject editor script before `</body>`
- Client must self-mount `#__visual_editor_root` if missing
- Client must reload file info on SPA route changes and retry unresolved docs routes
- Save/delete flows must not force full-page reload
- After successful writes, rely on Docusaurus auto-refresh and show a non-blocking manual refresh prompt if no update is detected in time

## 11. Bootstrap and route-change behavior

- Editor no longer depends on exact `'<div id="__docusaurus"></div>'` HTML.
- On startup, client resolves current pathname via `/info`.
- On route transitions (`pushState`, `replaceState`, `popstate`, `hashchange`), client re-resolves `/info`.
- If docs route resolution fails temporarily, client schedules retry and enables overlay when resolved.

## 12. Acceptance criteria

1. `npm run edit` starts and docs load through proxy.
2. Overlay appears on first load without manual refresh.
3. Overlay appears after SPA navigation to docs routes without manual refresh.
4. Inline edit + markdown modal work for supported pages.
5. Link modal works:
   - URL mode inserts exact URL
   - Page mode inserts backend `insertHref` with extension
   - Page mode applies the explicitly selected row (not merely hovered/active row)
6. List commands and typing shortcuts produce markdown lists on save.
7. Add block does not write backend until save.
8. Delete block removes target section.
9. EN and FR routes resolve to correct source trees.
10. `npm run build` succeeds.

## 13. Validation checklist

- `npm run edit`
- `npm run edit:debug`
- Manual checks on:
  - first load on `/docs/...`
  - first load on `/fr/docs/...`
  - SPA navigation between docs pages
  - link modal URL mode + page mode
  - link modal selected row styling + Apply uses selected row
  - no forced full-page reload after save/delete/add/modal submit
  - refresh prompt appears only when auto-refresh does not arrive
  - EN/FR insertHref correctness
- `npm --prefix tools/visual-editor run build:client` (production-minified default)
- `npm --prefix tools/visual-editor run build:client:dev` (debug bundle)
- `node --check src/server.mjs`
- `npm run build`

## 14. Bundle strategy

- Default client build mode is production (`build:client` -> `build:client:prod`) with minification and `process.env.NODE_ENV="production"`.
- Debug mode is explicit (`build:client:dev`, `edit:debug`) and remains non-minified for easier inspection.
- React runtime remains bundled in the editor client to avoid brittle coupling with host Docusaurus runtime internals.
- Optional future experiment (not default): externalize `react`, `react-dom`, `react-dom/client`, and `react/jsx-runtime` only if a stable host runtime contract is introduced.
