import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Oral Surgeries | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on oral surgeries by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'oral surgeries, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Oral Surgeries" />
}
