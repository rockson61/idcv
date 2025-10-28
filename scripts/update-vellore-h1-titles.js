#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function getAllLocationDirs(baseDir) {
  const dirs = [];
  const items = fs.readdirSync(baseDir, { withFileTypes: true });
  
  for (const item of items) {
    if (item.isDirectory()) {
      const pagePath = path.join(baseDir, item.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        dirs.push({ name: item.name, path: pagePath });
      }
    }
  }
  
  return dirs;
}

function capitalizeWords(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

function updateH1Title(filePath, locationName) {
  let content = fs.readFileSync(filePath, 'utf8');
  const capitalizedLocation = capitalizeWords(locationName);
  
  // Pattern: "Best Dentist in <Location>, Vellore"
  const oldPattern = new RegExp(`Best Dentist in ${capitalizedLocation}, Vellore`, 'g');
  const newText = `Best Dentist and Dental Clinic in ${capitalizedLocation}, Vellore`;
  
  if (content.includes(`Best Dentist in ${capitalizedLocation}, Vellore`)) {
    content = content.replace(oldPattern, newText);
    fs.writeFileSync(filePath, content, 'utf8');
    return true;
  }
  
  return false;
}

console.log('🚀 Updating Vellore location H1 titles...\n');

const velloreDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'vellore');
const locations = getAllLocationDirs(velloreDir);

let updated = 0;
let skipped = 0;

locations.forEach(loc => {
  if (updateH1Title(loc.path, loc.name)) {
    updated++;
    if (updated <= 10) {
      console.log(`  ✅ ${loc.name}`);
    }
  } else {
    skipped++;
  }
});

if (updated > 10) {
  console.log(`  ✅ ... and ${updated - 10} more locations`);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Update Complete!');
console.log(`   Updated:  ${updated} Vellore locations`);
console.log(`   Skipped:  ${skipped} locations (already updated or different format)`);
console.log(`   Total:    ${locations.length} locations processed`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n✅ All Vellore locations now display:');
console.log('   "Best Dentist and Dental Clinic in <Location>, Vellore"');

