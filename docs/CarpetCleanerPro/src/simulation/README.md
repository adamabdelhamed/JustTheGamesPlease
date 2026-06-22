# Simulation module

This module will own the authoritative material state and fixed-step update pipeline. Initial GPU fields are carpet saturation, free water, dissolved soil, embedded soil, surfactant, foam, sediment, velocity, and floor depth. Compute passes must conserve tracked material within measured numerical tolerances and record all mass removed by the drain.

The CPU owns orchestration, win conditions, deterministic seeds, telemetry summaries, and occasional asynchronous readback. Rendering and tools never mutate cleanliness directly.

## Authoritative field schema

All fields use a 512×320 structure-of-arrays grid spanning the 22×14 meter floor. Material quantities are areal density so totals are the sum of each cell multiplied by cell area. Legal ranges are enforced by the pass that owns writes to a field.

| Field | Unit | Legal range | Write owner |
|---|---:|---:|---|
| `freeWater` | kg/m² | 0–100 | Hydrology passes and tool sources |
| `carpetSaturation` | kg/m² | 0–25 | Carpet absorption/release passes |
| `embeddedSoil` | kg/m² | 0–12 | Carpet binding/agitation passes |
| `looseSoil` | kg/m² | 0–12 | Soil transfer/transport passes |
| `dissolvedSoil` | kg/m² | 0–12 | Dissolution/water transport passes |
| `sediment` | kg/m² | 0–25 | Suspension/settling/transport passes |
| `soap` | kg/m² | 0–8 | Tool injection/surfactant transport passes |
| `foam` | kg/m² equivalent | 0–8 | Foam production/transport/decay passes |
| `velocity` | m/s, X/Z pair | −8–8 | Fluid momentum passes |

The immutable surface mask uses `0=outside`, `1=floor`, `2=carpet`, and `3=drain`. Conserved fields track initial, injected, current, drained, and extracted quantities. Residual is `initial + injected - current - drained - extracted`; the empty-pass tolerance is `1e-5 kg`.
