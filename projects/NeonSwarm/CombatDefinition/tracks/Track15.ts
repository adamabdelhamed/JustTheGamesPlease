import { c, trackBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";

export const generatedTrack = trackBuilder.create({
  label: "Mirror Zenith",
  description: "The Solar Array finale combines mirrored walls, heavy tools, and fast outer-lane surges.",
  environment: { sceneId: "solarArray" },
  balance: { enemyHp: 1.16, enemySpeed: 1.12 },
})
  .rebuild(6, section => {
    section.at(0).weapon("gun.heavyCannon", { column: c.right.mid, speed: .8 });
    section.at(1).weapon("shield.hexGuard", { column: c.left.mid, speed: .82 });
    section.at(4).pickup("unitMultiplier.2x", { column: c.right.nearOuter, speed: .84 });
  })
  .respite(4)
  .pressure(13, section => {
    section.at(0).wall("basic", { columns: [c.left.nearOuter, c.left.nearInner, c.right.nearInner, c.right.nearOuter], speed: 1.04 });
    section.at(2).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 5, gap: 1, speed: 1 });
    section.at(5).drip("glassShield", { column: c.left.mid, rows: 8, every: 2, speed: 1.12 });
    section.at(10).enemy("tank", { column: c.right.inner, speed: .78 });
  })
  .respite(2)
  .rebuild(7, section => {
    section.at(0).weapon("gun.splitterRifle", { column: c.left.mid, speed: .8 });
    section.at(2).weapon("sword.cleaver", { column: c.right.mid, speed: .82 });
    section.at(4).weapon("shield.satelliteGuard", { column: c.left.nearOuter, speed: .84 });
  })
  .pressure(14, section => {
    section.at(0).line("basic", { column: c.right.mid, count: 5, gap: 1, speed: 1.1 });
    section.at(1).alternating("winger", { columns: [c.left.outer, c.right.outer, c.left.nearOuter], count: 5, gap: 2, speed: .98 });
    section.at(10).wall("tank", { columns: [c.left.nearOuter, c.right.inner], speed: .76 });
  })
  .build() satisfies TrackMember;
