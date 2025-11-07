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

## Configuration
- **Base Path**: `VITE_BASE` is set to `/amos/` during CI build to ensure correct asset URLs and routing.
- **Router**: React Router's `BrowserRouter` is configured with `basename` from `import.meta.env.BASE_URL` to handle subdirectory deployment.
- **SPA Fallback**: The workflow creates `404.html` so client-side routes work correctly.

## Troubleshooting
- 404s on deep links: The workflow creates a SPA fallback (`404.html`) so client-side routes should work.
- Asset path issues: Verify `VITE_BASE` is set to `/amos/` during build.
- Routing issues: The `BrowserRouter` basename is automatically configured from Vite's base path.

## License
(Add a license here if desired.)