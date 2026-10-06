# Studio Mills website

The website for Studio Mills, Camilla's interior design studio.

- Built with [Eleventy](https://www.11ty.dev/) from the signed-off Claude Design canvas.
- Hosted on Netlify (project `studio-mills`, test address https://studio-mills.netlify.app). Every push to `main` deploys automatically.
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
