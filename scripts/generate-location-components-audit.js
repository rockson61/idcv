#!/usr/bin/env node
// Audits location pages under app/in/** for required imports and JSX sections
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.resolve(ROOT, 'app', 'in');
const OUT_FILE = path.resolve(ROOT, 'LOCATION_PAGES_COMPONENT_AUDIT.md');

const requiredImports = [
  { symbol: 'Breadcrumb', from: "@/components/breadcrumb" },
  { symbol: 'LocationHeader', from: "@/components/location/LocationHeader" },
  { symbol: 'GoogleMapEmbed', from: "@/components/location/GoogleMapEmbed" },
  { symbol: 'EnhancedServicesList', from: "@/components/location/EnhancedServicesList" },
  { symbol: 'LocationReviews', from: "@/components/location/LocationReviews" },
  { symbol: 'LocationFAQs', from: "@/components/LocationFAQs" },
  { symbol: 'PeopleAlsoSearchFor', from: "@/components/location/PeopleAlsoSearchFor" },
];

const requiredJsx = [
  'Breadcrumb',
  'LocationHeader',
  'GoogleMapEmbed',
  'EnhancedServicesList',
  'LocationReviews',
  'LocationFAQs',
  'PeopleAlsoSearchFor',
];

function walk(dir, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.isFile() && e.name === 'page.tsx') acc.push(p);
  }
  return acc;
}

function hasImport(src, sym, from) {
  const re = new RegExp(`import\\s*\\{[^}]*\\b${sym}\\b[^}]*\\}\\s*from\\s*['\"]${from}['\"]`);
  return re.test(src);
}

function hasJsx(src, name) {
  const re = new RegExp(`<${name}(\\s|>)`);
  return re.test(src);
}

function main() {
  if (!fs.existsSync(APP_DIR)) {
    console.error('No app/in directory found');
    process.exit(1);
  }
  const pages = walk(APP_DIR);
  const rows = [];
  const missingCounters = Object.fromEntries(requiredJsx.map(n => [n, 0]));
  for (const file of pages) {
    const src = fs.readFileSync(file, 'utf8');
    // Skip redirect-only pages from audit
    if (/export\s+default\s+function[\s\S]*?\{[\s\S]*?redirect\s*\([\s\S]*?\)[\s\S]*?\}(?![\s\S]*?return\s*\()/.test(src)) {
      continue;
    }
    const missingImports = requiredImports.filter(r => !hasImport(src, r.symbol, r.from));
    const missingJsx = requiredJsx.filter(n => !hasJsx(src, n));
    if (missingImports.length || missingJsx.length) {
      rows.push({ file: path.relative(ROOT, file), missingImports, missingJsx });
    }
    for (const n of missingJsx) missingCounters[n]++;
  }

  const lines = [];
  lines.push('### Location Pages Component Audit');
  lines.push('');
  lines.push(`Scanned ${pages.length} pages under app/in/**.`);
  lines.push('');
  if (!rows.length) {
    lines.push('All pages have required imports and sections. ✅');
  } else {
    lines.push('| Page | Missing Imports | Missing Sections |');
    lines.push('| --- | --- | --- |');
    for (const r of rows) {
      const mi = r.missingImports.map(m => `${m.symbol} from ${m.from}`).join('<br/>') || '—';
      const mj = r.missingJsx.join(', ') || '—';
      lines.push(`| ${r.file} | ${mi} | ${mj} |`);
    }
    lines.push('');
    lines.push('## Missing Summary');
    lines.push('');
    for (const name of requiredJsx) {
      lines.push(`- ${name}: ${missingCounters[name] || 0} pages missing`);
    }
  }

  fs.writeFileSync(OUT_FILE, lines.join('\n'));
  console.log(`Wrote ${OUT_FILE}`);
}

main();


