# Audio Backlog

Generate each effect as an MP3 named `{Id}.mp3` and place it in `docs/{Game}/audio/`. Descriptions are intentionally short for ElevenLabs. Integration pointers name the function and event so they remain useful if line numbers move.

Existing effects are omitted: Neon Collapse already has `Placed.mp3` and `Blast.mp3`. Neon Swarm already has the call sites below, but the corresponding files are not present yet.

## Neon Dots

Source: `docs/Dots.html`

| Id | ElevenLabs description | Integration pointer |
|---|---|---|
| `LinkComplete` | Quick sparkling energy connection, clean rising chime | `finishDraw(target)`, after both matching dots are marked connected and before the all-dots success check. |
| `LinkCancel` | Tiny fading electric thread snap | `finishDraw(target)`, in the `!target` branch before `cleanupActivePath()`. Do not play on pointer cancellation. |
| `WrongLink` | Short low digital error buzz, soft impact | `fail(title, text)`, so both a wrong-color link and a crossed line share one rejection sound. |
| `PuzzleComplete` | Bright magical success flourish, sparkling synth, one second | `success()`, immediately when the board locks. |

## Neon Pour

Source: `docs/NeonPour.html`

| Id | ElevenLabs description | Integration pointer |
|---|---|---|
| `TubeSelect` | Delicate glass tap with a soft neon ping | `chooseTube(index)`, after a nonempty source tube is selected. |
| `TubeDeselect` | Tiny muted glass click | `chooseTube(index)`, in the `selected === index` branch when selection is cleared. |
| `Pour` | Short smooth liquid pour into a glass tube, no splash | `pour(from, to, amount)`, immediately before `animatePour(...)`; one sound per legal move. |
| `InvalidPour` | Brief hollow glass clink, subtle error tone | `markInvalid(index)`, when the invalid animation is restarted. This covers empty-source and illegal-destination clicks. |
| `Undo` | Quick liquid rewind whoosh with a glass tick | `undo()`, after restoring `tubes` from history and before `render()`. |
| `PuzzleComplete` | Joyful crystalline success chime with sparkling finish, one second | `celebrate()`, immediately when the board locks. |

## Neon Collapse

Source: `docs/NeonCollapse.html`

| Id | ElevenLabs description | Integration pointer |
|---|---|---|
| `PickupBlock` | Soft futuristic block pickup, compact rising synth click | `pieceDown(e)`, after confirming the piece is unused and before starting the drag. An existing file is at `docs/NeonCollapse/PickupBlock.mp3`; move it into `docs/NeonCollapse/audio/` when integrating. |
| `InvalidDrop` | Short rubbery block rejection thud with digital buzz | `pieceUp(e)`, in the invalid-drop branch before `render()` and `drawTray()`. |
| `PerfectCollapse` | Brilliant arcade victory burst, crystalline rising flourish | `finish(clear)`, only in the `clear === true` outcome before showing the overlay. |
| `GridLocked` | Low descending digital shutdown tone, restrained | `finish(clear)`, only in the `clear === false` outcome before showing the overlay. |

## Neon Swarm

Sources: `docs/Swarm/game.js` and `docs/Swarm.html`

These IDs are already preloaded in `docs/Swarm.html` and called from `docs/Swarm/game.js`. Adding the MP3s under `docs/Swarm/audio/` is sufficient unless the integration is later refined into weapon-specific effects.

| Id | ElevenLabs description | Integration pointer |
|---|---|---|
| `Primary` | Rapid compact sci-fi laser shot, crisp electric pulse | Existing call in `firePrimary()` after all squad shots are spawned; rotated variants `_Alt1` through `_Alt3` are supported. |
| `Secondary` | Heavy charged plasma launch, deep sci-fi thump | Existing call in `fireSecondary()` after projectile launch; rotated variants `_Alt1` and `_Alt2` are supported. |
| `Boss` | Ominous synthetic warning horn, deep rising alarm | Existing call in `spawnEnemy()` when a boss is created and its health bar appears. |
| `Streak` | Fast arcade combo chime, bright ascending three-note synth | Existing call in `damageEnemy(enemy, shot)` on every fifth consecutive kill. |
| `Pickup` | Glowing power-up collected, bright digital shimmer | Existing call in `collectPickups()` after squad or equipment upgrades are applied. |
| `Shield` | Energy shield impact, resonant electric barrier ripple | Existing call in `hitSquad()` when the shield absorbs a collision. |
| `Hit` | Sharp spaceship damage impact, metallic electric crack | Existing call in `hitSquad()` when an unshielded squad unit is lost. |
| `GameOver` | Dark arcade defeat sting, short descending synth | Existing call in `end(reason)` when either all units are destroyed or score drops below zero. |
| `EnemyDestroyed` | Small alien drone explosion, punchy electronic pop | Add in `damageEnemy(enemy, shot)` after the lethal-hit check, for non-boss enemies only. |
| `BossDestroyed` | Massive sci-fi boss explosion, deep layered blast and energy crackle | Add in `damageEnemy(enemy, shot)` in the `enemy.boss` death branch, alongside the large burst, shake, and flash. |
| `EnemyEscaped` | Quick descending warning blip with distant impact | Add in `handleEscapes()` after an enemy is removed and the streak resets. |
