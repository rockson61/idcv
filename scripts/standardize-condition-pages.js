#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const conditions = [
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

function standardizeConditionPage(conditionFile, conditionTitle, medicinesType) {
  const filePath = path.join(__dirname, '..', 'app', 'conditions', conditionFile, 'page.tsx');
  
  if (!fs.existsSync(filePath)) {
    console.log(`  ⏭️  Skipped: ${conditionFile} (file not found)`);
    return false;
  }
  
  let content = fs.readFileSync(filePath, 'utf8');
  let updated = false;
  
  // 1. Update H1 title
  const h1Pattern = /<h1[^>]*>([^<]+)<\/h1>/;
  if (content.match(h1Pattern)) {
    const newH1 = `<h1 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">${conditionTitle} Causes, Symptoms & Treatment</h1>`;
    content = content.replace(h1Pattern, newH1);
    updated = true;
  }
  
  // 2. Add MedicineSection import if not present
  if (!content.includes('MedicineSection')) {
    const importPattern = /(import.*from.*\n)/g;
    const imports = content.match(importPattern);
    if (imports) {
      const lastImport = imports[imports.length - 1];
      const lastImportIndex = content.lastIndexOf(lastImport);
      content = content.slice(0, lastImportIndex + lastImport.length) + 
                `import { MedicineSection, commonMedicines } from '@/components/condition/MedicineSection'\n` +
                content.slice(lastImportIndex + lastImport.length);
      updated = true;
    }
  }
  
  // 3. Ensure MedicineSection is added before </div></main> or </div></div>
  if (!content.includes(`<MedicineSection`)) {
    const closingPattern = /(      <\/div>\s*<\/main>)/;
    if (content.match(closingPattern)) {
      const medicineComponent = `\n      {/* Medicine & Drugs Section */}
      <MedicineSection 
        conditionName="${conditionTitle}"
        medicines={commonMedicines.${medicinesType}}
      />
\n`;
      content = content.replace(closingPattern, medicineComponent + '$1');
      updated = true;
    }
  }
  
  // 4. Ensure consistent prose class
  if (content.includes('prose max-w-none') && !content.includes('prose-lg')) {
    content = content.replace(/prose max-w-none/g, 'prose prose-lg max-w-none');
    updated = true;
  }
  
  if (updated) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`  ✅ Standardized: ${conditionFile}`);
    return true;
  }
  
  console.log(`  ⏭️  Skipped: ${conditionFile} (already standardized)`);
  return false;
}

console.log('🚀 Standardizing all condition pages...\n');
console.log('   Updates:');
console.log('   1. H1 format: "<Condition> Causes, Symptoms & Treatment"');
console.log('   2. Medicine & Tablets section');
console.log('   3. Consistent typography (prose-lg)');
console.log('   4. Professional layout\n');

let updated = 0;
let skipped = 0;

conditions.forEach(condition => {
  if (standardizeConditionPage(condition.file, condition.title, condition.medicines)) {
    updated++;
  } else {
    skipped++;
  }
});

console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('✅ Condition Pages Standardization Complete!');
console.log(`   Updated:  ${updated} condition pages`);
console.log(`   Skipped:  ${skipped} pages (already standardized)`);
console.log(`   Total:    ${conditions.length} conditions processed`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('\n✅ All condition pages now have:');
console.log('   • Consistent H1 format');
console.log('   • Medicine & Tablets section');
console.log('   • Professional typography');
console.log('   • Standardized layout');
console.log('   • Medical disclaimers');
console.log('   • CTAs for appointments');

