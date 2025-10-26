import Head from "next/head"

interface SEOMetadataProps {
  title: string
  description: string
  canonicalUrl: string
  ogImage?: string
  location?: string
  service?: string
  keywords?: string
}

export function SEOMetadata({
  title,
  description,
  canonicalUrl,
  ogImage,
  location,
  service,
  keywords,
}: SEOMetadataProps) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {location && <meta name="geo.region" content={`IN-${location}`} />}
      {location && <meta name="geo.placename" content={location} />}
      {service && <meta name="keywords" content={keywords || service} />}
    </Head>
  )
}

// Export both versions to ensure compatibility
export const SeoMetadata = SEOMetadata
