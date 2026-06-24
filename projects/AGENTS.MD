## Neon Swarm

Neon Swarm is a casual two lane shooter that runs in the web. This project is a TypeScript project that should compile and build into docs\NeonSwarm (next to the existing docs\Swarm game until it's in good enough shape to replace it). The game should use in progress metadata in the index (docs\index.html) so that it only shows on the dev page.

This is the first game to use the new projects pattern. We will have to update the github workflow to perform the build and binplace step so that the final bits make their way to the docs folder.

## Dependencies

This project should use the NeonFactory for all visuals so that it sets the precedent of using a consistent neon design language across all games.

## Systems

### Combat

The game’s combat system should be organized around distinct weapon and defensive families rather than a flat list of stronger pickups. Each family should have its own mechanical role, visual silhouette, motion language, and power curve. Gun-family weapons provide reliable lane-forward damage and scale through fire rate, projectile speed, and damage. Beam weapons trade frequency for piercing precision. Slash weapons create short, high-impact melee arcs that clear immediate threats. Electric weapons reward clustered enemy layouts with chain reactions. Missile weapons provide slower, heavier targeted damage against durable threats. The goal is not just to give the player “more DPS,” but to let each weapon family change how the run feels.

Defensive systems should follow the same family-driven approach. Shields are not just different colored circles around the player; they should solve different survival problems. Orbit shields are simple readable hit absorbers. Segmented shields make remaining protection visually countable. Front barriers create directional defense and can support reflection later. Pulse shields act as emergency breathing-room tools. Aura shields, like frost fields, change enemy behavior by slowing or weakening nearby threats. These systems should be visually distinct, mechanically understandable, and balanced against the rising enemy pressure so the player alternates between feeling powerful, squeezed, rescued by a pickup, and then threatened again.

There need to be distinct sets of families for the player vs. the enemies.

The properties and expectations for the different families are documented in the CombatDefinition folder. The layers that depend on the definitions must obey and tailor themselves to the definitions. 

### Testability

Neon Swarm will use the NeonFactory's testability primatives to make test pages for game objects like the lane runner tracks. We'll also have test pages (or whatever mechanism makes sense) for each weapon, shield, etc. Each family can also define its own drivers and assertions for a smoke test, a CD test, and a Full Test (optional). Smoke test could be something like the 'Gun' family loading a single player, putting him in a lane with a single weak enemy approaching, and expecting that the projectile from the gun kills the enemy before the enemy kills him. Whenever you implement a new object it should have test pages defined. Keep in mind, test pages will have 2 shapes. One is for manual playing around and should have controls like "spawn specific type of enemies". The other is for automation (either manually triggered by loading the page or auto triggered by a suite).
