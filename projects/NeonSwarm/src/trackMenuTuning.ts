export type TrackMenuShapeLineTuning = Partial<Record<string, number>>;

export interface TrackMenuTuning {
  logicalWidth: number;
  safeTop: number;
  heroHeight: number;
  familyGap: number;
  familyHeight: number;
  familyPaddingX: number;
  familyPaddingY: number;
  familyCornerCut: number;
  titleX: number;
  titleY: number;
  familyTitleFontSize: number;
  trackRowX: number;
  trackRowY: number;
  trackNodeSize: number;
  trackNodeGap: number;
  trackNodeLabelFontSize: number;
  hitTargetSize: number;
  trackLabelWidth: number;
  trackLabelOffsetY: number;
  trackLabelFontSize: number;
  progressTop: number;
  progressFontSize: number;
  progressStarSize: number;
  progressStarGap: number;
  panelLineWidth: number;
  panelInnerLineWidth: number;
  connectorLineWidth: number;
  nodeLineWidth: number;
  nodeLineWidthByShape: TrackMenuShapeLineTuning;
  idleGlow: number;
  idleEnergy: number;
  hoverGlow: number;
  hoverEnergy: number;
  lockedGlow: number;
  lockedEnergy: number;
  wobblePixels: number;
  wobbleScale: number;
  wobbleRotation: number;
  wobbleSpeed: number;
  scanSpeed: number;
  starCount: number;
  footerPadding: number;
  headerLogoFontSize: number;
  headerSubtitleFontSize: number;
}

export const trackMenuTuningDefaults: TrackMenuTuning = {
  logicalWidth: 450,
  safeTop: 20,
  heroHeight: 142,
  familyGap: 18,
  familyHeight: 177,
  familyPaddingX: 42,
  familyPaddingY: 18,
  familyCornerCut: 30,
  titleX: 225,
  titleY: 25,
  familyTitleFontSize: 23,
  trackRowX: 120,
  trackRowY: 91,
  trackNodeSize: 56,
  trackNodeGap: 47,
  trackNodeLabelFontSize: 34,
  hitTargetSize: 84,
  trackLabelWidth: 111,
  trackLabelOffsetY: 40,
  trackLabelFontSize: 13,
  progressTop: 114,
  progressFontSize: 12.5,
  progressStarSize: 18,
  progressStarGap: 2,
  panelLineWidth: 13.8,
  panelInnerLineWidth: 3.2,
  connectorLineWidth: 0.5,
  nodeLineWidth: 5,
  nodeLineWidthByShape: {
    "hunter-eye": 1.26,
    "bruiser-prism": 1.26,
    "hunter-bolt": 1.26,
    "elite-star": 1.26,
    "spike-lance": 1.26,
    "tank-reactor": 1.26,
    "trick-vortex": 1.26,
  },
  idleGlow: 0.95,
  idleEnergy: 1.05,
  hoverGlow: 1.55,
  hoverEnergy: 2.2,
  lockedGlow: 0.28,
  lockedEnergy: 0.34,
  wobblePixels: 3.8,
  wobbleScale: 0.09,
  wobbleRotation: 0.125,
  wobbleSpeed: 1.25,
  scanSpeed: 0.33,
  starCount: 50,
  footerPadding: 12,
  headerLogoFontSize: 72,
  headerSubtitleFontSize: 18,
};

export const trackMenuTuning: TrackMenuTuning = {
  ...trackMenuTuningDefaults,
  nodeLineWidthByShape: { ...trackMenuTuningDefaults.nodeLineWidthByShape },
};
