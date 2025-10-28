#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing GoogleMapEmbed props in all district pages...\n');

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
    
    // Fix GoogleMapEmbed props - remove city, state, address props
    content = content.replace(
      /<GoogleMapEmbed\s+locationName="([^"]+)"\s+city="[^"]+"\s+state="[^"]+"\s+coordinates=\{([^}]+)\}\s+address="[^"]+"\s*\/>/g,
      '<GoogleMapEmbed\n          locationName="$1"\n          latitude={$2.lat}\n          longitude={$2.lng}\n        />'
    );
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      console.log(`✅ Fixed: ${district}`);
      fixed++;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${district}:`, error.message);
  }
});

console.log(`\n✅ Fixed ${fixed} district pages`);

