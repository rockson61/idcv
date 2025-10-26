import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in Arcot, Tamil Nadu | Indira Dental Clinic Vellore',
  description: 'Best dentist near Arcot. Visit Indira Dental Clinic in nearby Vellore (20 km). Dr. Rockson Samuel.',
}

export default function ArcotPage() {
  redirect('/in/tamil-nadu/vellore')
}
