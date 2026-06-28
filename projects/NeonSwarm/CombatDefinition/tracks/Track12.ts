import { c, trackBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";

export const generatedTrack = trackBuilder.create({
  label: "Night Orchard",
  description: "The Void Garden finale uses clustered blooms, paired tanks, and precision pickups without crowding the read.",
  environment: { sceneId: "voidGarden" },
  balance: { enemyHp: 1.12, enemySpeed: 1.1 },
})
  .rebuild(6, section => {
    section.at(0).weapon("gun.splitterRifle", { column: c.left.mid, speed: .84 });
    section.at(1).weapon("shield.satelliteGuard", { column: c.right.mid, speed: .84 });
    section.at(4).pickup("unitMultiplier.2x", { column: c.left.nearOuter, speed: .86 });
  })
  .respite(4)
  .pressure(13, section => {
    section.at(0).alternating("winger", { columns: [c.left.outer, c.right.outer, c.left.nearOuter], count: 6, gap: 1, speed: 1 });
    section.at(2).drip("glassShield", { column: c.right.mid, rows: 9, every: 2, speed: 1.12 });
    section.at(9).wall("basic", { columns: [c.left.nearOuter, c.left.nearInner, c.right.nearInner, c.right.nearOuter], speed: 1.04 });
  })
  .respite(2)
  .rebuild(7, section => {
    section.at(0).weapon("gun.heavyCannon", { column: c.right.mid, speed: .82 });
    section.at(2).weapon("sword.cleaver", { column: c.left.mid, speed: .84 });
    section.at(4).weapon("shield.hexGuard", { column: c.right.nearOuter, speed: .84 });
  })
  .pressure(14, section => {
    section.at(0).line("basic", { column: c.left.mid, count: 5, gap: 1, speed: 1.08 });
    section.at(1).line("winger", { column: c.right.outer, count: 4, gap: 2, speed: .98 });
    section.at(6).enemy("tank", { column: c.right.inner, speed: .8 });
    section.at(10).wall("tank", { columns: [c.left.nearOuter, c.right.inner], speed: .76 });
  })
  .build() satisfies TrackMember;
