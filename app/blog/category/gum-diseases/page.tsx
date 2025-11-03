import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Gum Diseases | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on gum diseases by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'gum diseases, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Gum Diseases" />
}
