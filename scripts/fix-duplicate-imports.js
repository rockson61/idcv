#!/usr/bin/env node

/**
 * FIX IMPORTS AFTER DUPLICATE DELETION
 * Updates import paths to reference the correct components
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');

// Map of old imports → new imports
const IMPORT_MAP = {
  // LocationFAQs
  '@/components/location/LocationFAQs': '@/components/LocationFAQs',
  '../location/LocationFAQs': '../LocationFAQs',
  './location/LocationFAQs': './LocationFAQs',
  
  // FAQ Schema
  '@/components/schema/faq-schema': '@/components/ask-dentist/faq-schema',
  '../schema/faq-schema': '../ask-dentist/faq-schema',
  './schema/faq-schema': './ask-dentist/faq-schema',
  
  // Breadcrumb
  '@/components/ui/breadcrumb': '@/components/breadcrumb',
  '../ui/breadcrumb': '../breadcrumb',
  './ui/breadcrumb': './breadcrumb',
  
  // Header
  '@/components/header': '@/components/common/Header',
  '@/components/layout/header': '@/components/common/Header',
  '../header': '../common/Header',
  '../layout/header': '../common/Header',
  './header': './common/Header',
  './layout/header': './common/Header',
  
  // Emergency Contact
  '@/components/sections/emergency-contact': '@/components/emergency-contact',
  '../sections/emergency-contact': '../emergency-contact',
  './sections/emergency-contact': './emergency-contact',
  
  // FAQ Section
  '@/components/sections/faq-section': '@/components/faq-section',
  '../sections/faq-section': '../faq-section',
  './sections/faq-section': './faq-section',
  
  // Footer
  '@/components/layout/footer': '@/components/footer',
  '../layout/footer': '../footer',
  './layout/footer': './footer',
  
  // Hero
  '@/components/sections/hero': '@/components/hero',
  '../sections/hero': '../hero',
  './sections/hero': './hero',
  
  // Location Schema
  '@/components/schema/location-schema': '@/components/location-schema',
  '../schema/location-schema': '../location-schema',
  './schema/location-schema': './location-schema',
  
  // Schema Markup
  '@/components/schema-markup': '@/components/schema/schema-markup',
  '../schema-markup': '../schema/schema-markup',
  './schema-markup': './schema/schema-markup',
  
  // Testimonials
  '@/components/testimonials': '@/components/sections/testimonials',
  '../testimonials': '../sections/testimonials',
  './testimonials': './sections/testimonials',
  
  // Why Choose Us
  '@/components/why-choose-us': '@/components/sections/why-choose-us',
  '../why-choose-us': '../sections/why-choose-us',
  './why-choose-us': './sections/why-choose-us',
};

function getAllFiles(dir, ext = '.tsx') {
  const files = [];
  try {
    fs.readdirSync(dir).forEach(item => {
      const full = path.join(dir, item);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...getAllFiles(full, ext));
        } else if (item.endsWith(ext) || item.endsWith('.ts')) {
          files.push(full);
        }
      } catch (e) {}
    });
  } catch (e) {}
  return files;
}

let fixed = 0;
let files = 0;

console.log('FIXING IMPORTS AFTER DUPLICATE DELETION');
console.log('========================================\n');

const allFiles = getAllFiles(path.join(ROOT, 'app'))
  .concat(getAllFiles(path.join(ROOT, 'components')))
  .concat(getAllFiles(path.join(ROOT, 'lib')));

allFiles.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let modified = false;
    
    Object.entries(IMPORT_MAP).forEach(([oldImport, newImport]) => {
      const regex1 = new RegExp(`from ['"]${oldImport.replace(/\//g, '\\/')}['"]`, 'g');
      const regex2 = new RegExp(`import\\(['"]${oldImport.replace(/\//g, '\\/')}['"]\\)`, 'g');
      
      if (regex1.test(content) || regex2.test(content)) {
        content = content.replace(regex1, `from '${newImport}'`);
        content = content.replace(regex2, `import('${newImport}')`);
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(file, content, 'utf8');
      console.log(`✓ Fixed: ${path.relative(ROOT, file)}`);
      fixed++;
    }
    
    files++;
    
  } catch (err) {
    // Ignore errors
  }
});

console.log(`\nScanned ${files} files`);
console.log(`Fixed ${fixed} files with import updates\n`);

const summary = `IMPORT FIX SUMMARY
==================
Scanned: ${files} files
Fixed: ${fixed} files

Import mappings applied:
${Object.entries(IMPORT_MAP).map(([old, newPath]) => `${old} → ${newPath}`).join('\n')}

Status: SUCCESS
`;

fs.writeFileSync(path.join(ROOT, 'IMPORT_FIX_SUMMARY.txt'), summary, 'utf8');

console.log(summary);
console.log('Import fixes complete!');

