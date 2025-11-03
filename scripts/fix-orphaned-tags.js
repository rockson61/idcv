#!/usr/bin/env node
// Fix orphaned }> tags and clean up JSX structure
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_IN = path.resolve(ROOT, 'app', 'in');

function walk(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.isFile() && e.name === 'page.tsx') acc.push(p);
  }
  return acc;
}

function main() {
  const pages = walk(APP_IN);
  let fixed = 0;
  for (const file of pages) {
    try {
      let content = fs.readFileSync(file, 'utf8');
      const original = content;
      
      // Remove orphaned }> tags on their own lines
      content = content.replace(/^\s*\}>\s*$/gm, '');
      
      // Remove orphaned closing tags before components
      content = content.replace(/\n\s*\}>\s*\n\s*<LocationHeader/g, '\n        <LocationHeader');
      content = content.replace(/\n\s*\}>\s*\n\s*<div className="mb-8">\s*\n\s*<GoogleMapEmbed/g, '\n\n        <div className="mb-8">\n          <GoogleMapEmbed');
      content = content.replace(/\n\s*\}>\s*\n\s*<div className="mb-8">\s*\n\s*<EnhancedServicesList/g, '\n\n        <div className="mb-8">\n          <EnhancedServicesList');
      content = content.replace(/\n\s*\}>\s*\n\s*<div className="mb-8">\s*\n\s*<LocationReviews/g, '\n\n        <div className="mb-8">\n          <LocationReviews');
      content = content.replace(/\n\s*\}>\s*\n\s*<div className="mb-8">\s*\n\s*<LocationFAQs/g, '\n\n        <div className="mb-8">\n          <LocationFAQs');
      content = content.replace(/\n\s*\}>\s*\n\s*<div className="mb-8">\s*\n\s*<PeopleAlsoSearchFor/g, '\n\n        <div className="mb-8">\n          <PeopleAlsoSearchFor');
      
      // Clean up trailing whitespace after components
      content = content.replace(/<LocationHeader[^>]*>\s*\n\s*\n/g, '<LocationHeader locationName={locationName} category="town" />\n\n');
      content = content.replace(/<LocationHeader[^>]*\/>\s*\n\s*\n\s*\n/g, '<LocationHeader locationName={locationName} category="town" />\n\n');
      
      // Ensure proper structure - LocationHeader should be on its own line after Breadcrumb
      content = content.replace(
        /(<\/Breadcrumb>\s*\n\s*\n)(\s*<LocationHeader)/,
        '$1        $2'
      );
      
      // Clean up multiple blank lines
      content = content.replace(/\n{4,}/g, '\n\n\n');
      
      // Fix any remaining orphaned fragments
      content = content.replace(/^\s*\}\);?\s*$/gm, '');
      
      if (content !== original) {
        fs.writeFileSync(file, content, 'utf8');
        fixed++;
      }
    } catch (e) {
      console.error(`Failed to process ${file}:`, e.message);
    }
  }
  console.log(`Fixed ${fixed} location pages.`);
}

main();

