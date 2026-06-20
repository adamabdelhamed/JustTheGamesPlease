# Just The Games Please

Free, ad-free static HTML games inspired by the kinds of simple game ideas that often get buried under fake ads, timers, popups, and other nonsense. The games are hosted on github pages and have no server component. All Static content. Feel free to add more games.

You can play the games [here](https://adamabdelhamed.github.io/JustTheGamesPlease).


## Games

- **Neon Links**: draw paths between matching dots without crossing existing paths.
- **Neon Swarm**: switch lanes, dodge enemies, and grab upgrades.
- **Neon Pour**: pour glowing liquid groups until every tube holds one color.
- **Neon Collapse**: fit glowing shapes into the grid and detonate completed rows and columns.
- **Neon Drop**: shoot down troop carriers, cut parachutes, and defend the last bunker through escalating waves.

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

## In Progress Games

Games can be marked with `data-status="InProgress"` in `docs/index.html`.

These games are hidden from normal visitors but can be viewed using the developer index:

https://adamabdelhamed.github.io/JustTheGamesPlease/?dev=1

This allows unfinished games to be merged to `main` and deployed through GitHub Pages without appearing on the public homepage.

When launched from developer mode, games receive the `dev=1` query parameter. The analytics package detects this flag and disables analytics logging so developer testing does not affect production metrics.

## Shared libraries

Shared browser libraries live under `docs/lib`.

### Top bar

Every game uses `lib/top-bar/top-bar.css` and `lib/top-bar/top-bar.js`. The standard structure has three regions: identity (title and one-sentence instructions), game-owned controls (stats, selects, and actions), and utilities reserved for shared libraries.

```html
<link rel="stylesheet" href="lib/top-bar/top-bar.css">
<header data-game-topbar>
  <div class="game-topbar__identity">
    <h1>Game title</h1>
    <p class="game-topbar__instructions">One sentence explaining how to play.</p>
  </div>
  <div class="game-topbar__right">
    <div class="game-topbar__controls"><!-- stats and actions --></div>
    <div class="game-topbar__utilities" data-game-topbar-utilities></div>
  </div>
</header>
<script src="lib/top-bar/top-bar.js"></script>
```

Use `data-contained` when the top bar belongs inside a width-constrained game viewport. Shared libraries add icon controls with `gameTopBar.addUtility(element)`.

For a themed dropdown, keep a native select as the source of truth and add `data-topbar-select`. The library creates an accessible styled control and popup while preserving the select's `value` and `change` events.

### Audio

Include the audio library after the top-bar library from a game's top-level HTML file:

```html
<script src="lib/top-bar/top-bar.js"></script>
<script src="lib/audio/audio.js"></script>
```

The library derives the game name from the page filename. For `Dots.html`, game-owned audio IDs resolve to MP3 files in `Dots/audio` (for example, `gameAudio.play('Pop')` loads `Dots/audio/Pop.mp3`). Shared soundtrack files live in `lib/audio/music` and can be used by every game. Calls are fire-and-forget, and missing or unplayable files are ignored. Browsers may defer background music until the player interacts with the page.

The library automatically adds the standard music on/off control at the top right and remembers that preference across games. Its API is:

```js
gameAudio.preload(['Music', 'Pop', 'Explosion']); // Non-blocking, best effort.
gameAudio.playMusic(['Music', 'Music2']);         // Loops through the soundtrack.
gameAudio.playSharedMusic(['Music']);             // Uses lib/audio/music/Music.mp3.
gameAudio.play('Pop');                            // Plays one sound effect.

const engine = gameAudio.loop('Engine');          // Loops immediately.
engine.stop();                                    // Safe to call more than once.

gameAudio.playRotated('Step', 3);                 // Step, Step_Alt1, Step_Alt2,
                                                  // Step_Alt3, then repeats.
```

Preload all known audio IDs near game startup. Preloading is intentionally non-blocking and best effort; it reduces first-play latency without delaying the game.
