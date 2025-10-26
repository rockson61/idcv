import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Terms of Service | Indira Dental Clinic Vellore',
  description: 'Read our terms of service and conditions for using Indira Dental Clinic services.',
}

export default function TermsOfServicePage() {
  redirect('/terms')
}
