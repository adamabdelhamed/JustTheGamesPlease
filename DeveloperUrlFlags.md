# Developer URL Flags

Developer pages can read flags from either the query string or the hash. Prefer hash flags for Android home-screen bookmarks because Android may strip query strings.

Supported forms:

- Query string: `?dev=1&cameracontrols=1`
- Hash path: `#dev-1/cameracontrols-1`
- Hash values may also use equals signs: `#dev=1/cameracontrols=1`

Current flags:

- `dev=1`: Enables developer-only entry points such as the Neon Swarm Test Center and authoring tools.
- `cameracontrols=1`: Shows the temporary Neon Swarm camera sliders. This also requires `dev=1`.

The central browser helper is `lib/url-options.js`. Use `window.JustTheGamesPlease.urlOptions.isEnabled("flagname")` instead of reading `location.search` directly.
