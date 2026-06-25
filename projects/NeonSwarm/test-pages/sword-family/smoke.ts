import { createTestPage, neonPalette } from "@just-the-games-please/neon-factory";
import { swordFamily, type SwordId, type SwordMember } from "../../CombatDefinition";

interface SwordSmokeResult {
  swordId: SwordId;
  passed: boolean;
  failures: string[];
}

const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const resultsElement = document.querySelector<HTMLOListElement>("#results")!;

function validateSword(id: SwordId, sword: SwordMember): SwordSmokeResult {
  const failures: string[] = [];

  if (sword.range <= 0) failures.push(`range ${sword.range} must be positive`);
  if (sword.arcDegrees <= 0 || sword.arcDegrees > 360) failures.push(`arcDegrees ${sword.arcDegrees} must be in (0, 360]`);
  if (sword.damage <= 0) failures.push(`damage ${sword.damage} must be positive`);
  if (sword.cooldownSeconds <= 0) failures.push(`cooldownSeconds ${sword.cooldownSeconds} must be positive`);
  if (sword.maxTargets < 1) failures.push(`maxTargets ${sword.maxTargets} must be >= 1`);
  if (sword.slashDurationMs <= 0) failures.push(`slashDurationMs ${sword.slashDurationMs} must be positive`);
  if (sword.slashThickness <= 0) failures.push(`slashThickness ${sword.slashThickness} must be positive`);
  if (!neonPalette[sword.color]) failures.push(`color "${sword.color}" not in neonPalette`);

  return { swordId: id, passed: failures.length === 0, failures };
}

const run = (): SwordSmokeResult[] => {
  const results = Object.entries(swordFamily.members).map(([id, sword]) =>
    validateSword(id as SwordId, sword));

  resultsElement.innerHTML = results.map(r => `
    <li data-passed="${r.passed}" data-sword-id="${r.swordId}">
      <strong>${swordFamily.members[r.swordId as keyof typeof swordFamily.members].label}</strong>
      <span>${r.passed ? "PASS" : "FAIL"}</span>
      <span class="detail">${r.passed
        ? `range: ${swordFamily.members[r.swordId as keyof typeof swordFamily.members].range}px · arc: ${swordFamily.members[r.swordId as keyof typeof swordFamily.members].arcDegrees}° · cd: ${swordFamily.members[r.swordId as keyof typeof swordFamily.members].cooldownSeconds}s`
        : r.failures.join(" | ")}</span>
    </li>`).join("");

  return results;
};

const test = createTestPage("neon-swarm-sword-family-smoke", { suite: "smoke", run }, status);
test.ready();
for (const result of run()) {
  test.assert(
    `${result.swordId} definition is valid`,
    result.passed,
    result.failures.join("; ") || "all checks passed",
  );
}
