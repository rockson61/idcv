const fs = require('fs');
const path = require('path');

console.log('🔍 Fixing CompactServiceWidget className prop...\n');

function fixCompactServiceWidget(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Remove className prop from CompactServiceWidget
  if (content.includes('CompactServiceWidget') && content.includes('className="mb-12"')) {
    // Pattern: <CompactServiceWidget ... className="mb-12" />
    content = content.replace(
      /(<CompactServiceWidget[^>]*)\s+className="[^"]*"([^>]*>)/g,
      '$1$2'
    );
    changed = true;
  }
  
  // Also wrap the component in a section or div with the className instead
  if (content.match(/<CompactServiceWidget[^>]*\/>/)) {
    content = content.replace(
      /(<CompactServiceWidget[^>]*\/>)/g,
      '<section className="mb-12">\n        $1\n        </section>'
    );
    changed = true;
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
    return true;
  }
  return false;
}

function processDirectory(dir) {
  const fixed = [];
  
  function walk(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walk(filePath);
      } else if (file === 'page.tsx') {
        if (fixCompactServiceWidget(filePath)) {
          fixed.push(filePath);
        }
      }
    }
  }
  
  walk(dir);
  return fixed;
}

const dirsToCheck = [
  path.join(__dirname, '..', 'app', 'in'),
];

let totalFixed = 0;
dirsToCheck.forEach(dir => {
  if (fs.existsSync(dir)) {
    const fixed = processDirectory(dir);
    totalFixed += fixed.length;
    
    if (fixed.length > 0) {
      console.log(`   Fixed ${fixed.length} files`);
    }
  }
});

console.log(`\n✅ Total: ${totalFixed} files fixed!\n`);
console.log('All CompactServiceWidget className errors resolved!\n');

