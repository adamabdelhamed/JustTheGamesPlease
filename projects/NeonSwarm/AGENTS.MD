## Neon Swarm implementation guidance

Neon Swarm should stay organized as it grows. New enemies, weapons, pickups, shields, effects, tracks, and scenes should be added through typed definitions, catalogs, family helpers, or focused modules that can scale to the next similar feature. Do not bury reusable feature rules inside `main.ts` when they belong to an enemy, weapon, shield, visual profile, or gameplay subsystem.

## DRY gameplay and tests

Gameplay and test pages must share the same implementation modules. If a behavior or visual is expected to look the same in the game and a lab page, put the behavior in `src` and import it from both places. Test pages can add controls and assertions, but they should not duplicate gameplay tuning or visual construction.

Every new meaningful object or system should have a test page path:

- A manual lab for inspection and tuning.
- A smoke or automated page when the behavior can be asserted.

Manual pages should expose controls that are useful for future tuning, but the underlying behavior should remain the same path the game uses.

When adding lab controls for gameplay tuning, prefer controls that exercise the shared runtime API instead of special lab-only behavior. If a lab needs to force a value for focused inspection, keep that path explicit and do not let it replace the normal game path that should be verified.

## Visuals and rendering

All render primitives, shapes, clouds, effects, trails, bursts, particles, environmental visuals, and object visuals should derive from NeonFactory abstractions. Prefer extending NeonFactory over adding local renderers in NeonSwarm. Game-specific modules may choose colors, profiles, timings, enemy-specific exits, and family-specific visual identities, but the renderer mechanics should remain reusable.

Visual systems must be designed for the unified renderer. They should share the same WebGPU/canvas environment where practical, layer correctly with primitives and shapes, work with `NeonTopDownSceneRenderer`, and pass through the same camera/projection path as gameplay objects. Effects should play nicely with each other: avoid assumptions that only one visual system is active, and keep render order intentional.

For player-adjacent HUD elements rendered inside the top-down scene, avoid anchoring directly to squad drift or raw world edges when the camera follows the player. Use a stable screen-space anchor and unproject it into scene space when the element must stay visually steady during auto-aim drift or lane-switch animation.

Temporary in-game tuning panels are acceptable for fast visual iteration, but remove the panel before finalizing the task. Preserve only the chosen tuning values and the reusable runtime path.

## Enemy and item growth

Enemy behavior and enemy visuals should be keyed by enemy type. As new enemies are added, their spawn behavior, shape, color, movement, death/exit effect, and tuning should live in type-specific definitions or profiles rather than scattered conditionals.

Weapon, shield, sword, multiplier, and pickup work should follow the same pattern: family definitions drive mechanics and visuals; game code orchestrates those systems without duplicating their details.
