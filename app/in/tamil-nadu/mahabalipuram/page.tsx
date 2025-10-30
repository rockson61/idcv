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
  title: 'Dentist in Mahabalipuram, Tamil Nadu | Indira Dental Clinic',
  description: 'Dental services for Mahabalipuram patients. Visit Indira Dental Clinic.',
}

export default function MahabalipuramPage() {
  redirect('/in/tamil-nadu/chennai')
}
