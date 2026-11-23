// Six Words, One Story — a complete story in exactly six words.
// "The letter arrived after the funeral." — six words, 37 characters
// (38 bytes in the file with the trailing newline).
// A letter, an arrival, a funeral: the turn lands in the last two
// words, and everything that matters (who wrote it, what it said,
// why it came too late) is left unsaid for the reader.
// The program is deterministic: it always writes the same fixed string.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "The letter arrived after the funeral.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY + "\n", "utf8");
