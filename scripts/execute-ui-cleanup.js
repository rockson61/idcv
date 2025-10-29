#!/usr/bin/env node

/**
 * EXECUTE UI/UX CLEANUP - AUTOMATED
 * Implements high-priority actions from UI/UX audit
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const ARCHIVE_DIR = path.join(ROOT, '.archive', 'unused-components');

// Ensure archive directory exists
if (!fs.existsSync(ARCHIVE_DIR)) {
  fs.mkdirSync(ARCHIVE_DIR, { recursive: true });
}

// DUPLICATES TO DELETE (keep the first file, delete others)
const DUPLICATES_TO_DELETE = [
  'components/location/LocationFAQs.tsx',  // Keep components/LocationFAQs.tsx
  'components/schema/faq-schema.tsx',  // Keep components/ask-dentist/faq-schema.tsx
  'components/ui/breadcrumb.tsx',  // Keep components/breadcrumb.tsx
  'components/header.tsx',  // Keep components/common/Header.tsx
  'components/layout/header.tsx',  // Keep components/common/Header.tsx
  'components/sections/emergency-contact.tsx',  // Keep components/emergency-contact.tsx
  'components/sections/faq-section.tsx',  // Keep components/faq-section.tsx
  'components/layout/footer.tsx',  // Keep components/footer.tsx
  'components/sections/hero.tsx',  // Keep components/hero.tsx
  'components/schema/location-schema.tsx',  // Keep components/location-schema.tsx
  'components/schema-markup.tsx',  // Keep components/schema/schema-markup.tsx
  'components/testimonials.tsx',  // Keep components/sections/testimonials.tsx
  'components/why-choose-us.tsx',  // Keep components/sections/why-choose-us.tsx
];

// UNUSED COMPONENTS TO ARCHIVE
const UNUSED_COMPONENTS = [
  'components/AIAssistantButton.tsx',
  'components/CurrencyCalculator.tsx',
  'components/DentistProfileWidget.tsx',
  'components/LocationContent.tsx',
  'components/LocationPageTemplate.tsx',
  'components/LocationPricingTable.tsx',
  'components/LocationSchema.tsx',
  'components/MultiCurrencyPricingTable.tsx',
  'components/NearbyCities.tsx',
  'components/PricingTable.tsx',
  'components/SubLocationPageTemplate.tsx',
  'components/TestimonialCarousel.tsx',
  'components/TreatmentComparisonTable.tsx',
  'components/TreatmentsAndConditions.tsx',
  'components/affordable-dentistry-banner.tsx',
  'components/appointment-booking-system.tsx',
  'components/areas-we-serve.tsx',
  'components/ask-dentist/replies-section.tsx',
  'components/before-after-gallery.tsx',
  'components/blog/blog-author-card.tsx',
  'components/blog/blog-cta-section.tsx',
  'components/blog/blog-list-item.tsx',
  'components/blog/blog-post-card.tsx',
  'components/blog/category-filter.tsx',
  'components/blog/category-grid.tsx',
  'components/blog/featured-post.tsx',
  'components/blog/post-card.tsx',
  'components/blog/recent-posts.tsx',
  'components/blog/related-posts.tsx',
  'components/booking-modal.tsx',
  'components/booking-widget.tsx',
  'components/clinic-info-card.tsx',
  'components/clinic-info.tsx',
  'components/clinic-timings.tsx',
  'components/clinic-usp.tsx',
  'components/content-generator.tsx',
  'components/cosmetic-procedures.tsx',
  'components/custom-google-map.tsx',
  'components/dental-health-tips.tsx',
  'components/dental-tourism.tsx',
  'components/dentist-profile.tsx',
  'components/detailed-services.tsx',
  'components/doctor-info.tsx',
  'components/doctor-profile.tsx',
  'components/endodontic-procedures.tsx',
  'components/enhanced-breadcrumbs.tsx',
  'components/enhanced-reviews.tsx',
  'components/faq.tsx',
  'components/featured-on.tsx',
  'components/features.tsx',
  'components/floating-action-bar.tsx',
  'components/floating-menu-button.tsx',
  'components/floating-menu.tsx',
  'components/footer-content.tsx',
  'components/heading-processor.tsx',
  'components/insurance-coverage.tsx',
  'components/invisalign-info.tsx',
  'components/json-ld.tsx',
  'components/location-breadcrumb.tsx',
  'components/location-card.tsx',
  'components/location-information.tsx',
  'components/location-map.tsx',
  'components/location-page-template.tsx',
  'components/location-search.tsx',
  'components/main-header.tsx',
  'components/main-nav.tsx',
  'components/map.tsx',
  'components/modern-sidebar.tsx',
  'components/nap-header.tsx',
  'components/navigation.tsx',
  'components/nearby-locations.tsx',
  'components/NearbyLocations.tsx',
  'components/oral-surgery.tsx',
  'components/orthodontic-treatments.tsx',
  'components/page-header.tsx',
  'components/PageTemplate.tsx',
  'components/patient-reviews.tsx',
  'components/periodontal-treatments.tsx',
  'components/popular-destinations.tsx',
  'components/preventive-procedures.tsx',
  'components/pricing-table.tsx',
  'components/pricing.tsx',
  'components/public-transport.tsx',
  'components/related-links.tsx',
  'components/restorative-procedures.tsx',
  'components/reviews.tsx',
  'components/SchemaMarkup.tsx',
  'components/search-widget.tsx',
  'components/service-cards.tsx',
  'components/service-content-template.tsx',
  'components/service-detail-modal.tsx',
  'components/service-faq.tsx',
  'components/service-page-template.tsx',
  'components/service-testimonials.tsx',
  'components/services-with-images.tsx',
  'components/services.tsx',
  'components/ServicesOverview.tsx',
  'components/sidebar-wrapper.tsx',
  'components/sidebar.tsx',
  'components/site-header.tsx',
  'components/smart-navigation.tsx',
  'components/smile-transformations.tsx',
  'components/some-module.tsx',
  'components/staff-directory.tsx',
  'components/theme-provider.tsx',
  'components/theme-toggle.tsx',
  'components/treatment-pricing.tsx',
  'components/vellore-location-template.tsx',
];

let deleted = 0;
let archived = 0;
let errors = 0;

console.log('UI/UX CLEANUP EXECUTION');
console.log('=======================\n');

// STEP 1: Delete duplicate components
console.log('STEP 1: Deleting duplicate components...\n');

DUPLICATES_TO_DELETE.forEach(file => {
  const fullPath = path.join(ROOT, file);
  try {
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(`✓ Deleted: ${file}`);
      deleted++;
    }
  } catch (err) {
    console.log(`✗ Error deleting ${file}: ${err.message}`);
    errors++;
  }
});

console.log(`\nDeleted ${deleted} duplicate components\n`);

// STEP 2: Archive unused components
console.log('STEP 2: Archiving unused components...\n');

UNUSED_COMPONENTS.forEach(file => {
  const fullPath = path.join(ROOT, file);
  const archivePath = path.join(ARCHIVE_DIR, path.basename(file));
  
  try {
    if (fs.existsSync(fullPath)) {
      fs.copyFileSync(fullPath, archivePath);
      fs.unlinkSync(fullPath);
      console.log(`✓ Archived: ${file}`);
      archived++;
    }
  } catch (err) {
    console.log(`✗ Error archiving ${file}: ${err.message}`);
    errors++;
  }
});

console.log(`\nArchived ${archived} unused components\n`);

// STEP 3: Create cleanup summary
const summary = `UI/UX CLEANUP EXECUTION SUMMARY
================================
Executed: ${new Date().toISOString()}

DUPLICATES REMOVED: ${deleted}
${DUPLICATES_TO_DELETE.map((f, i) => `${i + 1}. ${f}`).join('\n')}

UNUSED COMPONENTS ARCHIVED: ${archived}
Location: .archive/unused-components/

ERRORS: ${errors}

ESTIMATED BUNDLE REDUCTION: ${(deleted * 3 + archived * 4).toFixed(0)}KB

NEXT STEPS:
-----------
1. Update imports referencing deleted duplicates
2. Test build: npm run build
3. Verify no broken references
4. Commit changes to git

STATUS: ${errors === 0 ? 'SUCCESS' : 'COMPLETED WITH ERRORS'}
`;

fs.writeFileSync(path.join(ROOT, 'UI_CLEANUP_SUMMARY.txt'), summary, 'utf8');

console.log('\n' + summary);
console.log('\nCleanup complete! Summary saved to: UI_CLEANUP_SUMMARY.txt');

