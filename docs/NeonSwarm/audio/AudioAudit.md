# NeonSwarm Audio Audit

Audited project:

`C:\Users\Adam\source\repos\JustTheGamesPlease\projects\NeonSwarm`

Output manifest:

`C:\Users\Adam\source\repos\JustTheGamesPlease\docs\NeonSwarm\audio\SoundRequests.json`

## Major gameplay systems discovered

- Track-based lane runner with selectable tracks, portrait canvas, two-lane movement, joystick fine aim, and developer-only camera/scene tools.
- Auto-firing gun system with scheduled volleys, projectile movement, piercing, muzzle effects, impact effects, and projectile removal.
- Five gun definitions: Pulse Pistol, Needler SMG, Burst Carbine, Heavy Cannon, and Splitter Rifle.
- Basic orb enemy system with health, speed, hit flash, death explosion, player contact, and breach/failure handling.
- Pickup systems for guns, shields, swords, and squad multipliers.
- Squad model with lane switching, aim offset, wingmate growth, and individual squad member loss on contact.
- Charge-based shield system with Light Guard, Satellite Guard, and Hex Guard definitions.
- Sword system with Arc Blade, Cleaver, and Needle Rapier definitions, threat queries, cooldowns, slash animation, and immediate melee damage.
- Track completion/failure result UI with victory particles on flawless completion.
- Track authoring/test tools that expose planned families and content beyond the currently shipped tracks.

## Existing audio implementation

The runtime currently uses the shared browser audio library through `window.gameAudio`.

Current calls in `src/main.ts` include:

- `playRotated("Primary", 3)` for gun firing and scheduled burst volleys.
- `play("Hit")` for projectile hits, shield deflections, and sword hits.
- `play("EnemyDestroyed")` for enemy death and some player-contact outcomes.
- `play("EnemyEscaped")` when an enemy breaches the defense line.
- `play("Pickup")` for all pickup families.
- `play("PuzzleComplete")` for a flawless completed track.
- `play("GameOver")` for track failure.

Existing assets in `docs/NeonSwarm/audio`:

- `Boss.mp3`
- `BossDestroyed.mp3`
- `Boss_Alt1.mp3`
- `EnemyDestroyed.mp3`
- `EnemyEscaped.mp3`
- `GameOver.mp3`
- `Hit.mp3`
- `Pickup.mp3`
- `Primary.mp3`
- `Primary_Alt1.mp3`
- `Primary_Alt2.mp3`
- `Primary_Alt3.mp3`
- `PuzzleComplete.mp3`
- `Secondary.mp3`
- `Secondary_Alt1.mp3`
- `Secondary_Alt2.mp3`
- `Shield.mp3`
- `Streak.mp3`

The manifest still includes existing concepts because it represents the desired sound library, not only missing files.

## Assumptions made

- The manifest uses `docs/NeonSwarm/audio` as the `location` because the requested output folder is the live game audio folder.
- Existing generic IDs such as `Primary`, `Pickup`, `Hit`, `PuzzleComplete`, and `GameOver` are preserved so current code can continue to resolve those files.
- More specific future-facing IDs are included for sound design coverage where the code currently collapses multiple events into one generic sound.
- `count: 3` is used for frequent events such as gun fire, enemy hits, enemy deaths, pickups, lane switches, shield impacts, and melee actions.
- `count: 1` is used for infrequent state changes such as victory, failure, menu transitions, shield recharge/break, and warnings.
- Boss-related assets are included because they already exist and the spec notes describe boss-like threats, even though the current NeonSwarm tracks do not yet spawn a boss entity.
- `Secondary` is included because it exists in the inherited audio set and represents a plausible future secondary weapon channel, even though current NeonSwarm combat uses guns, shields, swords, and multipliers instead of a distinct secondary-fire input.

## Interesting opportunities for additional sound design

- Split `Hit` into `ProjectileHit`, `EnemyHit`, `ShieldImpact`, `SwordHit`, and `HeavyImpact` so the player can distinguish damage source and weapon weight.
- Split `Pickup` into gun, shield, sword, and multiplier pickup sounds so each family has a readable identity before looking at the HUD.
- Give each gun family a distinct firing character: clean pulse, needler spray, grouped burst, heavy cannon, and split rifle twin shot.
- Add lane-switch feedback. Movement is central to the game and currently silent.
- Add shield lifecycle sounds: activation, impact, break, recharge, pulse, and aura. The code already has charge state and planned pulse/aura/contact paths.
- Add sword-specific swing variants. The sword definitions intentionally describe fast arc, heavy cleaver, and precise rapier personalities.
- Add subtle warning cues for low squad count and incoming pressure. These should be restrained to avoid annoyance during dense tracks.
- Add UI feedback for track cards and returning to the track select screen.

## Inferred areas

- Shield pulse, aura, and contact-damage behavior is present as disabled evaluator branches, so `ShieldPulse` and `ShieldAura` are inferred from planned systems rather than active runtime behavior.
- `NeedlerFire`, `BurstCarbineFire`, `HeavyCannonFire`, and `SplitterRifleFire` are inferred from gun definitions. Current runtime always plays `Primary`.
- `EnemySpawn` is inferred from track entity spawning and visual materialization; there is no current spawn sound call.
- `ProjectileMiss` is inferred from projectile removal when shots leave bounds; there is no current miss sound call.
- `PlayerDamage`, `SquadMemberLost`, and `LowHealthWarning` are inferred from squad member removal and failure risk; current runtime often plays `EnemyDestroyed` for contact.
- `WavePressure` is inferred from dense authored track rows and pressure pacing rather than an explicit wave-complete system.
- Boss sounds are inferred from existing assets and spec notes, not current shipped track entities.
