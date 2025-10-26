import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dental Insurance Coverage | Indira Dental Clinic Vellore',
  description: 'Learn about dental insurance coverage and payment options at Indira Dental Clinic.',
}

export default function InsurancePage() {
  redirect('/financing')
}
