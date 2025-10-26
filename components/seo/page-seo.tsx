import type { Metadata } from "next"
import { SchemaMarkup } from "@/components/SchemaMarkup"
import { FaqSchema } from "@/components/schema/faq-schema"
import { ServiceSchema } from "@/components/schema/service-schema"

interface PageSEOProps {
  title: string
  description: string
  pagePath: string
  type?: "service" | "location" | "blog" | "general"
  keywords?: string[]
  imageUrl?: string
  publishedDate?: string
  modifiedDate?: string
  serviceName?: string
  servicePrice?: string
  locationName?: string
  faqItems?: Array<{ question: string; answer: string }>
}

export function PageSEO({
  title,
  description,
  pagePath,
  type = "general",
  keywords,
  imageUrl = "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
  publishedDate,
  modifiedDate,
  serviceName,
  servicePrice,
  locationName,
  faqItems,
}: PageSEOProps) {
  const baseUrl = "https://www.dentalclinicinvellore.in"
  const fullUrl = `${baseUrl}${pagePath}`

  return (
    <>
      <SchemaMarkup
        pageTitle={title}
        pageDescription={description}
        pagePath={pagePath}
        pageType={type === "blog" ? "Article" : "WebPage"}
        hasFaq={!!faqItems && faqItems.length > 0}
        faqItems={faqItems}
      />

      {faqItems && faqItems.length > 0 && <FaqSchema faqItems={faqItems} />}

      {type === "service" && serviceName && (
        <ServiceSchema
          serviceName={serviceName}
          description={description}
          url={fullUrl}
          imageUrl={imageUrl}
          price={servicePrice}
          areaServed={locationName || "Vellore, Tamil Nadu"}
        />
      )}
    </>
  )
}

export function generatePageMetadata({
  title,
  description,
  pagePath,
  type = "general",
  keywords = [],
  imageUrl = "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
  publishedDate,
  modifiedDate,
  locationName,
}: PageSEOProps): Metadata {
  const baseUrl = "https://www.dentalclinicinvellore.in"
  const fullUrl = `${baseUrl}${pagePath}`

  // Default keywords for all pages
  const defaultKeywords = ["dentist vellore", "dental clinic vellore", "Dr Rockson Samuel", "dental care vellore"]

  // Combine default and page-specific keywords
  const allKeywords = [...defaultKeywords, ...keywords]

  return {
    title,
    description,
    keywords: allKeywords.join(", "),
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Indira Dental Clinic | Dr Rockson Samuel",
      locale: "en_IN",
      type: type === "blog" ? "article" : "website",
      ...(publishedDate &&
        type === "blog" && {
          publishedTime: publishedDate,
          modifiedTime: modifiedDate || publishedDate,
          authors: ["Dr. Rockson Samuel"],
        }),
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
      title,
      description,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
    other: {
      "geo.region": locationName ? `IN-TN` : "IN-TN",
      "geo.placename": locationName || "Vellore",
    },
  }
}
