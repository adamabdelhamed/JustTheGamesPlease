import { createTestPage, neonPalette } from "@just-the-games-please/neon-factory";
import { shieldFamily, type ShieldId, type ShieldMember } from "../../CombatDefinition";

interface ShieldSmokeResult {
  shieldId: ShieldId;
  passed: boolean;
  failures: string[];
}

const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const resultsElement = document.querySelector<HTMLOListElement>("#results")!;

function validateShield(id: ShieldId, shield: ShieldMember): ShieldSmokeResult {
  const failures: string[] = [];

  if (shield.radius <= 0) failures.push(`radius ${shield.radius} must be positive`);
  if (shield.orbiterCount < 0) failures.push(`orbiterCount ${shield.orbiterCount} cannot be negative`);
  if (shield.orbiterSpeed < 0) failures.push(`orbiterSpeed ${shield.orbiterSpeed} cannot be negative`);
  if (!neonPalette[shield.color]) failures.push(`color "${shield.color}" not in neonPalette`);
  if (shield.mode !== "charge") failures.push(`mode must be charge, got ${shield.mode}`);
  if (shield.maxCharges <= 0) failures.push(`strength must be positive, got ${shield.maxCharges}`);

  return { shieldId: id, passed: failures.length === 0, failures };
}

const run = (): ShieldSmokeResult[] => {
  const results = Object.entries(shieldFamily.members).map(([id, shield]) =>
    validateShield(id as ShieldId, shield));

  resultsElement.innerHTML = results.map(r => `
    <li data-passed="${r.passed}" data-shield-id="${r.shieldId}">
      <strong>${shieldFamily.members[r.shieldId as keyof typeof shieldFamily.members].label}</strong>
      <span>${r.passed ? "PASS" : "FAIL"}</span>
      <span class="detail">${r.passed ? `mode: ${shieldFamily.members[r.shieldId as keyof typeof shieldFamily.members].mode} · radius: ${shieldFamily.members[r.shieldId as keyof typeof shieldFamily.members].radius}px` : r.failures.join(" | ")}</span>
    </li>`).join("");

  return results;
};

const test = createTestPage("neon-swarm-shield-family-smoke", { suite: "smoke", run }, status);
test.ready();
for (const result of run()) {
  test.assert(
    `${result.shieldId} definition is valid`,
    result.passed,
    result.failures.join("; ") || "all checks passed",
  );
}
