import { ContentGenerator } from "@/components/content-generator"

export const metadata = {
  title: "Content Generator | Indira Dental Clinic",
  description: "Generate SEO-optimized content for dental services and dental tourism",
}

export default function ContentGeneratorPage() {
  return (
    <div className="container mx-auto py-8">
      <ContentGenerator />
    </div>
  )
}
