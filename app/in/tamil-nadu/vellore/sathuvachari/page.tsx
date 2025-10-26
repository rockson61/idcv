import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in Sathuvachari, Vellore | Indira Dental Clinic',
  description: 'Best dentist in Sathuvachari, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function SathuvachariPage() {
  redirect('/in/tamil-nadu/vellore')
}

