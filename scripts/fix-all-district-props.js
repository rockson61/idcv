#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing all component props in district pages...\n');

const districtDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu');
const districts = fs.readdirSync(districtDir).filter(f => {
  const fullPath = path.join(districtDir, f);
  return fs.statSync(fullPath).isDirectory();
});

let fixed = 0;

districts.forEach(district => {
  const filePath = path.join(districtDir, district, 'page.tsx');
  
  if (!fs.existsSync(filePath)) return;
  
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Fix WhyChooseUs component (just remove it or replace with a simple section)
    content = content.replace(
      /{\/\* Why Choose Us \*\/}\s*<WhyChooseUs location="[^"]*" \/>/g,
      ''
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

