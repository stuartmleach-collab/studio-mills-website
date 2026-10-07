# Studio Mills website

The website for Studio Mills, Camilla's interior design studio.

- Built with [Eleventy](https://www.11ty.dev/) from the signed-off Claude Design canvas.
- Live at https://www.designbymills.co.uk (designbymills.co.uk redirects there). Hosted on Netlify (project `studio-mills`, originally at the test address https://studio-mills.netlify.app). Every push to `main` deploys automatically.
- The enquiry form uses Netlify Forms (no email address or phone number appears on the site).

## Working on it locally

```
npm install
npm start      # preview at http://localhost:8080
npm run build  # builds into _site/
```

## Where things live

- `src/` pages (`index.njk`, `about/`, `services/`, `contact/`, `projects/`)
- `src/_includes/` shared header, mobile menu, footer and page layout
- `src/_data/site.json` site name, description, Instagram link
- `src/assets/` stylesheet, script, fonts, brand graphics and photos

## How changes are made

1. Every change is made on its own branch and opened as a pull request on GitHub.
2. Netlify builds a **deploy preview** for each pull request and links it on the pull request page.
3. Check the preview. If it looks right, click **Merge pull request**.
4. Merging into `main` publishes the change to the live site automatically.

Nothing reaches the live site until a pull request is merged.

## Editing the site (CMS)

Camilla edits text, photos and projects at **/admin/** (https://www.designbymills.co.uk/admin/), logging in with GitHub. The editor is [Decap CMS](https://decapcms.org).

- **Projects:** one file per project in `src/projects/*.md`. The layout is `src/_includes/project.njk`, and its page sections are chosen in the CMS.
- **Page text:** `src/_data/home.json`, `about.json`, `services.json`, `contact.json` (also used by the thank-you page) and `settings.json` (Instagram link, footer heading).
- **Photos** uploaded in the CMS go into `src/assets/img/photos/`.
- The CMS settings are in `src/admin/config.yml`.
- Edits go Draft → Ready → Publish. Publishing merges the change into `main`, and Netlify puts it live.
- Logging in uses a GitHub OAuth app connected to Netlify (Project configuration → Access & security → OAuth).

