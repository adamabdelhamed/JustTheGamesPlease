import { showstopperFamily, trackFamily, type ShowstopperId, type TrackFamilyId, type TrackId } from "../CombatDefinition";
import { bindSquadInput } from "./input";
import { NeonSwarmSimulation } from "./simulation/NeonSwarmSimulation";
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
    sound: window.gameAudio,
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
      if (currentTrackId) {
        progress = finish.won
          ? completeTrack(progress, currentTrackId, finish.score)
          : recordTrackHighScore(progress, currentTrackId, finish.score);
        saveTrackProgress(progress);
        trackMenu?.updateProgress(progress);
      }
    },
  });
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
  trackMenu.start();
  if (tuningMode) new HumanTuningInterface({ host: document.body, trackMenu });

  const resetToTracks = (): void => {
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
      if (!sim.isLaneInputLocked()) sim.setSquadLane(lane, { requireActiveTrack: true });
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

  sim.startLoop();
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
  }
}
