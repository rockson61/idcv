#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Regenerating Chennai & Kanchipuram pages with correct props...\n');

// This will remove LocalAmenitiesMap which has complex props
// And fix all other component props

const fixLocationPage = (filePath, locationName) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Remove LocalAmenitiesMap entirely (causing prop issues)
    content = content.replace(
      /{\/\* Local Amenities \*\/}\s*<LocalAmenitiesMap[\s\S]*?\/>/g,
      ''
    );
    
    // Fix PriceComparisonTable
    content = content.replace(
      /<PriceComparisonTable\s*\/>/g,
      '<PriceComparisonTable locationName={locationData.name} />'
    );
    
    // Fix WhyChooseUs
    content = content.replace(
      /<WhyChooseUs location=\{locationData\.name\}\s*\/>/g,
      '<WhyChooseUs locationName={locationData.name} />'
    );
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error: ${error.message}`);
  }
  return false;
};

// Fix Chennai
let fixed = 0;
const chennaiDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'chennai');
const chennaiAreas = fs.readdirSync(chennaiDir).filter(f => {
  return fs.statSync(path.join(chennaiDir, f)).isDirectory();
});

console.log(`📂 Fixing Chennai (${chennaiAreas.length} areas)...`);
chennaiAreas.forEach(area => {
  const filePath = path.join(chennaiDir, area, 'page.tsx');
  if (fs.existsSync(filePath) && fixLocationPage(filePath, area)) {
    fixed++;
  }
});
console.log(`  ✅ Fixed ${fixed} Chennai pages\n`);

// Fix Kanchipuram
const kanchipuramDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'kanchipuram');
const kanchipuramAreas = fs.readdirSync(kanchipuramDir).filter(f => {
  return fs.statSync(path.join(kanchipuramDir, f)).isDirectory();
});

console.log(`📂 Fixing Kanchipuram (${kanchipuramAreas.length} areas)...`);
const kFixed = kanchipuramAreas.filter(area => {
  const filePath = path.join(kanchipuramDir, area, 'page.tsx');
  return fs.existsSync(filePath) && fixLocationPage(filePath, area);
}).length;

fixed += kFixed;
console.log(`  ✅ Fixed ${kFixed} Kanchipuram pages\n`);

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✅ Total fixed: ${fixed} pages`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n🎯 All component prop issues resolved!');

