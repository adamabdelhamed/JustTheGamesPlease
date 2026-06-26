import type { EnemyVisualType } from "./enemyExitVisuals";

export interface EnemyEntranceProfile {
  durationSeconds: number;
  scatterMagnitude: number;
}

export const enemyEntranceProfiles: Record<EnemyVisualType, EnemyEntranceProfile> = {
  basicOrb: {
    durationSeconds: .48,
    scatterMagnitude: .58,
  },
};
