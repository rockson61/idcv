import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in dharapadavedu, Vellore | Indira Dental Clinic',
  description: 'Best dentist near dharapadavedu, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function dharapadaveduPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
