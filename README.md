# Just The Games Please

Free, ad-free static HTML games inspired by the kinds of simple game ideas that often get buried under fake ads, timers, popups, and other nonsense.

This repo is intentionally plain static web content. There is no build step, package manager, backend, tracking, or ad network.

## Play Locally

Open `docs/index.html` in a browser, then choose a game.

## Games

- **Neon Links**: draw paths between matching dots without crossing existing paths.
- **Neon Swarm**: switch lanes, dodge enemies, and grab upgrades.

## GitHub Pages

The `docs` folder is the site content, and `docs/index.html` is the landing page. This matches GitHub Pages' built-in branch publishing options, so no GitHub Actions workflow is needed.

GitHub Pages can try to process sites with Jekyll by default. This repo includes `docs/.nojekyll` so GitHub serves the static files directly.

Recommended no-workflow Pages setup after publishing:

1. Go to the repository on GitHub.
2. Open **Settings > Pages**.
3. Set the source to the `main` branch and `/docs` folder.
4. Save, then use the Pages URL GitHub provides.

## Adding Games

Add each game as a standalone `.html` file in `docs`, then add it to the cards in `docs/index.html`.
