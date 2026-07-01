import {
  parseTrackDefinition,
  trackFamily,
  type TrackFamilyDefinition,
  type TrackFamilyId,
  type TrackId,
} from "../CombatDefinition";
import { enemyDefinitionFromTrackId } from "./enemyCatalog";

const storageKey = "neonSwarm.progress.v1";

export interface TrackProgress {
  completedTrackIds: readonly TrackId[];
  highScores: Partial<Record<TrackId, number>>;
}

export interface TrackProgressSummary {
  completed: number;
  total: number;
}

export const emptyTrackProgress = (): TrackProgress => ({
  completedTrackIds: [],
  highScores: {},
});

function isTrackId(value: string): value is TrackId {
  return value in trackFamily.members;
}

function normalizeScore(value: unknown): number | undefined {
  if (typeof value !== "number" || !Number.isFinite(value) || value < 0) return undefined;
  return value;
}

export function loadTrackProgress(): TrackProgress {
  try {
    const raw = localStorage.getItem(storageKey);
    if (!raw) return emptyTrackProgress();
    const parsed = JSON.parse(raw) as Partial<TrackProgress>;
    const completedTrackIds = Array.isArray(parsed.completedTrackIds)
      ? [...new Set(parsed.completedTrackIds.filter((id): id is TrackId => typeof id === "string" && isTrackId(id)))]
      : [];
    const highScores: Partial<Record<TrackId, number>> = {};
    if (parsed.highScores && typeof parsed.highScores === "object") {
      for (const [trackId, score] of Object.entries(parsed.highScores)) {
        const normalized = normalizeScore(score);
        if (isTrackId(trackId) && normalized !== undefined) highScores[trackId] = normalized;
      }
    }
    return { completedTrackIds, highScores };
  } catch {
    return emptyTrackProgress();
  }
}

export function saveTrackProgress(progress: TrackProgress): void {
  localStorage.setItem(storageKey, JSON.stringify(progress));
}

export function completeTrack(progress: TrackProgress, trackId: TrackId, score: number): TrackProgress {
  const completed = new Set(progress.completedTrackIds);
  completed.add(trackId);
  const highScores = { ...progress.highScores };
  highScores[trackId] = Math.max(highScores[trackId] ?? 0, Math.max(0, score));
  return {
    completedTrackIds: [...completed],
    highScores,
  };
}

export function recordTrackHighScore(progress: TrackProgress, trackId: TrackId, score: number): TrackProgress {
  const previous = progress.highScores[trackId] ?? 0;
  if (score <= previous) return progress;
  return {
    completedTrackIds: [...progress.completedTrackIds],
    highScores: {
      ...progress.highScores,
      [trackId]: Math.max(0, score),
    },
  };
}

export function trackProgressSummary(progress: TrackProgress, trackFamilyDefinition: TrackFamilyDefinition = trackFamily): TrackProgressSummary {
  const completed = new Set(progress.completedTrackIds);
  const total = Object.keys(trackFamilyDefinition.members).length;
  return {
    completed: Object.keys(trackFamilyDefinition.members).filter(trackId => completed.has(trackId as TrackId)).length,
    total,
  };
}

export function trackUnlocked(trackId: TrackId, progress: TrackProgress, options: { devMode?: boolean } = {}): boolean {
  if (options.devMode) return true;
  const completed = new Set(progress.completedTrackIds);
  const families = Object.entries(trackFamily.families) as [TrackFamilyId, (typeof trackFamily.families)[TrackFamilyId]][];
  for (const [familyId, family] of families) {
    const trackIndex = family.trackIds.indexOf(trackId);
    if (trackIndex < 0) continue;
    if (trackIndex > 0) return completed.has(family.trackIds[trackIndex - 1]);
    const familyIndex = families.findIndex(([candidate]) => candidate === familyId);
    if (familyIndex === 0) return true;
    const previousFamily = families[familyIndex - 1]?.[1];
    const previousFamilyLastTrack = previousFamily?.trackIds[previousFamily.trackIds.length - 1];
    return previousFamilyLastTrack ? completed.has(previousFamilyLastTrack) : false;
  }
  return false;
}

export function starsForScore(score: number): 0 | 1 | 2 | 3 {
  if (score >= 100) return 3;
  if (score >= 100 * 2 / 3) return 2;
  if (score >= 100 / 3) return 1;
  return 0;
}

export function plannedEnemyHpForTrack(trackId: TrackId): number {
  const track = trackFamily.members[trackId];
  return parseTrackDefinition(track.definition).reduce((sum, entity) => {
    const enemyDefinition = enemyDefinitionFromTrackId(entity.id);
    return enemyDefinition
      ? sum + enemyDefinition.definition.health * track.definition.balance.enemyHp
      : sum;
  }, 0);
}
