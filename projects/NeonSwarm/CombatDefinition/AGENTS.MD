## Combat Definition

This folder's contents represent the heart and soul of the Neon Swarm game.

Each implemented game concept has its own typed `*Family.ts` contract. Family modules are runtime APIs, not documentation: all balance, power, timing, movement, collision, material, and visual intensity tunables for that concept belong in its definition rather than gameplay implementation code.

Definitions should extend the shared `FamilyDefinition` base, export their public types, validate themselves during construction, and export one validated family instance. Use literal unions and `satisfies` so invalid behavior ids, colors, and member shapes fail TypeScript compilation.

`Spec-Ideas.json` is retained as design input only. It is not a runtime contract and must not be imported by game code.

When adding or changing a family:

- Keep the module independently understandable and strongly typed.
- Import NeonFactory's first-class visual tokens instead of duplicating raw colors where practical.
- Validate value ranges in the family class and fail with a useful error.
- Add or update a manual test page for the family.
- Do not duplicate balance constants in TypeScript.

Weapon families should support five runtime levels. Track definitions and composers should author weapon/item ids only, not pickup levels; the runtime pickup-memory system decides which level a dropped weapon grants.

## Context

There is an existing NeonSwarm game in **docs\Swarm**. We are about 50% happy with the pace and style. We are not happy about the diversity of weapons, power balance, enemies, etc. That is the big thing that this combat definition will aim to improve upon.
