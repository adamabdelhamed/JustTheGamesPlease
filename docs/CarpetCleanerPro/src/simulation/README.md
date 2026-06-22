# Simulation module

This module will own the authoritative material state and fixed-step update pipeline. Initial GPU fields are carpet saturation, free water, dissolved soil, embedded soil, surfactant, foam, sediment, velocity, and floor depth. Compute passes must conserve tracked material within measured numerical tolerances and record all mass removed by the drain.

The CPU owns orchestration, win conditions, deterministic seeds, telemetry summaries, and occasional asynchronous readback. Rendering and tools never mutate cleanliness directly.
