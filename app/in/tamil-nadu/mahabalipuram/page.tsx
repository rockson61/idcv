import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in Mahabalipuram, Tamil Nadu | Indira Dental Clinic',
  description: 'Dental services for Mahabalipuram patients. Visit Indira Dental Clinic.',
}

export default function MahabalipuramPage() {
  redirect('/in/tamil-nadu/chennai')
}
