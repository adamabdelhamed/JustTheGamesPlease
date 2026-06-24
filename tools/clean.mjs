import { rm } from "node:fs/promises";
import { resolve } from "node:path";

const root = resolve(import.meta.dirname, "..");
await Promise.all([
  rm(resolve(root, "docs/lib/neonfactory.js"), { force: true }),
  rm(resolve(root, "docs/lib/neonfactory.js.map"), { force: true }),
  rm(resolve(root, "docs/lib/neonfactory-tests"), { recursive: true, force: true }),
  rm(resolve(root, "docs/NeonSwarm"), { recursive: true, force: true }),
  rm(resolve(root, "docs/NeonSwarm.html"), { force: true }),
]);
console.log("Removed generated NeonFactory and NeonSwarm output.");
