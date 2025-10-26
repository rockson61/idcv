import type { Metadata } from "next"
import { BlogSchema } from "@/components/schema/blog-schema"

interface BlogSEOProps {
  title: string
  description: string
  slug: string
  imageUrl?: string
  publishedDate: string
  modifiedDate?: string
  authorName?: string
  keywords?: string[]
}

export function BlogSEO({
  title,
  description,
  slug,
  imageUrl = "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
  publishedDate,
  modifiedDate,
  authorName = "Dr. Rockson Samuel",
}: BlogSEOProps) {
  const baseUrl = "https://www.dentalclinicinvellore.in"
  const fullUrl = `${baseUrl}/blog/${slug}`

  return (
    <BlogSchema
      title={title}
      description={description}
      url={fullUrl}
      imageUrl={imageUrl}
      datePublished={publishedDate}
      dateModified={modifiedDate || publishedDate}
      authorName={authorName}
    />
  )
}

export function generateBlogMetadata({
  title,
  description,
  slug,
  imageUrl = "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
  publishedDate,
  modifiedDate,
  keywords = [],
}: BlogSEOProps): Metadata {
  const baseUrl = "https://www.dentalclinicinvellore.in"
  const fullUrl = `${baseUrl}/blog/${slug}`

  // Default blog keywords
  const defaultKeywords = ["dental blog", "dental health", "oral health tips", "dentist vellore blog"]

  // Combine default and blog-specific keywords
  const allKeywords = [...defaultKeywords, ...keywords]

  return {
    title: `${title} | Indira Dental Clinic Blog`,
    description,
    keywords: allKeywords.join(", "),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title: `${title} | Indira Dental Clinic Blog`,
      description,
      url: fullUrl,
      siteName: "Indira Dental Clinic | Dr Rockson Samuel",
      locale: "en_IN",
      type: "article",
      publishedTime: publishedDate,
      modifiedTime: modifiedDate || publishedDate,
      authors: ["Dr. Rockson Samuel"],
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Indira Dental Clinic Blog`,
      description,
      images: [imageUrl],
    },
  }
}
