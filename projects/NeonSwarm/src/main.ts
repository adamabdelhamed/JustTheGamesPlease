import { NeonPrimitiveRenderer, NeonVictoryExperience, neonPalette, type NeonPrimitive } from "@just-the-games-please/neon-factory";
import { gunFamily, multiplierFamily, orbFamily, trackFamily, type GunId, type MultiplierId, type TrackMember } from "../CombatDefinition";
import { bindSquadInput } from "./input";
import { SquadModel } from "./squad";
import { AutoAimControlState, selectAutoAimOffset } from "./autoAim";
import { applyPortraitStage } from "./viewport";

interface Enemy { lane: 0 | 1; x: number; y: number; health: number; rowId: number }
interface Projectile { lane: 0 | 1; x: number; y: number; damage: number; speed: number; radius: number; color: string; trail: string }
interface Pickup { lane: 0 | 1; y: number; gunId: GunId; level: number }
interface MultiplierPickup { lane: 0 | 1; y: number; multiplierId: MultiplierId }

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
applyPortraitStage(gameElement, trackFamily.members.electricCauseway.viewport);

try {
  const renderer = await NeonPrimitiveRenderer.create(canvas);
  const viewport = trackFamily.members.electricCauseway.viewport;
  renderer.setLogicalSize(viewport.logicalWidth, viewport.logicalHeight);
  let activeTrack: TrackMember | null = null;
  let startedAt = 0;
  let lastFrame = performance.now();
  let playerLane: 0 | 1 = 0;
  let gunId: GunId = "pulsePistol";
  let gunLevel = 1;
  let cooldown = 0;
  let nextEnemy = 0;
  let nextPickup = 0;
  let nextMultiplier = 0;
  let breaches = 0;
  let enemies: Enemy[] = [];
  let projectiles: Projectile[] = [];
  let pickups: Pickup[] = [];
  let multipliers: MultiplierPickup[] = [];
  const squad = new SquadModel();
  const aimControl = new AutoAimControlState();
  let victory: NeonVictoryExperience | null = null;

  const scale = () => 1;
  const laneX = (lane: number) => canvas.width * (lane === 0 ? .39 : .61);
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
  };

  const startTrack = (track: TrackMember): void => {
    activeTrack = track;
    startedAt = performance.now();
    lastFrame = startedAt;
    playerLane = 0;
    gunId = track.startingGun;
    gunLevel = track.startingGunLevel;
    cooldown = 0;
    nextEnemy = 0;
    nextPickup = 0;
    nextMultiplier = 0;
    breaches = 0;
    enemies = [];
    projectiles = [];
    pickups = [];
    multipliers = [];
    squad.count = 1;
    squad.aimOffset = 0;
    squad.x = laneX(0);
    squad.targetX = laneX(0);
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
      projectiles.push({
        lane: playerLane,
        x: point.x,
        y: playerY() - 20 * scale(),
        damage: tuning.damage,
        speed: tuning.projectileSpeed * scale(),
        radius: tuning.projectileRadius * scale(),
        color: neonPalette[gun.visualIdentity.projectileColor],
        trail: neonPalette[gun.visualIdentity.trailColor],
      });
    }
    cooldown += 1 / tuning.fireRatePerSecond;
  };

  const finish = (won: boolean): void => {
    if (!activeTrack) return;
    result.hidden = false;
    resultTitle.textContent = won ? "FLAWLESS RUN" : "TRACK FAILED";
    resultDetail.textContent = won ? "No enemy touched or escaped past you." : `${breaches} enemy${breaches === 1 ? "" : "ies"} breached the defense.`;
    if (won) {
      victory = new NeonVictoryExperience({
        centerX: canvas.width / 2, centerY: canvas.height * .38,
        width: canvas.width, height: canvas.height, particleCount: 120,
      });
    }
    activeTrack = null;
  };

  const update = (now: number): void => {
    if (!activeTrack) return;
    const delta = Math.min(.05, (now - lastFrame) / 1000);
    lastFrame = now;
    const elapsed = (now - startedAt) / 1000;
    runStatus.textContent = `${gunFamily.members[gunId].label} · ${Math.max(0, activeTrack.durationSeconds - elapsed).toFixed(1)}s`;

    while (nextEnemy < activeTrack.enemySchedule.length && activeTrack.enemySchedule[nextEnemy].atSeconds <= elapsed) {
      const event = activeTrack.enemySchedule[nextEnemy++];
      const count = event.count ?? 1;
      const spacing = (event.spacing ?? 15) * scale();
      for (let index = 0; index < count; index++) {
        enemies.push({
          lane: event.lane,
          x: laneX(event.lane) + (index - (count - 1) / 2) * spacing,
          y: 110 * scale(),
          health: orbFamily.members[event.enemyId].health,
          rowId: nextEnemy,
        });
      }
    }
    while (nextPickup < activeTrack.pickupSchedule.length && activeTrack.pickupSchedule[nextPickup].atSeconds <= elapsed) {
      const event = activeTrack.pickupSchedule[nextPickup++];
      pickups.push({ lane: event.lane, y: 120 * scale(), gunId: event.gunId, level: event.level });
    }
    while (nextMultiplier < activeTrack.multiplierSchedule.length && activeTrack.multiplierSchedule[nextMultiplier].atSeconds <= elapsed) {
      const event = activeTrack.multiplierSchedule[nextMultiplier++];
      multipliers.push({ lane: event.lane, y: 125 * scale(), multiplierId: event.multiplierId });
    }

    if (!aimControl.manual) {
      const laneEnemies = enemies.filter(enemy => enemy.lane === squad.lane);
      const offset = selectAutoAimOffset(laneEnemies, laneX(squad.lane), squad.aimOffset);
      squad.autoAim(offset, canvas.width * .22, laneX);
    }
    squad.update(delta);
    gameElement.dataset.squadLane = String(squad.lane);
    gameElement.dataset.squadAim = squad.aimOffset.toFixed(2);

    cooldown -= delta;
    if (cooldown <= 0) fire();
    for (const shot of [...projectiles]) {
      shot.y -= shot.speed * delta;
      if (shot.y < 0) projectiles.splice(projectiles.indexOf(shot), 1);
      for (const enemy of [...enemies]) {
        const hitRadius = shot.radius + orbFamily.members.basicOrb.radius * scale();
        if (shot.lane !== enemy.lane || Math.hypot(shot.x - enemy.x, shot.y - enemy.y) > hitRadius) continue;
        enemy.health -= shot.damage;
        projectiles.splice(projectiles.indexOf(shot), 1);
        if (enemy.health <= 0) enemies.splice(enemies.indexOf(enemy), 1);
        break;
      }
    }
    for (const enemy of [...enemies]) {
      enemy.y += orbFamily.members.basicOrb.speed * scale() * delta;
      if (enemy.y >= playerY()) {
        breaches++;
        enemies.splice(enemies.indexOf(enemy), 1);
      }
    }
    for (const pickup of [...pickups]) {
      pickup.y += 72 * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        gunId = pickup.gunId;
        gunLevel = pickup.level;
        cooldown = 0;
        pickups.splice(pickups.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height) pickups.splice(pickups.indexOf(pickup), 1);
    }
    for (const pickup of [...multipliers]) {
      pickup.y += 72 * scale() * delta;
      if (pickup.y >= playerY() - 15 * scale() && pickup.lane === playerLane) {
        squad.add(multiplierFamily.members[pickup.multiplierId].squadAdded);
        multipliers.splice(multipliers.indexOf(pickup), 1);
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
        primitives.push({ x: point.x, y: point.y, width: multiplierFamily.members.squadPlusOne.memberRadius * s, color: neonPalette.cyan, secondaryColor: neonPalette.deepBlue, glow: .82, shape: "orb", rimIntensity: .8, shadowStrength: .4 });
      }
      for (const shot of projectiles) {
        primitives.push({ x: shot.x, y: shot.y + 9 * s, width: Math.max(1.2 * s, shot.radius * .5), height: 18 * s, color: shot.trail, secondaryColor: shot.color, glow: .35, intensity: .7, shape: "bolt" });
        primitives.push({ x: shot.x, y: shot.y, width: shot.radius, height: shot.radius * 2.5, color: shot.color, secondaryColor: shot.trail, glow: .65, shape: "bolt" });
      }
      for (const enemy of enemies) primitives.push({ x: enemy.x, y: enemy.y, width: orbFamily.members.basicOrb.radius * s, color: neonPalette.pink, secondaryColor: neonPalette.violet, glow: .75, texture: .25, rimIntensity: 1.1, shadowStrength: .65, shape: "orb" });
      for (const pickup of pickups) {
        const visual = gunFamily.members[pickup.gunId].visualIdentity;
        primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 18 * s, color: neonPalette[visual.projectileColor], secondaryColor: neonPalette[visual.trailColor], glow: .5, shape: "ring" });
        primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 9 * s, height: 20 * s, color: neonPalette[visual.projectileColor], secondaryColor: neonPalette[visual.trailColor], glow: .7, shape: "bolt" });
      }
      for (const pickup of multipliers) {
        const spec = multiplierFamily.members[pickup.multiplierId];
        primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 18 * s, color: neonPalette[spec.pickupColor], secondaryColor: neonPalette[spec.coreColor], glow: .65, shape: "ring" });
        primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 10 * s, color: neonPalette[spec.coreColor], secondaryColor: neonPalette[spec.pickupColor], glow: .8, shape: "spark" });
      }
    }
    if (victory) primitives.push(...victory.primitives(now));
    renderer.render(primitives, now / 1000);
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
