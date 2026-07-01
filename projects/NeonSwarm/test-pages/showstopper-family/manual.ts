import {
  getLaneRunnerSceneName,
  laneRunnerSceneIds,
  type LaneRunnerSceneId,
} from "@just-the-games-please/neon-factory";
import { showstopperFamily, type ShowstopperCameraPose, type ShowstopperEasing, type ShowstopperId, type ShowstopperTimeWarpPoint } from "../../CombatDefinition";
import { bindSquadInput } from "../../src/input";
import {
  showstopperCameraAtProgress,
  showstopperGameplayScaleAtProgress,
  showstopperReturnCameraAt,
  showstopperReturnGameplayScaleAt,
} from "../../src/showstopperDirector";
import { bindShowstopperTriggerUi, syncShowstopperTriggerUi } from "../../src/showstopperTriggerUi";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";
import {
  defaultHelicopterCameraSettings,
  type HelicopterCameraSettings,
} from "../../src/viewport";

type Lane = 0 | 1;

const laneCenters = [.32, .68] as const;
const enemyGridRows = showstopperFamily.members.dragonsBreath.attack.rowsAhead + 4;
const enemyGridColumns = 5;
const enemyRowSpacing = 38;
const enemyColumnSpacing = 18;
const enemyTopUpThreshold = 34;
const enemyTopUpRows = 4;
const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
const error = document.querySelector<HTMLElement>("#error")!;
const sceneSelect = document.querySelector<HTMLSelectElement>("#scene-select")!;
const showstopperSelect = document.querySelector<HTMLSelectElement>("#showstopper-select")!;
const bankButton = document.querySelector<HTMLButtonElement>("#bank-button")!;
const triggerButton = document.querySelector<HTMLButtonElement>("#trigger-button")!;
const syncShowstopperButton = document.querySelector<HTMLButtonElement>("#sync-showstopper")!;
const bankReadout = document.querySelector<HTMLElement>("#bank-readout")!;
const cameraReadout = document.querySelector<HTMLElement>("#camera-readout")!;
const bankSlot = document.querySelector<HTMLElement>("#bank-slot")!;
const bankGlyph = document.querySelector<HTMLElement>("#bank-glyph")!;
const bankLabel = document.querySelector<HTMLElement>("#bank-label")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;
const resetCameraButton = document.querySelector<HTMLButtonElement>("#reset-camera")!;
const durationInput = document.querySelector<HTMLInputElement>("#timeline-duration")!;
const timelineZoomInput = document.querySelector<HTMLInputElement>("#timeline-zoom")!;
const timelineScroll = document.querySelector<HTMLElement>("#timeline-scroll")!;
const timelineTrack = document.querySelector<HTMLElement>("#timeline-track")!;
const timelineScrubber = document.querySelector<HTMLButtonElement>("#timeline-scrubber")!;
const timelineMenu = document.querySelector<HTMLElement>("#timeline-menu")!;
const timelineAddKeyframeButton = document.querySelector<HTMLButtonElement>("#timeline-add-keyframe")!;
const timelineDeleteKeyframeButton = document.querySelector<HTMLButtonElement>("#timeline-delete-keyframe")!;
const timelineEventTypeSelect = document.querySelector<HTMLSelectElement>("#timeline-event-type")!;
const timelinePlayButton = document.querySelector<HTMLButtonElement>("#timeline-play")!;
const timelinePauseButton = document.querySelector<HTMLButtonElement>("#timeline-pause")!;
const timelineStopButton = document.querySelector<HTMLButtonElement>("#timeline-stop")!;
const exportAnimationButton = document.querySelector<HTMLButtonElement>("#export-animation")!;
const copyExportButton = document.querySelector<HTMLButtonElement>("#copy-export")!;
const animationExport = document.querySelector<HTMLTextAreaElement>("#animation-export")!;
const keyframeEditor = document.querySelector<HTMLElement>("#keyframe-editor")!;
const timewarpEditor = document.querySelector<HTMLElement>("#timewarp-editor")!;
const editInputs = {
  progress: document.querySelector<HTMLInputElement>("#edit-keyframe-time")!,
  easing: document.querySelector<HTMLSelectElement>("#edit-keyframe-ease")!,
  heightDelta: document.querySelector<HTMLInputElement>("#edit-keyframe-height")!,
  lookDelta: document.querySelector<HTMLInputElement>("#edit-keyframe-look")!,
  forwardDelta: document.querySelector<HTMLInputElement>("#edit-keyframe-forward")!,
} satisfies Record<keyof Omit<CameraKeyframe, "id" | "locked">, HTMLInputElement | HTMLSelectElement>;
const timewarpInputs = {
  progress: document.querySelector<HTMLInputElement>("#edit-timewarp-time")!,
  gameplayScale: document.querySelector<HTMLInputElement>("#edit-timewarp-scale")!,
  easing: document.querySelector<HTMLSelectElement>("#edit-timewarp-ease")!,
} satisfies Record<keyof Omit<TimeWarpPoint, "id">, HTMLInputElement | HTMLSelectElement>;

const cameraSettings: HelicopterCameraSettings = { ...defaultHelicopterCameraSettings };
let sim: NeonSwarmSimulation;
let sceneId: LaneRunnerSceneId = "neonHall";
let banked: ShowstopperId | null = null;
let lastNow = performance.now();
let previousPlaybackProgress = 0;

interface CameraKeyframe {
  id: string;
  progress: number;
  heightDelta: number;
  lookDelta: number;
  forwardDelta: number;
  easing: ShowstopperEasing;
  locked?: boolean;
}

type AttackEventType = "startAttack" | "stopAttack";

interface AttackTimelineEvent {
  id: string;
  type: AttackEventType;
  progress: number;
}

interface TimeWarpPoint {
  id: string;
  progress: number;
  gameplayScale: number;
  easing: ShowstopperEasing;
}

interface CameraPose {
  height: number;
  lookAngleDegrees: number;
  forward: number;
}

interface EditorPlaybackState {
  status: "stopped" | "playing" | "paused";
  progress: number;
  direction: 1 | -1;
  lastFrameNow: number;
  returnStartProgress: number;
  returnStartTimeWarpScale: number;
  returnStartPose: CameraPose;
}

interface CameraAnimationExport {
  format: "neon-swarm-showstopper-camera-v2";
  showstopperId: ShowstopperId;
  durationMs: number;
  authoring: {
    sceneId: LaneRunnerSceneId;
    keyframesAreRelativeDeltas: true;
    progressIsNormalizedDuration: true;
    forwardMeansTowardScene: true;
    originIsRuntimeDefaultCamera: true;
    reverseCameraAfterTimeline: true;
    lockLaneInputUntilCameraReturns: true;
  };
  keyframes: Array<Omit<CameraKeyframe, "id" | "locked"> & { locked?: true }>;
  events: Array<{ type: AttackEventType; progress: number }>;
  timeWarp: Array<Omit<TimeWarpPoint, "id">>;
}

type SavedCameraAnimationExport = Omit<Partial<CameraAnimationExport>, "format"> & {
  format?: "neon-swarm-showstopper-camera-v1" | CameraAnimationExport["format"];
};

const easingOptions: readonly ShowstopperEasing[] = ["linear", "easeIn", "easeOut", "easeInOut"];
const localStorageKey = "neon-swarm.showstopper-lab.camera-animation.v1";
let keyframes: CameraKeyframe[] = [originKeyframe()];
let attackEvents: AttackTimelineEvent[] = [];
let timeWarpPoints: TimeWarpPoint[] = [];
let selectedKeyframeId: string | null = null;
let selectedAttackEventId: string | null = null;
let selectedTimeWarpId: string | null = null;
let keyframeIdCounter = 0;
let attackEventIdCounter = 0;
let timeWarpIdCounter = 0;
let pendingMenuProgress = 0;
let pendingMenuKeyframeId: string | null = null;
let editorDurationMs: number = showstopperFamily.members.dragonsBreath.durationMs;
const playback: EditorPlaybackState = {
  status: "stopped",
  progress: 0,
  direction: 1,
  lastFrameNow: lastNow,
  returnStartProgress: 1,
  returnStartTimeWarpScale: 1,
  returnStartPose: defaultCameraPose(),
};

const sliders = {
  height: document.querySelector<HTMLInputElement>("#camera-height")!,
  lookAngleDegrees: document.querySelector<HTMLInputElement>("#camera-look")!,
  followDistance: document.querySelector<HTMLInputElement>("#camera-back")!,
} satisfies Record<"height" | "lookAngleDegrees" | "followDistance", HTMLInputElement>;

function syncSlidersFromCamera(): void {
  sliders.height.value = String(cameraSettings.height);
  sliders.lookAngleDegrees.value = String(cameraSettings.lookAngleDegrees);
  sliders.followDistance.value = String(cameraForward());
}

function syncCameraFromSliders(): void {
  setCameraPose({
    height: Number(sliders.height.value),
    lookAngleDegrees: Number(sliders.lookAngleDegrees.value),
    forward: Number(sliders.followDistance.value),
  });
}

function setCameraPose(pose: CameraPose, options: { syncSliders?: boolean } = {}): void {
  const nextSettings = {
    height: pose.height,
    lookAngleDegrees: pose.lookAngleDegrees,
    followDistance: forwardToFollowDistance(pose.forward),
    zoom: defaultHelicopterCameraSettings.zoom,
    horizon: defaultHelicopterCameraSettings.horizon,
  };
  Object.assign(cameraSettings, nextSettings);
  sim?.setCameraSettings(nextSettings);
  if (options.syncSliders) syncSlidersFromCamera();
  cameraReadout.textContent = `H ${pose.height.toFixed(0)} - L ${pose.lookAngleDegrees.toFixed(0)} - F ${pose.forward.toFixed(0)}`;
}

function forwardToFollowDistance(forward: number): number {
  return defaultHelicopterCameraSettings.followDistance - forward;
}

function followDistanceToForward(followDistance: number): number {
  return defaultHelicopterCameraSettings.followDistance - followDistance;
}

function cameraForward(): number {
  return followDistanceToForward(cameraSettings.followDistance);
}

function laneX(lane: Lane): number {
  return canvas.width * laneCenters[lane];
}

function playerY(): number {
  return canvas.height * .82;
}

function inputLocked(): boolean {
  return playback.status === "playing" || playback.direction < 0;
}

function resetEnemies(): void {
  sim.clearStage();
  spawnEnemyRows(enemyGridRows);
}

function spawnEnemyRows(rows: number): void {
  const enemiesAhead = sim.snapshot().enemies.filter(enemy => !enemy.dying && enemy.y < playerY());
  const backY = enemiesAhead.length > 0
    ? Math.min(...enemiesAhead.map(enemy => enemy.y))
    : playerY() - enemyRowSpacing;
  sim.spawnEnemyGrid({
    enemyId: "basicOrb",
    rows,
    columns: enemyGridColumns,
    rowSpacing: enemyRowSpacing,
    columnSpacing: enemyColumnSpacing,
    startY: backY - enemyRowSpacing,
    speedMultiplier: 1,
    playSound: false,
  });
}

function bankSelectedShowstopper(): void {
  banked = selectedShowstopper();
  syncBankUi();
}

function topUpEnemies(): void {
  const liveEnemiesAhead = sim.snapshot().enemies.filter(enemy => !enemy.dying && enemy.y < playerY()).length;
  if (liveEnemiesAhead < enemyTopUpThreshold) spawnEnemyRows(enemyTopUpRows);
}

function originKeyframe(): CameraKeyframe {
  return {
    id: "camera-origin",
    progress: 0,
    heightDelta: 0,
    lookDelta: 0,
    forwardDelta: 0,
    easing: "linear",
    locked: true,
  };
}

function syncEditorFromSelectedShowstopper(): void {
  const member = showstopperFamily.members[selectedShowstopper()];
  editorDurationMs = member.durationMs;
  durationInput.value = String(editorDurationMs);
  let previousHeight = defaultHelicopterCameraSettings.height;
  let previousLook = defaultHelicopterCameraSettings.lookAngleDegrees;
  let previousForward = 0;
  keyframes = member.camera.map((pose, index) => {
    const forward = followDistanceToForward(pose.followDistance);
    const frame: CameraKeyframe = {
      id: index === 0 ? "camera-origin" : `camera-keyframe-${++keyframeIdCounter}`,
      progress: pose.progress ?? 0,
      heightDelta: index === 0 ? 0 : pose.height - previousHeight,
      lookDelta: index === 0 ? 0 : pose.lookAngleDegrees - previousLook,
      forwardDelta: index === 0 ? 0 : forward - previousForward,
      easing: pose.easing ?? "linear",
      ...(index === 0 ? { locked: true } : {}),
    };
    previousHeight = pose.height;
    previousLook = pose.lookAngleDegrees;
    previousForward = forward;
    return frame;
  });
  attackEvents = member.timelineEvents.map(event => createAttackEvent(event.type, event.progress ?? 0));
  timeWarpPoints = member.timeWarp.map(point => createTimeWarpPoint(
    point.progress ?? 0,
    point.gameplayScale,
    "easing" in point ? point.easing ?? "linear" : "linear",
  ));
  selectedKeyframeId = null;
  selectedAttackEventId = null;
  selectedTimeWarpId = null;
  applyPlaybackProgress(0);
  syncTimeline();
  syncKeyframeEditor();
  syncAnimationExport();
}

function seedDragonBreathChoreography(): void {
  showstopperSelect.value = "dragonsBreath";
  syncEditorFromSelectedShowstopper();
}

function defaultCameraPose(): CameraPose & Pick<CameraKeyframe, "heightDelta" | "lookDelta" | "forwardDelta"> {
  return {
    height: defaultHelicopterCameraSettings.height,
    lookAngleDegrees: defaultHelicopterCameraSettings.lookAngleDegrees,
    forward: 0,
    heightDelta: 0,
    lookDelta: 0,
    forwardDelta: 0,
  };
}

function selectedShowstopper(): ShowstopperId {
  return showstopperSelect.value as ShowstopperId;
}

function selectedSceneId(): LaneRunnerSceneId {
  return sceneSelect.value as LaneRunnerSceneId;
}

function applySelectedScene(): void {
  sceneId = selectedSceneId();
  sim.setScene(sceneId);
  syncSpecReadout();
  syncAnimationExport();
}

function syncBankUi(): void {
  syncShowstopperTriggerUi({
    triggerButton,
    bankSlot,
    bankGlyph,
    bankLabel,
    readout: bankReadout,
  }, {
    id: banked,
    disabled: !banked,
  });
}

function triggerBankedShowstopperPreview(): void {
  if (!banked) return;
  const id = banked;
  banked = null;
  stopPlayback();
  sim.bankShowstopper(id);
  sim.triggerBankedShowstopper();
  syncBankUi();
}

function syncSpecReadout(): void {
  const member = showstopperFamily.members[selectedShowstopper()];
  specReadout.innerHTML = [
    ["Duration", `${member.durationMs} ms`],
    ["Time points", String(member.timeWarp.length)],
    ["Time warp", member.timeWarp.map(point => `${Math.round((point.progress ?? 0) * 100)}% @ ${Math.round(point.gameplayScale * 100)}%`).join(" / ")],
    ["Camera poses", String(member.camera.length)],
    ["Attack", `${member.attack.rowsAhead} rows - ${member.attack.targeting}`],
    ["Scene", getLaneRunnerSceneName(sceneId)],
  ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
}

function timelineDuration(): number {
  return editorDurationMs;
}

function returnDuration(): number {
  return showstopperFamily.members[selectedShowstopper()].returnCameraMs;
}

function clampDuration(value: number): number {
  return Number.isFinite(value) ? Math.max(250, Math.min(12000, Math.round(value))) : showstopperFamily.members.dragonsBreath.durationMs;
}

function setTimelineDuration(value: number, options: { syncInput?: boolean; persist?: boolean } = {}): void {
  editorDurationMs = clampDuration(value);
  if (options.syncInput !== false) durationInput.value = String(editorDurationMs);
  syncTimeline();
  syncKeyframeEditor();
  applyPlaybackProgress(playback.progress);
  syncAnimationExport();
}

function commitDurationInput(): void {
  setTimelineDuration(Number(durationInput.value));
}

function timelineZoom(): number {
  const value = Number(timelineZoomInput.value);
  return Number.isFinite(value) ? Math.max(1, Math.min(5, value)) : 1;
}

function keyframeTrackHeight(): number {
  return 520 * timelineZoom();
}

function keyframeById(id: string | null): CameraKeyframe | null {
  return id ? keyframes.find(frame => frame.id === id) ?? null : null;
}

function attackEventById(id: string | null): AttackTimelineEvent | null {
  return id ? attackEvents.find(event => event.id === id) ?? null : null;
}

function timeWarpById(id: string | null): TimeWarpPoint | null {
  return id ? timeWarpPoints.find(point => point.id === id) ?? null : null;
}

function createKeyframe(progress: number): CameraKeyframe {
  return {
    id: `camera-keyframe-${++keyframeIdCounter}`,
    progress: clampProgress(progress),
    heightDelta: 0,
    lookDelta: 0,
    forwardDelta: 0,
    easing: "easeInOut",
  };
}

function createAttackEvent(type: AttackEventType, progress: number): AttackTimelineEvent {
  return {
    id: `attack-event-${++attackEventIdCounter}`,
    type,
    progress: clampProgress(progress),
  };
}

function createTimeWarpPoint(progress: number, gameplayScale = 1, easing: ShowstopperEasing = "easeInOut"): TimeWarpPoint {
  return {
    id: `timewarp-point-${++timeWarpIdCounter}`,
    progress: clampProgress(progress),
    gameplayScale: Math.max(.05, Math.min(1, Number.isFinite(gameplayScale) ? gameplayScale : 1)),
    easing,
  };
}

function addKeyframeAt(progress: number): void {
  const frame = createKeyframe(progress);
  keyframes.push(frame);
  selectKeyframe(frame.id);
  syncTimeline();
  syncAnimationExport();
}

function addAttackEventAt(type: AttackEventType, progress: number): void {
  const event = createAttackEvent(type, progress);
  attackEvents.push(event);
  selectAttackEvent(event.id);
  syncTimeline();
  syncAnimationExport();
}

function addTimeWarpAt(progress: number): void {
  const point = createTimeWarpPoint(progress, currentTimeWarpScaleAt(progress));
  timeWarpPoints.push(point);
  selectTimeWarp(point.id);
  syncTimeline();
  syncAnimationExport();
}

function addToolbarKeyframe(): void {
  const nextProgress = nextEventProgress();
  const type = timelineEventTypeSelect.value;
  if (type === "startAttack" || type === "stopAttack") {
    addAttackEventAt(type, nextProgress);
    return;
  }
  if (type === "timeWarp") {
    addTimeWarpAt(nextProgress);
    return;
  }
  addKeyframeAt(nextProgress);
}

function nextEventProgress(): number {
  const latestProgress = Math.max(
    ...keyframes.map(frame => frame.progress),
    ...attackEvents.map(event => event.progress),
    ...timeWarpPoints.map(point => point.progress),
  );
  return Math.min(1, latestProgress + .05);
}

function selectKeyframe(id: string | null): void {
  selectedKeyframeId = keyframeById(id) ? id : null;
  if (selectedKeyframeId) {
    selectedAttackEventId = null;
    selectedTimeWarpId = null;
  }
  syncKeyframeEditor();
  syncTimelineSelection();
}

function selectAttackEvent(id: string | null): void {
  selectedAttackEventId = attackEventById(id) ? id : null;
  if (selectedAttackEventId) {
    selectedKeyframeId = null;
    selectedTimeWarpId = null;
  }
  syncKeyframeEditor();
  syncTimelineSelection();
}

function selectTimeWarp(id: string | null): void {
  selectedTimeWarpId = timeWarpById(id) ? id : null;
  if (selectedTimeWarpId) {
    selectedKeyframeId = null;
    selectedAttackEventId = null;
  }
  syncKeyframeEditor();
  syncTimelineSelection();
}

function deleteSelectedKeyframe(): void {
  if (selectedAttackEventId) {
    deleteAttackEvent(selectedAttackEventId);
    return;
  }
  if (selectedTimeWarpId) {
    deleteTimeWarp(selectedTimeWarpId);
    return;
  }
  deleteKeyframe(selectedKeyframeId);
}

function deleteKeyframe(id: string | null): void {
  if (!id) return;
  const index = keyframes.findIndex(frame => frame.id === id);
  if (index < 0) return;
  if (keyframes[index].locked) return;
  keyframes.splice(index, 1);
  if (selectedKeyframeId === id) selectedKeyframeId = null;
  syncKeyframeEditor();
  syncTimeline();
  syncAnimationExport();
}

function deleteAttackEvent(id: string | null): void {
  if (!id) return;
  const index = attackEvents.findIndex(event => event.id === id);
  if (index < 0) return;
  attackEvents.splice(index, 1);
  if (selectedAttackEventId === id) selectedAttackEventId = null;
  syncKeyframeEditor();
  syncTimeline();
  syncAnimationExport();
}

function deleteTimeWarp(id: string | null): void {
  if (!id) return;
  const index = timeWarpPoints.findIndex(point => point.id === id);
  if (index < 0) return;
  timeWarpPoints.splice(index, 1);
  if (selectedTimeWarpId === id) selectedTimeWarpId = null;
  syncKeyframeEditor();
  syncTimeline();
  syncAnimationExport();
}

function syncTimeline(): void {
  const trackHeight = keyframeTrackHeight();
  timelineTrack.style.height = `${trackHeight}px`;
  timelineTrack.querySelectorAll(".timeline-dot").forEach(dot => dot.remove());
  keyframes.sort((a, b) => a.progress - b.progress);
  for (const frame of keyframes) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "timeline-dot timeline-dot--camera";
    dot.dataset.eventKind = "camera";
    dot.dataset.keyframeId = frame.id;
    dot.dataset.selected = String(frame.id === selectedKeyframeId);
    dot.dataset.locked = String(Boolean(frame.locked));
    dot.title = `Camera ${formatProgressPercent(frame.progress)}`;
    dot.style.bottom = `${progressToTimelineY(frame.progress, trackHeight)}px`;
    timelineTrack.append(dot);
  }
  for (const event of attackEvents.sort((a, b) => a.progress - b.progress)) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = `timeline-dot timeline-dot--${event.type}`;
    dot.dataset.eventKind = "attack";
    dot.dataset.attackEventId = event.id;
    dot.dataset.selected = String(event.id === selectedAttackEventId);
    dot.title = `${event.type === "startAttack" ? "Start attack" : "Stop attack"} ${formatProgressPercent(event.progress)}`;
    dot.style.bottom = `${progressToTimelineY(event.progress, trackHeight)}px`;
    timelineTrack.append(dot);
  }
  for (const point of timeWarpPoints.sort((a, b) => a.progress - b.progress)) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "timeline-dot timeline-dot--timeWarp";
    dot.dataset.eventKind = "timeWarp";
    dot.dataset.timeWarpId = point.id;
    dot.dataset.selected = String(point.id === selectedTimeWarpId);
    dot.dataset.scale = `${Math.round(point.gameplayScale * 100)}%`;
    dot.title = `Time warp ${formatProgressPercent(point.progress)} - ${Math.round(point.gameplayScale * 100)}%`;
    dot.style.bottom = `${progressToTimelineY(point.progress, trackHeight)}px`;
    timelineTrack.append(dot);
  }
  syncScrubber();
  timelineDeleteKeyframeButton.disabled = !selectedKeyframeId && !selectedAttackEventId && !selectedTimeWarpId || Boolean(keyframeById(selectedKeyframeId)?.locked);
}

function syncScrubber(): void {
  timelineScrubber.style.bottom = `${progressToTimelineY(playback.progress)}px`;
  timelineScrubber.title = formatProgressPercent(playback.progress);
  timelinePlayButton.disabled = playback.status === "playing";
  timelinePauseButton.disabled = playback.status !== "playing";
}

function syncTimelineSelection(): void {
  timelineTrack.querySelectorAll<HTMLElement>(".timeline-dot").forEach(dot => {
    dot.dataset.selected = String(
      dot.dataset.keyframeId === selectedKeyframeId ||
      dot.dataset.attackEventId === selectedAttackEventId ||
      dot.dataset.timeWarpId === selectedTimeWarpId,
    );
  });
  timelineDeleteKeyframeButton.disabled = !selectedKeyframeId && !selectedAttackEventId && !selectedTimeWarpId || Boolean(keyframeById(selectedKeyframeId)?.locked);
}

function syncKeyframeEditor(): void {
  const frame = keyframeById(selectedKeyframeId);
  const timeWarp = timeWarpById(selectedTimeWarpId);
  keyframeEditor.hidden = !frame;
  timewarpEditor.hidden = !timeWarp;
  if (timeWarp) {
    timewarpInputs.progress.value = String(progressPercentValue(timeWarp.progress));
    timewarpInputs.gameplayScale.value = String(Number(timeWarp.gameplayScale.toFixed(2)));
    timewarpInputs.easing.value = timeWarp.easing;
  }
  if (!frame) return;
  editInputs.progress.value = String(progressPercentValue(frame.progress));
  editInputs.easing.value = frame.easing;
  editInputs.heightDelta.value = String(Math.round(frame.heightDelta));
  editInputs.lookDelta.value = String(Math.round(frame.lookDelta));
  editInputs.forwardDelta.value = String(Math.round(frame.forwardDelta));
  const locked = Boolean(frame.locked);
  editInputs.progress.disabled = locked;
  editInputs.easing.disabled = locked;
  editInputs.heightDelta.disabled = locked;
  editInputs.lookDelta.disabled = locked;
  editInputs.forwardDelta.disabled = locked;
}

function updateSelectedKeyframe(field: keyof Omit<CameraKeyframe, "id" | "locked">, value: string): void {
  const frame = keyframeById(selectedKeyframeId);
  if (!frame || frame.locked) return;
  if (field === "easing") {
    frame.easing = value as ShowstopperEasing;
  } else if (field === "progress") {
    frame.progress = clampProgress(Number(value) / 100);
  } else {
    frame[field] = Number(value) as never;
  }
  setCameraPose(absolutePoseForFrame(frame), { syncSliders: true });
  syncTimeline();
  syncAnimationExport();
}

function updateSelectedTimeWarp(field: keyof Omit<TimeWarpPoint, "id">, value: string): void {
  const point = timeWarpById(selectedTimeWarpId);
  if (!point) return;
  if (field === "easing") {
    point.easing = value as ShowstopperEasing;
  } else if (field === "progress") {
    point.progress = clampProgress(Number(value) / 100);
  } else {
    point.gameplayScale = Math.max(.05, Math.min(1, Number(value)));
  }
  applyPlaybackProgress(playback.progress);
  syncTimeline();
  syncAnimationExport();
}

function animationExportModel(): CameraAnimationExport {
  return {
    format: "neon-swarm-showstopper-camera-v2",
    showstopperId: selectedShowstopper(),
    durationMs: timelineDuration(),
    authoring: {
      sceneId,
      keyframesAreRelativeDeltas: true,
      progressIsNormalizedDuration: true,
      forwardMeansTowardScene: true,
      originIsRuntimeDefaultCamera: true,
      reverseCameraAfterTimeline: true,
      lockLaneInputUntilCameraReturns: true,
    },
    keyframes: [...keyframes]
      .sort((a, b) => a.progress - b.progress)
      .map(frame => ({
        progress: roundForExport(frame.progress),
        heightDelta: roundForExport(frame.heightDelta),
        lookDelta: roundForExport(frame.lookDelta),
        forwardDelta: roundForExport(frame.forwardDelta),
        easing: frame.easing,
        ...(frame.locked ? { locked: true as const } : {}),
      })),
    events: [...attackEvents]
      .sort((a, b) => a.progress - b.progress)
      .map(event => ({
        type: event.type,
        progress: roundForExport(event.progress),
      })),
    timeWarp: [...timeWarpPoints]
      .sort((a, b) => a.progress - b.progress)
      .map(point => ({
        progress: roundForExport(point.progress),
        gameplayScale: roundForExport(point.gameplayScale),
        easing: point.easing,
      })),
  };
}

function syncAnimationExport(): void {
  animationExport.value = `${JSON.stringify(animationExportModel(), null, 2)}\n`;
  persistEditorState();
}

function persistEditorState(): void {
  try {
    localStorage.setItem(localStorageKey, JSON.stringify(animationExportModel()));
  } catch {
    // Local storage is a convenience for the lab; export remains the durable fallback.
  }
}

function restoreEditorState(): boolean {
  try {
    const saved = localStorage.getItem(localStorageKey);
    if (!saved) return false;
    const parsed = JSON.parse(saved) as SavedCameraAnimationExport;
    if (parsed.format !== "neon-swarm-showstopper-camera-v1" && parsed.format !== "neon-swarm-showstopper-camera-v2") return false;
    if (parsed.showstopperId && showstopperFamily.members[parsed.showstopperId]) {
      showstopperSelect.value = parsed.showstopperId;
    }
    if (parsed.authoring?.sceneId && (laneRunnerSceneIds as readonly string[]).includes(parsed.authoring.sceneId)) {
      sceneId = parsed.authoring.sceneId;
      sceneSelect.value = sceneId;
      sim.setScene(sceneId);
    }
    editorDurationMs = clampDuration(Number(parsed.durationMs));
    durationInput.value = String(editorDurationMs);
    const restoredKeyframes = Array.isArray(parsed.keyframes)
      ? parsed.keyframes.map((frame, index) => restoreKeyframe(frame, index)).filter((frame): frame is CameraKeyframe => Boolean(frame))
      : [];
    const origin = originKeyframe();
    keyframes = [
      origin,
      ...restoredKeyframes.filter(frame => !frame.locked && frame.progress > 0),
    ].sort((a, b) => a.progress - b.progress);
    attackEvents = Array.isArray(parsed.events)
      ? parsed.events.map(restoreAttackEvent).filter((event): event is AttackTimelineEvent => Boolean(event))
      : [];
    timeWarpPoints = Array.isArray(parsed.timeWarp)
      ? parsed.timeWarp.map(restoreTimeWarpPoint).filter((point): point is TimeWarpPoint => Boolean(point))
      : [];
    keyframeIdCounter = keyframes.reduce((counter, frame) => {
      const match = frame.id.match(/camera-keyframe-(\d+)/);
      return match ? Math.max(counter, Number(match[1])) : counter;
    }, keyframeIdCounter);
    selectedKeyframeId = keyframeById(selectedKeyframeId)?.id ?? null;
    selectedAttackEventId = attackEventById(selectedAttackEventId)?.id ?? null;
    selectedTimeWarpId = timeWarpById(selectedTimeWarpId)?.id ?? null;
    return true;
  } catch {
    keyframes = [originKeyframe()];
    attackEvents = [];
    timeWarpPoints = [];
    selectedKeyframeId = null;
    selectedAttackEventId = null;
    selectedTimeWarpId = null;
    return false;
  }
}

function restoreKeyframe(frame: Partial<Omit<CameraKeyframe, "id">>, index: number): CameraKeyframe | null {
  const easing = easingOptions.includes(frame.easing as ShowstopperEasing) ? frame.easing as ShowstopperEasing : "easeInOut";
  const progress = clampProgress(Number(frame.progress));
  if (frame.locked || index === 0 && progress === 0) return originKeyframe();
  return {
    id: `camera-keyframe-${++keyframeIdCounter}`,
    progress,
    heightDelta: finiteNumber(frame.heightDelta),
    lookDelta: finiteNumber(frame.lookDelta),
    forwardDelta: finiteNumber(frame.forwardDelta),
    easing,
  };
}

function restoreAttackEvent(event: Partial<AttackTimelineEvent>): AttackTimelineEvent | null {
  if (event.type !== "startAttack" && event.type !== "stopAttack") return null;
  return createAttackEvent(event.type, Number(event.progress));
}

function restoreTimeWarpPoint(point: Partial<TimeWarpPoint>): TimeWarpPoint | null {
  const easing = easingOptions.includes(point.easing as ShowstopperEasing) ? point.easing as ShowstopperEasing : "linear";
  return createTimeWarpPoint(Number(point.progress), finiteNumber(point.gameplayScale), easing);
}

function finiteNumber(value: unknown): number {
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : 0;
}

function attackWindow(): { start: number; end: number } | null {
  const start = attackEvents
    .filter(event => event.type === "startAttack")
    .sort((a, b) => a.progress - b.progress)[0]?.progress;
  const end = attackEvents
    .filter(event => event.type === "stopAttack")
    .sort((a, b) => b.progress - a.progress)[0]?.progress;
  if (start === undefined || end === undefined || end <= start) return null;
  return { start, end };
}

function attackProgressAt(progress: number): number | null {
  const window = attackWindow();
  if (!window || progress < window.start || progress > window.end) return null;
  return clampProgress((progress - window.start) / (window.end - window.start));
}

function updateDragonBreathAttack(): void {
  const window = attackWindow();
  if (!window) return;
  const attackProgress = attackProgressAt(playback.progress);
  if (attackProgress !== null) sim.resolveShowstopperAttack(showstopperFamily.members[selectedShowstopper()].attack.rowsAhead, attackProgress);
}

function currentTimeWarpScaleAt(progressAt: number): number {
  if (playback.direction < 0) {
    return showstopperReturnGameplayScaleAt({
      fromScale: playback.returnStartTimeWarpScale,
      elapsedMs: (1 - clampProgress(progressAt / Math.max(.0001, playback.returnStartProgress))) * returnDuration(),
      durationMs: returnDuration(),
    });
  }
  return showstopperGameplayScaleAtProgress(editorTimeWarpPoints(), clampProgress(progressAt));
}

function roundForExport(value: number): number {
  return Number(value.toFixed(4));
}

function progressPercentValue(progress: number): number {
  return Number((clampProgress(progress) * 100).toFixed(1));
}

function formatProgressPercent(progress: number): string {
  return `${progressPercentValue(progress)}%`;
}

async function copyAnimationExport(): Promise<void> {
  syncAnimationExport();
  animationExport.select();
  try {
    await navigator.clipboard.writeText(animationExport.value);
    copyExportButton.textContent = "Copied";
    setTimeout(() => { copyExportButton.textContent = "Copy"; }, 900);
  } catch {
    document.execCommand("copy");
  }
}

function progressToTimelineY(progress: number, trackHeight = keyframeTrackHeight()): number {
  const usableHeight = Math.max(1, trackHeight - 40);
  return 20 + clampProgress(progress) * usableHeight;
}

function timelineYToProgress(clientY: number): number {
  const rect = timelineTrack.getBoundingClientRect();
  const trackHeight = keyframeTrackHeight();
  const usableHeight = Math.max(1, trackHeight - 40);
  const yFromBottom = rect.bottom - clientY;
  const clampedY = Math.max(20, Math.min(trackHeight - 20, yFromBottom));
  return clampProgress((clampedY - 20) / usableHeight);
}

function clampTime(value: number, duration = timelineDuration()): number {
  return Math.max(0, Math.min(duration, Number.isFinite(value) ? value : 0));
}

function clampProgress(value: number): number {
  return Math.max(0, Math.min(1, Number.isFinite(value) ? value : 0));
}

function absoluteKeyframes(): Array<CameraKeyframe & CameraPose> {
  let height = defaultHelicopterCameraSettings.height;
  let lookAngleDegrees = defaultHelicopterCameraSettings.lookAngleDegrees;
  let forward = 0;
  return [...keyframes]
    .sort((a, b) => a.progress - b.progress)
    .map(frame => {
      height += frame.heightDelta;
      lookAngleDegrees += frame.lookDelta;
      forward += frame.forwardDelta;
      return { ...frame, height, lookAngleDegrees, forward };
    });
}

function lastCameraProgress(): number {
  const frames = absoluteKeyframes();
  return frames[frames.length - 1]?.progress ?? 0;
}

function absolutePoseForFrame(frame: CameraKeyframe): CameraPose {
  return absoluteKeyframes().find(candidate => candidate.id === frame.id) ?? {
    height: defaultHelicopterCameraSettings.height,
    lookAngleDegrees: defaultHelicopterCameraSettings.lookAngleDegrees,
    forward: 0,
  };
}

function editorCameraPoints(): Array<Omit<ShowstopperCameraPose, "atMs"> & { progress: number }> {
  return absoluteKeyframes().map(frame => ({
    progress: frame.progress,
    height: frame.height,
    lookAngleDegrees: frame.lookAngleDegrees,
    followDistance: forwardToFollowDistance(frame.forward),
    zoom: defaultHelicopterCameraSettings.zoom,
    horizon: defaultHelicopterCameraSettings.horizon,
    easing: frame.easing,
  }));
}

function editorTimeWarpPoints(): Array<Omit<ShowstopperTimeWarpPoint, "atMs"> & { progress: number }> {
  return [...timeWarpPoints]
    .sort((a, b) => a.progress - b.progress)
    .map(point => ({
      progress: point.progress,
      gameplayScale: point.gameplayScale,
      easing: point.easing,
    }));
}

function cameraSettingsFromPose(pose: CameraPose): Partial<HelicopterCameraSettings> {
  return {
    height: pose.height,
    lookAngleDegrees: pose.lookAngleDegrees,
    followDistance: forwardToFollowDistance(pose.forward),
    zoom: defaultHelicopterCameraSettings.zoom,
    horizon: defaultHelicopterCameraSettings.horizon,
  };
}

function cameraPoseFromSettings(settings: Partial<HelicopterCameraSettings>): CameraPose {
  return {
    height: settings.height ?? defaultHelicopterCameraSettings.height,
    lookAngleDegrees: settings.lookAngleDegrees ?? defaultHelicopterCameraSettings.lookAngleDegrees,
    forward: followDistanceToForward(settings.followDistance ?? defaultHelicopterCameraSettings.followDistance),
  };
}

function showTimelineMenu(x: number, y: number, options: { progress: number; keyframeId?: string | null }): void {
  pendingMenuProgress = options.progress;
  pendingMenuKeyframeId = options.keyframeId ?? null;
  const addButton = timelineMenu.querySelector<HTMLButtonElement>('[data-menu-action="add"]')!;
  const deleteButton = timelineMenu.querySelector<HTMLButtonElement>('[data-menu-action="delete"]')!;
  addButton.hidden = Boolean(pendingMenuKeyframeId);
  deleteButton.hidden = !pendingMenuKeyframeId;
  timelineMenu.hidden = false;
  const rect = timelineMenu.getBoundingClientRect();
  const left = Math.min(window.innerWidth - rect.width - 8, Math.max(8, x));
  const top = Math.min(window.innerHeight - rect.height - 8, Math.max(8, y));
  timelineMenu.style.left = `${left}px`;
  timelineMenu.style.top = `${top}px`;
}

function hideTimelineMenu(): void {
  timelineMenu.hidden = true;
}

function openTimelineMenu(event: MouseEvent | PointerEvent): void {
  event.preventDefault();
  event.stopPropagation();
  const target = event.target as HTMLElement;
  const dot = target.closest<HTMLElement>(".timeline-dot");
  const keyframeId = dot?.dataset.keyframeId ?? null;
  const attackEventId = dot?.dataset.attackEventId ?? null;
  if (keyframeId) selectKeyframe(keyframeId);
  if (attackEventId) selectAttackEvent(attackEventId);
  showTimelineMenu(event.clientX, event.clientY, {
    progress: timelineYToProgress(event.clientY),
    keyframeId,
  });
}

function resetCameraToDefault(): void {
  stopPlayback();
  setCameraPose({
    height: defaultHelicopterCameraSettings.height,
    lookAngleDegrees: defaultHelicopterCameraSettings.lookAngleDegrees,
    forward: 0,
  }, { syncSliders: true });
  applyPlaybackProgress(0);
}

function updateCameraAnimation(now: number): void {
  if (playback.status !== "playing") return;
  const elapsedMs = now - playback.lastFrameNow;
  const deltaProgress = playback.direction > 0
    ? elapsedMs / timelineDuration()
    : -elapsedMs / Math.max(1, returnDuration()) * Math.max(.0001, playback.returnStartProgress);
  playback.lastFrameNow = now;
  const nextProgress = playback.progress + deltaProgress;
  if (nextProgress >= 1) {
    applyPlaybackProgress(lastCameraProgress());
    playback.returnStartProgress = lastCameraProgress();
    playback.returnStartTimeWarpScale = currentTimeWarpScaleAt(playback.progress);
    playback.returnStartPose = cameraPoseAt(playback.progress);
    playback.direction = -1;
    playback.lastFrameNow = now;
    syncScrubber();
    return;
  }
  if (nextProgress <= 0 && playback.direction < 0) {
    applyPlaybackProgress(0);
    playback.status = "stopped";
    playback.direction = 1;
    syncScrubber();
    return;
  }
  applyPlaybackProgress(nextProgress);
}

function cameraPoseAt(progressAt: number): CameraPose {
  return cameraPoseFromSettings(showstopperCameraAtProgress(editorCameraPoints(), clampProgress(progressAt)));
}

function applyPlaybackProgress(progress: number): void {
  previousPlaybackProgress = playback.progress;
  playback.progress = clampProgress(progress);
  setCameraPose(cameraPoseForPlayback(), { syncSliders: true });
  sim.setSimulationSpeed(currentTimeWarpScaleAt(playback.progress));
  updateDragonBreathAttack();
  syncScrubber();
}

function cameraPoseForPlayback(): CameraPose {
  if (playback.direction >= 0) return cameraPoseAt(playback.progress);
  return cameraPoseFromSettings(showstopperReturnCameraAt({
    from: cameraSettingsFromPose(playback.returnStartPose),
    to: defaultHelicopterCameraSettings,
    elapsedMs: (1 - clampProgress(playback.progress / Math.max(.0001, playback.returnStartProgress))) * returnDuration(),
    durationMs: returnDuration(),
  }));
}

function playPlayback(now = performance.now()): void {
  if (playback.progress >= lastCameraProgress()) {
    playback.returnStartProgress = Math.max(.0001, playback.progress);
    playback.returnStartTimeWarpScale = currentTimeWarpScaleAt(playback.progress);
    playback.returnStartPose = cameraPoseAt(playback.progress);
    playback.direction = -1;
  } else if (playback.progress <= 0) {
    playback.direction = 1;
    playback.returnStartProgress = 1;
    playback.returnStartTimeWarpScale = 1;
    playback.returnStartPose = defaultCameraPose();
  }
  playback.status = "playing";
  playback.lastFrameNow = now;
  syncScrubber();
}

function pausePlayback(): void {
  if (playback.status === "playing") playback.status = "paused";
  syncScrubber();
}

function stopPlayback(): void {
  playback.status = "stopped";
  playback.progress = 0;
  playback.direction = 1;
  playback.returnStartProgress = 1;
  playback.returnStartTimeWarpScale = 1;
  playback.returnStartPose = defaultCameraPose();
  sim.setSimulationSpeed(1);
  syncScrubber();
}

try {
  sim = await NeonSwarmSimulation.create({
    mode: "lab",
    canvas,
    stageElement: gameElement,
    cameraSettings,
    sceneId,
    playerInvincible: true,
  });

  for (const id of laneRunnerSceneIds) {
    sceneSelect.add(new Option(getLaneRunnerSceneName(id), id));
  }
  sceneSelect.value = sceneId;
  for (const [id, member] of Object.entries(showstopperFamily.members)) {
    showstopperSelect.add(new Option(member.label, id));
  }
  for (const option of easingOptions) editInputs.easing.add(new Option(option, option));
  for (const option of easingOptions) timewarpInputs.easing.add(new Option(option, option));
  if (!restoreEditorState()) seedDragonBreathChoreography();
  timelineDeleteKeyframeButton.disabled = true;
  resetEnemies();
  syncSlidersFromCamera();
  syncCameraFromSliders();
  syncTimeline();
  syncKeyframeEditor();
  syncSpecReadout();
  syncBankUi();
  syncCameraFromSliders();

  const render = (now: number): void => {
    lastNow = now;
    syncBankUi();
    updateCameraAnimation(now);
    topUpEnemies();
    sim.tick(now);
    sim.render(now);
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  for (const input of Object.values(sliders)) {
    input.addEventListener("input", () => {
      pausePlayback();
      syncCameraFromSliders();
    });
  }
  bindSquadInput(gameElement, {
    lane: () => sim.snapshot().squad.lane,
    setLane: lane => {
      if (!inputLocked()) sim.setSquadLane(lane);
    },
  });
  sceneSelect.addEventListener("change", applySelectedScene);
  showstopperSelect.addEventListener("change", () => {
    syncSpecReadout();
    syncAnimationExport();
  });
  durationInput.addEventListener("input", () => {
    const value = Number(durationInput.value);
    if (!Number.isFinite(value) || durationInput.value.trim() === "") return;
    setTimelineDuration(value, { syncInput: false });
  });
  durationInput.addEventListener("change", commitDurationInput);
  durationInput.addEventListener("blur", commitDurationInput);
  durationInput.addEventListener("wheel", event => {
    event.preventDefault();
    durationInput.blur();
  });
  timelineZoomInput.addEventListener("input", syncTimeline);
  Object.entries(editInputs).forEach(([field, input]) => {
    input.addEventListener("input", () => updateSelectedKeyframe(field as keyof Omit<CameraKeyframe, "id" | "locked">, input.value));
  });
  Object.entries(timewarpInputs).forEach(([field, input]) => {
    input.addEventListener("input", () => updateSelectedTimeWarp(field as keyof Omit<TimeWarpPoint, "id">, input.value));
  });
  timelineTrack.addEventListener("click", event => {
    const dot = (event.target as HTMLElement).closest<HTMLElement>(".timeline-dot");
    if ((event.target as HTMLElement).closest<HTMLElement>(".timeline-scrubber")) return;
    const rect = timelineTrack.getBoundingClientRect();
    const scrubberLaneCenter = rect.left + rect.width * .84;
    if (!dot && Math.abs(event.clientX - scrubberLaneCenter) < 24) {
      pausePlayback();
      applyPlaybackProgress(timelineYToProgress(event.clientY));
      return;
    }
    if (!dot) {
      selectKeyframe(null);
      selectAttackEvent(null);
      selectTimeWarp(null);
      return;
    }
    if (dot.dataset.eventKind === "attack") {
      selectAttackEvent(dot.dataset.attackEventId ?? null);
      return;
    }
    if (dot.dataset.eventKind === "timeWarp") {
      selectTimeWarp(dot.dataset.timeWarpId ?? null);
      return;
    }
    selectKeyframe(dot.dataset.keyframeId ?? null);
  });
  timelineScroll.addEventListener("contextmenu", openTimelineMenu);
  timelineScroll.addEventListener("pointerdown", event => {
    if (event.button === 2) openTimelineMenu(event);
  });
  timelineScroll.addEventListener("mousedown", event => {
    if (event.button === 2) openTimelineMenu(event);
  });
  timelineTrack.addEventListener("pointerdown", event => {
    if (event.button !== 0) return;
    const dot = (event.target as HTMLElement).closest<HTMLElement>(".timeline-dot");
    const frame = keyframeById(dot?.dataset.keyframeId ?? null);
    const attackEvent = attackEventById(dot?.dataset.attackEventId ?? null);
    const timeWarp = timeWarpById(dot?.dataset.timeWarpId ?? null);
    if (!dot || !frame && !attackEvent && !timeWarp) return;
    event.preventDefault();
    hideTimelineMenu();
    if (frame) selectKeyframe(frame.id);
    if (attackEvent) selectAttackEvent(attackEvent.id);
    if (timeWarp) selectTimeWarp(timeWarp.id);
    dot.setPointerCapture?.(event.pointerId);
    const move = (moveEvent: PointerEvent): void => {
      if (frame && !frame.locked) frame.progress = timelineYToProgress(moveEvent.clientY);
      if (attackEvent) attackEvent.progress = timelineYToProgress(moveEvent.clientY);
      if (timeWarp) timeWarp.progress = timelineYToProgress(moveEvent.clientY);
      syncTimeline();
      syncKeyframeEditor();
      syncAnimationExport();
    };
    const done = (): void => {
      removeEventListener("pointermove", move);
      removeEventListener("pointerup", done);
      removeEventListener("pointercancel", done);
    };
    addEventListener("pointermove", move);
    addEventListener("pointerup", done);
    addEventListener("pointercancel", done);
  });
  timelineScrubber.addEventListener("pointerdown", event => {
    if (event.button !== 0) return;
    event.preventDefault();
    pausePlayback();
    timelineScrubber.setPointerCapture?.(event.pointerId);
    const move = (moveEvent: PointerEvent): void => {
      applyPlaybackProgress(timelineYToProgress(moveEvent.clientY));
    };
    const done = (): void => {
      removeEventListener("pointermove", move);
      removeEventListener("pointerup", done);
      removeEventListener("pointercancel", done);
    };
    addEventListener("pointermove", move);
    addEventListener("pointerup", done);
    addEventListener("pointercancel", done);
  });
  timelineMenu.addEventListener("click", event => {
    const action = (event.target as HTMLElement).closest<HTMLButtonElement>("[data-menu-action]")?.dataset.menuAction;
    if (action === "add") addKeyframeAt(pendingMenuProgress);
    if (action === "delete") deleteKeyframe(pendingMenuKeyframeId);
    hideTimelineMenu();
  });
  timelineAddKeyframeButton.addEventListener("click", addToolbarKeyframe);
  timelineDeleteKeyframeButton.addEventListener("click", deleteSelectedKeyframe);
  addEventListener("click", event => {
    if (timelineMenu.hidden || timelineMenu.contains(event.target as Node)) return;
    hideTimelineMenu();
  });
  addEventListener("keydown", event => {
    if ((event.key === "ArrowLeft" || event.key === "a" || event.key === "A") && !inputLocked()) {
      sim.setSquadLane(0);
      event.preventDefault();
      return;
    }
    if ((event.key === "ArrowRight" || event.key === "d" || event.key === "D") && !inputLocked()) {
      sim.setSquadLane(1);
      event.preventDefault();
      return;
    }
    if ((event.key === "Delete" || event.key === "Backspace") && (selectedKeyframeId || selectedAttackEventId || selectedTimeWarpId)) {
      const target = event.target as HTMLElement;
      if (target.closest("input,select,textarea")) return;
      event.preventDefault();
      deleteSelectedKeyframe();
    }
  });
  bankButton.addEventListener("click", bankSelectedShowstopper);
  syncShowstopperButton.addEventListener("click", syncEditorFromSelectedShowstopper);
  bindShowstopperTriggerUi({ triggerButton, bankSlot }, triggerBankedShowstopperPreview, {
    emptyClick: () => {
      bankSelectedShowstopper();
      triggerBankedShowstopperPreview();
    },
  });
  resetCameraButton.addEventListener("click", resetCameraToDefault);
  exportAnimationButton.addEventListener("click", syncAnimationExport);
  copyExportButton.addEventListener("click", () => void copyAnimationExport());
  timelinePlayButton.addEventListener("click", () => playPlayback(lastNow));
  timelinePauseButton.addEventListener("click", pausePlayback);
  timelineStopButton.addEventListener("click", () => {
    stopPlayback();
    applyPlaybackProgress(0);
  });
  syncAnimationExport();
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
