import type { GunMember } from "../../CombatDefinition/GunFamily";
import type { OrbMember } from "../../CombatDefinition/OrbFamily";

export interface GunSmokeResult {
  gunId: string;
  passed: boolean;
  killTimeMs: number | null;
  enemyArrivalMs: number;
  shotsFired: number;
  damageDealt: number;
}

export function evaluateGunAgainstOrb(
  gunId: string,
  gun: GunMember,
  orb: OrbMember,
  levelNumber = 1,
): GunSmokeResult {
  const level = gun.levels.find(candidate => candidate.level === levelNumber) ?? gun.levels[0];
  const distance = 540;
  const enemyArrivalMs = distance / orb.speed * 1000;
  let enemyHealth = orb.health;
  let damageDealt = 0;
  let shotsFired = 0;
  const hits: number[] = [];
  const cycleMs = 1000 / level.fireRatePerSecond;

  for (let cycleAt = 0; cycleAt < enemyArrivalMs; cycleAt += cycleMs) {
    for (let burstIndex = 0; burstIndex < level.burstCount; burstIndex++) {
      const firedAt = cycleAt + burstIndex * level.burstIntervalMs;
      const travelMs = distance / level.projectileSpeed * 1000;
      const hitAt = firedAt + travelMs;
      if (hitAt < enemyArrivalMs) {
        const currentLaneProjectiles = gun.shotPattern === "pairedSpread" ? level.projectileCount : Math.max(1, level.projectileCount);
        for (let projectileIndex = 0; projectileIndex < currentLaneProjectiles; projectileIndex++) hits.push(hitAt);
        shotsFired += currentLaneProjectiles;
      }
    }
  }

  hits.sort((a, b) => a - b);
  let killTimeMs: number | null = null;
  for (const hitAt of hits) {
    enemyHealth -= level.damage;
    damageDealt += level.damage;
    if (enemyHealth <= 0) {
      killTimeMs = hitAt;
      break;
    }
  }

  return {
    gunId,
    passed: killTimeMs !== null && killTimeMs < enemyArrivalMs,
    killTimeMs,
    enemyArrivalMs,
    shotsFired,
    damageDealt,
  };
}
