import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'
import { LocationFAQs } from '@/components/LocationFAQs'
import { LocationReviews } from '@/components/location/LocationReviews'
import { EnhancedServicesList } from '@/components/location/EnhancedServicesList'
import { GoogleMapEmbed } from '@/components/location/GoogleMapEmbed'
import { LocationHeader } from '@/components/location/LocationHeader'
import { Breadcrumb } from '@/components/breadcrumb'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { generateDefaultFAQs } from '@/components/LocationFAQs'

export const metadata: Metadata = {
  title: 'Dentist in Arcot, Tamil Nadu | Indira Dental Clinic Vellore',
  description: 'Best dentist near Arcot. Visit Indira Dental Clinic in nearby Vellore (20 km). Dr. Rockson Samuel.',
}

export default function ArcotPage() {
  redirect('/in/tamil-nadu/vellore')
}
