// Entry for the make.fun "The Meeting That Should Have Been an Email" bounty.
// Writes one single-line joke (1-200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const JOKE =
  "The meeting that should have been an email ended with one decision: another meeting, to read the email out loud together.";

// The gate requires 1-200 characters of UTF-8 text, not only whitespace.
const length = [...JOKE].length;
if (length < 1 || length > 200 || JOKE.trim().length === 0) {
  throw new Error(`Joke must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", JOKE, "utf8");
console.log(`Wrote ${length} characters to /output/entry.txt`);
