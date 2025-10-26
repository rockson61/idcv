export function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Indira Dental Clinic",
    image: "https://indiradentalclinic.com/logo.png",
    url: "https://indiradentalclinic.com",
    telephone: "7010650063",
    email: "rockson68@hotmail.com",
    description: "Top Dentist in Vellore for RCT, Braces, Implants, & Dental Fillings",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar",
      addressLocality: "Vellore",
      addressRegion: "Tamil Nadu",
      postalCode: "632006",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 12.9165757,
      longitude: 79.1324531,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "10:00",
        closes: "13:30",
      },
    ],
    sameAs: [
      "https://www.facebook.com/indiradentalclinic",
      "https://www.instagram.com/indiradentalclinic",
      "https://twitter.com/indiradentalclinic",
    ],
    priceRange: "₹₹",
    servesCuisine: "Dental Services",
    founder: {
      "@type": "Person",
      name: "Dr. Rockson Samuel",
      jobTitle: "General Dentist",
    },
    medicalSpecialty: ["Root Canal Treatment", "Dental Implants", "Braces", "Dental Fillings"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
