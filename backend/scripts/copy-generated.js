const fs = require("fs");
const path = require("path");

const src = path.resolve(__dirname, "..", "generated");
const dest = path.resolve(__dirname, "..", "dist", "generated");

async function copyDir() {
  try {
    await fs.promises.rm(dest, { recursive: true, force: true });
  } catch (e) {
    // ignore
  }
  try {
    await fs.promises.mkdir(dest, { recursive: true });
    await fs.promises.cp(src, dest, { recursive: true });
    console.log(`Copied ${src} -> ${dest}`);
  } catch (err) {
    console.error("Failed to copy generated folder:", err);
    process.exit(1);
  }
}

copyDir();
