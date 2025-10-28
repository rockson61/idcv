const fs = require('fs');
const path = require('path');

function fixUnescapedApostrophes(content) {
  let fixed = content;
  let changes = 0;
  
  // Pattern 1: headline: 'text with ' more text'
  // Find headline properties with unescaped apostrophes
  const headlineRegex = /headline:\s*'([^']*)'([^,\n]*)',/g;
  const matches = [...content.matchAll(headlineRegex)];
  
  for (const match of matches) {
    const fullMatch = match[0];
    const beforeApostrophe = match[1];
    const afterApostrophe = match[2];
    
    // If there's content after the first apostrophe, it means the apostrophe wasn't escaped
    if (afterApostrophe && afterApostrophe.trim()) {
      // Reconstruct the proper string with escaped apostrophe
      const fullText = beforeApostrophe + "'" + afterApostrophe;
      const escapedText = fullText.replace(/'/g, "\\'");
      const replacement = `headline: '${escapedText}',`;
      
      fixed = fixed.replace(fullMatch, replacement);
      changes++;
    }
  }
  
  // Pattern 2: Fix any remaining unescaped apostrophes in object literal strings
  // Look for property: 'value with ' problem'
  const propertyRegex = /(title|alt|description|name):\s*'([^'\\]*)(?<!\\)'([^']*?)'/g;
  
  fixed = fixed.replace(propertyRegex, (match, prop, before, after) => {
    if (after && after.trim() && !after.startsWith(',') && !after.startsWith('}')) {
      const fullText = before + "'" + after;
      const escapedText = fullText.replace(/'/g, "\\'");
      return `${prop}: '${escapedText}'`;
    }
    return match;
  });
  
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
      } else if (file === 'page.tsx') {
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          
          // Check if file has problematic patterns
          if (content.includes("headline: '") && content.match(/headline:\s*'[^']*'[^,\n]+',/)) {
            const result = fixUnescapedApostrophes(content);
            
            if (result.changes) {
              fs.writeFileSync(filePath, result.fixed, 'utf-8');
              fixed.push(filePath);
            }
          }
        } catch (err) {
          console.error(`Error processing ${filePath}:`, err.message);
        }
      }
    }
  }
  
  walk(dir);
  return fixed;
}

console.log('🔍 Scanning for unescaped apostrophes in blog posts...\n');

const blogDir = path.join(__dirname, '..', 'app', 'blog');
const fixed = processBlogDirectory(blogDir);

if (fixed.length > 0) {
  console.log(`✅ Fixed ${fixed.length} blog posts:\n`);
  fixed.slice(0, 30).forEach((file, index) => {
    const relativePath = path.relative(path.join(__dirname, '..'), file);
    const blogName = path.basename(path.dirname(file));
    console.log(`   ${index + 1}. ${blogName}`);
  });
  if (fixed.length > 30) {
    console.log(`   ... and ${fixed.length - 30} more files\n`);
  }
  console.log('');
} else {
  console.log('✨ No unescaped apostrophes found!\n');
}

console.log(`\n✅ Total: ${fixed.length} blog posts fixed!\n`);

