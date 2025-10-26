import Script from "next/script"

interface ServiceSchemaProps {
  serviceName: string
  description: string
  url: string
  imageUrl?: string
  provider?: string
  areaServed?: string
  price?: string
  priceCurrency?: string
}

export function ServiceSchema({
  serviceName,
  description,
  url,
  imageUrl,
  provider = "Indira Dental Clinic",
  areaServed = "Vellore, Tamil Nadu",
  price,
  priceCurrency = "INR",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description: description,
    provider: {
      "@type": "MedicalOrganization",
      name: provider,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Vellore",
        addressRegion: "Tamil Nadu",
        postalCode: "632006",
        streetAddress: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar",
        addressCountry: "IN",
      },
    },
    areaServed,
    url,
    ...(imageUrl && { image: imageUrl }),
    ...(price && {
      offers: {
        "@type": "Offer",
        price,
        priceCurrency,
      },
    }),
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
