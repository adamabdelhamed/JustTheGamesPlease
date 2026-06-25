import { NeonProjectile, NeonShapeActor, NeonShapeDisposal, NeonTopDownSceneRenderer, NeonVictoryExperience, neonPalette, type NeonPrimitive, type NeonTopDownShape } from "@just-the-games-please/neon-factory";
import { gunFamily, multiplierFamily, orbFamily, parseTrackDefinition, trackFamily, type GunId, type MultiplierId, type ParsedTrackEntity, type TrackMember } from "../CombatDefinition";
import { bindSquadInput } from "./input";
import { SquadModel } from "./squad";
import { AutoAimControlState, selectAutoAimOffset } from "./autoAim";
import { applyPortraitStage } from "./viewport";
import { actorInTopDownScene, shapeLabel, swarmShapes } from "./shapeVisuals";

interface Enemy { lane: 0 | 1; x: number; y: number; health: number; speedMultiplier: number; rowId: number; actor: NeonShapeActor; dying: boolean }
interface Projectile { lane: 0 | 1; x: number; y: number; damage: number; speed: number; radius: number; color: string; trail: string }
interface Pickup { lane: 0 | 1; x: number; y: number; gunId: GunId; level: number; speedMultiplier: number; actor: NeonShapeActor }
interface MultiplierPickup { lane: 0 | 1; x: number; y: number; multiplierId: MultiplierId; speedMultiplier: number; actor: NeonShapeActor }

const canvas = document.querySelector<HTMLCanvasElement>("#game-canvas")!;
const trackSelect = document.querySelector<HTMLElement>("#track-select")!;
const trackList = document.querySelector<HTMLElement>("#track-list")!;
const status = document.querySelector<HTMLElement>("#status")!;
const runStatus = document.querySelector<HTMLElement>("#run-status")!;
const result = document.querySelector<HTMLElement>("#result")!;
const resultTitle = document.querySelector<HTMLElement>("#result-title")!;
const resultDetail = document.querySelector<HTMLElement>("#result-detail")!;
const error = document.querySelector<HTMLElement>("#error")!;
const developerTools = document.querySelector<HTMLElement>("#developer-tools")!;
const gameElement = document.querySelector<HTMLElement>("#game")!;
developerTools.hidden = new URLSearchParams(location.search).get("dev") !== "1";
const defaultTrack = Object.values(trackFamily.members)[0];
applyPortraitStage(gameElement, defaultTrack.viewport);

try {
  const viewport = defaultTrack.viewport;
  const renderer = await NeonTopDownSceneRenderer.create(canvas, viewport.logicalWidth, viewport.logicalHeight);
  let activeTrack: TrackMember | null = null;
  let startedAt = 0;
  let lastFrame = performance.now();
  let playerLane: 0 | 1 = 0;
  let gunId: GunId = "pulsePistol";
  let gunLevel = 1;
  let cooldown = 0;
  let nextTrackEntity = 0;
  let trackEntities: ParsedTrackEntity[] = [];
  let breaches = 0;
  let enemies: Enemy[] = [];
  let projectiles: Projectile[] = [];
  let pickups: Pickup[] = [];
  let multipliers: MultiplierPickup[] = [];
  const squad = new SquadModel();
  const aimControl = new AutoAimControlState();
  let victory: NeonVictoryExperience | null = null;
  let failureReason = "";
  const playerActors: NeonShapeActor[] = [];
  const explodingPlayers: Array<{ actor: NeonShapeActor; x: number; y: number }> = [];

  const scale = () => 1;
  const laneX = (lane: number) => canvas.width * (lane === 0 ? .32 : .68);
  const entityX = (entity: ParsedTrackEntity) => laneX(entity.side === "left" ? 0 : 1) + (entity.laneIndex - 2) * 15 * scale();
  const playerY = () => canvas.height * .82;

  const resetToTracks = (): void => {
    activeTrack = null;
    result.hidden = true;
    trackSelect.hidden = false;
    status.textContent = "Choose a track. Tap either side to switch lanes; use the joystick to fine aim.";
    runStatus.textContent = "";
    enemies = [];
    projectiles = [];
    pickups = [];
    multipliers = [];
    victory = null;
    failureReason = "";
  };

  const startTrack = (track: TrackMember): void => {
    activeTrack = track;
    startedAt = performance.now();
    lastFrame = startedAt;
    const allEntities = parseTrackDefinition(track.definition);
    // Determine starting lane from player.start entity (default left if absent).
    const playerStart = allEntities.find(entity => entity.id === "player.start");
    const startLane: 0 | 1 = playerStart?.side === "right" ? 1 : 0;
    playerLane = startLane;
    gunId = track.startingGun;
    gunLevel = track.startingGunLevel;
    cooldown = 0;
    nextTrackEntity = 0;
    trackEntities = allEntities.filter(entity => entity.id !== "player.start");
    breaches = 0;
    enemies = [];
    projectiles = [];
    pickups = [];
    multipliers = [];
    squad.count = 1;
    playerActors.length = 0;
    playerActors.push(new NeonShapeActor({ shape: swarmShapes.player }));
    explodingPlayers.length = 0;
    squad.aimOffset = 0;
    squad.lane = startLane;
    squad.x = laneX(startLane);
    squad.targetX = laneX(startLane);
    victory = null;
    trackSelect.hidden = true;
    result.hidden = true;
    status.textContent = "Tap a side to switch lanes. Small joystick motion aims; full motion crosses lanes.";
  };


  trackList.innerHTML = Object.entries(trackFamily.members).map(([id, track]) => `
    <button class="track-card" data-track="${id}">
      <strong>${track.label}</strong><span>${track.description}</span><b>${track.durationSeconds}s →</b>
    </button>`).join("");
  trackList.querySelectorAll<HTMLButtonElement>("[data-track]").forEach(button => {
    button.addEventListener("click", () => startTrack(trackFamily.members[button.dataset.track as keyof typeof trackFamily.members]));
  });
  document.querySelector<HTMLButtonElement>("#back-to-tracks")!.addEventListener("click", resetToTracks);

  bindSquadInput(document.querySelector<HTMLElement>("#game")!, "#joystick", {
    lane: () => squad.lane,
    setLane: lane => {
      if (!activeTrack) return;
      squad.setLane(lane, laneX, performance.now());
      playerLane = lane;
      aimControl.laneSelected();
    },
    setAim: value => {
      if (!activeTrack) return;
      squad.setAim(value, canvas.width * .22, laneX);
      aimControl.aimChanged();
    },
    releaseAim: () => {
      aimControl.aimReleased();
    },
  });

  const fire = (): void => {
    const gun = gunFamily.members[gunId];
    const tuning = gun.levels.find(item => item.level === gunLevel) ?? gun.levels[0];
    const points = squad.points(playerY(), scale());
    for (const point of points) {
      const count = gun.shotPattern === "pairedSpread" ? tuning.projectileCount : 1;
      for (let pi = 0; pi < count; pi++) {
        // For pairedSpread guns, spread projectiles symmetrically around the aim point.
        const spreadOffset = count > 1
          ? (pi - (count - 1) / 2) * Math.tan((tuning.spreadDegrees * Math.PI) / 180) * tuning.projectileSpeed * .05
          : 0;
        projectiles.push({
          lane: playerLane,
          x: point.x + spreadOffset,
          y: playerY() - 20 * scale(),
          damage: tuning.damage,
          speed: tuning.projectileSpeed * scale(),
          radius: tuning.projectileRadius * scale(),
          color: neonPalette[gun.visualIdentity.projectileColor],
          trail: neonPalette[gun.visualIdentity.trailColor],
        });
      }
    }
    cooldown += 1 / tuning.fireRatePerSecond;
    window.gameAudio?.playRotated("Primary", 3);
  };

  const finish = (won: boolean): void => {
    if (!activeTrack) return;
    result.hidden = false;
    resultTitle.textContent = won ? "FLAWLESS RUN" : "TRACK FAILED";
    resultDetail.textContent = won ? "No enemy touched or escaped past you." : failureReason || `${breaches} enemy${breaches === 1 ? "" : "ies"} breached the defense.`;
    if (won) {
      victory = new NeonVictoryExperience({
        centerX: canvas.width / 2, centerY: canvas.height * .38,
        width: canvas.width, height: canvas.height, particleCount: 120,
      });
      window.gameAudio?.play("PuzzleComplete");
    } else {
      window.gameAudio?.play("GameOver");
    }
    activeTrack = null;
  };

  const syncPlayerActors = (): void => {
    while (playerActors.length < squad.count) playerActors.push(new NeonShapeActor({ shape: swarmShapes.player }));
    if (playerActors.length > squad.count) playerActors.length = squad.count;
  };

  const update = (now: number): void => {
    const delta = Math.min(.05, (now - lastFrame) / 1000);
    lastFrame = now;
    for (const item of [...explodingPlayers]) {
      item.actor.update(delta);
      if (item.actor.disposed) explodingPlayers.splice(explodingPlayers.indexOf(item), 1);
    }
    if (!activeTrack) return;
    const elapsed = (now - startedAt) / 1000;
    runStatus.textContent = `${gunFamily.members[gunId].label} · ${Math.max(0, activeTrack.durationSeconds - elapsed).toFixed(1)}s`;

    while (nextTrackEntity < trackEntities.length && trackEntities[nextTrackEntity].distanceFromPlayer <= elapsed) {
      const entity = trackEntities[nextTrackEntity++];
      const lane = entity.side === "left" ? 0 : 1;
      if (entity.id === "enemy.basic") {
        enemies.push({
          lane,
          x: entityX(entity),
          y: 110 * scale(),
          health: orbFamily.members.basicOrb.health * activeTrack.definition.balance.enemyHp,
          speedMultiplier: entity.speedMultiplier,
          rowId: entity.rowIndex,
          actor: new NeonShapeActor({ shape: swarmShapes.enemy }),
          dying: false,
        });
      } else if (entity.id.startsWith("pickup.weapon.gun.")) {
        const candidate = entity.id.slice("pickup.weapon.gun.".length);
        if (!(candidate in gunFamily.members)) throw new Error(`Track uses unknown gun id "${entity.id}".`);
        pickups.push({ lane, x: entityX(entity), y: 120 * scale(), gunId: candidate as GunId, level: 1, speedMultiplier: entity.speedMultiplier, actor: new NeonShapeActor({ shape: swarmShapes.gunPickup }) });
      } else if (entity.id === "pickup.unitMultiplier.2x") {
        multipliers.push({ lane, x: entityX(entity), y: 125 * scale(), multiplierId: "squadPlusOne", speedMultiplier: entity.speedMultiplier, actor: new NeonShapeActor({ shape: swarmShapes.multiplier }) });
      } else {
        throw new Error(`Track entity id "${entity.id}" is not supported by the lane runner.`);
      }
    }

    if (!aimControl.manual) {
      // Exclude dying enemies so the aim switches column the moment a kill lands.
      const laneEnemies = enemies.filter(enemy => enemy.lane === squad.lane && !enemy.dying);
      const colOffsets = squad.frontRowColumnOffsets(scale());
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), colOffsets, squad.aimOffset);
      squad.autoAim(offset, canvas.width * .22, laneX);
    }
    squad.update(delta);
    syncPlayerActors();
    gameElement.dataset.squadLane = String(squad.lane);
    gameElement.dataset.squadAim = squad.aimOffset.toFixed(2);

    cooldown -= delta;
    if (cooldown <= 0) fire();
    for (const shot of [...projectiles]) {
      shot.y -= shot.speed * delta;
      if (shot.y < 0) projectiles.splice(projectiles.indexOf(shot), 1);
      for (const enemy of [...enemies]) {
        if (enemy.dying) continue;
        // Add 4 px of forgiveness so visually-aligned shots always register a hit.
        const hitRadius = shot.radius + orbFamily.members.basicOrb.radius * scale() + 4;
        if (shot.lane !== enemy.lane || Math.hypot(shot.x - enemy.x, shot.y - enemy.y) > hitRadius) continue;
        enemy.health -= shot.damage;
        const impactMagnitude = (shot.damage + shot.radius * .12) / orbFamily.members.basicOrb.impactResistance;
        enemy.actor.impact({ direction: { x: 0, y: 1 }, magnitude: impactMagnitude });
        projectiles.splice(projectiles.indexOf(shot), 1);
        if (enemy.health <= 0) {
          enemy.dying = true;
          enemy.actor.explodeMagnitude = orbFamily.members.basicOrb.explosionMagnitude;
          enemy.actor.dispose(NeonShapeDisposal.Explode);
          window.gameAudio?.play("EnemyDestroyed");
        } else {
          window.gameAudio?.play("Hit");
        }
        break;
      }
    }
    for (const enemy of [...enemies]) {
      enemy.actor.setVelocity(0, 0).update(delta);
      enemy.y += orbFamily.members.basicOrb.speed * enemy.speedMultiplier * scale() * delta - enemy.actor.y * canvas.height / 2.5;
      enemy.actor.moveTo(0, 0);
      if (enemy.dying && enemy.actor.disposed) { enemies.splice(enemies.indexOf(enemy), 1); continue; }
      if (enemy.dying) continue;
      const points = squad.points(playerY(), scale());
      const hitIndex = points.findIndex(point => Math.hypot(point.x - enemy.x, point.y - enemy.y) <= orbFamily.members.basicOrb.radius * 3.2);
      if (hitIndex >= 0) {
        const point = points[hitIndex];
        const actor = playerActors[hitIndex] ?? new NeonShapeActor({ shape: swarmShapes.player });
        actor.explodeMagnitude = .55;
        actor.dispose(NeonShapeDisposal.Explode);
        explodingPlayers.push({ actor, x: point.x, y: point.y });
        playerActors.splice(hitIndex, 1);
        squad.remove();
        enemies.splice(enemies.indexOf(enemy), 1);
        window.gameAudio?.play("EnemyDestroyed");
        if (squad.count === 0) { failureReason = "The entire squad was destroyed on contact."; finish(false); return; }
        continue;
      }
      if (enemy.y >= playerY()) {
        breaches++;
        enemies.splice(enemies.indexOf(enemy), 1);
        window.gameAudio?.play("EnemyEscaped");
        failureReason = "An enemy passed the defense line.";
        finish(false);
        return;
      }
    }
    for (const pickup of [...pickups]) {
      pickup.actor.update(delta); pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        gunId = pickup.gunId;
        gunLevel = pickup.level;
        cooldown = 0;
        pickups.splice(pickups.indexOf(pickup), 1);
        window.gameAudio?.play("Pickup");
      } else if (pickup.y > canvas.height) pickups.splice(pickups.indexOf(pickup), 1);
    }
    for (const pickup of [...multipliers]) {
      pickup.actor.update(delta); pickup.y += 72 * pickup.speedMultiplier * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        squad.add(multiplierFamily.members[pickup.multiplierId].squadAdded);
        syncPlayerActors();
        multipliers.splice(multipliers.indexOf(pickup), 1);
        window.gameAudio?.play("Pickup");
      } else if (pickup.y > canvas.height) multipliers.splice(multipliers.indexOf(pickup), 1);
    }
    if (elapsed >= activeTrack.durationSeconds && enemies.length === 0) finish(breaches === 0);
  };

  const environment = (track: TrackMember, now: number): NeonPrimitive[] => {
    const s = scale();
    const pulse = .6 + Math.sin(now / 1000 * track.environment.pulseRate * Math.PI * 2) * .2;
    const items: NeonPrimitive[] = [];
    items.push({ x: canvas.width / 2, y: canvas.height * .76, width: canvas.width * .44, height: canvas.height * .46, color: neonPalette[track.environment.floorColor], secondaryColor: "#030712", glow: .1, intensity: .22, shape: "bolt" });
    items.push({ x: canvas.width / 2, y: canvas.height * .49, width: canvas.width * .34, height: 2 * s, color: neonPalette[track.environment.horizonColor], glow: .8, intensity: pulse, shape: "bolt" });
    for (let depth = 0; depth < 8; depth++) {
      const perspective = depth / 7;
      const y = canvas.height * (.53 + perspective * .38);
      const width = canvas.width * (.2 + perspective * .25);
      items.push({ x: canvas.width / 2, y, width, height: (1 + perspective * 1.5) * s, color: neonPalette[track.environment.floorColor], glow: .3, intensity: .18 + pulse * .18, shape: "bolt" });
    }
    for (const side of [-1, 1]) {
      for (let segment = 0; segment < 9; segment++) {
        const perspective = segment / 8;
        const x = canvas.width / 2 + side * canvas.width * (.1 + perspective * .13);
        const y = canvas.height * (.53 + perspective * .38);
        items.push({ x, y, width: (1 + perspective) * s, height: (18 + perspective * 42) * s, color: neonPalette[track.environment.crackColor], glow: .42, intensity: .22 + pulse * .2, shape: "bolt" });
      }
    }
    for (let index = 0; index < track.environment.crackDensity; index++) {
      const x = canvas.width * (.3 + ((index * 37) % 100) / 250);
      const y = canvas.height * (.56 + ((index * 61) % 100) / 250);
      items.push({ x, y, width: (1 + index % 3) * s, height: (20 + index % 5 * 12) * s, color: neonPalette[track.environment.crackColor], glow: .5, intensity: pulse * (.45 + index % 4 * .1), shape: index % 3 ? "bolt" : "spark" });
    }
    for (let index = 0; index < track.environment.airStreakCount; index++) {
      const x = canvas.width * (.12 + ((index * 53) % 100) / 130);
      const y = canvas.height * (.16 + ((index * 29 + now / 35) % 100) / 330);
      items.push({ x, y, width: 1.2 * s, height: (12 + index % 4 * 9) * s, color: neonPalette[track.environment.airColor], glow: .4, intensity: .3 + pulse * .25, shape: "bolt" });
    }
    return items;
  };

  const draw = (now: number): void => {
    const primitives = activeTrack ? environment(activeTrack, now) : [];
    const s = scale();
    if (activeTrack) {
      for (const point of squad.points(playerY(), s)) {
        const smear = Math.min(22 * s, Math.abs(squad.targetX - squad.x) * .45);
        if (smear > 2) primitives.push({ x: point.x - Math.sign(squad.targetX - squad.x) * smear * .5, y: point.y, width: smear, height: 2.2 * s, color: neonPalette.deepBlue, secondaryColor: neonPalette.cyan, glow: .45, intensity: .5, shape: "bolt" });
      }
      for (const shot of projectiles) {
        primitives.push(...new NeonProjectile({x:shot.x,y:shot.y,velocityY:-shot.speed,radius:shot.radius,length:shot.radius*2.5,trailLength:18*s,trailWidth:Math.max(1.2*s,shot.radius*.5),color:shot.color,trailColor:shot.trail,shape:"dart"}).primitives());
      }
      if (false) for (const pickup of pickups) {
        const visual = gunFamily.members[pickup.gunId].visualIdentity;
        const pColor = neonPalette[visual.projectileColor];
        const tColor = neonPalette[visual.trailColor];
        const px = laneX(pickup.lane);
        // Wobble: gentle ±15° rocking → horizontal offset
        const wobble = Math.sin(now / 420 + pickup.y * 0.07) * 4.5 * s;
        const wx = px + wobble;
        // Scale pulse
        const pulse = 1 + Math.sin(now / 600 + pickup.y * 0.05) * 0.08;
        // Outer bloom halo
        primitives.push({ x: wx, y: pickup.y, width: 28 * s * pulse, color: pColor, secondaryColor: tColor, glow: .9, intensity: .22, shape: "circle" });
        // Diamond glassy panel (neon edges)
        primitives.push({ x: wx, y: pickup.y, width: 18 * s * pulse, color: pColor, secondaryColor: tColor, glow: .85, intensity: 1.05, shape: "diamond" });
        // Inner weapon icon (silhouette varies per projectile shape)
        const iconShape = visual.projectileShape;
        if (iconShape === "needle") {
          // Three vertical needle lines
          for (let n = -1; n <= 1; n++) primitives.push({ x: wx + n * 3.2 * s, y: pickup.y, width: 1.2 * s, height: 8 * s, color: pColor, secondaryColor: tColor, glow: .6, intensity: 1.1, shape: "bolt" });
        } else if (iconShape === "slug") {
          // Single thick bolt
          primitives.push({ x: wx, y: pickup.y, width: 3.5 * s, height: 9 * s, color: pColor, secondaryColor: tColor, glow: .7, intensity: 1.15, shape: "bolt" });
        } else if (iconShape === "splitBolt") {
          // Two diverging bolts
          primitives.push({ x: wx - 2.5 * s, y: pickup.y - 1 * s, width: 1.5 * s, height: 8 * s, color: pColor, secondaryColor: tColor, glow: .6, intensity: 1.1, shape: "bolt" });
          primitives.push({ x: wx + 2.5 * s, y: pickup.y - 1 * s, width: 1.5 * s, height: 8 * s, color: pColor, secondaryColor: tColor, glow: .6, intensity: 1.1, shape: "bolt" });
        } else {
          // Default dart: single upward bolt
          primitives.push({ x: wx, y: pickup.y - 1 * s, width: 2 * s, height: 9 * s, color: pColor, secondaryColor: tColor, glow: .65, intensity: 1.1, shape: "bolt" });
        }
        // Sparkle particles (2-3 drifting)
        for (let sp = 0; sp < 3; sp++) {
          const angle = now / 900 + sp * 2.09 + pickup.y;
          const dist = (9 + sp * 3) * s * pulse;
          primitives.push({ x: wx + Math.cos(angle) * dist, y: pickup.y + Math.sin(angle) * dist * 0.7, width: 1.4 * s, color: pColor, glow: .9, intensity: .55 + Math.sin(now / 300 + sp) * .25, shape: "circle" });
        }
      }
      if (false) for (const pickup of multipliers) {
        const spec = multiplierFamily.members[pickup.multiplierId];
        const pColor = neonPalette[spec.pickupColor];
        const tColor = neonPalette[spec.coreColor];
        const px = laneX(pickup.lane);
        // Wobble & scale pulse matching weapon pickup style
        const wobble = Math.sin(now / 420 + pickup.y * 0.07) * 4.5 * s;
        const wx = px + wobble;
        const pulse = 1 + Math.sin(now / 600 + pickup.y * 0.05) * 0.08;

        // Outer bloom halo (different size/glow for distinction)
        primitives.push({ x: wx, y: pickup.y, width: 28 * s * pulse, color: pColor, secondaryColor: tColor, glow: .95, intensity: .25, shape: "circle" });
        // Pentagon glassy panel (neon edges)
        primitives.push({ x: wx, y: pickup.y, width: 19 * s * pulse, color: pColor, secondaryColor: tColor, glow: .9, intensity: 1.1, shape: "pentagon" });

        // Inner glyph for "+1" (using simple lines/spark for + and bolt/line for 1)
        // Draw the vertical and horizontal bars of "+"
        primitives.push({ x: wx - 3.5 * s, y: pickup.y, width: 1.0 * s, height: 6.0 * s, color: pColor, secondaryColor: tColor, glow: .6, intensity: 1.15, shape: "bolt" });
        primitives.push({ x: wx - 3.5 * s, y: pickup.y, width: 6.0 * s, height: 1.0 * s, color: pColor, secondaryColor: tColor, glow: .6, intensity: 1.15, shape: "bolt" });
        // Draw the "1" (thick vertical line with a small notch)
        primitives.push({ x: wx + 2.5 * s, y: pickup.y, width: 1.4 * s, height: 7.0 * s, color: pColor, secondaryColor: tColor, glow: .75, intensity: 1.2, shape: "bolt" });
        primitives.push({ x: wx + 1.2 * s, y: pickup.y - 2.5 * s, width: 1.5 * s, height: 1.0 * s, color: pColor, secondaryColor: tColor, glow: .6, intensity: 1.15, shape: "bolt" });

        // Sparkle particles
        for (let sp = 0; sp < 3; sp++) {
          const angle = now / 900 + sp * 2.09 + pickup.y;
          const dist = (10 + sp * 3.5) * s * pulse;
          primitives.push({ x: wx + Math.cos(angle) * dist, y: pickup.y + Math.sin(angle) * dist * 0.7, width: 1.4 * s, color: pColor, glow: .95, intensity: .6 + Math.sin(now / 300 + sp) * .25, shape: "circle" });
        }
      }
    }
    if (victory) primitives.push(...victory.primitives(now));
    const shapeInstances: NeonTopDownShape[] = [];
    const playerSize = 14;
    for (const [index, point] of squad.points(playerY(), s).entries()) {
      const actor = playerActors[index] ?? new NeonShapeActor({ shape: swarmShapes.player });
      shapeInstances.push(actorInTopDownScene(actor, point.x, point.y, playerSize, { rotationX: Math.sin(now / 650) * .12 }));
    }
    for (const item of explodingPlayers) shapeInstances.push(actorInTopDownScene(item.actor, item.x, item.y, playerSize));
    for (const enemy of enemies) shapeInstances.push(actorInTopDownScene(enemy.actor, enemy.x, enemy.y, 18, { rotationY: Math.sin(now / 700 + enemy.rowId) * .18 }));
    for (const pickup of pickups) {
      const gun = gunFamily.members[pickup.gunId];
      pickup.actor.label = shapeLabel(gun.label, "above", 10, 7);
      pickup.actor.color = neonPalette[gun.visualIdentity.projectileColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 15));
    }
    for (const pickup of multipliers) {
      const spec = multiplierFamily.members[pickup.multiplierId];
      pickup.actor.label = shapeLabel(`${spec.squadAdded + 1}x`, "center", 11, 0);
      pickup.actor.color = neonPalette[spec.pickupColor];
      shapeInstances.push(actorInTopDownScene(pickup.actor, pickup.x, pickup.y, 16));
    }
    renderer.render({ primitives, shapes: shapeInstances }, now / 1000);
  };

  const frame = (now: number) => {
    update(now);
    draw(now);
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}

declare global {
  interface Window {
    gameAudio?: {
      play(id: string): void;
      playRotated(id: string, alternatives: number): void;
    };
  }
}
