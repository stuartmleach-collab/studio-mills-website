# Mills Interior Design website: notes for Claude

Website for Camilla's interior design studio, **Mills** (logo: "Mills Interior Design"). The brand was previously Studio Mills; the repository and the Netlify address still use that old name.

## How changes are made
- Never push to `main`. Make every change on a new branch and open a pull request. Stu reviews the Netlify deploy preview and merges.
- Netlify builds `main` automatically (`npm run build` → `_site`). Every pull request gets a deploy preview.
- Before opening a PR, run `npm install` (first time) and `npm run build`, and check that the build succeeds.
- PR descriptions should be plain English for a non-developer: what changed and what to check on the preview.

## Rules that must not be broken
- **Never show Camilla's email address or phone number anywhere on the site** (it caused spam in the past). Contact is only through the Netlify enquiry form on `/contact/`.
- Every photo sits in a decorative frame (`.fr fr-<style>` with `--rot` and `--bw0`). Don't add unframed photos.
- Keep the olive loading screen (inline CSS in `src/_includes/base.njk`). It plays on the first page of each visit only.
- Links to CSS, JS and the logo carry `?v={{ build.version }}` so browsers fetch new versions. Keep that on any new asset link that might change.
- In Nunjucks, wrap inline CSS containing `{#` in `{% raw %}` … `{% endraw %}`.

## Brand
- Colours: cream `#ebe0cf` (background), olive `#44442d`, clay `#844b34`, text black.
- Fonts: DM Serif Display (headings) and Jost (body), self-hosted in `src/assets/fonts/`.
- Logo: `src/assets/img/brand/logo.png` (olive, header) and `logo-light.png` (cream, olive mobile menu).

## Where things live (Eleventy 3 + Nunjucks)
- Camilla edits content herself in Decap CMS at `/admin/` (settings in `src/admin/config.yml`, editorial workflow). If you change the structure of content files, update `config.yml` to match.
- Projects: one file each in `src/projects/*.md` (front matter only), rendered by `src/_includes/project.njk`. Fields: order, featured, hidden, and a list of page sections (`blocks`).
- Page text: `src/_data/home.json`, `about.json`, `services.json`, `contact.json`, `settings.json`.
- Photos: `src/assets/img/photos/`. Brand graphics: `src/assets/img/brand/`.
- The enquiry form is a Netlify Form named `enquiry`. Its email alerts are set up in Netlify, not in code.

## Open items
- The domain is live at [www.designbymills.co.uk](https://www.designbymills.co.uk) (designbymills.co.uk redirects there). DNS is at Namecheap, which also handles email. Analytics is the next step.
- Some text in [square brackets] is placeholder copy waiting for Camilla. The Instagram link is a placeholder.
