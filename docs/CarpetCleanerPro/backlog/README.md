# Carpet Cleaner Pro backlog

This backlog breaks the game into reviewable vertical slices. Execute pending tasks in numeric order unless a task explicitly states that it can run in parallel.

## Workflow

1. Read the game-level `AGENTS.md` and the selected task completely.
2. Confirm every dependency is in `completed`.
3. Implement only the task's in-scope work. Record newly discovered work as a new pending task instead of expanding scope silently.
4. Run the automated checks and the human review script listed in the task.
5. Add a short **Completion notes** section containing decisions, test results, measured performance where relevant, and follow-up task IDs.
6. Move the task file unchanged except for completion notes from `pending` to `completed` in the same change that completes the work.

`pending` is the source of truth for remaining work. `completed` retains architectural history and validation evidence. A task is not complete merely because code exists; all acceptance criteria must pass.

## Task shape

Each task must be cohesive enough to review as one engineering decision and small enough to validate in one browser session. Every task includes:

- outcome and rationale;
- dependencies;
- explicit in-scope and out-of-scope boundaries;
- implementation constraints;
- objective acceptance criteria;
- a human review script.

## Current sequence

| ID | Outcome | Depends on |
|---|---|---|
| 001 ✓ | WebGPU runtime shell and diagnostics | — |
| 002 ✓ | Fixed-step simulation framework | 001 |
| 003 ✓ | Cinematic room, floor, rug, and drain | 001 |
| 004 | Authoritative material fields and accounting | 002 |
| 005 | Procedural carpet fibers and patterns | 003, 004 |
| 006 | Buttery pointer stroke pipeline | 002, 003 |
| 007 | Soap applicator vertical slice | 004, 005, 006 |
| 008 | Water, slope flow, and pooling | 004, 005, 006 |
| 009 | Soil chemistry, mud, and foam | 007, 008 |
| 010 | Rotary cleaner vertical slice | 006, 009 |
| 011 | Drain transport and waste accounting | 008, 009 |
| 012 | Playable loop, difficulty, progress, and completion | 010, 011 |
| 013 | Audio, haptics, analytics, and polish | 12 |
| 014 | Performance budgets and release hardening | 12, 13 |
