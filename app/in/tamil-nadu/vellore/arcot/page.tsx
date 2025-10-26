import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in arcot, Vellore | Indira Dental Clinic',
  description: 'Best dentist near arcot, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function arcotPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
