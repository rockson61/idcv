import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dental FAQs | Common Questions | Indira Dental Clinic Vellore',
  description: 'Frequently asked questions about dental treatments, services, pricing at Indira Dental Clinic.',
}

export default function FAQsPage() {
  redirect('/faq')
}

