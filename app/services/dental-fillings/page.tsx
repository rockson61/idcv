import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dental Fillings | Redirecting...',
}

// Redirect to restorative dentistry fillings page
export default function DentalFillingsRedirect() {
  redirect('/services/restorative-dentistry/dental-fillings')
}

