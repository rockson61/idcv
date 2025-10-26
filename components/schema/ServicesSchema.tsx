export function ServicesSchema() {
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: "Indira Dental Clinic",
    url: "https://indiradentalclinic.com",
    logo: "https://indiradentalclinic.com/logo.png",
    address: {
      "@type": "PostalAddress",
      streetAddress: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar",
      addressLocality: "Vellore",
      addressRegion: "Tamil Nadu",
      postalCode: "632006",
      addressCountry: "IN",
    },
    telephone: "+917010650063",
    email: "rockson68@hotmail.com",
    medicalSpecialty: "Dentistry",
    availableService: [
      {
        "@type": "MedicalProcedure",
        name: "Root Canal Treatment",
        description: "Modern root canal procedures to save infected teeth and relieve pain.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dental Implants",
        description: "Permanent tooth replacement solutions that look and function like natural teeth.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Orthodontic Treatment",
        description: "Braces and clear aligners to straighten teeth and correct bite issues.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Teeth Whitening",
        description: "Professional whitening treatments for a brighter, more confident smile.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Dental Crowns",
        description: "Custom-made caps that restore damaged teeth to their normal shape and function.",
      },
      {
        "@type": "MedicalProcedure",
        name: "Preventive Dentistry",
        description: "Regular check-ups, cleanings, and preventive treatments to maintain oral health.",
      },
    ],
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
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }} />
}
