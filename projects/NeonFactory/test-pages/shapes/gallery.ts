import { createTestPage, neonShapeCatalog, NeonTopDownSceneRenderer, type NeonTopDownShape } from "../../src/index";
import { exportShapeTunings, loadShapeTuningStorage, saveShapeTuningStorage } from "./tuning-storage";
const canvas = document.querySelector<HTMLCanvasElement>("#stage")!;
const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const labels = document.querySelector<HTMLElement>("#labels")!;
const links = document.querySelector<HTMLElement>("#shape-links")!;
const zoom=document.querySelector<HTMLInputElement>("#zoom")!,depth=document.querySelector<HTMLInputElement>("#depth")!,thickness=document.querySelector<HTMLInputElement>("#thickness")!;
const intensity=document.querySelector<HTMLInputElement>("#intensity")!,coverage=document.querySelector<HTMLInputElement>("#coverage")!,speed=document.querySelector<HTMLInputElement>("#speed")!,bleed=document.querySelector<HTMLInputElement>("#bleed")!;
const exportButton=document.querySelector<HTMLButtonElement>("#export")!;
const error = document.querySelector<HTMLElement>("#error")!;
const test = createTestPage("neon-factory-shape-gallery", {}, status);
labels.innerHTML = neonShapeCatalog.map(shape => `<span><b>${shape.family}</b> · ${shape.name}</span>`).join("<br>");
links.innerHTML = neonShapeCatalog.map(shape => `<a href="inspector.html?shape=${encodeURIComponent(shape.id)}" title="Inspect ${shape.name}"><span>${shape.name}</span></a>`).join("");
const storage=loadShapeTuningStorage();
zoom.value=String(storage.tunings.zoom*100);depth.value=String(storage.tunings.depth*100);thickness.value=String(storage.tunings.lineThickness*100);intensity.value=String(storage.tunings.energyIntensity*100);coverage.value=String(storage.tunings.energyCoverage*100);speed.value=String(storage.tunings.energySpeed*100);bleed.value=String(storage.tunings.energyBleed*100);
const saveTunings=()=>{storage.tunings={zoom:Number(zoom.value)/100,depth:Number(depth.value)/100,lineThickness:Number(thickness.value)/100,energyIntensity:Number(intensity.value)/100,energyCoverage:Number(coverage.value)/100,energySpeed:Number(speed.value)/100,energyBleed:Number(bleed.value)/100};saveShapeTuningStorage(storage)};
[zoom,depth,thickness,intensity,coverage,speed,bleed].forEach(control=>control.addEventListener("input",saveTunings));
exportButton.addEventListener("click",()=>exportShapeTunings(storage));
try {
  const renderer = await NeonTopDownSceneRenderer.create(canvas, 900, 1180);
  let frame = 0;
  const render = (now: number) => {
    const columns = 6, rows = Math.ceil(neonShapeCatalog.length / columns);
    const instances: NeonTopDownShape[] = neonShapeCatalog.map((shape, index) => {
      const column = index % columns, row = Math.floor(index / columns);
      const phase = now / 1000 + index * .31;
      const auto = Math.sin(phase * 1.7) * .2;
      return { shape:{...shape,depth:storage.tunings.depth}, x:75+column*150, y:65+row*130, size:storage.tunings.zoom*90,
        lineThickness:storage.tunings.lineThickness,energyIntensity:storage.tunings.energyIntensity,energyCoverage:storage.tunings.energyCoverage,energySpeed:storage.tunings.energySpeed,energyBleed:storage.tunings.energyBleed,
        rotationX: shape.rock === "pitch" ? auto : .18, rotationY: shape.rock === "yaw" ? auto : -.15,
        rotationZ: shape.rock === "roll" || shape.rock === "orbit" ? auto : 0 };
    });
    renderer.render({shapes:instances},now/1000); frame = requestAnimationFrame(render);
  };
  frame = requestAnimationFrame(render);
  addEventListener("pagehide", () => { cancelAnimationFrame(frame); renderer.destroy(); }, { once: true });
  test.ready(); test.assert("WebGPU shape renderer initialized", true);
  test.assert("Complete visual catalog is available", neonShapeCatalog.length >= 50, `${neonShapeCatalog.length} shapes`);
} catch (cause) { const message = cause instanceof Error ? cause.message : String(cause); error.hidden=false; error.textContent=message; test.assert("WebGPU shape renderer initialized", false, message); }
