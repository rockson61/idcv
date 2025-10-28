#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing breadcrumbs in district pages...\n');

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
    
    // Fix breadcrumb - remove the last item without href
    content = content.replace(
      /\{ title: 'Tamil Nadu', href: '\/in\/tamil-nadu' \},\s*\{ title: '[^']*' \}/g,
      (match) => {
        const titleMatch = match.match(/title: '([^']*)' \}$/);
        if (titleMatch) {
          return `{ title: 'Tamil Nadu', href: '/in/tamil-nadu' }`;
        }
        return match;
      }
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

