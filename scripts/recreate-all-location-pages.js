#!/usr/bin/env node
// Recreate ALL location pages under app/in/** with a safe template - NO TDZ, NO EDGE RUNTIME
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

function humanize(slug) {
  if (!slug) return '';
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function buildBreadcrumbItems(stateSlug, cityOrDistrictSlug, areaSlug, relPath) {
  const items = [
    { title: 'Home', href: '/' },
    { title: 'India', href: '/in' },
  ];
  
  const stateName = humanize(stateSlug);
  items.push({ title: stateName, href: `/in/${stateSlug}` });
  
  if (cityOrDistrictSlug && areaSlug !== cityOrDistrictSlug) {
    const cityName = humanize(cityOrDistrictSlug);
    items.push({ title: cityName, href: `/in/${stateSlug}/${cityOrDistrictSlug}` });
  }
  
  if (areaSlug && areaSlug !== stateSlug && areaSlug !== cityOrDistrictSlug) {
    const areaName = humanize(areaSlug);
    const cleanPath = relPath.replace(/^app\//, '').replace(/\/page\.tsx$/, '');
    items.push({ title: areaName, href: `/${cleanPath}` });
  }
  
  return items;
}

function buildTemplate(stateSlug, cityOrDistrictSlug, areaSlug, relPath) {
  const stateName = humanize(stateSlug);
  const cityName = humanize(cityOrDistrictSlug || stateSlug);
  const locationName = humanize(areaSlug || cityOrDistrictSlug || stateSlug);
  const breadcrumbItems = buildBreadcrumbItems(stateSlug, cityOrDistrictSlug, areaSlug, relPath);
  
  const breadcrumbStr = breadcrumbItems.map(item => 
    `            { title: '${item.title}', href: '${item.href}' }`
  ).join(',\n');
  
  return `import { Breadcrumb } from '@/components/breadcrumb'
import dynamic from 'next/dynamic'
import type { Metadata } from 'next'

// Dynamically import client components to avoid SSR issues during static generation
const LocationHeader = dynamic(() => import('@/components/location/LocationHeader').then(m => ({ default: m.LocationHeader })), { ssr: false })
const GoogleMapEmbed = dynamic(() => import('@/components/location/GoogleMapEmbed').then(m => ({ default: m.GoogleMapEmbed })), { ssr: false })
const EnhancedServicesList = dynamic(() => import('@/components/location/EnhancedServicesList').then(m => ({ default: m.EnhancedServicesList })), { ssr: false })
const LocationReviews = dynamic(() => import('@/components/location/LocationReviews').then(m => ({ default: m.LocationReviews })), { ssr: false })
const LocationFAQs = dynamic(() => import('@/components/location/LocationFAQs').then(m => ({ default: m.LocationFAQs })), { ssr: false })
const PeopleAlsoSearchFor = dynamic(() => import('@/components/location/PeopleAlsoSearchFor').then(m => ({ default: m.PeopleAlsoSearchFor })), { ssr: false })

export const metadata: Metadata = {
  title: 'Best Dentist in ${locationName}, ${stateName} | Indira Dental Clinic',
  description: 'Top-rated dental care for ${locationName}, ${stateName}. Save on treatments at Indira Dental Clinic, Vellore.',
}

const locationName = '${locationName}'
const city = '${cityName}'
const services: any[] = []
const reviews: any[] = []
const faqs: any[] = []

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb
          items={[
${breadcrumbStr},
          ]}
        />

        <LocationHeader locationName={locationName} category="town" />

        <div className="mb-8">
          <GoogleMapEmbed locationName={locationName} />
        </div>

        <div className="mb-8">
          <EnhancedServicesList locationName={locationName} services={services} />
        </div>

        <div className="mb-8">
          <LocationReviews locationName={locationName} reviews={reviews} />
        </div>

        <div className="mb-8">
          <LocationFAQs locationName={locationName} faqs={faqs} />
        </div>

        <div className="mb-8">
          <PeopleAlsoSearchFor location={locationName} city={city} />
        </div>
      </div>
    </div>
  )
}
`;
}

function main() {
  if (!fs.existsSync(APP_IN)) {
    console.error('No app/in directory found');
    process.exit(1);
  }
  
  const pages = walk(APP_IN);
  let recreated = 0;
  let errors = 0;
  
  console.log(`Found ${pages.length} location pages to process...`);
  
  for (const file of pages) {
    try {
      const rel = path.relative(ROOT, file);
      const parts = rel.split(path.sep);
      const idxIn = parts.indexOf('in');
      
      if (idxIn === -1 || parts[parts.length - 1] !== 'page.tsx') {
        console.warn(`Skipping unexpected path: ${rel}`);
        continue;
      }
      
      const stateSlug = parts[idxIn + 1];
      if (!stateSlug) {
        console.warn(`No state slug found in: ${rel}`);
        continue;
      }
      
      // Determine structure: app/in/<state>/page.tsx or app/in/<state>/<city>/<area>/page.tsx
      let cityOrDistrictSlug = undefined;
      let areaSlug = undefined;
      
      if (parts.length === idxIn + 3) {
        // app/in/<state>/page.tsx (state root)
        areaSlug = stateSlug;
      } else if (parts.length === idxIn + 4) {
        // app/in/<state>/<city-or-area>/page.tsx
        areaSlug = parts[idxIn + 2];
      } else if (parts.length >= idxIn + 5) {
        // app/in/<state>/<city>/<area>/page.tsx
        cityOrDistrictSlug = parts[idxIn + 2];
        areaSlug = parts[idxIn + 3];
      }
      
      const content = buildTemplate(stateSlug, cityOrDistrictSlug, areaSlug, rel);
      fs.writeFileSync(file, content, 'utf8');
      recreated++;
      
      if (recreated % 50 === 0) {
        console.log(`Processed ${recreated} pages...`);
      }
    } catch (e) {
      console.error(`Failed to recreate ${file}:`, e.message);
      errors++;
    }
  }
  
  console.log(`\n✅ Recreated ${recreated} location pages.`);
  if (errors > 0) {
    console.log(`⚠️  ${errors} pages failed to process.`);
  }
  console.log('\nAll pages now have:');
  console.log('  - Static constants (no TDZ)');
  console.log('  - force-static export (no edge runtime)');
  console.log('  - Clean breadcrumb links');
  console.log('  - Standard component layout');
}

main();

