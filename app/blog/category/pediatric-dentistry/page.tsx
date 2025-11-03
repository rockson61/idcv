import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Pediatric Dentistry | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on pediatric dentistry by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'pediatric dentistry, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Pediatric Dentistry" />
}
