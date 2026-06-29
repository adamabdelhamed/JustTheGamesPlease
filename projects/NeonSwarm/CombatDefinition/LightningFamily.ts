import { neonPalette, type NeonColorName } from "@just-the-games-please/neon-factory";
import { FamilyDefinition } from "./FamilyDefinition";

export type LightningTargetingMode = "nearestForward" | "densestCluster";

export interface LightningLevel {
  level: number;
  cooldownSeconds: number;
  damage: number;
  chainRange: number;
  maxJumps: number;
  branchFanout: number;
  maxDepth: number;
  branchDecay: number;
}

export interface LightningVisualIdentity {
  color: NeonColorName;
  secondaryColor: string;
  jaggedness: number;
  segments: number;
  movement: number;
  boltWidth: number;
  haloWidth: number;
  intensity: number;
  glow: number;
  durationMs: number;
  branchSparks: number;
  sparkVelocity: number;
  sparkVelocitySpread: number;
  sparkEasePower: number;
  sparkDimPower: number;
  sparkLength: number;
  sparkWidth: number;
  impactSparks: number;
  impactSparkVelocity: number;
  impactSparkRadius: number;
}

export interface LightningMember {
  label: string;
  family: "lightning";
  rarity: "uncommon" | "rare";
  targetingMode: LightningTargetingMode;
  includeAdjacentLanes: boolean;
  visualIdentity: LightningVisualIdentity;
  levels: readonly LightningLevel[];
  agentNotes?: string;
}

const level = (levelNumber: number, values: Omit<LightningLevel, "level">): LightningLevel => ({
  level: levelNumber,
  ...values,
});

const sharedVisual = {
  color: "cyan",
  secondaryColor: "#ffffff",
  jaggedness: 96,
  segments: 8,
  movement: .55,
  boltWidth: .1,
  haloWidth: 8,
  intensity: 3.07,
  glow: 6.2,
  durationMs: 529,
  branchSparks: .11,
  sparkVelocity: 150,
  sparkVelocitySpread: .55,
  sparkEasePower: .44,
  sparkDimPower: .6,
  sparkLength: 6,
  sparkWidth: .7,
  impactSparks: 26,
  impactSparkVelocity: 154,
  impactSparkRadius: 10,
} as const satisfies LightningVisualIdentity;

export class LightningFamilyDefinition extends FamilyDefinition<Record<string, LightningMember>> {
  readonly familyId = "lightning";
  readonly label = "Lightning";

  readonly members = {
    chainSpark: {
      label: "Chain Spark",
      family: "lightning",
      rarity: "uncommon",
      targetingMode: "nearestForward",
      includeAdjacentLanes: true,
      visualIdentity: sharedVisual,
      levels: [
        level(1, { cooldownSeconds: 1.95, damage: 1.25, chainRange: 150, maxJumps: 2, branchFanout: 1, maxDepth: 2, branchDecay: .72 }),
        level(2, { cooldownSeconds: 1.7, damage: 1.38, chainRange: 170, maxJumps: 3, branchFanout: 1, maxDepth: 2, branchDecay: .72 }),
        level(3, { cooldownSeconds: 1.5, damage: 1.5, chainRange: 190, maxJumps: 4, branchFanout: 1, maxDepth: 3, branchDecay: .7 }),
        level(4, { cooldownSeconds: 1.34, damage: 1.64, chainRange: 212, maxJumps: 5, branchFanout: 1, maxDepth: 3, branchDecay: .7 }),
        level(5, { cooldownSeconds: 1.18, damage: 1.8, chainRange: 236, maxJumps: 6, branchFanout: 1, maxDepth: 4, branchDecay: .68 }),
      ],
      agentNotes: "Fast single-chain cleanup. Best against staggered enemies; weaker against isolated durable targets than focused guns.",
    },
    forkCapacitor: {
      label: "Fork Capacitor",
      family: "lightning",
      rarity: "rare",
      targetingMode: "densestCluster",
      includeAdjacentLanes: true,
      visualIdentity: {
        ...sharedVisual,
        color: "violet",
        boltWidth: 2.1,
        branchSparks: .18,
        impactSparks: 34,
      },
      levels: [
        level(1, { cooldownSeconds: 2.55, damage: 1.8, chainRange: 138, maxJumps: 3, branchFanout: 2, maxDepth: 2, branchDecay: .58 }),
        level(2, { cooldownSeconds: 2.35, damage: 1.95, chainRange: 152, maxJumps: 4, branchFanout: 2, maxDepth: 2, branchDecay: .58 }),
        level(3, { cooldownSeconds: 2.18, damage: 2.1, chainRange: 168, maxJumps: 5, branchFanout: 3, maxDepth: 2, branchDecay: .56 }),
        level(4, { cooldownSeconds: 2.02, damage: 2.28, chainRange: 184, maxJumps: 7, branchFanout: 3, maxDepth: 3, branchDecay: .54 }),
        level(5, { cooldownSeconds: 1.86, damage: 2.45, chainRange: 204, maxJumps: 9, branchFanout: 4, maxDepth: 3, branchDecay: .52 }),
      ],
      agentNotes: "Cluster discharge. The anchor hits hard, then shallow sibling branches spread through packed formations.",
    },
  } as const satisfies Record<string, LightningMember>;

  constructor() {
    super();
    this.validate();
  }

  validate(): void {
    for (const [id, item] of Object.entries(this.members)) {
      this.require(item.family === "lightning", `${id} must be in lightning family.`);
      this.require(neonPalette[item.visualIdentity.color] !== undefined, `${id} has unknown color.`);
      this.require(item.levels.length === 5, `${id} must define exactly five levels.`);
      for (const tuning of item.levels) {
        this.require(tuning.cooldownSeconds > 0, `${id} level ${tuning.level} cooldown must be positive.`);
        this.require(tuning.damage > 0, `${id} level ${tuning.level} damage must be positive.`);
        this.require(tuning.chainRange > 0, `${id} level ${tuning.level} chainRange must be positive.`);
        this.require(tuning.maxJumps >= 1 && tuning.branchFanout >= 1 && tuning.maxDepth >= 1, `${id} level ${tuning.level} branch counts must be positive.`);
        this.require(tuning.branchDecay > 0 && tuning.branchDecay <= 1, `${id} level ${tuning.level} branchDecay must be in (0, 1].`);
      }
    }
  }
}

export const lightningFamily = new LightningFamilyDefinition();
export type LightningId = keyof typeof lightningFamily.members;
