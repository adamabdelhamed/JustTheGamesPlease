import {
  gunFamily,
  lightningFamily,
  shieldFamily,
  swordFamily,
  multiplierFamily,
  orbFamily
} from "../../CombatDefinition";
import { enemyTrackId } from "../../src/enemyCatalog";

// DOM references
const customRequirements = document.querySelector<HTMLTextAreaElement>("#custom-requirements")!;
const trackLabelInput = document.querySelector<HTMLInputElement>("#track-label")!;
const enemyHpInput = document.querySelector<HTMLInputElement>("#enemy-hp")!;
const enemySpeedInput = document.querySelector<HTMLInputElement>("#enemy-speed")!;
const copyBtn = document.querySelector<HTMLButtonElement>("#copy-btn")!;
const promptPreview = document.querySelector<HTMLPreElement>("#prompt-preview")!;

// Generate the markdown documentation for available items
function generateItemsDocumentation(): string {
  let doc = "";

  // 1. Enemies
  doc += "### 1. Enemies (Orbs)\n\n";
  doc += "| ID | Label | Editor Symbol | Health | Capabilities | Power Level |\n";
  doc += "| :--- | :--- | :---: | :---: | :--- | :--- |\n";
  for (const [id, orb] of Object.entries(orbFamily.members)) {
    const symbol = id === "basicOrb" ? "E" : id.charAt(0).toUpperCase();
    const power = orb.columnSpan > 1 ? `${orb.columnSpan}-column boss` : id === "basicOrb" ? "Low (Standard)" : "Medium";
    doc += `| \`${enemyTrackId(id as keyof typeof orbFamily.members)}\` | ${orb.label} | \`${symbol}\` | ${orb.health} HP | ${orb.columnSpan} column${orb.columnSpan === 1 ? "" : "s"}, ${orb.speed} speed. | ${power} |\n`;
  }
  doc += "\n";

  // 2. Guns
  doc += "### 2. Guns (Weapon Family)\n\n";
  doc += "| ID | Label | Editor Symbol | Shot Pattern | Behaviors | Power Level / Rarity |\n";
  doc += "| :--- | :--- | :---: | :--- | :--- | :--- |\n";
  Object.entries(gunFamily.members).forEach(([id, gun], index) => {
    const symbol = "GHIJKLMNOQRSTUVWXYZ"[index] || "G";
    const power = gun.rarity === "starter" ? "Low (Starter)" : gun.rarity === "common" ? "Medium (Common)" : "High (Uncommon)";
    doc += `| \`pickup.weapon.gun.${id}\` | ${gun.label} | \`${symbol}\` | ${gun.shotPattern} | ${gun.projectileBehavior} projectile | ${power} |\n`;
  });
  doc += "\n";

  // 3. Shields
  doc += "### 3. Shields (Weapon Family)\n\n";
  doc += "| ID | Label | Editor Symbol | Max Charges | Cooldown | Power Level / Rarity |\n";
  doc += "| :--- | :--- | :---: | :---: | :---: | :--- |\n";
  Object.entries(shieldFamily.members).forEach(([id, shield], index) => {
    const symbol = "SHX"[index] || "S";
    const power = shield.rarity === "starter" ? "Low (Starter)" : shield.rarity === "common" ? "Medium (Common)" : "High (Uncommon)";
    doc += `| \`pickup.weapon.shield.${id}\` | ${shield.label} | \`${symbol}\` | ${shield.maxCharges} charges | ${shield.cooldownSeconds}s | ${power} |\n`;
  });
  doc += "\n";

  // 4. Swords
  doc += "### 4. Swords (Weapon Family)\n\n";
  doc += "| ID | Label | Editor Symbol | Damage | Cooldown | Targeting Mode | Power Level / Rarity |\n";
  doc += "| :--- | :--- | :---: | :---: | :---: | :--- | :--- |\n";
  Object.entries(swordFamily.members).forEach(([id, sword], index) => {
    const symbol = "abc"[index] || "a";
    const power = sword.rarity === "starter" ? "Low-Medium (Starter)" : sword.rarity === "common" ? "Medium-High (Common)" : "High (Uncommon)";
    doc += `| \`pickup.weapon.sword.${id}\` | ${sword.label} | \`${symbol}\` | ${sword.damage} | ${sword.cooldownSeconds}s | ${sword.targetingMode} | ${power} |\n`;
  });
  doc += "\n";

  // 5. Lightning
  doc += "### 5. Lightning (Weapon Family)\n\n";
  doc += "| ID | Label | Editor Symbol | Targeting Mode | Chain Range | Power Level / Rarity |\n";
  doc += "| :--- | :--- | :---: | :--- | :---: | :--- |\n";
  Object.entries(lightningFamily.members).forEach(([id, lightning], index) => {
    const symbol = "LF"[index] || "L";
    const peakLevel = lightning.levels[lightning.levels.length - 1];
    const power = lightning.rarity === "uncommon" ? "Medium-High (Uncommon)" : "High (Rare)";
    doc += `| \`pickup.weapon.lightning.${id}\` | ${lightning.label} | \`${symbol}\` | ${lightning.targetingMode} | ${peakLevel.chainRange}px | ${power} |\n`;
  });
  doc += "\n";

  // 6. Squad Multipliers & Items
  doc += "### 6. Squad Multipliers & Special Items\n\n";
  doc += "| ID | Label | Editor Symbol | Capabilities | Power Level |\n";
  doc += "| :--- | :--- | :---: | :--- | :--- |\n";
  doc += "| `pickup.unitMultiplier.2x` | 2x Squad (+1 Wingmate) | `2` | Adds an additional player wingmate to the squad. Caps at 10 total. | High |\n";
  doc += "| `player.start` | Player Start position | `P` | Marks the initial spawning coordinates and side of the player. Must appear exactly once in the layout. | Required |\n";
  doc += "| `empty` | Empty Space | `.` | Blank lane coordinate. | - |\n";
  doc += "\n";

  return doc;
}

// Generate the dynamic prompt
function buildPrompt(): string {
  const reqText = customRequirements.value.trim() || "(No custom requirements provided. Design a balanced, intermediate difficulty track.)";
  const trackLabel = trackLabelInput.value.trim() || "Custom Nebula Drive";
  const enemyHp = enemyHpInput.value || "1.0";
  const enemySpeed = enemySpeedInput.value || "1.0";

  const itemsDoc = generateItemsDocumentation();

  return `You are an expert level and track designer for "Neon Swarm", a fast-paced two-lane neon runner/shooter game.

Your task is to design a new custom track file based on the specifications, environment constraints, and custom requirements listed below.

---

## 1. CUSTOM REQUIREMENTS
${reqText}

---

## 2. TRACK LAYOUT RULES
- **Layout Format**: The layout string consists of left-lane and right-lane bands separated by a "|" character. 
  - Each side must be exactly 5 characters wide, representing the 5 columns of that lane.
  - Example: \`..... | .....\` represents an empty row across both lanes.
  - The player starts at the bottom of the layout, moving upwards. The LLM must place \`P\` (Player Start) exactly once at the bottom row.
  - Tracks begin without an equipped weapon. The track author must place gun pickups directly in the layout when the player should receive one.

---

## 3. AVAILABLE WEAPONS, SHIELDS, SWORDS, LIGHTNING & ITEMS
Here is a list of all validated items and their corresponding IDs, editor symbols, and capabilities:

${itemsDoc}

---

## 4. CODE TEMPLATE
You must output a valid TypeScript track file implementing \`TrackMember\` matching the following format. Ensure all legend keys map exactly to the symbols you use in the layout:

\`\`\`typescript
import type { TrackMember } from "../TrackDefinition";

export const generatedTrack: TrackMember = {
  label: "${trackLabel}",
  description: "An AI-generated combat runner track designed for custom challenges.",
  environment: {
    sceneId: "neonHall",
  },
  definition: {
    layout: \`
..... | .....
..... | ..E..
..... | .....
..E.. | .....
..... | .....
.E.E. | ..E..
..... | .....
..E.. | .E.E.
.S... | .....
..... | .....
.EEE. | .....
..... | .....
..E.. | .EEE.
..... | .....
....a | .....
.EE.. | ..EE.
..... | .....
..E.. | .E.E.
..... | .....
..2.. | .....
.EEE. | .....
..... | ..E..
..... | .....
..E.. | .....
..... | ..P..
\`,
    legend: {
      ".": { id: "empty" },
      "P": { id: "player.start" },
      "E": { id: "enemy.basic" },
      "2": { id: "pickup.unitMultiplier.2x", speed: 0.8 },
      "G": { id: "pickup.weapon.gun.pulsePistol", speed: 0.8 },
      "S": { id: "pickup.weapon.shield.lightGuard", speed: 0.8 },
      "a": { id: "pickup.weapon.sword.arcBlade", speed: 0.8 },
      "L": { id: "pickup.weapon.lightning.chainSpark", speed: 0.8 },
    },
    balance: {
      enemyHp: ${enemyHp},
      enemySpeed: ${enemySpeed},
    },
  },
} satisfies TrackMember;
\`\`\`

Ensure the code you output compiles perfectly, uses the correct types, and adheres strictly to the layout rules!
`;
}

// Update the preview panel
function updatePreview(): void {
  promptPreview.textContent = buildPrompt();
}

// Copy to Clipboard
async function copyToClipboard(): Promise<void> {
  const text = buildPrompt();
  try {
    await navigator.clipboard.writeText(text);
    copyBtn.classList.add("copied");
    const btnText = copyBtn.querySelector(".btn-text")!;
    btnText.textContent = "Copied!";
    
    setTimeout(() => {
      copyBtn.classList.remove("copied");
      btnText.textContent = "Copy to Clipboard";
    }, 2000);
  } catch (err) {
    console.error("Failed to copy text: ", err);
    alert("Failed to copy to clipboard. You can manually copy the preview panel text.");
  }
}

// Event listeners
customRequirements.addEventListener("input", updatePreview);
trackLabelInput.addEventListener("input", updatePreview);
enemyHpInput.addEventListener("input", updatePreview);
enemySpeedInput.addEventListener("input", updatePreview);
copyBtn.addEventListener("click", copyToClipboard);

// Init
updatePreview();
