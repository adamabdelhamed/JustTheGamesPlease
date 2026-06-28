import { c, trackBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";

export const generatedTrack = trackBuilder.create({
  label: "Glass Hammer",
  description: "The Crystal Forge finale alternates fast wing pressure with tank breaks and deliberate power shelves.",
  environment: { sceneId: "crystalForge" },
  balance: { enemyHp: 1.12, enemySpeed: 1.08 },
})
  .rebuild(6, section => {
    section.at(0).weapon("gun.burstCarbine", { column: c.left.mid, speed: .84 });
    section.at(1).weapon("shield.satelliteGuard", { column: c.right.mid, speed: .86 });
    section.at(4).pickup("unitMultiplier.2x", { column: c.left.nearOuter, speed: .88 });
  })
  .respite(4)
  .pressure(12, section => {
    section.at(0).alternating("winger", { columns: [c.left.outer, c.right.outer], count: 5, gap: 1, speed: 1 });
    section.at(2).drip("glassShield", { column: c.right.mid, rows: 8, every: 2, speed: 1.08 });
    section.at(8).enemy("tank", { column: c.left.nearOuter, speed: .82 });
  })
  .respite(2)
  .rebuild(6, section => {
    section.at(0).weapon("gun.heavyCannon", { column: c.right.mid, speed: .82 });
    section.at(2).weapon("sword.cleaver", { column: c.left.mid, speed: .85 });
    section.at(4).weapon("shield.hexGuard", { column: c.right.nearOuter, speed: .86 });
  })
  .pressure(13, section => {
    section.at(0).wall("basic", { columns: [c.left.outer, c.left.nearInner, c.right.nearInner, c.right.outer], speed: 1.02 });
    section.at(2).line("winger", { column: c.left.outer, count: 4, gap: 2, speed: .98 });
    section.at(3).line("basic", { column: c.right.mid, count: 5, gap: 1, speed: 1.08 });
    section.at(10).wall("tank", { columns: [c.left.nearOuter, c.right.inner], speed: .78 });
  })
  .build() satisfies TrackMember;
