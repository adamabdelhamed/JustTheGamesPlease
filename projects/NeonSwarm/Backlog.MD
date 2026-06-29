# Backlog

Anytime you are asked to work on the backlog make sure you update this file along with the actual work in the same commit. When you do work, if some details are left unfinished we want to keep track of it in an organized way.

You typically want to select a task that can be accomplished in a single thread over the course of an hour or so, accounting for taking turns with the user, building, manual/auto tests, etc.

## Workflow Notes

- Keep the top-level organization by theme. The sections reflect how the project is being thought about, not just a task queue.
- When asked to do the next most important task, prefer something marked `[Ready Task]` unless there is a good reason to do a `[Spec Task]`, `[Audit]`, or `[Tooling]` item first.
- Early ideas should stay in the backlog, but should not be implemented directly until they have been expanded into a more detailed section with behavior, acceptance, and verification notes.
- Every implementation thread should end with code changes and backlog updates in the same commit. If the work reveals more follow-up than expected, add that follow-up here instead of leaving it implicit.
- Verification should usually include a build/typecheck plus any focused manual lab, smoke page, or in-game check that matches the change.

## Sound Effect Investment

- [Spec Task] Define the canonical sound id contract.
  - Need to standardize all sound effects by item and use.
  - e.g. There should be no Primary.mp3. There should be gun.pulsePistol.Fire.mp3.
  - Each weapon family should define its expected sounds and individual weapons/items produce mp3s. Individual items can add new sounds for unique behavior, but all should work ok with just the family sounds.
  - We want to avoid having a unique sound for impacts for each weapon + hit target so we should standardize on flavors of impact (projectile light / heavy, sword light/heavy, explode light/heavy, etc).
  - All Weapons should have rotating alts (at least 5) to reduce fatigue.
  - Acceptance: Runtime ids, filenames, and the inventory json agree on one naming scheme.
  - Verification: Audit runtime sound calls and preload list against the inventory.
- [Ready Task] Align the existing runtime and preload list with the sound inventory after the canonical ids are chosen.
  - Current code already has some weapon-specific sound ids, but some legacy ids still exist and need to be rationalized instead of allowed to drift.
- [Tooling] We should have a standard inventory json file for all sound effects in the game.
  - C:\Users\Adam\source\repos\JustTheGamesPlease\docs\NeonSwarm\audio\SoundRequests.json
  - The path above shows the correct format, but it should be treated as a spec and the runtime should never diverge from it.
  - The file is meant to be used by the tool here: C:\Users\Adam\source\repos\JustTheGamesPlease\tools\SfxGenerator
  - The tool needs to be improved so that it reflects the status of all requests (e.g., the required file exists, file missing, main item exists but missing an alt, etc).
  - The tool needs to let me easily generate new alternatives for any sound (main or alt), preview, compare with existing, and replace/promote.
  - The tool needs to let me edit any of the descriptions, which save to the json file immediately.
  - First useful slice: show request status for every target file and missing alt.
  - Later slices: generate replacements for a single slot, compare existing vs candidates, promote/replace, edit descriptions with immediate json save.
- [Workflow Milestone] Once the tool has all the features required to enable the workflow, and the runtime has aligned on a proper set of ids, and we've deleted all the dead branches then we can use the tool to rapidly iterate on sound choices.
- [Idea / Low Priority] Cross-Project Opportunity: If we want a diverse soundtrack and a per track family soundtrack then we can work elevenlabs music into the tool. But it's a significant investment since the music APIs are a bit more complex so we'd have to think about how to expose it in the tool. Definitely lower priority, but we want to keep track of this.

## All Family Audit

- [Periodic Audit] Each item in each family should have unique character that adds value to the player's experience. Simple variation of color / size / strength is not acceptable. The user needs to be able to experience the unique character of every item, weapon, enemy, etc.
- This is not really a one off backlog task. It's something that should be periodically audited and iterated upon. Do not ever delete this from the backlog. Keep track of the last commit hash that was audited here. If ever asked to prioritize the backlog look at the git history and if there have been lots of changes since the last audit then prioritize this higher.
- Audit output should be compact: what still feels distinct, what feels redundant, and which follow-up tasks should be added under the relevant family section.

Last Audit commit hash: NONE

## Gun Family Improvements

- [Ready Task] Burst Carbine needs a bit more spacing between projectiles in burst and is completely missing sound (will be covered by sound investment above).
  - L1: burst of 3 projectiles.
  - L2: standard gun family improvements.
  - L3: extra projectile + standard family improvements.
  - L4: standard family improvements.
  - L5: extra projectile + standard family improvements.
  - Acceptance: Burst spacing is more readable, the 5 level progression is represented, and sound work is either completed through the sound investment or left linked there.
  - Verification: Gun family manual/smoke page.
- [Audit] Gun Family has metadata that might be stale / unused. Must investigate why these are there and remove if they don't map to something in the experience. I don't think the track composer uses this (or should) because it would complicate everything.
  - rarity: "common", unlockPhase: "firstBuild"
  - Acceptance: Either remove the metadata or document the runtime/design reason it stays.

## Sword Family Improvements

- [Ready Task] Cleaver is tuned pretty nicely and its multi lane targeting also works nicely. But the multi-lane visual effect still occasionally falls back to a single lane visual, making it look like the enemy in the other lane died for no reason.
  - Acceptance: When Cleaver hits multiple lanes, the visual consistently communicates the full multi-lane hit.
  - Verification: Sword family manual page and an in-game check with enemies in both lanes.

## Add More Families

Adding a family is a big deal. These are ideas and need to be authored as full specs that define the family behavior, members, their unique character, sound effects, consideration of how they work alongside other families. When we decide to prioritize any of these a new section should be added to the backlog that is dedicated to the full spec. At that point the entry can be removed from this section.

  - Spec should decide: family members, branch rules, level scaling, visuals, sounds, track placement, and how it avoids feeling like just another gun.
- [Idea -> Spec Needed] Explosives Family: We already have a cool explosion primitive. This family should use it, expand it, or whatever else is needed to make it work for its members. One idea to make this family unique is that maybe you bank explosives and trigger it with a new input gesture. Maybe a bank at the top of the screen that you tap. We can have grenades for near enemies, rockets for far, and maybe a few other variations. Let's keep this low risk at first by standardizing on the existing neon factory explosion primitive for the visual. But it supports lots of options and we can spawn a bunch at a time (hopefully without killing perf).
  - Spec should decide: whether explosives are passive, banked, or manually triggered; how input works; member identities; sound ids; and perf limits for stacked explosions.

## Player Iteration

- [Spec Task] Currently a single hit (on a single player) or a single enemy pass ends the run. We should be more forgiving. There is a player HP concept wired up, but I don't know if it even works and I think we always set it to 1. We should audit the system and design a spec that makes sense. But I do think we want a health bar that reduces if the player is hit (post shield protection) or if an enemy passes the line. We probably need a health item and we need to rationalize how HP is affected when the player picks up a multiplier. Maybe multipliers add a unit and also fully restore health. Powerful, yet simple. Just an idea. It should be fully thought out.
  - First slice should be an audit/spec only unless explicitly asked to implement.
  - Spec should decide: HP per unit vs squad-level HP, what enemy contact costs, what breach costs, shield ordering, health pickup behavior, multiplier interaction, UI, and failure messaging.
  - Implementation should follow only after the spec is added here.

## Track Family Design and Balance

- [Completed] Catalog + authored journey recipes now generate all catalog tracks at startup through a shared deterministic composer.
  - `TrackDefinition` / `TrackBuilder` remain as runtime compatibility output, not an authoring target.
  - The literal row track editor was removed. Future track tuning should happen through readable journey grammar, family recipes, tier profiles, and composer debug summaries.
  - The old theme-specific procedural composer was replaced with shared family recipes, track recipes, tier profiles, deterministic seeded generation, simple player power estimates, simple threat estimates, boss pools, and composer debug summaries.
  - All existing track families use the recipe/composer path instead of preserving the old `gunSchoolPressure` / `guardBladePressure` / etc. procedural structure.
  - Catalog family exports are derived from the catalog instead of manually repeated.

- [Ready Task] Continue manual balance passes on generated track journeys.
  - Recent tuning focused on the first three tracks: early pacing, pickup/refuel beats, tier-gated weapons, close-range tier 3 support, boss spacing, tank HP, and final-act pressure.
  - Keep edits at the authored-intent layer when possible: `defaultJourney`, `familyRecipes`, `tierProfiles`, boss pools, and pressure style weights.
  - Avoid reintroducing literal row layouts or per-family procedural wave functions.
  - Verification: composer debug page, compose/parse determinism check, `npm run typecheck`, then play the affected track family.

- [Ready Task] Refine the runtime smoothing system after more playtesting.
  - Current smoothing is deterministic and clones authored upcoming enemy rows when both lanes have been cleared too far ahead.
  - Final-act smoothing is more aggressive, excludes bosses, and may clone recent rows only while planned enemies are still alive so tracks can finish.
  - Future tuning knobs: clear distance, spawn distance, cooldown, final-act threshold, max enemies per burst, source row window, and excluded enemy ids.
  - Acceptance: smoother reduces dead time without creating endless runs, duplicate boss floods, or unfair surprise walls.
  - Verification: run late-game checks where the player is overpowered and confirm the track still resolves after planned enemies die.

- [Spec Task] Add richer boss support.
  - `bossEnemies` is now a first-class recipe pool; `tank` is currently the only boss.
  - Future bosses should be added through enemy definitions and family boss pools, not regular `preferredEnemies`.
  - Decide per-boss threat, column span, smoothing exclusion, spawn cadence, and which tiers/families may use it.

- [Spec Task] Improve composer power/threat modeling.
  - The current model is intentionally lightweight and derived from existing weapon/enemy definitions.
  - Future passes should better account for actual weapon levels, squad size, close-range coverage, lightning chaining, shield charges, boss durability, and player recovery windows.
  - Goal: upgrades and multipliers should imply stronger follow-up pressure without making early tracks unfair.

- [Future Consideration] Track family presentation still has room to grow.
  - Family scene/background/accent remain catalog-driven.
  - Future soundtrack work could let a family define a set of tracks/mp3s to rotate, with each track choosing a first song.
  - Do not recolor item or weapon visuals per family unless the runtime already supports it safely; item and weapon colors should remain globally consistent.
## Test Discipline

- [Workflow / Audit] We have smoke tests and manual labs, but we don't have the notion of test suites that we can/should run at various points. We don't want to overdo it since so much of the game is about the end experience, which can't be automated all that easily.
  - First useful slice: document the current build/typecheck/manual/smoke options and when a thread should run each one.
- [Tooling / Larger Investment] I can imagine we implement a query string param for dev mode called ?autoplay=1 or something like that. When present it instructs an auto player to navigate the game loop and play the game. This is a casual game with simple input so it should not be hard to build an implementation that is good enough to beat all the levels. Then we can do overnight runs where it loops through every level with a timeout, with a crash watcher, console watcher, 404 watcher, etc. It runs over and over as long as its running. When I come to the PC in the morning I can see a web report of what happened like crashes, winning percentage per level, how many times it got through each level, dead time (how much time we were way ahead of the enemies and overpowering them, using track distances). It could be a good thing to do before any kind of wide release.
  - Should be spec'd before implementation because it affects dev mode, reporting, navigation, and expected stability signals.
