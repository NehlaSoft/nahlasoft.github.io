## Repo quick context

- This is a small static website (GitHub Pages) for NahlaSoft showing NoteProgM downloads and info. Key HTML files: `index.html`, `indexPro.html`.
- Styles live in `css/style.css`. Main JS entry is `js/script.js` (currently empty). Images are under `img/` and referenced with relative paths.
- Pages are RTL Arabic (`lang="ar" dir="rtl"`) and use Google Fonts. Keep RTL and right-to-left layout in any changes.

## What this agent should know (high-value specifics)

- No build system: there is no `package.json`, no bundler, and no compilation step. Editing files and pushing to the `main` branch (or a branch and opening a PR) is sufficient for GitHub Pages deployment.
- The project is purely static: make edits to the HTML/CSS/JS files directly. Keep assets referenced by relative paths (e.g., `./img/logo.png`, `./css/style.css`).
- Important files to reference when making UI changes:
  - `index.html` — main landing page, navigation uses `.nav-links`, `.logo-image`, `.menu-image`.
  - `indexPro.html` — alternate layout with `.content-prog` and `.main-btnpro`.
  - `css/style.css` — primary styles; uses CSS variables and responsive media queries. Look here for colors, `.project-card`, `.main-btn`, `.main-btnpro`.
  - `js/script.js` — single place for site scripting. Keep behavior here rather than inline scripts in HTML.

## Conventions and patterns to follow

- Keep markup simple and semantic: the site uses container classes like `.container`, `.header`, `.content`, `.project-card`. Reuse these classes for consistent styling.
- Buttons: use `.main-btn` for free downloads and `.main-btnpro` for Pro. These classes provide required styling and hover behavior.
- Images: use `loading="lazy"` where possible (already used). Preserve relative paths and the `img/` filenames.
- RTL: Do not remove `dir="rtl"` or `lang="ar"`. When adding dynamic DOM manipulation or CSS, ensure it respects RTL (use logical properties if adding new CSS).

## How to preview and test locally (Windows PowerShell)

1. Quick static server (Python):

   ```powershell
   python -m http.server 8000
   # then open http://localhost:8000/index.html in your browser
   ```

2. Use VS Code Live Server extension to preview and test responsive behavior.

Manual checks:

- Open `index.html` and `indexPro.html` in a browser. Verify RTL layout, fonts, and buttons `.main-btn` / `.main-btnpro` render correctly.
- Check mobile breakpoints (resize browser) to ensure `.content-prog` collapses as intended and nav toggles visibility.

## Examples of patterns to follow (copy/paste friendly)

- Add a project card (use existing classes):

  ```html
  <div class="project-card">
    <h2 class="title">NoteProgM v1.0.0</h2>
    <ol class="line-p">
      <li>ميزة 1</li>
      <li>ميزة 2</li>
    </ol>
    <a href="#" class="main-btn">Download NoteProgM v1.0.0 Free</a>
  </div>
  ```

- Link JS behavior from `js/script.js` (avoid inline handlers):

  ```js
  // js/script.js
  document.addEventListener("DOMContentLoaded", () => {
    const menu = document.querySelector(".menu-image");
    // add accessible toggle behavior here
  });
  ```

## What NOT to change without coordination

- The site root structure (`index.html`, `indexPro.html`, `css/`, `js/`, `img/`) — changing file locations will break relative links used across pages.
- `dir="rtl"` and `lang="ar"` attributes — removing them breaks language semantics and layout.

## Small automation suggestions (low-risk, optional)

- Add a simple GitHub Action to preview deploy on push to a `gh-pages` branch or run an HTML linter. If creating CI, keep it opt-in and non-blocking.

## Contact / PR etiquette

- Provide a short PR description linking changed files and a screenshot for UI changes (desktop + mobile). Keep changes scoped to single concern per PR.

---

If anything in these notes is unclear or you'd like more detail (example scripts, a small CI sample, or accessibility checks), tell me which section to expand and I'll iterate.
