import { mkdir, writeFile } from "node:fs/promises";
import { join } from "node:path";

const entry = "At 7:12, our bus waited for a little boy to retie his shoe; when he climbed aboard, twelve sleepy strangers applauded his finish.";
const outputDir = process.env.OUTPUT_DIR ?? "/output";

await mkdir(outputDir, { recursive: true });
await writeFile(join(outputDir, "entry.txt"), entry, "utf8");
