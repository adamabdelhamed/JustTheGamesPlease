import {
  getLaneRunnerSceneName,
  isLaneRunnerSceneId,
  laneRunnerSceneIds,
  NeonShapeActor,
  neonPalette,
  NeonTopDownSceneRenderer,
  type LaneRunnerSceneId,
  type NeonTopDownShape,
} from "@just-the-games-please/neon-factory";
import {
  gunFamily,
  multiplierFamily,
  orbFamily,
  shieldFamily,
  swordFamily,
  trackFamily,
  type TrackMember,
} from "../../CombatDefinition";
import { shieldPickupVisual, swordPickupVisual } from "../../src/familyVisuals";
import { billboardOrientation, enemyOrientation, helicopterViewportFor, playerOrientation } from "../../src/renderOrientation";
import { actorInTopDownScene, swarmShapes } from "../../src/shapeVisuals";
import { defaultHelicopterCameraSettings } from "../../src/viewport";

type PaletteFamily = "System" | "Enemies" | "Guns" | "Shields" | "Swords" | "Items";
type PaletteItem = { id: string; label: string; symbol: string; family: PaletteFamily };
type CellValue = PaletteItem & { speed: number };
type Selection = { row: number; side: 0 | 1; column: number };

const developer = window.JustTheGamesPlease?.urlOptions?.isEnabled("dev") ?? false;
document.querySelector<HTMLElement>("#editor")!.hidden = !developer;
document.querySelector<HTMLElement>("#dev-required")!.hidden = developer;

const laneWidth = 5;
const defaultRowCount = 25;
const empty: PaletteItem = { id: "empty", label: "Empty", symbol: ".", family: "System" };
const playerStart: PaletteItem = { id: "player.start", label: "Player Start", symbol: "P", family: "System" };
const paletteItems: PaletteItem[] = [
  empty,
  playerStart,
  ...Object.entries(orbFamily.members).map(([id, enemy], index) => ({
    id: `enemy.${id === "basicOrb" ? "basic" : id}`,
    label: enemy.label,
    symbol: "EABCDEFGHIJKLMNOPQRSTUVWXYZ"[index],
    family: "Enemies" as const,
  })),
  ...Object.entries(gunFamily.members).map(([id, gun], index) => ({
    id: `pickup.weapon.gun.${id}`,
    label: gun.label,
    symbol: "GHIJKLMNOQRSTUVWXYZ"[index],
    family: "Guns" as const,
  })),
  ...Object.entries(shieldFamily.members).map(([id, shield], index) => ({
    id: `pickup.weapon.shield.${id}`,
    label: shield.label,
    symbol: "SHX"[index],
    family: "Shields" as const,
  })),
  ...Object.entries(swordFamily.members).map(([id, sword], index) => ({
    id: `pickup.weapon.sword.${id}`,
    label: sword.label,
    symbol: "abc"[index],
    family: "Swords" as const,
  })),
  { id: "pickup.unitMultiplier.2x", label: "2x Squad", symbol: "2", family: "Items" },
];
const paletteById = new Map(paletteItems.map(item => [item.id, item]));
const paletteFamilies: PaletteFamily[] = ["System", "Enemies", "Guns", "Shields", "Swords", "Items"];

const blankCell = (): CellValue => ({ ...empty, speed: 1 });
const blankRow = (): CellValue[][] =>
  Array.from({ length: 2 }, () => Array.from({ length: laneWidth }, blankCell));

let cells: CellValue[][][] = Array.from({ length: defaultRowCount }, blankRow);
let selected: Selection | null = { row: cells.length - 1, side: 0, column: 0 };
let selectedItem = empty;
let toolRevision = 0;
let selectionToolRevision = toolRevision;

const grid = document.querySelector<HTMLElement>("#track-grid")!;
const gridPanel = document.querySelector<HTMLElement>(".grid-panel")!;
const palette = document.querySelector<HTMLElement>("#palette")!;
const speedInput = document.querySelector<HTMLInputElement>("#entity-speed")!;
const selectionReadout = document.querySelector<HTMLElement>("#selection")!;
const trackSource = document.querySelector<HTMLSelectElement>("#track-source")!;
const sceneSelect = document.querySelector<HTMLSelectElement>("#scene-select")!;
const gridContent = document.querySelector<HTMLElement>("#grid-content")!;
const laneHeadings = document.querySelector<HTMLElement>(".lane-headings")!;
const nearLabel = document.querySelector<HTMLElement>(".near-label")!;
const gridCanvas = document.querySelector<HTMLCanvasElement>("#grid-canvas")!;
const gridRenderError = document.querySelector<HTMLElement>("#grid-render-error")!;

const input = <T extends HTMLInputElement | HTMLTextAreaElement>(selector: string): T =>
  document.querySelector<T>(selector)!;

const cellAt = (selection: Selection): HTMLButtonElement | null =>
  grid.querySelector(`[data-row="${selection.row}"][data-side="${selection.side}"][data-column="${selection.column}"]`);

function rowCount(): number {
  return cells.length;
}

function normalizeSelection(): void {
  if (selected && selected.row >= rowCount()) selected.row = rowCount() - 1;
  if (selected && selected.row < 0) selected = rowCount() > 0 ? { row: 0, side: 0, column: 0 } : null;
}

function updateSelection(): void {
  normalizeSelection();
  grid.querySelectorAll(".cell.selected").forEach(cell => cell.classList.remove("selected"));
  grid.querySelectorAll(".track-row.selected-row").forEach(row => row.classList.remove("selected-row"));
  if (!selected) {
    selectionReadout.textContent = "Selected: none";
    return;
  }
  cellAt(selected)?.classList.add("selected");
  grid.querySelector(`[data-track-row="${selected.row}"]`)?.classList.add("selected-row");
  const distance = rowCount() - 1 - selected.row;
  selectionReadout.textContent = `Selected: row ${distance + 1} from player, ${selected.side === 0 ? "left" : "right"} lane, column ${selected.column + 1}`;
}

function renderCell(selection: Selection): void {
  const value = cells[selection.row][selection.side][selection.column];
  const button = cellAt(selection);
  if (!button) return;
  button.textContent = value.symbol;
  button.dataset.id = value.id;
  button.title = `${value.label}${value.speed === 1 ? "" : ` - ${value.speed}x speed`}`;
}

function renderGrid(): void {
  grid.textContent = "";
  for (let row = 0; row < rowCount(); row++) {
    const rowElement = document.createElement("div");
    rowElement.className = "track-row";
    rowElement.dataset.trackRow = String(row);
    rowElement.innerHTML = `<span class="row-number">${rowCount() - row}</span>`;
    for (let side = 0; side < 2; side++) {
      if (side === 1) rowElement.insertAdjacentHTML("beforeend", `<span class="divider">|</span>`);
      for (let column = 0; column < laneWidth; column++) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "cell";
        button.dataset.row = String(row);
        button.dataset.side = String(side);
        button.dataset.column = String(column);
        button.setAttribute("aria-label", `Row ${rowCount() - row}, ${side === 0 ? "left" : "right"} lane, column ${column + 1}`);
        button.addEventListener("click", () => selectCell({ row, side: side as 0 | 1, column }));
        button.addEventListener("dblclick", () => {
          selected = { row, side: side as 0 | 1, column };
          selectionToolRevision = toolRevision;
          placeSelected();
        });
        rowElement.append(button);
      }
    }
    grid.append(rowElement);
  }
  for (let row = 0; row < rowCount(); row++) {
    for (let side = 0; side < 2; side++) {
      for (let column = 0; column < laneWidth; column++) renderCell({ row, side: side as 0 | 1, column });
    }
  }
  updateSelection();
}

function selectCell(candidate: Selection): void {
  const sameCell = selected?.row === candidate.row && selected.side === candidate.side && selected.column === candidate.column;
  if (sameCell && selectionToolRevision === toolRevision) {
    selected = null;
    updateSelection();
    return;
  }
  selected = candidate;
  if (sameCell && selectionToolRevision !== toolRevision) placeSelected();
  selectionToolRevision = toolRevision;
  updateSelection();
}

function placeSelected(item = selectedItem): void {
  if (!selected) return;
  const speed = Number(speedInput.value);
  cells[selected.row][selected.side][selected.column] = {
    ...item,
    speed: Number.isFinite(speed) && speed > 0 ? speed : 1,
  };
  renderCell(selected);
}

function eraseSelected(): void {
  if (!selected) return;
  cells[selected.row][selected.side][selected.column] = blankCell();
  renderCell(selected);
}

function renderPalette(): void {
  palette.textContent = "";
  for (const family of paletteFamilies) {
    const details = document.createElement("details");
    details.open = family === "System" || family === "Enemies" || family === "Guns";
    details.className = "palette-family";
    details.innerHTML = `<summary>${family}</summary>`;
    const group = document.createElement("div");
    group.className = "palette-items";
    for (const item of paletteItems.filter(candidate => candidate.family === family)) {
      const button = document.createElement("button");
      button.type = "button";
      button.title = item.id;
      button.innerHTML = `<span class="symbol">${item.symbol}</span><span>${item.label}</span>`;
      button.addEventListener("click", () => {
        selectedItem = item;
        toolRevision++;
        palette.querySelectorAll("button").forEach(candidate => candidate.classList.toggle("selected", candidate === button));
      });
      group.append(button);
    }
    details.append(group);
    palette.append(details);
  }
  palette.querySelector("button")!.classList.add("selected");
}

function insertRow(offset: 0 | 1): void {
  const index = selected ? selected.row + offset : rowCount();
  cells.splice(index, 0, blankRow());
  selected = { row: index, side: selected?.side ?? 0, column: selected?.column ?? 0 };
  renderGrid();
}

function deleteSelectedRow(): void {
  if (!selected || rowCount() <= 1) return;
  cells.splice(selected.row, 1);
  selected.row = Math.min(selected.row, rowCount() - 1);
  renderGrid();
}

function clearGrid(): void {
  cells = cells.map(() => blankRow());
  renderGrid();
}

function sceneId(): LaneRunnerSceneId {
  return isLaneRunnerSceneId(sceneSelect.value) ? sceneSelect.value : "neonHall";
}

function loadTrack(track: TrackMember, exportName: string): void {
  input<HTMLInputElement>("#export-name").value = exportName;
  input<HTMLInputElement>("#display-name").value = track.label;
  input<HTMLTextAreaElement>("#description").value = track.description;
  input<HTMLInputElement>("#enemy-hp").value = String(track.definition.balance.enemyHp);
  input<HTMLInputElement>("#enemy-speed").value = String(track.definition.balance.enemySpeed);
  sceneSelect.value = track.environment.sceneId;

  const parsedRows = track.definition.layout
    .split(/\r?\n/)
    .map(row => row.trim())
    .filter(Boolean);
  cells = parsedRows.map(row => {
    const [left = "", right = ""] = row.split("|").map(side => side.replace(/\s/g, ""));
    return [left, right].map(side =>
      Array.from({ length: laneWidth }, (_, column) => {
        const symbol = side[column] ?? ".";
        const entry = track.definition.legend[symbol] ?? track.definition.legend["."] ?? { id: "empty" };
        const paletteItem = paletteById.get(entry.id) ?? { id: entry.id, label: entry.id, symbol, family: "Items" as const };
        return { ...paletteItem, symbol, speed: entry.speed ?? 1 };
      }),
    ) as CellValue[][];
  });
  selected = { row: rowCount() - 1, side: 0, column: 0 };
  renderGrid();
}

function renderTrackSources(): void {
  trackSource.innerHTML = `<option value="">New blank track</option>` +
    Object.entries(trackFamily.members)
      .map(([id, track]) => `<option value="${id}">${track.label}</option>`)
      .join("");
  trackSource.addEventListener("change", () => {
    const id = trackSource.value as keyof typeof trackFamily.members | "";
    if (!id) {
      cells = Array.from({ length: defaultRowCount }, blankRow);
      input<HTMLInputElement>("#export-name").value = "newTrack";
      input<HTMLInputElement>("#display-name").value = "New Track";
      input<HTMLTextAreaElement>("#description").value = "A hand-authored Neon Swarm track.";
      input<HTMLInputElement>("#enemy-hp").value = "1";
      input<HTMLInputElement>("#enemy-speed").value = "1";
      sceneSelect.value = "neonHall";
      selected = { row: rowCount() - 1, side: 0, column: 0 };
      renderGrid();
      return;
    }
    loadTrack(trackFamily.members[id], id);
  });
}

function renderSceneOptions(): void {
  sceneSelect.innerHTML = laneRunnerSceneIds
    .map(id => `<option value="${id}">${getLaneRunnerSceneName(id)}</option>`)
    .join("");
  sceneSelect.value = "neonHall";
}

const quoted = (value: string): string => JSON.stringify(value);
const safeIdentifier = (value: string): string => {
  const cleaned = value.replace(/[^a-zA-Z0-9_$]/g, "");
  return /^[a-zA-Z_$]/.test(cleaned) ? cleaned : `track${cleaned}`;
};

function exportSource(): { fileName: string; source: string } {
  const exportName = safeIdentifier(input<HTMLInputElement>("#export-name").value || "newTrack");
  const symbols = ".PEGHIJKLMNOQRSTUVWXYZABCDEFGHIJKLMNOQRSTUVWXYZ23456789".split("");
  const entries = new Map<string, { symbol: string; value: CellValue }>();
  entries.set("empty@1", { symbol: ".", value: blankCell() });
  const symbolFor = (value: CellValue): string => {
    const key = `${value.id}@${value.speed}`;
    const existing = entries.get(key);
    if (existing) return existing.symbol;
    const symbol = symbols.find(candidate => ![...entries.values()].some(entry => entry.symbol === candidate));
    if (!symbol) throw new Error("This track uses more distinct entity/speed combinations than the one-character layout can represent.");
    entries.set(key, { symbol, value });
    return symbol;
  };
  const layout = cells.map(row => `${row[0].map(symbolFor).join("")} | ${row[1].map(symbolFor).join("")}`).join("\n");
  const legend = [...entries.values()].map(({ symbol, value }) =>
    `      ${quoted(symbol)}: { id: ${quoted(value.id)}${value.speed === 1 ? "" : `, speed: ${value.speed}`} },`,
  ).join("\n");
  const hp = Number(input<HTMLInputElement>("#enemy-hp").value) || 1;
  const speed = Number(input<HTMLInputElement>("#enemy-speed").value) || 1;

  return {
    fileName: `${exportName}.ts`,
    source: `import type { TrackMember } from "../TrackDefinition";

export const ${exportName} = {
  label: ${quoted(input<HTMLInputElement>("#display-name").value)},
  description: ${quoted(input<HTMLTextAreaElement>("#description").value)},
  durationSeconds: ${rowCount() + 1},
  startingGun: "pulsePistol",
  startingGunLevel: 1,
  viewport: {
    orientation: "portrait",
    aspectWidth: 9,
    aspectHeight: 16,
    logicalWidth: 450,
    logicalHeight: 800,
  },
  environment: {
    sceneId: ${quoted(sceneId())},
  },
  definition: {
    layout: \`
${layout}
\`,
    legend: {
${legend}
    },
    balance: {
      enemyHp: ${hp},
      enemySpeed: ${speed},
    },
  },
} satisfies TrackMember;
`,
  };
}

function syncGridCanvasSize(): { width: number; height: number } {
  const origin = gridContent.getBoundingClientRect();
  const bounds = [laneHeadings, grid, nearLabel].map(element => element.getBoundingClientRect());
  const width = Math.max(1, Math.ceil(Math.max(...bounds.map(bound => bound.right - origin.left))));
  const height = Math.max(1, Math.ceil(gridPanel.clientHeight));
  gridCanvas.width = width;
  gridCanvas.height = height;
  gridCanvas.style.width = `${width}px`;
  gridCanvas.style.height = `${height}px`;
  gridCanvas.style.transform = `translateY(${gridPanel.scrollTop}px)`;
  return { width, height };
}

function gridShapes(now: number): NeonTopDownShape[] {
  const actors = {
    player: new NeonShapeActor({ shape: swarmShapes.player }),
    enemy: new NeonShapeActor({ shape: swarmShapes.enemy }),
    gun: new NeonShapeActor({ shape: swarmShapes.gunPickup }),
    multiplier: new NeonShapeActor({ shape: swarmShapes.multiplier }),
  };
  const canvasBounds = gridCanvas.getBoundingClientRect();
  const panelBounds = gridPanel.getBoundingClientRect();
  const viewport = { width: gridCanvas.width, height: gridCanvas.height, playerY: gridCanvas.height };
  const helicopterViewport = helicopterViewportFor(viewport.width, viewport.height, viewport.playerY);
  const shapes: NeonTopDownShape[] = [];
  const cellTuning = {
    opacity: 1,
    lineThickness: .48,
    glow: .52,
    energyIntensity: .7,
    energyCoverage: .24,
    energySpeed: .6,
    energyBleed: .12,
  } satisfies Partial<NeonTopDownShape>;

  for (let row = 0; row < rowCount(); row++) {
    for (let side = 0 as 0 | 1; side < 2; side = (side + 1) as 0 | 1) {
      for (let column = 0; column < laneWidth; column++) {
        const value = cells[row][side][column];
        if (value.id === "empty") continue;
        const button = cellAt({ row, side, column });
        if (!button) continue;
        const bounds = button.getBoundingClientRect();
        if (bounds.bottom < panelBounds.top || bounds.top > panelBounds.bottom) continue;
        const x = bounds.left - canvasBounds.left + bounds.width / 2;
        const y = bounds.top - canvasBounds.top + bounds.height / 2;
        const size = Math.min(bounds.width, bounds.height) * .3;
        if (value.id === "player.start") {
          shapes.push(actorInTopDownScene(actors.player, x, y, size, {
            ...playerOrientation(defaultHelicopterCameraSettings, helicopterViewport, x, y, now, column),
            ...cellTuning,
          }));
        } else if (value.id.startsWith("enemy.")) {
          shapes.push(actorInTopDownScene(actors.enemy, x, y, size, {
            ...enemyOrientation(defaultHelicopterCameraSettings, helicopterViewport, x, y, now, row),
            ...cellTuning,
          }));
        } else if (value.id.startsWith("pickup.weapon.gun.")) {
          const gunId = value.id.slice("pickup.weapon.gun.".length) as keyof typeof gunFamily.members;
          const gun = gunFamily.members[gunId];
          actors.gun.color = gun ? neonPalette[gun.visualIdentity.projectileColor] : neonPalette.cyan;
          shapes.push(actorInTopDownScene(actors.gun, x, y, size, {
            ...billboardOrientation(defaultHelicopterCameraSettings, helicopterViewport, x, y, now),
            ...cellTuning,
          }));
        } else if (value.id.startsWith("pickup.weapon.shield.")) {
          const shieldId = value.id.slice("pickup.weapon.shield.".length) as keyof typeof shieldFamily.members;
          const shield = shieldFamily.members[shieldId];
          shapes.push({
            ...shieldPickupVisual({ x, y, now, color: shield ? neonPalette[shield.color] : neonPalette.cyan }),
            ...cellTuning,
            x,
            y,
            size,
          });
        } else if (value.id.startsWith("pickup.weapon.sword.")) {
          const swordId = value.id.slice("pickup.weapon.sword.".length) as keyof typeof swordFamily.members;
          const sword = swordFamily.members[swordId];
          shapes.push({
            ...swordPickupVisual({ x, y, now, color: sword ? neonPalette[sword.color] : neonPalette.pink }),
            ...cellTuning,
            x,
            y,
            size,
          });
        } else if (value.id === "pickup.unitMultiplier.2x") {
          actors.multiplier.color = neonPalette[multiplierFamily.members.squadPlusOne.pickupColor];
          shapes.push(actorInTopDownScene(actors.multiplier, x, y, size, {
            ...billboardOrientation(defaultHelicopterCameraSettings, helicopterViewport, x, y, now),
            ...cellTuning,
          }));
        }
      }
    }
  }
  return shapes;
}

async function startGridRenderer(): Promise<void> {
  let renderer: NeonTopDownSceneRenderer | null = null;
  let rendererSize = { width: 0, height: 0 };
  let rendererRequest: Promise<NeonTopDownSceneRenderer> | null = null;

  try {
    let frame = 0;
    const ensureRenderer = async (): Promise<NeonTopDownSceneRenderer | null> => {
      const size = syncGridCanvasSize();
      if (renderer && rendererSize.width === size.width && rendererSize.height === size.height) return renderer;
      if (!rendererRequest) {
        renderer?.destroy();
        rendererRequest = NeonTopDownSceneRenderer.create(gridCanvas, size.width, size.height).then(created => {
          renderer = created;
          rendererSize = size;
          return created;
        }).finally(() => {
          rendererRequest = null;
        });
      }
      return rendererRequest;
    };
    const render = (now: number) => {
      void ensureRenderer().then(activeRenderer => {
        if (!activeRenderer) return;
        activeRenderer.render({ shapes: gridShapes(now) }, now / 1000);
      }).catch(cause => {
        gridRenderError.hidden = false;
        gridRenderError.textContent = cause instanceof Error ? cause.message : String(cause);
      });
      frame = requestAnimationFrame(render);
    };
    frame = requestAnimationFrame(render);
    addEventListener("pagehide", () => {
      cancelAnimationFrame(frame);
      renderer?.destroy();
    }, { once: true });
  } catch (cause) {
    gridRenderError.hidden = false;
    gridRenderError.textContent = cause instanceof Error ? cause.message : String(cause);
  }
}

renderSceneOptions();
renderTrackSources();
renderPalette();
renderGrid();

document.querySelector<HTMLButtonElement>("#place-cell")!.addEventListener("click", () => placeSelected());
document.querySelector<HTMLButtonElement>("#erase-cell")!.addEventListener("click", eraseSelected);
document.querySelector<HTMLButtonElement>("#insert-row-far")!.addEventListener("click", () => insertRow(0));
document.querySelector<HTMLButtonElement>("#insert-row-near")!.addEventListener("click", () => insertRow(1));
document.querySelector<HTMLButtonElement>("#delete-row")!.addEventListener("click", deleteSelectedRow);
document.querySelector<HTMLButtonElement>("#clear-grid")!.addEventListener("click", clearGrid);
document.querySelector<HTMLButtonElement>("#export-track")!.addEventListener("click", () => {
  const exported = exportSource();
  const url = URL.createObjectURL(new Blob([exported.source], { type: "text/typescript" }));
  const link = document.createElement("a");
  link.href = url;
  link.download = exported.fileName;
  link.click();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  document.querySelector<HTMLElement>("#export-status")!.textContent = `Generated ${exported.fileName}. Add it to CombatDefinition/tracks and register it in tracks/index.ts.`;
});

void startGridRenderer();

declare global {
  interface Window {
    JustTheGamesPlease?: {
      urlOptions?: {
        isEnabled(name: string): boolean;
      };
    };
  }
}
