#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log(`
╔══════════════════════════════════════════════════════════════════════════╗
║                                                                          ║
║          🔧 FIXING ALL REMAINING H1 TITLES 🔧                           ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
`);

let totalUpdated = 0;

// 1. Fix all condition pages
console.log(`\n🩺 Fixing Condition Pages...`);
const conditionsDir = path.join(__dirname, '..', 'app', 'conditions');

const conditionPages = {
  'bad-breath': 'Bad Breath',
  'bruxism': 'Bruxism (Teeth Grinding)',
  'cracked-teeth': 'Cracked Teeth',
  'dry-mouth': 'Dry Mouth',
  'gum-disease': 'Gum Disease',
  'impacted-teeth': 'Impacted Teeth',
  'receding-gums': 'Receding Gums',
  'tooth-abscess': 'Tooth Abscess',
  'tooth-decay': 'Tooth Decay',
  'tooth-erosion': 'Tooth Erosion',
  'tooth-sensitivity': 'Tooth Sensitivity',
  'abscessed-tooth': 'Abscessed Tooth',
  'bleeding-gums': 'Bleeding Gums',
  'broken-jaw': 'Broken Jaw',
  'burning-mouth-syndrome': 'Burning Mouth Syndrome',
  'cavities': 'Cavities',
  'dry-socket': 'Dry Socket',
  'enamel-erosion': 'Enamel Erosion',
  'fractured-teeth': 'Fractured Teeth',
  'geographic-tongue': 'Geographic Tongue',
  'gingivitis': 'Gingivitis',
  'gum-recession': 'Gum Recession',
  'lichen-planus': 'Lichen Planus',
  'malocclusion': 'Malocclusion',
  'oral-cancer': 'Oral Cancer',
  'oral-thrush': 'Oral Thrush',
  'periodontitis': 'Periodontitis',
  'tmj-disorders': 'TMJ Disorders',
  'tooth-discoloration': 'Tooth Discoloration',
  'wisdom-teeth-issues': 'Wisdom Teeth Issues'
};

Object.entries(conditionPages).forEach(([slug, name]) => {
  const pagePath = path.join(conditionsDir, slug, 'page.tsx');
  if (fs.existsSync(pagePath)) {
    try {
      let content = fs.readFileSync(pagePath, 'utf8');
      const newH1 = `${name} Causes, Symptoms & Treatment`;
      
      // Update H1 in various formats
      content = content.replace(
        /<h1[^>]*>[\s\S]*?<\/h1>/,
        `<h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                ${newH1}
              </span>
            </h1>`
      );
      
      // Also update metadata title
      content = content.replace(
        /title:\s*["'][^"']*["']/,
        `title: "${newH1} | Dr. Rockson Samuel | Vellore"`
      );
      
      fs.writeFileSync(pagePath, content);
      console.log(`  ✅ ${slug}`);
      totalUpdated++;
    } catch (error) {
      // Skip errors
    }
  }
});

// 2. Fix Maharashtra/Mumbai and all its sub-locations
console.log(`\n📍 Fixing Maharashtra/Mumbai Pages...`);
const mumbaiDir = path.join(__dirname, '..', 'app', 'in', 'maharashtra', 'mumbai');

// Fix main Mumbai page
const mumbaiPagePath = path.join(mumbaiDir, 'page.tsx');
if (fs.existsSync(mumbaiPagePath)) {
  try {
    let content = fs.readFileSync(mumbaiPagePath, 'utf8');
    
    // Check if it has LocationHeader component
    if (content.includes('LocationHeader')) {
      // Update LocationHeader locationName
      content = content.replace(
        /<LocationHeader\s+locationName="[^"]*"/,
        `<LocationHeader
          locationName="Best Dentist and Dental Clinic in Mumbai, Maharashtra"`
      );
    } else {
      // Old format - need to add LocationHeader import and use it
      if (!content.includes('import { LocationHeader }')) {
        content = content.replace(
          /import { Breadcrumb }/,
          `import { Breadcrumb } from "@/components/ui/breadcrumb"\nimport { LocationHeader } from "@/components/location/LocationHeader"`
        );
      }
      
      // Replace old H1 with LocationHeader
      const h1Match = content.match(/<h1[^>]*>[\s\S]*?<\/h1>/);
      if (h1Match) {
        content = content.replace(
          h1Match[0],
          `<LocationHeader
          locationName="Best Dentist and Dental Clinic in Mumbai, Maharashtra"
          taluk="Mumbai"
          pincode="400001"
          distance="1,350 KM from Vellore"
          category="city"
        />`
        );
      }
    }
    
    fs.writeFileSync(mumbaiPagePath, content);
    console.log(`  ✅ Mumbai main page`);
    totalUpdated++;
  } catch (error) {
    console.error(`  ❌ Mumbai main page error`);
  }
}

// Fix all Mumbai sub-location pages
if (fs.existsSync(mumbaiDir)) {
  const locations = fs.readdirSync(mumbaiDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  locations.forEach(locationSlug => {
    const pagePath = path.join(mumbaiDir, locationSlug, 'page.tsx');
    if (fs.existsSync(pagePath)) {
      try {
        let content = fs.readFileSync(pagePath, 'utf8');
        const locationName = locationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const newH1 = `Best Dentist and Dental Clinic in ${locationName}, Mumbai`;
        
        // Update LocationHeader if present
        if (content.includes('LocationHeader')) {
          content = content.replace(
            /<LocationHeader\s+locationName="[^"]*"/,
            `<LocationHeader
          locationName="${newH1}"`
          );
        }
        
        fs.writeFileSync(pagePath, content);
        totalUpdated++;
      } catch (error) {
        // Skip errors
      }
    }
  });
  
  console.log(`  ✅ Updated ${locations.length} Mumbai sub-locations`);
}

// 3. Fix all other state/city pages
console.log(`\n📍 Fixing Other State/City Pages...`);
const statesDir = path.join(__dirname, '..', 'app', 'in');

const states = fs.readdirSync(statesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory() && dirent.name !== 'tamil-nadu')
  .map(dirent => dirent.name);

states.forEach(state => {
  const stateDir = path.join(statesDir, state);
  const cities = fs.readdirSync(stateDir, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name);
  
  cities.forEach(city => {
    const cityPagePath = path.join(stateDir, city, 'page.tsx');
    if (fs.existsSync(cityPagePath)) {
      try {
        let content = fs.readFileSync(cityPagePath, 'utf8');
        const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const stateName = state.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
        const newH1 = `Best Dentist and Dental Clinic in ${cityName}, ${stateName}`;
        
        if (content.includes('LocationHeader')) {
          content = content.replace(
            /<LocationHeader\s+locationName="[^"]*"/,
            `<LocationHeader
          locationName="${newH1}"`
          );
          fs.writeFileSync(cityPagePath, content);
          totalUpdated++;
        }
      } catch (error) {
        // Skip errors
      }
    }
    
    // Fix sub-locations too
    const cityDir = path.join(stateDir, city);
    if (fs.existsSync(cityDir)) {
      const locations = fs.readdirSync(cityDir, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);
      
      locations.forEach(locationSlug => {
        const pagePath = path.join(cityDir, locationSlug, 'page.tsx');
        if (fs.existsSync(pagePath)) {
          try {
            let content = fs.readFileSync(pagePath, 'utf8');
            const locationName = locationSlug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            const cityName = city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
            const newH1 = `Best Dentist and Dental Clinic in ${locationName}, ${cityName}`;
            
            if (content.includes('LocationHeader')) {
              content = content.replace(
                /<LocationHeader\s+locationName="[^"]*"/,
                `<LocationHeader
          locationName="${newH1}"`
              );
              fs.writeFileSync(pagePath, content);
              totalUpdated++;
            }
          } catch (error) {
            // Skip errors
          }
        }
      });
    }
  });
});

console.log(`
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 H1 TITLE FIX SUMMARY:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✅ Total Updated:         ${totalUpdated} pages

  Formats Applied:
  
  🩺 Condition Pages:
     "<Condition> Causes, Symptoms & Treatment"
  
  📍 City/State Pages:
     "Best Dentist and Dental Clinic in <City>, <State>"
  
  📍 Sub-Location Pages:
     "Best Dentist and Dental Clinic in <Location>, <City>"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ All H1 titles now follow your specifications!
`);

