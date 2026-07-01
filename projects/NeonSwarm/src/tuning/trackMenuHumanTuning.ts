import { trackThemeCatalog } from "../../CombatDefinition/tracks";
import { trackMenuTuning, trackMenuTuningDefaults, type TrackMenuTuning } from "../trackMenuTuning";

type NumericTuningKey = Exclude<{
  [Key in keyof TrackMenuTuning]: TrackMenuTuning[Key] extends number ? Key : never;
}[keyof TrackMenuTuning], undefined>;

export interface HumanTuningControl {
  key: NumericTuningKey;
  label: string;
  group: string;
  min: number;
  max: number;
  step: number;
  unit: string;
}

export interface ShapeLineControl {
  shapeId: string;
  label: string;
  min: number;
  max: number;
  step: number;
  unit: string;
}

export interface TrackMenuHumanTuningState {
  values: Pick<TrackMenuTuning, NumericTuningKey>;
  shapeLineThickness: Record<string, number>;
}

export const humanTuningControls: readonly HumanTuningControl[] = [
  { group: "Header", key: "headerLogoFontSize", label: "Logo size", min: 34, max: 72, step: 1, unit: "px" },
  { group: "Header", key: "headerSubtitleFontSize", label: "Subtitle size", min: 8, max: 18, step: .5, unit: "px" },
  { group: "Header", key: "heroHeight", label: "Header breathing room", min: 118, max: 230, step: 1, unit: "px" },
  { group: "Progress", key: "progressTop", label: "Progress vertical position", min: 74, max: 150, step: 1, unit: "px" },
  { group: "Progress", key: "progressFontSize", label: "Progress text size", min: 8, max: 18, step: .5, unit: "px" },
  { group: "Progress", key: "progressStarSize", label: "Star size", min: 7, max: 20, step: .5, unit: "px" },
  { group: "Progress", key: "progressStarGap", label: "Star spacing", min: 0, max: 9, step: .5, unit: "px" },
  { group: "Families", key: "familyHeight", label: "Family panel height", min: 126, max: 240, step: 1, unit: "px" },
  { group: "Families", key: "familyGap", label: "Space between families", min: 4, max: 54, step: 1, unit: "px" },
  { group: "Families", key: "familyPaddingX", label: "Family side padding", min: 6, max: 42, step: 1, unit: "px" },
  { group: "Families", key: "familyCornerCut", label: "Family corner cut", min: 0, max: 30, step: 1, unit: "px" },
  { group: "Families", key: "titleY", label: "Family title vertical position", min: 10, max: 54, step: 1, unit: "px" },
  { group: "Families", key: "familyTitleFontSize", label: "Family title size", min: 11, max: 28, step: .5, unit: "px" },
  { group: "Tracks", key: "trackRowX", label: "First track horizontal position", min: 78, max: 172, step: 1, unit: "px" },
  { group: "Tracks", key: "trackRowY", label: "Track row vertical position", min: 62, max: 140, step: 1, unit: "px" },
  { group: "Tracks", key: "trackNodeGap", label: "Space between tracks", min: 38, max: 82, step: 1, unit: "px" },
  { group: "Tracks", key: "trackNodeSize", label: "Track shape size", min: 26, max: 68, step: 1, unit: "px" },
  { group: "Tracks", key: "trackNodeLabelFontSize", label: "Track number size", min: 12, max: 34, step: 1, unit: "px" },
  { group: "Tracks", key: "trackLabelWidth", label: "Track label width", min: 58, max: 132, step: 1, unit: "px" },
  { group: "Tracks", key: "trackLabelOffsetY", label: "Track label vertical position", min: 18, max: 52, step: 1, unit: "px" },
  { group: "Tracks", key: "trackLabelFontSize", label: "Track label size", min: 7, max: 16, step: .5, unit: "px" },
  { group: "Tracks", key: "hitTargetSize", label: "Clickable target size", min: 42, max: 108, step: 1, unit: "px" },
  { group: "Neon Lines", key: "panelLineWidth", label: "Family outline thickness", min: 2, max: 14, step: .1, unit: "px" },
  { group: "Neon Lines", key: "panelInnerLineWidth", label: "Family inner line thickness", min: 1, max: 9, step: .1, unit: "px" },
  { group: "Neon Lines", key: "connectorLineWidth", label: "Track connector thickness", min: .5, max: 7, step: .1, unit: "px" },
  { group: "Neon Lines", key: "nodeLineWidth", label: "Default shape line thickness", min: .4, max: 5, step: .05, unit: "px" },
  { group: "Motion", key: "wobblePixels", label: "Track drift distance", min: 0, max: 9, step: .1, unit: "px" },
  { group: "Motion", key: "wobbleScale", label: "Track pulse size", min: 0, max: .16, step: .005, unit: "x" },
  { group: "Motion", key: "wobbleRotation", label: "Track rotation sway", min: 0, max: .22, step: .005, unit: "rad" },
  { group: "Motion", key: "wobbleSpeed", label: "Track motion speed", min: .2, max: 3, step: .05, unit: "x" },
  { group: "Background", key: "starCount", label: "Background star density", min: 10, max: 150, step: 1, unit: "stars" },
  { group: "Background", key: "footerPadding", label: "Bottom breathing room", min: 12, max: 90, step: 1, unit: "px" },
];

const shapeIds = Array.from(new Set(Object.values(trackThemeCatalog).flatMap(theme => theme.nodeShapeIds)));

export const shapeLineControls: readonly ShapeLineControl[] = shapeIds.map(shapeId => ({
  shapeId,
  label: shapeId.split("-").map(part => part[0].toUpperCase() + part.slice(1)).join(" "),
  min: .4,
  max: 5,
  step: .05,
  unit: "px",
}));

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, Number.isFinite(value) ? value : min));
}

export function defaultTrackMenuHumanTuningState(): TrackMenuHumanTuningState {
  const values = Object.fromEntries(humanTuningControls.map(control => [control.key, trackMenuTuningDefaults[control.key]])) as Pick<TrackMenuTuning, NumericTuningKey>;
  return {
    values,
    shapeLineThickness: Object.fromEntries(shapeLineControls.map(control => [control.shapeId, trackMenuTuningDefaults.nodeLineWidthByShape[control.shapeId] ?? trackMenuTuningDefaults.nodeLineWidth])),
  };
}

export function applyTrackMenuHumanTuningState(state: TrackMenuHumanTuningState): TrackMenuHumanTuningState {
  const next = defaultTrackMenuHumanTuningState();
  for (const control of humanTuningControls) {
    const raw = state.values[control.key];
    const clamped = clamp(raw, control.min, control.max);
    next.values[control.key] = clamped;
    trackMenuTuning[control.key] = clamped;
  }
  const shapeLines: Record<string, number> = {};
  for (const control of shapeLineControls) {
    const raw = state.shapeLineThickness[control.shapeId];
    shapeLines[control.shapeId] = clamp(raw, control.min, control.max);
  }
  next.shapeLineThickness = shapeLines;
  trackMenuTuning.nodeLineWidthByShape = { ...shapeLines };
  return next;
}

export function serializeTrackMenuHumanTuningState(state: TrackMenuHumanTuningState): string {
  return JSON.stringify({
    humanTuningInterface: "neon-swarm-track-menu",
    values: {
      ...state.values,
      shapeLineThickness: state.shapeLineThickness,
    },
  }, null, 2);
}
