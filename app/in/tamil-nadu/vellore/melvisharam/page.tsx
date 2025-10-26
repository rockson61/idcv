import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in melvisharam, Vellore | Indira Dental Clinic',
  description: 'Best dentist near melvisharam, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function melvisharamPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
