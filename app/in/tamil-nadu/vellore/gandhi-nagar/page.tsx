import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in gandhi nagar, Vellore | Indira Dental Clinic',
  description: 'Best dentist near gandhi nagar, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function GandhiNagarPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
