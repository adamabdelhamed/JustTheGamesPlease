import { c, trackBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";

export const generatedTrack = trackBuilder.create({
  label: "Bloom Signal",
  description: "A Void Garden opener with sparse drifting threats, readable rebuilds, and soft cross-lane pressure.",
  environment: { sceneId: "voidGarden" },
  balance: { enemyHp: 1, enemySpeed: 1 },
})
  .rebuild(5, section => {
    section.at(0).weapon("gun.pulsePistol", { column: c.left.mid, speed: 1 });
    section.at(3).weapon("sword.arcBlade", { column: c.right.mid, speed: 1 });
  })
  .respite(4)
  .pressure(11, section => {
    section.at(0).drip("basic", { column: c.left.nearOuter, rows: 8, every: 2, speed: 1 });
    section.at(1).alternating("basic", { columns: [c.right.mid, c.left.mid], count: 4, gap: 2, speed: 1 });
    section.at(6).wall("glassShield", { columns: [c.left.outer, c.right.outer], speed: 1 });
  })
  .respite(3)
  .rebuild(5, section => {
    section.at(0).weapon("shield.lightGuard", { column: c.left.nearInner, speed: 1 });
    section.at(2).pickup("unitMultiplier.2x", { column: c.right.nearInner, speed: 1 });
  })
  .pressure(9, section => {
    section.at(0).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 4, gap: 1, speed: 1 });
    section.at(1).line("basic", { column: c.right.mid, count: 4, gap: 1, speed: 1 });
    section.at(7).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter], speed: 1 });
  })
  .build() satisfies TrackMember;
