import { createTestPage } from "@just-the-games-please/neon-factory";
import { showstopperFamily, type ShowstopperId, type ShowstopperMember } from "../../CombatDefinition";

interface ShowstopperSmokeResult {
  showstopperId: ShowstopperId;
  passed: boolean;
  failures: string[];
}

const status = document.querySelector<HTMLOutputElement>("#test-status")!;
const resultsElement = document.querySelector<HTMLOListElement>("#results")!;

function validateShowstopper(id: ShowstopperId, member: ShowstopperMember): ShowstopperSmokeResult {
  const failures: string[] = [];
  if (member.bankBehavior !== "bankedManualTrigger") failures.push("must be manually banked and triggered");
  if (member.durationMs <= 0) failures.push("duration must be positive");
  if (member.centerCameraMs < 0) failures.push("center camera timing cannot be negative");
  if (member.returnCameraMs <= 0) failures.push("return camera timing must be positive");
  if (member.timeWarp[0]?.atMs !== 0) failures.push("time warp must start at 0ms");
  if (member.camera[0]?.atMs !== 0) failures.push("camera choreography must start at 0ms");
  if (member.timeWarp.at(-1)?.atMs !== member.durationMs) failures.push("time warp must end at durationMs");
  if ((member.camera.at(-1)?.atMs ?? 0) > member.durationMs) failures.push("camera choreography cannot exceed durationMs");
  if (!member.timelineEvents.some(event => event.type === "startAttack")) failures.push("showstopper needs a start attack event");
  if (!member.timelineEvents.some(event => event.type === "stopAttack")) failures.push("showstopper needs a stop attack event");
  if (member.attack.targeting !== "allLanesAhead") failures.push("first slice needs an all-lane attack");
  if (member.attack.rowsAhead <= 0) failures.push("attack rowsAhead must be positive");
  const minGameplayScale = Math.min(...member.timeWarp.map(point => point.gameplayScale));
  if (minGameplayScale > .25) failures.push("cinematic time warp should slow gameplay meaningfully");
  const cameraMovesForward = member.camera.some(pose => pose.followDistance < member.camera[0].followDistance - 60);
  if (!cameraMovesForward) failures.push("camera choreography should move forward from the player POV");

  return { showstopperId: id, passed: failures.length === 0, failures };
}

function run(): ShowstopperSmokeResult[] {
  const results = Object.entries(showstopperFamily.members).map(([id, member]) =>
    validateShowstopper(id as ShowstopperId, member));
  resultsElement.innerHTML = results.map(result => {
    const member = showstopperFamily.members[result.showstopperId];
    const minGameplayScale = Math.min(...member.timeWarp.map(point => point.gameplayScale));
    return `
      <li data-passed="${result.passed}" data-showstopper-id="${result.showstopperId}">
        <strong>${member.label}</strong>
        <span>${result.passed ? "PASS" : "FAIL"}</span>
        <span class="detail">${result.passed
          ? `${member.durationMs}ms - min speed ${(minGameplayScale * 100).toFixed(0)}% - ${member.attack.rowsAhead} attack rows`
          : result.failures.join(" | ")}</span>
      </li>`;
  }).join("");
  return results;
}

const test = createTestPage("neon-swarm-showstopper-family-smoke", { suite: "smoke", run }, status);
test.ready();
for (const result of run()) {
  test.assert(`${result.showstopperId} definition is valid`, result.passed, result.failures.join("; ") || "all checks passed");
}
