import type { OrbId } from "../CombatDefinition";

export interface EnemyEntranceProfile {
  durationSeconds: number;
  scatterMagnitude: number;
}

export const enemyEntranceProfiles: Record<OrbId, EnemyEntranceProfile> = {
  basicOrb: {
    durationSeconds: .48,
    scatterMagnitude: .58,
  },
  glassShield: {
    durationSeconds: .34,
    scatterMagnitude: 0,
  },
  winger: {
    durationSeconds: .42,
    scatterMagnitude: .5,
  },
  tank: {
    durationSeconds: .72,
    scatterMagnitude: .34,
  },
};
