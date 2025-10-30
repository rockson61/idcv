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
  { name: 'LocationHeader', snippet: '        <LocationHeader locationName={locationName} category=\"town\" />\n' },
  { name: 'GoogleMapEmbed', snippet: '        <GoogleMapEmbed locationName={locationName} />\n' },
  { name: 'EnhancedServicesList', snippet: '        <EnhancedServicesList locationName={locationName} services={services} />\n' },
  { name: 'LocationReviews', snippet: '        <LocationReviews locationName={locationName} reviews={reviews} />\n' },
  { name: 'LocationFAQs', snippet: '        <LocationFAQs locationName={locationName} faqs={faqs} />\n' },
  { name: 'PeopleAlsoSearchFor', snippet: '        <PeopleAlsoSearchFor location={locationName} city={city} />\n' },
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

const barrelFrom = "@/components/location";
const barrelSymbols = new Set([
  'GoogleMapEmbed',
  'LocalAmenitiesMap',
  'LocationReviews',
  'LocationFAQs',
  'LocationHeader',
  'NearbyLocationsWidget',
  'EnhancedServicesList',
  'TravelInfoCard',
  'PriceComparisonTable',
  'WhyChooseUs',
]);

function hasNamedImport(src, symbol, from) {
  const re = new RegExp(`import\\s*\\{[^}]*\\b${symbol}\\b[^}]*\\}\\s*from\\s*['\"]${from}['\"]`);
  return re.test(src);
}

function ensureImport(src, symbol, from) {
  // If a barrel import exists for this symbol, skip adding individual import to avoid duplicates
  if (barrelSymbols.has(symbol) && hasNamedImport(src, symbol, barrelFrom)) return src;
  if (hasNamedImport(src, symbol, from)) return src;
  // Insert after the last import statement
  const importEnd = (() => {
    const matches = [...src.matchAll(/^import[^\n]*\n/gm)];
    if (matches.length) {
      const m = matches[matches.length - 1];
      return m.index + m[0].length;
    }
    return 0;
  })();
  return src.slice(0, importEnd) + `import { ${symbol} } from '${from}'\n` + src.slice(importEnd);
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

function isRedirectOnlyPage(src) {
  // Heuristic: default export function contains redirect( and no 'return (' before its closing brace
  const defIdx = src.indexOf('export default function');
  if (defIdx === -1) return false;
  const bodyStart = src.indexOf('{', defIdx);
  if (bodyStart === -1) return false;
  // naive brace matching
  let depth = 0;
  for (let i = bodyStart; i < src.length; i++) {
    if (src[i] === '{') depth++;
    else if (src[i] === '}') {
      depth--;
      if (depth === 0) {
        const body = src.slice(bodyStart + 1, i);
        if (/redirect\s*\(/.test(body) && !/return\s*\(/.test(body)) {
          return { endIndex: i + 1 };
        }
        return false;
      }
    }
  }
  return false;
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

    // If page is redirect-only, do not inject JSX. Also strip any stray JSX appended after the function.
    const redirectInfo = isRedirectOnlyPage(src);
    if (redirectInfo) {
      // Trim any content after default export function closing brace
      src = src.slice(0, redirectInfo.endIndex) + '\n';
      // Ensure we didn't accidentally add duplicate imports previously: no change to imports here
      fs.writeFileSync(file, src);
      changed++;
      continue;
    }

    // Ensure safe fallback variables exist at top (after imports) for pages missing them
    const pathRel = path.relative(ROOT, file);
    const parts = pathRel.split(path.sep);
    const slug = parts[parts.length - 2] || 'Location';
    const humanize = (s) => s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    const derivedName = humanize(slug);

    function ensureTopVar(name, value) {
      if (new RegExp(`\\bconst\\s+${name}\\b`).test(src)) return;
      // Insert after last import line
      const matches = [...src.matchAll(/^import[^\n]*\n/gm)];
      const insertAt = matches.length ? (matches[matches.length - 1].index + matches[matches.length - 1][0].length) : 0;
      const decl = `const ${name} = typeof ${name} !== 'undefined' ? ${name} : ${value}\n`;
      src = src.slice(0, insertAt) + decl + src.slice(insertAt);
    }

    ensureTopVar('locationName', `'${derivedName}'`);
    ensureTopVar('city', `'${humanize(parts[parts.length - 3] || 'Vellore')}'`);
    ensureTopVar('services', '[]');
    ensureTopVar('reviews', '[]');
    ensureTopVar('faqs', 'generateDefaultFAQs ? generateDefaultFAQs(locationName) : []');
    ensureTopVar('address', `''`);

    // Ensure imports
    for (const imp of requiredImports) {
      src = ensureImport(src, imp.symbol, imp.from);
    }
    // Ensure generator import for faqs fallback if used
    if (/generateDefaultFAQs\(locationName\)/.test(src) && !/from\s*['\"]@\/components\/LocationFAQs['\"]/.test(src) && !/from\s*['\"]@\/lib\/location-generators['\"]/.test(src)) {
      const matches2 = [...src.matchAll(/^import[^\n]*\n/gm)];
      const pos = matches2.length ? (matches2[matches2.length - 1].index + matches2[matches2.length - 1][0].length) : 0;
      src = src.slice(0, pos) + "import { generateDefaultFAQs } from '@/components/LocationFAQs'\n" + src.slice(pos);
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


