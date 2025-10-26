import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in Katpadi, Vellore | Indira Dental Clinic',
  description: 'Best dentist in Katpadi, Vellore. Near Katpadi Junction. Dr. Rockson Samuel - RCT, implants, braces.',
}

export default function KatpadiPage() {
  redirect('/in/tamil-nadu/vellore')
}

