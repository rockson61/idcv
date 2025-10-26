interface ServiceSchemaProps {
  serviceName: string
  description: string
  price: string
  duration: string
  url: string
  imageUrl?: string
  category?: string
}

export function ServiceSchema({
  serviceName,
  description,
  price,
  duration,
  url,
  imageUrl,
  category = "Dental",
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalProcedure",
    name: serviceName,
    description: description,
    procedureType: category,
    provider: {
      "@type": "Dentist",
      name: "Dr. Rockson Samuel",
      address: {
        "@type": "PostalAddress",
        streetAddress: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar",
        addressLocality: "Vellore",
        addressRegion: "Tamil Nadu",
        postalCode: "632006",
        addressCountry: "IN",
      },
      telephone: "+91-7010650063",
      email: "rockson68@hotmail.com",
    },
    offers: {
      "@type": "Offer",
      price: price,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: url,
    },
    duration: duration,
    url: `https://www.dentalclinicinvellore.in${url}`,
    ...(imageUrl && { image: `https://www.dentalclinicinvellore.in${imageUrl}` }),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
