# Documentation site

Docusaurus v3 documentation project for Workstaff Help Center.

## General Structure

- `docs/`: source docs in English (default locale), split into `managers/` and `workers/` main sections.
- `i18n/fr/docusaurus-plugin-content-docs/current/`: French translations mirroring doc paths from `docs/`.
- `i18n/fr/docusaurus-theme-classic/*.json`: French UI labels (navbar/footer).
- `i18n/fr/docusaurus-plugin-content-docs/current.json`: French sidebar/category label translations.
- `src/`: custom React homepage/components and styles.
- `static/`: static assets served as-is.
- `.github/workflows/`: CI/CD (PR build validation, `next` deploy, `main` production deploy).

## Docs Information Architecture

- Sidebars are auto-generated from filesystem via `sidebars.js` for `managers` and `workers`.
- Section ordering/navigation is controlled with `_category_.json` and front matter fields like `sidebar_position`.
- Both `.md` and `.mdx` are used; keep existing file format unless a change requires MDX components.
- Images are generally stored close to docs in local `Images/` or `images/` folders; preserve existing casing and paths.

## Writing Style & Tone

- This is a user-facing product documentation site. Use clear, concise, and jargon-free language.
- Match the tone and formatting patterns of the page you edit.

## Translations

- Site locales are English and French.
- English content lives in `docs/`.
- For doc changes, update the corresponding French file under `i18n/fr/docusaurus-plugin-content-docs/current/`.
- If you change translatable UI strings in config/components, update French i18n JSON files accordingly.

## Local Development & Validation

- Node target: `22.x` (`.nvmrc` and CI use Node 22).
- Install: `npm ci`
- Run locally: `npm run start` (EN), `npm run start-fr` (FR)
- Validate build before finalizing changes: `npm run build`

## Deployment Notes

- PRs to `main`: build validation workflow runs `npm run build`.
- Push to `next`: builds with `npm run build-next` and deploys to GitHub Pages (`help-next.workstaff.app`).
- Push to `main`: builds and deploys production to S3/CloudFront (`help.workstaff.app`).
