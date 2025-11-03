import type { Metadata } from "next"
import { BlogCategoryLanding } from "@/components/blog/CategoryLanding"

export const metadata: Metadata = {
  title: 'Orthodontics Alignment | Dental Health Blog | Indira Dental Clinic',
  description: 'Expert articles on orthodontics alignment by Dr. Rockson Samuel. Learn about dental health, treatments, and prevention strategies.',
  keywords: 'orthodontics alignment, dental blog, oral health, vellore dentist',
}

export default function Page() {
  return <BlogCategoryLanding title="Orthodontics Alignment" />
}
