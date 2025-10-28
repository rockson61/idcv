const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('\n╔══════════════════════════════════════════════════════════════════════════╗');
console.log('║                                                                          ║');
console.log('║          🔍 COMPREHENSIVE SITE AUDIT 🔍                                 ║');
console.log('║                                                                          ║');
console.log('╚══════════════════════════════════════════════════════════════════════════╝\n');

const issues = [];

// Check 1: Breadcrumb apostrophes
console.log('1️⃣ Checking breadcrumb apostrophes in blog posts...');
let count = 0;
try {
  const result = execSync(
    `find app/blog -name "page.tsx" -type f -exec grep -l "title: '[^']*'[^',}]*'" {} \\;`,
    { encoding: 'utf-8', cwd: path.join(__dirname, '..') }
  );
  const files = result.trim().split('\n').filter(Boolean);
  count = files.length;
  if (count > 0) {
    issues.push(`${count} files with unescaped apostrophes in breadcrumbs`);
  }
} catch (e) {
  // No matches
}
console.log(`   ✅ Found ${count} potential issues\n`);

// Check 2: Schema apostrophes
console.log('2️⃣ Checking articleSchema apostrophes...');
count = 0;
try {
  const result = execSync(
    `grep -r "headline:.*'[^']*'[^',]*'" app/blog --include="*.tsx" | grep -v "\\\\\\\\'`,
    { encoding: 'utf-8', cwd: path.join(__dirname, '..'), stdio: 'pipe' }
  );
  count = result.trim().split('\n').filter(Boolean).length;
  if (count > 0) {
    issues.push(`${count} files with unescaped apostrophes in schemas`);
  }
} catch (e) {
  // No matches
}
console.log(`   ✅ Found ${count} potential issues\n`);

// Check 3: Missing imports
console.log('3️⃣ Checking for missing component imports...');
count = 0;
try {
  const locations = execSync(
    `find app/in -name "page.tsx" -type f`,
    { encoding: 'utf-8', cwd: path.join(__dirname, '..') }
  ).trim().split('\n');
  
  for (const file of locations) {
    const content = fs.readFileSync(path.join(__dirname, '..', file), 'utf-8');
    if (content.includes('<PeopleAlsoSearchFor') && !content.includes('import { PeopleAlsoSearchFor')) {
      count++;
    }
  }
  
  if (count > 0) {
    issues.push(`${count} files missing PeopleAlsoSearchFor import`);
  }
} catch (e) {
  console.error('Error checking imports:', e.message);
}
console.log(`   ✅ Found ${count} potential issues\n`);

// Check 4: Duplicate blog slugs
console.log('4️⃣ Checking for duplicate blog slugs...');
const blogDirs = fs.readdirSync(path.join(__dirname, '..', 'app', 'blog'))
  .filter(f => {
    const stat = fs.statSync(path.join(__dirname, '..', 'app', 'blog', f));
    return stat.isDirectory() && f !== '[slug]';
  });

const duplicates = blogDirs.filter((item, index) => blogDirs.indexOf(item) !== index);
if (duplicates.length > 0) {
  issues.push(`${duplicates.length} duplicate blog slugs found`);
}
console.log(`   ✅ Total blogs: ${blogDirs.length}, Duplicates: ${duplicates.length}\n`);

// Check 5: Empty or missing page files
console.log('5️⃣ Checking for empty or missing page files...');
count = 0;
try {
  const allPages = execSync(
    `find app/in app/services app/blog -name "page.tsx" -type f -empty`,
    { encoding: 'utf-8', cwd: path.join(__dirname, '..') }
  ).trim().split('\n').filter(Boolean);
  
  count = allPages.length;
  if (count > 0) {
    issues.push(`${count} empty page files`);
  }
} catch (e) {
  // No empty files
}
console.log(`   ✅ Found ${count} empty files\n`);

// Summary
console.log('\n╔══════════════════════════════════════════════════════════════════════════╗');
console.log('║                                                                          ║');
console.log('║          📊 AUDIT SUMMARY 📊                                            ║');
console.log('║                                                                          ║');
console.log('╚══════════════════════════════════════════════════════════════════════════╝\n');

if (issues.length === 0) {
  console.log('✅ NO ISSUES FOUND! Site is perfect!\n');
} else {
  console.log(`⚠️  ISSUES FOUND: ${issues.length}\n`);
  issues.forEach((issue, i) => {
    console.log(`   ${i + 1}. ${issue}`);
  });
  console.log('');
}

console.log('📊 SITE STATISTICS:');
console.log(`   • Total blog directories: ${blogDirs.length}`);
console.log(`   • Total issues: ${issues.length}`);
console.log('');

