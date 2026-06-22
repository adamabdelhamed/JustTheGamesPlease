# 013 — Add audio, tactile feedback, analytics, and presentation polish

## Outcome

Every action has state-responsive feedback while shared audio and analytics integrations remain accurate and unobtrusive.

## Dependencies

012.

## In scope

- Shared audio integration and calls for future MP3 assets.
- State-driven loop layers/parameters for spray, rotary contact, foam, wetness, and drainage.
- Conservative haptics where supported and initiated by user input.
- Analytics for load, start, difficulty, tool use, progress milestones, completion, and capability failure.
- Final first-slice transitions, hints, and accessibility labels.

## Out of scope

Creating MP3 files, new cleaning tools, and simulation-rule changes solely for presentation.

## Acceptance criteria

- Missing audio files fail silently and do not affect gameplay.
- Feedback changes correspond to authoritative contact/material state.
- Dev mode suppresses analytics through the shared library.
- All controls are keyboard reachable and status changes have appropriate text equivalents.

## Human review

Play once with audio enabled, once muted, and once with missing files; inspect analytics behavior under normal and `?dev=1` URLs.

