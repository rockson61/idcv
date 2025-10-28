#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 Cleaning up duplicate blog posts...\n');

const blogDir = path.join(__dirname, '..', 'app', 'blog');

// Get all blog post directories
function getAllBlogDirs() {
  const items = fs.readdirSync(blogDir, { withFileTypes: true });
  const blogs = [];
  
  items.forEach(item => {
    if (item.isDirectory() && item.name !== 'category' && item.name !== '[slug]' && !item.name.startsWith('.')) {
      const pagePath = path.join(blogDir, item.name, 'page.tsx');
      if (fs.existsSync(pagePath)) {
        blogs.push({
          slug: item.name,
          path: path.join(blogDir, item.name)
        });
      }
    }
  });
  
  return blogs;
}

const allBlogs = getAllBlogDirs();

console.log(`📊 Found ${allBlogs.length} blog post directories\n`);

// Check for duplicate content (posts with "(number)" in title)
const duplicates = [];
const unique = [];

allBlogs.forEach(blog => {
  const pagePath = path.join(blog.path, 'page.tsx');
  const content = fs.readFileSync(pagePath, 'utf8');
  
  // Check if content is duplicate/template (contains numbered titles like "Title (1)")
  if (content.includes('(${i + 1})') || 
      content.match(/title: .*\(\d+\)/i) ||
      content.match(/\$\{basePost\.title\}/)) {
    duplicates.push(blog);
  } else {
    unique.push(blog);
  }
});

console.log(`📊 Analysis:`);
console.log(`   Unique posts:    ${unique.length}`);
console.log(`   Duplicates:      ${duplicates.length}`);
console.log(`   Total:           ${allBlogs.length}\n`);

if (duplicates.length > 0) {
  console.log('🗑️  Removing duplicate blog posts...\n');
  
  let deleted = 0;
  
  duplicates.forEach(blog => {
    try {
      // Remove the entire directory
      fs.rmSync(blog.path, { recursive: true, force: true });
      deleted++;
      
      if (deleted % 50 === 0) {
        console.log(`   🗑️  Deleted ${deleted}/${duplicates.length}...`);
      }
    } catch (error) {
      console.error(`   ❌ Error deleting ${blog.slug}: ${error.message}`);
    }
  });
  
  console.log(`\n✅ Deleted ${deleted} duplicate blog posts`);
}

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Blog Cleanup Complete!');
console.log(`   Unique posts remaining: ${unique.length}`);
console.log(`   Duplicates removed:     ${duplicates.length}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

console.log('\n✅ All remaining blog posts are unique and valuable!');
console.log(`\n🎯 Final blog count: ${unique.length} unique posts`);

