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

- [Audit / Cleanup] We have done a decent job of automating a lot of the design of the track families, but the current composer/generated track split still feels noisy. The grammar may also be too close to literal layout generation instead of authored design intent.
  - First useful slice: inspect the current composer/generated track split and propose a small cleanup that reduces noise without hiding useful authored data.
  - Preserve old hardcoded / authored tracks if they contain useful design information, but move noisy generated row data behind a clearer generated/composer boundary.
  - Prefer keeping authored intent, catalog metadata, tuning, and recipes in source control. Avoid keeping large generated layouts as standalone source files unless there is a clear reason.
  - Do not break the existing track definition format. The old format should continue to work beside the composer-generated tracks.

- [Spec Task] Improve the track family composer grammar so it can generate compelling track families and tracks dynamically from the catalog, available weapons, pickups, enemy types, balance data, and any existing game concepts discovered in the codebase.
  - Treat the interfaces below as design direction, not a rigid required shape. Adapt names, types, and boundaries to fit the existing code.
  - Prefer reusing existing primitives, item definitions, enemy definitions, balance structures, weapon tuning values, and track definitions instead of inventing parallel concepts.
  - The composer should be deterministic when given a seed so generated tracks are reproducible.
  - The composer should be able to react reasonably when new weapons, pickups, enemies, or balance values are added later.

- User Journey Grammar
  - The layer most responsible for the player’s experience should use a simple, human-readable grammar.
  - This should be the safest place for a future human or coding agent to make design adjustments.
  - This layer should describe the journey in plain design concepts, not low-level row placement.
  - Editing this layer should not require understanding every detail of enemy placement, weapon math, or layout compilation.
  - Small edits here should have bounded effects on balance.
    - Example: increasing a pressure segment from `"medium"` to `"high"` should stay within the tier’s allowed threat envelope.
    - Example: adding a rebuild beat should create a controlled recovery window, not accidentally flood the player with overpowered items.
    - Example: adding a multiplier payoff should automatically imply stronger follow-up pressure.
  - Prefer readable track journey terms such as:
    - `intro`
    - `ramp`
    - `lesson`
    - `check`
    - `pressure`
    - `rebuild`
    - `spike`
    - `payoff`
    - `finale`
  - Avoid making this top-level layer expose fragile controls like exact rows, columns, speed multipliers, raw threat scores, or enemy counts unless there is a clear reason.
  - The journey grammar should compile into lower-level beat primitives, and those primitives should compile into the existing track definition.

- Composer
  - Track Family: Defines the theme for a track progression that is presented on the main tracks screen.
    - Color / accent feeds into tracks to modify enemy colors, player color, and family UI treatment.
      - Do not recolor items or weapon visuals unless the existing code already supports that safely. Item and weapon colors should generally remain consistent across the whole game.
    - Background image / scene is shared across the family.
    - Soundtrack should match the theme.
      - Use whatever soundtrack or audio concepts already exist in the code.
      - Desired model: a family can define a set of tracks/mp3s to rotate, and each track may choose a different first song.
    - Content palette / bias:
      - The family should be able to prefer, allow, or avoid certain weapons, pickups, enemy types, node shapes, or mechanics.
      - Example: a shield/sword family should bias toward shields, blades, close-range cleanup, and enemies that make those tools relevant.
      - Example: a gun school family should bias toward firearm choices and clear ranged pressure.
    - P2: Optionally define overrides for player hp, enemy speed, enemy hp, or other balance values.
      - Reuse the lowest-level balance primitives already present in the code.
      - Do not create a separate balance system unless the current one cannot support the composer.

  - Track: A choreographed arrangement of beats designed to provide a specific type of experience.
    - Track data should express design intent more than literal row data.
    - Useful track-level concepts:
      - tier / difficulty
      - seed
      - family id
      - design goals
      - rough duration / row target
      - pressure curve
      - allowed or preferred content
      - balance overrides, if needed
    - Example track goals:
      - teach basic lane reading
      - teach choice between pickups
      - teach shield rebuild
      - teach sword / close-range cleanup
      - test sustained pressure
      - test mirrored reads
      - test tank break
      - test multiplier payoff
      - test squad recovery
    - Example track shape:
      - Ramp: Set the tone by deciding which weapons/items the player starts with or receives early.
      - Lesson: Introduce a tool or threat pattern in a forgiving way.
      - Check: Give a small, readable test that confirms the player can use the new tool or pattern.
      - Pressure: Make the player prove they can handle an attack designed to be beatable with the ramp items.
      - Rebuild: Brief recovery with intentional pickups or choices.
      - Challenge: A meaningful increase in pressure after the player has been given tools.
      - Spike: A scary but fair difficulty peak, ideally telegraphed.
      - Payoff: A segment where a recent upgrade, multiplier, shield, sword, squad growth, or weapon choice feels powerful.
      - Finale: A final sustained read that combines the track’s main ideas.
    - Rest should be brief and intentional.
      - The current code appears to give too much rest.
      - Rest should often become “rebuild” instead of empty space.
      - Be very intentional with multiplier upgrades because they dramatically increase the player’s ability to fight.
      - Upgrades should usually be followed by a meaningful increase in pressure.

  - Tier / Difficulty Profile:
    - The existing `tier: 1 | 2 | 3` is useful, but the composer needs a concrete interpretation of what each tier means.
    - Inspect the current balance model and define tier profiles using existing concepts where possible.
    - Useful tier profile values may include:
      - target duration / rows
      - total threat budget
      - max threat spike
      - pickup budget
      - upgrade budget
      - max simultaneous pressure
      - min/max rest or rebuild spacing
      - enemy hp multiplier
      - enemy speed multiplier
      - allowed pattern complexity
    - Tier 1 should teach and feel readable.
    - Tier 2 should combine ideas and apply more sustained pressure.
    - Tier 3 should test mastery with longer pressure, stronger enemies, and fewer safety nets.
    - The user-journey grammar should map simple labels like `"low"`, `"medium"`, `"high"`, and `"peak"` into tier-relative threat values.
      - A tier 1 `"high"` pressure segment should not mean the same raw threat as a tier 3 `"high"` segment.
      - This keeps the authored journey easy to read while preserving balance.

  - Player Power Model:
    - The composer needs a lightweight way to estimate how strong the player is after pickups and upgrades.
    - This does not need to be a full simulation.
    - Inspect existing weapon, pickup, shield, squad, multiplier, and player systems to find the best way to estimate power.
    - Weapons already have power tunings in their definitions. Codex should leverage those existing values instead of creating a disconnected power model.
    - Useful power dimensions may include:
      - ranged power
      - close-range power
      - burst power
      - shield strength
      - lane coverage
      - squad size / follower count
      - multiplier strength
      - recovery / safety
    - Pickups and upgrades should influence this model.
    - Pressure should be generated relative to current estimated player power.
    - This should help avoid tracks that give weak tools before impossible pressure or huge multipliers followed by trivial pressure.
    - If existing weapon tuning already captures power, range, rate, cooldown, target count, family, or role, use those values directly or derive from them.
    - Avoid duplicating weapon balance numbers in the composer.

  - Threat Model:
    - Pressure should be budgeted by estimated threat, not only by enemy count.
    - Inspect existing enemy definitions for hp, speed, behavior, lane/column impact, and special properties.
    - Define or derive a simple threat score per enemy type.
    - Useful threat factors may include:
      - enemy hp
      - enemy speed
      - column/lane pressure
      - special behavior
      - close-range danger
      - density and spacing
    - The composer should be able to request “about N threat” and let the generator choose concrete enemy placements that fit the family, tier, and player power state.

  - Beat Primitive: a well-defined pattern of incoming traffic or pickups.
    - Pickup: A single pickup item.
    - Choice: Two or more pickup items in the same row but in different lanes/positions, where the player cannot trivially take everything.
    - Pressure: A run of enemy placements with options for lane, columns, enemy type, count, density, gaps, mirroring, alternation, and threat budget.
    - Rest: Blank rows that give the player a short recovery beat.
    - Rebuild: A short recovery beat that includes useful pickups or choices.
    - Upgrade: A pickup or choice that significantly changes player power.
      - Multipliers should be treated as major upgrades.
    - Warning / Telegraph: Space or setup before a dangerous pattern so the player can read what is coming.
    - Check: A small test after introducing a tool.
      - Example: after giving a shield, create pressure that makes shield contact useful but not mandatory.
      - Example: after giving a sword, create close-range cleanup opportunities.
    - Spike: A short, deliberate difficulty peak with recovery/relief afterward.
    - Payoff: A segment designed to make a recent upgrade feel good.

  - Composite Beats: arrays of beat primitives designed to work together.
    - Alternating Pressure:
      - Two or more pressure primitives that run in parallel or sequence.
      - Supports dense waves and strategically placed gaps.
      - Example: left pressure with right gap, then right pressure with left gap, repeated.
    - Challenge:
      - Some number of pickups or choices followed by an increase in pressure.
      - Should be tunable by threat budget and density.
    - Ramp:
      - Initial exposure to items designed to get the user started, followed by an initial fair wave of pressure.
    - Rebuild:
      - Short recovery, usually with a controlled pickup/choice, followed by renewed pressure.
    - Spike:
      - Telegraph, scary pressure, then brief relief or rebuild.
    - Payoff:
      - Give or assume a specific power source, then create pressure that lets it shine.
    - Finale:
      - Combines the track’s main ideas into a readable final test.

- Track Definition
  - The existing track definition is pretty good and should be good enough for the composer and its grammar to manage.
  - If the composer needs additional information, plumb it into the existing track definition carefully.
  - Avoid replacing the current track definition unless there is a strong reason.
  - The composer should compile down to the existing track format wherever possible.
  - Preserve compatibility with existing authored tracks.

- Catalog Integration
  - The current catalog is useful and should remain the main authored source for family/track identity.
  - The catalog should describe:
    - family id
    - family label
    - family description
    - scene/background
    - accent color
    - theme
    - track ids
    - track label
    - track description
    - tier
  - Reduce duplication where possible.
    - For example, `trackFamiliesFromCatalog` should probably be derived from `trackFamilyCatalog` instead of manually repeated.
  - The catalog should not need to contain literal layout rows.
  - Add recipe/design metadata near the catalog only where it represents meaningful authored intent.

- Dynamic Generation
  - The composer should take the catalog/family/track recipe and dynamically create the layout using available weapons, items, enemy types, balance values, weapon power tuning, and discovered game systems.
  - Generation should be deterministic from a seed.
  - A reasonable default seed could include track id, balance version, and content catalog version if those concepts exist or can be added cheaply.
  - If new weapons, items, enemies, or balance values are added, the composer should be able to include them when appropriate without making tracks wildly unbalanced.
  - The composer should first select a content pool for the track/family, then generate beats from that pool.
    - Avoid selecting totally random content row by row.
    - Tracks should feel authored and thematically coherent.
  - The high-level journey grammar should remain stable even as lower-level generation improves.
    - Future agents should be able to tune the experience by editing the journey without needing to rewrite primitive generation.

- Debuggability
  - Add composer debug output that can be used during development.
  - Useful debug info:
    - seed
    - family id
    - track id
    - tier
    - selected weapons
    - selected pickups
    - selected enemy types
    - generated row count
    - threat estimate by segment
    - player power estimate by segment
    - weapon power values used from existing definitions
    - warnings when generation had to compromise
  - Debug data does not need to ship to runtime unless useful.
  - The goal is to make generated tracks inspectable instead of magic.

- Suggested First Implementation Slice
  - Inspect the current track files, generated files, composer code, catalog code, item definitions, weapon definitions, enemy definitions, and balance definitions.
  - Propose and implement a small cleanup of the composer/generated/authored split.
  - Keep the old track format working.
  - Add or adapt recipe types for:
    - track family recipe
    - track recipe
    - tier profile
    - user journey grammar
    - beat primitives
    - composite beats
    - simple player power estimate based on existing weapon/item tuning
    - simple threat estimate
  - Implement deterministic seeded generation.
  - Start with a small grammar:
    - intro
    - ramp
    - lesson
    - pressure
    - rest
    - rebuild
    - challenge
    - finale
  - Add spike/payoff/check/telegraph only if they fit naturally into the existing code after inspection.
  - Convert one existing family to the new recipe/composer path first.
  - Verify the old authored tracks still work.
  - Add debug output so generated tracks can be evaluated.
  - Include at least one example track journey that is easy for a human to read and safely adjust.

- Design Goal
  - The composer should not become a purely random procedural generator.
  - It should act like a constrained design assistant.
  - Authored data should describe intent:
    - family theme
    - available/preferred content
    - track tier
    - design goals
    - pressure arc
    - balance constraints
    - player journey
  - The most user-experience-critical layer should be readable, stable, and safe to edit.
  - Lower-level systems should absorb complexity:
    - translating journey labels into tier-relative threat budgets
    - using existing weapon tuning to estimate player power
    - selecting fair pickups
    - compiling pressure into concrete rows
    - enforcing balance boundaries
  - The composer should produce a deterministic playable track layout that satisfies the authored intent using the current game content.
  - This should reduce noisy track files while preserving the parts humans actually care about: theme, progression, tuning, and authored experience.

## Test Discipline

- [Workflow / Audit] We have smoke tests and manual labs, but we don't have the notion of test suites that we can/should run at various points. We don't want to overdo it since so much of the game is about the end experience, which can't be automated all that easily.
  - First useful slice: document the current build/typecheck/manual/smoke options and when a thread should run each one.
- [Tooling / Larger Investment] I can imagine we implement a query string param for dev mode called ?autoplay=1 or something like that. When present it instructs an auto player to navigate the game loop and play the game. This is a casual game with simple input so it should not be hard to build an implementation that is good enough to beat all the levels. Then we can do overnight runs where it loops through every level with a timeout, with a crash watcher, console watcher, 404 watcher, etc. It runs over and over as long as its running. When I come to the PC in the morning I can see a web report of what happened like crashes, winning percentage per level, how many times it got through each level, dead time (how much time we were way ahead of the enemies and overpowering them, using track distances). It could be a good thing to do before any kind of wide release.
  - Should be spec'd before implementation because it affects dev mode, reporting, navigation, and expected stability signals.
