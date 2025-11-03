'use client'

import { Breadcrumb } from '@/components/breadcrumb'
import { LocationHeader, DentistProfile } from '@/components/location/LocationHeader'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { EnhancedServicesList, LocationService } from '@/components/location/EnhancedServicesList'
import { LocationReviews, Review } from '@/components/location/LocationReviews'
import { LocationFAQs, FAQ } from '@/components/location/LocationFAQs'
import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { generateDefaultReviews, generateDefaultFAQs } from '@/lib/location-generators'

interface NearbyLocation {
  title: string
  href: string
}

export interface StandardLocationLayoutProps {
  locationName: string
  stateName: string
  stateSlug?: string
  cityName?: string
  citySlug?: string
  taluk?: string
  pincode?: string
  distance?: string
  category?: 'major_town' | 'town' | 'village' | 'industrial' | 'historic'
  specialFeatures?: string[]
  landmark?: string
  mapAddress?: string
  services?: LocationService[]
  reviews?: Review[]
  faqs?: FAQ[]
  nearbyLocations?: NearbyLocation[]
  introParagraph?: string
  tagline?: string
  whyChoose?: string[]
  dentists?: DentistProfile[]
  ctaTitle?: string
  ctaDescription?: string
  faqDistance?: string
  clinicName?: string
}

const slugify = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')

export function StandardLocationLayout({
  locationName,
  stateName,
  stateSlug,
  cityName,
  citySlug,
  taluk,
  pincode,
  distance,
  category,
  specialFeatures,
  landmark,
  mapAddress,
  services,
  reviews,
  faqs,
  nearbyLocations,
  introParagraph,
  tagline,
  whyChoose,
  dentists,
  ctaTitle,
  ctaDescription,
  faqDistance,
  clinicName,
}: StandardLocationLayoutProps) {
  const stateSlugNormalized = stateSlug || slugify(stateName)
  const cityNameResolved = cityName || locationName
  const citySlugNormalized = citySlug || slugify(cityNameResolved)
  const locationSlug = slugify(locationName)
  const talukName = taluk || cityNameResolved

  const statePath = `/in/${stateSlugNormalized}`
  const hasDistinctCity = citySlugNormalized !== locationSlug
  const cityPath = `${statePath}/${citySlugNormalized}`
  const locationPath = hasDistinctCity ? `${cityPath}/${locationSlug}` : `${statePath}/${locationSlug}`

  const breadcrumbItems = [
    { title: 'Home', href: '/' },
    { title: 'India', href: '/in' },
    { title: stateName, href: statePath },
  ]

  if (hasDistinctCity) {
    breadcrumbItems.push({ title: cityNameResolved, href: cityPath })
  }

  breadcrumbItems.push({ title: locationName, href: locationPath })

  const reviewData = reviews && reviews.length > 0 ? reviews : generateDefaultReviews(locationName)
  const faqData = faqs && faqs.length > 0 ? faqs : generateDefaultFAQs(locationName, faqDistance || distance || 'nearby')
  const serviceData = services || []
  const featureChips = specialFeatures && specialFeatures.length > 0 ? specialFeatures : undefined

  const resolvedCtaTitle =
    ctaTitle || `Book an Appointment with the Best Dentist in ${locationName}`
  const resolvedCtaDescription =
    ctaDescription ||
    `Secure your visit at ${clinicName || 'Indira Dental Clinic'} today. Our coordinators will help you select the ideal slot and explain current offers for patients from ${locationName}.`

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto max-w-7xl px-4 py-8">
        <Breadcrumb items={breadcrumbItems} />

        <LocationHeader
          locationName={locationName}
          taluk={talukName}
          pincode={pincode}
          distance={distance}
          category={category}
          specialFeatures={featureChips}
          stateName={stateName}
          clinicName={clinicName}
          tagline={tagline}
          introParagraph={introParagraph}
          whyChoose={whyChoose}
          dentists={dentists}
          leadCtaTitle={ctaTitle}
          leadCtaDescription={ctaDescription}
        />

        <div className="mb-12">
          <GoogleMapEmbed
            locationName={locationName}
            address={mapAddress}
            landmark={landmark}
          />
        </div>

        <div className="mb-12">
          <EnhancedServicesList locationName={locationName} services={serviceData} />
        </div>

        <div className="mb-12">
          <LocationReviews locationName={locationName} reviews={reviewData} />
        </div>

        <div className="mb-12">
          <LocationFAQs locationName={locationName} faqs={faqData} distance={faqDistance || distance} />
        </div>

        {nearbyLocations && nearbyLocations.length > 0 && (
          <section className="mb-12 rounded-2xl bg-white p-8 shadow-sm" id="nearby-areas">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nearby Areas We Serve</h2>
            <p className="text-gray-600 mb-4">
              Patients from neighbouring towns choose {clinicName || 'Indira Dental Clinic'} for dependable, technology-led
              dentistry. Explore more localised pages below:
            </p>
            <div className="flex flex-wrap gap-3">
              {nearbyLocations.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-full border border-teal-200 px-4 py-2 text-sm font-semibold text-teal-600 transition-colors hover:border-teal-500 hover:text-teal-700"
                >
                  {item.title}
                </a>
              ))}
            </div>
          </section>
        )}

        <section className="mb-12" id="book-appointment">
          <CTAWidget
            title={resolvedCtaTitle}
            description={resolvedCtaDescription}
            primaryAction={{ text: 'Book Consultation', href: '/contact' }}
            secondaryAction={{ text: 'Call 7010 650 063', href: 'tel:+917010650063' }}
            primaryIcon="calendar"
            secondaryIcon="phone"
            showRating
            showAvailability
          />
        </section>

        <div className="mb-12">
          <PeopleAlsoSearchFor location={locationName} city={cityNameResolved} />
        </div>
      </div>
    </div>
  )
}

