import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Oral Hygiene Maintenance | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on oral hygiene maintenance by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'oral hygiene maintenance, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Oral Hygiene Maintenance" />
}
