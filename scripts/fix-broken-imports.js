#!/usr/bin/env node
// Fix broken arrow function imports left by previous script
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
      
      // Remove broken arrow function imports
      content = content.replace(/^.*=>\s*import\(['"]@\/components\/location\/LocationHeader['"]\).*$\n?/gm, '');
      content = content.replace(/^.*=>\s*import\(['"]@\/components\/location\/GoogleMapEmbed['"]\).*$\n?/gm, '');
      content = content.replace(/^.*=>\s*import\(['"]@\/components\/location\/EnhancedServicesList['"]\).*$\n?/gm, '');
      content = content.replace(/^.*=>\s*import\(['"]@\/components\/location\/LocationReviews['"]\).*$\n?/gm, '');
      content = content.replace(/^.*=>\s*import\(['"]@\/components\/location\/LocationFAQs['"]\).*$\n?/gm, '');
      content = content.replace(/^.*=>\s*import\(['"]@\/components\/location\/PeopleAlsoSearchFor['"]\).*$\n?/gm, '');
      
      // Remove any remaining broken dynamic import fragments
      content = content.replace(/.*\.then\(m\s*=>\s*\(\{\s*default:.*$\n?/gm, '');
      content = content.replace(/.*\);?\s*$\n?/gm, '');
      
      // Clean up multiple blank lines
      content = content.replace(/\n{3,}/g, '\n\n');
      
      // Ensure direct imports are present after Breadcrumb import
      if (!content.includes("import { LocationHeader }")) {
        const breadcrumbMatch = content.match(/import\s+{\s*Breadcrumb\s*}\s*from\s*['"]@\/components\/breadcrumb['"]/);
        if (breadcrumbMatch) {
          const insertPoint = content.indexOf(breadcrumbMatch[0]) + breadcrumbMatch[0].length;
          content = content.slice(0, insertPoint) + '\n' +
                   "import { LocationHeader } from '@/components/location/LocationHeader'\n" +
                   "import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'\n" +
                   "import { EnhancedServicesList } from '@/components/location/EnhancedServicesList'\n" +
                   "import { LocationReviews } from '@/components/location/LocationReviews'\n" +
                   "import { LocationFAQs } from '@/components/location/LocationFAQs'\n" +
                   "import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'" +
                   content.slice(insertPoint);
        }
      }
      
      // Ensure force-dynamic is present
      if (!content.includes("export const dynamic = 'force-dynamic'")) {
        const metadataIndex = content.indexOf('export const metadata');
        if (metadataIndex !== -1) {
          content = content.slice(0, metadataIndex) + 
                   "// Disable static generation to avoid React context issues during build\n" +
                   "export const dynamic = 'force-dynamic'\n\n" +
                   content.slice(metadataIndex);
        }
      }
      
      if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        fixed++;
      }
    } catch (e) {
      console.error(`Failed to process ${file}:`, e.message);
    }
  }
  console.log(`Fixed ${fixed} location pages.`);
}

main();

