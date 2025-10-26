import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in r n palayam, Vellore | Indira Dental Clinic',
  description: 'Best dentist near r n palayam, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function RNPalayamPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
