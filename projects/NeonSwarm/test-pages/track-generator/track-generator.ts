import {
  gunFamily,
  shieldFamily,
  swordFamily,
  multiplierFamily,
  orbFamily
} from "../../CombatDefinition";

// DOM references
const customRequirements = document.querySelector<HTMLTextAreaElement>("#custom-requirements")!;
const startGunSelect = document.querySelector<HTMLSelectElement>("#start-gun")!;
const startGunLevelSelect = document.querySelector<HTMLSelectElement>("#start-gun-level")!;
const startShieldSelect = document.querySelector<HTMLSelectElement>("#start-shield")!;
const startSwordSelect = document.querySelector<HTMLSelectElement>("#start-sword")!;
const trackLabelInput = document.querySelector<HTMLInputElement>("#track-label")!;
const enemyHpInput = document.querySelector<HTMLInputElement>("#enemy-hp")!;
const enemySpeedInput = document.querySelector<HTMLInputElement>("#enemy-speed")!;
const copyBtn = document.querySelector<HTMLButtonElement>("#copy-btn")!;
const promptPreview = document.querySelector<HTMLPreElement>("#prompt-preview")!;

// Populate selectors
function initializeSelectors(): void {
  // Starting Gun
  for (const [id, gun] of Object.entries(gunFamily.members)) {
    const opt = new Option(gun.label, id);
    if (id === "pulsePistol") opt.selected = true;
    startGunSelect.add(opt);
  }

  // Starting Shield
  for (const [id, shield] of Object.entries(shieldFamily.members)) {
    const opt = new Option(shield.label, id);
    startShieldSelect.add(opt);
  }

  // Starting Sword
  for (const [id, sword] of Object.entries(swordFamily.members)) {
    const opt = new Option(sword.label, id);
    startSwordSelect.add(opt);
  }
}

// Generate the markdown documentation for available items
function generateItemsDocumentation(): string {
  let doc = "";

  // 1. Enemies
  doc += "### 1. Enemies (Orbs)\n\n";
  doc += "| ID | Label | Editor Symbol | Health | Capabilities | Power Level |\n";
  doc += "| :--- | :--- | :---: | :---: | :--- | :--- |\n";
  for (const [id, orb] of Object.entries(orbFamily.members)) {
    const symbol = id === "basicOrb" ? "E" : id.charAt(0).toUpperCase();
    const power = id === "basicOrb" ? "Low (Standard)" : "Medium/High";
    doc += `| \`enemy.${id === "basicOrb" ? "basic" : id}\` | ${orb.label} | \`${symbol}\` | ${orb.health} HP | Standard runner threat. | ${power} |\n`;
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

  // 5. Squad Multipliers & Items
  doc += "### 5. Squad Multipliers & Special Items\n\n";
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
  const startGun = startGunSelect.value;
  const startGunLevel = startGunLevelSelect.value;
  const startShield = startShieldSelect.value;
  const startSword = startSwordSelect.value;
  const trackLabel = trackLabelInput.value.trim() || "Custom Nebula Drive";
  const enemyHp = enemyHpInput.value || "1.0";
  const enemySpeed = enemySpeedInput.value || "1.0";

  const shieldField = startShield === "none" ? "null" : `{\n    shieldId: "${startShield}",\n    charges: ${shieldFamily.members[startShield as keyof typeof shieldFamily.members]?.maxCharges || 2},\n    cooldownLeft: 0,\n    pulseEffects: [],\n    hitFlashUntil: 0,\n  }`;

  const swordField = startSword === "none" ? "null" : `{\n    swordId: "${startSword}",\n    cooldownLeft: 0,\n    activeSlash: null,\n  }`;

  const itemsDoc = generateItemsDocumentation();

  return `You are an expert level and track designer for "Neon Swarm", a fast-paced two-lane neon runner/shooter game.

Your task is to design a new custom track file based on the specifications, environment constraints, and custom requirements listed below.

---

## 1. CUSTOM REQUIREMENTS
${reqText}

---

## 2. TRACK DURATION & LAYOUT RULES
- **Duration/Length**: The duration of the track is determined entirely by the number of rows in the layout.
- **Rule of Thumb**: Each row in the layout string corresponds to approximately 1 second of playtime. Therefore, a track that should last 25 seconds must have exactly 25 lines in the layout grid.
- **Layout Format**: The layout string consists of left-lane and right-lane bands separated by a "|" character. 
  - Each side must be exactly 5 characters wide, representing the 5 columns of that lane.
  - Example: \`..... | .....\` represents an empty row across both lanes.
  - The player starts at the bottom of the layout, moving upwards. The LLM must place \`P\` (Player Start) exactly once at the bottom row.

---

## 3. AVAILABLE WEAPONS, SHIELDS, SWORDS & ITEMS
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
  durationSeconds: 25, // Set matching the number of lines in your layout (excluding blank lines)
  startingGun: "${startGun}",
  startingGunLevel: ${startGunLevel},
  viewport: {
    orientation: "portrait",
    aspectWidth: 9,
    aspectHeight: 16,
    logicalWidth: 450,
    logicalHeight: 800,
  },
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
startGunSelect.addEventListener("change", updatePreview);
startGunLevelSelect.addEventListener("change", updatePreview);
startShieldSelect.addEventListener("change", updatePreview);
startSwordSelect.addEventListener("change", updatePreview);
trackLabelInput.addEventListener("input", updatePreview);
enemyHpInput.addEventListener("input", updatePreview);
enemySpeedInput.addEventListener("input", updatePreview);
copyBtn.addEventListener("click", copyToClipboard);

// Init
initializeSelectors();
updatePreview();
