import {
  deriveNeonCloudCoreColor,
  type NeonCloudBurstSettings,
  type NeonTopDownCloudBurst,
} from "@just-the-games-please/neon-factory";
import type { OrbId } from "../CombatDefinition";

export type EnemyVisualType = OrbId;

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
  cloud: boolean;
}

export interface ActiveEnemyExitEffect {
  enemyType: EnemyVisualType;
  x: number;
  y: number;
  color: string;
  seed: number;
  age: number;
  durationSeconds?: number;
  size?: number;
  glow?: number;
  coreIntensity?: number;
  rimIntensity?: number;
  opacity?: number;
}

const basicOrbExitProfile: EnemyExitCloudProfile = {
  cloud: true,
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

const noCloudExitProfile: EnemyExitCloudProfile = {
  ...basicOrbExitProfile,
  cloud: false,
  size: 0,
};

const tankExitProfile: EnemyExitCloudProfile = {
  ...basicOrbExitProfile,
  size: 15,
  glow: 13,
};

export const enemyExitProfiles: Record<EnemyVisualType, EnemyExitCloudProfile> = {
  basicOrb: basicOrbExitProfile,
  glassShield: noCloudExitProfile,
  winger: basicOrbExitProfile,
  tank: tankExitProfile,
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
  durationSeconds?: number;
  size?: number;
  glow?: number;
  coreIntensity?: number;
  rimIntensity?: number;
  opacity?: number;
}): ActiveEnemyExitEffect {
  return {
    enemyType: options.enemyType,
    x: options.x,
    y: options.y,
    color: options.color,
    seed: options.seed ?? Math.random() * 1000,
    age: 0,
    durationSeconds: options.durationSeconds,
    size: options.size,
    glow: options.glow,
    coreIntensity: options.coreIntensity,
    rimIntensity: options.rimIntensity,
    opacity: options.opacity,
  };
}

export function updateEnemyExitEffects(effects: ActiveEnemyExitEffect[], deltaSeconds: number): void {
  for (let index = effects.length - 1; index >= 0; index--) {
    const effect = effects[index];
    effect.age += deltaSeconds;
    if (effect.age >= (effect.durationSeconds ?? enemyExitDuration(effect.enemyType))) effects.splice(index, 1);
  }
}

export function enemyExitCloud(effect: ActiveEnemyExitEffect): NeonTopDownCloudBurst {
  const profile = enemyExitProfiles[effect.enemyType];
  if (!profile.cloud) {
    return {
      color: effect.color,
      coreColor: effect.color,
      x: effect.x,
      y: effect.y,
      size: 0,
      detail: 3,
      turbulence: 0,
      glow: 0,
      coreIntensity: 0,
      rimIntensity: 0,
      opacity: 0,
      dissipationTime: enemyExitDuration(effect.enemyType),
      dissipationAction: "sparkFade",
      seed: effect.seed,
      age: effect.age,
    };
  }
  const envelope = profile.envelope;
  const duration = effect.durationSeconds ?? enemyExitDuration(effect.enemyType);
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
    size: (effect.size ?? profile.size) * (.48 + entryT * .52),
    detail: profile.detail,
    turbulence: profile.turbulence,
    glow: (effect.glow ?? profile.glow ?? 1) * entryFlash * sustain * fadeEnergy * sparkAccent,
    coreIntensity: (effect.coreIntensity ?? profile.coreIntensity ?? 1) * (1 + envelope.entryPunch * (1 - entryT) * .55),
    rimIntensity: (effect.rimIntensity ?? profile.rimIntensity ?? 1) * (1 + fadeT * envelope.sparkIntensity * .35),
    opacity: (effect.opacity ?? profile.opacity ?? 1) * (effect.age < fadeStart ? 1 : 1 - fadeT * .88),
    dissipationTime: duration,
    dissipationAction: "sparkFade",
    driftX: profile.driftX ?? 0,
    driftY: profile.driftY ?? 0,
    seed: effect.seed,
    age: Math.min(effect.age, duration),
  };
}
