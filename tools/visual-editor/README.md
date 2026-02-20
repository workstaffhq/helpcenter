# visual-editor

Local visual editing tool for this Docusaurus docs repo.

## Quick start

From repo root:

```bash
npm install
npm run edit
```

The tool runs a proxy + Docusaurus dev server and injects the editor UI on docs pages.

`npm run edit` rebuilds the editor client bundle (`tools/visual-editor/dist/editor.js`) in production mode (minified) before starting.

## Build modes

- Default (`npm run edit`): production-minified client bundle for smaller size and faster load.
- Debug (`npm run edit:debug`): non-minified client bundle for easier local debugging.

Direct client build commands:

```bash
npm --prefix tools/visual-editor run build:client        # production
npm --prefix tools/visual-editor run build:client:dev    # debug
```

The visual editor intentionally keeps React bundled for runtime reliability. Sharing host runtime dependencies can reduce bytes further but is currently considered experimental and brittle in this injected-script architecture.

Current client architecture:

- React app entry: `src/client/app/main.tsx`
- UI composition: `src/client/app/App.tsx`
- Event orchestration: `src/client/app/controller.ts`
- API/mutation actions: `src/client/app/editorActions.ts`
- UI primitives: `src/client/app/ui/*` (Radix + Floating)

## What it does

- Inline editing for supported blocks
- Markdown modal fallback (`Edit Markdown`) for all blocks
- Selection popover formatting (Body/H1/H2/H3, bold, italic, links, UL/OL)
- Block operations: add after, delete
- Open current section in local IDE
- EN/FR route-aware file resolution
- No forced full-page reload after save/delete/add/modal submit (relies on Docusaurus auto-refresh, with manual refresh prompt fallback)

## Docs split

- `README.md` (this file): how to run and orient yourself
- `SPECS.md`: rebuild-oriented functional + technical specification
