import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in Thorapadi, Vellore | Indira Dental Clinic',
  description: 'Best dentist in Thorapadi, Vellore. Dr. Rockson Samuel - Dental implants, RCT, braces.',
}

export default function ThorapadiPage() {
  redirect('/in/tamil-nadu/vellore')
}

