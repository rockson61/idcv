import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in kosapet, Vellore | Indira Dental Clinic',
  description: 'Best dentist near kosapet, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function kosapetPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
