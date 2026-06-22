# 012 — Complete the first playable game loop

## Outcome

Soap, water, and rotary form a clear start-to-finish cleaning game with meaningful difficulty modes, honest progress, reset, and completion.

## Dependencies

010 and 011.

## In scope

- Start overlay, instructions, toolbox behavior, clean/dry progress, reset, and completion presentation.
- Easy, medium, and hard seeded profiles using the shared top-bar select.
- Progress derived only from soil remaining on/in carpet; dryness derived from carpet water state.
- Deterministic playtest fixtures and target completion-time tuning.

## Out of scope

Squeegee, extractor, brush, final audio pass, and broad performance optimization.

## Acceptance criteria

- Correct easy-mode play completes in approximately 30 seconds.
- Incorrect sequencing is slower and may redistribute soil without corrupting progress.
- Dirt on floor or recorded in drain counts removed; dirt remaining on/in carpet counts dirty.
- Completion requires both cleanliness and dryness thresholds and reports tool usage.
- Restart and difficulty changes fully reset authoritative state.

## Human review

Complete easy mode correctly, try an intentionally poor sequence, switch every difficulty, and verify progress against diagnostic soil fields.

