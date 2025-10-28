const fs = require('fs');
const path = require('path');

function fixAllSyntaxErrors(content, filePath) {
  let fixed = content;
  let changes = [];
  
  // Fix 1: Remove trailing backslashes at end of string values
  // Pattern: 'text\' or "text\"
  const trailingBackslashRegex = /(['"])((?:[^'"\\]|\\.)*)\\(['"])/g;
  if (fixed.match(trailingBackslashRegex)) {
    fixed = fixed.replace(trailingBackslashRegex, (match, quote1, text, quote2) => {
      // Remove the trailing backslash
      return `${quote1}${text}${quote2}`;
    });
    changes.push('trailing backslashes');
  }
  
  // Fix 2: Fix double-escaped apostrophes (Isn\\'t -> Isn\'t)
  if (fixed.includes("\\\\'")) {
    fixed = fixed.replace(/\\\\\'/g, "\\'");
    changes.push('double-escaped apostrophes');
  }
  
  // Fix 3: Fix breadcrumb hrefs with extra quotes
  // Pattern: href: `/blog/category/'slug'`
  const breadcrumbRegex = /href:\s*`\/blog\/category\/'([^']+)'`/g;
  if (fixed.match(breadcrumbRegex)) {
    fixed = fixed.replace(breadcrumbRegex, (match, slug) => {
      return `href: \`/blog/category/${slug}\``;
    });
    changes.push('breadcrumb category hrefs');
  }
  
  // Pattern: href: `/blog/'slug'`
  const blogHrefRegex = /href:\s*`\/blog\/'([^']+)'`/g;
  if (fixed.match(blogHrefRegex)) {
    fixed = fixed.replace(blogHrefRegex, (match, slug) => {
      return `href: \`/blog/${slug}\``;
    });
    changes.push('breadcrumb blog hrefs');
  }
  
  // Fix 4: Properly escape unescaped apostrophes in single-quoted strings
  // This is tricky - we need to find apostrophes that aren't already escaped
  const stringRegex = /([\w]+):\s*'([^']*(?:[^\\]'[^']*)*)'/g;
  const matches = [...content.matchAll(stringRegex)];
  
  for (const match of matches) {
    const prop = match[1];
    const value = match[2];
    
    // Check if the value contains unescaped apostrophes
    if (value.includes("'") && !value.includes("\\'")) {
      const escapedValue = value.replace(/'/g, "\\'");
      const oldPattern = `${prop}: '${value}'`;
      const newPattern = `${prop}: '${escapedValue}'`;
      fixed = fixed.replace(oldPattern, newPattern);
      changes.push(`escaped apostrophes in ${prop}`);
    }
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
          const result = fixAllSyntaxErrors(content, filePath);
          
          if (result.changes.length > 0) {
            fs.writeFileSync(filePath, result.fixed, 'utf-8');
            results.push({
              path: filePath,
              changes: result.changes
            });
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

console.log('🔍 Scanning ALL blog posts for syntax errors...\n');

const blogDir = path.join(__dirname, '..', 'app', 'blog');
const results = processBlogDirectory(blogDir);

if (results.length > 0) {
  console.log(`✅ Fixed ${results.length} blog posts:\n`);
  results.slice(0, 50).forEach((result, index) => {
    const blogName = path.basename(path.dirname(result.path));
    const changesList = result.changes.join(', ');
    console.log(`   ${index + 1}. ${blogName}`);
    console.log(`      → ${changesList}`);
  });
  if (results.length > 50) {
    console.log(`   ... and ${results.length - 50} more files\n`);
  }
  console.log('');
} else {
  console.log('✨ No syntax errors found!\n');
}

console.log(`\n✅ Total: ${results.length} blog posts fixed!\n`);

