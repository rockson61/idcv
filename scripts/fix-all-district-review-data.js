#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Adding location property to district page reviews...\n');

const districtDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu');
const districts = fs.readdirSync(districtDir).filter(f => {
  const fullPath = path.join(districtDir, f);
  return fs.statSync(fullPath).isDirectory() && !f.includes('.');
});

let fixed = 0;

districts.forEach(district => {
  const filePath = path.join(districtDir, district, 'page.tsx');
  
  if (!fs.existsSync(filePath)) return;
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Add location property to review objects
    content = content.replace(
      /\{\s*name: '([^']*)',\s*rating:/g,
      `{\n    location: '${district.charAt(0).toUpperCase() + district.slice(1)}',\n    name: '$1',\n    rating:`
    );
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${district}`);
      fixed++;
    }
  } catch (error) {
    console.error(`❌ Error: ${district}:`, error.message);
  }
});

console.log(`\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);
console.log(`✅ Fixed ${fixed} district pages`);
console.log(`━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`);

