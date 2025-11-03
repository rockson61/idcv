import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Tooth Damage Trauma | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on tooth damage trauma by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'tooth damage trauma, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Tooth Damage Trauma" />
}
