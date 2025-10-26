// Comprehensive Schema Templates with Entity Linking
// Google Rich Results Compliant

import { ENTITY_IDS } from './schema-generator'

const BASE_URL = "https://www.dentalclinicinvellore.in"

// Enhanced Service/MedicalProcedure Schema Template
export function createServiceSchemaTemplate(data: {
  name: string
  url: string
  description: string
  image?: string
  procedureType?: string
  bodyPart?: string
  preparation?: string
  followup?: string
  howPerformed?: string
  expectedDuration?: string
  typicalCost?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalProcedure", "Service"],
    "@id": `${data.url}#service`,
    "url": data.url,
    "name": data.name,
    "alternateName": [data.name, `${data.name} in Vellore`, `${data.name} Vellore`],
    "description": data.description,
    "image": data.image || `${BASE_URL}/dental-checkup.png`,
    "provider": {
      "@id": ENTITY_IDS.organization
    },
    "performer": {
      "@id": ENTITY_IDS.dentist
    },
    "availableAt": {
      "@id": ENTITY_IDS.organization
    },
    "medicalSpecialty": "Dentistry",
    "procedureType": data.procedureType || "Dental Treatment",
    "bodyLocation": data.bodyPart || "Teeth and Gums",
    "preparation": data.preparation,
    "followup": data.followup,
    "howPerformed": data.howPerformed,
    "expectedDuration": data.expectedDuration,
    "additionalType": "https://schema.org/MedicalProcedure",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": data.typicalCost,
      "availability": "https://schema.org/InStock",
      "seller": {
        "@id": ENTITY_IDS.organization
      }
    },
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${BASE_URL}/contact`,
        "actionPlatform": [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform"
        ]
      }
    }
  }
}

// Enhanced MedicalCondition Schema Template
export function createConditionSchemaTemplate(data: {
  name: string
  url: string
  description: string
  symptoms?: string[]
  causes?: string[]
  riskFactors?: string[]
  treatments?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "@id": `${data.url}#condition`,
    "url": data.url,
    "name": data.name,
    "alternateName": [data.name, `${data.name} Treatment`, `${data.name} Causes`],
    "description": data.description,
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": "Teeth and Gums"
    },
    "signOrSymptom": data.symptoms?.map(s => ({
      "@type": "MedicalSymptom",
      "name": s
    })),
    "possibleCause": data.causes?.map(c => ({
      "@type": "MedicalCause",
      "name": c
    })),
    "riskFactor": data.riskFactors?.map(r => ({
      "@type": "MedicalRiskFactor",
      "name": r
    })),
    "possibleTreatment": data.treatments?.map(t => ({
      "@type": "MedicalTherapy",
      "name": t
    })),
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Dentistry"
    },
  }
}

// Enhanced Location Schema Template
export function createLocationSchemaTemplate(data: {
  name: string
  url: string
  description: string
  city: string
  state: string
  area?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "Place"],
    "@id": `${data.url}#location`,
    "url": data.url,
    "name": data.name,
    "description": data.description,
    "parentOrganization": {
      "@id": ENTITY_IDS.organization
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar",
      "addressLocality": data.city,
      "addressRegion": data.state,
      "postalCode": "632006",
      "addressCountry": "India"
    },
    "geo": {
      "@id": ENTITY_IDS.geocoordinates
    },
    "telephone": "+91 70106 50063",
    "email": "rockson68@hotmail.com",
    "areaServed": {
      "@type": "City",
      "name": data.city,
      "containedInPlace": {
        "@type": "State",
        "name": data.state,
        "containedInPlace": {
          "@type": "Country",
          "name": "India"
        }
      }
    },
    "hasMap": "https://maps.google.com/maps?cid=14385819900995297414",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "10:00",
        "closes": "13:30"
      }
    ],
    "priceRange": "₹₹",
    "aggregateRating": {
      "@id": ENTITY_IDS.aggregateRating
    },
    "sameAs": [
      "https://www.facebook.com/indiradentalclinicvellore/",
      "https://www.instagram.com/indiradentalvellore/"
    ]
  }
}

// QA Page Schema Template
export function createQASchemaTemplate(data: {
  question: string
  answer: string
  url: string
  title: string
  tags?: string[]
  datePublished?: string
  dateModified?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "@id": `${data.url}#qa`,
    "url": data.url,
    "name": data.title,
    "mainEntity": {
      "@type": "Question",
      "name": data.question,
      "text": data.question,
      "answerCount": 1,
      "upvoteCount": 0,
      "dateCreated": data.datePublished || new Date().toISOString(),
      "author": {
        "@type": "Person",
        "name": "Patient"
      },
      "acceptedAnswer": {
        "@type": "Answer",
        "text": data.answer,
        "dateCreated": data.datePublished || new Date().toISOString(),
        "author": {
          "@id": ENTITY_IDS.dentist
        },
        "upvoteCount": 0
      }
    },
    "isPartOf": {
      "@id": ENTITY_IDS.website
    },
    "about": {
      "@type": "Thing",
      "name": "Dental Health"
    },
    "keywords": data.tags?.join(', ')
  }
}

// Blog/Article Schema Template
export function createBlogSchemaTemplate(data: {
  headline: string
  description: string
  url: string
  image?: string
  datePublished?: string
  dateModified?: string
  keywords?: string[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": ["BlogPosting", "Article"],
    "@id": `${data.url}#article`,
    "url": data.url,
    "headline": data.headline,
    "description": data.description,
    "image": data.image || `${BASE_URL}/dental-checkup.png`,
    "author": {
      "@id": ENTITY_IDS.dentist
    },
    "publisher": {
      "@id": ENTITY_IDS.organization
    },
    "datePublished": data.datePublished || new Date().toISOString(),
    "dateModified": data.dateModified || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.url
    },
    "isPartOf": {
      "@id": `${BASE_URL}/blog#website`
    },
    "about": {
      "@type": "Thing",
      "name": "Dental Health"
    },
    "keywords": data.keywords?.join(', '),
    "inLanguage": "en-IN",
    "copyrightYear": new Date().getFullYear(),
    "copyrightHolder": {
      "@id": ENTITY_IDS.organization
    }
  }
}

export default {
  createServiceSchemaTemplate,
  createConditionSchemaTemplate,
  createLocationSchemaTemplate,
  createQASchemaTemplate,
  createBlogSchemaTemplate,
}
