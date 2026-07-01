import {
  getNeonShape,
  NeonTopDownSceneRenderer,
  type NeonPrimitive,
  type NeonTopDownShape,
} from "@just-the-games-please/neon-factory";
import type { TrackFamilyDefinition, TrackFamilyId, TrackFamilyMember, TrackId } from "../CombatDefinition";
import { trackCatalog, trackFamilyCatalog, trackThemeCatalog } from "../CombatDefinition/tracks";
import { starsForScore, trackProgressSummary, trackUnlocked, type TrackProgress } from "./trackProgress";
import { trackMenuTuning as tune } from "./trackMenuTuning";

type TrackRoute = (trackId: TrackId) => string;

interface TrackButtonBounds {
  trackId: TrackId;
  familyLabel: string;
  trackLabel: string;
  unlocked: boolean;
  x: number;
  y: number;
  size: number;
}

interface TrackFamilyVisual {
  familyId: TrackFamilyId;
  label: string;
  accent: string;
  themeShapeIds: readonly string[];
  y: number;
  unlocked: boolean;
  tracks: TrackVisual[];
}

interface TrackVisual {
  trackId: TrackId;
  label: string;
  index: number;
  x: number;
  y: number;
  unlocked: boolean;
  completed: boolean;
  stars: 0 | 1 | 2 | 3;
  highScore: number;
}

const accents = ["#ff3bd5", "#20eaff", "#9b42ff", "#4b86ff", "#ffb23a", "#70ffd0"] as const;

const requiredShape = (id: string) => {
  const shape = getNeonShape(id);
  if (!shape) throw new Error(`NeonFactory shape "${id}" is required by the track menu.`);
  return shape;
};

function lineBetween(x1: number, y1: number, x2: number, y2: number, width: number, color: string, intensity: number, glow: number): NeonPrimitive {
  const dx = x2 - x1;
  const dy = y2 - y1;
  return {
    x: (x1 + x2) / 2,
    y: (y1 + y2) / 2,
    width,
    height: Math.hypot(dx, dy) / 2,
    color,
    secondaryColor: "#ffffff",
    glow,
    intensity,
    shape: "line",
    rotation: Math.atan2(-dx, dy),
  };
}

function wobble(seed: number, time: number): { x: number; y: number; scale: number; rotation: number } {
  const phase = time * tune.wobbleSpeed + seed * 1.73;
  return {
    x: Math.sin(phase) * tune.wobblePixels + Math.sin(phase * .43 + seed) * tune.wobblePixels * .35,
    y: Math.cos(phase * .87) * tune.wobblePixels * .55,
    scale: 1 + Math.sin(phase * .72 + seed) * tune.wobbleScale,
    rotation: Math.sin(phase * .58 + seed * .31) * tune.wobbleRotation,
  };
}

function lineThicknessForShape(shapeId: string): number {
  return tune.nodeLineWidthByShape[shapeId] ?? tune.nodeLineWidth;
}

export class TrackMenuRenderer {
  #renderer: NeonTopDownSceneRenderer;
  #canvas: HTMLCanvasElement;
  #buttonLayer: HTMLElement;
  #labelLayer: HTMLElement;
  #trackFamily: TrackFamilyDefinition;
  #route: TrackRoute;
  #progress: TrackProgress;
  #devMode: boolean;
  #families: TrackFamilyVisual[] = [];
  #contentHeight = 800;
  #hoveredTrackId: TrackId | null = null;
  #animationFrame = 0;
  #lastWidth = 0;

  private constructor(
    renderer: NeonTopDownSceneRenderer,
    canvas: HTMLCanvasElement,
    buttonLayer: HTMLElement,
    labelLayer: HTMLElement,
    trackFamily: TrackFamilyDefinition,
    route: TrackRoute,
    progress: TrackProgress,
    devMode: boolean,
  ) {
    this.#renderer = renderer;
    this.#canvas = canvas;
    this.#buttonLayer = buttonLayer;
    this.#labelLayer = labelLayer;
    this.#trackFamily = trackFamily;
    this.#route = route;
    this.#progress = progress;
    this.#devMode = devMode;
    this.#families = this.#createLayout();
    this.#contentHeight = this.#measureContentHeight();
    this.#syncCssSize();
    this.#syncInteractionLayer();
    this.#syncLabels();
  }

  static async create(options: {
    canvas: HTMLCanvasElement;
    buttonLayer: HTMLElement;
    labelLayer: HTMLElement;
    trackFamily: TrackFamilyDefinition;
    route: TrackRoute;
    progress: TrackProgress;
    devMode?: boolean;
  }): Promise<TrackMenuRenderer> {
    const contentHeight = TrackMenuRenderer.measureTrackFamily(options.trackFamily);
    const renderer = await NeonTopDownSceneRenderer.create(options.canvas, tune.logicalWidth, contentHeight);
    return new TrackMenuRenderer(renderer, options.canvas, options.buttonLayer, options.labelLayer, options.trackFamily, options.route, options.progress, Boolean(options.devMode));
  }

  start(): void {
    const tick = (timeMs: number) => {
      this.#syncCssSize();
      this.#renderer.render(this.#buildScene(timeMs / 1000), timeMs / 1000);
      this.#animationFrame = requestAnimationFrame(tick);
    };
    this.#animationFrame = requestAnimationFrame(tick);
  }

  destroy(): void {
    cancelAnimationFrame(this.#animationFrame);
    this.#renderer.destroy();
  }

  updateProgress(progress: TrackProgress): void {
    this.#progress = progress;
    this.updateTuning();
  }

  updateTuning(): void {
    this.#families = this.#createLayout();
    this.#contentHeight = this.#measureContentHeight();
    this.#lastWidth = 0;
    this.#syncCssSize();
    this.#syncInteractionLayer();
    this.#syncLabels();
  }

  static measureTrackFamily(trackFamily: TrackFamilyDefinition): number {
    return tune.heroHeight
      + Object.keys(trackFamily.families).length * tune.familyHeight
      + Math.max(0, Object.keys(trackFamily.families).length - 1) * tune.familyGap
      + tune.footerPadding;
  }

  #measureContentHeight(): number {
    return TrackMenuRenderer.measureTrackFamily(this.#trackFamily);
  }

  #createLayout(): TrackFamilyVisual[] {
    return (Object.entries(this.#trackFamily.families) as [TrackFamilyId, TrackFamilyMember<TrackId>][])
      .map(([familyId, family], familyIndex) => {
        const y = tune.heroHeight + familyIndex * (tune.familyHeight + tune.familyGap);
        const familyCatalog = trackFamilyCatalog[familyId];
        const firstTrackId = family.trackIds[0];
        const theme = firstTrackId ? trackCatalog[firstTrackId].theme : "gunSchool";
        const accent = familyCatalog?.accent ?? accents[familyIndex % accents.length];
        return {
          familyId,
          label: family.label,
          accent,
          themeShapeIds: trackThemeCatalog[theme].nodeShapeIds,
          y,
          unlocked: family.trackIds.some(trackId => trackUnlocked(trackId, this.#progress, { devMode: this.#devMode })),
          tracks: family.trackIds.map((trackId, trackIndex) => ({
            trackId,
            label: this.#trackFamily.members[trackId].label,
            index: trackIndex,
            x: tune.trackRowX + trackIndex * (tune.trackNodeSize + tune.trackNodeGap),
            y: y + tune.trackRowY,
            unlocked: trackUnlocked(trackId, this.#progress, { devMode: this.#devMode }),
            completed: this.#progress.completedTrackIds.includes(trackId),
            stars: starsForScore(this.#progress.highScores[trackId] ?? 0),
            highScore: this.#progress.highScores[trackId] ?? 0,
          })),
        };
      });
  }

  #syncCssSize(): void {
    const cssWidth = this.#canvas.parentElement?.clientWidth ?? this.#canvas.clientWidth;
    if (cssWidth === this.#lastWidth) return;
    this.#lastWidth = cssWidth;
    const cssHeight = this.#contentHeight / tune.logicalWidth * cssWidth;
    this.#canvas.style.width = "100%";
    this.#canvas.style.height = `${cssHeight}px`;
    this.#buttonLayer.style.height = `${cssHeight}px`;
    this.#labelLayer.style.height = `${cssHeight}px`;
  }

  #logicalToCss(value: number): string {
    return `${value / tune.logicalWidth * 100}%`;
  }

  #syncInteractionLayer(): void {
    const bounds = this.#families.flatMap(family => family.tracks.map(track => ({
      trackId: track.trackId,
      familyLabel: family.label,
      trackLabel: track.label,
      unlocked: track.unlocked,
      x: track.x,
      y: track.y,
      size: tune.hitTargetSize,
    } satisfies TrackButtonBounds)));

    this.#buttonLayer.replaceChildren(...bounds.map(bound => {
      const anchor = document.createElement("a");
      anchor.className = `track-menu-hit${bound.unlocked ? "" : " track-menu-hit--locked"}`;
      if (bound.unlocked) anchor.href = this.#route(bound.trackId);
      else anchor.setAttribute("aria-disabled", "true");
      anchor.dataset.track = bound.trackId;
      anchor.setAttribute("aria-label", `${bound.familyLabel}, ${bound.trackLabel}`);
      Object.assign(anchor.style, {
        left: this.#logicalToCss(bound.x - bound.size / 2),
        top: `${(bound.y - bound.size / 2) / this.#contentHeight * 100}%`,
        width: this.#logicalToCss(bound.size),
        height: `${bound.size / this.#contentHeight * 100}%`,
      });
      anchor.addEventListener("pointerenter", () => { this.#hoveredTrackId = bound.trackId; });
      anchor.addEventListener("pointerleave", () => { if (this.#hoveredTrackId === bound.trackId) this.#hoveredTrackId = null; });
      anchor.addEventListener("focus", () => { this.#hoveredTrackId = bound.trackId; });
      anchor.addEventListener("blur", () => { if (this.#hoveredTrackId === bound.trackId) this.#hoveredTrackId = null; });
      anchor.addEventListener("click", event => {
        if (bound.unlocked) return;
        event.preventDefault();
      });
      return anchor;
    }));
  }

  #syncLabels(): void {
    const labels: HTMLElement[] = [];
    const summary = trackProgressSummary(this.#progress, this.#trackFamily);
    const progressLabel = document.createElement("div");
    progressLabel.className = "track-menu-progress";
    progressLabel.textContent = `${summary.completed}-${summary.total} tracks completed`;
    Object.assign(progressLabel.style, {
      top: `${tune.progressTop / this.#contentHeight * 100}%`,
      fontSize: `${tune.progressFontSize}px`,
    });
    labels.push(progressLabel);
    this.#families.forEach(family => {
      const familyLabel = document.createElement("section");
      familyLabel.className = `track-menu-family-label${family.unlocked ? "" : " track-menu-family-label--locked"}`;
      familyLabel.setAttribute("aria-hidden", "true");
      familyLabel.innerHTML = `<h2>${family.label}</h2>`;
      Object.assign(familyLabel.style, {
        left: this.#logicalToCss(tune.titleX),
        top: `${(family.y + tune.titleY) / this.#contentHeight * 100}%`,
        fontSize: `${tune.familyTitleFontSize}px`,
      });
      familyLabel.style.setProperty("--track-family-accent", family.accent);
      labels.push(familyLabel);

      family.tracks.forEach(track => {
        const trackLabel = document.createElement("div");
        trackLabel.className = [
          "track-menu-track-label",
          track.unlocked ? "" : "track-menu-track-label--locked",
          track.highScore > 100 ? "track-menu-track-label--over-score" : "",
        ].filter(Boolean).join(" ");
        trackLabel.setAttribute("aria-hidden", "true");
        const stars = Array.from({ length: 3 }, (_, index) => {
          const filled = index < track.stars && track.completed;
          return filled
            ? `<span class="is-filled" style="--track-star-color:${family.accent}">★</span>`
            : "<span>★</span>";
        }).join("");
        trackLabel.innerHTML = `<strong>${track.label}</strong><small>${stars}</small>`;
        Object.assign(trackLabel.style, {
          left: this.#logicalToCss(track.x - tune.trackLabelWidth / 2),
          top: `${(track.y + tune.trackLabelOffsetY) / this.#contentHeight * 100}%`,
          width: this.#logicalToCss(tune.trackLabelWidth),
          fontSize: `${tune.trackLabelFontSize}px`,
        });
        trackLabel.style.setProperty("--track-star-size", `${tune.progressStarSize}px`);
        trackLabel.style.setProperty("--track-star-gap", `${tune.progressStarGap}px`);
        trackLabel.style.setProperty("--track-family-accent", family.accent);
        labels.push(trackLabel);
      });
    });
    this.#labelLayer.replaceChildren(...labels);
  }

  #buildScene(time: number): { primitives: NeonPrimitive[]; shapes: NeonTopDownShape[] } {
    const primitives: NeonPrimitive[] = [];
    const shapes: NeonTopDownShape[] = [];
    this.#addBackground(primitives, time);
    this.#families.forEach((family, familyIndex) => this.#addFamily(family, familyIndex, primitives, shapes, time));
    return { primitives, shapes };
  }

  #addBackground(primitives: NeonPrimitive[], time: number): void {
    for (let i = 0; i < tune.starCount; i++) {
      const x = (Math.sin(i * 91.7) * 43758.54 % 1 + 1) % 1 * tune.logicalWidth;
      const y = (Math.sin(i * 37.1 + 4.2) * 18433.17 % 1 + 1) % 1 * this.#contentHeight;
      const pulse = .7 + Math.sin(time * (1.1 + i % 5 * .13) + i) * .3;
      primitives.push({
        x, y,
        width: .8 + i % 3 * .35,
        height: .8 + i % 3 * .35,
        color: i % 4 === 0 ? "#20eaff" : i % 7 === 0 ? "#ff3bd5" : "#ffffff",
        secondaryColor: "#ffffff",
        glow: .7,
        intensity: .35 * pulse,
        shape: "circle",
      });
    }
    const gridY = Math.min(this.#contentHeight - 110, 330 + Math.sin(time * .27) * 6);
    for (let x = -30; x <= tune.logicalWidth + 30; x += 42) {
      primitives.push(lineBetween(x, gridY, x + 48, this.#contentHeight + 40, .9, "#20eaff", .13, .4));
    }
    for (let y = gridY; y <= this.#contentHeight + 30; y += 42) {
      primitives.push(lineBetween(-20, y, tune.logicalWidth + 20, y + 18, .8, "#9b42ff", .12, .35));
    }
  }

  #addFamily(family: TrackFamilyVisual, familyIndex: number, primitives: NeonPrimitive[], shapes: NeonTopDownShape[], time: number): void {
    const x = tune.familyPaddingX;
    const y = family.y;
    const width = tune.logicalWidth - tune.familyPaddingX * 2;
    const height = tune.familyHeight;
    const cut = tune.familyCornerCut;
    const familyHovered = family.tracks.some(track => track.trackId === this.#hoveredTrackId);
    const intensity = family.unlocked ? (familyHovered ? tune.hoverEnergy : tune.idleEnergy) : tune.lockedEnergy;
    const glow = family.unlocked ? (familyHovered ? tune.hoverGlow : tune.idleGlow) : tune.lockedGlow;
    const cornerOverlap = tune.panelLineWidth * .42;
    const panelPoints: [number, number][] = [
      [x + cut - cornerOverlap, y], [x + width - cut + cornerOverlap, y], [x + width + cornerOverlap, y + cut - cornerOverlap],
      [x + width + cornerOverlap, y + height - cut + cornerOverlap], [x + width - cut + cornerOverlap, y + height],
      [x + cut - cornerOverlap, y + height], [x - cornerOverlap, y + height - cut + cornerOverlap], [x - cornerOverlap, y + cut - cornerOverlap],
    ];
    panelPoints.forEach((point, index) => {
      const next = panelPoints[(index + 1) % panelPoints.length];
      primitives.push(lineBetween(point[0], point[1], next[0], next[1], tune.panelLineWidth, family.accent, intensity, glow));
    });
    const innerInset = 6;
    const innerPoints = panelPoints.map(([px, py]) => [
      px < x + width / 2 ? px + innerInset : px - innerInset,
      py < y + height / 2 ? py + innerInset : py - innerInset,
    ] as [number, number]);
    innerPoints.forEach((point, index) => {
      const next = innerPoints[(index + 1) % innerPoints.length];
      primitives.push(lineBetween(point[0], point[1], next[0], next[1], tune.panelInnerLineWidth, family.accent, intensity * .48, glow * .7));
    });
    const scan = ((time * tune.scanSpeed + familyIndex * .23) % 1) * (width + 120) - 60;
    primitives.push(lineBetween(x + scan - 26, y + 8, x + scan + 16, y + height - 8, 2.8, family.accent, .42, .55));

    const first = family.tracks[0];
    const last = family.tracks[family.tracks.length - 1];
    if (first && last) {
      primitives.push(lineBetween(first.x, first.y, last.x, last.y, tune.connectorLineWidth, family.accent, intensity * .82, glow));
    }
    family.tracks.forEach(track => this.#addTrackNode(family, track, primitives, shapes, time));
  }

  #addTrackNode(family: TrackFamilyVisual, track: TrackVisual, primitives: NeonPrimitive[], shapes: NeonTopDownShape[], time: number): void {
    const hovered = this.#hoveredTrackId === track.trackId;
    const trackHoverEnergy = tune.idleEnergy;
    const trackHoverGlow = tune.idleGlow;
    const energy = track.unlocked ? (hovered ? trackHoverEnergy : trackHoverEnergy * .4) : tune.lockedEnergy;
    const glow = track.unlocked ? (hovered ? trackHoverGlow : trackHoverGlow * .4) : tune.lockedGlow;
    const wob = wobble(track.index + family.y * .011, time);
    primitives.push({
      x: track.x + wob.x,
      y: track.y + wob.y,
      width: tune.trackNodeSize * .66 * wob.scale,
      height: tune.trackNodeSize * .66 * wob.scale,
      color: track.unlocked ? family.accent : "#8d96aa",
      secondaryColor: "#ffffff",
      glow,
      intensity: energy * .66,
      shape: "diamond",
      rotation: Math.PI / 4 + wob.rotation,
    });
    const shapeId = family.themeShapeIds[track.index % family.themeShapeIds.length];
    shapes.push({
      shape: requiredShape(shapeId),
      x: track.x + wob.x,
      y: track.y + wob.y,
      size: tune.trackNodeSize * .72 * wob.scale,
      color: track.unlocked ? family.accent : "#8d96aa",
      rotationZ: wob.rotation + time * .16,
      lineThickness: lineThicknessForShape(shapeId),
      glow,
      energyIntensity: energy,
      energyCoverage: hovered ? .76 : .48,
      energySpeed: hovered ? 1.9 : 1.2,
      energyBleed: hovered ? .82 : .52,
      opacity: track.unlocked ? 1 : .5,
      label: {
        text: String(track.index + 1),
        position: "center",
        fontSize: tune.trackNodeLabelFontSize,
        fontWeight: 900,
      },
    });
  }
}
