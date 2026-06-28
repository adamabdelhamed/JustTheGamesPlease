import { c, trackBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";

export const generatedTrack = trackBuilder.create({
  label: "Panel Dawn",
  description: "A Solar Array opener built around straight reads, clean weapon timing, and brief bright recovery windows.",
  environment: { sceneId: "solarArray" },
  balance: { enemyHp: 1, enemySpeed: 1.03 },
})
  .rebuild(5, section => {
    section.at(0).weapon("gun.pulsePistol", { column: c.right.mid, speed: .88 });
    section.at(2).weapon("shield.lightGuard", { column: c.left.mid, speed: .86 });
  })
  .respite(4)
  .pressure(9, section => {
    section.at(0).line("basic", { column: c.right.mid, count: 4, gap: 1, speed: 1 });
    section.at(1).alternating("basic", { columns: [c.left.mid, c.right.nearOuter], count: 4, gap: 1, speed: .98 });
    section.at(8).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter], speed: 1 });
  })
  .respite(2)
  .rebuild(5, section => {
    section.at(0).pickup("unitMultiplier.2x", { column: c.left.nearInner, speed: .86 });
    section.at(2).weapon("sword.arcBlade", { column: c.right.nearInner, speed: .86 });
  })
  .pressure(10, section => {
    section.at(0).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 4, gap: 2, speed: .94 });
    section.at(1).drip("basic", { column: c.left.mid, rows: 8, every: 2, speed: 1.02 });
    section.at(8).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter], speed: 1 });
  })
  .build() satisfies TrackMember;
