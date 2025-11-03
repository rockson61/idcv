import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Cosmetic Dentistry | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on cosmetic dentistry by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'cosmetic dentistry, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Cosmetic Dentistry" />
}
