# Notes for Claude

- Website for the Interreg South Baltic project AMBeR (ehealth-implementation.eu). Static Astro site, deployed to GitHub Pages from `main` via `.github/workflows/deploy.yml`.
- The maintainers are not programmers and write prompts in Swedish. Reply in Swedish, in plain language. All website content must be in English.
- Content lives in Markdown under `src/content/` (schemas in `src/content.config.ts`) and is edited by the maintainers through Pages CMS (`.pages.yml`). When a content schema changes, update `.pages.yml` to match.
- Step ids (`step-1` … `step-5`) are used in URLs and referenced from activities and stories. Keep them stable.
- Design: dark blue elements, orange headings (`src/styles/global.css`). Keep WCAG 2.1 AA contrast.
- No cookies: analytics must be cookie-free (configured in `src/site.config.ts`).
- Run `npm run build` before committing.
