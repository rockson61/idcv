import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in otteri, Vellore | Indira Dental Clinic',
  description: 'Best dentist near otteri, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function otteriPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
