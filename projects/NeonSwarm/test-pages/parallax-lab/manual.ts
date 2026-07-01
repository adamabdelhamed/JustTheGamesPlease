import {
  getLaneRunnerSceneName,
  laneRunnerSceneIds,
  type LaneRunnerSceneId,
} from "@just-the-games-please/neon-factory";
import {
  defaultLaneRunnerSceneParallaxInterpretation,
  laneRunnerSceneBackgroundProfile,
  type LaneRunnerSceneBackgroundProfile,
  type LaneRunnerSceneParallaxInterpretation,
} from "../../src/sceneEnvironment";
import { NeonSwarmSimulation } from "../../src/simulation/NeonSwarmSimulation";
import {
  defaultHelicopterCameraSettings,
  type HelicopterCameraSettings,
} from "../../src/viewport";

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
const error = document.querySelector<HTMLElement>("#error")!;
const sceneSelect = document.querySelector<HTMLSelectElement>("#scene-select")!;
const layerControls = document.querySelector<HTMLElement>("#layer-controls")!;
const panStrengthInput = document.querySelector<HTMLInputElement>("#pan-strength")!;
const zoomStrengthInput = document.querySelector<HTMLInputElement>("#zoom-strength")!;
const cameraReadout = document.querySelector<HTMLElement>("#camera-readout")!;
const exportText = document.querySelector<HTMLTextAreaElement>("#parallax-export")!;
const specReadout = document.querySelector<HTMLElement>("#spec-readout")!;

const cameraSettings: HelicopterCameraSettings = { ...defaultHelicopterCameraSettings };
const cameraInputs = {
  height: document.querySelector<HTMLInputElement>("#camera-height")!,
  lookAngleDegrees: document.querySelector<HTMLInputElement>("#camera-look")!,
  forward: document.querySelector<HTMLInputElement>("#camera-forward")!,
};

let profile: LaneRunnerSceneBackgroundProfile = laneRunnerSceneBackgroundProfile("neonHall");
let interpretation: LaneRunnerSceneParallaxInterpretation = { ...defaultLaneRunnerSceneParallaxInterpretation };
let sim: NeonSwarmSimulation;

interface ParallaxLabExport {
  format: "neon-swarm-parallax-lab-v1";
  sceneId: LaneRunnerSceneId;
  sceneName: string;
  layers: Array<{
    id: string;
    label: string;
    suffix?: string;
    closeness: number;
    zoomPercent: number;
    laneShiftPercent: number;
    yPercent: number;
  }>;
  interpretation: LaneRunnerSceneParallaxInterpretation;
  camera: {
    height: number;
    lookAngleDegrees: number;
    forward: number;
  };
}

for (const sceneId of laneRunnerSceneIds) {
  sceneSelect.add(new Option(getLaneRunnerSceneName(sceneId), sceneId));
}

function selectedSceneId(): LaneRunnerSceneId {
  return sceneSelect.value as LaneRunnerSceneId;
}

function loadScene(sceneId: LaneRunnerSceneId): void {
  profile = laneRunnerSceneBackgroundProfile(sceneId);
  interpretation = { ...profile.parallax };
  sceneSelect.value = sceneId;
  syncControlsFromState();
  applyProfile();
}

function syncControlsFromState(): void {
  panStrengthInput.value = String(interpretation.panStrength);
  zoomStrengthInput.value = String(interpretation.zoomStrength);
  layerControls.replaceChildren(...profile.layers.map((layer, index) => {
    const card = document.createElement("section");
    card.className = "layer-card";
    const title = document.createElement("h3");
    title.textContent = layer.label;
    const label = document.createElement("label");
    label.textContent = "Closeness";
    const input = document.createElement("input");
    input.type = "range";
    input.min = "0.05";
    input.max = "6";
    input.step = "0.05";
    input.value = String(layer.closeness);
    const value = document.createElement("span");
    value.className = "layer-value";
    value.textContent = layer.closeness.toFixed(2);
    input.addEventListener("input", () => {
      const nextCloseness = finiteNumber(input.value, layer.closeness);
      profile.layers[index].closeness = nextCloseness;
      value.textContent = nextCloseness.toFixed(2);
      applyProfile();
    });
    label.append(input, value);
    card.append(title, label);
    return card;
  }));
  syncCameraInputs();
  syncExport();
}

function syncCameraInputs(): void {
  cameraInputs.height.value = String(cameraSettings.height);
  cameraInputs.lookAngleDegrees.value = String(cameraSettings.lookAngleDegrees);
  cameraInputs.forward.value = String(defaultHelicopterCameraSettings.followDistance - cameraSettings.followDistance);
  syncCameraReadout();
}

function syncCameraFromInputs(): void {
  cameraSettings.height = finiteNumber(cameraInputs.height.value, defaultHelicopterCameraSettings.height);
  cameraSettings.lookAngleDegrees = finiteNumber(cameraInputs.lookAngleDegrees.value, defaultHelicopterCameraSettings.lookAngleDegrees);
  cameraSettings.followDistance = defaultHelicopterCameraSettings.followDistance - finiteNumber(cameraInputs.forward.value, 0);
  sim.setCameraSettings(cameraSettings);
  syncCameraReadout();
  syncExport();
}

function syncCameraReadout(): void {
  const forward = defaultHelicopterCameraSettings.followDistance - cameraSettings.followDistance;
  cameraReadout.textContent = `H ${cameraSettings.height.toFixed(0)}  L ${cameraSettings.lookAngleDegrees.toFixed(0)}  F ${forward.toFixed(0)}`;
}

function applyProfile(): void {
  if (!sim) return;
  sim.setSceneBackgroundProfile(profile);
  sim.setSceneParallaxInterpretation(interpretation);
  syncSpec();
  syncExport();
}

function syncSpec(): void {
  specReadout.innerHTML = [
    ["Scene", profile.label],
    ["Layers", String(profile.layers.length)],
    ["Pan", interpretation.panStrength.toFixed(2)],
    ["Zoom", interpretation.zoomStrength.toFixed(2)],
  ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
}

function syncInterpretationFromInputs(): void {
  interpretation = {
    panStrength: finiteNumber(panStrengthInput.value, 1),
    zoomStrength: finiteNumber(zoomStrengthInput.value, 1),
  };
  applyProfile();
}

function resetCameraToSimulationDefaults(): void {
  Object.assign(cameraSettings, defaultHelicopterCameraSettings);
  syncCameraInputs();
  sim.setCameraSettings(cameraSettings);
  syncExport();
}

function seedSceneActors(): void {
  sim.reset({ silent: true });
  sim.addSquadMembers(4);
  sim.spawnEnemyGrid({
    enemyId: "basicOrb",
    rows: 6,
    columns: 5,
    rowSpacing: 42,
    columnSpacing: 18,
    startY: canvas.height * .54,
    speedMultiplier: 0,
    playSound: false,
  });
}

function exportPayload(): ParallaxLabExport {
  return {
    format: "neon-swarm-parallax-lab-v1",
    sceneId: profile.sceneId,
    sceneName: profile.label,
    layers: profile.layers.map(layer => ({
      id: layer.id,
      label: layer.label,
      ...(layer.suffix ? { suffix: layer.suffix } : {}),
      closeness: round(layer.closeness),
      zoomPercent: round(layer.zoomPercent),
      laneShiftPercent: round(layer.laneShiftPercent),
      yPercent: round(layer.yPercent),
    })),
    interpretation: {
      panStrength: round(interpretation.panStrength),
      zoomStrength: round(interpretation.zoomStrength),
    },
    camera: {
      height: round(cameraSettings.height),
      lookAngleDegrees: round(cameraSettings.lookAngleDegrees),
      forward: round(defaultHelicopterCameraSettings.followDistance - cameraSettings.followDistance),
    },
  };
}

function syncExport(): void {
  exportText.value = JSON.stringify(exportPayload(), null, 2);
}

async function copyExport(): Promise<void> {
  syncExport();
  exportText.select();
  try {
    await navigator.clipboard.writeText(exportText.value);
  } catch {
    document.execCommand("copy");
  }
}

function finiteNumber(value: unknown, fallback: number): number {
  const numberValue = Number(value);
  return Number.isFinite(numberValue) ? numberValue : fallback;
}

function round(value: number): number {
  return Number(value.toFixed(4));
}

try {
  sim = await NeonSwarmSimulation.create({
    mode: "lab",
    canvas,
    stageElement: gameElement,
    cameraSettings,
    sceneId: profile.sceneId,
    sceneBackgroundProfile: profile,
    sceneParallaxInterpretation: interpretation,
    playerInvincible: true,
  });
  seedSceneActors();
  syncControlsFromState();
  applyProfile();

  const render = (now: number): void => {
    sim.tick(now);
    sim.render(now);
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  sceneSelect.addEventListener("change", () => {
    loadScene(selectedSceneId());
    seedSceneActors();
  });
  panStrengthInput.addEventListener("input", syncInterpretationFromInputs);
  zoomStrengthInput.addEventListener("input", syncInterpretationFromInputs);
  Object.values(cameraInputs).forEach(input => input.addEventListener("input", syncCameraFromInputs));
  document.querySelector<HTMLButtonElement>("#lane-left")!.addEventListener("click", () => sim.setSquadLane(0));
  document.querySelector<HTMLButtonElement>("#lane-right")!.addEventListener("click", () => sim.setSquadLane(1));
  document.querySelector<HTMLButtonElement>("#reset-camera")!.addEventListener("click", resetCameraToSimulationDefaults);
  document.querySelector<HTMLButtonElement>("#reset-scene")!.addEventListener("click", () => loadScene(selectedSceneId()));
  document.querySelector<HTMLButtonElement>("#copy-export")!.addEventListener("click", () => void copyExport());
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
