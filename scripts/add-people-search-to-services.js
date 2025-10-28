#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getAllServiceFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const file of files) {
    const filePath = path.join(dir, file.name);
    
    if (file.isDirectory()) {
      getAllServiceFiles(filePath, fileList);
    } else if (file.name === 'page.tsx') {
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

function addPeopleSearchSection(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Check if ServicePeopleAlsoSearchFor is already imported
  if (content.includes('ServicePeopleAlsoSearchFor')) {
    return false; // Already added
  }
  
  // Check if file has the closing div pattern for main content
  const closingDivPattern = /<\/div>\s*<\/div>\s*\)\s*\}/;
  if (!closingDivPattern.test(content)) {
    return false; // Can't find the right place to insert
  }
  
  // Add import statement after other imports
  const importPattern = /import.*from.*\n/g;
  const imports = content.match(importPattern);
  if (!imports) return false;
  
  const lastImport = imports[imports.length - 1];
  const lastImportIndex = content.lastIndexOf(lastImport);
  
  const newImport = `import { ServicePeopleAlsoSearchFor } from '@/components/service/ServicePeopleAlsoSearchFor'\n`;
  
  // Check if import already exists
  if (content.includes('ServicePeopleAlsoSearchFor')) {
    return false;
  }
  
  // Insert import
  content = content.slice(0, lastImportIndex + lastImport.length) + 
            newImport + 
            content.slice(lastImportIndex + lastImport.length);
  
  // Add the component before the closing divs
  // Find the last ServiceReviews or similar section
  const insertPattern = /(<\/div>\s*){2,}\s*\)\s*\}/;
  const match = content.match(insertPattern);
  
  if (match) {
    const insertPosition = content.lastIndexOf(match[0]);
    const componentCode = `\n        <ServicePeopleAlsoSearchFor serviceName="" />\n\n        `;
    
    content = content.slice(0, insertPosition) + 
              componentCode + 
              content.slice(insertPosition);
    
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

console.log('🚀 Adding "People Also Search For" section to all service pages...\n');

const servicesDir = path.join(__dirname, '..', 'app', 'services');
const serviceFiles = getAllServiceFiles(servicesDir);

let updated = 0;
let skipped = 0;

serviceFiles.forEach(filePath => {
  const relativePath = path.relative(servicesDir, filePath);
  const serviceName = path.dirname(relativePath) || 'root';
  
  if (addPeopleSearchSection(filePath)) {
    updated++;
    if (updated <= 20) {
      console.log(`  ✅ ${serviceName}`);
    }
  } else {
    skipped++;
  }
});

if (updated > 20) {
  console.log(`  ✅ ... and ${updated - 20} more services`);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Update Complete!');
console.log(`   Updated:  ${updated} service pages`);
console.log(`   Skipped:  ${skipped} pages (already has component or incompatible format)`);
console.log(`   Total:    ${serviceFiles.length} service files processed`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n✅ People Also Search For section added to service pages!');
console.log('   Format: "Best <Service> in India"');
console.log('\n📋 Features:');
console.log('   • 125+ dental service search queries');
console.log('   • Categorized by specialty');
console.log('   • Show More/Less functionality');
console.log('   • Internal linking for SEO');
console.log('   • "Best <keyword> in India" format');

