import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Periodontitis | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on periodontitis by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'periodontitis, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Periodontitis" />
}
