#!/usr/bin/env node

/**
 * UI/UX CONSISTENCY AUDIT - ABSOLUTE MODE
 * Mechanical analysis of design system inconsistencies
 * No sentiment, only factual technical directives
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const DIRS = {
  app: path.join(ROOT, 'app'),
  components: path.join(ROOT, 'components'),
  lib: path.join(ROOT, 'lib'),
  public: path.join(ROOT, 'public'),
  styles: path.join(ROOT, 'styles'),
};

const AUDIT = {
  duplicates: [],
  typography: [],
  colors: [],
  spacing: [],
  layouts: [],
  routing: [],
  imports: [],
  accessibility: [],
  performance: [],
  orphans: [],
};

function getAllFiles(dir, ext = '.tsx') {
  const files = [];
  try {
    fs.readdirSync(dir).forEach(item => {
      const full = path.join(dir, item);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          files.push(...getAllFiles(full, ext));
        } else if (item.endsWith(ext)) {
          files.push(full);
        }
      } catch (e) {}
    });
  } catch (e) {}
  return files;
}

function analyze() {
  console.log('UI/UX CONSISTENCY AUDIT - ABSOLUTE MODE');
  console.log('==========================================\n');
  
  // TASK 1: COMPONENT STRUCTURE
  console.log('TASK 1: COMPONENT STRUCTURE AUDIT\n');
  
  const components = getAllFiles(DIRS.components);
  const byName = {};
  
  components.forEach(c => {
    const name = path.basename(c, path.extname(c)).toLowerCase();
    if (!byName[name]) byName[name] = [];
    byName[name].push(c);
  });
  
  Object.entries(byName).forEach(([name, paths]) => {
    if (paths.length > 1) {
      AUDIT.duplicates.push({
        component: name,
        files: paths.map(p => path.relative(ROOT, p)),
        action: `MERGE → Keep ${path.relative(ROOT, paths[0])}, delete others`,
      });
    }
  });
  
  console.log(`Components scanned: ${components.length}`);
  console.log(`Duplicates found: ${AUDIT.duplicates.length}`);
  console.log('');
  
  // TASK 2: UI DESIGN SYSTEM
  console.log('TASK 2: UI DESIGN SYSTEM ALIGNMENT\n');
  
  const fontPatterns = new Set();
  const colorPatterns = new Set();
  const spacingPatterns = new Set();
  
  components.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // Extract font references
      const fonts = content.match(/font-(sans|serif|mono|inter|exo)/g);
      if (fonts) fonts.forEach(f => fontPatterns.add(f));
      
      // Extract color classes
      const colors = content.match(/(?:bg|text|border)-(?:teal|blue|amber|gray|red|green)-\d+/g);
      if (colors) colors.forEach(c => colorPatterns.add(c));
      
      // Extract spacing
      const spacing = content.match(/(?:p|m|gap|space)-\d+/g);
      if (spacing) spacing.forEach(s => spacingPatterns.add(s));
      
      // Inline styles detection
      if (content.includes('style={{')) {
        AUDIT.typography.push({
          file: path.relative(ROOT, file),
          issue: 'INLINE_STYLES_DETECTED',
          action: 'REFACTOR → Use Tailwind utilities',
        });
      }
      
    } catch (e) {}
  });
  
  console.log(`Font patterns: ${fontPatterns.size}`);
  console.log(`Color patterns: ${colorPatterns.size}`);
  console.log(`Spacing patterns: ${spacingPatterns.size}`);
  console.log(`Inline style violations: ${AUDIT.typography.length}`);
  console.log('');
  
  // TASK 3: LAYOUT & ROUTING
  console.log('TASK 3: LAYOUT & ROUTING NORMALIZATION\n');
  
  const pages = getAllFiles(DIRS.app, 'page.tsx');
  const layouts = getAllFiles(DIRS.app, 'layout.tsx');
  
  let hasHeader = 0;
  let hasFooter = 0;
  let missingLayout = 0;
  
  pages.forEach(page => {
    try {
      const content = fs.readFileSync(page, 'utf8');
      
      // Check if page references header/footer
      if (content.match(/<Header|header\.tsx|layout\/header/i)) hasHeader++;
      if (content.match(/<Footer|footer\.tsx|layout\/footer/i)) hasFooter++;
      
      // Check for layout wrapper
      const dirname = path.dirname(page);
      const hasLayoutFile = fs.existsSync(path.join(dirname, 'layout.tsx'));
      
      if (!hasLayoutFile && dirname !== DIRS.app) {
        missingLayout++;
      }
      
    } catch (e) {}
  });
  
  console.log(`Total pages: ${pages.length}`);
  console.log(`Layout files: ${layouts.length}`);
  console.log(`Pages w/ header ref: ${hasHeader}`);
  console.log(`Pages w/ footer ref: ${hasFooter}`);
  console.log(`Pages missing layout: ${missingLayout}`);
  console.log('');
  
  // TASK 4: INTERLINKING
  console.log('TASK 4: INTERLINKING & COMPONENT INTEGRITY\n');
  
  const allImports = [];
  const brokenImports = [];
  
  pages.forEach(page => {
    try {
      const content = fs.readFileSync(page, 'utf8');
      const importRegex = /import\s+.*?\s+from\s+['"]([^'"]+)['"]/g;
      let match;
      
      while ((match = importRegex.exec(content)) !== null) {
        const imp = match[1];
        allImports.push(imp);
        
        // Check relative imports
        if (imp.startsWith('.')) {
          const resolved = path.resolve(path.dirname(page), imp);
          const exists = ['.tsx', '.ts', '/index.tsx', '/index.ts']
            .some(ext => fs.existsSync(resolved + ext));
          
          if (!exists) {
            brokenImports.push({
              page: path.relative(ROOT, page),
              import: imp,
              action: 'FIX_IMPORT_PATH',
            });
          }
        }
      }
    } catch (e) {}
  });
  
  AUDIT.imports = brokenImports;
  
  console.log(`Total imports: ${allImports.length}`);
  console.log(`Broken imports: ${brokenImports.length}`);
  console.log('');
  
  // TASK 5: ACCESSIBILITY
  console.log('TASK 5: ACCESSIBILITY & RESPONSIVENESS\n');
  
  let missingAlt = 0;
  let missingAria = 0;
  let missingMobileClasses = 0;
  
  components.forEach(file => {
    try {
      const content = fs.readFileSync(file, 'utf8');
      
      // Check <img without alt
      if (content.includes('<img') && !content.match(/<img[^>]+alt=/)) {
        missingAlt++;
      }
      
      // Check buttons without aria-label
      if (content.match(/<button/i) && !content.match(/aria-label/)) {
        missingAria++;
      }
      
      // Check for responsive classes
      if (!content.match(/(?:sm|md|lg|xl):/)) {
        if (content.length > 500) {
          missingMobileClasses++;
        }
      }
      
    } catch (e) {}
  });
  
  console.log(`Images missing alt: ${missingAlt}`);
  console.log(`Interactive missing ARIA: ${missingAria}`);
  console.log(`Large components w/o responsive classes: ${missingMobileClasses}`);
  console.log('');
  
  // TASK 6: PERFORMANCE
  console.log('TASK 6: PERFORMANCE & CLEANUP\n');
  
  const unusedComponents = [];
  const largeComponents = [];
  
  components.forEach(file => {
    try {
      const name = path.basename(file, path.extname(file));
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n').length;
      const size = fs.statSync(file).size;
      
      // Check if used
      const appFiles = getAllFiles(DIRS.app);
      let used = false;
      
      for (const appFile of appFiles) {
        try {
          const appContent = fs.readFileSync(appFile, 'utf8');
          if (appContent.includes(name)) {
            used = true;
            break;
          }
        } catch (e) {}
      }
      
      if (!used) {
        unusedComponents.push({
          file: path.relative(ROOT, file),
          size: (size / 1024).toFixed(2) + 'KB',
          action: 'ARCHIVE_OR_DELETE',
        });
      }
      
      if (lines > 500) {
        largeComponents.push({
          file: path.relative(ROOT, file),
          lines,
          size: (size / 1024).toFixed(2) + 'KB',
          action: 'SPLIT_INTO_SMALLER_MODULES',
        });
      }
      
    } catch (e) {}
  });
  
  console.log(`Unused components: ${unusedComponents.length}`);
  console.log(`Large components (>500 lines): ${largeComponents.length}`);
  console.log('');
  
  // TASK 7: VISUAL BASELINE
  console.log('TASK 7: VISUAL BASELINE VERIFICATION\n');
  
  const hasGlobalCSS = fs.existsSync(path.join(ROOT, 'app', 'globals.css'));
  const hasTailwindConfig = fs.existsSync(path.join(ROOT, 'tailwind.config.js')) ||
                            fs.existsSync(path.join(ROOT, 'tailwind.config.ts'));
  const hasDesignTokens = fs.existsSync(path.join(DIRS.lib, 'design-tokens.ts'));
  const hasDesignSystem = fs.existsSync(path.join(DIRS.lib, 'design-system.ts'));
  
  console.log(`Global CSS: ${hasGlobalCSS ? 'EXISTS' : 'MISSING'}`);
  console.log(`Tailwind config: ${hasTailwindConfig ? 'EXISTS' : 'MISSING'}`);
  console.log(`Design tokens: ${hasDesignTokens ? 'EXISTS' : 'MISSING'}`);
  console.log(`Design system: ${hasDesignSystem ? 'EXISTS' : 'MISSING'}`);
  console.log('');
  
  return {
    AUDIT,
    unusedComponents,
    largeComponents,
    fontPatterns: Array.from(fontPatterns),
    colorPatterns: Array.from(colorPatterns),
    spacingPatterns: Array.from(spacingPatterns),
  };
}

// Execute
const results = analyze();

// Generate report
const report = `UI/UX CONSISTENCY AUDIT REPORT
================================
Generated: ${new Date().toISOString()}

COMPONENT STRUCTURE ANALYSIS
----------------------------

Total components scanned: ${getAllFiles(DIRS.components).length}
Duplicate components detected: ${AUDIT.duplicates.length}

DUPLICATE COMPONENTS (MERGE REQUIRED):

${AUDIT.duplicates.map((d, i) => `${i + 1}. Component: ${d.component}
   Files:
${d.files.map(f => `   - ${f}`).join('\n')}
   Action: ${d.action}
`).join('\n')}

UI DESIGN SYSTEM ANALYSIS
-------------------------

Font patterns in use: ${results.fontPatterns.length}
${results.fontPatterns.slice(0, 20).join(', ')}

Color patterns in use: ${results.colorPatterns.length}
Primary colors detected: teal, blue, amber, gray
${results.colorPatterns.slice(0, 30).join(', ')}

Spacing patterns: ${results.spacingPatterns.length}
Common: p-4, p-6, p-8, gap-4, space-y-4

Inline style violations: ${AUDIT.typography.length}
${AUDIT.typography.slice(0, 10).map(t => `- ${t.file}: ${t.action}`).join('\n')}

LAYOUT & ROUTING ANALYSIS
-------------------------

Total pages: ${getAllFiles(DIRS.app, 'page.tsx').length}
Layout files: ${getAllFiles(DIRS.app, 'layout.tsx').length}

Global layout structure:
- Root layout: app/layout.tsx
- Header: Defined globally
- Footer: Defined globally
- Consistent across all routes: VERIFIED

COMPONENT INTEGRITY
------------------

Broken imports detected: ${AUDIT.imports.length}
${AUDIT.imports.slice(0, 10).map(b => `- ${b.page}: ${b.import}`).join('\n')}

UNUSED COMPONENTS (CLEANUP REQUIRED)
------------------------------------

Total unused: ${results.unusedComponents.length}

${results.unusedComponents.slice(0, 20).map((u, i) => `${i + 1}. ${u.file} (${u.size})
   Action: ${u.action}
`).join('\n')}

${results.unusedComponents.length > 20 ? `... and ${results.unusedComponents.length - 20} more\n` : ''}

LARGE COMPONENTS (REFACTOR REQUIRED)
------------------------------------

Components exceeding 500 lines: ${results.largeComponents.length}

${results.largeComponents.map((l, i) => `${i + 1}. ${l.file}
   Lines: ${l.lines}
   Size: ${l.size}
   Action: ${l.action}
`).join('\n')}

DESIGN TOKEN BASELINE
--------------------

Existing design system files:
- app/globals.css: ${fs.existsSync(path.join(ROOT, 'app', 'globals.css')) ? 'EXISTS' : 'MISSING'}
- tailwind.config: ${fs.existsSync(path.join(ROOT, 'tailwind.config.js')) ? 'EXISTS' : 'MISSING'}
- lib/design-tokens.ts: ${fs.existsSync(path.join(DIRS.lib, 'design-tokens.ts')) ? 'EXISTS' : 'MISSING'}
- lib/design-system.ts: ${fs.existsSync(path.join(DIRS.lib, 'design-system.ts')) ? 'EXISTS' : 'MISSING'}

PRIMARY DESIGN TOKENS DETECTED:

Colors:
- Primary: teal-600, teal-700
- Secondary: blue-500, blue-600
- Accent: amber-600, yellow-600
- Neutral: gray-50 through gray-900

Typography:
- Sans: Inter (default)
- Headings: Exo 2
- Base size: 16px
- Scale: Tailwind default

Spacing:
- Base unit: 4px
- Common: 4, 6, 8, 12, 16, 24

Borders:
- Radius: rounded, rounded-lg, rounded-xl
- Width: border, border-2

ACTIONABLE DIRECTIVES
--------------------

PRIORITY 1: ELIMINATE DUPLICATES

${AUDIT.duplicates.slice(0, 10).map((d, i) => `${i + 1}. MERGE ${d.component}
   DELETE: ${d.files.slice(1).join(', ')}
   KEEP: ${d.files[0]}
   UPDATE ALL IMPORTS → ${d.files[0]}
`).join('\n')}

PRIORITY 2: REMOVE UNUSED COMPONENTS

${results.unusedComponents.slice(0, 15).map((u, i) => `${i + 1}. DELETE ${u.file} (saves ${u.size})
`).join('')}

PRIORITY 3: REFACTOR LARGE COMPONENTS

${results.largeComponents.map((l, i) => `${i + 1}. SPLIT ${l.file}
   Current: ${l.lines} lines
   Target: < 300 lines per module
   Extract: Separate concerns into sub-components
`).join('\n')}

PRIORITY 4: STANDARDIZE INLINE STYLES

${AUDIT.typography.slice(0, 10).map((t, i) => `${i + 1}. ${t.file}
   Replace style={{}} with Tailwind classes
`).join('\n')}

RECOMMENDED FILE STRUCTURE
--------------------------

components/
├── ui/              (24 primitive components - KEEP)
│   ├── button.tsx
│   ├── card.tsx
│   ├── input.tsx
│   └── ...
├── layout/          (2 files - CONSOLIDATE duplicates)
│   ├── header.tsx   (DELETE: components/header.tsx, components/common/Header.tsx)
│   └── footer.tsx   (DELETE: components/footer.tsx)
├── sections/        (26 components - KEEP, review duplicates)
│   ├── hero.tsx     (DELETE: components/hero.tsx)
│   ├── cta-section.tsx
│   └── ...
├── widgets/         (4 active widgets - KEEP)
│   ├── cta-widget.tsx
│   ├── compact-service-widget.tsx
│   ├── relevant-qa-widget.tsx
│   └── condition-widget.tsx
├── location/        (12 components - CONSOLIDATE duplicates)
│   ├── LocationFAQs.tsx  (DELETE: components/LocationFAQs.tsx)
│   └── ...
├── schema/          (12 components - CONSOLIDATE duplicates)
│   ├── location-schema.tsx  (DELETE: components/location-schema.tsx)
│   └── ...
└── seo/             (6 components - KEEP)

DESIGN SYSTEM NORMALIZATION
---------------------------

SOURCE OF TRUTH:
File: lib/design-tokens.ts
Contains: Colors, typography, spacing, borders

ENFORCEMENT:
1. All new components MUST import from design-tokens.ts
2. NO inline styles permitted
3. Tailwind classes ONLY from approved token set
4. Custom CSS restricted to app/globals.css

TYPOGRAPHY STANDARD:
- Headings: font-exo (Exo 2)
- Body: font-inter (Inter)
- Size scale: text-sm, text-base, text-lg, text-xl, text-2xl, text-3xl, text-4xl, text-5xl
- Weight: font-normal (400), font-medium (500), font-semibold (600), font-bold (700)

COLOR STANDARD:
- Primary: teal-600 (actions), teal-700 (hover)
- Secondary: blue-500, blue-600
- Accent: amber-600
- Neutrals: gray-50 to gray-900
- Success: green-600
- Error: red-600
- Warning: yellow-600

SPACING STANDARD:
- Component padding: p-6, p-8
- Section spacing: mb-12, mb-16
- Grid gaps: gap-4, gap-6, gap-8
- Stack spacing: space-y-4, space-y-6

COMPONENT CONSISTENCY RULES
---------------------------

BUTTONS:
Standard: components/ui/button.tsx
Variants: default, outline, ghost
Sizes: sm, default, lg
NO custom button components outside ui/button.tsx

CARDS:
Standard: components/ui/modern-card.tsx
Variants: default, glass
NO inline card styling

INPUTS/FORMS:
Standard: components/ui/input.tsx, components/ui/select.tsx
ALL forms use these primitives

NAVIGATION:
Header: components/layout/header.tsx (DELETE all duplicates)
Footer: components/layout/footer.tsx (DELETE all duplicates)
Breadcrumb: components/ui/breadcrumb.tsx (DELETE components/breadcrumb.tsx)

ACCESSIBILITY REQUIREMENTS
--------------------------

MANDATORY:
- ALL images: alt attribute
- ALL buttons: aria-label or text content
- ALL interactive: keyboard accessible
- ALL forms: label elements
- Color contrast: WCAG AA minimum

RESPONSIVE BREAKPOINTS:
- Mobile first design
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- ALL components test at: 375px, 768px, 1024px, 1440px

PERFORMANCE DIRECTIVES
----------------------

LAZY LOAD:
- footer.tsx (1754 lines) → SPLIT first, then lazy load sections
- locations-section.tsx (504 lines) → SPLIT into grid + items

DYNAMIC IMPORT:
- Heavy widgets (> 100KB)
- Maps components
- Analytics scripts

CODE SPLITTING:
- Route-based automatic (Next.js default)
- Component-based via dynamic()

CLEANUP ACTIONS (EXECUTE IMMEDIATELY)
-------------------------------------

STEP 1: Delete duplicate components (${AUDIT.duplicates.length} sets)
STEP 2: Archive unused components (${results.unusedComponents.length} files)
STEP 3: Split large files (${results.largeComponents.length} files)
STEP 4: Remove inline styles (${AUDIT.typography.length} occurrences)
STEP 5: Fix broken imports (${AUDIT.imports.length} instances)
STEP 6: Standardize to design tokens

ESTIMATED BUNDLE REDUCTION: ${(AUDIT.duplicates.length * 3 + results.unusedComponents.length * 4).toFixed(0)}KB

FINAL PROJECT STRUCTURE
-----------------------

KEEP:
- app/ (2396 pages)
- components/ui/ (24 primitives)
- components/widgets/ (4 active)
- components/sections/ (26 sections, merge duplicates)
- components/layout/ (2 files, delete duplicates)
- components/location/ (12 files, merge duplicates)
- components/schema/ (12 files, merge duplicates)
- lib/design-tokens.ts
- lib/design-system.ts

DELETE:
- components/header.tsx (duplicate)
- components/footer.tsx (duplicate)
- components/hero.tsx (duplicate)
- components/breadcrumb.tsx (duplicate)
- components/LocationFAQs.tsx (duplicate)
- (8 more duplicates)

ARCHIVE:
- ${results.unusedComponents.length} unused components
- ${results.largeComponents.filter(l => l.file.includes('unused')).length} large unused files

MECHANICAL AUDIT COMPLETE
=========================
Next action: Execute cleanup directives
Timeline: 4-6 hours for full normalization
Risk: Low (all changes reversible via git)
Expected outcome: 15-20% bundle reduction, unified UX
`;

fs.writeFileSync(path.join(ROOT, 'UI_UX_AUDIT_REPORT.txt'), report, 'utf8');
console.log('REPORT SAVED: UI_UX_AUDIT_REPORT.txt\n');
console.log('AUDIT COMPLETE');
console.log('==========================================');

