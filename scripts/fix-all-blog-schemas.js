const fs = require('fs');
const path = require('path');

function fixSchemaApostrophes(content) {
  let fixed = content;
  let changes = 0;
  
  // Find the articleSchema object
  const schemaStartRegex = /const articleSchema = \{/;
  const schemaStartMatch = content.match(schemaStartRegex);
  
  if (!schemaStartMatch) {
    return { fixed, changes: 0 };
  }
  
  // Find the headline within the schema
  // Pattern: headline: 'text with ' more text',
  const headlineRegex = /(\s+headline:\s*)'([^']*)'([^',]*)',/g;
  
  let match;
  while ((match = headlineRegex.exec(content)) !== null) {
    const indent = match[1];
    const beforeApostrophe = match[2];
    const afterApostrophe = match[3];
    
    // If there's content after the first closing quote, the apostrophe wasn't escaped
    if (afterApostrophe && afterApostrophe.trim()) {
      const fullMatch = match[0];
      const fullText = beforeApostrophe + "'" + afterApostrophe;
      const escapedText = fullText.replace(/'/g, "\\'");
      const replacement = `${indent}'${escapedText}',`;
      
      fixed = fixed.replace(fullMatch, replacement);
      changes++;
    }
  }
  
  // Also fix any other properties in the schema with unescaped apostrophes
  // Pattern: name: 'Dr. Rockson Samuel', jobTitle: 'text'
  const propertyRegex = /(\s+(?:name|jobTitle|description):\s*)'([^'\\]*)(?<!\\)'([^',}]*)',/g;
  
  while ((match = propertyRegex.exec(content)) !== null) {
    const propAndIndent = match[1];
    const beforeApostrophe = match[2];
    const afterApostrophe = match[3];
    
    if (afterApostrophe && afterApostrophe.trim() && !afterApostrophe.startsWith(',')) {
      const fullMatch = match[0];
      const fullText = beforeApostrophe + "'" + afterApostrophe;
      const escapedText = fullText.replace(/'/g, "\\'");
      const replacement = `${propAndIndent}'${escapedText}',`;
      
      fixed = fixed.replace(fullMatch, replacement);
      changes++;
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
          
          // Check if this file has an articleSchema
          if (content.includes('const articleSchema = {')) {
            const result = fixSchemaApostrophes(content);
            
            if (result.changes > 0) {
              fs.writeFileSync(filePath, result.fixed, 'utf-8');
              results.push({
                path: filePath,
                changes: result.changes
              });
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

console.log('🔍 Scanning ALL blog schemas for unescaped apostrophes...\n');

const blogDir = path.join(__dirname, '..', 'app', 'blog');
const results = processBlogDirectory(blogDir);

if (results.length > 0) {
  console.log(`✅ Fixed ${results.length} blog schemas:\n`);
  results.slice(0, 50).forEach((result, index) => {
    const blogName = path.basename(path.dirname(result.path));
    console.log(`   ${index + 1}. ${blogName} (${result.changes} fixes)`);
  });
  if (results.length > 50) {
    console.log(`   ... and ${results.length - 50} more files\n`);
  }
  console.log('');
} else {
  console.log('✨ No schema errors found!\n');
}

console.log(`\n✅ Total: ${results.length} blog schemas fixed!\n`);

