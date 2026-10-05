# Notes for Claude

- Website for the Interreg South Baltic project AMBeR (ehealth-implementation.eu). Static Astro site, deployed to GitHub Pages from `main` via `.github/workflows/deploy.yml`.
- The maintainers are not programmers and write prompts in Swedish. Reply in Swedish, in plain language. All website content must be in English.
- Content lives in Markdown under `src/content/` (schemas in `src/content.config.ts`) and is edited by the maintainers through Pages CMS (`.pages.yml`). When a content schema changes, update `.pages.yml` to match.
- Step ids (`step-1` … `step-5`) are used in URLs and referenced from activities and stories. Keep them stable.
- Design follows the AMBeR/Interreg South Baltic palette (Reflex Blue #003399, 2716 #9FAEE5, Yellow #FFCC00, AMBeR orange #E25D25, grey #5F717B) with Open Sans (self-hosted), defined in `src/styles/global.css`. Layout is inspired by servicedesigntools.org: light headings (h1 Reflex Blue, h2 orange #C4461A), small uppercase orange labels, white cards on soft grey sections, line icons with a coloured block (`src/icons.ts`, `Icon.astro`, `Illustration.astro`). Programme rules require Open Sans for all text, so do not add other typefaces. Keep WCAG 2.1 AA contrast.
- Interreg South Baltic Communication Guidelines (v.6) apply: the official logo combination (`public/media/brand/`) must stay at the top of every page, unaltered, on a white background, with the "Interreg + EU symbol" part at least 300 px wide on desktop (logo shown 820 px wide). Funding statement and disclaimer wording live in `src/site.config.ts` and must not be reworded. The About page must keep objectives, results, partners, period, budget/EU funding and target groups.
- No cookies: analytics must be cookie-free (configured in `src/site.config.ts`).
- Run `npm run build` before committing.
