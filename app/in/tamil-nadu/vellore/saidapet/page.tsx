import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in saidapet, Vellore | Indira Dental Clinic',
  description: 'Best dentist near saidapet, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function saidapetPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
