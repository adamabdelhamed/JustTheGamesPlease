# Just The Games Please

Free, ad-free static HTML games inspired by the kinds of simple game ideas that often get buried under fake ads, timers, popups, and other nonsense.

This repo is intentionally plain static web content. There is no build step, package manager, backend, tracking, or ad network.

## Play Locally

Open `Games/index.html` in a browser, then choose a game.

## Games

- **Neon Links**: draw paths between matching dots without crossing existing paths.
- **Neon Swarm**: switch lanes, dodge enemies, and grab upgrades.

## GitHub Pages

The `Games` folder is the site content. The repo also has a root `index.html` that redirects to `Games/`, so publishing the repository root with GitHub Pages will still land visitors on the game list.

GitHub Pages can try to process sites with Jekyll by default. This repo includes `.nojekyll` files at the root and in `Games` so GitHub serves the static files directly.

Recommended Pages setup after publishing:

1. Go to the repository on GitHub.
2. Open **Settings > Pages**.
3. Set the source to the main branch and repository root.
4. Save, then use the Pages URL GitHub provides.

## Adding Games

Add each game as a standalone `.html` file in `Games`, then add it to the cards in `Games/index.html`.
