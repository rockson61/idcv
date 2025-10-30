#!/usr/bin/env node
// Fix LocationFAQs imports to use direct path instead of re-export
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
      // Replace re-export import with direct import
      content = content.replace(
        /import\s*{\s*LocationFAQs\s*}\s*from\s*['"]@\/components\/LocationFAQs['"]/g,
        "import { LocationFAQs } from '@/components/location/LocationFAQs'"
      );
      if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        fixed++;
      }
    } catch (e) {
      console.error(`Failed to process ${file}:`, e.message);
    }
  }
  console.log(`Fixed LocationFAQs imports in ${fixed} pages.`);
}

main();

