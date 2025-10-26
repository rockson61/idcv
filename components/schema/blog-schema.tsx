import Script from "next/script"

interface BlogSchemaProps {
  title: string
  description: string
  url: string
  imageUrl: string
  datePublished: string
  dateModified?: string
  authorName?: string
}

export function BlogSchema({
  title,
  description,
  url,
  imageUrl,
  datePublished,
  dateModified = datePublished,
  authorName = "Dr. Rockson Samuel",
}: BlogSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: datePublished,
    dateModified: dateModified,
    author: {
      "@type": "Person",
      name: authorName,
      url: "https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel",
    },
    publisher: {
      "@type": "Organization",
      name: "Indira Dental Clinic",
      logo: {
        "@type": "ImageObject",
        url: "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
      },
    },
  }

  return (
    <Script id="blog-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  )
}
