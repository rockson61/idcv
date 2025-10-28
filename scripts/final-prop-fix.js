#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Final prop name fix (location → locationName)...\n');

const fixPropNames = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Fix LocationReviews props
    content = content.replace(
      /location=\{locationData\.name\}/g,
      'locationName={locationData.name}'
    );
    
    // Remove averageRating prop (component calculates it)
    content = content.replace(
      /\s*averageRating=\{[^}]*\}/g,
      ''
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

let fixed = 0;

['chennai', 'kanchipuram'].forEach(city => {
  const cityDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', city);
  if (!fs.existsSync(cityDir)) return;
  
  const areas = fs.readdirSync(cityDir).filter(f => {
    return fs.statSync(path.join(cityDir, f)).isDirectory();
  });
  
  console.log(`📂 Fixing ${city} (${areas.length} areas)...`);
  const cityFixed = areas.filter(area => {
    const filePath = path.join(cityDir, area, 'page.tsx');
    return fs.existsSync(filePath) && fixPropNames(filePath);
  }).length;
  
  fixed += cityFixed;
  console.log(`  ✅ Fixed ${cityFixed} pages\n`);
});

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✅ Total fixed: ${fixed} pages`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n✅ All prop names corrected!');

