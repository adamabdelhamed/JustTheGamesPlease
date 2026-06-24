## Combat Definition

This folder's contents represent the heart and soul of the Neon Swarm game.

Each implemented game concept has its own `*Family.json` contract. Family files are runtime data, not documentation: all balance, power, timing, movement, collision, and visual intensity tunables for that concept belong in its JSON file rather than TypeScript.

Keep family implementations reusable and data-driven. A family owns shared mechanics; its members primarily select declarative values and named behaviors. Optional escape hatches are allowed, but they must layer onto the family engine rather than create parallel one-off systems.

`Spec-Ideas.json` is retained as design input only. It is not a runtime contract and must not be imported by game code.

When adding or changing a family:

- Keep the file independently understandable and valid JSON.
- Copy it into the built site's `NeonSwarm/specs` folder.
- Validate required fields at runtime and fail with a useful visible error.
- Add or update a manual test page for the family.
- Do not duplicate balance constants in TypeScript.

## Context

There is an existing NeonSwarm game in **docs\Swarm**. We are about 50% happy with the pace and style. We are not happy about the diversity of weapons, power balance, enemies, etc. That is the big thing that this combat definition will aim to improve upon.
