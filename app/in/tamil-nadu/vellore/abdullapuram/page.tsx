import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in audullapuram, Vellore | Indira Dental Clinic',
  description: 'Best dentist near audullapuram, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function audullapuramPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
