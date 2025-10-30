#!/usr/bin/env node
// Auto-fixes location pages under app/in/** by inserting missing imports and JSX blocks
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.resolve(ROOT, 'app', 'in');

const requiredImports = [
  { symbol: 'Breadcrumb', from: "@/components/breadcrumb" },
  { symbol: 'LocationHeader', from: "@/components/location/LocationHeader" },
  { symbol: 'GoogleMapEmbed', from: "@/components/location/GoogleMapEmbed" },
  { symbol: 'EnhancedServicesList', from: "@/components/location/EnhancedServicesList" },
  { symbol: 'LocationReviews', from: "@/components/location/LocationReviews" },
  { symbol: 'LocationFAQs', from: "@/components/LocationFAQs" },
  { symbol: 'PeopleAlsoSearchFor', from: "@/components/location/PeopleAlsoSearchFor" },
];

const jsxInsertBlocks = [
  { name: 'Breadcrumb', snippet: '        <Breadcrumb items={[{ title: \"Home\", href: \"/\" }]} />\n' },
  { name: 'LocationHeader', snippet: '        <LocationHeader locationName={locationName} taluk={taluk || locationName} pincode={pincode || \"\"} distance={distance || \"\"} category=\"town\" />\n' },
  { name: 'GoogleMapEmbed', snippet: '        <GoogleMapEmbed locationName={locationName} address={address || \"\"} />\n' },
  { name: 'EnhancedServicesList', snippet: '        <EnhancedServicesList locationName={locationName} services={services || []} />\n' },
  { name: 'LocationReviews', snippet: '        <LocationReviews locationName={locationName} reviews={reviews || []} />\n' },
  { name: 'LocationFAQs', snippet: '        <LocationFAQs locationName={locationName} faqs={faqs || generateDefaultFAQs(locationName)} />\n' },
  { name: 'PeopleAlsoSearchFor', snippet: '        <PeopleAlsoSearchFor location={locationName} city={city || locationName} />\n' },
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

function ensureImport(src, symbol, from) {
  const re = new RegExp(`import\\s*\\{[^}]*\\b${symbol}\\b[^}]*\\}\\s*from\\s*['\"]${from}['\"]`);
  if (re.test(src)) return src;
  return `import { ${symbol} } from '${from}'\n` + src;
}

function hasJsx(src, name) {
  const re = new RegExp(`<${name}(\\s|>)`);
  return re.test(src);
}

function insertBeforeClosingContainer(src, snippet) {
  // naive insertion before the last </div> in the file
  const idx = src.lastIndexOf('</div>');
  if (idx === -1) return src + '\n' + snippet; // fallback append
  return src.slice(0, idx) + snippet + src.slice(idx);
}

function main() {
  if (!fs.existsSync(APP_DIR)) {
    console.error('No app/in directory found');
    process.exit(1);
  }
  const pages = walk(APP_DIR);
  let changed = 0;
  for (const file of pages) {
    let src = fs.readFileSync(file, 'utf8');

    // Ensure compat import for generators exists when we add LocationFAQs
    if (!/generateDefaultFAQs/.test(src)) {
      src = src.replace(/^(import[^\n]*\n)+/m, (m) => m + "import { generateDefaultFAQs } from '@/components/LocationFAQs'\n");
    }

    // Ensure imports
    for (const imp of requiredImports) {
      src = ensureImport(src, imp.symbol, imp.from);
    }

    // Ensure JSX sections exist (best-effort, skip if already present)
    for (const block of jsxInsertBlocks) {
      if (!hasJsx(src, block.name)) {
        src = insertBeforeClosingContainer(src, block.snippet);
      }
    }

    fs.writeFileSync(file, src);
    changed++;
  }
  console.log(`Standardized ${changed} location pages.`);
}

main();


