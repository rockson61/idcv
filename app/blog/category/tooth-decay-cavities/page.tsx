import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Tooth Decay Cavities | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on tooth decay cavities by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'tooth decay cavities, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Tooth Decay Cavities" />
}
