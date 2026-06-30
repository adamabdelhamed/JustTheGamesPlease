import { showstopperFamily, type ShowstopperId } from "../CombatDefinition";

export interface ShowstopperTriggerUiElements {
  triggerButton: HTMLButtonElement;
  bankSlot?: HTMLElement | null;
  bankGlyph?: HTMLElement | null;
  bankLabel?: HTMLElement | null;
  readout?: HTMLElement | null;
}

export interface ShowstopperTriggerUiState {
  id: ShowstopperId | null;
  count?: number;
  active?: boolean;
  hidden?: boolean;
  disabled?: boolean;
  emptyText?: string;
}

export function syncShowstopperTriggerUi(elements: ShowstopperTriggerUiElements, state: ShowstopperTriggerUiState): void {
  const member = state.id ? showstopperFamily.members[state.id] : null;
  const count = Math.max(0, Math.floor(state.count ?? (member ? 1 : 0)));
  const label = member?.label ?? state.emptyText ?? "Showstopper";
  const bankState = state.active ? "active" : member ? "banked" : "empty";
  const disabled = Boolean(state.disabled) || !member;

  elements.triggerButton.hidden = Boolean(state.hidden);
  elements.triggerButton.disabled = disabled;
  elements.triggerButton.textContent = member ? labelWithCount(member.label, count) : state.emptyText ?? "Showstopper";

  if (elements.bankSlot) {
    elements.bankSlot.dataset.state = bankState;
    elements.bankSlot.setAttribute("role", "button");
    elements.bankSlot.setAttribute("aria-disabled", String(disabled));
    elements.bankSlot.tabIndex = disabled ? -1 : 0;
  }
  if (elements.bankGlyph) elements.bankGlyph.textContent = member ? (count > 1 ? String(count) : initialsForLabel(member.label)) : "-";
  if (elements.bankLabel) elements.bankLabel.textContent = member ? labelWithCount(member.label, count) : "EMPTY";
  if (elements.readout) {
    elements.readout.textContent = member ? `${labelWithCount(label, count)} banked` : "Bank empty";
  }
}

export function bindShowstopperTriggerUi(elements: ShowstopperTriggerUiElements, trigger: () => void, options: { emptyClick?: () => void } = {}): void {
  elements.triggerButton.addEventListener("click", trigger);
  elements.bankSlot?.addEventListener("click", () => {
    if (elements.bankSlot?.getAttribute("aria-disabled") === "true") {
      options.emptyClick?.();
      return;
    }
    trigger();
  });
  elements.bankSlot?.addEventListener("keydown", event => {
    if (event.key !== " " && event.key !== "Enter") return;
    event.preventDefault();
    if (elements.bankSlot?.getAttribute("aria-disabled") === "true") {
      options.emptyClick?.();
      return;
    }
    trigger();
  });
}

function initialsForLabel(label: string): string {
  return label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map(part => part[0]?.toUpperCase() ?? "")
    .join("");
}

function labelWithCount(label: string, count: number): string {
  return count > 1 ? `${label} x${count}` : label;
}
