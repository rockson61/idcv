#!/usr/bin/env node
// Rewrites self-referencing const fallbacks like:
// const foo = typeof foo !== 'undefined' ? foo : 'bar'
// → const foo = 'bar'

const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.resolve(ROOT, 'app', 'in');

function walk(dir, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.isFile() && (e.name.endsWith('.tsx') || e.name === 'page.tsx')) acc.push(p);
  }
  return acc;
}

function fixSelfRefs(src) {
  // Replace patterns: const name = typeof name !== 'undefined' ? name : VALUE
  return src.replace(/const\s+([A-Za-z_$][\w$]*)\s*=\s*typeof\s+\1\s*!==\s*['"]undefined['"]\s*\?\s*\1\s*:\s*([^\n;]+)(;?)/g,
    (m, name, value, semi) => `const ${name} = ${value.trim()}${semi || ''}`);
}

function main() {
  if (!fs.existsSync(APP_DIR)) {
    console.error('No app/in directory found');
    process.exit(1);
  }
  const files = walk(APP_DIR);
  let changed = 0;
  for (const f of files) {
    const src = fs.readFileSync(f, 'utf8');
    const next = fixSelfRefs(src);
    if (next !== src) {
      fs.writeFileSync(f, next);
      changed++;
    }
  }
  console.log(`Fixed self-referencing fallbacks in ${changed} files.`);
}

main();


