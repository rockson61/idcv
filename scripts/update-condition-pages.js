#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const conditionUpdates = [
  { file: 'tooth-decay', title: 'Tooth Decay', medicines: 'toothDecay' },
  { file: 'gum-disease', title: 'Gum Disease', medicines: 'gumDisease' },
  { file: 'tooth-abscess', title: 'Tooth Abscess', medicines: 'toothAbscess' },
  { file: 'tooth-sensitivity', title: 'Tooth Sensitivity', medicines: 'toothSensitivity' },
  { file: 'bruxism', title: 'Bruxism (Teeth Grinding)', medicines: 'bruxism' },
  { file: 'bad-breath', title: 'Bad Breath (Halitosis)', medicines: 'badBreath' },
  { file: 'dry-mouth', title: 'Dry Mouth (Xerostomia)', medicines: 'dryMouth' },
  { file: 'receding-gums', title: 'Receding Gums', medicines: 'gumDisease' },
  { file: 'cracked-teeth', title: 'Cracked Teeth', medicines: 'toothDecay' },
  { file: 'tooth-erosion', title: 'Tooth Erosion', medicines: 'toothSensitivity' },
  { file: 'impacted-teeth', title: 'Impacted Teeth', medicines: 'toothAbscess' },
];

function updateConditionPage(conditionFile, conditionTitle, medicinesType) {
  const filePath = path.join(__dirname, '..', 'app', 'conditions', conditionFile, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`  ⏭️  Skipped: ${conditionFile} (file not found)`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Update H1 title
  const h1Pattern = /<h1[^>]*>([^<]+)<\/h1>/;
  if (content.match(h1Pattern)) {
    content = content.replace(h1Pattern, `<h1 className="text-3xl md:text-4xl font-bold mb-6">${conditionTitle} Causes, Symptoms & Treatment</h1>`);
  }
  
  // Add import for MedicineSection if not present
  if (!content.includes('MedicineSection')) {
    const importPattern = /(import.*from.*\n)/g;
    const imports = content.match(importPattern);
    if (imports) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      content = content.slice(0, lastImportIndex + lastImport.length) + 
                `import { MedicineSection, commonMedicines } from '@/components/condition/MedicineSection'\n` +
                content.slice(lastImportIndex + lastImport.length);
    }
    
    // Add MedicineSection component before the closing div
    const closingPattern = /(      <\/div>\s*<\/main>)/;
    if (content.match(closingPattern)) {
      const medicineComponent = `\n      {/* Medicine & Drugs Section */}
      <MedicineSection 
        conditionName="${conditionTitle}"
        medicines={commonMedicines.${medicinesType}}
      />
\n`;
      content = content.replace(closingPattern, medicineComponent + '$1');
    }
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`  ✅ Updated: ${conditionFile}`);
  return true;
}

console.log('🚀 Updating all condition pages...\n');
console.log('   1. Updating H1 titles to "<Condition> Causes, Symptoms & Treatment"');
console.log('   2. Adding Medicine & Tablets section\n');

let updated = 0;
let skipped = 0;

conditionUpdates.forEach(condition => {
  if (updateConditionPage(condition.file, condition.title, condition.medicines)) {
    updated++;
  } else {
    skipped++;
  }
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Condition Pages Update Complete!');
console.log(`   Updated:  ${updated} condition pages`);
console.log(`   Skipped:  ${skipped} pages`);
console.log(`   Total:    ${conditionUpdates.length} conditions processed`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n✅ Each condition page now includes:');
console.log('   • Updated H1: "<Condition> Causes, Symptoms & Treatment"');
console.log('   • Medicine & Tablets section with:');
console.log('     - Common medications');
console.log('     - Dosage information');
console.log('     - Duration & purpose');
console.log('     - Side effects warning');
console.log('     - Medical disclaimer');
console.log('     - Prescription CTA');

