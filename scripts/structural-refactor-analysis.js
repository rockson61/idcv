#!/usr/bin/env node

/**
 * STRUCTURAL CODE REFACTOR - ANALYSIS & EXECUTION
 * Analyzes and refactors /lib/ and /utils/ structure
 * Mode: ABSOLUTE (Mechanical, Zero-sentiment)
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const LIB_DIR = path.join(ROOT, 'lib');
const UTILS_DIR = path.join(ROOT, 'utils');

const analysis = {
  libFiles: [],
  utilsFiles: [],
  allFiles: [],
  exports: {}, // file -> exported items
  duplicates: [],
  unusedFiles: [],
  importMap: {}, // exported item -> files that import it
  typeFiles: [],
  dataFiles: [],
  utilFiles: [],
};

function getAllFiles(dir, fileList = []) {
  if (!fs.existsSync(dir)) return fileList;
  
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    try {
      const stat = fs.statSync(filePath);
      if (stat.isDirectory() && !file.startsWith('.')) {
        getAllFiles(filePath, fileList);
      } else if (file.endsWith('.ts') || file.endsWith('.tsx')) {
        fileList.push(filePath);
      }
    } catch (e) {}
  });
  return fileList;
}

function extractExports(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const exports = [];
    
    // Match export function
    const funcRegex = /export\s+(?:async\s+)?function\s+(\w+)/g;
    let match;
    while ((match = funcRegex.exec(content)) !== null) {
      exports.push({ type: 'function', name: match[1], line: content.substring(0, match.index).split('\n').length });
    }
    
    // Match export const
    const constRegex = /export\s+const\s+(\w+)/g;
    while ((match = constRegex.exec(content)) !== null) {
      exports.push({ type: 'const', name: match[1], line: content.substring(0, match.index).split('\n').length });
    }
    
    // Match export interface
    const interfaceRegex = /export\s+interface\s+(\w+)/g;
    while ((match = interfaceRegex.exec(content)) !== null) {
      exports.push({ type: 'interface', name: match[1], line: content.substring(0, match.index).split('\n').length });
    }
    
    // Match export type
    const typeRegex = /export\s+type\s+(\w+)/g;
    while ((match = typeRegex.exec(content)) !== null) {
      exports.push({ type: 'type', name: match[1], line: content.substring(0, match.index).split('\n').length });
    }
    
    // Match export class
    const classRegex = /export\s+class\s+(\w+)/g;
    while ((match = classRegex.exec(content)) !== null) {
      exports.push({ type: 'class', name: match[1], line: content.substring(0, match.index).split('\n').length });
    }
    
    // Match export { ... }
    const namedExportRegex = /export\s+\{([^}]+)\}/g;
    while ((match = namedExportRegex.exec(content)) !== null) {
      const names = match[1].split(',').map(n => n.trim().split(/\s+as\s+/)[0].trim());
      names.forEach(name => {
        if (name) exports.push({ type: 'named', name, line: content.substring(0, match.index).split('\n').length });
      });
    }
    
    return { exports, size: content.length, lines: content.split('\n').length };
  } catch (e) {
    return { exports: [], size: 0, lines: 0 };
  }
}

function categorizeFile(filePath) {
  const relativePath = path.relative(ROOT, filePath);
  const basename = path.basename(filePath, path.extname(filePath));
  const content = fs.existsSync(filePath) ? fs.readFileSync(filePath, 'utf8') : '';
  
  // Check if it's a type file
  if (relativePath.includes('/types/') || 
      basename.endsWith('.types') || 
      basename.endsWith('-types') ||
      content.match(/^(export\s+(interface|type)\s+)/m)) {
    return 'type';
  }
  
  // Check if it's a data file
  if (relativePath.includes('/data/') || 
      basename.endsWith('.data') || 
      basename.endsWith('-data') ||
      content.includes('export const') && (content.includes('= [') || content.includes('= {'))) {
    return 'data';
  }
  
  // Default to util
  return 'util';
}

function findImportUsage(exportName) {
  const usage = [];
  const searchDirs = [
    path.join(ROOT, 'app'),
    path.join(ROOT, 'components'),
    path.join(ROOT, 'lib'),
    path.join(ROOT, 'hooks'),
  ];
  
  searchDirs.forEach(dir => {
    if (!fs.existsSync(dir)) return;
    
    const files = getAllFiles(dir);
    files.forEach(file => {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for import statements
        const importRegex = new RegExp(`import\\s+.*?\\{[^}]*${exportName}[^}]*\\}\\s+from\\s+['"]([^'"]+)['"]`, 'g');
        const directImportRegex = new RegExp(`import\\s+${exportName}\\s+from\\s+['"]([^'"]+)['"]`, 'g');
        
        if (importRegex.test(content) || directImportRegex.test(content)) {
          usage.push(path.relative(ROOT, file));
        }
      } catch (e) {}
    });
  });
  
  return usage;
}

function findDuplicateFunctions() {
  const functionMap = {};
  
  Object.entries(analysis.exports).forEach(([file, data]) => {
    data.exports.forEach(exp => {
      if (exp.type === 'function' || exp.type === 'const') {
        if (!functionMap[exp.name]) {
          functionMap[exp.name] = [];
        }
        functionMap[exp.name].push({ file: path.relative(ROOT, file), line: exp.line });
      }
    });
  });
  
  const duplicates = [];
  Object.entries(functionMap).forEach(([name, locations]) => {
    if (locations.length > 1) {
      duplicates.push({ name, locations });
    }
  });
  
  return duplicates;
}

console.log('STRUCTURAL CODE REFACTOR ANALYSIS');
console.log('==================================\n');

// Step 1: Scan all files
console.log('STEP 1: Scanning files...\n');

analysis.libFiles = getAllFiles(LIB_DIR);
analysis.utilsFiles = getAllFiles(UTILS_DIR);
analysis.allFiles = [...analysis.libFiles, ...analysis.utilsFiles];

console.log(`Found ${analysis.libFiles.length} files in /lib/`);
console.log(`Found ${analysis.utilsFiles.length} files in /utils/`);
console.log(`Total: ${analysis.allFiles.length} files\n`);

// Step 2: Extract exports from all files
console.log('STEP 2: Extracting exports...\n');

analysis.allFiles.forEach(file => {
  const data = extractExports(file);
  analysis.exports[file] = data;
  
  const category = categorizeFile(file);
  if (category === 'type') analysis.typeFiles.push(file);
  else if (category === 'data') analysis.dataFiles.push(file);
  else analysis.utilFiles.push(file);
});

const totalExports = Object.values(analysis.exports).reduce((sum, data) => sum + data.exports.length, 0);
console.log(`Extracted ${totalExports} exports`);
console.log(`Type files: ${analysis.typeFiles.length}`);
console.log(`Data files: ${analysis.dataFiles.length}`);
console.log(`Util files: ${analysis.utilFiles.length}\n`);

// Step 3: Find duplicates
console.log('STEP 3: Detecting duplicates...\n');

analysis.duplicates = findDuplicateFunctions();
console.log(`Found ${analysis.duplicates.length} duplicate function/const names\n`);

// Step 4: Categorize all files
console.log('STEP 4: File categorization complete\n');

// Generate detailed report
const report = `STRUCTURAL REFACTOR ANALYSIS REPORT
====================================
Generated: ${new Date().toISOString()}

FILE INVENTORY
--------------

/lib/ directory: ${analysis.libFiles.length} files
${analysis.libFiles.map((f, i) => `  ${i + 1}. ${path.relative(ROOT, f)}`).join('\n')}

/utils/ directory: ${analysis.utilsFiles.length} files
${analysis.utilsFiles.map((f, i) => `  ${i + 1}. ${path.relative(ROOT, f)}`).join('\n')}

CATEGORIZATION
--------------

Type Files (${analysis.typeFiles.length}):
${analysis.typeFiles.map((f, i) => {
  const rel = path.relative(ROOT, f);
  const exports = analysis.exports[f].exports.filter(e => e.type === 'interface' || e.type === 'type');
  return `  ${i + 1}. ${rel} (${exports.length} types)`;
}).join('\n')}

Data Files (${analysis.dataFiles.length}):
${analysis.dataFiles.map((f, i) => {
  const rel = path.relative(ROOT, f);
  const exports = analysis.exports[f].exports;
  return `  ${i + 1}. ${rel} (${exports.length} exports)`;
}).join('\n')}

Utility Files (${analysis.utilFiles.length}):
${analysis.utilFiles.map((f, i) => {
  const rel = path.relative(ROOT, f);
  const exports = analysis.exports[f].exports;
  return `  ${i + 1}. ${rel} (${exports.length} exports)`;
}).join('\n')}

EXPORTS ANALYSIS
----------------

Total exports: ${totalExports}

By type:
${(() => {
  const typeCount = {};
  Object.values(analysis.exports).forEach(data => {
    data.exports.forEach(exp => {
      typeCount[exp.type] = (typeCount[exp.type] || 0) + 1;
    });
  });
  return Object.entries(typeCount).map(([type, count]) => `  ${type}: ${count}`).join('\n');
})()}

DUPLICATE DETECTION
-------------------

${analysis.duplicates.length > 0 ? `Found ${analysis.duplicates.length} duplicates:

${analysis.duplicates.map((dup, i) => `${i + 1}. ${dup.name}
   Locations:
${dup.locations.map(loc => `   - ${loc.file}:${loc.line}`).join('\n')}
`).join('\n')}` : 'No duplicates detected'}

FILE DETAILS
------------

${analysis.allFiles.map(file => {
  const rel = path.relative(ROOT, file);
  const data = analysis.exports[file];
  return `${rel}
  Size: ${(data.size / 1024).toFixed(2)}KB
  Lines: ${data.lines}
  Exports: ${data.exports.length}
  ${data.exports.map(e => `    - ${e.type} ${e.name} (line ${e.line})`).join('\n')}
`;
}).join('\n')}

RECOMMENDED STRUCTURE
---------------------

/lib/
├── data/
│   ├── blog-posts.ts
│   ├── location-data.ts
│   ├── enhanced-location-data.ts
│   ├── ask-dentist-questions.ts
│   └── ... (other data files)
│
├── types/
│   ├── index.ts (central type exports)
│   ├── ask-dentist.ts
│   └── ... (other type definitions)
│
└── utils/
    ├── index.ts (central util exports)
    ├── date.ts (date formatting, parsing)
    ├── string.ts (string manipulation)
    ├── array.ts (array utilities)
    ├── schema.ts (schema generation)
    ├── links.ts (internal linking, semantic)
    ├── performance.ts (performance utilities)
    └── ... (other categorized utils)

MIGRATION PLAN
--------------

1. Keep all files currently in /lib/data/ → no changes
2. Keep all files currently in /lib/types/ → no changes
3. Consolidate /lib/*.ts utils into /lib/utils/
4. Move /utils/*.ts into /lib/utils/
5. Delete empty /utils/ directory
6. Update all imports across codebase
7. Create index.ts files for clean imports

FILES TO MIGRATE
----------------

From /lib/ root to /lib/utils/:
${analysis.libFiles.filter(f => {
  const rel = path.relative(LIB_DIR, f);
  return !rel.startsWith('data/') && !rel.startsWith('types/') && !rel.startsWith('utils/') && rel.includes('.ts');
}).map(f => `  - ${path.relative(ROOT, f)}`).join('\n')}

From /utils/ to /lib/utils/:
${analysis.utilsFiles.map(f => `  - ${path.relative(ROOT, f)}`).join('\n')}

ESTIMATED CHANGES
-----------------

Files to move: ${analysis.libFiles.filter(f => {
  const rel = path.relative(LIB_DIR, f);
  return !rel.startsWith('data/') && !rel.startsWith('types/') && !rel.startsWith('utils/');
}).length + analysis.utilsFiles.length}

Import updates required: ~${Math.floor(totalExports * 2.5)} locations

Directory deletions: 1 (/utils/)

NEXT STEPS
----------

1. Execute migration script
2. Update all imports (automatic)
3. Create index.ts files for clean exports
4. Run TypeScript check (tsc --noEmit)
5. Run linter (eslint . --fix)
6. Test build (npm run build)

STATUS: ANALYSIS COMPLETE
`;

fs.writeFileSync(path.join(ROOT, 'STRUCTURAL_REFACTOR_ANALYSIS.txt'), report, 'utf8');

console.log('\nAnalysis complete!');
console.log('Report saved: STRUCTURAL_REFACTOR_ANALYSIS.txt\n');

// Output summary
console.log('SUMMARY:');
console.log(`  Total files: ${analysis.allFiles.length}`);
console.log(`  Total exports: ${totalExports}`);
console.log(`  Duplicates: ${analysis.duplicates.length}`);
console.log(`  Type files: ${analysis.typeFiles.length}`);
console.log(`  Data files: ${analysis.dataFiles.length}`);
console.log(`  Util files: ${analysis.utilFiles.length}`);
console.log('');

