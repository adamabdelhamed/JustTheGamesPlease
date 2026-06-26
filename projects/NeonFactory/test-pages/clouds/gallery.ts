import { createTestPage, NeonCloudBurstRenderer, type NeonCloudBurstSettings } from "../../src/index";
import { cloudPresets } from "./presets";

const q = <T extends Element>(selector: string) => document.querySelector<T>(selector)!;
const canvas = q<HTMLCanvasElement>("#stage"), status = q<HTMLOutputElement>("#test-status"), error = q<HTMLElement>("#error");
const preset = q<HTMLSelectElement>("#preset"), scale = q<HTMLInputElement>("#scale"), time = q<HTMLInputElement>("#time"), readout = q<HTMLElement>("#readout");
preset.innerHTML = cloudPresets.map((item, index) => `<option value="${index}">${item.name}</option>`).join("");
q<HTMLButtonElement>("#copy").addEventListener("click", () => navigator.clipboard?.writeText(JSON.stringify(cloudPresets, null, 2)));
const test = createTestPage("neon-factory-cloud-suite", {}, status);

try {
  const renderer = await NeonCloudBurstRenderer.create(canvas);
  let frame = 0;
  const render = (now: number) => {
    const selected = Number(preset.value);
    const previewAge = Number(time.value) / 100;
    const sizeScale = Number(scale.value) / 100;
    const clouds: NeonCloudBurstSettings[] = cloudPresets.map((item, index) => {
      const column = index % 3, row = Math.floor(index / 3);
      const x = (column - 1) * .72, y = (row ? -.45 : .45);
      return { ...item.settings, x, y, size: (item.settings.size ?? .22) * sizeScale * (index === selected ? 1.18 : 1), age: (item.settings.dissipationTime ?? .7) * previewAge, rotation: Math.sin(now / 1200 + index) * .35 };
    });
    renderer.render(clouds, now / 1000);
    readout.textContent = `${cloudPresets[selected].name} - ${JSON.stringify(cloudPresets[selected].settings)}`;
    frame = requestAnimationFrame(render);
  };
  frame = requestAnimationFrame(render);
  addEventListener("pagehide", () => { cancelAnimationFrame(frame); renderer.destroy(); }, { once: true });
  test.ready();
  test.assert("WebGPU cloud renderer initialized", true);
  test.assert("Cloud preset catalog is available", cloudPresets.length >= 6, `${cloudPresets.length} presets`);
} catch (cause) {
  const message = cause instanceof Error ? cause.message : String(cause);
  error.hidden = false; error.textContent = message;
  test.assert("WebGPU cloud renderer initialized", false, message);
}
