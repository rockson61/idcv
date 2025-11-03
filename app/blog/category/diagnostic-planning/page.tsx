import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Diagnostic Planning | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on diagnostic planning by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'diagnostic planning, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Diagnostic Planning" />
}
