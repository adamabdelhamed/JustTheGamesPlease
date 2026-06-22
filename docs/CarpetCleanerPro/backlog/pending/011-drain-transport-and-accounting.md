# 011 — Complete drain transport and waste accounting

## Outcome

Fluid and suspended waste physically reach the trench drain, pass through the grate, disappear into the intake volume, and are recorded as removed material.

## Dependencies

008 and 009.

## In scope

- Drain boundary/intake conditions, grate obstruction behavior, capacity, and anti-backflow stability.
- Visible flow through grate slots and into the drain interior driven by simulation state.
- Separate drained totals for water, soap, foam, and each soil state.
- Drain-focused diagnostics and stress scenarios.

## Out of scope

Squeegee, vacuum, final completion UI, and untracked cinematic waste effects.

## Acceptance criteria

- Only material crossing the intake boundary increments drained totals.
- Current plus drained material balances injected/initial material within tolerance.
- High flow does not explode, tunnel across boundaries, or drain uphill at a distance.
- Visible intake location, rate, color, and foam correspond to drained state.

## Human review

Run clean-water, muddy-water, foamy-water, and overload scenarios while watching intake visualization and accounting.

