# amos

Visit the live site: https://enstie.github.io/amos/

## Project Structure
The Vite + React site lives in the `lux-site/` directory. GitHub Pages is deployed from the built output (`lux-site/dist`) using the workflow at `.github/workflows/deploy-pages.yml`.

```
lux-site/
  ├─ index.html        # Vite entry point loading /src/main.jsx
  ├─ package.json
  ├─ src/              # React components & app code
  ├─ public/           # Static assets copied as-is
  ├─ vite.config.js
```

## Local Development
1. cd lux-site
2. npm install
3. npm run dev
4. Open the local dev URL (typically http://localhost:5173/)

## Build & Deploy
On every push to `main`:
- The GitHub Actions workflow installs dependencies and runs `npm run build` inside `lux-site/`.
- The build output goes to `lux-site/dist`.
- That directory is published to GitHub Pages at https://enstie.github.io/amos/.

If you need a manual deploy, use the Actions tab and trigger the workflow with "Run workflow".

## Redirect from Repository Root
A root `index.html` has been added to redirect visitors to the live Pages site.

## Troubleshooting
- Seeing plain text "amos"? That was the old minimal README rendered by GitHub. This new README now links directly to the deployed site.
- 404s on deep links: The workflow creates a SPA fallback (`404.html`) so client-side routes should work.
- Asset path issues: `VITE_BASE` is set to `/amos/` during build to ensure correct asset URLs.

## License
(Add a license here if desired.)