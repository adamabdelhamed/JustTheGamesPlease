// projects/NeonFactory/src/tokens.ts
var neonPalette = {
  cyan: "#55e7ff",
  pink: "#ff4f9a",
  green: "#7fffc2",
  gold: "#ffd45c",
  violet: "#a987ff",
  whiteHot: "#f4fbff"
};

// projects/NeonFactory/src/primitive-renderer.ts
var maxPrimitives = 1024;
var floatsPerPrimitive = 12;
var shader = (
  /* wgsl */
  `
struct Scene { resolution: vec2f, count: f32, time: f32 }
struct Primitive { position: vec2f, size: vec2f, color: vec4f, glow: f32, intensity: f32, shape: f32, padding: f32 }
@group(0) @binding(0) var<uniform> scene: Scene;
@group(0) @binding(1) var<storage, read> items: array<Primitive>;

struct VertexOutput {
  @builtin(position) position: vec4f,
  @location(0) local: vec2f,
  @location(1) color: vec4f,
  @location(2) glow: f32,
  @location(3) intensity: f32,
  @location(4) shape: f32,
}

@vertex fn vertexMain(@builtin(vertex_index) vertex: u32, @builtin(instance_index) instance: u32) -> VertexOutput {
  var corners = array<vec2f, 6>(
    vec2f(-1,-1), vec2f(1,-1), vec2f(-1,1),
    vec2f(-1,1), vec2f(1,-1), vec2f(1,1)
  );
  let item = items[instance];
  let local = corners[vertex];
  let pixel = item.position + local * item.size;
  var output: VertexOutput;
  output.position = vec4f(pixel.x / scene.resolution.x * 2 - 1, 1 - pixel.y / scene.resolution.y * 2, 0, 1);
  output.local = local;
  output.color = item.color;
  output.glow = item.glow;
  output.intensity = item.intensity;
  output.shape = item.shape;
  return output;
}

@fragment fn fragmentMain(input: VertexOutput) -> @location(0) vec4f {
  var distance = length(input.local);
  if (input.shape > 0.5) {
    distance = max(abs(input.local.x), abs(input.local.y));
  }
  let core = 1 - smoothstep(0.45, 0.82, distance);
  let halo = (1 - smoothstep(0.35, 1, distance)) * input.glow;
  let energy = (core + halo) * input.intensity;
  let whiteCore = pow(max(core, 0), 4) * 0.75;
  return vec4f(input.color.rgb * energy + vec3f(whiteCore), clamp(energy, 0, 1));
}
`
);
function rgba(hex) {
  const value = hex.replace("#", "");
  if (!/^[0-9a-f]{6}$/i.test(value)) throw new Error(`Expected six-digit hex color, received "${hex}".`);
  return [
    Number.parseInt(value.slice(0, 2), 16) / 255,
    Number.parseInt(value.slice(2, 4), 16) / 255,
    Number.parseInt(value.slice(4, 6), 16) / 255,
    1
  ];
}
var NeonPrimitiveRenderer = class _NeonPrimitiveRenderer {
  canvas;
  device;
  #context;
  #pipeline;
  #sceneBuffer;
  #primitiveBuffer;
  #bindGroup;
  constructor(canvas2, device, context, format) {
    this.canvas = canvas2;
    this.device = device;
    this.#context = context;
    const module = device.createShaderModule({ code: shader });
    this.#pipeline = device.createRenderPipeline({
      layout: "auto",
      vertex: { module, entryPoint: "vertexMain" },
      fragment: {
        module,
        entryPoint: "fragmentMain",
        targets: [{ format, blend: { color: { srcFactor: "src-alpha", dstFactor: "one" }, alpha: { srcFactor: "one", dstFactor: "one" } } }]
      },
      primitive: { topology: "triangle-list" }
    });
    this.#sceneBuffer = device.createBuffer({ size: 16, usage: GPUBufferUsage.UNIFORM | GPUBufferUsage.COPY_DST });
    this.#primitiveBuffer = device.createBuffer({
      size: maxPrimitives * floatsPerPrimitive * 4,
      usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_DST
    });
    this.#bindGroup = device.createBindGroup({
      layout: this.#pipeline.getBindGroupLayout(0),
      entries: [
        { binding: 0, resource: { buffer: this.#sceneBuffer } },
        { binding: 1, resource: { buffer: this.#primitiveBuffer } }
      ]
    });
  }
  static async create(canvas2) {
    if (!navigator.gpu) throw new Error("WebGPU is required for NeonFactory.");
    const adapter = await navigator.gpu.requestAdapter();
    if (!adapter) throw new Error("No compatible WebGPU adapter was found.");
    const device = await adapter.requestDevice();
    const context = canvas2.getContext("webgpu");
    if (!context) throw new Error("The canvas could not create a WebGPU context.");
    const format = navigator.gpu.getPreferredCanvasFormat();
    context.configure({ device, format, alphaMode: "premultiplied" });
    return new _NeonPrimitiveRenderer(canvas2, device, context, format);
  }
  render(primitives, timeSeconds = 0) {
    this.#resize();
    const visible = primitives.slice(0, maxPrimitives);
    const data = new Float32Array(visible.length * floatsPerPrimitive);
    visible.forEach((item, index) => {
      const offset = index * floatsPerPrimitive;
      data.set([
        item.x,
        item.y,
        item.width,
        item.height ?? item.width,
        ...rgba(item.color),
        item.glow ?? 0.5,
        item.intensity ?? 1,
        item.shape === "bolt" ? 1 : 0,
        0
      ], offset);
    });
    this.device.queue.writeBuffer(this.#sceneBuffer, 0, new Float32Array([this.canvas.width, this.canvas.height, visible.length, timeSeconds]));
    if (data.length) this.device.queue.writeBuffer(this.#primitiveBuffer, 0, data);
    const encoder = this.device.createCommandEncoder();
    const pass = encoder.beginRenderPass({
      colorAttachments: [{
        view: this.#context.getCurrentTexture().createView(),
        clearValue: { r: 6e-3, g: 9e-3, b: 0.025, a: 1 },
        loadOp: "clear",
        storeOp: "store"
      }]
    });
    if (visible.length) {
      pass.setPipeline(this.#pipeline);
      pass.setBindGroup(0, this.#bindGroup);
      pass.draw(6, visible.length);
    }
    pass.end();
    this.device.queue.submit([encoder.finish()]);
  }
  #resize() {
    const ratio = Math.min(devicePixelRatio || 1, 2);
    const width = Math.max(1, Math.floor(this.canvas.clientWidth * ratio));
    const height = Math.max(1, Math.floor(this.canvas.clientHeight * ratio));
    if (this.canvas.width !== width || this.canvas.height !== height) {
      this.canvas.width = width;
      this.canvas.height = height;
    }
  }
};

// projects/NeonSwarm/src/main.ts
var canvas = document.querySelector("#game-canvas");
var error = document.querySelector("#error");
var gunSelect = document.querySelector("#gun-select");
var levelSelect = document.querySelector("#level-select");
var weaponReadout = document.querySelector("#weapon-readout");
var scoreReadout = document.querySelector("#score-readout");
var specReadout = document.querySelector("#spec-readout");
var loadJson = async (path) => {
  const response = await fetch(path, { cache: "no-store" });
  if (!response.ok) throw new Error(`Could not load ${path}: ${response.status}`);
  return response.json();
};
var validateSpecs = (guns, orbs) => {
  const members = guns.weaponFamilies?.gun?.members;
  if (!members || Object.keys(members).length === 0) throw new Error("GunFamily.json has no gun members.");
  for (const [id, gun] of Object.entries(members)) {
    if (!gun.levels?.length) throw new Error(`${id} has no levels.`);
    if (!gun.visualIdentity?.projectileColor) throw new Error(`${id} is missing visualIdentity.projectileColor.`);
  }
  if (!orbs.enemyFamilies?.orb?.members?.basicOrb) throw new Error("OrbFamily.json is missing basicOrb.");
};
try {
  const [gunSpec, orbSpec, renderer] = await Promise.all([
    loadJson("NeonSwarm/specs/GunFamily.json"),
    loadJson("NeonSwarm/specs/OrbFamily.json"),
    NeonPrimitiveRenderer.create(canvas)
  ]);
  validateSpecs(gunSpec, orbSpec);
  const guns = gunSpec.weaponFamilies.gun.members;
  const orb = orbSpec.enemyFamilies.orb.members.basicOrb;
  const enemies = [];
  const projectiles = [];
  const pickups = [];
  const effects = [];
  let playerLane = 0;
  let equippedGunId = "pulsePistol";
  let equippedLevel = 1;
  let cooldown = 0;
  let shotSequence = 0;
  let entitySequence = 0;
  let kills = 0;
  let lastFrame = performance.now();
  let recoil = 0;
  let muzzleUntil = 0;
  const laneX = (lane) => canvas.width * (lane === 0 ? 0.38 : 0.62);
  const playerY = () => canvas.height * 0.82;
  const scale = () => Math.min(devicePixelRatio || 1, 2);
  for (const [id, gun] of Object.entries(guns)) {
    gunSelect.add(new Option(gun.label, id));
  }
  gunSelect.value = equippedGunId;
  const selectedLevel = () => {
    const levels = guns[equippedGunId].levels;
    return levels.find((level) => level.level === equippedLevel) ?? levels[0];
  };
  const updateReadout = () => {
    const gun = guns[equippedGunId];
    const level = selectedLevel();
    weaponReadout.textContent = `${gun.label} \xB7 L${level.level}`;
    scoreReadout.textContent = `Kills ${kills}`;
    specReadout.innerHTML = [
      ["Pattern", gun.shotPattern],
      ["Fire rate", `${level.fireRatePerSecond}/s`],
      ["Damage", String(level.damage)],
      ["Speed", String(level.projectileSpeed)],
      ["Radius", String(level.projectileRadius)],
      ["Burst", String(level.burstCount)],
      ["Pierce", String(level.pierce)],
      ["Enemy HP", String(orb.health)],
      ["Enemy speed", String(orb.speed)]
    ].map(([name, value]) => `<dt>${name}</dt><dd>${value}</dd>`).join("");
  };
  const equip = (gunId, level) => {
    equippedGunId = gunId;
    equippedLevel = level;
    cooldown = 0;
    gunSelect.value = gunId;
    levelSelect.value = String(level);
    window.gameAudio?.play("Pickup");
    updateReadout();
  };
  const spawnEnemy = (lane) => {
    enemies.push({ id: ++entitySequence, lane, y: 105 * scale(), health: orb.health, hitFlashUntil: 0 });
  };
  const spawnPickup = (lane) => {
    pickups.push({ gunId: gunSelect.value, level: Number(levelSelect.value), lane, y: 135 * scale() });
  };
  document.querySelectorAll("[data-spawn-enemy]").forEach((button) => {
    button.addEventListener("click", () => spawnEnemy(Number(button.dataset.spawnEnemy)));
  });
  document.querySelectorAll("[data-spawn-pickup]").forEach((button) => {
    button.addEventListener("click", () => spawnPickup(Number(button.dataset.spawnPickup)));
  });
  document.querySelector("#spawn-wave").addEventListener("click", () => {
    spawnEnemy(0);
    spawnEnemy(1);
    setTimeout(() => spawnEnemy(0), 450);
    setTimeout(() => spawnEnemy(1), 700);
  });
  document.querySelector("#clear-stage").addEventListener("click", () => {
    enemies.length = projectiles.length = pickups.length = effects.length = 0;
  });
  const setLane = (lane) => {
    playerLane = Math.max(0, Math.min(1, lane));
  };
  addEventListener("keydown", (event) => {
    if (event.key === "a" || event.key === "A" || event.key === "ArrowLeft") setLane(0);
    if (event.key === "d" || event.key === "D" || event.key === "ArrowRight") setLane(1);
  });
  window.gameController?.createJoystick({
    element: "#joystick",
    container: document.querySelector("#game"),
    radius: 54,
    orientationLayout: {
      portrait: { x: 82, yFromBottom: 88 },
      landscape: { x: 88, yFromBottom: 82 }
    },
    recenterRadius: { portrait: 130, landscape: 150 }
  }).onChange((input) => {
    if (input.x < -0.25) setLane(0);
    if (input.x > 0.25) setLane(1);
  });
  const spawnProjectile = (lane, angleDegrees, level, gun) => {
    shotSequence += 1;
    const angle = angleDegrees * Math.PI / 180;
    const speed = level.projectileSpeed * scale();
    projectiles.push({
      id: ++entitySequence,
      lane,
      x: laneX(lane),
      y: playerY() - 22 * scale(),
      vx: Math.sin(angle) * speed,
      radius: level.projectileRadius * scale(),
      damage: level.damage,
      speed: Math.cos(angle) * speed,
      pierceRemaining: level.pierce,
      color: gun.visualIdentity.projectileColor,
      trailLength: level.trailLength * scale(),
      tracer: level.tracerEveryNthShot > 0 && shotSequence % level.tracerEveryNthShot === 0,
      knockback: level.knockback * scale(),
      hitFlashScale: level.hitFlashScale,
      hitEnemyIds: /* @__PURE__ */ new Set()
    });
  };
  const fireVolley = (gun, level) => {
    const lanes = gun.shotPattern === "pairedLaneSplit" || level.laneCoverage === "both" ? [0, 1] : [playerLane];
    for (const lane of lanes) {
      const count = Math.max(1, level.projectileCount / lanes.length);
      for (let index = 0; index < count; index++) {
        const offset = count === 1 ? 0 : (index / (count - 1) - 0.5) * level.spreadDegrees;
        spawnProjectile(lane, offset, level, gun);
      }
    }
    recoil = level.muzzleFlashScale * 7 * scale();
    muzzleUntil = performance.now() + 70;
    window.gameAudio?.playRotated("Primary", 3);
  };
  const fire = (gun, level) => {
    fireVolley(gun, level);
    for (let index = 1; index < level.burstCount; index++) {
      setTimeout(() => fireVolley(gun, level), level.burstIntervalMs * index);
    }
  };
  const hitEnemy = (projectile, enemy, now) => {
    projectile.hitEnemyIds.add(enemy.id);
    enemy.health -= projectile.damage;
    enemy.y -= projectile.knockback;
    enemy.hitFlashUntil = now + orb.hitFlashDurationMs;
    effects.push({
      x: projectile.x,
      y: projectile.y,
      color: projectile.color,
      radius: projectile.radius * projectile.hitFlashScale * 4,
      expiresAt: now + orb.hitFlashDurationMs,
      duration: orb.hitFlashDurationMs
    });
    window.gameAudio?.play("Hit");
    if (enemy.health <= 0) {
      effects.push({
        x: laneX(enemy.lane),
        y: enemy.y,
        color: orb.color,
        radius: orb.radius * orb.deathFlashScale * scale(),
        expiresAt: now + orb.hitFlashDurationMs * 2,
        duration: orb.hitFlashDurationMs * 2
      });
      enemies.splice(enemies.indexOf(enemy), 1);
      kills += 1;
      window.gameAudio?.play("EnemyDestroyed");
      updateReadout();
    }
    if (projectile.pierceRemaining > 0) projectile.pierceRemaining -= 1;
    else projectiles.splice(projectiles.indexOf(projectile), 1);
  };
  const update = (now) => {
    const delta = Math.min((now - lastFrame) / 1e3, 0.05);
    lastFrame = now;
    const gun = guns[equippedGunId];
    const level = selectedLevel();
    cooldown -= delta;
    if (cooldown <= 0) {
      fire(gun, level);
      cooldown += 1 / level.fireRatePerSecond;
    }
    recoil *= Math.pow(1e-3, delta);
    for (const projectile of [...projectiles]) {
      projectile.x += projectile.vx * delta;
      projectile.y -= projectile.speed * delta;
      if (projectile.y < -40 * scale()) {
        projectiles.splice(projectiles.indexOf(projectile), 1);
        continue;
      }
      for (const enemy of [...enemies]) {
        if (projectile.hitEnemyIds.has(enemy.id)) continue;
        const dx = projectile.x - laneX(enemy.lane);
        const dy = projectile.y - enemy.y;
        const hitRadius = projectile.radius + orb.radius * scale();
        if (dx * dx + dy * dy <= hitRadius * hitRadius) {
          hitEnemy(projectile, enemy, now);
          if (!projectiles.includes(projectile)) break;
        }
      }
    }
    for (const enemy of [...enemies]) {
      enemy.y += orb.speed * scale() * delta;
      if (enemy.y >= playerY()) enemies.splice(enemies.indexOf(enemy), 1);
    }
    for (const pickup of [...pickups]) {
      pickup.y += 62 * scale() * delta;
      if (pickup.y >= playerY() - 12 * scale() && pickup.lane === playerLane) {
        equip(pickup.gunId, pickup.level);
        pickups.splice(pickups.indexOf(pickup), 1);
      } else if (pickup.y > canvas.height + 30 * scale()) {
        pickups.splice(pickups.indexOf(pickup), 1);
      }
    }
    for (const effect of [...effects]) {
      if (effect.expiresAt <= now) effects.splice(effects.indexOf(effect), 1);
    }
  };
  const draw = (now) => {
    const s = scale();
    const primitives = [];
    for (const lane of [0, 1]) {
      primitives.push({ x: laneX(lane), y: canvas.height * 0.52, width: 1.2 * s, height: canvas.height * 0.82, color: "#174a61", glow: 0.22, shape: "bolt" });
    }
    primitives.push({ x: laneX(playerLane), y: playerY() + recoil, width: 12 * s, color: neonPalette.cyan, glow: 0.95 });
    if (muzzleUntil > now) {
      const level = selectedLevel();
      primitives.push({ x: laneX(playerLane), y: playerY() - 25 * s, width: 10 * level.muzzleFlashScale * s, color: guns[equippedGunId].visualIdentity.projectileColor, glow: 1.2 });
    }
    for (const projectile of projectiles) {
      primitives.push({
        x: projectile.x,
        y: projectile.y + projectile.trailLength / 2,
        width: Math.max(projectile.radius * 0.7, 1.2 * s),
        height: projectile.trailLength,
        color: projectile.color,
        glow: projectile.tracer ? 1.25 : 0.55,
        intensity: projectile.tracer ? 1.4 : 0.85,
        shape: "bolt"
      });
      primitives.push({
        x: projectile.x,
        y: projectile.y,
        width: projectile.radius,
        height: projectile.radius * (projectile.radius > 4 * s ? 1.5 : 2.5),
        color: projectile.color,
        glow: projectile.tracer ? 1.4 : 0.75,
        shape: "bolt"
      });
    }
    for (const enemy of enemies) {
      primitives.push({
        x: laneX(enemy.lane),
        y: enemy.y,
        width: orb.radius * s,
        color: enemy.hitFlashUntil > now ? "#ffffff" : orb.color,
        glow: orb.glow,
        intensity: enemy.hitFlashUntil > now ? 1.6 : 1
      });
    }
    for (const pickup of pickups) {
      const gun = guns[pickup.gunId];
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 10 * s, color: gun.visualIdentity.projectileColor, glow: 1.1, shape: "bolt" });
      primitives.push({ x: laneX(pickup.lane), y: pickup.y, width: 17 * s, color: gun.visualIdentity.projectileColor, glow: 0.35, intensity: 0.5 });
    }
    for (const effect of effects) {
      const life = Math.max(0, (effect.expiresAt - now) / effect.duration);
      primitives.push({ x: effect.x, y: effect.y, width: effect.radius * (1.5 - life * 0.5), color: effect.color, glow: life, intensity: life });
    }
    renderer.render(primitives, now / 1e3);
  };
  const frame = (now) => {
    update(now);
    draw(now);
    requestAnimationFrame(frame);
  };
  equip(equippedGunId, equippedLevel);
  spawnEnemy(0);
  spawnEnemy(1);
  requestAnimationFrame(frame);
} catch (cause) {
  error.hidden = false;
  error.textContent = cause instanceof Error ? cause.message : String(cause);
}
//# sourceMappingURL=game.js.map
