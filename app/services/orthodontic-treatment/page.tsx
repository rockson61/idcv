import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Orthodontic Treatment | Redirecting...',
}

// Redirect to main orthodontics page
export default function OrthodonticTreatmentRedirect() {
  redirect('/services/orthodontics')
}

