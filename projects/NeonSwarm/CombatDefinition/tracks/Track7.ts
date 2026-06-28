import { c, trackBuilder } from "../TrackBuilder";
import type { TrackMember } from "../TrackDefinition";

export const generatedTrack = trackBuilder.create({
  label: "Prism Ignition",
  description: "A clean Crystal Forge opener with early pistol access, simple lane reading, and a gentle winger reveal.",
  environment: { sceneId: "crystalForge" },
  balance: { enemyHp: 1, enemySpeed: 1 },
})
  .rebuild(5, section => {
    section.at(0).weapon("gun.pulsePistol", { column: c.left.mid, speed: .9 });
    section.at(2).pickup("unitMultiplier.2x", { column: c.right.mid, speed: .9 });
  })
  .respite(4)
  .pressure(9, section => {
    section.at(0).alternating("basic", { columns: [c.left.mid, c.right.mid], count: 5, gap: 1, speed: .96 });
    section.at(3).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter], speed: .92 });
  })
  .respite(2)
  .rebuild(5, section => {
    section.at(0).weapon("sword.arcBlade", { column: c.left.nearInner, speed: .85 });
    section.at(2).weapon("shield.lightGuard", { column: c.right.nearInner, speed: .85 });
    section.at(4).enemy("winger", { column: c.right.outer, speed: .9 });
  })
  .pressure(9, section => {
    section.at(0).line("basic", { column: c.left.mid, count: 4, gap: 1, speed: 1 });
    section.at(1).alternating("winger", { columns: [c.right.outer, c.left.outer], count: 3, gap: 2, speed: .9 });
    section.at(6).wall("basic", { columns: [c.left.nearOuter, c.right.nearOuter], speed: 1 });
  })
  .build() satisfies TrackMember;
