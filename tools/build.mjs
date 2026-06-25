import { build } from "esbuild";
import { cp, mkdir } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
const docs = resolve(root, "docs");

await build({
  entryPoints: [resolve(root, "projects/NeonFactory/src/index.ts")],
  outfile: resolve(docs, "lib/neonfactory.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  sourcemap: true,
});

await build({
  entryPoints: [resolve(root, "projects/NeonFactory/test-pages/orb/orb-test.ts")],
  outfile: resolve(docs, "lib/neonfactory-tests/orb/orb-test.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  sourcemap: true,
});

await mkdir(resolve(docs, "lib/neonfactory-tests/orb"), { recursive: true });
await Promise.all([
  cp(
    resolve(root, "projects/NeonFactory/test-pages/orb/index.html"),
    resolve(docs, "lib/neonfactory-tests/orb/index.html"),
  ),
  cp(
    resolve(root, "projects/NeonFactory/test-pages/orb/orb-test.css"),
    resolve(docs, "lib/neonfactory-tests/orb/orb-test.css"),
  ),
]);

await mkdir(resolve(docs, "lib/neonfactory-tests/shapes"), { recursive: true });
await mkdir(resolve(docs, "lib/neonfactory-tests/projectiles"), { recursive: true });
await Promise.all([
  build({entryPoints:[resolve(root,"projects/NeonFactory/test-pages/projectiles/projectiles.ts")],outfile:resolve(docs,"lib/neonfactory-tests/projectiles/projectiles.js"),bundle:true,format:"esm",platform:"browser",target:"es2022",sourcemap:true}),
  cp(resolve(root,"projects/NeonFactory/test-pages/projectiles/index.html"),resolve(docs,"lib/neonfactory-tests/projectiles/index.html")),
  cp(resolve(root,"projects/NeonFactory/test-pages/projectiles/projectiles.css"),resolve(docs,"lib/neonfactory-tests/projectiles/projectiles.css")),
  cp(resolve(root,"projects/NeonFactory/test-pages/index.html"),resolve(docs,"lib/neonfactory-tests/index.html")),
  build({
    entryPoints: [resolve(root, "projects/NeonFactory/test-pages/shapes/gallery.ts")],
    outfile: resolve(docs, "lib/neonfactory-tests/shapes/gallery.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  build({
    entryPoints: [resolve(root, "projects/NeonFactory/test-pages/shapes/tuning-storage.ts")],
    outfile: resolve(docs, "lib/neonfactory-tests/shapes/tuning-storage.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  build({
    entryPoints: [resolve(root, "projects/NeonFactory/test-pages/shapes/inspector.ts")],
    outfile: resolve(docs, "lib/neonfactory-tests/shapes/inspector.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  cp(resolve(root, "projects/NeonFactory/test-pages/shapes/gallery.html"), resolve(docs, "lib/neonfactory-tests/shapes/gallery.html")),
  cp(resolve(root, "projects/NeonFactory/test-pages/shapes/inspector.html"), resolve(docs, "lib/neonfactory-tests/shapes/inspector.html")),
  cp(resolve(root, "projects/NeonFactory/test-pages/shapes/shapes.css"), resolve(docs, "lib/neonfactory-tests/shapes/shapes.css")),
]);

await build({
  entryPoints: [resolve(root, "projects/NeonSwarm/src/main.ts")],
  outfile: resolve(docs, "NeonSwarm/game.js"),
  bundle: true,
  format: "esm",
  platform: "browser",
  target: "es2022",
  sourcemap: true,
});

await mkdir(resolve(docs, "NeonSwarm"), { recursive: true });
await mkdir(resolve(docs, "NeonSwarm/audio"), { recursive: true });
await mkdir(resolve(docs, "NeonSwarm/tests/gun-family"), { recursive: true });
await mkdir(resolve(docs, "NeonSwarm/tests/gun-family/manual/audio"), { recursive: true });
await mkdir(resolve(docs, "NeonSwarm/tests/shield-family"), { recursive: true });
await mkdir(resolve(docs, "NeonSwarm/tests/sword-family"), { recursive: true });
await mkdir(resolve(docs, "NeonSwarm/tests/multiplier-family"), { recursive: true });
await mkdir(resolve(docs, "NeonSwarm/tests/auto-aim"), { recursive: true });
await mkdir(resolve(docs, "NeonSwarm/tests/track-editor"), { recursive: true });
await Promise.all([
  cp(resolve(docs, "Swarm/audio"), resolve(docs, "NeonSwarm/audio"), { recursive: true }),
  cp(resolve(docs, "Swarm/audio"), resolve(docs, "NeonSwarm/tests/gun-family/manual/audio"), { recursive: true }),
  cp(resolve(docs, "NeonPour/audio/PuzzleComplete.mp3"), resolve(docs, "NeonSwarm/audio/PuzzleComplete.mp3")),
  cp(resolve(docs, "NeonPour/audio/PuzzleComplete.mp3"), resolve(docs, "NeonSwarm/tests/gun-family/manual/audio/PuzzleComplete.mp3")),
  cp(resolve(root, "projects/NeonSwarm/public/index.html"), resolve(docs, "NeonSwarm.html")),
  cp(resolve(root, "projects/NeonSwarm/public/game.css"), resolve(docs, "NeonSwarm/game.css")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/index.html"), resolve(docs, "NeonSwarm/tests/index.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/index.css"), resolve(docs, "NeonSwarm/tests/index.css")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/gun-family/manual.html"), resolve(docs, "NeonSwarm/tests/gun-family/manual.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/gun-family/manual.css"), resolve(docs, "NeonSwarm/tests/gun-family/manual.css")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/gun-family/smoke.html"), resolve(docs, "NeonSwarm/tests/gun-family/smoke.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/gun-family/smoke.css"), resolve(docs, "NeonSwarm/tests/gun-family/smoke.css")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/shield-family/manual.html"), resolve(docs, "NeonSwarm/tests/shield-family/manual.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/shield-family/manual.css"), resolve(docs, "NeonSwarm/tests/shield-family/manual.css")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/shield-family/smoke.html"), resolve(docs, "NeonSwarm/tests/shield-family/smoke.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/shield-family/smoke.css"), resolve(docs, "NeonSwarm/tests/shield-family/smoke.css")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/sword-family/manual.html"), resolve(docs, "NeonSwarm/tests/sword-family/manual.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/sword-family/manual.css"), resolve(docs, "NeonSwarm/tests/sword-family/manual.css")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/sword-family/smoke.html"), resolve(docs, "NeonSwarm/tests/sword-family/smoke.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/multiplier-family/smoke.html"), resolve(docs, "NeonSwarm/tests/multiplier-family/smoke.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/auto-aim/smoke.html"), resolve(docs, "NeonSwarm/tests/auto-aim/smoke.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/track-editor/index.html"), resolve(docs, "NeonSwarm/tests/track-editor/index.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/track-editor/track-editor.css"), resolve(docs, "NeonSwarm/tests/track-editor/track-editor.css")),
]);

await Promise.all([
  build({
    entryPoints: [resolve(root, "projects/NeonSwarm/test-pages/gun-family/manual.ts")],
    outfile: resolve(docs, "NeonSwarm/tests/gun-family/manual.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  build({
    entryPoints: [resolve(root, "projects/NeonSwarm/test-pages/gun-family/smoke.ts")],
    outfile: resolve(docs, "NeonSwarm/tests/gun-family/smoke.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  build({
    entryPoints: [resolve(root, "projects/NeonSwarm/test-pages/shield-family/manual.ts")],
    outfile: resolve(docs, "NeonSwarm/tests/shield-family/manual.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  build({
    entryPoints: [resolve(root, "projects/NeonSwarm/test-pages/shield-family/smoke.ts")],
    outfile: resolve(docs, "NeonSwarm/tests/shield-family/smoke.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  build({
    entryPoints: [resolve(root, "projects/NeonSwarm/test-pages/sword-family/manual.ts")],
    outfile: resolve(docs, "NeonSwarm/tests/sword-family/manual.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  build({
    entryPoints: [resolve(root, "projects/NeonSwarm/test-pages/sword-family/smoke.ts")],
    outfile: resolve(docs, "NeonSwarm/tests/sword-family/smoke.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  build({
    entryPoints: [resolve(root, "projects/NeonSwarm/test-pages/multiplier-family/smoke.ts")],
    outfile: resolve(docs, "NeonSwarm/tests/multiplier-family/smoke.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  build({
    entryPoints: [resolve(root, "projects/NeonSwarm/test-pages/auto-aim/smoke.ts")],
    outfile: resolve(docs, "NeonSwarm/tests/auto-aim/smoke.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
  build({
    entryPoints: [resolve(root, "projects/NeonSwarm/test-pages/track-editor/track-editor.ts")],
    outfile: resolve(docs, "NeonSwarm/tests/track-editor/track-editor.js"),
    bundle: true, format: "esm", platform: "browser", target: "es2022", sourcemap: true,
  }),
]);

console.log("Built NeonFactory and NeonSwarm into docs.");
