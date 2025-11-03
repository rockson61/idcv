import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Wisdom Teeth | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on wisdom teeth by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'wisdom teeth, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Wisdom Teeth" />
}
