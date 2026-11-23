// Real-Life Patch Notes — one-line changelog entry for a bug in real life.
// Writes the entry to /output/entry.txt (or $OUTPUT_DIR/entry.txt).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v1.9.3: fixed a bug where sneezing at 3 a.m. triggered the full-body wake-up sequence instead of a quiet sneeze.";

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate (kit RULES.txt): entry.txt must be UTF-8 text of 1–160 characters,
// not only whitespace, single line. Enforce it at runtime, fail loudly.
const chars = [...ENTRY];
if (chars.length < 1 || chars.length > 160) {
  throw new Error(`entry is ${chars.length} characters, must be 1–160`);
}
if (ENTRY.trim().length === 0 || ENTRY.includes("\n")) {
  throw new Error("entry must be a single non-blank line");
}
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
