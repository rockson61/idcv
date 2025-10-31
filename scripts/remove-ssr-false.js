#!/usr/bin/env node
// Remove { ssr: false } from all dynamic imports in location pages
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_IN = path.resolve(ROOT, 'app', 'in');

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.isFile() && e.name === 'page.tsx') acc.push(p);
  }
  return acc;
}

function main() {
  const pages = walk(APP_IN);
  let fixed = 0;
  for (const file of pages) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const original = content;
      // Remove { ssr: false } from dynamic imports
      content = content.replace(/,\s*{\s*ssr:\s*false\s*}\s*\)/g, ')');
      if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        fixed++;
      }
    } catch (e) {
      console.error(`Failed to process ${file}:`, e.message);
    }
  }
  console.log(`Removed ssr: false from ${fixed} pages.`);
}

main();

