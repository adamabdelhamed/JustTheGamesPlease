import { trackFamily } from "../CombatDefinition";
import { bindSquadInput } from "./input";
import { NeonSwarmSimulation } from "./simulation/NeonSwarmSimulation";
import { applyPortraitStage, defaultHelicopterCameraSettings, laneRunnerViewport, type HelicopterCameraSettings } from "./viewport";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const trackSelect = document.querySelector<HTMLElement>("#track-select")!;
const trackList = document.querySelector<HTMLElement>("#track-list")!;
const status = document.querySelector<HTMLElement>("#status")!;
const runStatus = document.querySelector<HTMLElement>("#run-status")!;
const result = document.querySelector<HTMLElement>("#result")!;
const resultTitle = document.querySelector<HTMLElement>("#result-title")!;
const resultDetail = document.querySelector<HTMLElement>("#result-detail")!;
const error = document.querySelector<HTMLElement>("#error")!;
const developerTools = document.querySelector<HTMLElement>("#developer-tools")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
const cameraLab = document.querySelector<HTMLElement>("#camera-lab")!;
const cameraOutputText = document.querySelector<HTMLOutputElement>("#camera-output-text")!;
const urlOptions = window.JustTheGamesPlease?.urlOptions;
const developerMode = urlOptions?.isEnabled("dev") ?? false;
const cameraControlsMode = developerMode || (urlOptions?.isEnabled("cameracontrols") ?? false);

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
    sceneId: Object.values(trackFamily.members)[0].environment.sceneId,
    onRunStatus: value => {
      runStatus.textContent = value;
    },
    onFinish: finish => {
      result.hidden = false;
      resultTitle.textContent = finish.title;
      resultDetail.textContent = finish.detail;
    },
  });

  const resetToTracks = (): void => {
    sim.reset();
    result.hidden = true;
    trackSelect.hidden = false;
    status.textContent = "Choose a track. Tap either side to switch lanes; use the joystick to fine aim.";
    runStatus.textContent = "";
  };

  const startTrack = (trackId: keyof typeof trackFamily.members): void => {
    trackSelect.hidden = true;
    result.hidden = true;
    status.textContent = "Tap a side to switch lanes. Small joystick motion aims; full motion crosses lanes.";
    sim.startTrack(trackFamily.members[trackId]);
  };

  trackList.innerHTML = Object.entries(trackFamily.members).map(([id, track]) => `
    <button class="track-card" data-track="${id}">
      <strong>${track.label}</strong><span>${track.description}</span><b>${track.durationSeconds}s -></b>
    </button>`).join("");
  trackList.querySelectorAll<HTMLButtonElement>("[data-track]").forEach(button => {
    button.addEventListener("click", () => startTrack(button.dataset.track as keyof typeof trackFamily.members));
  });
  document.querySelector<HTMLButtonElement>("#back-to-tracks")!.addEventListener("click", resetToTracks);

  bindSquadInput(gameElement, "#joystick", {
    lane: () => sim.snapshot().squad.lane,
    setLane: lane => sim.setSquadLane(lane, { requireActiveTrack: true }),
    setAim: value => sim.setSquadAim(value, { requireActiveTrack: true }),
    releaseAim: () => sim.releaseAim(),
  });

  sim.startLoop();
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
    };
  }
}
