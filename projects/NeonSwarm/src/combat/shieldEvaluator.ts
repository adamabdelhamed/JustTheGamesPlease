/**
 * ShieldEvaluator — per-frame shield state and tick logic.
 *
 * One ShieldState tracks the live runtime state for whatever shield is
 * currently equipped. The tickShield() function drives all behavioral modes
 * (charge, pulse, contact, aura) and returns a result for main.ts to apply.
 *
 * Design rule: this module does not modify enemy arrays directly. It returns
 * a ShieldTickResult that main.ts applies. This keeps the shield system
 * testable and composable with other near-player effects.
 */

import type { ShieldId, ShieldMember } from "../../CombatDefinition/ShieldFamily";
import type { NearbyThreat } from "./nearbyThreatQuery";

// ---------------------------------------------------------------------------
// Active pulse effect (visual)
// ---------------------------------------------------------------------------

export interface ActivePulseEffect {
  /** Progress 0→1. Driven by (now - startedAt) / pulseDurationMs. */
  progress: number;
  /** Timestamp when the pulse was triggered. */
  startedAt: number;
  /** Duration in ms. */
  durationMs: number;
  /** Center x (snapshot of player position when triggered). */
  x: number;
  /** Center y. */
  y: number;
  /** Maximum radius at peak expansion. */
  maxRadius: number;
  /** Color. */
  color: string;
}

// ---------------------------------------------------------------------------
// Shield state
// ---------------------------------------------------------------------------

export class ShieldState {
  shieldId: ShieldId;
  /** Active shield level. Repeated pickups of the same shield increase this up to 5. */
  level: number;
  /** Remaining charges (charge-based shields). */
  charges: number;
  /** Seconds until cooldown completes. */
  cooldownLeft: number;
  /** ms timestamp after which the hit flash is done. */
  hitFlashUntil: number;
  /** Progress 0→1 of hit flash animation (1 = done). */
  hitFlashProgress: number;
  /** Active expanding pulse rings (Pulse Core). */
  pulseEffects: ActivePulseEffect[];
  /** Enemy ids already resolved against this shield, preventing repeat damage per frame. */
  readonly interceptedEnemyIds = new Set<number>();

  constructor(shieldId: ShieldId, maxCharges: number, level = 1) {
    this.shieldId = shieldId;
    this.level = Math.min(5, Math.max(1, Math.floor(level)));
    this.charges = maxCharges;
    this.cooldownLeft = 0;
    this.hitFlashUntil = 0;
    this.hitFlashProgress = 1;
    this.pulseEffects = [];
  }
}

export interface ShieldContactTarget {
  id: number;
  x: number;
  y: number;
  radius: number;
  health: number;
  dying: boolean;
}

export interface ShieldContactResult {
  contacted: boolean;
  absorbed: boolean;
  damageAbsorbed: number;
  enemyDestroyed: boolean;
}

/** Resolve one geometric enemy/shield contact exactly once for that enemy. */
export function resolveShieldContact(
  state: ShieldState,
  shield: ShieldMember,
  target: ShieldContactTarget,
  shieldX: number,
  shieldY: number,
  now: number,
  scale = 1,
): ShieldContactResult {
  const result: ShieldContactResult = {
    contacted: false,
    absorbed: false,
    damageAbsorbed: 0,
    enemyDestroyed: false,
  };
  if (target.dying || state.interceptedEnemyIds.has(target.id)) return result;
  const radius = shield.radius * scale + target.radius;
  const dx = target.x - shieldX;
  const dy = target.y - shieldY;
  if (dx * dx + dy * dy > radius * radius) return result;

  result.contacted = true;
  state.interceptedEnemyIds.add(target.id);
  if (state.charges <= 0) return result;

  const absorbed = Math.min(state.charges, target.health);
  state.charges -= absorbed;
  target.health -= absorbed;
  state.hitFlashUntil = now + 280;
  state.hitFlashProgress = 0;
  state.cooldownLeft = shield.cooldownSeconds;
  result.absorbed = true;
  result.damageAbsorbed = absorbed;
  result.enemyDestroyed = target.health <= 0;
  return result;
}

// ---------------------------------------------------------------------------
// Tick result — what main.ts should apply this frame
// ---------------------------------------------------------------------------

export interface ShieldTickResult {
  /** Enemy IDs that should receive contactDamage this frame (contact shields). */
  contactDamageEnemyIds: number[];
  /** Amount of contact damage per enemy. */
  contactDamageAmount: number;
  /** Enemy IDs that should have their speed multiplied by slowMultiplier (aura). */
  slowEnemyIds: number[];
  /** Effective slow multiplier to apply. */
  slowMultiplier: number;
  /**
   * If true, the shield absorbed a hit this frame (charge consumed).
   * main.ts should NOT kill/damage the player for that collision.
   */
  absorbedHit: boolean;
  /**
   * Enemy IDs to push away from the player center (pulse shield).
   * main.ts should add pushDistance to the enemy's outward velocity or position.
   */
  pushEnemyIds: number[];
  /** Push distance in px. */
  pushDistance: number;
}

// ---------------------------------------------------------------------------
// Tick function
// ---------------------------------------------------------------------------

const PULSE_DURATION_MS = 600;

/**
 * Drives the shield for one game frame.
 *
 * @param state       Mutable shield state to update.
 * @param shield      Immutable shield definition.
 * @param threats     Nearby threats from queryNearbyThreats() (range = shield.radius).
 * @param playerX     Current player center x (for pulse origin).
 * @param playerY     Current player center y.
 * @param now         Current timestamp in ms.
 * @param delta       Frame delta in seconds.
 * @returns           Actions for main.ts to apply.
 */
export function tickShield(
  state: ShieldState,
  shield: ShieldMember,
  threats: readonly NearbyThreat[],
  playerX: number,
  playerY: number,
  now: number,
  delta: number,
): ShieldTickResult {
  const result: ShieldTickResult = {
    contactDamageEnemyIds: [],
    contactDamageAmount: 0,
    slowEnemyIds: [],
    slowMultiplier: 1.0,
    absorbedHit: false,
    pushEnemyIds: [],
    pushDistance: 0,
  };

  // Advance cooldown
  if (state.cooldownLeft > 0) state.cooldownLeft = Math.max(0, state.cooldownLeft - delta);

  // Update pulse progress
  for (const pulse of state.pulseEffects) {
    pulse.progress = (now - pulse.startedAt) / pulse.durationMs;
  }
  state.pulseEffects = state.pulseEffects.filter(p => p.progress < 1);

  // Advance hit flash
  if (state.hitFlashUntil > 0) {
    state.hitFlashProgress = Math.min(1, (now - (state.hitFlashUntil - 280)) / 280);
  }

  // Refill charges when cooldown completes (charge-based shields)
  if (shield.mode === "charge" && state.cooldownLeft === 0 && state.charges < shield.maxCharges) {
    state.charges = shield.maxCharges;
  }

  if (threats.length === 0) return result;

  // ---------------------------------------------------------------------------
  // Mode: contact — deal damage to enemies touching the shield edge
  // ---------------------------------------------------------------------------
  if (false) {
    result.contactDamageAmount = shield.contactDamage;
    for (const { target } of threats) {
      result.contactDamageEnemyIds.push(target.id);
    }
  }

  // ---------------------------------------------------------------------------
  // Mode: aura — slow enemies inside radius
  // ---------------------------------------------------------------------------
  if (false) {
    result.slowMultiplier = shield.slowMultiplier;
    for (const { target } of threats) {
      result.slowEnemyIds.push(target.id);
    }
  }

  // ---------------------------------------------------------------------------
  // Mode: pulse — emit push ring when any enemy enters range
  // ---------------------------------------------------------------------------
  if (false) {
    // Trigger pulse
    state.cooldownLeft = shield.cooldownSeconds;
    const pulse: ActivePulseEffect = {
      progress: 0,
      startedAt: now,
      durationMs: PULSE_DURATION_MS,
      x: playerX,
      y: playerY,
      maxRadius: shield.radius * 1.8,
      color: "", // filled by draw code with neonPalette[shield.color]
    };
    state.pulseEffects.push(pulse);
    result.pushDistance = shield.pushDistance;
    for (const { target } of threats) {
      result.pushEnemyIds.push(target.id);
    }
  }

  return result;
}

// ---------------------------------------------------------------------------
// Hit absorption — called by main.ts when an enemy would touch the player
// ---------------------------------------------------------------------------

/**
 * Attempt to absorb a hit using shield charges.
 * Returns true if the hit was absorbed (charge consumed), false otherwise.
 */
export function tryAbsorbHit(state: ShieldState, shield: ShieldMember, now: number): boolean {
  if (state.charges <= 0) return false;
  state.charges -= 1;
  state.hitFlashUntil = now + 280;
  state.hitFlashProgress = 0;
  // Recharge begins after the most recent absorbed hit. Keeping the cooldown
  // active prevents tickShield() from immediately restoring a partially
  // depleted shield on the next frame.
  state.cooldownLeft = shield.cooldownSeconds;
  return true;
}
