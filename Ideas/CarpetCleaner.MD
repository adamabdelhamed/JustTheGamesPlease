## Carpet Cleaner

This game mimics viral carpet cleaning videos on the internet. It is an ASMR experience that generates random carpets and dirt profiles each time.

The user has access to several tools like a brush, a powerful rotary cleaner, a hose, a squeegie, soap, etc.

These tools operate on a shared model that defines how effective each tool is at any location.

There is a drain off to the right a few feet from the carpet. The floor is tilted towards the drain so that water (clean or dirty), mud, debris, and soap tend to move in that direction.

The fidelity is a high quality 3d representation of the world state (carpet, floor, debris, liquid, etc). There are no fake particles just for show. Everything on the screen is a part of the simulation.

Using a tool correctly (e.g. soap, water, then rotary) makes it clean the dirt faster. Using it incorrectly might just spread dirt around end end up adding dirt to previously cleaned areas.

The user has intuitive and natural control of each tool. They control the direction of the water from the hose, the orientation of the squeegie, etc. 

Elements mix with realism and satisfaction. Water + dirt = mud. Water on dirty water makes the water less dirty. No faking it. We are really simulating the interactions. Realistic water, foam, dirt, and mud is really important.

Organize the code to be modular, yet cohesive. 

Use the existing audio system, top bar library, and analytics to track usage. I will add mp3 files later (for now the audio calls no op).

The user gets a progress bar to measure cleanliness. Any dirt on top of the carpet counts as dirty. Any dirt that is on the floor or in the drain counts as clean. The user wins when they remove all the dirt.

There are 3 difficulty modes (using the shared top bar library). In the easiest mode the carpet should get clean in 30 seconds or so if they use the tools right.

## Plan

Iterate one step at a time with human validation at each step. If we build it all at once we'll make too many mistakes that will have to be corrected. We have to be careful in order to make this work. 

Slice 1: The carpet, and toolbox with just soap, water, and a rotary tool. Don't compromise on the long term shape of the models and experiences. This slice should be fully functional in terms of the game loop with difficulty levels.

Slice 2: Add the squeegie, which should work best when the surface is very wet.

## Technology

The game is implemented as a standalone static HTML application that can be hosted on GitHub Pages with no server-side dependencies.

### Rendering

Use Three.js for rendering.

The world is rendered as a high-quality 3D scene with:

- Fixed isometric-style camera
- Physically based rendering (PBR) materials
- Directional sunlight and ambient lighting
- Soft shadows
- High resolution procedural carpet textures
- Screen-space effects only if they improve visual quality without harming performance

The camera remains fixed throughout gameplay. The user should never need to rotate or move the camera.

The visual presentation should evoke the satisfying look of viral carpet cleaning videos while remaining performant on desktop and mobile devices.

### Simulation Architecture

The simulation is authoritative.

Visuals must be derived from simulation state rather than driving simulation state.

Avoid fake progress effects, fake dirt removal, or scripted cleaning animations.

The simulation owns:

- Dirt
- Water
- Soap
- Mud
- Foam
- Debris
- Cleanliness

The renderer visualizes the current simulation state.

### Simulation Grid

The world is represented by a high-resolution simulation grid.

Each simulation cell stores material quantities such as:

```ts
interface Cell
{
    dirt: number;
    water: number;
    soap: number;
    mud: number;
    foam: number;
    debris: number;
}
```

The carpet occupies a subset of the grid.

The surrounding floor occupies the remaining area.

The drain is a special region that removes material from the simulation.

The simulation grid is the source of truth for all interactions.

### Material System

Materials are conserved whenever practical.

Example:

```text
Dirt
+ Water
=
Mud
```

```text
Mud
+ Drain
=
Removed Waste
```

```text
Dirty Water
+ Clean Water
=
Cleaner Water
```

Material interactions should emerge from simulation rules rather than hardcoded tool behavior.

### Tool Architecture

Tools do not directly clean.

Tools inject energy and materials into the simulation.

Examples:

Water Hose
- Adds water
- Applies directional force

Soap Applicator
- Adds soap

Rotary Cleaner
- Applies agitation
- Mixes nearby materials
- Loosens embedded dirt

Squeegee
- Applies directional displacement
- Pushes liquid and debris

Brush
- Applies localized directional displacement
- Effective against loose debris

Each tool operates against common simulation interfaces.

Example:

```ts
interface Tool
{
    update(world: SimulationWorld, input: ToolInput): void;
}
```

Tools should remain thin.

The majority of behavior should live inside the simulation model.

### Fluid Approximation

Use a lightweight grid-based fluid model rather than particle simulation.

Goals:

- Believable water movement
- Real-time performance
- Deterministic behavior
- Mobile compatibility

The simulation should support:

- Flow downhill
- Pooling
- Mixing
- Drainage
- Directional movement from tools

The objective is satisfying behavior rather than scientific accuracy.

### Carpet Model

Each generated carpet contains:

```ts
interface Carpet
{
    pattern: Pattern;
    colors: ColorPalette;
    dirtProfile: DirtProfile;
}
```

Procedural generation creates:

- Geometric patterns
- Floral patterns
- Persian-inspired patterns
- Modern abstract patterns
- Randomized color palettes

The visual reward comes from revealing the hidden carpet beneath accumulated dirt.

### Dirt Model

Multiple dirt layers should exist.

Examples:

- Loose debris
- Dust
- Embedded dirt
- Wet mud

Different tools should naturally perform better against different dirt types.

The player learns effective cleaning sequences through experimentation.

### Input

Input should feel direct and tactile.

Mouse:

- Aim hose
- Rotate tools
- Drag tools
- Control cleaning direction

Touch:

- Single finger drag
- Two finger rotation where appropriate

Input latency should be minimized.

The player should feel physically connected to the tools.

### Audio

Integrate with the existing audio infrastructure.

Audio calls should be wired immediately even if assets are unavailable.

Initial sounds may be no-ops.

Planned sound categories:

- Water spray
- Rotary machine
- Brush scrubbing
- Squeegee scraping
- Foam bubbling
- Drain sounds
- Completion sounds

Audio should react to simulation state rather than fixed timers.

Example:

- More water volume produces louder water sounds.
- Rotary intensity affects motor sound.

### Analytics

Integrate with the existing analytics framework.

Track:

- Game started
- Game completed
- Difficulty selected
- Tool usage duration
- Completion time
- Abandonment point
- Average cleanliness progression

Analytics should remain implementation-independent.

### UI Integration

Reuse existing shared infrastructure:

- Top bar library
- Difficulty selector
- Audio system
- Analytics system

The game should follow the same patterns as other games in the repository.

### Performance Targets

Desktop:
- 60 FPS minimum
- 120 FPS preferred

Mobile:
- 30 FPS minimum
- 60 FPS preferred

Simulation updates should remain bounded.

Avoid per-frame allocations.

Avoid creating transient objects during gameplay.

Prefer reusable buffers and pooled structures.

### Extensibility

The architecture should support future additions without major redesign.

Future tools may include:

- Pressure washer
- Scraper
- Vacuum
- Steam cleaner
- Extraction wand
- Chemical cleaners

Future materials may include:

- Oil
- Paint
- Pet stains
- Sand
- Mold

Future environments may include:

- Rugs
- Car interiors
- Upholstery
- Tile floors
- Industrial cleaning scenarios

New tools and materials should primarily be added through simulation rules rather than special-case logic.

## Status

Not started.