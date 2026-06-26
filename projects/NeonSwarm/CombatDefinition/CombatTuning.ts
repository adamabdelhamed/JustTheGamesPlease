export interface CombatTuning {
  /**
   * Multiplies the whole combat simulation pace while preserving relative
   * timing between movement, cooldowns, projectiles, and authored track beats.
   */
  globalSpeedMultiplier: number;
}

export const combatTuning = {
  globalSpeedMultiplier: 1.5,
} as const satisfies CombatTuning;

if (!Number.isFinite(combatTuning.globalSpeedMultiplier) || combatTuning.globalSpeedMultiplier <= 0) {
  throw new Error("combatTuning: globalSpeedMultiplier must be a positive finite number.");
}
