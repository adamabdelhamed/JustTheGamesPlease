import {
  createTestPage,
  getNeonShape,
  neonLightningPrimitives,
  neonPalette,
  neonShapeCatalog,
  NeonTopDownSceneRenderer,
  resolveNeonLightningChain,
  setNeonShapeEnergyInternalTuning,
  type NeonLightningPoint,
  type NeonLightningSegment,
  type NeonTopDownShape,
} from "../../src/index";

const q = <T extends Element>(selector: string): T => document.querySelector<T>(selector)!;
const canvas = q<HTMLCanvasElement>("#stage");
const status = q<HTMLOutputElement>("#test-status");
const error = q<HTMLElement>("#error");
const readout = q<HTMLOutputElement>("#readout");
const shapeSelect = q<HTMLSelectElement>("#shape");
const exportOutput = q<HTMLTextAreaElement>("#export-output");

shapeSelect.innerHTML = neonShapeCatalog.map((shape, index) => `<option value="${index}">${shape.family.toUpperCase()} · ${shape.name}</option>`).join("");
const boltShapeIndex = neonShapeCatalog.findIndex(shape => shape.id === "hunter-bolt");
if (boltShapeIndex >= 0) shapeSelect.value = String(boltShapeIndex);

const numberValue = (id: string, scale = 1): number => Number(q<HTMLInputElement>(`#${id}`).value) / scale;
const intValue = (id: string): number => Math.max(1, Math.round(Number(q<HTMLInputElement>(`#${id}`).value)));
const noEffectId = (id: string): string => `${id}-no-effect`;

document.querySelectorAll<HTMLLabelElement>("aside label").forEach(label => {
  const slider = label.querySelector<HTMLInputElement>('input[type="range"]');
  if (!slider) return;
  const marker = document.createElement("span");
  marker.className = "no-effect";
  marker.innerHTML = `<input id="${noEffectId(slider.id)}" type="checkbox" aria-label="No visible effect for ${slider.id}"> none`;
  label.append(marker);
});

const defaultTargets = (): NeonLightningPoint[] => [
  { id: "A", x: 465, y: 235, radius: 13 },
  { id: "B", x: 535, y: 275, radius: 13 },
  { id: "C", x: 424, y: 318, radius: 13 },
  { id: "D", x: 573, y: 358, radius: 13 },
  { id: "E", x: 490, y: 420, radius: 13 },
];

let targets = defaultTargets();
let strikeStartedAt = performance.now();
let activeSegments: NeonLightningSegment[] = [];
let dragging: NeonLightningPoint | null = null;
let lastHitAt = new Map<string, number>();

const origin: NeonLightningPoint = { id: "origin", x: 450, y: 610, radius: 16 };
const enemyShape = getNeonShape("hunter-kite") ?? neonShapeCatalog[0];
const playerShape = getNeonShape("player-dart") ?? neonShapeCatalog[0];

function energyTuning(): void {
  setNeonShapeEnergyInternalTuning(energyInternalTuningSnapshot());
}

function energyInternalTuningSnapshot() {
  return {
    branchCycleRate: numberValue("branch-cycle-rate", 100),
    branchChanceScale: numberValue("branch-chance-scale", 100),
    activeDurationMin: numberValue("active-duration-min", 100),
    activeDurationMax: numberValue("active-duration-max", 100),
    hazeDurationMin: numberValue("haze-duration-min", 100),
    hazeDurationMax: numberValue("haze-duration-max", 100),
    branchLengthMin: numberValue("branch-length-min", 100),
    branchLengthMax: numberValue("branch-length-max", 100),
    branchSegmentsMin: intValue("branch-segments-min"),
    branchSegmentsMax: intValue("branch-segments-max"),
    branchTurnMinDegrees: numberValue("branch-turn-min-degrees"),
    branchTurnMaxDegrees: numberValue("branch-turn-max-degrees"),
    branchNormalJitterDegrees: numberValue("branch-normal-jitter-degrees"),
    branchWidthScale: numberValue("branch-width-scale", 100),
    hazeWidthScale: numberValue("haze-width-scale", 100),
    hazeOpacity: numberValue("haze-opacity", 100),
    hazeDrift: numberValue("haze-drift", 100),
  };
}

function lightningTuning() {
  return {
    chainRange: numberValue("chain-range"),
    maxJumps: intValue("max-jumps"),
    branchFanout: intValue("branch-fanout"),
    maxDepth: intValue("max-depth"),
    branchDecay: numberValue("branch-decay", 100),
    jaggedness: numberValue("jaggedness"),
    segments: intValue("segments"),
    movement: numberValue("movement", 100),
    boltWidth: numberValue("bolt-width", 10),
    haloWidth: numberValue("halo-width", 10),
    intensity: numberValue("lightning-intensity", 100),
    glow: numberValue("lightning-glow", 100),
    durationMs: numberValue("duration-ms"),
    branchSparks: numberValue("branch-sparks", 100),
    sparkVelocity: numberValue("spark-velocity"),
    sparkVelocitySpread: numberValue("spark-velocity-spread", 100),
    sparkEasePower: numberValue("spark-ease-power", 100),
    sparkDimPower: numberValue("spark-dim-power", 100),
    sparkLength: numberValue("spark-length"),
    sparkWidth: numberValue("spark-width", 10),
    impactSparks: intValue("impact-sparks"),
    impactSparkVelocity: numberValue("impact-spark-velocity"),
    impactSparkRadius: numberValue("impact-spark-radius"),
    color: neonPalette.cyan,
    secondaryColor: "#ffffff",
  };
}

function syncSparkControlAvailability(): void {
  const enabled = numberValue("branch-sparks", 100) > 0;
  ["spark-velocity", "spark-velocity-spread", "spark-ease-power", "spark-dim-power", "spark-length", "spark-width"]
    .forEach(id => {
      q<HTMLInputElement>(`#${id}`).disabled = !enabled;
    });
}

function shapeEnergyTuning() {
  return {
    energyIntensity: numberValue("energy-intensity", 100),
    energyCoverage: numberValue("energy-coverage", 100),
    energySpeed: numberValue("energy-speed", 100),
    energyBleed: numberValue("energy-bleed", 100),
  };
}

function checkedNoEffectIds(): string[] {
  return [...document.querySelectorAll<HTMLInputElement>(".no-effect input:checked")]
    .map(input => input.id.replace(/-no-effect$/, ""));
}

function exportPayload(): string {
  return JSON.stringify({
    page: "neon-factory-energy-lightning",
    shape: neonShapeCatalog[Number(shapeSelect.value)]?.id,
    shapeEnergy: shapeEnergyTuning(),
    energyInternal: energyInternalTuningSnapshot(),
    lightning: lightningTuning(),
    targets: targets.map(target => ({
      id: target.id,
      x: Math.round(target.x),
      y: Math.round(target.y),
      radius: target.radius,
    })),
    origin,
    activeSegmentCount: activeSegments.length,
    markedNoVisibleEffect: checkedNoEffectIds(),
  }, null, 2);
}

function refreshExport(): void {
  syncSparkControlAvailability();
  exportOutput.value = exportPayload();
}

function strike(): void {
  activeSegments = resolveNeonLightningChain(origin, targets, lightningTuning());
  strikeStartedAt = performance.now();
  lastHitAt = new Map(activeSegments.map(segment => [String(segment.to.id), strikeStartedAt]));
}

q<HTMLButtonElement>("#strike").addEventListener("click", strike);
q<HTMLButtonElement>("#add-target").addEventListener("click", () => {
  targets.push({ id: `T${targets.length + 1}`, x: 390 + Math.random() * 220, y: 210 + Math.random() * 260, radius: 13 });
  strike();
});
q<HTMLButtonElement>("#reset-targets").addEventListener("click", () => {
  targets = defaultTargets();
  strike();
});
q<HTMLButtonElement>("#refresh-export").addEventListener("click", refreshExport);
q<HTMLButtonElement>("#copy-tunings").addEventListener("click", async () => {
  refreshExport();
  exportOutput.select();
  await navigator.clipboard?.writeText(exportOutput.value).catch(() => undefined);
});
document.querySelectorAll<HTMLInputElement>("aside input").forEach(input => input.addEventListener("input", refreshExport));
shapeSelect.addEventListener("input", refreshExport);

canvas.addEventListener("pointerdown", event => {
  const rect = canvas.getBoundingClientRect();
  const x = (event.clientX - rect.left) / rect.width * 900;
  const y = (event.clientY - rect.top) / rect.height * 700;
  dragging = [...targets].reverse().find(target => Math.hypot(target.x - x, target.y - y) <= 28) ?? null;
  if (dragging) canvas.setPointerCapture(event.pointerId);
});
canvas.addEventListener("pointermove", event => {
  if (!dragging) return;
  const rect = canvas.getBoundingClientRect();
  dragging.x = Math.max(30, Math.min(870, (event.clientX - rect.left) / rect.width * 900));
  dragging.y = Math.max(60, Math.min(650, (event.clientY - rect.top) / rect.height * 700));
  strike();
});
canvas.addEventListener("pointerup", () => {
  dragging = null;
});

const test = createTestPage("neon-factory-energy-lightning", {
  strike,
  targetCount: () => targets.length,
  segmentCount: () => activeSegments.length,
}, status);

try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, 900, 700);
  strike();
  let frame = 0;

  const render = (now: number): void => {
    energyTuning();
    const lightning = lightningTuning();
    if (now - strikeStartedAt > lightning.durationMs + 520) strike();

    const shape = neonShapeCatalog[Number(shapeSelect.value)];
    const shapeEnergy = shapeEnergyTuning();
    const shapes: NeonTopDownShape[] = [
      {
        shape,
        x: 170,
        y: 225,
        size: 170,
        color: neonPalette.violet,
        rotationX: .7,
        rotationY: -.4 + Math.sin(now / 1300) * .18,
        rotationZ: now / 1800,
        lineThickness: .9,
        glow: 1.2,
        ...shapeEnergy,
        label: { text: "shape energy", position: "below", fontSize: 13 },
      },
      {
        shape: playerShape,
        x: origin.x,
        y: origin.y,
        size: 34,
        color: neonPalette.cyan,
        rotationZ: Math.PI,
        lineThickness: .7,
        glow: 1.3,
        energyIntensity: 1.6,
        energyCoverage: .65,
        energySpeed: 2.2,
        energyBleed: .7,
      },
      ...targets.map((target, index) => {
        const hitAge = now - (lastHitAt.get(String(target.id)) ?? -Infinity);
        const hitSurge = hitAge >= 0 && hitAge < 420 ? 1 - hitAge / 420 : 0;
        return {
          shape: enemyShape,
          x: target.x,
          y: target.y,
          size: 28 + hitSurge * 5,
          color: hitSurge > 0 ? neonPalette.cyan : index % 2 ? neonPalette.green : neonPalette.gold,
          rotationZ: now / 1600 + index,
          lineThickness: .65 + hitSurge * .35,
          glow: 1 + hitSurge * 1.8,
          energyIntensity: .95 + hitSurge * 2.6,
          energyCoverage: .3 + hitSurge * .48,
          energySpeed: 1.1 + hitSurge * 3.2,
          energyBleed: .35 + hitSurge * .7,
          label: { text: String(target.id), position: "above" as const, fontSize: 12, offset: 4 },
        };
      }),
    ];
    const age = now - strikeStartedAt;
    const primitives = [
      ...neonLightningPrimitives(activeSegments, age, lightning),
    ];
    renderer.render({ primitives, shapes }, now / 1000);
    readout.textContent = `${activeSegments.length} segment(s) · ${targets.length} target(s) · drag targets on the stage · strike age ${Math.round(age)}ms`;
    if (Math.floor(now / 500) !== Math.floor((now - 16) / 500)) refreshExport();
    frame = requestAnimationFrame(render);
  };

  frame = requestAnimationFrame(render);
  refreshExport();
  addEventListener("pagehide", () => {
    cancelAnimationFrame(frame);
    renderer.destroy();
  }, { once: true });
  test.ready();
  test.assert("WebGPU energy lightning renderer initialized", true);
  test.assert("Lightning chain resolver produced a segment", activeSegments.length > 0);
} catch (cause) {
  const message = cause instanceof Error ? cause.message : String(cause);
  error.hidden = false;
  error.textContent = message;
  test.assert("WebGPU energy lightning renderer initialized", false, message);
}
