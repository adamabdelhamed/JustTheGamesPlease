## Neon Factory

This is a TypeScript project that compiles to a single js file that is expected to be built and placed in **docs\lib\neonfactory.js**.

It is a reusable library that encapsulates the neon design language used by many games. Since the library is in a new state we won't worry about migrating all of the existing games until explicitly asked.

## Creative Direction

The visual design follows a strict no-assets policy. The game should not depend on hand-authored sprites, imported models, texture packs, animation sheets, or external art pipelines. Everything should be generated from procedural geometry: triangles, diamonds, hexagons, arcs, rings, beams, trails, spline slashes, jagged lightning paths, segmented shields, particles, gradients, and shader-driven effects. This keeps the game easy to evolve, friendly to agentic coding, fast to load, and highly portable as a static browser game.

This is not a compromise on visual ambition. We still want rich lighting, glow, bloom, texture, shadow, motion trails, impact flashes, depth, and satisfying juice. The bet is simply that most gameplay objects should be built from clear geometric forms rather than expensive authored assets. Simple shapes improve readability, make enemies and weapons distinct at a glance, preserve performance under heavy on-screen action, and reduce implementation risk. The goal is a polished neon motion-graphics shooter where clarity and spectacle reinforce each other.


## Dependencies

Depends on the shared controller library in docs\lib\controller since the objects in the library should define how they are designed to be operated by the user either in test or game runtime settings.

Depends on the shared audio library in docs\lib\audio since the objects will want to match the auditory experience with the visuals and movement patterns.

## Features

### Visuals

These are just a start. As we build up the library we'll maintain a high level feature catalog.

- Colors - The neon color palatte
- Glows - To make the neon effects consistent
- Shapes (2d and 3d) like orbs, projectiles
- Machinery (2d and 3d) like characters, weapons with mechanisms, rockets, slingshots, etc
- Scenes (2d and 3d) like rooms, outdoor scenes, etc

### Testability

- All assets should be able to be loaded into a test page that renders them with whatever controls are relevant for the object.
- Games should be able to leverage the test page system and build their own test pages with behavior, controls, etc.
- Unit tests should only be used when they truly derisk a regression. Since this is a visual system the most valuable piece is going to be test pages that a human or agent can load in a browser to evaluate behavior.
- There should be an opt in pattern for test pages to have drivers and assertions so that a test page can perform some automated check. Eventually we can register groups of pages into suites like smokeTest, CD, and Full.

