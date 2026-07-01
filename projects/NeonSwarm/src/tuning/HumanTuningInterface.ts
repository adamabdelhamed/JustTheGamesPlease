import type { TrackMenuRenderer } from "../trackMenuRenderer";
import {
  applyTrackMenuHumanTuningState,
  defaultTrackMenuHumanTuningState,
  humanTuningControls,
  serializeTrackMenuHumanTuningState,
  shapeLineControls,
  type TrackMenuHumanTuningState,
} from "./trackMenuHumanTuning";

interface HumanTuningInterfaceOptions {
  host: ParentNode;
  trackMenu: TrackMenuRenderer;
}

export class HumanTuningInterface {
  #trackMenu: TrackMenuRenderer;
  #root: HTMLElement;
  #copyStatus: HTMLElement;
  #state: TrackMenuHumanTuningState;

  constructor(options: HumanTuningInterfaceOptions) {
    this.#trackMenu = options.trackMenu;
    this.#state = applyTrackMenuHumanTuningState(defaultTrackMenuHumanTuningState());
    this.#root = document.createElement("aside");
    this.#root.className = "human-tuning-interface";
    this.#root.setAttribute("aria-label", "Human tuning interface");
    this.#copyStatus = document.createElement("p");
    this.#copyStatus.className = "human-tuning-interface__copy-status";
    this.#root.append(this.#buildHeader(), this.#buildControls(), this.#buildCopyArea());
    options.host.append(this.#root);
    this.#syncExperience();
  }

  #buildHeader(): HTMLElement {
    const header = document.createElement("header");
    const title = document.createElement("h2");
    title.textContent = "Track Tuning";
    const copy = document.createElement("button");
    copy.type = "button";
    copy.textContent = "Copy";
    copy.addEventListener("click", async () => {
      await navigator.clipboard?.writeText(serializeTrackMenuHumanTuningState(this.#state)).catch(() => undefined);
      this.#copyStatus.textContent = "Copied tuning values";
    });
    const reset = document.createElement("button");
    reset.type = "button";
    reset.textContent = "Reset";
    reset.addEventListener("click", () => {
      this.#state = applyTrackMenuHumanTuningState(defaultTrackMenuHumanTuningState());
      this.#root.replaceChildren(this.#buildHeader(), this.#buildControls(), this.#buildCopyArea());
      this.#syncExperience();
    });
    header.append(title, copy, reset);
    return header;
  }

  #buildControls(): HTMLElement {
    const body = document.createElement("div");
    body.className = "human-tuning-interface__body";
    const groups = new Map<string, HTMLElement>();
    for (const control of humanTuningControls) {
      const group = this.#group(groups, control.group);
      group.append(this.#numberSlider({
        tuningKey: control.key,
        label: control.label,
        value: this.#state.values[control.key],
        min: control.min,
        max: control.max,
        step: control.step,
        unit: control.unit,
        onInput: value => {
          this.#state.values[control.key] = value;
          this.#syncExperience();
        },
      }));
    }

    const shapeGroup = this.#group(groups, "Shape Lines");
    for (const control of shapeLineControls) {
      shapeGroup.append(this.#numberSlider({
        tuningKey: `shape.${control.shapeId}`,
        label: control.label,
        value: this.#state.shapeLineThickness[control.shapeId],
        min: control.min,
        max: control.max,
        step: control.step,
        unit: control.unit,
        onInput: value => {
          this.#state.shapeLineThickness[control.shapeId] = value;
          this.#syncExperience();
        },
      }));
    }

    body.append(...groups.values());
    return body;
  }

  #group(groups: Map<string, HTMLElement>, label: string): HTMLElement {
    const existing = groups.get(label);
    if (existing) return existing;
    const section = document.createElement("section");
    section.className = "human-tuning-interface__group";
    const title = document.createElement("h3");
    title.textContent = label;
    section.append(title);
    groups.set(label, section);
    return section;
  }

  #numberSlider(options: {
    tuningKey: string;
    label: string;
    value: number;
    min: number;
    max: number;
    step: number;
    unit: string;
    onInput(value: number): void;
  }): HTMLElement {
    const row = document.createElement("label");
    row.className = "human-tuning-interface__control";
    const top = document.createElement("span");
    const name = document.createElement("b");
    name.textContent = options.label;
    const value = document.createElement("output");
    const format = (next: number): string => `${Number(next.toFixed(3))} ${options.unit}`;
    value.value = format(options.value);
    top.append(name, value);
    const input = document.createElement("input");
    input.type = "range";
    input.dataset.tuningKey = options.tuningKey;
    input.min = String(options.min);
    input.max = String(options.max);
    input.step = String(options.step);
    input.value = String(options.value);
    input.addEventListener("input", () => {
      const next = Number(input.value);
      value.value = format(next);
      options.onInput(next);
    });
    row.append(top, input);
    return row;
  }

  #buildCopyArea(): HTMLElement {
    const section = document.createElement("section");
    section.className = "human-tuning-interface__copy";
    this.#copyStatus.textContent = "Use Copy to capture current values.";
    section.append(this.#copyStatus);
    return section;
  }

  #syncExperience(): void {
    this.#state = applyTrackMenuHumanTuningState(this.#state);
    document.documentElement.style.setProperty("--track-menu-logo-font-size", `${this.#state.values.headerLogoFontSize}px`);
    document.documentElement.style.setProperty("--track-menu-subtitle-font-size", `${this.#state.values.headerSubtitleFontSize / 16}rem`);
    this.#trackMenu.updateTuning();
  }
}
