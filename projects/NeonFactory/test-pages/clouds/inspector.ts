import { createTestPage, deriveNeonCloudCoreColor, NeonCloudBurstRenderer, type NeonCloudBurstSettings } from "../../src/index";

interface CloudExplosionEnvelope {
  entrySeconds: number;
  entryPunch: number;
  sustainSeconds: number;
  sustainLevel: number;
  fadeSeconds: number;
  sparkIntensity: number;
}

interface CloudExplosionSettings extends NeonCloudBurstSettings {
  envelope: CloudExplosionEnvelope;
}

const q = <T extends Element>(selector: string) => document.querySelector<T>(selector)!;
const canvas = q<HTMLCanvasElement>("#stage"), status = q<HTMLOutputElement>("#test-status"), error = q<HTMLElement>("#error");
const size = q<HTMLInputElement>("#size"), detail = q<HTMLInputElement>("#detail"), turbulence = q<HTMLInputElement>("#turbulence");
const color = q<HTMLInputElement>("#color"), glow = q<HTMLInputElement>("#glow"), coreIntensity = q<HTMLInputElement>("#core-intensity"), rimIntensity = q<HTMLInputElement>("#rim-intensity"), opacity = q<HTMLInputElement>("#opacity");
const entryTime = q<HTMLInputElement>("#entry-time"), entryPunch = q<HTMLInputElement>("#entry-punch"), sustainTime = q<HTMLInputElement>("#sustain-time"), sustainLevel = q<HTMLInputElement>("#sustain-level"), fadeTime = q<HTMLInputElement>("#fade-time"), sparkIntensity = q<HTMLInputElement>("#spark-intensity");
const driftX = q<HTMLInputElement>("#drift-x"), driftY = q<HTMLInputElement>("#drift-y"), json = q<HTMLTextAreaElement>("#json"), readout = q<HTMLElement>("#readout");
const controls = [size, detail, turbulence, color, glow, coreIntensity, rimIntensity, opacity, entryTime, entryPunch, sustainTime, sustainLevel, fadeTime, sparkIntensity, driftX, driftY];
let position = { x: 0, y: 0 };
let seed = Math.random() * 1000;
let started = performance.now();

const envelope = (): CloudExplosionEnvelope => ({
  entrySeconds: Number(entryTime.value) / 100,
  entryPunch: Number(entryPunch.value) / 100,
  sustainSeconds: Number(sustainTime.value) / 100,
  sustainLevel: Number(sustainLevel.value) / 100,
  fadeSeconds: Number(fadeTime.value) / 100,
  sparkIntensity: Number(sparkIntensity.value) / 100,
});

const exportedSettings = (): CloudExplosionSettings => {
  const env = envelope();
  return {
    color: color.value,
    coreColor: deriveNeonCloudCoreColor(color.value),
    x: position.x,
    y: position.y,
    size: Number(size.value) / 700,
    detail: Number(detail.value),
    turbulence: Number(turbulence.value) / 100,
    glow: Number(glow.value) / 100,
    coreIntensity: Number(coreIntensity.value) / 100,
    rimIntensity: Number(rimIntensity.value) / 100,
    opacity: Number(opacity.value) / 100,
    dissipationTime: env.entrySeconds + env.sustainSeconds + env.fadeSeconds,
    dissipationAction: "sparkFade",
    driftX: Number(driftX.value) / 4500,
    driftY: Number(driftY.value) / 4500,
    seed,
    envelope: env,
  };
};

const runtimeSettings = (elapsedSeconds: number): NeonCloudBurstSettings => {
  const settings = exportedSettings();
  const env = settings.envelope;
  const total = settings.dissipationTime ?? 1;
  const entryT = Math.min(1, elapsedSeconds / Math.max(.001, env.entrySeconds));
  const fadeStart = env.entrySeconds + env.sustainSeconds;
  const fadeT = Math.max(0, Math.min(1, (elapsedSeconds - fadeStart) / Math.max(.001, env.fadeSeconds)));
  const sustain = elapsedSeconds >= env.entrySeconds && elapsedSeconds < fadeStart ? env.sustainLevel : 1;
  const entryFlash = 1 + Math.sin(entryT * Math.PI) * env.entryPunch;
  const sparkRamp = .45 + fadeT * env.sparkIntensity;
  return {
    ...settings,
    age: Math.min(elapsedSeconds, total),
    size: (settings.size ?? .25) * (.48 + entryT * .52 + fadeT * 1.15),
    glow: (settings.glow ?? 4) * entryFlash * sustain * sparkRamp,
    coreIntensity: (settings.coreIntensity ?? 1.4) * (1 + env.entryPunch * (1 - entryT) * .55),
    rimIntensity: (settings.rimIntensity ?? .85) * (1 + fadeT * env.sparkIntensity * .35),
    opacity: (settings.opacity ?? 1) * (elapsedSeconds < fadeStart ? 1 : 1 - fadeT * .88),
  };
};

const syncJson = () => {
  const value = exportedSettings();
  json.value = JSON.stringify(value, null, 2);
  readout.textContent = `spark fade - entry ${value.envelope.entrySeconds.toFixed(2)}s, sustain ${value.envelope.sustainSeconds.toFixed(2)}s, fade ${value.envelope.fadeSeconds.toFixed(2)}s`;
};
const run = () => { started = performance.now(); seed = Math.random() * 1000; syncJson(); };
controls.forEach(control => control.addEventListener("input", syncJson));
q<HTMLButtonElement>("#run").addEventListener("click", run);
q<HTMLButtonElement>("#copy").addEventListener("click", () => navigator.clipboard?.writeText(json.value));
canvas.addEventListener("pointerdown", event => {
  const rect = canvas.getBoundingClientRect();
  const aspect = canvas.width / Math.max(1, canvas.height);
  position = { x: ((event.clientX - rect.left) / rect.width - .5) * aspect * 2, y: (.5 - (event.clientY - rect.top) / rect.height) * 2 };
  run();
});
syncJson();
const test = createTestPage("neon-factory-cloud-inspector", { settings: exportedSettings, run }, status);

try {
  const renderer = await NeonCloudBurstRenderer.create(canvas);
  let frame = 0;
  const render = (now: number) => {
    const settings = exportedSettings();
    const elapsed = ((now - started) / 1000) % Math.max(.001, settings.dissipationTime ?? 1);
    renderer.render([runtimeSettings(elapsed)], now / 1000);
    frame = requestAnimationFrame(render);
  };
  frame = requestAnimationFrame(render);
  addEventListener("pagehide", () => { cancelAnimationFrame(frame); renderer.destroy(); }, { once: true });
  test.ready();
  test.assert("WebGPU cloud renderer initialized", true);
  test.assert("Spark fade envelope JSON is exposed", json.value.includes("\"envelope\"") && json.value.includes("\"sparkFade\""));
} catch (cause) {
  const message = cause instanceof Error ? cause.message : String(cause);
  error.hidden = false; error.textContent = message;
  test.assert("WebGPU cloud renderer initialized", false, message);
}
