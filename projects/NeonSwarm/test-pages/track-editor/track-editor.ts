import { gunFamily, orbFamily, shieldFamily, swordFamily } from "../../CombatDefinition";

type Side = "left" | "right";
type PaletteItem = { id: string; label: string; symbol: string };
type CellValue = PaletteItem & { speed: number };

const developer = new URLSearchParams(location.search).get("dev") === "1";
document.querySelector<HTMLElement>("#editor")!.hidden = !developer;
document.querySelector<HTMLElement>("#dev-required")!.hidden = developer;

const rowCount = 25;
const laneWidth = 5;
const empty: PaletteItem = { id: "empty", label: "Empty", symbol: "." };
const paletteItems: PaletteItem[] = [
  empty,
  { id: "player.start", label: "Player Start", symbol: "P" },
  ...Object.entries(orbFamily.members).map(([id, enemy], index) => ({
    id: `enemy.${id === "basicOrb" ? "basic" : id}`,
    label: enemy.label,
    symbol: "EABCDEFGHIJKLMNOPQRSTUVWXYZ"[index],
  })),
  ...Object.entries(gunFamily.members).map(([id, gun], index) => ({
    id: `pickup.weapon.gun.${id}`,
    label: gun.label,
    symbol: "GHIJKLMNOQRSTUVWXYZ"[index],
  })),
  { id: "pickup.unitMultiplier.2x", label: "2x Squad", symbol: "2" },
  // Shield family pickups
  ...Object.entries(shieldFamily.members).map(([id, shield], index) => ({
    id: `pickup.weapon.shield.${id}`,
    label: `Shield: ${shield.label}`,
    symbol: "SHX"[index],
  })),
  // Sword family pickups (symbols: a, b, c)
  ...Object.entries(swordFamily.members).map(([id, sword], index) => ({
    id: `pickup.weapon.sword.${id}`,
    label: `Sword: ${sword.label}`,
    symbol: "abc"[index],
  })),
];

const cells = Array.from({ length: rowCount }, () =>
  Array.from({ length: 2 }, () => Array.from({ length: laneWidth }, () => ({ ...empty, speed: 1 }))),
);
let selected = { row: rowCount - 1, side: 0 as 0 | 1, column: 0 };
let selectedItem = paletteItems[0];

const grid = document.querySelector<HTMLElement>("#track-grid")!;
const palette = document.querySelector<HTMLElement>("#palette")!;
const speedInput = document.querySelector<HTMLInputElement>("#entity-speed")!;
const selectionReadout = document.querySelector<HTMLElement>("#selection")!;

const cellAt = (row: number, side: number, column: number): HTMLButtonElement =>
  grid.querySelector(`[data-row="${row}"][data-side="${side}"][data-column="${column}"]`)!;

function updateSelection(): void {
  grid.querySelectorAll(".cell.selected").forEach(cell => cell.classList.remove("selected"));
  cellAt(selected.row, selected.side, selected.column).classList.add("selected");
  const distance = rowCount - 1 - selected.row;
  selectionReadout.textContent = `Selected: row ${distance + 1} from player, ${selected.side === 0 ? "left" : "right"} lane, column ${selected.column + 1}`;
}

function renderCell(row: number, side: number, column: number): void {
  const value = cells[row][side][column];
  const button = cellAt(row, side, column);
  button.textContent = value.symbol;
  button.dataset.id = value.id;
  button.title = `${value.label}${value.speed === 1 ? "" : ` · ${value.speed}x speed`}`;
}

function placeSelected(): void {
  const speed = Number(speedInput.value);
  cells[selected.row][selected.side][selected.column] = {
    ...selectedItem,
    speed: Number.isFinite(speed) && speed > 0 ? speed : 1,
  };
  renderCell(selected.row, selected.side, selected.column);
}

for (let row = 0; row < rowCount; row++) {
  const rowElement = document.createElement("div");
  rowElement.className = "track-row";
  rowElement.innerHTML = `<span class="row-number">${rowCount - row}</span>`;
  for (let side = 0; side < 2; side++) {
    if (side === 1) rowElement.insertAdjacentHTML("beforeend", `<span class="divider">|</span>`);
    for (let column = 0; column < laneWidth; column++) {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "cell";
      button.dataset.row = String(row);
      button.dataset.side = String(side);
      button.dataset.column = String(column);
      button.setAttribute("aria-label", `Row ${rowCount - row}, ${side === 0 ? "left" : "right"} lane, column ${column + 1}`);
      button.addEventListener("click", () => {
        selected = { row, side: side as 0 | 1, column };
        updateSelection();
        placeSelected();
      });
      rowElement.append(button);
    }
  }
  grid.append(rowElement);
}

paletteItems.forEach(item => {
  const button = document.createElement("button");
  button.type = "button";
  button.innerHTML = `<span class="symbol">${item.symbol}</span><span>${item.label}<br><small>${item.id}</small></span>`;
  button.addEventListener("click", () => {
    selectedItem = item;
    palette.querySelectorAll("button").forEach(candidate => candidate.classList.toggle("selected", candidate === button));
    placeSelected();
  });
  palette.append(button);
});
palette.querySelector("button")!.classList.add("selected");

for (let row = 0; row < rowCount; row++) {
  for (let side = 0; side < 2; side++) {
    for (let column = 0; column < laneWidth; column++) renderCell(row, side, column);
  }
}
updateSelection();

document.querySelector<HTMLButtonElement>("#clear-grid")!.addEventListener("click", () => {
  for (const row of cells) for (const side of row) for (let column = 0; column < side.length; column++) side[column] = { ...empty, speed: 1 };
  grid.querySelectorAll<HTMLButtonElement>(".cell").forEach(button => renderCell(+button.dataset.row!, +button.dataset.side!, +button.dataset.column!));
});

const quoted = (value: string): string => JSON.stringify(value);
const safeIdentifier = (value: string): string => {
  const cleaned = value.replace(/[^a-zA-Z0-9_$]/g, "");
  return /^[a-zA-Z_$]/.test(cleaned) ? cleaned : `track${cleaned}`;
};

function exportSource(): { fileName: string; source: string } {
  const exportName = safeIdentifier(document.querySelector<HTMLInputElement>("#export-name")!.value || "newTrack");
  const symbols = ".PEGHIJKLMNOQRSTUVWXYZABCDEFGHIJKLMNOQRSTUVWXYZ23456789".split("");
  const entries = new Map<string, { symbol: string; value: CellValue }>();
  entries.set("empty@1", { symbol: ".", value: { ...empty, speed: 1 } });
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
  const used = [...entries.values()];
  const legend = used.map(({ symbol, value }) =>
    `      ${quoted(symbol)}: { id: ${quoted(value.id)}${value.speed === 1 ? "" : `, speed: ${value.speed}`} },`,
  ).join("\n");
  const displayName = document.querySelector<HTMLInputElement>("#display-name")!.value;
  const description = document.querySelector<HTMLTextAreaElement>("#description")!.value;
  const hp = Number(document.querySelector<HTMLInputElement>("#enemy-hp")!.value) || 1;
  const speed = Number(document.querySelector<HTMLInputElement>("#enemy-speed")!.value) || 1;

  return {
    fileName: `${exportName}.ts`,
    source: `import type { TrackMember } from "../TrackDefinition";

export const ${exportName} = {
  label: ${quoted(displayName)},
  description: ${quoted(description)},
  durationSeconds: ${rowCount + 1},
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
    floorColor: "deepBlue",
    crackColor: "cyan",
    airColor: "violet",
    horizonColor: "pink",
    pulseRate: 1.35,
    crackDensity: 14,
    airStreakCount: 11,
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
