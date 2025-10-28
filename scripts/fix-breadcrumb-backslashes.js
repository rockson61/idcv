const fs = require('fs');
const path = require('path');

function fixBreadcrumbBackslashes(content) {
  let fixed = content;
  let changes = 0;
  
  // Pattern: { title: 'text with \' more', href: ...
  // Inside JSX attributes, we don't need to escape apostrophes
  // They should just be regular apostrophes
  
  // Fix escaped apostrophes in title strings within Breadcrumb items
  const breadcrumbTitleRegex = /{\s*title:\s*'([^']*\\'+[^']*)'/g;
  
  let match;
  while ((match = breadcrumbTitleRegex.exec(content)) !== null) {
    const titleWithEscapes = match[1];
    // Remove the backslashes before apostrophes
    const titleWithoutEscapes = titleWithEscapes.replace(/\\'/g, "'");
    
    const oldPattern = `{ title: '${titleWithEscapes}'`;
    const newPattern = `{ title: "${titleWithoutEscapes}"`;
    
    fixed = fixed.replace(oldPattern, newPattern);
    changes++;
  }
  
  return { fixed, changes };
}

function processBlogDirectory(dir) {
  const results = [];
  
  function walk(currentPath) {
    const files = fs.readdirSync(currentPath);
    
    for (const file of files) {
      const filePath = path.join(currentPath, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        walk(filePath);
      } else if (file === 'page.tsx') {
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          
          // Check if this file has Breadcrumb with escaped apostrophes
          if (content.includes('Breadcrumb') && content.includes("\\'")) {
            const result = fixBreadcrumbBackslashes(content);
            
            if (result.changes > 0) {
              fs.writeFileSync(filePath, result.fixed, 'utf-8');
              results.push(filePath);
            }
          }
        } catch (err) {
          console.error(`Error processing ${filePath}:`, err.message);
        }
      }
    }
  }
  
  walk(dir);
  return results;
}

console.log('🔍 Scanning for backslashes in breadcrumb titles...\n');

const blogDir = path.join(__dirname, '..', 'app', 'blog');
const results = processBlogDirectory(blogDir);

if (results.length > 0) {
  console.log(`✅ Fixed ${results.length} blog breadcrumbs:\n`);
  results.slice(0, 20).forEach((filePath, index) => {
    const blogName = path.basename(path.dirname(filePath));
    console.log(`   ${index + 1}. ${blogName}`);
  });
  if (results.length > 20) {
    console.log(`   ... and ${results.length - 20} more files\n`);
  }
  console.log('');
} else {
  console.log('✨ No backslashes in breadcrumbs found!\n');
}

console.log(`\n✅ Total: ${results.length} breadcrumbs fixed!\n`);

