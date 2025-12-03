#!/usr/bin/env node
const { execSync } = require("child_process");
const path = require("path");

const blockedExtensions = new Set([
  "png",
  "jpg",
  "jpeg",
  "gif",
  "ico",
  "bmp",
  "tif",
  "tiff",
  "webp",
  "pdf",
  "zip",
  "gz",
  "tar",
  "7z",
  "mp4",
  "mov",
  "avi",
  "mkv",
  "mp3",
  "wav",
  "ogg",
  "flac",
  "woff",
  "woff2",
  "ttf",
  "otf"
]);

const trackedFiles = execSync("git ls-files", { encoding: "utf8" })
  .split("\n")
  .filter(Boolean);

const offendingFiles = trackedFiles.filter((file) => {
  const extension = path.extname(file).toLowerCase().replace(".", "");
  return blockedExtensions.has(extension);
});

if (offendingFiles.length) {
  console.error("Binary files are not supported in this repository. Remove or replace the following files:");
  offendingFiles.forEach((file) => console.error(` - ${file}`));
  process.exit(1);
}

console.log("No blocked binary files detected.");
