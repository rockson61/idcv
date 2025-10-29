const fs = require('fs');
const path = require('path');

// Analyze all components for duplicates, unused files, and relationships
const componentsDir = path.join(__dirname, '..', 'components');
const appDir = path.join(__dirname, '..', 'app');

const analysis = {
  totalComponents: 0,
  componentsByCategory: {},
  duplicateCandidates: [],
  unusedComponents: [],
  importGraph: {},
  sizeAnalysis: []
};

// Get all component files
function getAllComponents(dir, basePath = '') {
  const components = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      components.push(...getAllComponents(filePath, path.join(basePath, file)));
    } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const relativePath = path.join(basePath, file);
      const size = stat.size;
      const content = fs.readFileSync(filePath, 'utf8');
      
      components.push({
        name: file,
        path: relativePath,
        fullPath: filePath,
        size,
        lines: content.split('\n').length,
        exports: extractExports(content),
        imports: extractImports(content)
      });
    }
  }
  
  return components;
}

// Extract export names
function extractExports(content) {
  const exports = [];
  const exportRegex = /export\s+(?:const|function|class|interface|type)\s+(\w+)/g;
  const defaultExport = /export\s+default\s+(?:function\s+)?(\w+)/;
  
  let match;
  while ((match = exportRegex.exec(content)) !== null) {
    exports.push(match[1]);
  }
  
  const defaultMatch = content.match(defaultExport);
  if (defaultMatch) {
    exports.push(`default:${defaultMatch[1]}`);
  }
  
  return exports;
}

// Extract imports
function extractImports(content) {
  const imports = [];
  const importRegex = /import\s+.*?\s+from\s+['"](.*?)['"]/g;
  
  let match;
  while ((match = importRegex.exec(content)) !== null) {
    imports.push(match[1]);
  }
  
  return imports;
}

// Find where component is used
function isComponentUsed(componentPath, components) {
  const componentName = path.basename(componentPath, path.extname(componentPath));
  let usageCount = 0;
  
  for (const comp of components) {
    for (const imp of comp.imports) {
      if (imp.includes(componentName) || imp.includes(componentPath)) {
        usageCount++;
      }
    }
  }
  
  // Also check app directory
  try {
    const appFiles = getAllTsxFiles(appDir);
    for (const file of appFiles) {
      const content = fs.readFileSync(file, 'utf8');
      if (content.includes(componentName)) {
        usageCount++;
      }
    }
  } catch (e) {}
  
  return usageCount;
}

function getAllTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.')) {
      files.push(...getAllTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Find similar components (potential duplicates)
function findSimilarComponents(components) {
  const similar = [];
  
  for (let i = 0; i < components.length; i++) {
    for (let j = i + 1; j < components.length; j++) {
      const comp1 = components[i];
      const comp2 = components[j];
      
      // Check if names are similar
      const name1 = comp1.name.toLowerCase().replace(/\.(tsx|ts)$/, '');
      const name2 = comp2.name.toLowerCase().replace(/\.(tsx|ts)$/, '');
      
      // Similar if:
      // 1. Names are very similar
      // 2. Both export similar functions
      const nameSimilarity = levenshteinDistance(name1, name2);
      if (nameSimilarity < 5 && comp1.name !== comp2.name) {
        similar.push({
          component1: comp1.path,
          component2: comp2.path,
          similarity: nameSimilarity,
          reason: 'Similar names'
        });
      }
    }
  }
  
  return similar;
}

function levenshteinDistance(str1, str2) {
  const len1 = str1.length;
  const len2 = str2.length;
  const matrix = [];
  
  for (let i = 0; i <= len1; i++) {
    matrix[i] = [i];
  }
  
  for (let j = 0; j <= len2; j++) {
    matrix[0][j] = j;
  }
  
  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      const cost = str1[i - 1] === str2[j - 1] ? 0 : 1;
      matrix[i][j] = Math.min(
        matrix[i - 1][j] + 1,
        matrix[i][j - 1] + 1,
        matrix[i - 1][j - 1] + cost
      );
    }
  }
  
  return matrix[len1][len2];
}

// Run analysis
console.log('🔍 Analyzing components...\n');

const components = getAllComponents(componentsDir);
analysis.totalComponents = components.length;

// Group by category
const categories = {};
for (const comp of components) {
  const category = comp.path.split(path.sep)[0] || 'root';
  if (!categories[category]) {
    categories[category] = [];
  }
  categories[category].push(comp);
}
analysis.componentsByCategory = Object.keys(categories).reduce((acc, key) => {
  acc[key] = categories[key].length;
  return acc;
}, {});

// Find duplicates
analysis.duplicateCandidates = findSimilarComponents(components);

// Find unused components
console.log('Finding unused components...');
for (const comp of components) {
  const usageCount = isComponentUsed(comp.path, components);
  if (usageCount === 0) {
    analysis.unusedComponents.push({
      path: comp.path,
      size: comp.size,
      lines: comp.lines
    });
  }
}

// Size analysis
analysis.sizeAnalysis = components
  .sort((a, b) => b.size - a.size)
  .slice(0, 20)
  .map(c => ({
    path: c.path,
    size: `${(c.size / 1024).toFixed(2)} KB`,
    lines: c.lines
  }));

// Output results
console.log('\n📊 COMPONENT ANALYSIS RESULTS\n');
console.log('Total Components:', analysis.totalComponents);
console.log('\nComponents by Category:');
Object.entries(analysis.componentsByCategory).forEach(([cat, count]) => {
  console.log(`  ${cat}: ${count}`);
});

console.log('\n🔍 Duplicate Candidates:', analysis.duplicateCandidates.length);
if (analysis.duplicateCandidates.length > 0) {
  console.log('\nPotential Duplicates:');
  analysis.duplicateCandidates.forEach(dup => {
    console.log(`  - ${dup.component1} ≈ ${dup.component2} (${dup.reason})`);
  });
}

console.log('\n📦 Unused Components:', analysis.unusedComponents.length);
if (analysis.unusedComponents.length > 0) {
  console.log('\nUnused Components (candidates for removal):');
  analysis.unusedComponents.forEach(comp => {
    console.log(`  - ${comp.path} (${comp.lines} lines)`);
  });
}

console.log('\n📏 Largest Components (Top 20):');
analysis.sizeAnalysis.forEach((comp, i) => {
  console.log(`  ${i + 1}. ${comp.path} - ${comp.size} (${comp.lines} lines)`);
});

// Save to file
const outputPath = path.join(__dirname, '..', 'COMPONENT_ANALYSIS.md');
const markdown = `# Component Analysis Report

**Generated**: ${new Date().toISOString()}

## Summary

- **Total Components**: ${analysis.totalComponents}
- **Potential Duplicates**: ${analysis.duplicateCandidates.length}
- **Unused Components**: ${analysis.unusedComponents.length}

## Components by Category

${Object.entries(analysis.componentsByCategory)
  .map(([cat, count]) => `- **${cat}**: ${count} components`)
  .join('\n')}

## Potential Duplicate Components

${analysis.duplicateCandidates.length > 0 
  ? analysis.duplicateCandidates.map(dup => 
      `- \`${dup.component1}\` ≈ \`${dup.component2}\` (${dup.reason})`
    ).join('\n')
  : '*No duplicates found*'}

## Unused Components

${analysis.unusedComponents.length > 0
  ? analysis.unusedComponents.map(comp =>
      `- \`${comp.path}\` (${comp.lines} lines, ${(comp.size / 1024).toFixed(2)} KB)`
    ).join('\n')
  : '*All components are in use*'}

## Largest Components (Top 20)

${analysis.sizeAnalysis.map((comp, i) => 
  `${i + 1}. \`${comp.path}\` - ${comp.size} (${comp.lines} lines)`
).join('\n')}

## Recommendations

1. **Review unused components**: Consider removing or archiving unused components
2. **Consolidate duplicates**: Merge similar components to reduce redundancy
3. **Split large components**: Consider breaking down large components into smaller, reusable pieces
4. **Optimize imports**: Ensure all imports are necessary and properly tree-shaken

---
*Generated by automated component analyzer*
`;

fs.writeFileSync(outputPath, markdown, 'utf8');
console.log(`\n✅ Analysis saved to ${outputPath}`);
