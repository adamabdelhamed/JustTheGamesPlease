import { createTestPage } from "@just-the-games-please/neon-factory";
import { lightningFamily, type LightningId, type LightningMember } from "../../CombatDefinition";
import { LightningState, tickLightning, type LightningTarget } from "../../src/combat/lightningEvaluator";

interface LightningSmokeResult {
  lightningId: LightningId;
  passed: boolean;
  failures: string[];
}

const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const resultsElement = document.querySelector<HTMLOListElement>("#results")!;

const targets: LightningTarget[] = [
  { id: 1, lane: 0, x: 310, y: 470, health: 3, dying: false, rowId: 1 },
  { id: 2, lane: 0, x: 335, y: 506, health: 3, dying: false, rowId: 2 },
  { id: 3, lane: 1, x: 430, y: 492, health: 3, dying: false, rowId: 3 },
  { id: 4, lane: 1, x: 458, y: 530, health: 3, dying: false, rowId: 4 },
];

function validateLightning(id: LightningId, member: LightningMember): LightningSmokeResult {
  const failures: string[] = [];
  if (member.levels.length !== 5) failures.push("must define five levels");
  for (const level of member.levels) {
    if (level.cooldownSeconds <= 0) failures.push(`L${level.level} cooldown must be positive`);
    if (level.damage <= 0) failures.push(`L${level.level} damage must be positive`);
    if (level.chainRange <= 0) failures.push(`L${level.level} range must be positive`);
    if (level.maxJumps < 1 || level.branchFanout < 1 || level.maxDepth < 1) failures.push(`L${level.level} branch counts must be positive`);
  }
  const state = new LightningState(id, 5);
  const level = member.levels[4];
  const result = tickLightning(state, member, level, targets, { x: 320, y: 620, lane: 0 }, 1000, .016);
  if (!result.triggered) failures.push("expected clustered targets to trigger lightning");
  if (result.hits.length === 0) failures.push("expected at least one hit");
  if (result.hits.length > level.maxJumps) failures.push("hit count cannot exceed max jumps");
  if (state.activeChains.length !== 1) failures.push("expected one active visual chain");

  return { lightningId: id, passed: failures.length === 0, failures };
}

function run(): LightningSmokeResult[] {
  const results = Object.entries(lightningFamily.members).map(([id, member]) =>
    validateLightning(id as LightningId, member));
  resultsElement.innerHTML = results.map(result => {
    const member = lightningFamily.members[result.lightningId];
    return `
      <li data-passed="${result.passed}" data-lightning-id="${result.lightningId}">
        <strong>${member.label}</strong>
        <span>${result.passed ? "PASS" : "FAIL"}</span>
        <span class="detail">${result.passed
          ? `${member.targetingMode} · levels ${member.levels.length} · L5 jumps ${member.levels[4].maxJumps}`
          : result.failures.join(" | ")}</span>
      </li>`;
  }).join("");
  return results;
}

const test = createTestPage("neon-swarm-lightning-family-smoke", { suite: "smoke", run }, status);
test.ready();
for (const result of run()) {
  test.assert(`${result.lightningId} definition and chain behavior are valid`, result.passed, result.failures.join("; ") || "all checks passed");
}
