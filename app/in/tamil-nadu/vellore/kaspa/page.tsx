import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in Kaspa, Vellore | Indira Dental Clinic',
  description: 'Best dentist in Kaspa, Vellore. Dr. Rockson Samuel - Pediatric dentistry, orthodontics.',
}

export default function KaspaPage() {
  redirect('/in/tamil-nadu/vellore')
}

