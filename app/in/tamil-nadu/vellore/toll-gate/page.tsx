import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in toll gate, Vellore | Indira Dental Clinic',
  description: 'Best dentist near toll gate, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function TollGatePage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
