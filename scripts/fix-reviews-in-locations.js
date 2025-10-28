#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Adding "location" property to all review objects...\n');

const fixReviews = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Fix review objects - add location property
    content = content.replace(
      /const reviews = \[\s*\{([^}]*name: '[^']*'[^}]*)rating:/g,
      function(match, p1) {
        // Extract name if present
        const nameMatch = p1.match(/name: '([^']*)'/);
        const locationMatch = p1.match(/locationData\.name/);
        const name = nameMatch ? nameMatch[1] : 'Patient';
        return match.replace('{', `{\n    location: '${name.includes('from') ? name.split('from')[1].trim() : 'Vellore'}',\n    `);
      }
    );
    
    // Simple approach: just add location: locationData.name to each review
    content = content.replace(
      /const reviews = \[\s*\{/g,
      `const reviews = [\n  {\n    location: locationData.name,`
    );
    
    // Add location to second review if exists
    content = content.replace(
      /\},\s*\{([^}]*name:)/g,
      '},\n  {\n    location: locationData.name,\n   $1'
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
    return fs.existsSync(filePath) && fixReviews(filePath);
  }).length;
  
  fixed += cityFixed;
  console.log(`  ✅ Fixed ${cityFixed} pages\n`);
});

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✅ Total fixed: ${fixed} pages`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

