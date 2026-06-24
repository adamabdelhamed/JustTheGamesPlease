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
await mkdir(resolve(docs, "NeonSwarm/tests/gun-family"), { recursive: true });
await Promise.all([
  cp(resolve(root, "projects/NeonSwarm/public/index.html"), resolve(docs, "NeonSwarm.html")),
  cp(resolve(root, "projects/NeonSwarm/public/game.css"), resolve(docs, "NeonSwarm/game.css")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/index.html"), resolve(docs, "NeonSwarm/tests/index.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/index.css"), resolve(docs, "NeonSwarm/tests/index.css")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/gun-family/manual.html"), resolve(docs, "NeonSwarm/tests/gun-family/manual.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/gun-family/manual.css"), resolve(docs, "NeonSwarm/tests/gun-family/manual.css")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/gun-family/smoke.html"), resolve(docs, "NeonSwarm/tests/gun-family/smoke.html")),
  cp(resolve(root, "projects/NeonSwarm/test-pages/gun-family/smoke.css"), resolve(docs, "NeonSwarm/tests/gun-family/smoke.css")),
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
]);

console.log("Built NeonFactory and NeonSwarm into docs.");
