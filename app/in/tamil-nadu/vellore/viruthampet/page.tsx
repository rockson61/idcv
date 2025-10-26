import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in viruthampet, Vellore | Indira Dental Clinic',
  description: 'Best dentist near viruthampet, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function viruthampetPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
