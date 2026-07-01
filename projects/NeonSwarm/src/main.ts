import { startingShowstopperId, trackFamily, type TrackFamilyId, type TrackId } from "../CombatDefinition";
import { bindSquadInput } from "./input";
import { NeonSwarmSimulation } from "./simulation/NeonSwarmSimulation";
import { syncShowstopperTriggerUi } from "./showstopperTriggerUi";
import { TrackMenuRenderer } from "./trackMenuRenderer";
import { applyPortraitStage, defaultHelicopterCameraSettings, laneRunnerViewport, type HelicopterCameraSettings } from "./viewport";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const trackMenuCanvas = document.querySelector<HTMLCanvasElement>("#track-menu-canvas")!;
const trackSelect = document.querySelector<HTMLElement>("#track-select")!;
const trackList = document.querySelector<HTMLElement>("#track-list")!;
const trackMenuLabels = document.querySelector<HTMLElement>("#track-menu-labels")!;
const status = document.querySelector<HTMLElement>("#status")!;
const runStatus = document.querySelector<HTMLElement>("#run-status")!;
const showstopperTrigger = document.querySelector<HTMLButtonElement>("#showstopper-trigger")!;
const result = document.querySelector<HTMLElement>("#result")!;
const resultTitle = document.querySelector<HTMLElement>("#result-title")!;
const resultDetail = document.querySelector<HTMLElement>("#result-detail")!;
const startDialog = document.querySelector<HTMLElement>("#start-dialog")!;
const startDialogFamily = document.querySelector<HTMLElement>("#start-dialog-family")!;
const startDialogTitle = document.querySelector<HTMLElement>("#start-dialog-title")!;
const startDialogDetail = document.querySelector<HTMLElement>("#start-dialog-detail")!;
const confirmTrackStart = document.querySelector<HTMLButtonElement>("#confirm-track-start")!;
const cancelTrackStart = document.querySelector<HTMLButtonElement>("#cancel-track-start")!;
const error = document.querySelector<HTMLElement>("#error")!;
const developerTools = document.querySelector<HTMLElement>("#developer-tools")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
const cameraLab = document.querySelector<HTMLElement>("#camera-lab")!;
const cameraOutputText = document.querySelector<HTMLOutputElement>("#camera-output-text")!;
const urlOptions = window.JustTheGamesPlease?.urlOptions;
const developerMode = urlOptions?.isEnabled("dev") ?? false;
const cameraControlsMode = urlOptions?.isEnabled("cameracontrols") ?? false;
const defaultTrackSceneId = Object.values(trackFamily.families)[0].environment.sceneId;
let pendingTrackId: TrackId | null = null;
let musicStarted = false;

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

try {
  const sim = await NeonSwarmSimulation.create({
    mode: "game",
    canvas,
    stageElement: gameElement,
    cameraSettings,
    sound: window.gameAudio,
    sceneId: defaultTrackSceneId,
    initialShowstopperBank: startingShowstopperId,
    onRunStatus: value => {
      runStatus.textContent = value;
    },
    onFinish: finish => {
      result.hidden = false;
      resultTitle.textContent = finish.title;
      resultDetail.textContent = finish.detail;
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
    syncShowstopperTriggerUi({
      triggerButton: showstopperTrigger,
    }, {
      id: activeId,
      count: snapshot.active.showstopperCount,
      active: sim.isLaneInputLocked(),
      hidden: !hasTrack || !activeId,
      disabled: !hasTrack || sim.isLaneInputLocked(),
    });
  };
  const triggerShowstopper = (): void => {
    if (sim.triggerBankedShowstopper()) {
      status.textContent = "Dragon's Breath!";
      syncShowstopperUi();
    }
  };
  const navigateToTracks = (): void => {
    if (location.hash === "#tracks") {
      resetToTracks();
      return;
    }
    location.hash = "tracks";
  };
  const trackIdFromRoute = (): TrackId | null => {
    const prefix = "#track/";
    if (!location.hash.startsWith(prefix)) return null;
    const candidate = decodeURIComponent(location.hash.slice(prefix.length));
    return candidate in trackFamily.members ? candidate as TrackId : null;
  };
  const trackMenu = await TrackMenuRenderer.create({
    canvas: trackMenuCanvas,
    buttonLayer: trackList,
    labelLayer: trackMenuLabels,
    trackFamily,
    route: trackRoute,
  });
  trackMenu.start();

  const resetToTracks = (): void => {
    sim.reset();
    pendingTrackId = null;
    gameElement.dataset.page = "tracks";
    gameElement.style.removeProperty("background-image");
    result.hidden = true;
    startDialog.hidden = true;
    trackSelect.hidden = false;
    status.textContent = "Choose a track family, then pick a run.";
    runStatus.textContent = "";
    syncShowstopperUi();
  };

  const prepareTrackStart = (trackId: TrackId): void => {
    pendingTrackId = trackId;
    sim.reset();
    result.hidden = true;
    const track = trackFamily.members[trackId];
    const family = trackFamilyForTrack(trackId);
    gameElement.dataset.page = "game";
    trackSelect.hidden = true;
    sim.setScene(track.environment.sceneId);
    status.textContent = "Ready?";
    runStatus.textContent = "";
    syncShowstopperUi();
    startDialogFamily.textContent = family ? family.label : "Track";
    startDialogTitle.textContent = track.label;
    startDialogDetail.textContent = "Tap left or right to switch lanes.";
    startDialog.hidden = false;
    confirmTrackStart.focus();
  };

  const startTrack = (trackId: TrackId): void => {
    pendingTrackId = null;
    startDialog.hidden = true;
    gameElement.dataset.page = "game";
    trackSelect.hidden = true;
    result.hidden = true;
    status.textContent = "Tap left or right to switch lanes.";
    sim.startTrack(trackFamily.members[trackId]);
    syncShowstopperUi();
  };

  const handleRoute = (): void => {
    const trackId = trackIdFromRoute();
    if (trackId) prepareTrackStart(trackId);
    else resetToTracks();
  };

  document.querySelector<HTMLButtonElement>("#back-to-tracks")!.addEventListener("click", navigateToTracks);
  confirmTrackStart.addEventListener("click", () => {
    if (!pendingTrackId) return;
    startAudioForGesture();
    startTrack(pendingTrackId);
  });
  cancelTrackStart.addEventListener("click", navigateToTracks);
  window.addEventListener("hashchange", handleRoute);
  if (!location.hash) history.replaceState(null, "", "#tracks");
  handleRoute();

  bindSquadInput(gameElement, {
    lane: () => sim.snapshot().squad.lane,
    setLane: lane => {
      if (!sim.isLaneInputLocked()) sim.setSquadLane(lane, { requireActiveTrack: true });
    },
  });
  showstopperTrigger.addEventListener("click", () => {
    startAudioForGesture();
    triggerShowstopper();
  });
  addEventListener("keydown", event => {
    if (event.key !== " " && event.key !== "Enter") return;
    if (sim.snapshot().activeTrack && sim.snapshot().active.showstopper && !sim.isLaneInputLocked()) {
      triggerShowstopper();
      event.preventDefault();
    }
  });

  sim.startLoop();
  window.setInterval(syncShowstopperUi, 120);
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
