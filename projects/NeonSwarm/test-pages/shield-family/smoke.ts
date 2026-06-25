import { createTestPage, neonPalette } from "@just-the-games-please/neon-factory";
import { shieldFamily, type ShieldId, type ShieldMember } from "../../CombatDefinition";
import { resolveShieldContact, ShieldState } from "../../src/combat/shieldEvaluator";

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

const lightGuard = shieldFamily.members.lightGuard;
const state = new ShieldState("lightGuard", lightGuard.maxCharges);
const horizontalEnemy = { id: 1, x: 225 + lightGuard.radius, y: 650, radius: 6.25, health: 1, dying: false };
const firstContact = resolveShieldContact(state, lightGuard, horizontalEnemy, 225, 650, 1000);
test.assert(
  "shield intercepts horizontal lane-shift contact",
  firstContact.absorbed && firstContact.enemyDestroyed && state.charges === lightGuard.maxCharges - 1,
  `absorbed=${firstContact.absorbed} destroyed=${firstContact.enemyDestroyed} charges=${state.charges}`,
);
const repeatedContact = resolveShieldContact(state, lightGuard, horizontalEnemy, 225, 650, 1016);
test.assert(
  "one enemy cannot drain shield repeatedly",
  !repeatedContact.contacted && state.charges === lightGuard.maxCharges - 1,
  `contacted=${repeatedContact.contacted} charges=${state.charges}`,
);
