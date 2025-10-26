export function DentalTourismSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Indira Dental Clinic - Dental Tourism",
    url: "https://indiradental.com/dental-tourism",
    telephone: "+917010650063",
    email: "rockson68@hotmail.com",
    description:
      "Experience world-class dental care at up to 80% less cost with our dental tourism packages in Vellore, India. Combine quality dental treatment with exploring India's rich cultural heritage.",
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
      latitude: "12.9716",
      longitude: "79.1455",
    },
    medicalSpecialty: ["Dental Implants", "Cosmetic Dentistry", "Root Canal Treatment", "Full Mouth Rehabilitation"],
    priceRange: "₹₹",
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
    offers: [
      {
        "@type": "Offer",
        name: "Basic Dental Tourism Package",
        description:
          "Comprehensive dental examination, digital X-rays, professional cleaning, basic fillings, and airport transfers",
        price: "15000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        name: "Smile Makeover Package",
        description:
          "Comprehensive dental examination, digital X-rays, professional cleaning, teeth whitening, porcelain veneers, accommodation, and sightseeing",
        price: "75000",
        priceCurrency: "INR",
      },
      {
        "@type": "Offer",
        name: "Full Mouth Rehabilitation Package",
        description:
          "Comprehensive dental examination, digital X-rays, 3D scans, dental implants, full mouth restoration, accommodation, and sightseeing",
        price: "150000",
        priceCurrency: "INR",
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
