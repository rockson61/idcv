import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Tooth-Colored Fillings | Composite Fillings | Indira Dental Clinic Vellore',
  description: 'Tooth-colored composite fillings in Vellore. Natural-looking cavity fillings. Mercury-free. Dr. Rockson Samuel.',
}

export default function ToothColoredFillingsPage() {
  redirect('/services/restorative-dentistry/dental-fillings')
}

