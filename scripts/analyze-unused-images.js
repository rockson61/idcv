#!/usr/bin/env node

/**
 * Analyze Public Folder - Find Unused Images
 * Scans entire codebase to find which images are not referenced
 */

const fs = require('fs');
const path = require('path');

const config = {
  publicDir: path.join(__dirname, '..', 'public'),
  appDir: path.join(__dirname, '..', 'app'),
  componentsDir: path.join(__dirname, '..', 'components'),
  libDir: path.join(__dirname, '..', 'lib'),
  rootDir: path.join(__dirname, '..'),
};

console.log('🔍 Analyzing Public Folder for Unused Images...\n');

// Get all image files
function getAllImages(dir) {
  const images = [];
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isFile() && /\.(jpg|jpeg|png|gif|svg|webp|ico)$/i.test(file)) {
      images.push({
        filename: file,
        path: fullPath,
        size: stat.size,
      });
    }
  }
  
  return images;
}

// Search for image usage in all code files
function searchImageUsage(imageName, searchDirs) {
  let found = false;
  
  for (const dir of searchDirs) {
    if (!fs.existsSync(dir)) continue;
    
    const files = getAllCodeFiles(dir);
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check for various reference patterns
        const patterns = [
          imageName,                          // Direct reference
          `/${imageName}`,                    // With leading slash
          `"${imageName}"`,                   // In quotes
          `'${imageName}'`,                   // In single quotes
          `\`${imageName}\``,                 // In backticks
          imageName.replace(/\.[^.]+$/, ''), // Without extension
        ];
        
        for (const pattern of patterns) {
          if (content.includes(pattern)) {
            found = true;
            return { found, file };
          }
        }
      } catch (error) {
        // Skip files that can't be read
      }
    }
  }
  
  return { found, file: null };
}

// Get all code files recursively
function getAllCodeFiles(dir) {
  const files = [];
  
  try {
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      
      try {
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!item.startsWith('.') && item !== 'node_modules') {
            files.push(...getAllCodeFiles(fullPath));
          }
        } else if (/\.(tsx?|jsx?|css|md)$/i.test(item)) {
          files.push(fullPath);
        }
      } catch (error) {
        // Skip inaccessible items
      }
    }
  } catch (error) {
    // Skip inaccessible directories
  }
  
  return files;
}

// Main analysis
const images = getAllImages(config.publicDir);
const searchDirs = [config.appDir, config.componentsDir, config.libDir];

console.log(`Found ${images.length} images in public folder\n`);
console.log('Analyzing usage...\n');

const usedImages = [];
const unusedImages = [];

for (const image of images) {
  const usage = searchImageUsage(image.filename, searchDirs);
  
  if (usage.found) {
    usedImages.push({
      ...image,
      usedIn: usage.file,
    });
    console.log(`✓ ${image.filename} (USED)`);
  } else {
    unusedImages.push(image);
    console.log(`✗ ${image.filename} (UNUSED - ${(image.size / 1024).toFixed(2)}KB)`);
  }
}

// Summary
console.log('\n' + '='.repeat(70));
console.log('SUMMARY');
console.log('='.repeat(70) + '\n');

console.log(`Total images: ${images.length}`);
console.log(`Used images: ${usedImages.length}`);
console.log(`Unused images: ${unusedImages.length}\n`);

if (unusedImages.length > 0) {
  const totalUnusedSize = unusedImages.reduce((sum, img) => sum + img.size, 0);
  console.log(`Total unused space: ${(totalUnusedSize / 1024).toFixed(2)}KB\n`);
  
  console.log('Unused images:');
  unusedImages.forEach((img, i) => {
    console.log(`  ${i + 1}. ${img.filename} - ${(img.size / 1024).toFixed(2)}KB`);
  });
  
  // Save report
  const report = {
    timestamp: new Date().toISOString(),
    totalImages: images.length,
    usedImages: usedImages.length,
    unusedImages: unusedImages.length,
    unusedFiles: unusedImages.map(img => ({
      filename: img.filename,
      size: img.size,
      sizeKB: (img.size / 1024).toFixed(2),
    })),
    totalUnusedSize: totalUnusedSize,
    totalUnusedSizeKB: (totalUnusedSize / 1024).toFixed(2),
  };
  
  const reportPath = path.join(config.rootDir, 'output', 'unused-images-report.json');
  fs.mkdirSync(path.dirname(reportPath), { recursive: true });
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2), 'utf8');
  
  console.log(`\n✅ Report saved to: ${reportPath}`);
  
  // Create archive script
  const archiveScript = `#!/bin/bash
# Archive Unused Images

mkdir -p .archive/unused-images

${unusedImages.map(img => `mv public/${img.filename} .archive/unused-images/`).join('\n')}

echo "✅ Archived ${unusedImages.length} unused images (${(totalUnusedSize / 1024).toFixed(2)}KB)"
`;
  
  const scriptPath = path.join(config.rootDir, 'archive-unused-images.sh');
  fs.writeFileSync(scriptPath, archiveScript, 'utf8');
  fs.chmodSync(scriptPath, '755');
  
  console.log(`✅ Archive script created: archive-unused-images.sh`);
  console.log(`\nRun: ./archive-unused-images.sh to archive unused images`);
} else {
  console.log('✅ No unused images found! All images are in use.');
}

