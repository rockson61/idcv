import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dental Trauma Emergency | Knocked Out Tooth | Indira Dental Clinic Vellore',
  description: 'Emergency dental trauma treatment in Vellore. Knocked out tooth, broken tooth, facial injury. 24/7 emergency care.',
}

export default function DentalTraumaPage() {
  redirect('/services/emergency-dentistry')
}

