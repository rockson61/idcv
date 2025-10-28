#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Comprehensive service structure from user
const comprehensiveServices = {
  'general-dentistry': [
    'dental-checkup',
    'new-patient-examination',
    'routine-examination',
    'dental-x-ray',
    'dental-x-ray/panoramic',
    'dental-x-ray/digital',
    'dental-x-ray/ct-scan',
    'teeth-cleaning',
    'teeth-cleaning/scaling-root-planing',
    'teeth-cleaning/ultrasonic-scaling',
    'teeth-cleaning/air-abrasion',
    'fillings',
    'fillings/white-filling',
    'fillings/amalgam-filling',
    'fillings/temporary-filling',
    'fillings/composite-resin-inlay-onlay',
    'fluoride-therapy',
    'dental-sealants',
    'bad-breath-treatment',
    'oral-cancer-screening',
    'family-dentist-consultation'
  ],
  'preventive-dentistry': [
    'dental-sealants',
    'fluoride-treatments',
    'mouth-guards',
    'hygienist-sessions',
    'oral-hygiene-education',
    'nutritional-counseling'
  ],
  'restorative-dentistry': [
    'dental-crowns',
    'dental-crowns/porcelain-crown',
    'dental-crowns/gold-crown',
    'dental-crowns/zirconia-crown',
    'dental-crowns/pfm-crown',
    'dental-crowns/temporary-crown',
    'dental-bridges',
    'dental-bridges/porcelain-bridge',
    'dental-bridges/pfm-bridge',
    'dental-bridges/maryland-bridge',
    'dental-bridges/implant-bridge',
    'dental-bridges/3-unit-bridge',
    'dental-bridges/temporary-bridge',
    'inlays-onlays',
    'inlays-onlays/porcelain',
    'inlays-onlays/gold',
    'cerec-restorations',
    'restorative-dentist-consultation'
  ],
  'cosmetic-dentistry': [
    'teeth-whitening',
    'teeth-whitening/zoom-whitening',
    'teeth-whitening/laser-whitening',
    'teeth-whitening/home-kits',
    'veneers',
    'veneers/porcelain-veneers',
    'veneers/composite-veneers',
    'veneers/lumineers',
    'dental-bonding',
    'teeth-contouring',
    'gum-contouring',
    'snap-on-smile',
    'cosmetic-dentist-consultation',
    'smile-makeover'
  ],
  'orthodontics': [
    'braces',
    'braces/metal-braces',
    'braces/ceramic-braces',
    'braces/lingual-braces',
    'braces/clear-braces',
    'braces/fixed-braces',
    'braces/removable-braces',
    'braces/child-braces',
    'braces/adult-braces',
    'braces/damon-braces',
    'invisalign',
    'six-month-smiles',
    'inman-aligner',
    'cfast',
    'clearstep',
    'orthodontic-retainer',
    'orthodontist-consultation'
  ],
  'endodontics': [
    'root-canal-therapy',
    'root-canal-therapy/molar',
    'root-canal-therapy/premolar',
    'root-canal-therapy/incisor',
    'root-canal-therapy/complex',
    'root-end-surgery',
    'endodontist-consultation'
  ],
  'periodontics': [
    'gum-surgery',
    'soft-tissue-grafts',
    'periodontitis-treatment',
    'gingivitis-treatment',
    'periodontist-consultation',
    'scaling-root-planing',
    'gum-recession-treatment'
  ],
  'prosthodontics': [
    'dentures',
    'dentures/full-dentures',
    'dentures/partial-dentures',
    'dentures/partial-dentures/flexible',
    'dentures/partial-dentures/removable',
    'dentures/immediate-dentures',
    'dentures/overdentures',
    'dentures/chrome-dentures',
    'dentures/acrylic-dentures',
    'dentures/repair',
    'dentures/adjustment',
    'denturist-consultation'
  ],
  'dental-implants': [
    'single-implant',
    'multiple-implants',
    'all-on-4-implants',
    'implant-supported-dentures',
    'bone-graft',
    'sinus-lift',
    'implant-dentist-consultation'
  ],
  'oral-surgery': [
    'extractions',
    'extractions/wisdom-tooth',
    'extractions/non-surgical',
    'extractions/surgical',
    'lingual-frenectomy',
    'oral-surgeon-consultation',
    'jaw-surgery',
    'oral-pathology'
  ],
  'pediatric-dentistry': [
    'child-braces',
    'fluoride-therapy',
    'dental-sealants',
    'pediatric-dentist-consultation',
    'space-maintainers',
    'pulp-therapy',
    'early-orthodontic-treatment'
  ],
  'tmj-treatment': [
    'tmj-disorder-treatment',
    'night-guards',
    'occlusal-adjustments'
  ],
  'sedation-dentistry': [
    'nitrous-oxide-sedation',
    'oral-sedation',
    'iv-sedation',
    'general-anesthesia'
  ],
  'emergency-dentistry': [
    'emergency-consultation',
    'toothache-relief',
    'broken-tooth-repair'
  ],
  'conditions': {
    'tooth-problems': [
      'tooth-decay',
      'cavities',
      'tooth-sensitivity',
      'tooth-discoloration',
      'fractured-teeth',
      'wisdom-teeth-issues',
      'dry-socket',
      'abscessed-tooth',
      'enamel-erosion'
    ],
    'gum-issues': [
      'gingivitis',
      'periodontitis',
      'gum-recession',
      'bleeding-gums',
      'gum-disease'
    ],
    'jaw-conditions': [
      'tmj-disorders',
      'broken-jaw',
      'malocclusion'
    ],
    'other-conditions': [
      'bad-breath',
      'dry-mouth',
      'oral-cancer',
      'burning-mouth-syndrome',
      'oral-thrush',
      'geographic-tongue',
      'lichen-planus'
    ]
  },
  'specialized-services': [
    'sleep-apnea-treatment',
    'snoring-solutions',
    'botox-for-tmj',
    'laser-dentistry'
  ]
};

// Count total pages needed
let totalCount = 0;
let existingCount = 0;
let missingCount = 0;

console.log('🔍 Analyzing comprehensive service structure...\n');

// Function to check if page exists
function pageExists(category, page) {
  const fullPath = path.join(__dirname, '..', 'app', 'services', category, page, 'page.tsx');
  return fs.existsSync(fullPath);
}

// Analyze each category
for (const [category, pages] of Object.entries(comprehensiveServices)) {
  if (category === 'conditions') {
    // Handle conditions separately (different structure)
    for (const [subcat, subpages] of Object.entries(pages)) {
      for (const page of subpages) {
        totalCount++;
        const condPath = path.join(__dirname, '..', 'app', 'conditions', page, 'page.tsx');
        if (fs.existsSync(condPath)) {
          existingCount++;
        } else {
          missingCount++;
        }
      }
    }
  } else {
    for (const page of pages) {
      totalCount++;
      if (pageExists(category, page)) {
        existingCount++;
      } else {
        missingCount++;
      }
    }
  }
}

console.log('📊 ANALYSIS RESULTS:');
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log(`  Total pages in comprehensive list: ${totalCount}`);
console.log(`  Existing pages:                    ${existingCount}`);
console.log(`  Missing pages:                     ${missingCount}`);
console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
console.log('');
console.log('📋 BREAKDOWN BY CATEGORY:');
console.log('');

// Detailed breakdown
for (const [category, pages] of Object.entries(comprehensiveServices)) {
  if (category === 'conditions') {
    console.log(`  Conditions:`);
    for (const [subcat, subpages] of Object.entries(pages)) {
      const missing = subpages.filter(p => {
        const condPath = path.join(__dirname, '..', 'app', 'conditions', p, 'page.tsx');
        return !fs.existsSync(condPath);
      });
      console.log(`    ${subcat}: ${missing.length} missing of ${subpages.length} total`);
    }
  } else {
    const missing = pages.filter(p => !pageExists(category, p));
    console.log(`  ${category}: ${missing.length} missing of ${pages.length} total`);
  }
}

console.log('');
console.log('🎯 NEXT STEPS:');
console.log('  1. Generate all missing service pages');
console.log('  2. Follow existing UI/UX patterns');
console.log('  3. Add proper metadata and schema');
console.log('  4. Update sitemap');
console.log('');

// Save comprehensive structure
fs.writeFileSync(
  path.join(__dirname, 'comprehensive-services.json'),
  JSON.stringify(comprehensiveServices, null, 2)
);

console.log('✅ Service structure saved to: scripts/comprehensive-services.json');
console.log('');

