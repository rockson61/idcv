#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 Auditing all pages for hardcoded content and client components...\n');

const issues = {
  hardcodedServices: [],
  hardcodedConditions: [],
  hardcodedBlogs: [],
  unnecessaryClientComponents: [],
  missingComponents: [],
  outdatedH1: []
};

function checkFile(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const relativePath = filePath.replace(path.join(__dirname, '..'), '');
  
  // Check for unnecessary "use client" in pages
  if (content.includes('"use client"') || content.includes("'use client'")) {
    // Only flag if it's a page.tsx and also exports metadata (which is not allowed)
    if (filePath.endsWith('page.tsx') && content.includes('export const metadata')) {
      issues.unnecessaryClientComponents.push(relativePath);
    }
  }
  
  // Check for hardcoded arrays in main listing pages
  if (filePath.includes('/services/page.tsx') && content.includes('const services = [')) {
    issues.hardcodedServices.push(relativePath);
  }
  
  if (filePath.includes('/conditions/page.tsx') && content.includes('const conditions = [')) {
    issues.hardcodedConditions.push(relativePath);
  }
  
  if (filePath.includes('/blog') && filePath.includes('/page.tsx') && content.includes('const blogPosts = [')) {
    issues.hardcodedBlogs.push(relativePath);
  }
  
  // Check for old H1 formats
  if (content.includes('Best Dentist in Vellore') || content.includes('Dental Services in Vellore')) {
    if (!content.includes('Best') || !content.includes('Doctors in India')) {
      issues.outdatedH1.push(relativePath);
    }
  }
}

function scanDirectory(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  
  items.forEach(item => {
    const fullPath = path.join(dir, item.name);
    
    if (item.isDirectory() && item.name !== 'node_modules' && item.name !== '.next') {
      scanDirectory(fullPath);
    } else if (item.isFile() && item.name === 'page.tsx') {
      checkFile(fullPath);
    }
  });
}

const appDir = path.join(__dirname, '..', 'app');
scanDirectory(appDir);

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('📊 AUDIT RESULTS:');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

if (issues.unnecessaryClientComponents.length > 0) {
  console.log('⚠️  Pages with "use client" + metadata conflict:');
  issues.unnecessaryClientComponents.forEach(file => console.log(`   - ${file}`));
  console.log('');
}

if (issues.hardcodedServices.length > 0) {
  console.log('⚠️  Hardcoded service pages:');
  issues.hardcodedServices.forEach(file => console.log(`   - ${file}`));
  console.log('');
}

if (issues.hardcodedConditions.length > 0) {
  console.log('⚠️  Hardcoded condition pages:');
  issues.hardcodedConditions.forEach(file => console.log(`   - ${file}`));
  console.log('');
}

if (issues.hardcodedBlogs.length > 0) {
  console.log('⚠️  Hardcoded blog pages:');
  issues.hardcodedBlogs.forEach(file => console.log(`   - ${file}`));
  console.log('');
}

const totalIssues = 
  issues.unnecessaryClientComponents.length +
  issues.hardcodedServices.length +
  issues.hardcodedConditions.length +
  issues.hardcodedBlogs.length;

console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`📊 Total Issues Found: ${totalIssues}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

if (totalIssues > 0) {
  console.log('\n🔧 Ready to fix these issues automatically!');
} else {
  console.log('\n✅ No issues found! All pages are properly structured.');
}

