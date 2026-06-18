# Just The Games Please

Free, ad-free static HTML games inspired by the kinds of simple game ideas that often get buried under fake ads, timers, popups, and other nonsense. The games are hosted on github pages and have no server component. All Static content. Feel free to add more games.

You can play the games [here](https://adamabdelhamed.github.io/JustTheGamesPlease).


## Games

- **Neon Links**: draw paths between matching dots without crossing existing paths.
- **Neon Swarm**: switch lanes, dodge enemies, and grab upgrades.
- **Neon Pour**: pour glowing liquid groups until every tube holds one color.
- **Neon Collapse**: fit glowing shapes into the grid and detonate completed rows and columns.

## GitHub Pages

The `docs` folder is the site content, and deploys automatically when the main branch is updated.

## Adding Games

Add the game's entry-point `.html` file directly in `docs`, then add it to the cards in `docs/index.html`.

Small games may remain a single HTML file. A larger game can keep its scripts and assets in a sibling folder with the same base name:

```text
docs/
  Swarm.html
  Swarm/
    game.css
    game.js
    audio/
    images/
```

Use relative references from the entry point, such as `Swarm/game.js`. Keeping the HTML entry point at the top level preserves existing GitHub Pages URLs while allowing complex games to be split into maintainable modules and asset folders.
