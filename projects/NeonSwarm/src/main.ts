import { getLaneRunnerSceneName, getNeonShape, type NeonGeometricShapeDefinition } from "@just-the-games-please/neon-factory";
import { trackFamily, type TrackFamilyId, type TrackId } from "../CombatDefinition";
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
const defaultTrackSceneId = Object.values(trackFamily.families)[0].environment.sceneId;
const trackShapeIdsByFamily: Record<TrackFamilyId, readonly string[]> = {
  neonNebulae: ["hunter-eye", "bruiser-prism", "elite-star"],
  aurora: ["trick-vortex", "elite-wings", "tank-reactor"],
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

try {
  const sim = await NeonSwarmSimulation.create({
    mode: "game",
    canvas,
    stageElement: gameElement,
    cameraSettings,
    sound: window.gameAudio,
    sceneId: defaultTrackSceneId,
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
  const shapeMarkup = (shape: NeonGeometricShapeDefinition, index: number, count: number): string => {
    const scale = 22 - index * 2;
    const x = 45 + (index - (count - 1) / 2) * 21;
    const y = 18 + Math.sin(index) * 2;
    const points = shape.points.map(([px, py]) => `${(x + px * scale * .42).toFixed(1)},${(y + py * scale * .42).toFixed(1)}`).join(" ");
    const hole = shape.holes?.[0]?.map(([px, py]) => `${(x + px * scale * .24).toFixed(1)},${(y + py * scale * .24).toFixed(1)}`).join(" ");
    const colorClass = index % 3;
    return `<g class="track-glyph__shape track-glyph__shape--${colorClass}"><polygon points="${points}"></polygon>${hole ? `<polygon class="track-glyph__hole" points="${hole}"></polygon>` : ""}</g>`;
  };
  const trackGlyphMarkup = (familyId: TrackFamilyId, trackIndex: number): string => {
    const shapeIds = trackShapeIdsByFamily[familyId].slice(0, trackIndex + 1);
    const shapes = shapeIds.map(id => getNeonShape(id)).filter((shape): shape is NeonGeometricShapeDefinition => shape !== undefined);
    return `
      <svg class="track-glyph" viewBox="0 0 90 38" aria-hidden="true">
        <line x1="18" y1="33" x2="72" y2="33"></line>
        ${shapes.map((shape, index) => shapeMarkup(shape, index, shapes.length)).join("")}
      </svg>`;
  };
  const renderTrackFamilies = (): void => {
    trackList.innerHTML = Object.entries(trackFamily.families).map(([familyId, family]) => `
      <section class="track-family" aria-label="${family.label}">
        <div class="track-family__header">
          <div>
            <span class="track-family__scene">${getLaneRunnerSceneName(family.environment.sceneId)}</span>
            <h3>${family.label}</h3>
          </div>
        </div>
        <div class="track-family__row">
          ${family.trackIds.map((trackId, trackIndex) => {
            const track = trackFamily.members[trackId];
            return `
              <a class="track-card" href="${trackRoute(trackId)}" data-track="${trackId}">
                ${trackGlyphMarkup(familyId as TrackFamilyId, trackIndex)}
                <strong>${track.label}</strong>
                <b>${track.durationSeconds}s</b>
              </a>`;
          }).join("")}
        </div>
      </section>`).join("");
  };

  const resetToTracks = (): void => {
    sim.reset();
    gameElement.dataset.page = "tracks";
    gameElement.style.removeProperty("background-image");
    result.hidden = true;
    trackSelect.hidden = false;
    status.textContent = "Choose a track family, then pick a run.";
    runStatus.textContent = "";
  };

  const startTrack = (trackId: TrackId): void => {
    gameElement.dataset.page = "game";
    trackSelect.hidden = true;
    result.hidden = true;
    status.textContent = "Tap left or right to switch lanes.";
    sim.startTrack(trackFamily.members[trackId]);
  };

  const handleRoute = (): void => {
    const trackId = trackIdFromRoute();
    if (trackId) startTrack(trackId);
    else resetToTracks();
  };

  renderTrackFamilies();
  document.querySelector<HTMLButtonElement>("#back-to-tracks")!.addEventListener("click", navigateToTracks);
  window.addEventListener("hashchange", handleRoute);
  if (!location.hash) history.replaceState(null, "", "#tracks");
  handleRoute();

  bindSquadInput(gameElement, {
    lane: () => sim.snapshot().squad.lane,
    setLane: lane => sim.setSquadLane(lane, { requireActiveTrack: true }),
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
