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

- [Idea -> Spec Needed] Lightning Family: Should bring unique ability to hit an enemy and have the lightning branch and effect nearby enemies. Branches can decay so that a child bolt spawns fewer child bolts than the main bolt. More powerful levels / variants can branch with more depth, span more rows, etc. We need to decide if its worth having multiple members of the family, but only if there is meaningful differentiation besides color and strength. This backlog item would need to be spec'd out in a dedicated thread before being implemented.
  - Spec should decide: family members, branch rules, level scaling, visuals, sounds, track placement, and how it avoids feeling like just another gun.
- [Idea -> Spec Needed] Explosives Family: We already have a cool explosion primitive. This family should use it, expand it, or whatever else is needed to make it work for its members. One idea to make this family unique is that maybe you bank explosives and trigger it with a new input gesture. Maybe a bank at the top of the screen that you tap. We can have grenades for near enemies, rockets for far, and maybe a few other variations. Let's keep this low risk at first by standardizing on the existing neon factory explosion primitive for the visual. But it supports lots of options and we can spawn a bunch at a time (hopefully without killing perf).
  - Spec should decide: whether explosives are passive, banked, or manually triggered; how input works; member identities; sound ids; and perf limits for stacked explosions.

## Player Iteration

- [Spec Task] Currently a single hit (on a single player) or a single enemy pass ends the run. We should be more forgiving. There is a player HP concept wired up, but I don't know if it even works and I think we always set it to 1. We should audit the system and design a spec that makes sense. But I do think we want a health bar that reduces if the player is hit (post shield protection) or if an enemy passes the line. We probably need a health item and we need to rationalize how HP is affected when the player picks up a multiplier. Maybe multipliers add a unit and also fully restore health. Powerful, yet simple. Just an idea. It should be fully thought out.
  - First slice should be an audit/spec only unless explicitly asked to implement.
  - Spec should decide: HP per unit vs squad-level HP, what enemy contact costs, what breach costs, shield ordering, health pickup behavior, multiplier interaction, UI, and failure messaging.
  - Implementation should follow only after the spec is added here.

## Track Family Design and Balance

- [Audit / Cleanup] We have done a decent job of automating a lot of the design of the track families. But I don't think we have the grammar optimized for automated work and we still have a bunch of loose track files around that are small and noisy.
  - First useful slice: inspect the current composer/generated track split and propose a small cleanup that reduces noise without hiding useful authored data.
- [Spec Task] Some grammar ideas that should help.
- Composer
  - Track Family: Defines the theme for a track progression that is presented on the main tracks screen.
    - Color (feeds into tracks to modify enemy colors, player color, but probably not item or weapon color since those should be consistent across the whole game).
    - Background Image is the same across the entire family.
      - P2 idea: Currently background images don't move with the camera when the player shifts lanes. First stage of the idea would be to create a scheme where it shifts a little bit (might require new image size standard?). A way to take this even further is to define background layers (e.g. BG, FG) where the lane shift create a parallax effect where the FG layer(s) shift more dramatically on lane shift compared to BG layers. Maybe each layer has a distance property somewhere that defines the effect. I'm not sure it's worth it, but if you are asked to do some polish work you should be able to look at the existing images and use imagegen to build this.
      - [Ready Task / Quick, Easy, Low Risk] A few of the existing backgrounds (Crystal Forge, Solar Array) have great visuals, but they set the horizon way too high in the image and it breaks the illusion. The other backgrounds look great as the horizon is about halfway up the image. We need to generate new images that are very similar to the existing ones, but with the horizon moved.
        - Verification: Visual check in the actual game viewport on the affected track families.
    - P2: Optionally define overrides for player hp, enemy speed, or other balance values. Should reuse the lowest level primitives rather than invent something new.
    - Soundtrack to match the theme (set of mp3s to rotate, maybe each track picks a different first track).
- Track Definition
  - The existing track definition is pretty good and should be good enough for the composer and its grammar to effectively manage, but if anything is needed by the composer it can be plumbed here as needed.

## Test Discipline

- [Workflow / Audit] We have smoke tests and manual labs, but we don't have the notion of test suites that we can/should run at various points. We don't want to overdo it since so much of the game is about the end experience, which can't be automated all that easily.
  - First useful slice: document the current build/typecheck/manual/smoke options and when a thread should run each one.
- [Tooling / Larger Investment] I can imagine we implement a query string param for dev mode called ?autoplay=1 or something like that. When present it instructs an auto player to navigate the game loop and play the game. This is a casual game with simple input so it should not be hard to build an implementation that is good enough to beat all the levels. Then we can do overnight runs where it loops through every level with a timeout, with a crash watcher, console watcher, 404 watcher, etc. It runs over and over as long as its running. When I come to the PC in the morning I can see a web report of what happened like crashes, winning percentage per level, how many times it got through each level, dead time (how much time we were way ahead of the enemies and overpowering them, using track distances). It could be a good thing to do before any kind of wide release.
  - Should be spec'd before implementation because it affects dev mode, reporting, navigation, and expected stability signals.
