import type { Metadata } from "next"
import BlogClient from "./BlogClient"

export const metadata: Metadata = {
  title: "Dental Health Blog | 430+ Expert Articles | Dr. Rockson Samuel",
  description:
    "Explore 430+ expert dental health articles covering all topics from root canals to cosmetic dentistry. Professional advice from Dr. Rockson Samuel, Vellore.",
  keywords: [
    "dental health blog",
    "oral care tips",
    "dental treatment guide",
    "teeth care advice",
    "dental health vellore",
    "Dr. Rockson Samuel blog",
  ],
}

export default function BlogPage() {
  return <BlogClient />
}
