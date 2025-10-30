#!/usr/bin/env node
// Removes duplicate individual location component imports when a barrel import exists
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_DIR = path.resolve(ROOT, 'app', 'in');

const individualLocationImportPrefixes = [
  "@/components/location/GoogleMapEmbed",
  "@/components/location/LocalAmenitiesMap",
  "@/components/location/LocationReviews",
  "@/components/location/LocationHeader",
  "@/components/location/NearbyLocationsWidget",
  "@/components/location/EnhancedServicesList",
  "@/components/location/TravelInfoCard",
  "@/components/location/PriceComparisonTable",
  "@/components/location/WhyChooseUs",
  // Also drop the separate LocationFAQs import when barrel is present to avoid duplicate identifiers
  "@/components/LocationFAQs",
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

function hasBarrelImport(src) {
  return /import\s*\{[^}]*\}\s*from\s*['"]@\/components\/location['"]/.test(src);
}

function removeIndividualImportsWhenBarrelPresent(src) {
  if (!hasBarrelImport(src)) return src;
  const lines = src.split('\n');
  const filtered = lines.filter(line => {
    if (!line.startsWith('import')) return true;
    // Remove standalone LocationFAQs when barrel exists
    if (line.includes("from '@/components/LocationFAQs'") || line.includes('from "@/components/LocationFAQs"')) {
      return false;
    }
    for (const pref of individualLocationImportPrefixes) {
      if (line.includes(`from '${pref}'`) || line.includes(`from \"${pref}\"`)) {
        return false; // drop this individual import
      }
    }
    return true;
  });
  return filtered.join('\n');
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
    const next = removeIndividualImportsWhenBarrelPresent(src);
    if (next !== src) {
      fs.writeFileSync(file, next);
      changed++;
    }
  }
  console.log(`Cleaned duplicate imports in ${changed} pages.`);
}

main();


