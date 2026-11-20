// Thursday 19 November 2026 — the day's news as one front page.
//
// The entry is the image beside this file: design/front-page.html is its source,
// rendered once to entry.png (1024x1024, under 1 MiB). This program copies those
// exact bytes to /output/entry.png, so both runs of the grader write the same file.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL("./entry.png", import.meta.url), join(outDir, "entry.png"));
