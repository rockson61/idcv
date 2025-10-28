#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🔧 Comprehensive Syntax Fix Script\n');

// Fix 1: Rename files that start with numbers
const problematicFiles = [
  'app/blog/6mm-gum-pocket',
  'app/blog/3rd-molar-causing-crowding',
];

console.log('📝 Step 1: Renaming files that start with numbers...');
problematicFiles.forEach(dir => {
  const fullPath = path.join(__dirname, '..', dir);
  if (fs.existsSync(fullPath)) {
    const dirname = path.dirname(fullPath);
    const basename = path.basename(fullPath);
    const newName = basename.replace(/^(\d+)/, (match) => {
      const numberMap = {
        '3': 'three',
        '6': 'six',
        '4': 'four',
      };
      return numberMap[match] || match;
    });
    
    if (basename !== newName) {
      const newPath = path.join(dirname, newName);
      try {
        if (!fs.existsSync(newPath)) {
          fs.renameSync(fullPath, newPath);
          console.log(`  ✅ Renamed: ${basename} → ${newName}`);
        }
      } catch (error) {
        console.log(`  ⚠️  Could not rename ${basename}:`, error.message);
      }
    }
  }
});

// Fix 2: Fix function names that start with numbers
console.log('\n📝 Step 2: Fixing function names...');
const fixFunctionName = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    // Fix function names starting with numbers
    content = content.replace(/export default function (\d+)(\w+)\(/g, (match, num, rest) => {
      const numberWords = { '3': 'Three', '4': 'Four', '6': 'Six', '8': 'Eight' };
      return `export default function ${numberWords[num] || num}${rest}(`;
    });
    
    // Fix apostrophes in strings
    content = content.replace(/answer: '([^']*don't[^']*)'/g, (match, text) => {
      return `answer: '${text.replace(/don't/g, "don\\'t")}'`;
    });
    
    content = content.replace(/answer: '([^']*can't[^']*)'/g, (match, text) => {
      return `answer: '${text.replace(/can't/g, "can\\'t")}'`;
    });
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content);
      return true;
    }
  } catch (error) {
    console.error(`  ❌ Error fixing ${filePath}:`, error.message);
  }
  return false;
};

// Find and fix all page.tsx files
const findAndFixFiles = (dir) => {
  let fixed = 0;
  
  const walk = (currentPath) => {
    const files = fs.readdirSync(currentPath);
    
    files.forEach(file => {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
        walk(filePath);
      } else if (file === 'page.tsx') {
        if (fixFunctionName(filePath)) {
          console.log(`  ✅ Fixed: ${filePath.replace(__dirname + '/../', '')}`);
          fixed++;
        }
      }
    });
  };
  
  walk(dir);
  return fixed;
};

const appDir = path.join(__dirname, '..', 'app');
const fixedCount = findAndFixFiles(appDir);

console.log(`\n✅ Fixed ${fixedCount} files`);
console.log('');

