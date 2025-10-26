import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in amuur, Vellore | Indira Dental Clinic',
  description: 'Best dentist near amuur, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function amuurPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
