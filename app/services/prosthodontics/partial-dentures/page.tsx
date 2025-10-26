import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Partial Dentures | Removable False Teeth | Indira Dental Clinic Vellore',
  description: 'Partial dentures in Vellore. Replace multiple missing teeth with comfortable, natural-looking partial dentures. Dr. Rockson Samuel.',
}

export default function PartialDenturesPage() {
  redirect('/services/prosthodontics/dentures')
}

