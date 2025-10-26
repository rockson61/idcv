import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Our Team | Dentists | Indira Dental Clinic Vellore',
  description: 'Meet our team of dental professionals led by Dr. Rockson Samuel.',
}

export default function OurTeamPage() {
  redirect('/about-us/dr-rockson-samuel')
}

