import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Tooth Pain Sensitivity | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on tooth pain sensitivity by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'tooth pain sensitivity, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Tooth Pain Sensitivity" />
}
