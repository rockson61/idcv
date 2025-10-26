import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dental Crowns | Redirecting...',
}

// Redirect to prosthodontics dental crowns page
export default function DentalCrownsRedirect() {
  redirect('/services/prosthodontics/dental-crowns')
}

