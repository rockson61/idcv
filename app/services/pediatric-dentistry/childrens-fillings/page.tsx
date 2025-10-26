import { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: "Children's Fillings | Pediatric Dentistry | Indira Dental Clinic",
  description: "Cavity fillings for children in Vellore. Gentle, painless treatment by pediatric dentist Dr. Rockson Samuel.",
}

export default function ChildrensFillings() {
  redirect('/services/pediatric-dentistry')
}

