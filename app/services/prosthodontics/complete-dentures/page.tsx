import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Complete Dentures | Full Set False Teeth | Indira Dental Clinic Vellore',
  description: 'Complete dentures (full set) in Vellore. Natural-looking false teeth for total tooth loss. Dr. Rockson Samuel prosthodontist.',
}

export default function CompleteDenturesPage() {
  redirect('/services/prosthodontics/dentures')
}

