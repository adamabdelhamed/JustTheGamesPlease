# Tools module

Tools translate resampled input into material sources, impulses, agitation, compression, and extraction masks. They do not delete dirt or award progress. Each tool has a simulation operator and a separately rendered rig driven from the same pose stream.

The soap applicator consumes fixed 120 Hz poses. It converts contact, pressure, and speed into a normalized mass footprint, merges overlapping cell writes, and queues them for the next fixed simulation tick. The GPU source pass writes only the soap field; its submitted mass is recorded in the material ledger. The rendered bottle, stream, contact pulse, and glossy surface field consume the same pose/source state and do not affect progress.
