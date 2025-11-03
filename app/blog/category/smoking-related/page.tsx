import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Smoking Related | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on smoking related by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'smoking related, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Smoking Related" />
}
