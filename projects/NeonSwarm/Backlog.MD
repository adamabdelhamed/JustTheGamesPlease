# Backlog

Anytime you are asked to work on the backlog, update this file along with the actual work in the same commit. When work leaves useful follow-up, keep track of it here instead of leaving it implicit.

You typically want to select a task that can be accomplished in a single thread over the course of an hour or so, including collaboration, build, and focused verification.

## Workflow Notes

- Keep top-level organization by theme. Sections reflect how the project is being thought about, not just a task queue.
- When asked to do the next most important task, prefer something marked `[Ready Task]` unless there is a good reason to do a `[Spec Task]`, `[Audit]`, or `[Tooling]` item first.
- Early ideas should stay in the backlog, but should not be implemented directly until they have behavior, acceptance, and verification notes.
- Every implementation thread should end with code changes and backlog updates in the same commit.
- Verification should usually include a build/typecheck plus any focused manual lab, smoke page, or in-game check that matches the change.

## Sound Effect Investment

- [Spec Task] Define the canonical sound id contract.
  - Standardize runtime ids, filenames, preload ids, and inventory json.
  - Prefer item/family/use names, e.g. `gun.pulsePistol.fire`, over generic ids like `Primary`.
  - Standardize reusable impact flavors instead of unique sounds for every weapon/target pair.
  - Acceptance: Runtime ids, filenames, and the inventory json agree on one naming scheme.
  - Verification: Audit runtime sound calls and preload list against the inventory.

- [Ready Task] Align the existing runtime and preload list with the sound inventory after canonical ids are chosen.
  - Some weapon-specific sound ids exist, but legacy ids still need to be rationalized.

- [Tooling] Improve the sound inventory workflow.
  - Source/spec path: `docs/NeonSwarm/audio/SoundRequests.json`.
  - Tool path: `tools/SfxGenerator`.
  - First useful slice: show request status for every target file and missing alt.
  - Later slices: generate replacements for a single slot, compare existing vs candidates, promote/replace, and edit descriptions with immediate json save.

- [Workflow Milestone] Once the tool and runtime ids are aligned, use the tool to rapidly iterate on sound choices.

- [Idea / Low Priority] Consider adding music generation support to the sound tool for track-family soundtracks.

## All Family Audit

- [Periodic Audit] Each item in each family should have unique character that adds value to the player's experience. Simple variation of color, size, or strength is not enough.
- This is not a one-off backlog task. Do not delete it. If asked to prioritize the backlog, check whether many changes have landed since the last audit.
- Audit output should be compact: what still feels distinct, what feels redundant, and which follow-up tasks should be added under the relevant family section.

Last Audit commit hash: NONE

## Gun Family Improvements

- [Ready Task] Burst Carbine needs more readable spacing between projectiles in a burst and is missing sound.
  - Acceptance: Burst spacing is more readable, the 5-level progression is represented, and sound work is either completed or left linked to the sound investment.
  - Verification: Gun family manual/smoke page.

- [Audit] Gun Family has metadata that might be stale or unused.
  - Fields to investigate: `rarity`, `unlockPhase`.
  - Acceptance: Either remove the metadata or document the runtime/design reason it stays.

## Sword Family Improvements

- [Ready Task] Cleaver multi-lane targeting works, but the visual can still look single-lane when enemies in multiple lanes die.
  - Acceptance: When Cleaver hits multiple lanes, the visual consistently communicates the full multi-lane hit.
  - Verification: Sword family manual page and an in-game check with enemies in both lanes.

## Showstopper Family

- [Completed] First version shipped with Dragon's Breath.
  - Showstoppers are banked, stackable, player-triggered cinematic clears.
  - Dragon's Breath starts in the player's bank, can be picked up on tracks, uses shared game/lab simulation code, locks lane input while active, moves the camera through the shared director, warps gameplay time, clears live enemies in world space, and returns the camera to normal play.
  - Tier 2 and 3 rebuild phases can offer Dragon's Breath pickups through the track composer.
  - The showstopper lab remains useful for camera/time/event authoring and previewing against the shared simulation.

- [Ready Task] Add the second showstopper only after Dragon's Breath has had more playtesting.
  - Likely candidates: Deep Freeze, Chopper, Prism Beam Sweep, Orbital Laser, Neon Meteor Rain, Rail Cannon, Geometry Storm, or Pulse Nova.
  - New showstoppers should reuse the same bank, trigger UI, camera director, time-warp, live enemy targeting, pickup, and composer paths.
  - Add new runtime hooks only when the second ability proves Dragon's Breath-specific assumptions are too narrow.

- [Tooling] Continue improving the showstopper lab only where it serves runtime authoring.
  - Keep game and lab behavior DRY. The lab should use shared simulation/director code for visible effects and keep local state only for authoring controls, export, and scrub/edit workflows.
  - Useful future slices: import/export the full runtime member format, author attack/time-warp/camera in one model, validate generated member data, and show a concise diff from the current runtime member.


## Scene Backgrounds and Parallax

- [Spec Task] Explore larger parallax background assets and projection models.
  - Current scene images are sized as 2D full-bleed layers near the default camera, so extreme camera height/look/forward movement must eventually clamp to avoid exposing empty edges.
  - Future assets may need to represent a much larger field than the viewport, possibly a 360-degree-ish view around the default camera, so close/floor-like scenes can keep responding under stronger camera moves.
  - Evaluate whether scene backgrounds should remain CSS layered images or move into the shared scene renderer as textured 3D planes/surfaces tilted with the camera. A tilted 2D floor plane may communicate Solar Array-style platform depth better than pan/zoom alone.
  - Acceptance: Produce a short implementation recommendation with asset requirements, runtime projection behavior, and how gameplay/labs continue sharing one parallax path.
  - Verification: Prototype against Solar Array and Neon Hall with Dragon's Breath-style camera movement.

## Player Iteration

- [Spec Task] Audit and specify a more forgiving player health/failure model.
  - Current behavior appears to end the run on a single unit hit or a single enemy breach.
  - First slice should be audit/spec only unless explicitly asked to implement.
  - Spec should decide: HP per unit vs squad-level HP, enemy contact cost, breach cost, shield ordering, health pickup behavior, multiplier interaction, UI, and failure messaging.

## Track Family Design and Balance

- [Completed] Catalog + authored journey recipes now generate all catalog tracks at startup through a shared deterministic composer.
  - `TrackDefinition` / `TrackBuilder` remain runtime compatibility output, not an authoring target.
  - Future track tuning should happen through readable journey grammar, family recipes, tier profiles, and composer debug summaries.
  - Catalog family exports are derived from the catalog instead of manually repeated.

- [Ready Task] Continue manual balance passes on generated track journeys.
  - Keep edits at the authored-intent layer when possible: `defaultJourney`, `familyRecipes`, `tierProfiles`, boss pools, and pressure style weights.
  - Avoid reintroducing literal row layouts or per-family procedural wave functions.
  - Verification: composer debug page, compose/parse determinism check, `npm run typecheck`, then play the affected track family.

- [Ready Task] Refine the runtime smoothing system after more playtesting.
  - Current smoothing is deterministic and clones authored upcoming enemy rows when both lanes have been cleared too far ahead.
  - Final-act smoothing is more aggressive, excludes bosses, and may clone recent rows only while planned enemies are still alive so tracks can finish.
  - Future tuning knobs: clear distance, spawn distance, cooldown, final-act threshold, max enemies per burst, source row window, and excluded enemy ids.
  - Acceptance: smoothing reduces dead time without creating endless runs, duplicate boss floods, or unfair surprise walls.

- [Spec Task] Add richer boss support.
  - `bossEnemies` is now a first-class recipe pool; `tank` is currently the only boss.
  - Future bosses should be added through enemy definitions and family boss pools, not regular `preferredEnemies`.
  - Decide per-boss threat, column span, smoothing exclusion, spawn cadence, and which tiers/families may use it.

- [Spec Task] Improve composer power/threat modeling.
  - The current model is intentionally lightweight and derived from existing weapon/enemy definitions.
  - Future passes should better account for actual weapon levels, squad size, close-range coverage, lightning chaining, shield charges, boss durability, and player recovery windows.

- [Future Consideration] Track family presentation still has room to grow.
  - Family scene/background/accent remain catalog-driven.
  - Future soundtrack work could let a family define a set of tracks/mp3s to rotate, with each track choosing a first song.

## Test Discipline

- [Workflow / Audit] Document the current build/typecheck/manual/smoke options and when a thread should run each one.

- [Tooling / Larger Investment] Spec an autoplay/overnight stability runner.
  - Possible query param: `?autoplay=1`.
  - Desired output: web report for crashes, console errors, 404s, win rate per level, level completion counts, and dead-time metrics.
  - Should be spec'd before implementation because it affects dev mode, reporting, navigation, and expected stability signals.
