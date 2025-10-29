#!/usr/bin/env node

/**
 * COMPREHENSIVE FULL AUDIT
 * Complete analysis of Next.js project covering:
 * 1. Component audit
 * 2. Page-by-page audit
 * 3. Widget functionality
 * 4. Optimization opportunities
 * 5. Error & performance
 * 6. Consistency & UX
 * 7. Structured report generation
 */

const fs = require('fs');
const path = require('path');

const config = {
  rootDir: path.join(__dirname, '..'),
  appDir: path.join(__dirname, '..', 'app'),
  componentsDir: path.join(__dirname, '..', 'components'),
  publicDir: path.join(__dirname, '..', 'public'),
  libDir: path.join(__dirname, '..', 'lib'),
};

const audit = {
  summary: {
    total_pages: 0,
    total_components: 0,
    total_widgets: 0,
    issues_found: 0,
    optimizations_found: 0,
  },
  issues: [],
  duplicates: [],
  unused: [],
  optimizations: [],
  performance: [],
  consistency: [],
  widgets: [],
};

console.log('╔══════════════════════════════════════════════════════════════╗');
console.log('║                                                              ║');
console.log('║     COMPREHENSIVE NEXT.JS PROJECT AUDIT                      ║');
console.log('║     Full System Analysis                                     ║');
console.log('║                                                              ║');
console.log('╚══════════════════════════════════════════════════════════════╝\n');

// ============================================
// CATEGORY 1: COMPONENT AUDIT
// ============================================

console.log('1️⃣  COMPONENT AUDIT\n');

function getAllFiles(dir, ext = '.tsx') {
  const files = [];
  try {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      try {
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...getAllFiles(fullPath, ext));
        } else if (item.endsWith(ext)) {
          files.push(fullPath);
        }
      } catch (e) {}
    }
  } catch (e) {}
  return files;
}

const components = getAllFiles(config.componentsDir);
audit.summary.total_components = components.length;

console.log(`   Found ${components.length} components`);

// Find duplicates by name
const componentsByName = {};
components.forEach(comp => {
  const name = path.basename(comp, path.extname(comp)).toLowerCase();
  if (!componentsByName[name]) {
    componentsByName[name] = [];
  }
  componentsByName[name].push(path.relative(config.rootDir, comp));
});

Object.entries(componentsByName).forEach(([name, paths]) => {
  if (paths.length > 1) {
    audit.duplicates.push({
      type: 'duplicate_component',
      name: name,
      files: paths,
      suggested_fix: `Merge into single component: ${paths[0]}`,
    });
    audit.summary.issues_found++;
  }
});

console.log(`   Found ${audit.duplicates.length} potential duplicates\n`);

// ============================================
// CATEGORY 2: PAGE-BY-PAGE AUDIT
// ============================================

console.log('2️⃣  PAGE-BY-PAGE AUDIT\n');

const pages = getAllFiles(config.appDir, 'page.tsx');
audit.summary.total_pages = pages.length;

console.log(`   Found ${pages.length} pages`);

let pagesWithMetadata = 0;
let pagesWithoutLayout = 0;
let pagesWithErrors = 0;

pages.forEach(pagePath => {
  try {
    const content = fs.readFileSync(pagePath, 'utf8');
    const relativePath = path.relative(config.rootDir, pagePath);
    
    // Check for metadata
    if (content.includes('export const metadata') || content.includes('export async function generateMetadata')) {
      pagesWithMetadata++;
    } else {
      audit.issues.push({
        type: 'missing_metadata',
        file: relativePath,
        severity: 'medium',
        details: 'Page missing metadata export',
        suggested_fix: 'Add export const metadata with title and description',
      });
      audit.summary.issues_found++;
    }
    
    // Check for broken imports
    const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      const importPath = match[1];
      
      // Check for relative imports
      if (importPath.startsWith('.')) {
        const resolvedPath = path.resolve(path.dirname(pagePath), importPath);
        const possiblePaths = [
          resolvedPath + '.tsx',
          resolvedPath + '.ts',
          resolvedPath + '/index.tsx',
          resolvedPath + '/index.ts',
        ];
        
        const exists = possiblePaths.some(p => fs.existsSync(p));
        
        if (!exists) {
          audit.issues.push({
            type: 'missing_import',
            file: relativePath,
            severity: 'high',
            details: `Imports non-existent file: ${importPath}`,
            suggested_fix: `Check if ${importPath} exists or update import path`,
          });
          audit.summary.issues_found++;
          pagesWithErrors++;
        }
      }
    }
    
    // Check for 'use client' usage
    if (content.includes("'use client'")) {
      // Check if actually needs it
      const needsUseClient = /use(State|Effect|Ref|Callback|Memo|Context)/.test(content) ||
                            content.includes('onClick') ||
                            content.includes('onChange');
      
      if (!needsUseClient) {
        audit.optimizations.push({
          type: 'unnecessary_use_client',
          file: relativePath,
          details: "Has 'use client' but may not need it",
          benefit: 'Can be server component for better performance',
        });
        audit.summary.optimizations_found++;
      }
    }
    
  } catch (error) {
    pagesWithErrors++;
    audit.issues.push({
      type: 'file_read_error',
      file: path.relative(config.rootDir, pagePath),
      severity: 'high',
      details: `Cannot read file: ${error.message}`,
    });
    audit.summary.issues_found++;
  }
});

console.log(`   Pages with metadata: ${pagesWithMetadata}`);
console.log(`   Pages with errors: ${pagesWithErrors}\n`);

// ============================================
// CATEGORY 3: WIDGET FUNCTIONALITY
// ============================================

console.log('3️⃣  WIDGET FUNCTIONALITY TEST\n');

const widgets = components.filter(c => 
  c.toLowerCase().includes('widget') ||
  c.includes('/widgets/')
);

audit.summary.total_widgets = widgets.length;
console.log(`   Found ${widgets.length} widgets`);

widgets.forEach(widgetPath => {
  const content = fs.readFileSync(widgetPath, 'utf8');
  const name = path.basename(widgetPath, '.tsx');
  const relativePath = path.relative(config.rootDir, widgetPath);
  
  // Check if widget has 'use client' when using hooks
  const hasClientHooks = /use(State|Effect|Ref)/.test(content);
  const hasUseClient = content.includes("'use client'");
  
  if (hasClientHooks && !hasUseClient) {
    audit.issues.push({
      type: 'missing_use_client',
      file: relativePath,
      severity: 'high',
      details: `Widget uses client hooks but missing 'use client' directive`,
      suggested_fix: `Add 'use client' at top of file`,
    });
    audit.summary.issues_found++;
  }
  
  // Check widget size
  const lines = content.split('\n').length;
  if (lines > 300) {
    audit.optimizations.push({
      type: 'large_widget',
      file: relativePath,
      details: `Widget is ${lines} lines - consider splitting`,
      benefit: 'Better maintainability and bundle size',
    });
    audit.summary.optimizations_found++;
  }
  
  audit.widgets.push({
    name,
    path: relativePath,
    lines,
    hasUseClient,
    hasClientHooks,
  });
});

console.log(`   Widgets analyzed: ${widgets.length}\n`);

// ============================================
// CATEGORY 4: OPTIMIZATION OPPORTUNITIES
// ============================================

console.log('4️⃣  OPTIMIZATION OPPORTUNITIES\n');

// Find large components
components.forEach(compPath => {
  try {
    const content = fs.readFileSync(compPath, 'utf8');
    const lines = content.split('\n').length;
    const stat = fs.statSync(compPath);
    
    if (lines > 500) {
      audit.optimizations.push({
        type: 'large_component',
        file: path.relative(config.rootDir, compPath),
        details: `${lines} lines, ${(stat.size / 1024).toFixed(2)}KB`,
        suggested_fix: 'Split into smaller components',
        benefit: 'Better code splitting and lazy loading',
      });
      audit.summary.optimizations_found++;
    }
    
    // Check for inline styles
    if (content.includes('style={{')) {
      audit.consistency.push({
        type: 'inline_styles',
        file: path.relative(config.rootDir, compPath),
        details: 'Uses inline styles',
        recommendation: 'Prefer Tailwind CSS classes',
      });
    }
    
  } catch (e) {}
});

console.log(`   Optimization opportunities found: ${audit.summary.optimizations_found}\n`);

// ============================================
// CATEGORY 5: PERFORMANCE ANALYSIS
// ============================================

console.log('5️⃣  PERFORMANCE ANALYSIS\n');

// Check for heavy re-renders
components.forEach(compPath => {
  try {
    const content = fs.readFileSync(compPath, 'utf8');
    const relativePath = path.relative(config.rootDir, compPath);
    
    // Check if should use React.memo
    if (content.includes('export function') || content.includes('export const')) {
      const hasExpensiveLogic = content.includes('map(') || 
                                content.includes('filter(') || 
                                content.includes('reduce(');
      const usesMemo = content.includes('useMemo') || content.includes('React.memo');
      
      if (hasExpensiveLogic && !usesMemo) {
        audit.performance.push({
          type: 'potential_memo_candidate',
          file: relativePath,
          details: 'Component has expensive logic without memoization',
          suggested_fix: 'Consider React.memo or useMemo',
        });
      }
    }
    
  } catch (e) {}
});

console.log(`   Performance issues found: ${audit.performance.length}\n`);

// ============================================
// CATEGORY 6: CONSISTENCY CHECK
// ============================================

console.log('6️⃣  CONSISTENCY & UX CHECK\n');

// Check naming conventions
const namingIssues = [];
components.forEach(compPath => {
  const filename = path.basename(compPath, '.tsx');
  
  // Check if PascalCase
  if (filename !== filename.charAt(0).toUpperCase() + filename.slice(1)) {
    if (!filename.includes('-') && !filename.startsWith('use')) {
      namingIssues.push({
        file: path.relative(config.rootDir, compPath),
        issue: 'Not PascalCase',
      });
    }
  }
});

if (namingIssues.length > 0) {
  audit.consistency.push({
    type: 'naming_convention',
    count: namingIssues.length,
    details: 'Components not following PascalCase convention',
    files: namingIssues.slice(0, 10).map(n => n.file),
  });
}

console.log(`   Consistency issues found: ${audit.consistency.length}\n`);

// ============================================
// GENERATE REPORT
// ============================================

console.log('7️⃣  GENERATING COMPREHENSIVE REPORT\n');

const report = `# 🔍 COMPREHENSIVE PROJECT AUDIT REPORT

**Generated**: ${new Date().toISOString()}  
**Project**: Indira Dental Clinic Next.js Website  
**Next.js Version**: 15.5.6

---

## 📊 EXECUTIVE SUMMARY

### Project Statistics
- **Total Pages**: ${audit.summary.total_pages}
- **Total Components**: ${audit.summary.total_components}
- **Total Widgets**: ${audit.summary.total_widgets}
- **Issues Found**: ${audit.summary.issues_found}
- **Optimization Opportunities**: ${audit.summary.optimizations_found}

### Health Score
${audit.summary.issues_found === 0 ? '✅ **EXCELLENT** - No critical issues' : 
  audit.summary.issues_found < 10 ? '✅ **GOOD** - Minor issues only' :
  audit.summary.issues_found < 50 ? '⚠️  **FAIR** - Some issues to address' :
  '🔴 **NEEDS ATTENTION** - Multiple issues found'}

---

## 🚨 CRITICAL ISSUES

${audit.issues.filter(i => i.severity === 'high').length === 0 ? 
  '*No critical issues found!*' :
  audit.issues.filter(i => i.severity === 'high').map((issue, i) => 
    `### ${i + 1}. ${issue.type.replace(/_/g, ' ').toUpperCase()}
- **File**: \`${issue.file}\`
- **Severity**: 🔴 HIGH
- **Details**: ${issue.details}
- **Fix**: ${issue.suggested_fix || 'Review manually'}
`).join('\n')}

---

## ⚠️  MEDIUM PRIORITY ISSUES

${audit.issues.filter(i => i.severity === 'medium').length === 0 ?
  '*No medium priority issues found!*' :
  audit.issues.filter(i => i.severity === 'medium').slice(0, 20).map((issue, i) =>
    `${i + 1}. **${issue.type}** in \`${issue.file}\`
   - ${issue.details}
   - Fix: ${issue.suggested_fix || 'Review'}
`).join('\n')}

${audit.issues.filter(i => i.severity === 'medium').length > 20 ? 
  `\n*... and ${audit.issues.filter(i => i.severity === 'medium').length - 20} more medium issues*\n` : ''}

---

## 🔄 DUPLICATE COMPONENTS

${audit.duplicates.length === 0 ?
  '*No duplicate components found!*' :
  audit.duplicates.slice(0, 20).map((dup, i) =>
    `### ${i + 1}. ${dup.name}
**Duplicate files**:
${dup.files.map(f => `- \`${f}\``).join('\n')}

**Suggested fix**: ${dup.suggested_fix}
`).join('\n')}

${audit.duplicates.length > 20 ?
  `\n*Found ${audit.duplicates.length - 20} more duplicates. See full list in detailed section.*\n` : ''}

---

## ⚡ OPTIMIZATION OPPORTUNITIES

${audit.optimizations.length === 0 ?
  '*No major optimization opportunities found!*' :
  audit.optimizations.slice(0, 15).map((opt, i) =>
    `${i + 1}. **${opt.type.replace(/_/g, ' ')}**
   - File: \`${opt.file}\`
   - Details: ${opt.details}
   - Benefit: ${opt.benefit || 'Performance improvement'}
`).join('\n')}

---

## 🧩 WIDGET ANALYSIS

### Widget Summary
- **Total Widgets**: ${audit.widgets.length}
- **Widgets with Client Hooks**: ${audit.widgets.filter(w => w.hasClientHooks).length}
- **Widgets with 'use client'**: ${audit.widgets.filter(w => w.hasUseClient).length}

### Widget List
${audit.widgets.map((w, i) =>
  `${i + 1}. **${w.name}**
   - Path: \`${w.path}\`
   - Lines: ${w.lines}
   - Client: ${w.hasUseClient ? '✅' : w.hasClientHooks ? '❌ Missing' : 'N/A'}
`).join('\n')}

---

## 📋 CONSISTENCY CHECKS

${audit.consistency.length === 0 ?
  '*No consistency issues found!*' :
  audit.consistency.map((cons, i) =>
    `### ${i + 1}. ${cons.type.replace(/_/g, ' ').toUpperCase()}
- **Count**: ${cons.count || 1}
- **Details**: ${cons.details}
- **Recommendation**: ${cons.recommendation || 'Review and standardize'}
${cons.files ? cons.files.map(f => `  - \`${f}\``).join('\n') : ''}
`).join('\n')}

---

## 🎯 RECOMMENDATIONS

### Priority 1: Critical (Fix Immediately)
${audit.issues.filter(i => i.severity === 'high').map((issue, i) =>
  `${i + 1}. Fix ${issue.type} in \`${issue.file}\`
`).join('')}

${audit.issues.filter(i => i.severity === 'high').length === 0 ? '*No critical issues to fix!*' : ''}

### Priority 2: Optimization (This Week)
${audit.optimizations.slice(0, 5).map((opt, i) =>
  `${i + 1}. ${opt.type} - \`${opt.file}\`
`).join('')}

### Priority 3: Cleanup (This Month)
${audit.duplicates.slice(0, 5).map((dup, i) =>
  `${i + 1}. Merge duplicate: ${dup.name}
`).join('')}

---

## 📈 PERFORMANCE METRICS

### Component Size Distribution
- **Large (>500 lines)**: ${components.filter(c => {
  try {
    return fs.readFileSync(c, 'utf8').split('\n').length > 500;
  } catch (e) { return false; }
}).length} components
- **Medium (200-500 lines)**: ${components.filter(c => {
  try {
    const lines = fs.readFileSync(c, 'utf8').split('\n').length;
    return lines >= 200 && lines <= 500;
  } catch (e) { return false; }
}).length} components
- **Small (<200 lines)**: ${components.filter(c => {
  try {
    return fs.readFileSync(c, 'utf8').split('\n').length < 200;
  } catch (e) { return false; }
}).length} components

### Page Size Distribution
- **Total Pages**: ${pages.length}
- **With Metadata**: ${pagesWithMetadata} (${((pagesWithMetadata/pages.length)*100).toFixed(1)}%)
- **Without Metadata**: ${pages.length - pagesWithMetadata}

---

## ✅ STRENGTHS

- ✅ **${pages.length} pages** - Comprehensive site coverage
- ✅ **${components.length} components** - Rich component library
- ✅ **${pagesWithMetadata} pages with metadata** - Good SEO foundation
- ✅ **TypeScript** - Type safety across project
- ✅ **App Router** - Modern Next.js architecture

---

## 📋 DETAILED AUDIT DATA

### Issues Breakdown
- **High Severity**: ${audit.issues.filter(i => i.severity === 'high').length}
- **Medium Severity**: ${audit.issues.filter(i => i.severity === 'medium').length}
- **Low Severity**: ${audit.issues.filter(i => i.severity === 'low').length}

### Duplicates Summary
- **Duplicate Components**: ${audit.duplicates.length}
- **Potential Bundle Savings**: ${audit.duplicates.length * 3}KB (estimated)

### Optimization Summary
- **Large Components**: ${audit.optimizations.filter(o => o.type === 'large_component').length}
- **Memoization Candidates**: ${audit.performance.length}
- **Unnecessary 'use client'**: ${audit.optimizations.filter(o => o.type === 'unnecessary_use_client').length}

---

## 🚀 ACTION PLAN

### Week 1: Fix Critical Issues
\`\`\`bash
# Fix high severity issues
${audit.issues.filter(i => i.severity === 'high').slice(0, 3).map(i =>
  `# Fix: ${i.file}\n# ${i.details}`
).join('\n')}
\`\`\`

### Week 2: Optimize Performance
- Review large components (>500 lines)
- Add memoization where needed
- Optimize widget re-renders

### Week 3: Cleanup Duplicates
- Merge duplicate components
- Standardize naming conventions
- Update imports

### Week 4: Final Polish
- Ensure consistent styling
- Add missing metadata
- Performance testing

---

## 📊 AUDIT STATISTICS

| Category | Count | Status |
|----------|-------|--------|
| Total Pages | ${audit.summary.total_pages} | ✅ |
| Total Components | ${audit.summary.total_components} | ✅ |
| Total Widgets | ${audit.summary.total_widgets} | ✅ |
| Critical Issues | ${audit.issues.filter(i => i.severity === 'high').length} | ${audit.issues.filter(i => i.severity === 'high').length === 0 ? '✅' : '🔴'} |
| Medium Issues | ${audit.issues.filter(i => i.severity === 'medium').length} | ${audit.issues.filter(i => i.severity === 'medium').length < 20 ? '✅' : '⚠️'} |
| Duplicates | ${audit.duplicates.length} | ${audit.duplicates.length < 10 ? '✅' : '⚠️'} |
| Optimizations | ${audit.summary.optimizations_found} | ℹ️  |

---

## 🎯 FINAL VERDICT

**Overall Project Health**: ${
  audit.issues.filter(i => i.severity === 'high').length === 0 &&
  audit.issues.filter(i => i.severity === 'medium').length < 20
    ? '✅ **EXCELLENT**'
    : audit.issues.filter(i => i.severity === 'high').length < 5
      ? '✅ **GOOD**'
      : '⚠️  **NEEDS IMPROVEMENT**'
}

**Ready for Production**: ${audit.issues.filter(i => i.severity === 'high').length === 0 ? '✅ YES' : '⚠️  After fixes'}

**Recommended Actions**:
1. ${audit.issues.filter(i => i.severity === 'high').length > 0 ? 'Fix critical issues' : 'Review medium priority issues'}
2. ${audit.duplicates.length > 10 ? 'Merge duplicate components' : 'Optimize large components'}
3. ${audit.optimizations.length > 0 ? 'Implement performance optimizations' : 'Monitor and maintain'}

---

*Audit completed by comprehensive-full-audit.js*  
*Next review: ${new Date(Date.now() + 30*24*60*60*1000).toISOString().split('T')[0]}*
`;

// Save report
const reportPath = path.join(config.rootDir, 'COMPREHENSIVE_AUDIT_REPORT.md');
fs.writeFileSync(reportPath, report, 'utf8');

// Save JSON for programmatic access
const jsonPath = path.join(config.rootDir, 'audit-results.json');
fs.writeFileSync(jsonPath, JSON.stringify(audit, null, 2), 'utf8');

// Final output
console.log('='.repeat(70));
console.log('AUDIT COMPLETE');
console.log('='.repeat(70) + '\n');

console.log(`Total Pages: ${audit.summary.total_pages}`);
console.log(`Total Components: ${audit.summary.total_components}`);
console.log(`Issues Found: ${audit.summary.issues_found}`);
console.log(`  - High Severity: ${audit.issues.filter(i => i.severity === 'high').length}`);
console.log(`  - Medium Severity: ${audit.issues.filter(i => i.severity === 'medium').length}`);
console.log(`Duplicates: ${audit.duplicates.length}`);
console.log(`Optimizations: ${audit.summary.optimizations_found}\n`);

console.log(`📄 Reports saved:`);
console.log(`   - COMPREHENSIVE_AUDIT_REPORT.md (detailed)`);
console.log(`   - audit-results.json (structured data)\n`);

console.log('✅ Audit complete!');

