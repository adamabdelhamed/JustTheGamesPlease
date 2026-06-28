import { c, trackBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";

export const generatedTrack = trackBuilder.create({
  label: "Root Lattice",
  description: "Void Garden density grows through offset lines, decoy blooms, and controlled shield timing.",
  environment: { sceneId: "voidGarden" },
  balance: { enemyHp: 1.04, enemySpeed: 1.07 },
})
  .rebuild(6, section => {
    section.at(0).weapon("gun.needlerSmg", { column: c.right.mid, speed: .86 });
    section.at(2).weapon("shield.satelliteGuard", { column: c.left.mid, speed: .84 });
  })
  .respite(4)
  .pressure(12, section => {
    section.at(0).line("basic", { column: c.left.nearOuter, count: 5, gap: 1, speed: 1.02 });
    section.at(1).line("basic", { column: c.right.nearOuter, count: 5, gap: 1, speed: 1.02 });
    section.at(4).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 3, gap: 2, speed: .98 });
    section.at(9).wall("glassShield", { columns: [c.left.mid, c.right.mid], speed: 1.1 });
  })
  .respite(2)
  .rebuild(6, section => {
    section.at(0).weapon("sword.needleRapier", { column: c.left.nearInner, speed: .84 });
    section.at(2).pickup("unitMultiplier.2x", { column: c.right.nearInner, speed: .85 });
    section.at(4).weapon("gun.burstCarbine", { column: c.left.mid, speed: .86 });
  })
  .pressure(12, section => {
    section.at(0).drip("glassShield", { column: c.left.outer, rows: 10, every: 2, speed: 1.1 });
    section.at(1).alternating("basic", { columns: [c.right.mid, c.left.mid, c.right.nearOuter], count: 6, gap: 1, speed: 1.08 });
    section.at(8).enemy("tank", { column: c.right.inner, speed: .82 });
  })
  .build() satisfies TrackMember;
