import { Breadcrumb } from '@/components/breadcrumb'
import { LocationHeader } from '@/components/location/LocationHeader'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { EnhancedServicesList } from '@/components/location/EnhancedServicesList'
import { LocationReviews } from '@/components/location/LocationReviews'
import { LocationFAQs } from '@/components/LocationFAQs'
import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Best Dentist in Assam, Assam | Indira Dental Clinic',
  description: 'Top-rated dental care for Assam, Assam. Save on treatments at Indira Dental Clinic, Vellore.',
}

const locationName = 'Assam'
const city = 'Assam'
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
            { title: 'Assam', href: '/in/assam' },
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
