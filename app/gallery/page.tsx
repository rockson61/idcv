import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Gallery | Before & After | Indira Dental Clinic Vellore',
  description: 'View our dental treatment gallery, before and after photos, clinic images.',
}

export default function GalleryPage() {
  redirect('/testimonials')
}
