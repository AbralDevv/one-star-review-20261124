// One-Star Review of Something Essential
// Entry: a single deadpan one-star review line (<=160 chars) of sleep,
// an everyday essential. Node stdlib only; no network access.

import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// The review. 95 characters, one line. Deadpan hotel-review voice:
// the sharpest true grievance about sleep is paying eight hours for it
// and waking up more tired than when you arrived; the turn lands in
// the last three words, filed in earnest against a thing that cannot
// be fixed.
const REVIEW =
  "Sleep: paid eight hours, woke up more tired than when I arrived. One star, would not recommend.";

// Resolve the output directory: $MAKEFUN_OUTPUT_DIR wins, then the
// container-standard /output, then a local ./output fallback.
function resolveOutputDir() {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  try {
    mkdirSync("/output", { recursive: true });
    return "/output";
  } catch {
    return resolve("output");
  }
}

function main() {
  // Enforce the brief before writing anything: one line, <=160 chars.
  if (REVIEW.length > 160) {
    throw new Error(`Review is ${REVIEW.length} chars, over the 160-char limit.`);
  }
  if (REVIEW.includes("\n") || REVIEW.includes("\r")) {
    throw new Error("Review must be a single line.");
  }
  if (REVIEW.trim().length === 0) {
    throw new Error("Review must not be empty.");
  }

  const outDir = resolveOutputDir();
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, REVIEW + "\n", "utf8");
  console.log(`Wrote ${outPath} (${REVIEW.length} chars, 1 line)`);
}

main();
