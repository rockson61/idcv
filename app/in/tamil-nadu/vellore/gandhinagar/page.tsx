import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dentist in gandhinagar, Vellore | Indira Dental Clinic',
  description: 'Best dentist near gandhinagar, Vellore. Dr. Rockson Samuel - Complete dental care.',
}

export default function gandhinagarPage() {
  redirect('/in/tamil-nadu/vellore/gandhi')
}
