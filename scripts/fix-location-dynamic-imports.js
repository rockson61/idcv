#!/usr/bin/env node
// Convert all location client component imports to dynamic imports with ssr: false
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

function fixImports(content) {
  // Check if already has dynamic imports
  if (content.includes("import dynamic from 'next/dynamic'")) {
    return content; // Already fixed
  }

  // Remove static imports for client components
  content = content.replace(/import\s*{\s*LocationHeader\s*}\s*from\s*['"]@\/components\/location\/LocationHeader['"];?\n?/g, '');
  content = content.replace(/import\s*{\s*GoogleMapEmbed\s*}\s*from\s*['"]@\/components\/location\/GoogleMapEmbed['"];?\n?/g, '');
  content = content.replace(/import\s*{\s*EnhancedServicesList\s*}\s*from\s*['"]@\/components\/location\/EnhancedServicesList['"];?\n?/g, '');
  content = content.replace(/import\s*{\s*LocationReviews\s*}\s*from\s*['"]@\/components\/location\/LocationReviews['"];?\n?/g, '');
  content = content.replace(/import\s*{\s*LocationFAQs\s*}\s*from\s*['"]@\/components\/location\/LocationFAQs['"];?\n?/g, '');
  content = content.replace(/import\s*{\s*LocationFAQs\s*}\s*from\s*['"]@\/components\/LocationFAQs['"];?\n?/g, '');
  content = content.replace(/import\s*{\s*PeopleAlsoSearchFor\s*}\s*from\s*['"]@\/components\/location\/PeopleAlsoSearchFor['"];?\n?/g, '');

  // Add dynamic import after Breadcrumb import
  const dynamicImports = `import dynamic from 'next/dynamic'

// Dynamically import client components to avoid SSR issues during static generation
const LocationHeader = dynamic(() => import('@/components/location/LocationHeader').then(m => ({ default: m.LocationHeader })), { ssr: false })
const GoogleMapEmbed = dynamic(() => import('@/components/location/GoogleMapEmbed').then(m => ({ default: m.GoogleMapEmbed })), { ssr: false })
const EnhancedServicesList = dynamic(() => import('@/components/location/EnhancedServicesList').then(m => ({ default: m.EnhancedServicesList })), { ssr: false })
const LocationReviews = dynamic(() => import('@/components/location/LocationReviews').then(m => ({ default: m.LocationReviews })), { ssr: false })
const LocationFAQs = dynamic(() => import('@/components/location/LocationFAQs').then(m => ({ default: m.LocationFAQs })), { ssr: false })
const PeopleAlsoSearchFor = dynamic(() => import('@/components/location/PeopleAlsoSearchFor').then(m => ({ default: m.PeopleAlsoSearchFor })), { ssr: false })
`;

  // Insert after Breadcrumb import or after Metadata import
  if (content.includes("import { Breadcrumb }")) {
    content = content.replace(
      /(import\s+{\s*Breadcrumb\s*}\s*from\s*['"]@\/components\/breadcrumb['"];?\n)/,
      `$1${dynamicImports}`
    );
  } else if (content.includes("import type { Metadata }")) {
    content = content.replace(
      /(import\s+type\s+{\s*Metadata\s*}\s*from\s*['"]next['"];?\n)/,
      `${dynamicImports}$1`
    );
  } else {
    // Insert at the beginning after first import
    content = content.replace(
      /^(import\s+[^;]+;?\n)/,
      `$1${dynamicImports}`
    );
  }

  return content;
}

function main() {
  const pages = walk(APP_IN);
  let fixed = 0;
  for (const file of pages) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const original = content;
      content = fixImports(content);
      if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        fixed++;
      }
    } catch (e) {
      console.error(`Failed to process ${file}:`, e.message);
    }
  }
  console.log(`Fixed dynamic imports in ${fixed} pages.`);
}

main();

