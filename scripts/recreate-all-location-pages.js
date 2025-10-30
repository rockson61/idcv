#!/usr/bin/env node
// Recreate ALL location pages under app/in/** with a safe template
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const APP_IN = path.resolve(ROOT, 'app', 'in');
const recreateOne = require('./recreate-location-page.js');

function walk(dir, acc = []) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, acc);
    else if (e.isFile() && e.name === 'page.tsx') acc.push(p);
  }
  return acc;
}

function main() {
  if (!fs.existsSync(APP_IN)) {
    console.error('No app/in directory found');
    process.exit(1);
  }
  const pages = walk(APP_IN);
  let recreated = 0;
  for (const file of pages) {
    try {
      // Recreate in-place; import the script as a module isn't straightforward; replicate minimal logic
      const rel = path.relative(ROOT, file);
      const parts = rel.split(path.sep);
      const idxIn = parts.indexOf('in');
      const stateSlug = parts[idxIn + 1];
      const next = parts[idxIn + 2];
      let cityOrDistrictSlug = undefined;
      let areaSlug = undefined;
      if (parts.length - 1 === idxIn + 2) {
        cityOrDistrictSlug = undefined;
        areaSlug = stateSlug;
      } else if (parts.length - 1 === idxIn + 3) {
        cityOrDistrictSlug = undefined;
        areaSlug = next;
      } else {
        cityOrDistrictSlug = next;
        areaSlug = parts[idxIn + 3];
      }
      const relPath = rel.replace(/^app\//, '');
      const humanize = s => s.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
      const stateName = humanize(stateSlug);
      const cityName = humanize(cityOrDistrictSlug || stateSlug);
      const locationName = humanize(areaSlug || cityOrDistrictSlug || stateSlug);
      const content = `import { Breadcrumb } from '@/components/breadcrumb'
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
      fs.writeFileSync(file, content);
      recreated++;
    } catch (e) {
      console.error('Failed to recreate', file, e.message);
    }
  }
  console.log(`Recreated ${recreated} location pages.`);
}

main();


