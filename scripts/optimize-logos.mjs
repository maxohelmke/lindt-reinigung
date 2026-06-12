import sharp from "sharp";
import { mkdirSync, statSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const assetsDir = join(root, "src/assets");
const outDir = join(root, "public/logos");
mkdirSync(outDir, { recursive: true });

const jobs = [
  {
    input: "logo_icon.svg",
    outputs: [
      { file: "icon-32.png", width: 32, format: "png" },
      { file: "icon-48.webp", width: 48, format: "webp" },
      { file: "icon-96.webp", width: 96, format: "webp" },
      { file: "icon-180.png", width: 180, format: "png" },
    ],
  },
  {
    input: "logo_complete.svg",
    outputs: [
      { file: "complete-200.webp", width: 200, format: "webp" },
      { file: "complete-400.webp", width: 400, format: "webp" },
      { file: "complete-560.webp", width: 560, format: "webp" },
    ],
  },
  {
    input: "logo_text.svg",
    outputs: [
      { file: "text-180.webp", width: 180, format: "webp" },
      { file: "text-360.webp", width: 360, format: "webp" },
    ],
  },
];

for (const job of jobs) {
  const inputPath = join(assetsDir, job.input);
  for (const out of job.outputs) {
    const outputPath = join(outDir, out.file);
    let pipeline = sharp(inputPath, { density: 200 }).resize(out.width, null, {
      fit: "inside",
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    });

    if (out.format === "webp") {
      pipeline = pipeline.webp({ quality: 86, effort: 6, alphaQuality: 100 });
    } else {
      pipeline = pipeline.png({ compressionLevel: 9, adaptiveFiltering: true });
    }

    await pipeline.toFile(outputPath);
    console.log(`${out.file}: ${statSync(outputPath).size} bytes`);
  }
}

console.log("Done — logos written to public/logos/");
