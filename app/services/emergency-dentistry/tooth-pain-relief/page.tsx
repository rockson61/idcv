import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Emergency Tooth Pain Relief | 24/7 Dental Pain | Indira Dental Clinic Vellore',
  description: 'Immediate tooth pain relief in Vellore. 24/7 emergency dental care for severe toothache. Dr. Rockson Samuel.',
}

export default function ToothPainReliefPage() {
  redirect('/services/emergency-dentistry')
}

