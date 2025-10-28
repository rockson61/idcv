const fs = require('fs');
const path = require('path');

console.log('🔍 Fixing breadcrumb items missing href property...\n');

function fixBreadcrumbHref(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;
  
  // Pattern: { title: 'Something' } at end of breadcrumb items array
  // Should be: { title: 'Something', href: '#' } or use current URL
  
  // Find breadcrumb items without href
  const breadcrumbRegex = /<Breadcrumb\s+items=\{(\[[^\]]+\])\}/g;
  
  let match;
  while ((match = breadcrumbRegex.exec(content)) !== null) {
    const itemsArray = match[1];
    
    // Check if any item has title but no href
    if (itemsArray.match(/\{\s*title:\s*['"][^'"]+['"]\s*\}(?!\s*,\s*href:)/)) {
      // Replace items that have only title
      const fixedArray = itemsArray.replace(
        /\{\s*title:\s*(['"])([^'"]+)\1\s*\}/g,
        (m, quote, title) => {
          // For the last item (current page), use '#' or generate from title
          const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
          return `{ title: ${quote}${title}${quote}, href: '#' }`;
        }
      );
      
      if (fixedArray !== itemsArray) {
        content = content.replace(itemsArray, fixedArray);
        changed = true;
      }
    }
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
      } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
        if (fixBreadcrumbHref(filePath)) {
          fixed.push(filePath);
        }
      }
    }
  }
  
  walk(dir);
  return fixed;
}

const dirsToCheck = [
  path.join(__dirname, '..', 'app'),
];

let totalFixed = 0;
dirsToCheck.forEach(dir => {
  if (fs.existsSync(dir)) {
    const fixed = processDirectory(dir);
    totalFixed += fixed.length;
    
    if (fixed.length > 0) {
      console.log(`   Fixed ${fixed.length} files in app/`);
    }
  }
});

console.log(`\n✅ Total: ${totalFixed} files fixed!\n`);
console.log('All breadcrumb items now have required href property!\n');

