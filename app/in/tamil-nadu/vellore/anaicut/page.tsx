import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in anaicut, Vellore | Indira Dental Clinic',
  description: 'Best dentist near anaicut, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function anaicutPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
