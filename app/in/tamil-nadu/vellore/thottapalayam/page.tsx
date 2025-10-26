import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in thottapalayam, Vellore | Indira Dental Clinic',
  description: 'Best dentist near thottapalayam, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function thottapalayamPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
