import { c, trackBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";

export const generatedTrack = trackBuilder.create({
  label: "Facet Run",
  description: "Crystal pressure sharpens with decoys, cross-lane walls, and a mid-run needler pickup.",
  environment: { sceneId: "crystalForge" },
  balance: { enemyHp: 1.05, enemySpeed: 1.04 },
})
  .rebuild(5, section => {
    section.at(0).weapon("gun.pulsePistol", { column: c.right.mid, speed: .9 });
    section.at(2).weapon("shield.lightGuard", { column: c.left.nearOuter, speed: .86 });
  })
  .respite(4)
  .pressure(11, section => {
    section.at(0).alternating("basic", { columns: [c.left.nearOuter, c.right.nearOuter, c.left.mid, c.right.mid], count: 6, gap: 1, speed: 1 });
    section.at(2).drip("glassShield", { column: c.left.outer, rows: 7, every: 3, speed: 1.05 });
    section.at(7).wall("basic", { columns: [c.left.mid, c.right.mid], speed: 1.02 });
  })
  .respite(2)
  .rebuild(6, section => {
    section.at(0).weapon("gun.needlerSmg", { column: c.left.mid, speed: .86 });
    section.at(2).pickup("unitMultiplier.2x", { column: c.right.mid, speed: .88 });
    section.at(4).weapon("sword.arcBlade", { column: c.left.nearInner, speed: .9 });
  })
  .pressure(11, section => {
    section.at(0).line("winger", { column: c.right.outer, count: 4, gap: 1, speed: .94 });
    section.at(1).alternating("basic", { columns: [c.left.mid, c.right.mid], count: 5, gap: 1, speed: 1.06 });
    section.at(8).wall("basic", { columns: [c.left.nearOuter, c.left.nearInner, c.right.nearInner, c.right.nearOuter], speed: .98 });
  })
  .build() satisfies TrackMember;
