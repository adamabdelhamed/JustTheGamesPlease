# Simulation invariants

- Define every field's units, legal range, initialization, and ownership before adding a compute pass.
- Material may move, mix, dissolve, settle, bind to carpet, or enter the drain. It must not disappear elsewhere.
- Track initial, injected, extracted, drained, and current mass. Add a diagnostic residual and set a tolerance per pass.
- Use deterministic seeds and fixed timesteps. Frame cadence and pointer event cadence must not affect outcomes.
- Separate carpet porosity/embedded soil from floor surface flow. The rug edge and drain are explicit boundary conditions.
- Perform sparse CPU readback for progress and diagnostics; never make per-frame gameplay depend on synchronous GPU readback.
