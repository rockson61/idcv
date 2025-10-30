#!/usr/bin/env node
// Recreate a single location page with a safe, consistent template.
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');

function humanize(slug) {
  return slug.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
}

function buildTemplate({ stateSlug, cityOrDistrictSlug, areaSlug, relPath }) {
  const stateName = humanize(stateSlug);
  const cityName = humanize(cityOrDistrictSlug || stateSlug);
  const locationName = humanize(areaSlug || cityOrDistrictSlug || stateSlug);
  return `import { Breadcrumb } from '@/components/breadcrumb'
import { LocationHeader } from '@/components/location/LocationHeader'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { EnhancedServicesList } from '@/components/location/EnhancedServicesList'
import { LocationReviews } from '@/components/location/LocationReviews'
import { LocationFAQs } from '@/components/LocationFAQs'
import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'
import type { Metadata } from 'next'

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
            { title: 'Home', href: '/' },
            { title: 'India', href: '/in' },
            { title: '${stateName}', href: '/in/${stateSlug}' },
            ${cityOrDistrictSlug ? `{ title: '${humanize(cityOrDistrictSlug)}', href: '/in/${stateSlug}/${cityOrDistrictSlug}' },` : ''}
            { title: '${locationName}', href: '/${relPath.replace(/\\\\/g, '/')}' },
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

function recreate(targetFile) {
  const abs = path.isAbsolute(targetFile) ? targetFile : path.resolve(ROOT, targetFile);
  const rel = path.relative(ROOT, abs);
  if (!rel.startsWith('app' + path.sep)) {
    throw new Error('Provide a path under app/');
  }
  // Expect patterns like app/in/<state>/<city?>/<area>/page.tsx or app/in/<state>/page.tsx
  const parts = rel.split(path.sep);
  const idxIn = parts.indexOf('in');
  if (idxIn === -1) throw new Error('Not under app/in');
  const stateSlug = parts[idxIn + 1];
  const next = parts[idxIn + 2];
  let cityOrDistrictSlug = undefined;
  let areaSlug = undefined;
  if (parts[parts.length - 1] !== 'page.tsx') throw new Error('Target must be page.tsx');
  if (parts.length - 1 === idxIn + 2) {
    // app/in/<state>/page.tsx
    cityOrDistrictSlug = undefined;
    areaSlug = stateSlug;
  } else if (parts.length - 1 === idxIn + 3) {
    // app/in/<state>/<city-or-area>/page.tsx
    cityOrDistrictSlug = undefined;
    areaSlug = next;
  } else {
    cityOrDistrictSlug = next;
    areaSlug = parts[idxIn + 3];
  }

  const relPath = rel.replace(/^app\//, '');
  const content = buildTemplate({ stateSlug, cityOrDistrictSlug, areaSlug, relPath });
  fs.writeFileSync(abs, content);
  console.log(`Recreated ${rel}`);
}

function main() {
  const target = process.argv[2];
  if (!target) {
    console.error('Usage: node scripts/recreate-location-page.js app/in/<...>/page.tsx');
    process.exit(1);
  }
  recreate(target);
}

main();


