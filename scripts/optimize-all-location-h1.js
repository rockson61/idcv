#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getAllLocationFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const item of items) {
    if (item.isDirectory()) {
      const pagePath = path.join(dir, item.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        files.push({ name: item.name, path: pagePath });
      }
    }
  }
  
  return files;
}

function capitalizeWords(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function optimizeLocationFile(filePath, locationName) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  const capitalizedLocation = capitalizeWords(locationName);
  
  // Pattern 1: locationName="<Location>" or locationName='{location}'
  const pattern1 = /locationName=["']{1}([^"']+)["']{1}/g;
  
  let updated = false;
  content = content.replace(pattern1, (match, currentName) => {
    // Skip if already has the optimized format
    if (currentName.includes('Best Dentist and Dental Clinic in')) {
      return match;
    }
    // Skip district pages (they're already optimized)
    if (currentName.includes('District')) {
      return match;
    }
    
    updated = true;
    return `locationName="Best Dentist and Dental Clinic in ${capitalizedLocation}"`;
  });
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

console.log('🚀 Optimizing ALL location page H1 titles...\n');

// Optimize Vellore locations
console.log('📂 Processing Vellore locations...');
const velloreDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'vellore');
const velloreLocations = getAllLocationFiles(velloreDir);

let velloreUpdated = 0;
let velloreSkipped = 0;

velloreLocations.forEach(loc => {
  if (optimizeLocationFile(loc.path, loc.name)) {
    velloreUpdated++;
    if (velloreUpdated <= 10) {
      console.log(`  ✅ ${loc.name}`);
    }
  } else {
    velloreSkipped++;
  }
});

if (velloreUpdated > 10) {
  console.log(`  ✅ ... and ${velloreUpdated - 10} more`);
}

console.log(`  ✓ Vellore: ${velloreUpdated} updated, ${velloreSkipped} skipped\n`);

// Summary
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Optimization Complete!');
console.log(`   Vellore locations:   ${velloreUpdated} updated`);
console.log(`   Total pages updated: ${velloreUpdated}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n✅ All location pages now have SEO-optimized H1 titles!');
console.log('   Format: "Best Dentist and Dental Clinic in <Location>"');

