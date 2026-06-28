import { c, trackBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";

export const generatedTrack = trackBuilder.create({
  label: "Heliostat Rush",
  description: "Solar Array pressure accelerates with brighter flankers, glass cover, and a decisive burst carbine rebuild.",
  environment: { sceneId: "solarArray" },
  balance: { enemyHp: 1.08, enemySpeed: 1.08 },
})
  .rebuild(6, section => {
    section.at(0).weapon("gun.burstCarbine", { column: c.left.mid, speed: .84 });
    section.at(2).pickup("unitMultiplier.2x", { column: c.right.mid, speed: .86 });
    section.at(4).weapon("shield.satelliteGuard", { column: c.left.nearOuter, speed: .84 });
  })
  .respite(4)
  .pressure(12, section => {
    section.at(0).alternating("basic", { columns: [c.left.mid, c.right.mid, c.left.nearOuter, c.right.nearOuter], count: 6, gap: 1, speed: 1.05 });
    section.at(1).drip("glassShield", { column: c.right.outer, rows: 9, every: 3, speed: 1.12 });
    section.at(8).wall("winger", { columns: [c.left.outer, c.right.outer], speed: .96 });
  })
  .respite(2)
  .rebuild(6, section => {
    section.at(0).weapon("gun.splitterRifle", { column: c.right.mid, speed: .82 });
    section.at(2).weapon("sword.needleRapier", { column: c.left.mid, speed: .84 });
    section.at(4).weapon("shield.lightGuard", { column: c.right.nearOuter, speed: .86 });
  })
  .pressure(12, section => {
    section.at(0).line("winger", { column: c.left.outer, count: 4, gap: 1, speed: .98 });
    section.at(1).line("basic", { column: c.right.mid, count: 5, gap: 1, speed: 1.08 });
    section.at(8).enemy("tank", { column: c.left.nearOuter, speed: .82 });
  })
  .build() satisfies TrackMember;
