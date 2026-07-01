import { showstopperFamily, trackFamily, type ShowstopperId, type TrackFamilyId, type TrackId } from "../CombatDefinition";
import { bindSquadInput } from "./input";
import { NeonSwarmSimulation, neonSwarmSimulationFps, neonSwarmSimulationFrameMs, type NeonSwarmFinishResult, type NeonSwarmSound } from "./simulation/NeonSwarmSimulation";
import { syncShowstopperTriggerUi } from "./showstopperTriggerUi";
import { TrackMenuRenderer } from "./trackMenuRenderer";
import { completeTrack, loadTrackProgress, recordTrackHighScore, saveTrackProgress, starsForScore, trackUnlocked, type TrackProgress } from "./trackProgress";
import { HumanTuningInterface } from "./tuning/HumanTuningInterface";
import { applyPortraitStage, defaultHelicopterCameraSettings, laneRunnerViewport, type HelicopterCameraSettings } from "./viewport";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const trackMenuCanvas = document.querySelector<HTMLCanvasElement>("#track-menu-canvas")!;
const trackSelect = document.querySelector<HTMLElement>("#track-select")!;
const trackList = document.querySelector<HTMLElement>("#track-list")!;
const trackMenuLabels = document.querySelector<HTMLElement>("#track-menu-labels")!;
const status = document.querySelector<HTMLElement>("#status")!;
const scorePanel = document.querySelector<HTMLElement>("#score-panel")!;
const scoreCurrent = document.querySelector<HTMLElement>("#score-current")!;
const scoreDeltas = document.querySelector<HTMLElement>("#score-deltas")!;
const scoreHigh = document.querySelector<HTMLElement>("#score-high")!;
const scoreHighValue = document.querySelector<HTMLElement>("#score-high-value")!;
const scoreJackpot = document.querySelector<HTMLElement>("#score-jackpot")!;
const showstopperTrigger = document.querySelector<HTMLButtonElement>("#showstopper-trigger")!;
const showstopperTriggerSecondary = document.querySelector<HTMLButtonElement>("#showstopper-trigger-secondary")!;
const showstopperBank = document.querySelector<HTMLElement>("#showstopper-bank")!;
const showstopperHint = document.querySelector<HTMLElement>(".showstopper-bank__hint")!;
const result = document.querySelector<HTMLElement>("#result")!;
const resultTitle = document.querySelector<HTMLElement>("#result-title")!;
const resultDetail = document.querySelector<HTMLElement>("#result-detail")!;
const startDialog = document.querySelector<HTMLElement>("#start-dialog")!;
const startDialogFamily = document.querySelector<HTMLElement>("#start-dialog-family")!;
const startDialogTitle = document.querySelector<HTMLElement>("#start-dialog-title")!;
const startDialogDetail = document.querySelector<HTMLElement>("#start-dialog-detail")!;
const confirmTrackStart = document.querySelector<HTMLButtonElement>("#confirm-track-start")!;
const playAgain = document.querySelector<HTMLButtonElement>("#play-again")!;
const backToGames = document.querySelector<HTMLButtonElement>("#back-to-games")!;
const error = document.querySelector<HTMLElement>("#error")!;
const developerTools = document.querySelector<HTMLElement>("#developer-tools")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
const cameraLab = document.querySelector<HTMLElement>("#camera-lab")!;
const cameraOutputText = document.querySelector<HTMLOutputElement>("#camera-output-text")!;
const urlOptions = window.JustTheGamesPlease?.urlOptions;
const developerMode = urlOptions?.isEnabled("dev") ?? false;
const rendererMode = urlOptions?.isEnabled("renderer") ?? false;
const cameraControlsMode = urlOptions?.isEnabled("cameracontrols") ?? false;
const tuningMode = urlOptions?.isEnabled("tuning") ?? false;
const defaultTrackSceneId = Object.values(trackFamily.families)[0].environment.sceneId;
let pendingTrackId: TrackId | null = null;
let currentTrackId: TrackId | null = null;
let progress: TrackProgress = loadTrackProgress();
let trackMenu: TrackMenuRenderer | null = null;
let musicStarted = false;
let previousHighScoreForRun = 0;
let scoreActual = 0;
let scoreDisplayed = 0;
let pendingScoreDelta = 0;
let pendingScoreDeltaTimer = 0;
let scoreAnimationFrame = 0;
let jackpotTimer = 0;
let simForSound: NeonSwarmSimulation | null = null;
let activeRecording: NeonSwarmRecordedRun | null = null;
let replayAudioEvents: RecordingAudioEvent[] = [];
let replayAudioCapture = false;
let lastRecordedMusicVolume: number | null = null;
const audioRotations = new Map<string, number>();

type NeonSwarmRecordedInput =
  | { frame: number; action: "lane"; lane: 0 | 1 }
  | { frame: number; action: "showstopper"; id?: ShowstopperId };
type NeonSwarmRecordedInputPayload =
  | { action: "lane"; lane: 0 | 1 }
  | { action: "showstopper"; id?: ShowstopperId };

interface RecordingAudioEvent {
  kind?: "sound" | "music" | "musicVolume";
  name?: string;
  timeMs: number;
  durationMs?: number;
  volume?: number;
}

interface NeonSwarmRecordedRun {
  schemaVersion: 1;
  recordedAt: string;
  trackId: TrackId;
  viewport: { width: number; height: number };
  simulationFps: number;
  inputs: NeonSwarmRecordedInput[];
  audio: RecordingAudioEvent[];
  durationFrames?: number;
  durationMs?: number;
  score?: number;
  won?: boolean;
}

interface NeonSwarmReplayState {
  solution: NeonSwarmRecordedRun;
  frame: number;
  inputsByFrame: Map<number, NeonSwarmRecordedInput[]>;
  legacyCombatInputs: NeonSwarmRecordedInput[];
  legacyCombatInputIndex: number;
}

let replayState: NeonSwarmReplayState | null = null;

const resetAudioRotations = (): void => {
  audioRotations.clear();
  lastRecordedMusicVolume = null;
};

const currentSimulationTime = (): number => Math.max(0, (simForSound?.frame ?? 0) * neonSwarmSimulationFrameMs);

const recordSound = (name: string): void => {
  const event = { kind: "sound" as const, name, timeMs: currentSimulationTime() };
  if (activeRecording) activeRecording.audio.push(event);
  if (replayAudioCapture) replayAudioEvents.push(event);
};

const recordMusicVolume = (volume: number): void => {
  const normalized = Math.max(0, Math.min(1, Number.isFinite(volume) ? volume : 1));
  if (lastRecordedMusicVolume !== null && Math.abs(lastRecordedMusicVolume - normalized) < .005) return;
  lastRecordedMusicVolume = normalized;
  const event = { kind: "musicVolume" as const, timeMs: currentSimulationTime(), volume: normalized };
  if (activeRecording) activeRecording.audio.push(event);
  if (replayAudioCapture) replayAudioEvents.push(event);
};

const ensureMusicEvent = (audio: RecordingAudioEvent[], durationMs?: number): void => {
  const existing = audio.find(event => event.kind === "music" && event.name === "Music");
  if (existing) {
    if (durationMs !== undefined) existing.durationMs = Math.max(0, durationMs - existing.timeMs);
    return;
  }
  audio.unshift({ kind: "music", name: "Music", timeMs: 0, durationMs, volume: 1 });
};

const playResolvedSound = (name: string): void => {
  recordSound(name);
  if (!rendererMode) window.gameAudio?.play(name);
};

const simulationSound: NeonSwarmSound = {
  play: playResolvedSound,
  playRotated(id, alternatives) {
    const alternativeCount = Math.max(0, Math.floor(alternatives));
    const next = audioRotations.get(id) ?? 0;
    playResolvedSound(next === 0 ? id : `${id}_Alt${next}`);
    audioRotations.set(id, (next + 1) % (alternativeCount + 1));
  },
  setMusicVolume(volume) {
    recordMusicVolume(volume);
    if (!rendererMode) window.gameAudio?.setMusicVolume?.(volume);
  },
};

developerTools.hidden = !developerMode;
cameraLab.hidden = !cameraControlsMode;
applyPortraitStage(gameElement, laneRunnerViewport);

const cameraSettings: HelicopterCameraSettings = { ...defaultHelicopterCameraSettings };
const cameraSettingsOutput = (): string =>
  `camera: height=${cameraSettings.height.toFixed(0)}, lookAngleDegrees=${cameraSettings.lookAngleDegrees.toFixed(0)}, followDistance=${cameraSettings.followDistance.toFixed(0)}, zoom=${cameraSettings.zoom.toFixed(2)}, horizon=${cameraSettings.horizon.toFixed(2)}`;
const syncCameraOutput = (): void => {
  cameraOutputText.value = cameraSettingsOutput();
};
const bindCameraSlider = (id: string, key: keyof HelicopterCameraSettings): void => {
  const input = document.querySelector<HTMLInputElement>(id)!;
  input.value = String(cameraSettings[key]);
  input.addEventListener("input", () => {
    cameraSettings[key] = Number(input.value);
    syncCameraOutput();
  });
};
bindCameraSlider("#camera-height", "height");
bindCameraSlider("#camera-look", "lookAngleDegrees");
bindCameraSlider("#camera-back", "followDistance");
bindCameraSlider("#camera-zoom", "zoom");
bindCameraSlider("#camera-horizon", "horizon");
syncCameraOutput();
document.querySelector<HTMLButtonElement>("#camera-output")!.addEventListener("click", async () => {
  const output = cameraSettingsOutput();
  cameraOutputText.value = output;
  if (navigator.clipboard) await navigator.clipboard.writeText(output).catch(() => undefined);
});

const formatScore = (score: number): string => String(score < 0 ? Math.ceil(score) : Math.floor(score));

const victoryTitleForScore = (score: number): string => {
  if (score > 100) return "Mastery Achieved";
  switch (starsForScore(score)) {
    case 3: return "Excellent";
    case 2: return "Well Done";
    case 1: return "You barely made it";
    default: return "Track Complete";
  }
};

const spawnScorePop = (delta: number): void => {
  const rounded = Math.round(delta);
  if (rounded === 0) return;
  const pop = document.createElement("span");
  const positive = rounded > 0;
  const big = Math.abs(rounded) >= 8;
  pop.className = [
    "score-pop",
    positive ? "score-pop--positive" : "score-pop--negative",
    positive && big ? "score-pop--big" : "",
  ].filter(Boolean).join(" ");
  pop.textContent = `${positive ? "+" : ""}${rounded}`;
  scoreDeltas.append(pop);
  window.setTimeout(() => pop.remove(), 820);
};

const flushScoreDelta = (): void => {
  pendingScoreDeltaTimer = 0;
  const delta = pendingScoreDelta;
  pendingScoreDelta = 0;
  spawnScorePop(delta);
};

const queueScoreDelta = (delta: number): void => {
  if (Math.abs(delta) < .01) return;
  pendingScoreDelta += delta;
  if (pendingScoreDeltaTimer) window.clearTimeout(pendingScoreDeltaTimer);
  pendingScoreDeltaTimer = window.setTimeout(flushScoreDelta, 150);
};

const setScoreTarget = (score: number): void => {
  const next = Number.isFinite(score) ? score : 0;
  const delta = next - scoreActual;
  scoreActual = next;
  queueScoreDelta(delta);
};

const resetScorePanel = (): void => {
  scoreActual = 0;
  scoreDisplayed = 0;
  pendingScoreDelta = 0;
  if (pendingScoreDeltaTimer) window.clearTimeout(pendingScoreDeltaTimer);
  pendingScoreDeltaTimer = 0;
  if (jackpotTimer) window.clearTimeout(jackpotTimer);
  jackpotTimer = 0;
  scorePanel.classList.remove("is-ticking", "is-new-high", "is-negative");
  scoreJackpot.hidden = true;
  scoreHigh.hidden = true;
  scoreDeltas.replaceChildren();
  scoreCurrent.textContent = "0";
};

const configureScorePanelForTrack = (trackId: TrackId): void => {
  resetScorePanel();
  const hasPreviousVictory = progress.completedTrackIds.includes(trackId);
  previousHighScoreForRun = hasPreviousVictory ? progress.highScores[trackId] ?? 0 : 0;
  scoreHigh.hidden = previousHighScoreForRun <= 0;
  scoreHighValue.textContent = formatScore(previousHighScoreForRun);
  scorePanel.hidden = false;
};

const celebrateNewHighScore = (score: number): void => {
  if (previousHighScoreForRun <= 0) return;
  scorePanel.classList.add("is-new-high");
  scoreJackpot.hidden = false;
  spawnScorePop(Math.max(1, score - previousHighScoreForRun));
  if (jackpotTimer) window.clearTimeout(jackpotTimer);
  jackpotTimer = window.setTimeout(() => {
    scorePanel.classList.remove("is-new-high");
    scoreJackpot.hidden = true;
    jackpotTimer = 0;
  }, 2600);
};

const animateScorePanel = (): void => {
  const difference = scoreActual - scoreDisplayed;
  if (Math.abs(difference) < .05) {
    scoreDisplayed = scoreActual;
    scorePanel.classList.remove("is-ticking");
  } else {
    const direction = Math.sign(difference);
    const step = Math.max(.25, Math.abs(difference) * .24);
    scoreDisplayed += direction * Math.min(Math.abs(difference), step);
    scorePanel.classList.add("is-ticking");
  }
  scoreCurrent.textContent = formatScore(scoreDisplayed);
  scorePanel.classList.toggle("is-negative", scoreDisplayed < 0);
  scoreAnimationFrame = requestAnimationFrame(animateScorePanel);
};
scoreAnimationFrame = requestAnimationFrame(animateScorePanel);

try {
  const sim = await NeonSwarmSimulation.create({
    mode: "game",
    canvas,
    stageElement: gameElement,
    cameraSettings,
    sound: simulationSound,
    sceneId: defaultTrackSceneId,
    initialShowstopperBank: ["deepFreeze", "dragonsBreath"],
    onHighScore: score => {
      if (!currentTrackId) return;
      status.textContent = `New high score: ${Math.floor(score)}!`;
      celebrateNewHighScore(score);
    },
    onFinish: finish => {
      setScoreTarget(finish.score);
      result.hidden = false;
      resultTitle.textContent = finish.won ? victoryTitleForScore(finish.score) : finish.title;
      resultDetail.textContent = finish.detail;
      finishRunRecording(finish);
      if (currentTrackId && !rendererMode) {
        progress = finish.won
          ? completeTrack(progress, currentTrackId, finish.score)
          : recordTrackHighScore(progress, currentTrackId, finish.score);
        saveTrackProgress(progress);
        trackMenu?.updateProgress(progress);
      }
    },
  });
  simForSound = sim;

  const recordingFrameForNextInput = (): number => sim.frame + 1;

  const beginRunRecording = (trackId: TrackId): void => {
    if (!window.gameRecording?.devMode || window.gameRecording.rendererMode) return;
    resetAudioRotations();
    activeRecording = {
      schemaVersion: 1,
      recordedAt: new Date().toISOString(),
      trackId,
      viewport: { width: canvas.width, height: canvas.height },
      simulationFps: neonSwarmSimulationFps,
      inputs: [],
      audio: [],
    };
    ensureMusicEvent(activeRecording.audio);
    recordMusicVolume(1);
  };

  const recordRunInput = (input: NeonSwarmRecordedInputPayload): void => {
    if (!activeRecording) return;
    activeRecording.inputs.push({ frame: recordingFrameForNextInput(), ...input } as NeonSwarmRecordedInput);
  };

  const finishRunRecording = (finish: NeonSwarmFinishResult): void => {
    if (!activeRecording || !window.gameRecording) return;
    activeRecording.durationFrames = Math.max(1, sim.frame);
    activeRecording.durationMs = activeRecording.durationFrames * neonSwarmSimulationFrameMs;
    activeRecording.score = finish.score;
    activeRecording.won = finish.won;
    ensureMusicEvent(activeRecording.audio, activeRecording.durationMs);
    window.gameRecording.saveSolution("Neon Swarm", activeRecording);
    activeRecording = null;
  };

  const normalizeReplaySolution = (solution: Partial<NeonSwarmRecordedRun>): NeonSwarmRecordedRun => {
    if (!solution || typeof solution.trackId !== "string" || !(solution.trackId in trackFamily.members)) {
      throw new Error("Neon Swarm replay needs a valid trackId.");
    }
    const inputs = Array.isArray(solution.inputs)
      ? solution.inputs
        .map(input => ({ ...input, frame: Math.max(0, Math.floor(Number(input.frame) || 0)) } as NeonSwarmRecordedInput))
        .filter(input => input.action === "lane" || input.action === "showstopper")
      : [];
    const durationMs = Number(solution.durationMs);
    const durationFrames = Math.floor(Number(solution.durationFrames));
    return {
      schemaVersion: 1,
      recordedAt: solution.recordedAt ?? new Date(0).toISOString(),
      trackId: solution.trackId,
      viewport: solution.viewport ?? { width: canvas.width, height: canvas.height },
      simulationFps: neonSwarmSimulationFps,
      inputs,
      audio: Array.isArray(solution.audio) ? solution.audio : [],
      durationFrames: Number.isFinite(durationFrames) && durationFrames > 0 ? durationFrames : undefined,
      durationMs: Number.isFinite(durationMs) && durationMs > 0 ? Math.max(neonSwarmSimulationFrameMs, durationMs) : undefined,
      score: Number(solution.score) || 0,
      won: Boolean(solution.won),
    };
  };

  const resetReplaySurface = (trackId: TrackId): void => {
    pendingTrackId = null;
    currentTrackId = trackId;
    gameElement.dataset.page = "game";
    gameElement.style.removeProperty("background-image");
    trackSelect.hidden = true;
    startDialog.hidden = true;
    result.hidden = true;
    configureScorePanelForTrack(trackId);
    scorePanel.hidden = false;
    resetScorePanel();
    sim.setScene(trackFamily.members[trackId].environment.sceneId);
    status.textContent = "Rendering replay.";
    syncShowstopperUi();
  };

  const loadReplay = (rawSolution: Partial<NeonSwarmRecordedRun>, captureAudio: boolean): NeonSwarmRecordedRun => {
    const solution = normalizeReplaySolution(rawSolution);
    sim.stopLoop();
    replayAudioCapture = false;
    replayAudioEvents = [];
    activeRecording = null;
    resetAudioRotations();
    resetReplaySurface(solution.trackId);
    sim.reset({ silent: true });
    sim.setHighScoreToBeat(0);
    replayAudioCapture = captureAudio;
    if (captureAudio) {
      ensureMusicEvent(replayAudioEvents, solution.durationMs);
      recordMusicVolume(1);
    }
    sim.startTrack(trackFamily.members[solution.trackId]);
    replayAudioCapture = captureAudio;
    const inputsByFrame = new Map<number, NeonSwarmRecordedInput[]>();
    for (const input of solution.inputs) {
      const list = inputsByFrame.get(input.frame) ?? [];
      list.push(input);
      inputsByFrame.set(input.frame, list);
    }
    replayState = {
      solution,
      frame: 0,
      inputsByFrame,
      legacyCombatInputs: solution.durationFrames ? [] : [...solution.inputs].sort((left, right) => left.frame - right.frame),
      legacyCombatInputIndex: 0,
    };
    sim.render(0);
    return solution;
  };

  const applyReplayInput = (input: NeonSwarmRecordedInput): void => {
    if (input.action === "lane") {
      sim.setSquadLane(input.lane, { requireActiveTrack: true });
      return;
    }
    if (input.action === "showstopper") {
      sim.triggerBankedShowstopper(input.id);
    }
  };

  const stepReplayToFrame = (targetFrame: number): void => {
    if (!replayState) throw new Error("Neon Swarm replay has not been loaded.");
    const nextFrame = Math.max(0, Math.floor(targetFrame));
    while (replayState.frame < nextFrame) {
      replayState.frame++;
      if (replayState.solution.durationFrames) {
        for (const input of replayState.inputsByFrame.get(replayState.frame) ?? []) applyReplayInput(input);
      } else {
        const combatInputFrame = Math.floor(sim.now / neonSwarmSimulationFrameMs) + 1;
        while (
          replayState.legacyCombatInputIndex < replayState.legacyCombatInputs.length &&
          replayState.legacyCombatInputs[replayState.legacyCombatInputIndex].frame <= combatInputFrame
        ) {
          applyReplayInput(replayState.legacyCombatInputs[replayState.legacyCombatInputIndex]);
          replayState.legacyCombatInputIndex++;
        }
      }
      sim.stepFixedFrame();
    }
    sim.render(sim.now);
    setScoreTarget(sim.snapshot().score);
  };

  const trackRoute = (trackId: TrackId): string => `#track/${encodeURIComponent(trackId)}`;
  const trackFamilyForTrack = (trackId: TrackId): (typeof trackFamily.families)[TrackFamilyId] | null => {
    const families = Object.values(trackFamily.families) as Array<(typeof trackFamily.families)[TrackFamilyId] & { trackIds: readonly TrackId[] }>;
    return families.find(family => family.trackIds.includes(trackId)) ?? null;
  };
  const startAudioForGesture = (): void => {
    if (musicStarted) return;
    musicStarted = true;
    const audio = window.gameAudio as (typeof window.gameAudio & { playSharedMusic?: (ids: string[]) => void });
    audio?.playSharedMusic?.(["Music"]);
  };
  const syncShowstopperUi = (): void => {
    const snapshot = sim.snapshot();
    const activeId = snapshot.active.showstopper;
    const hasTrack = snapshot.activeTrack;
    showstopperBank.hidden = !hasTrack || !activeId;
    showstopperHint.textContent = matchMedia("(pointer: coarse)").matches ? "swipe up to use" : "click or swipe up";
    syncShowstopperTriggerUi({
      triggerButton: showstopperTrigger,
      secondaryTriggerButton: showstopperTriggerSecondary,
    }, {
      id: activeId,
      count: snapshot.active.showstopperCount,
      banked: snapshot.active.showstoppers,
      active: sim.isLaneInputLocked(),
      hidden: !hasTrack || !activeId,
      disabled: !hasTrack || sim.isLaneInputLocked(),
    });
  };
  const triggerShowstopper = (id?: ShowstopperId): void => {
    const labelId = id && showstopperFamily.members[id] ? id : sim.snapshot().active.showstopper;
    if (sim.triggerBankedShowstopper(id)) {
      recordRunInput({ action: "showstopper", id: id && showstopperFamily.members[id] ? id : undefined });
      status.textContent = labelId ? `${showstopperFamily.members[labelId].label}!` : "Showstopper!";
      syncShowstopperUi();
    }
  };
  const flingShowstopperButton = (button: HTMLButtonElement): void => {
    if (button.hidden) return;
    const sourceRect = button.getBoundingClientRect();
    const bankRect = showstopperBank.getBoundingClientRect();
    const ghost = button.cloneNode(true) as HTMLButtonElement;
    ghost.removeAttribute("id");
    ghost.disabled = true;
    ghost.classList.add("showstopper-trigger--fling");
    Object.assign(ghost.style, {
      left: `${sourceRect.left - bankRect.left}px`,
      top: `${sourceRect.top - bankRect.top}px`,
      width: `${sourceRect.width}px`,
      height: `${sourceRect.height}px`,
    });
    showstopperBank.append(ghost);
    requestAnimationFrame(() => ghost.classList.add("is-flinging"));
    window.setTimeout(() => ghost.remove(), 520);
  };
  const bindShowstopperSwipe = (button: HTMLButtonElement): void => {
    let pointerId: number | null = null;
    let startY = 0;
    let startX = 0;
    let latestY = 0;
    let startedAt = 0;
    const resetDrag = (): void => {
      pointerId = null;
      button.classList.remove("is-dragging");
      button.style.removeProperty("--swipe-y");
    };
    button.addEventListener("pointerdown", event => {
      if (button.disabled || button.hidden || pointerId !== null) return;
      pointerId = event.pointerId;
      startY = event.clientY;
      startX = event.clientX;
      latestY = event.clientY;
      startedAt = performance.now();
      button.classList.add("is-dragging");
      button.setPointerCapture(event.pointerId);
      event.preventDefault();
    });
    button.addEventListener("pointermove", event => {
      if (pointerId !== event.pointerId) return;
      latestY = event.clientY;
      const y = Math.min(10, Math.max(-92, event.clientY - startY));
      button.style.setProperty("--swipe-y", `${y}px`);
      event.preventDefault();
    });
    const finish = (event: PointerEvent): void => {
      if (pointerId !== event.pointerId) return;
      const deltaY = latestY - startY;
      const deltaX = event.clientX - startX;
      const elapsed = Math.max(1, performance.now() - startedAt);
      const velocityY = deltaY / elapsed;
      const triggered = deltaY < -46 && Math.abs(deltaY) > Math.abs(deltaX) * .85 || velocityY < -.55 && deltaY < -24;
      if (triggered) {
        flingShowstopperButton(button);
        startAudioForGesture();
        triggerShowstopper(button.dataset.showstopperId as ShowstopperId | undefined);
      }
      resetDrag();
      event.preventDefault();
    };
    button.addEventListener("pointerup", finish);
    button.addEventListener("click", event => {
      if (button.disabled || button.hidden) return;
      if ((event as PointerEvent).pointerType && (event as PointerEvent).pointerType !== "mouse") return;
      startAudioForGesture();
      triggerShowstopper(button.dataset.showstopperId as ShowstopperId | undefined);
    });
    button.addEventListener("pointercancel", resetDrag);
    button.addEventListener("lostpointercapture", () => {
      if (pointerId !== null) resetDrag();
    });
  };
  const navigateToTracks = (): void => {
    if (location.hash === "#tracks") {
      resetToTracks();
      return;
    }
    location.hash = "tracks";
  };
  const navigateToGames = (): void => {
    const target = new URL("index.html", location.href);
    target.search = location.search;
    target.hash = "games";
    location.href = target.toString();
  };
  const trackIdFromRoute = (): TrackId | null => {
    const prefix = "#track/";
    if (!location.hash.startsWith(prefix)) return null;
    const candidate = decodeURIComponent(location.hash.slice(prefix.length));
    return candidate in trackFamily.members ? candidate as TrackId : null;
  };
  trackMenu = await TrackMenuRenderer.create({
    canvas: trackMenuCanvas,
    buttonLayer: trackList,
    labelLayer: trackMenuLabels,
    trackFamily,
    route: trackRoute,
    progress,
    devMode: developerMode,
  });
  if (!rendererMode) trackMenu.start();
  if (tuningMode) new HumanTuningInterface({ host: document.body, trackMenu });

  const resetToTracks = (): void => {
    activeRecording = null;
    sim.reset();
    pendingTrackId = null;
    currentTrackId = null;
    previousHighScoreForRun = 0;
    gameElement.dataset.page = "tracks";
    gameElement.style.removeProperty("background-image");
    result.hidden = true;
    startDialog.hidden = true;
    trackSelect.hidden = false;
    status.textContent = "Choose a track family, then pick a run.";
    scorePanel.hidden = true;
    resetScorePanel();
    syncShowstopperUi();
  };

  const prepareTrackStart = (trackId: TrackId): void => {
    if (!trackUnlocked(trackId, progress, { devMode: developerMode })) {
      navigateToTracks();
      return;
    }
    pendingTrackId = trackId;
    sim.reset();
    result.hidden = true;
    const track = trackFamily.members[trackId];
    const family = trackFamilyForTrack(trackId);
    gameElement.dataset.page = "game";
    trackSelect.hidden = true;
    sim.setScene(track.environment.sceneId);
    status.textContent = "Ready?";
    scorePanel.hidden = true;
    resetScorePanel();
    syncShowstopperUi();
    startDialogFamily.textContent = family ? family.label : "Track";
    startDialogTitle.textContent = track.label;
    startDialogDetail.textContent = "Tap left or right to switch lanes.";
    startDialog.hidden = false;
    confirmTrackStart.focus();
  };

  const startTrack = (trackId: TrackId): void => {
    pendingTrackId = null;
    currentTrackId = trackId;
    beginRunRecording(trackId);
    startDialog.hidden = true;
    gameElement.dataset.page = "game";
    trackSelect.hidden = true;
    result.hidden = true;
    status.textContent = "Tap left or right to switch lanes.";
    configureScorePanelForTrack(trackId);
    sim.setHighScoreToBeat(previousHighScoreForRun);
    sim.startTrack(trackFamily.members[trackId]);
    syncShowstopperUi();
  };

  const handleRoute = (): void => {
    const trackId = trackIdFromRoute();
    if (trackId) prepareTrackStart(trackId);
    else resetToTracks();
  };

  document.querySelector<HTMLButtonElement>("#back-to-tracks")!.addEventListener("click", navigateToTracks);
  backToGames.addEventListener("click", navigateToGames);
  playAgain.addEventListener("click", () => {
    if (!currentTrackId) return;
    startAudioForGesture();
    startTrack(currentTrackId);
  });
  confirmTrackStart.addEventListener("click", () => {
    if (!pendingTrackId) return;
    startAudioForGesture();
    startTrack(pendingTrackId);
  });
  window.addEventListener("hashchange", handleRoute);
  if (!location.hash) history.replaceState(null, "", "#tracks");
  handleRoute();

  bindSquadInput(gameElement, {
    lane: () => sim.snapshot().squad.lane,
    setLane: lane => {
      if (!sim.isLaneInputLocked() && sim.setSquadLane(lane, { requireActiveTrack: true })) {
        recordRunInput({ action: "lane", lane });
      }
    },
  });
  bindShowstopperSwipe(showstopperTrigger);
  bindShowstopperSwipe(showstopperTriggerSecondary);
  addEventListener("keydown", event => {
    if (event.key !== " " && event.key !== "Enter") return;
    if (sim.snapshot().activeTrack && sim.snapshot().active.showstopper && !sim.isLaneInputLocked()) {
      startAudioForGesture();
      triggerShowstopper();
      event.preventDefault();
    }
  });

  window.gameRecording?.registerGame({
    name: "Neon Swarm",
    slug: "neon-swarm",
    page: "NeonSwarm.html",
    version: 1,
    scoreSolution(solution: Partial<NeonSwarmRecordedRun>) {
      return Number(solution?.score) || 0;
    },
    optimizeSolution(solution: NeonSwarmRecordedRun) {
      return solution;
    },
    validateSolution(solution: Partial<NeonSwarmRecordedRun>) {
      const errors: string[] = [];
      if (!solution || typeof solution.trackId !== "string" || !(solution.trackId in trackFamily.members)) errors.push("Missing or unknown trackId.");
      if (!Array.isArray(solution?.inputs)) errors.push("Replay inputs must be an array.");
      return { isValid: errors.length === 0, errors };
    },
    loadSolution(solution: Partial<NeonSwarmRecordedRun>) {
      loadReplay(solution, false);
    },
    getDurationMs(solution: Partial<NeonSwarmRecordedRun>) {
      const replay = normalizeReplaySolution(solution);
      if (replay.durationFrames) return replay.durationFrames * neonSwarmSimulationFrameMs;
      if (replay.durationMs) return replay.durationMs;
      const lastInputFrame = replay.inputs.reduce((max, input) => Math.max(max, input.frame), 0);
      return Math.max(1000, (lastInputFrame + neonSwarmSimulationFps * 4) * neonSwarmSimulationFrameMs);
    },
    getFrameReplayPlan(solution: Partial<NeonSwarmRecordedRun>, options: { captureFps?: number } = {}) {
      const replay = normalizeReplaySolution(solution);
      const lastInputFrame = replay.inputs.reduce((max, input) => Math.max(max, input.frame), 0);
      const totalFrames = replay.durationFrames || Math.max(1, Math.ceil((replay.durationMs || Math.max(1000, (lastInputFrame + neonSwarmSimulationFps * 4) * neonSwarmSimulationFrameMs)) / neonSwarmSimulationFrameMs));
      const durationMs = totalFrames * neonSwarmSimulationFrameMs;
      return {
        enabled: true,
        simulationFps: neonSwarmSimulationFps,
        captureFps: Math.max(1, Math.floor(options.captureFps ?? 30)),
        totalFrames,
        durationMs,
      };
    },
    beginFrameReplay(solution: Partial<NeonSwarmRecordedRun>) {
      loadReplay(solution, true);
    },
    stepFrame(frame: number) {
      stepReplayToFrame(frame);
    },
    getAudioEvents(solution: Partial<NeonSwarmRecordedRun>) {
      if (replayAudioEvents.length > 0) return replayAudioEvents;
      return Array.isArray(solution?.audio) ? solution.audio : [];
    },
  });

  if (!rendererMode) sim.startLoop();
  window.setInterval(() => {
    syncShowstopperUi();
    const snapshot = sim.snapshot();
    if (snapshot.activeTrack) setScoreTarget(snapshot.score);
  }, 80);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}

declare global {
  interface Window {
    JustTheGamesPlease?: {
      urlOptions?: {
        isEnabled(name: string): boolean;
      };
    };
    gameAudio?: {
      play(id: string): void;
      playRotated(id: string, alternatives: number): void;
      setMusicVolume?(volume: number): void;
    };
    gameRecording?: {
      devMode: boolean;
      rendererMode: boolean;
      saveSolution(gameName: string, solution: unknown): void;
      registerGame(definition: {
        name: string;
        slug?: string;
        page?: string;
        version?: number;
        scoreSolution?(solution: unknown): number;
        optimizeSolution?(solution: unknown, options?: unknown): unknown;
        validateSolution?(solution: unknown): { isValid: boolean; errors: string[] };
        loadSolution?(solution: unknown): void;
        seek?(timeMs: number, options?: unknown): void;
        getDurationMs?(solution: unknown, options?: unknown): number;
        getAudioEvents?(solution: unknown, options?: unknown): RecordingAudioEvent[];
        getFrameReplayPlan?(solution: unknown, options?: unknown): unknown;
        beginFrameReplay?(solution: unknown, options?: unknown): void;
        stepFrame?(frame: number, options?: unknown): void;
      }): unknown;
    };
  }
}
