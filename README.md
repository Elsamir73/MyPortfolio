# Samir Pathak — Developer Portfolio

Single-page, black-and-white developer portfolio built with **React + Vite**.
Deployed to GitHub Pages at https://Elsamir73.github.io/MyPortfolio

## Structure

One page only — every section is an anchor on the homepage:

| Section    | Anchor        | Source                       |
| ---------- | ------------- | ---------------------------- |
| Header     | —             | `src/components/Header/`     |
| Hero       | `#home`       | `src/components/Hero/`       |
| About      | `#about`      | `src/components/About/`      |
| Skills     | `#skills`     | `src/components/Skills/`     |
| Experience | `#experience` | `src/components/Experience/` |
| Projects   | `#projects`   | `src/components/Projects/`   |
| Education  | `#education`  | `src/components/Education/`  |
| Contact    | `#contact`    | `src/components/Contact/`    |
| Footer     | —             | `src/components/Footer/`     |

All personal data lives in `src/data/`:

- `site.js` — name, email, GitHub, LinkedIn, CV path
- `skills.json` — grouped skills
- `history.json` — experience timeline
- `projects.json` — projects
- `education.json` — education (**currently a placeholder — update this**)

The CV is served from `public/SAMIR_PATHAK_CV.pdf` and linked through
`import.meta.env.BASE_URL` so it works on GitHub Pages and in dev.

## Commands

```bash
npm install      # install dependencies
npm run dev      # start dev server
npm run build    # production build (outputs to dist/)
npm run preview  # preview the production build
npm run deploy   # build + publish dist/ to the gh-pages branch
```

## Deployment (GitHub Pages)

- `vite.config.js` sets `base: "/MyPortfolio"` — required by GitHub Pages. Do not remove.
- `package.json` sets `homepage` and the `deploy` script (uses `gh-pages`).
- Run `npm run deploy` to publish; the `predeploy` hook runs the build first.

