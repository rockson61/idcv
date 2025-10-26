import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in konavattam, Vellore | Indira Dental Clinic',
  description: 'Best dentist near konavattam, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function konavattamPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
