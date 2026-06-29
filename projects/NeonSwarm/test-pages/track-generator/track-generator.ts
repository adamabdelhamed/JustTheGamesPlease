import {
  describeComposedCatalogTrack,
  trackCatalog,
  type TrackCatalogId,
} from "../../CombatDefinition";

const developer = window.JustTheGamesPlease?.urlOptions?.isEnabled("dev") ?? false;
document.querySelector<HTMLElement>("#generator-container")!.hidden = !developer;
document.querySelector<HTMLElement>("#dev-required")!.hidden = developer;

const trackSelect = document.querySelector<HTMLSelectElement>("#track-select")!;
const copyBtn = document.querySelector<HTMLButtonElement>("#copy-btn")!;
const preview = document.querySelector<HTMLPreElement>("#prompt-preview")!;

for (const [trackId, track] of Object.entries(trackCatalog)) {
  const option = document.createElement("option");
  option.value = trackId;
  option.textContent = `${track.label} (${trackId}, tier ${track.tier})`;
  trackSelect.append(option);
}

function selectedTrackId(): TrackCatalogId {
  return trackSelect.value as TrackCatalogId;
}

function renderSummary(): void {
  const summary = describeComposedCatalogTrack(selectedTrackId());
  preview.textContent = JSON.stringify(summary, null, 2);
}

async function copySummary(): Promise<void> {
  await navigator.clipboard.writeText(preview.textContent);
  const text = copyBtn.querySelector<HTMLElement>(".btn-text")!;
  text.textContent = "Copied";
  window.setTimeout(() => {
    text.textContent = "Copy JSON";
  }, 1400);
}

trackSelect.addEventListener("change", renderSummary);
copyBtn.addEventListener("click", () => {
  copySummary().catch(error => {
    console.error("Failed to copy composer summary.", error);
  });
});

renderSummary();
