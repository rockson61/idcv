import { Breadcrumb } from '@/components/breadcrumb'
import { LocationHeader } from '@/components/location/LocationHeader'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { EnhancedServicesList } from '@/components/location/EnhancedServicesList'
import { LocationReviews } from '@/components/location/LocationReviews'
import { LocationFAQs } from '@/components/location/LocationFAQs'
import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'
import type { Metadata } from 'next'

// Disable static generation so client components render with hooks at runtime
export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Best Dentist in Karnavur, Tamil Nadu | Indira Dental Clinic',
  description: 'Top-rated dental care for Karnavur, Tamil Nadu. Save on treatments at Indira Dental Clinic, Vellore.',
}

const locationName = 'Karnavur'
const city = 'Vellore'
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
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: 'Vellore', href: '/in/tamil-nadu/vellore' },
            { title: 'Karnavur', href: '/in/tamil-nadu/vellore/karnavur' },
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
