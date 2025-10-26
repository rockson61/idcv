export function LocationsSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: "Indira Dental Clinic",
    image: "https://example.com/photos/indira-dental-clinic.jpg",
    url: "https://indiradental.com",
    telephone: "+917010650063",
    email: "rockson68@hotmail.com",
    description:
      "Indira Dental Clinic offers comprehensive dental care with Dr. Rockson Samuel, specializing in RCT, Braces, Implants, and Dental Fillings. We provide affordable dental tourism packages for international patients.",
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
    priceRange: "₹₹",
    sameAs: [
      "https://www.facebook.com/indiradental",
      "https://www.instagram.com/indiradental",
      "https://twitter.com/indiradental",
    ],
    areaServed: [
      {
        "@type": "City",
        name: "Vellore",
      },
      {
        "@type": "City",
        name: "Chennai",
      },
      {
        "@type": "State",
        name: "Tamil Nadu",
      },
      {
        "@type": "Country",
        name: "India",
      },
    ],
    medicalSpecialty: ["Root Canal Treatment", "Dental Implants", "Orthodontics", "Cosmetic Dentistry"],
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Dental Implants",
        description: "Permanent tooth replacement solutions with dental implants",
      },
      {
        "@type": "MedicalProcedure",
        name: "Root Canal Treatment",
        description: "Advanced endodontic procedures to save damaged teeth and eliminate pain",
      },
      {
        "@type": "MedicalProcedure",
        name: "Orthodontics",
        description: "Braces and aligners to correct misaligned teeth and improve smile aesthetics",
      },
      {
        "@type": "MedicalProcedure",
        name: "Cosmetic Dentistry",
        description: "Procedures to enhance the appearance of teeth including veneers and whitening",
      },
    ],
    specialty: ["General Dentistry", "Cosmetic Dentistry", "Dental Implants", "Orthodontics", "Endodontics"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
