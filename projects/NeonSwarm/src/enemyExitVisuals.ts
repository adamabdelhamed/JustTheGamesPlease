import {
  deriveNeonCloudCoreColor,
  type NeonCloudBurstSettings,
  type NeonTopDownCloudBurst,
} from "@just-the-games-please/neon-factory";

export type EnemyVisualType = "basicOrb";

export interface EnemyExitEnvelope {
  entrySeconds: number;
  entryPunch: number;
  sustainSeconds: number;
  sustainLevel: number;
  fadeSeconds: number;
  sparkIntensity: number;
}

export interface EnemyExitCloudProfile extends Omit<NeonCloudBurstSettings, "age" | "color" | "coreColor" | "x" | "y" | "seed"> {
  size: number;
  envelope: EnemyExitEnvelope;
}

export interface ActiveEnemyExitEffect {
  enemyType: EnemyVisualType;
  x: number;
  y: number;
  color: string;
  seed: number;
  age: number;
}

const basicOrbExitProfile: EnemyExitCloudProfile = {
  size: 11,
  detail: 6,
  turbulence: 2.72,
  glow: 11,
  coreIntensity: 1.25,
  rimIntensity: .8,
  opacity: .82,
  dissipationAction: "sparkFade",
  driftX: 0,
  driftY: 0,
  envelope: {
    entrySeconds: .16,
    entryPunch: 2.33,
    sustainSeconds: .21,
    sustainLevel: 1.2,
    fadeSeconds: .29,
    sparkIntensity: 1.21,
  },
};

export const enemyExitProfiles: Record<EnemyVisualType, EnemyExitCloudProfile> = {
  basicOrb: basicOrbExitProfile,
};

export function enemyExitDuration(enemyType: EnemyVisualType): number {
  const envelope = enemyExitProfiles[enemyType].envelope;
  return envelope.entrySeconds + envelope.sustainSeconds + envelope.fadeSeconds;
}

export function createEnemyExitEffect(options: {
  enemyType: EnemyVisualType;
  x: number;
  y: number;
  color: string;
  seed?: number;
}): ActiveEnemyExitEffect {
  return {
    enemyType: options.enemyType,
    x: options.x,
    y: options.y,
    color: options.color,
    seed: options.seed ?? Math.random() * 1000,
    age: 0,
  };
}

export function updateEnemyExitEffects(effects: ActiveEnemyExitEffect[], deltaSeconds: number): void {
  for (let index = effects.length - 1; index >= 0; index--) {
    const effect = effects[index];
    effect.age += deltaSeconds;
    if (effect.age >= enemyExitDuration(effect.enemyType)) effects.splice(index, 1);
  }
}

export function enemyExitCloud(effect: ActiveEnemyExitEffect): NeonTopDownCloudBurst {
  const profile = enemyExitProfiles[effect.enemyType];
  const envelope = profile.envelope;
  const duration = enemyExitDuration(effect.enemyType);
  const entryT = Math.min(1, effect.age / Math.max(.001, envelope.entrySeconds));
  const fadeStart = envelope.entrySeconds + envelope.sustainSeconds;
  const fadeT = Math.max(0, Math.min(1, (effect.age - fadeStart) / Math.max(.001, envelope.fadeSeconds)));
  const sustain = effect.age >= envelope.entrySeconds && effect.age < fadeStart ? envelope.sustainLevel : 1;
  const entryFlash = 1 + Math.sin(entryT * Math.PI) * envelope.entryPunch;
  const fadeEnergy = 1 - fadeT * .62;
  const sparkAccent = 1 + fadeT * envelope.sparkIntensity * .22;
  return {
    color: effect.color,
    coreColor: deriveNeonCloudCoreColor(effect.color),
    x: effect.x,
    y: effect.y,
    size: profile.size * (.48 + entryT * .52),
    detail: profile.detail,
    turbulence: profile.turbulence,
    glow: (profile.glow ?? 1) * entryFlash * sustain * fadeEnergy * sparkAccent,
    coreIntensity: (profile.coreIntensity ?? 1) * (1 + envelope.entryPunch * (1 - entryT) * .55),
    rimIntensity: (profile.rimIntensity ?? 1) * (1 + fadeT * envelope.sparkIntensity * .35),
    opacity: (profile.opacity ?? 1) * (effect.age < fadeStart ? 1 : 1 - fadeT * .88),
    dissipationTime: duration,
    dissipationAction: "sparkFade",
    driftX: profile.driftX ?? 0,
    driftY: profile.driftY ?? 0,
    seed: effect.seed,
    age: Math.min(effect.age, duration),
  };
}
