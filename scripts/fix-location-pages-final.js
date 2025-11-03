#!/usr/bin/env node
// Final fix: Remove Suspense wrappers, ensure force-dynamic, and use direct imports
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
      
      // Remove Suspense imports if present
      content = content.replace(/import\s+{\s*Suspense\s*}\s*from\s*['"]react['"];?\n?/g, '');
      
      // Remove all Suspense wrappers
      content = content.replace(/<Suspense[^>]*>\s*/g, '');
      content = content.replace(/<\/Suspense>/g, '');
      
      // Ensure force-dynamic is present
      if (!content.includes("export const dynamic = 'force-dynamic'")) {
        // Insert after imports, before metadata
        const metadataIndex = content.indexOf('export const metadata');
        if (metadataIndex !== -1) {
          content = content.slice(0, metadataIndex) + 
                   "// Disable static generation to avoid React context issues during build\n" +
                   "export const dynamic = 'force-dynamic'\n\n" +
                   content.slice(metadataIndex);
        }
      }
      
      // Remove dynamic imports if present, replace with direct imports
      content = content.replace(/import\s+dynamic\s+from\s*['"]next\/dynamic['"];?\n?/g, '');
      content = content.replace(/const\s+LocationHeader\s*=\s*dynamic\([^)]+\);?\n?/g, '');
      content = content.replace(/const\s+GoogleMapEmbed\s*=\s*dynamic\([^)]+\);?\n?/g, '');
      content = content.replace(/const\s+EnhancedServicesList\s*=\s*dynamic\([^)]+\);?\n?/g, '');
      content = content.replace(/const\s+LocationReviews\s*=\s*dynamic\([^)]+\);?\n?/g, '');
      content = content.replace(/const\s+LocationFAQs\s*=\s*dynamic\([^)]+\);?\n?/g, '');
      content = content.replace(/const\s+PeopleAlsoSearchFor\s*=\s*dynamic\([^)]+\);?\n?/g, '');
      
      // Ensure direct imports are present
      if (!content.includes("import { LocationHeader }")) {
        const breadcrumbIndex = content.indexOf("import { Breadcrumb }");
        if (breadcrumbIndex !== -1) {
          const insertPoint = content.indexOf('\n', breadcrumbIndex) + 1;
          content = content.slice(0, insertPoint) +
                   "import { LocationHeader } from '@/components/location/LocationHeader'\n" +
                   "import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'\n" +
                   "import { EnhancedServicesList } from '@/components/location/EnhancedServicesList'\n" +
                   "import { LocationReviews } from '@/components/location/LocationReviews'\n" +
                   "import { LocationFAQs } from '@/components/location/LocationFAQs'\n" +
                   "import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'\n" +
                   content.slice(insertPoint);
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

