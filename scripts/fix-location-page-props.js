#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing PriceComparisonTable and WhyChooseUs props in all location pages...\n');

let fixed = 0;
let errors = 0;

function fixLocationPage(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const original = content;
    
    // Fix PriceComparisonTable - add locationName prop
    content = content.replace(
      /<PriceComparisonTable\s*\/>/g,
      '<PriceComparisonTable locationName={locationData.name} />'
    );
    
    // Fix WhyChooseUs - change location to locationName
    content = content.replace(
      /<WhyChooseUs location=\{locationData\.name\}\s*\/>/g,
      '<WhyChooseUs locationName={locationData.name} />'
    );
    
    if (content !== original) {
      fs.writeFileSync(filePath, content);
      return true;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    errors++;
  }
  return false;
}

// Fix Chennai pages
const chennaiDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'chennai');
if (fs.existsSync(chennaiDir)) {
  const chennaiAreas = fs.readdirSync(chennaiDir).filter(f => {
    const fullPath = path.join(chennaiDir, f);
    return fs.statSync(fullPath).isDirectory();
  });
  
  console.log(`📂 Fixing Chennai pages (${chennaiAreas.length} areas)...`);
  chennaiAreas.forEach(area => {
    const filePath = path.join(chennaiDir, area, 'page.tsx');
    if (fs.existsSync(filePath) && fixLocationPage(filePath)) {
      fixed++;
    }
  });
  console.log(`  ✅ Fixed ${fixed} Chennai pages`);
}

// Fix Kanchipuram pages
const kanchipuramDir = path.join(__dirname, '..', 'app', 'in', 'tamil-nadu', 'kanchipuram');
if (fs.existsSync(kanchipuramDir)) {
  const kanchipuramAreas = fs.readdirSync(kanchipuramDir).filter(f => {
    const fullPath = path.join(kanchipuramDir, f);
    return fs.statSync(fullPath).isDirectory();
  });
  
  console.log(`📂 Fixing Kanchipuram pages (${kanchipuramAreas.length} areas)...`);
  const kanchipuramFixed = kanchipuramAreas.filter(area => {
    const filePath = path.join(kanchipuramDir, area, 'page.tsx');
    return fs.existsSync(filePath) && fixLocationPage(filePath);
  }).length;
  
  fixed += kanchipuramFixed;
  console.log(`  ✅ Fixed ${kanchipuramFixed} Kanchipuram pages`);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`✅ Total fixed: ${fixed} pages`);
console.log(`❌ Errors: ${errors}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

