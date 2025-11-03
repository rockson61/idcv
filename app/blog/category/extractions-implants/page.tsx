import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Extractions Implants | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on extractions implants by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'extractions implants, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Extractions Implants" />
}
