import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in shenuakkam, Vellore | Indira Dental Clinic',
  description: 'Best dentist near shenuakkam, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function shenuakkamPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
