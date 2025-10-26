import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in perumal nagar, Vellore | Indira Dental Clinic',
  description: 'Best dentist near perumal nagar, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function PerumalNagarPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
