import Script from "next/script"

interface SchemaMarkupProps {
  pageTitle?: string
  pageDescription?: string
  pagePath: string
  pageType?: string
  hasFaq?: boolean
  faqItems?: Array<{ question: string; answer: string }>
}

export function SchemaMarkup({
  pageTitle = "Indira Dental Clinic | Dr Rockson Samuel | Top Dentist in Vellore for RCT, Braces, Implants, & Dental Fillings",
  pageDescription,
  pagePath,
  pageType = "WebPage",
  hasFaq = false,
  faqItems = [],
}: SchemaMarkupProps) {
  // Base URL for the website
  const baseUrl = "https://www.dentalclinicinvellore.in"
  const fullUrl = `${baseUrl}${pagePath}`

  // Main business schema
  const businessSchema = {
    "@context": "https://schema.org",
    "@id": "https://www.dentalclinicinvellore.in",
    "@type": "LocalBusiness",
    address: {
      "@type": "PostalAddress",
      addressCountry: "IN",
      addressLocality: "Vellore",
      addressRegion: "IN",
      postalCode: "632006",
      streetAddress: "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      bestRating: "5",
      ratingCount: "64",
      ratingValue: "5.0",
    },
    description:
      "Indira Dental Clinic, led by the top dentist Dr. Rockson Samuel in Vellore, Tamil Nadu, offers comprehensive dental care tailored to meet all your oral health needs. Specializing in Root Canal Treatment (RCT), braces for teeth alignment, high-quality dental implants, and precise dental fillings, our clinic is dedicated to providing exceptional dentistry services. We use state-of-the-art technology and advanced techniques in a comfortable and welcoming environment. Whether you seek preventive care or cosmetic enhancements, Indira Dental Clinic ensures personalized attention and effective, high-standard treatments. Visit us for all your dental care needs in Vellore today and smile with confidence!",
    hasMap: "https://maps.google.com/maps?cid=14385819900995297414",
    image:
      "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
    makesOffer: [
      {
        "@type": "Offer",
        name: "Dental clinic",
      },
      {
        "@type": "Offer",
        name: "Dentist",
      },
      {
        "@type": "Offer",
        name: "Endodontist",
      },
      {
        "@type": "Offer",
        name: "Cosmetic dentist",
      },
      {
        "@type": "Offer",
        name: "Dental radiology",
      },
      {
        "@type": "Offer",
        name: "Paediatric Dentist",
      },
      {
        "@type": "Offer",
        name: "Denture Care Centre",
      },
      {
        "@type": "Offer",
        name: "Dental implants provider",
      },
      {
        "@type": "Offer",
        name: "Emergency dental service",
      },
    ],
    name: "Indira Dental Clinic | Dr Rockson Samuel | Top Dentist in Vellore for RCT, Braces, Implants, & Dental Fillings",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        closes: "13:30:00",
        dayOfWeek: "SUNDAY",
        opens: "10:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "MONDAY",
        opens: "10:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "TUESDAY",
        opens: "10:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "WEDNESDAY",
        opens: "10:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "THURSDAY",
        opens: "10:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "FRIDAY",
        opens: "10:00:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        closes: "20:00:00",
        dayOfWeek: "SATURDAY",
        opens: "10:00:00",
      },
    ],
    sameAs: [
      "https://velloredental.com/",
      "https://vellore24.com/business/indira-dental-clinic-dr-rockson-samuel-top-dentist-in-vellore-for-rct-braces-implants-dental-fillings/",
      "https://velloredental.com/services/teeth-replacement/dental-implant/",
      "https://in.pinterest.com/indradentalclinic/",
      "https://www.provenexpert.com/en-us/smile-happy-dental/",
      "https://mydentalimplant.in/top-10-best-dentists-in-india-trusted-dental-clinics/",
      "https://www.linkcentre.com/in/health/dentists/dental-care/22/",
      "https://www.justdial.com/Vellore/Dr-Rockson-Samuel-Near-Green-Circle-Thottapalayam/9999PX416-X416-240129151733-B2V8_BZDET",
      "https://www.justdial.com/Vellore/Indira-Dental-Clinic-Dr-Rockson-Samuel-Rct-Braces-Implants-Dental-Fillings-Near-Shell-Petrol-Pump-Katpadi-Vellore/9999PX416-X416-240129151733-B2V8_BZDET/amp",
      "https://www.instagram.com/indiradentalvellore/",
      "https://www.freelistingindia.in/listings/indira-dental-clinic-best-dental-clinic-in-vellore",
      "https://www.facilityaxs.net/tamil-nadu/vellore/professional-services/smile-happy-dental",
      "https://www.einpresswire.com/article/704899084/affordable-dental-care-comes-to-vellore-with-the-launch-of-indira-dental-clinic-by-dentist-in-vellore-dr-rockson-samuel",
      "https://dentalreach.today/the-top-10-influencers-of-dentistry/",
      "https://citypages.pro/local-business/india/tamil-nadu/vellore/632004/smile-happy-dental",
      "https://bizidex.com/en/smile-happy-dental-dentists-364891",
      "https://www.b2bco.com/velloredental",
      "https://www.360kovai.com/Indira-Dental-Clinic/",
      "https://www.facebook.com/indiradentalclinicvellore/",
    ],
    telephone: "+91 70106 50063",
    url: "https://www.dentalclinicinvellore.in",
  }

  // Create the schema object for the current page
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      // Main business schema
      businessSchema,

      // WebPage schema
      {
        "@type": pageType,
        "@id": `${fullUrl}#webpage`,
        url: fullUrl,
        name: pageTitle,
        description: pageDescription || businessSchema.description,
        isPartOf: {
          "@id": `${baseUrl}/#website`,
        },
        inLanguage: "en-US",
        datePublished: "2023-01-01T00:00:00+00:00",
        dateModified: new Date().toISOString(),
      },

      // Website schema
      {
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        url: baseUrl,
        name: "Indira Dental Clinic",
        description: "Expert Dental Care in Vellore",
        publisher: {
          "@id": "https://www.dentalclinicinvellore.in",
        },
        inLanguage: "en-US",
      },

      // Dentist schema (as a professional service)
      {
        "@type": "Dentist",
        "@id": `${fullUrl}#dentist`,
        name: "Dr. Rockson Samuel",
        image:
          "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
        description:
          "Dr. Rockson Samuel is a highly experienced dentist in Vellore, specializing in root canal treatment, dental implants, and orthodontics.",
        medicalSpecialty: ["General Dentistry", "Endodontics", "Implantology", "Orthodontics", "Cosmetic Dentistry"],
        qualification: "BDS",
        worksFor: {
          "@id": "https://www.dentalclinicinvellore.in",
        },
      },
    ],
  }

  // Add FAQ schema if the page has FAQs
  if (hasFaq && faqItems.length > 0) {
    schema["@graph"].push({
      "@type": "FAQPage",
      "@id": `${fullUrl}#faqpage`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    })
  }

  return (
    <Script
      id="schema-script"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
