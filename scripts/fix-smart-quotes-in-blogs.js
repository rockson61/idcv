const fs = require('fs');
const path = require('path');

function fixSmartQuotes(content) {
  let fixed = content;
  let changes = 0;
  
  // Fix smart single quotes (U+2019) to regular apostrophe
  if (fixed.includes('\u2019')) {
    fixed = fixed.replace(/\u2019/g, "'");
    changes++;
  }
  
  // Fix smart left single quote (U+2018)
  if (fixed.includes('\u2018')) {
    fixed = fixed.replace(/\u2018/g, "'");
    changes++;
  }
  
  // Fix smart left double quotes (U+201C)
  if (fixed.includes('\u201C')) {
    fixed = fixed.replace(/\u201C/g, '"');
    changes++;
  }
  
  // Fix smart right double quotes (U+201D)
  if (fixed.includes('\u201D')) {
    fixed = fixed.replace(/\u201D/g, '"');
    changes++;
  }
  
  // Fix em dashes (U+2014)
  if (fixed.includes('\u2014')) {
    fixed = fixed.replace(/\u2014/g, '-');
    changes++;
  }
  
  // Fix en dashes (U+2013)
  if (fixed.includes('\u2013')) {
    fixed = fixed.replace(/\u2013/g, '-');
    changes++;
  }
  
  return { fixed, changes: changes > 0 };
}

function processBlogDirectory(dir) {
  const fixed = [];
  
  function walk(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walk(filePath);
      } else if (file === 'page.tsx' || file === 'page.ts') {
        const content = fs.readFileSync(filePath, 'utf-8');
        const result = fixSmartQuotes(content);
        
        if (result.changes) {
          fs.writeFileSync(filePath, result.fixed, 'utf-8');
          fixed.push(filePath);
        }
      }
    }
  }
  
  walk(dir);
  return fixed;
}

console.log('🔍 Scanning for smart quotes in blog posts...\n');

const blogDir = path.join(__dirname, '..', 'app', 'blog');
const fixed = processBlogDirectory(blogDir);

if (fixed.length > 0) {
  console.log(`✅ Fixed ${fixed.length} blog posts:\n`);
  fixed.slice(0, 20).forEach((file, index) => {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    console.log(`   ${index + 1}. ${relativePath}`);
  });
  if (fixed.length > 20) {
    console.log(`   ... and ${fixed.length - 20} more files\n`);
  }
  console.log('');
} else {
  console.log('✨ No smart quotes found!\n');
}

console.log(`\n✅ Total: ${fixed.length} blog posts fixed!\n`);
