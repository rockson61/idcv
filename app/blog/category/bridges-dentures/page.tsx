import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Bridges Dentures | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on bridges dentures by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'bridges dentures, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Bridges Dentures" />
}
