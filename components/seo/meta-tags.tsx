import type { Metadata } from "next/types"
import { SchemaMarkup } from "@/components/SchemaMarkup"

interface MetaTagsProps {
  title?: string
  description?: string
  keywords?: string[]
  ogImage?: string
  ogType?: string
  canonicalUrl?: string
  pagePath: string
  publishedTime?: string
  modifiedTime?: string
  hasFaq?: boolean
  faqItems?: Array<{ question: string; answer: string }>
  location?: string
  service?: string
}

export function generateMetadata({
  title = "Indira Dental Clinic | Dr Rockson Samuel | Top Dentist in Vellore for RCT, Braces, Implants, & Dental Fillings",
  description = "Indira Dental Clinic, led by the top dentist Dr. Rockson Samuel in Vellore, Tamil Nadu, offers comprehensive dental care tailored to meet all your oral health needs.",
  keywords = [
    "dentist vellore",
    "dental clinic vellore",
    "Dr Rockson Samuel",
    "RCT",
    "dental implants",
    "braces",
    "dental fillings",
    "dental tourism india",
  ],
  ogImage = "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
  ogType = "website",
  canonicalUrl,
  pagePath,
  publishedTime,
  modifiedTime,
  location,
  service,
}: MetaTagsProps): Metadata {
  // Base URL for the website
  const baseUrl = "https://www.dentalclinicinvellore.in"
  const fullUrl = canonicalUrl || (pagePath ? `${baseUrl}${pagePath}` : baseUrl)

  // Format keywords for metadata
  const keywordsString = Array.isArray(keywords) ? keywords.join(", ") : keywords

  return {
    title,
    description,
    keywords: keywordsString,
    metadataBase: new URL(baseUrl),
    alternates: {
      canonical: fullUrl,
    },
    robots: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
      googleBot: "index, follow",
    },
    openGraph: {
      title,
      description,
      url: fullUrl,
      siteName: "Indira Dental Clinic | Dr Rockson Samuel",
      locale: "en_IN",
      type: ogType,
      ...(publishedTime && {
        publishedTime,
        modifiedTime: modifiedTime || publishedTime,
        authors: ["Dr. Rockson Samuel"],
      }),
      images: [
        {
          url: ogImage,
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
      images: [ogImage],
    },
    verification: {
      google: "YOUR_GOOGLE_VERIFICATION_ID", // Replace with your verification ID
    },
    other: {
      "geo.region": location ? `IN-${location}` : "IN-TN",
      "geo.placename": location || "Vellore",
    },
  }
}

export function MetaTags(props: MetaTagsProps) {
  return (
    <>
      <SchemaMarkup
        pageTitle={props.title}
        pageDescription={props.description}
        pagePath={props.pagePath}
        pageType={props.ogType === "article" ? "Article" : "WebPage"}
        hasFaq={props.hasFaq}
        faqItems={props.faqItems}
      />
    </>
  )
}
