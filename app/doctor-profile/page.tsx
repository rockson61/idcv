import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dr. Rockson Samuel | Expert Dentist in Vellore',
  description: 'Meet Dr. Rockson Samuel, Vellore\'s most trusted dentist with 15+ years experience.',
}

export default function DoctorProfilePage() {
  redirect('/about-us')
}
