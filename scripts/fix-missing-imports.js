#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log(`
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          🔧 FIXING MISSING IMPORTS ACROSS ALL PAGES 🔧                  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
`);

let totalFixed = 0;
let totalErrors = 0;

function fixImports(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    // Check if PeopleAlsoSearchFor is used but not imported
    if (content.includes('<PeopleAlsoSearchFor') && !content.includes('import { PeopleAlsoSearchFor }')) {
      // Add import after the last existing import
      const lastImportMatch = content.match(/(import[^;]+from[^;]+;)(?=\n\n)/);
      if (lastImportMatch) {
        content = content.replace(
          lastImportMatch[0],
          `${lastImportMatch[0]}\nimport { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"`
        );
        modified = true;
      } else {
        // If no clear import section, add at the top after 'use client' or first import
        const importLine = `import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"\n`;
        if (content.includes('use client')) {
          content = content.replace("'use client'\n", `'use client'\n\n${importLine}`);
        } else {
          content = importLine + content;
        }
        modified = true;
      }
    }
    
    // Check if ServicePeopleAlsoSearchFor is used but not imported
    if (content.includes('<ServicePeopleAlsoSearchFor') && !content.includes('import { ServicePeopleAlsoSearchFor }')) {
      const lastImportMatch = content.match(/(import[^;]+from[^;]+;)(?=\n\n)/);
      if (lastImportMatch) {
        content = content.replace(
          lastImportMatch[0],
          `${lastImportMatch[0]}\nimport { ServicePeopleAlsoSearchFor } from "@/components/service/ServicePeopleAlsoSearchFor"`
        );
        modified = true;
      }
    }
    
    // Check if CTAWidget is used but not imported
    if (content.includes('<CTAWidget') && !content.includes('import { CTAWidget }')) {
      const lastImportMatch = content.match(/(import[^;]+from[^;]+;)(?=\n\n)/);
      if (lastImportMatch) {
        content = content.replace(
          lastImportMatch[0],
          `${lastImportMatch[0]}\nimport { CTAWidget } from "@/components/widgets/cta-widget"`
        );
        modified = true;
      }
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      totalFixed++;
      return true;
    }
    return false;
  } catch (error) {
    totalErrors++;
    return false;
  }
}

// Function to recursively process directories
function processDirectory(dir) {
  try {
    const items = fs.readdirSync(dir, { withFileTypes: true });
    
    items.forEach(item => {
      const fullPath = path.join(dir, item.name);
      
      if (item.isDirectory()) {
        processDirectory(fullPath);
      } else if (item.name === 'page.tsx') {
        fixImports(fullPath);
      }
    });
  } catch (error) {
    // Skip inaccessible directories
  }
}

console.log(`\n🔍 Scanning all pages for missing imports...\n`);

// Process all location pages
const locationsDir = path.join(__dirname, '..', 'app', 'in');
processDirectory(locationsDir);

// Process all service pages
const servicesDir = path.join(__dirname, '..', 'app', 'services');
processDirectory(servicesDir);

// Process all blog pages
const blogDir = path.join(__dirname, '..', 'app', 'blog');
processDirectory(blogDir);

// Process condition pages
const conditionsDir = path.join(__dirname, '..', 'app', 'conditions');
processDirectory(conditionsDir);

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 IMPORT FIX SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✅ Fixed:      ${totalFixed} pages
  ❌ Errors:     ${totalErrors} pages

  Imports Added:
  • PeopleAlsoSearchFor (location pages)
  • ServicePeopleAlsoSearchFor (service pages)
  • CTAWidget (all pages using it)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ All missing imports fixed!
`);

