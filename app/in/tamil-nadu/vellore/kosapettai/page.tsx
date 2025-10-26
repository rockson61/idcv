import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in kosapettai, Vellore | Indira Dental Clinic',
  description: 'Best dentist near kosapettai, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function kosapettaiPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
