#!/usr/bin/env node
/**
 * Lists everything still to write or wire up.
 *
 *   npm run content:todo
 *
 * Two sources: `todo` blocks in case-study and field-note content, and any
 * [TODO: …] placeholder string anywhere under src/content.
 */

import { readdir, readFile } from "node:fs/promises";
import { join, relative } from "node:path";

const ROOT = new URL("../src/content", import.meta.url).pathname;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.name.endsWith(".ts")) yield full;
  }
}

let total = 0;

for await (const file of walk(ROOT)) {
  const source = await readFile(file, "utf8");
  const lines = source.split("\n");
  const hits = [];

  lines.forEach((line, i) => {
    const placeholder = line.match(/\[TODO:([^\]]*)\]/);
    if (placeholder) {
      hits.push({ line: i + 1, text: placeholder[1].trim(), kind: "placeholder" });
      return;
    }
    if (/type:\s*"todo"/.test(line)) {
      const note = (lines[i + 1] ?? "").match(/note:\s*"([\s\S]*?)"/);
      hits.push({
        line: i + 1,
        text: note ? `${note[1].slice(0, 110)}…` : "(see file)",
        kind: "block",
      });
    }
  });

  if (hits.length === 0) continue;

  console.log(`\n\x1b[1m${relative(process.cwd(), file)}\x1b[0m`);
  for (const hit of hits) {
    const tag = hit.kind === "block" ? "\x1b[33mwrite\x1b[0m" : "\x1b[36mfill \x1b[0m";
    console.log(`  ${tag}  ${String(hit.line).padStart(4)}  ${hit.text}`);
    total += 1;
  }
}

console.log(`\n${total} item${total === 1 ? "" : "s"} outstanding.\n`);
