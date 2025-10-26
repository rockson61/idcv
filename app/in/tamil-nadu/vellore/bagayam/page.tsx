import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in Bagayam, Vellore | Indira Dental Clinic',
  description: 'Best dentist in Bagayam, Vellore. Dr. Rockson Samuel - Root canal, cosmetic dentistry.',
}

export default function BagayamPage() {
  redirect('/in/tamil-nadu/vellore')
}

