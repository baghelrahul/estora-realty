#!/usr/bin/env node
/**
 * Pixelotech static-export postbuild cleanup.
 * © 2026 Pixelotech. All rights reserved. Proprietary — see LICENSE.md.
 */

import fs from "node:fs";
import path from "node:path";

const outDir = process.argv[2] ?? "out";

if (!fs.existsSync(outDir)) {
  console.error(`postbuild: build output '${outDir}' not found — run \`next build\` first.`);
  process.exit(1);
}

// Directory-form 404 duplicates to prune (NOT the top-level 404.html Cloudflare needs).
const pruneDirs = ["404", "_not-found"];
let removed = 0;

for (const d of pruneDirs) {
  const target = path.join(outDir, d);
  if (fs.existsSync(target) && fs.statSync(target).isDirectory()) {
    fs.rmSync(target, { recursive: true, force: true });
    console.log(`postbuild: removed duplicate 404 route /${d}/`);
    removed++;
  }
}

if (!fs.existsSync(path.join(outDir, "404.html"))) {
  console.warn("postbuild: WARNING — out/404.html is missing; Cloudflare Pages needs it for the site 404 page.");
}

console.log(`postbuild: done (${removed} duplicate route${removed === 1 ? "" : "s"} pruned).`);
