// AI-Assisted Semantic Schema Generator for All Routes
// Auto-generates contextual JSON-LD based on route patterns and content

interface SchemaGeneratorProps {
  routePath: string
  pageTitle: string
  pageDescription: string
  params?: Record<string, string>
  metadata?: any
  content?: string
}

interface BaseSchema {
  "@context": string
  "@type": string | string[]
  "@id": string
  url: string
  name: string
  description?: string
  [key: string]: any
}

const BASE_URL = "https://www.dentalclinicinvellore.in"

// Core entity IDs for linking
export const ENTITY_IDS = {
  organization: `${BASE_URL}/#organization`,
  dentist: `${BASE_URL}/#person-drrocksonsam uel`,
  website: `${BASE_URL}/#website`,
  address: `${BASE_URL}/#address`,
  geocoordinates: `${BASE_URL}/#geocoordinates`,
  logo: `${BASE_URL}/#logo`,
  aggregateRating: `${BASE_URL}/#aggregaterating`,
}

// Route pattern matching for schema type inference
function inferSchemaType(routePath: string): string | string[] {
  // Service pages - MedicalProcedure
  if (routePath.startsWith('/services/')) {
    return ['MedicalProcedure', 'Service']
  }
  
  // Condition pages - MedicalCondition
  if (routePath.startsWith('/conditions/')) {
    return 'MedicalCondition'
  }
  
  // Location pages - LocalBusiness with Place
  if (routePath.startsWith('/in/') || routePath.includes('/vellore/')) {
    return ['Dentist', 'LocalBusiness', 'Place']
  }
  
  // Ask the Dentist - FAQPage or QAPage
  if (routePath.startsWith('/ask-the-dentist/')) {
    if (routePath.includes('/submit')) return 'WebPage'
    return 'QAPage'
  }
  
  // Blog - BlogPosting or Article
  if (routePath.startsWith('/blog/') && routePath !== '/blog') {
    return ['BlogPosting', 'Article']
  }
  
  // About pages - AboutPage with Person/Organization
  if (routePath.startsWith('/about-us/dr-rockson-samuel')) {
    return ['ProfilePage', 'AboutPage']
  }
  
  if (routePath.startsWith('/about-us')) {
    return 'AboutPage'
  }
  
  // Contact page - ContactPage
  if (routePath === '/contact') {
    return 'ContactPage'
  }
  
  // Pricing page - PriceSpecification
  if (routePath === '/pricing') {
    return 'WebPage'
  }
  
  // Testimonials - ReviewAction collection
  if (routePath === '/testimonials') {
    return 'CollectionPage'
  }
  
  // Gallery - ImageGallery
  if (routePath === '/gallery') {
    return 'ImageGallery'
  }
  
  // International patients - TravelAgency + MedicalBusiness
  if (routePath.startsWith('/international-patients')) {
    return ['MedicalBusiness', 'TravelAgency']
  }
  
  // Homepage - WebSite
  if (routePath === '/' || routePath === '') {
    return 'WebPage'
  }
  
  // Default - WebPage
  return 'WebPage'
}

// Generate MedicalProcedure schema for service pages
function generateServiceSchema(props: SchemaGeneratorProps): BaseSchema {
  const serviceName = props.pageTitle.replace(' | Indira Dental Clinic', '').replace(' in Vellore', '').trim()
  
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalProcedure", "Service"],
    "@id": `${BASE_URL}${props.routePath}#service`,
    "url": `${BASE_URL}${props.routePath}`,
    "name": serviceName,
    "description": props.pageDescription,
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
    "procedureType": "Dental",
    "additionalType": "https://schema.org/MedicalProcedure",
  }
}

// Generate MedicalCondition schema for condition pages
function generateConditionSchema(props: SchemaGeneratorProps): BaseSchema {
  const conditionName = props.pageTitle.replace(' Treatment', '').replace(' | Indira Dental Clinic', '').trim()
  
  return {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "@id": `${BASE_URL}${props.routePath}#condition`,
    "url": `${BASE_URL}${props.routePath}`,
    "name": conditionName,
    "description": props.pageDescription,
    "associatedAnatomy": {
      "@type": "AnatomicalStructure",
      "name": "Teeth and Gums"
    },
    "possibleTreatment": {
      "@type": "MedicalTherapy",
      "name": `${conditionName} Treatment at Indira Dental Clinic`
    },
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": "Dentistry"
    },
  }
}

// Generate LocalBusiness schema for location pages
function generateLocationSchema(props: SchemaGeneratorProps): BaseSchema {
  const locationMatch = props.routePath.match(/\/in\/([^/]+)\/([^/]+)(?:\/([^/]+))?/)
  const state = locationMatch?.[1]?.replace(/-/g, ' ') || 'Tamil Nadu'
  const city = locationMatch?.[2]?.replace(/-/g, ' ') || 'Vellore'
  const area = locationMatch?.[3]?.replace(/-/g, ' ') || ''
  
  return {
    "@context": "https://schema.org",
    "@type": ["Dentist", "LocalBusiness", "Place"],
    "@id": `${BASE_URL}${props.routePath}#location`,
    "url": `${BASE_URL}${props.routePath}`,
    "name": `Indira Dental Clinic - Dentist in ${area || city}`,
    "description": props.pageDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": city,
      "addressRegion": state,
      "addressCountry": "India"
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": state
      }
    },
    "parentOrganization": {
      "@id": ENTITY_IDS.organization
    },
  }
}

// Generate QAPage schema for Ask the Dentist
function generateQAPageSchema(props: SchemaGeneratorProps): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "QAPage",
    "@id": `${BASE_URL}${props.routePath}#qa`,
    "url": `${BASE_URL}${props.routePath}`,
    "name": props.pageTitle,
    "description": props.pageDescription,
    "mainEntity": {
      "@type": "Question",
      "name": props.pageTitle.replace(' | Ask the Dentist', ''),
      "text": props.metadata?.question || props.pageDescription,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": props.metadata?.answer || "",
        "author": {
          "@id": ENTITY_IDS.dentist
        }
      }
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".question-content", ".answer-content"]
    },
  }
}

// Generate BlogPosting schema
function generateBlogSchema(props: SchemaGeneratorProps): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": ["BlogPosting", "Article"],
    "@id": `${BASE_URL}${props.routePath}#article`,
    "url": `${BASE_URL}${props.routePath}`,
    "headline": props.pageTitle,
    "description": props.pageDescription,
    "author": {
      "@id": ENTITY_IDS.dentist
    },
    "publisher": {
      "@id": ENTITY_IDS.organization
    },
    "datePublished": props.metadata?.publishedDate || new Date().toISOString(),
    "dateModified": props.metadata?.modifiedDate || new Date().toISOString(),
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `${BASE_URL}${props.routePath}`
    },
    "image": props.metadata?.image || `${BASE_URL}/dental-checkup.png`,
  }
}

// Generate AboutPage/ProfilePage schema
function generateProfileSchema(props: SchemaGeneratorProps): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": ["ProfilePage", "AboutPage"],
    "@id": `${BASE_URL}${props.routePath}#profile`,
    "url": `${BASE_URL}${props.routePath}`,
    "name": props.pageTitle,
    "description": props.pageDescription,
    "mainEntity": {
      "@id": ENTITY_IDS.dentist
    },
    "about": {
      "@id": ENTITY_IDS.dentist
    },
    "relatedLink": [
      `${BASE_URL}/services/root-canal-treatment`,
      `${BASE_URL}/services/dental-implants`,
      `${BASE_URL}/services/orthodontics`
    ],
  }
}

// Generate ContactPage schema
function generateContactSchema(props: SchemaGeneratorProps): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${BASE_URL}${props.routePath}#contact`,
    "url": `${BASE_URL}${props.routePath}`,
    "name": props.pageTitle,
    "description": props.pageDescription,
    "mainEntity": {
      "@id": ENTITY_IDS.organization
    },
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": [".contact-info", ".contact-form"]
    },
  }
}

// Main schema generator - routes to appropriate schema based on route pattern
export function generateContextualSchema(props: SchemaGeneratorProps): object {
  const schemaType = inferSchemaType(props.routePath)
  
  // Route to appropriate generator
  if (props.routePath.startsWith('/services/')) {
    return generateServiceSchema(props)
  }
  
  if (props.routePath.startsWith('/conditions/')) {
    return generateConditionSchema(props)
  }
  
  if (props.routePath.startsWith('/in/') || props.routePath.includes('/vellore/')) {
    return generateLocationSchema(props)
  }
  
  if (props.routePath.startsWith('/ask-the-dentist/') && props.routePath !== '/ask-the-dentist') {
    return generateQAPageSchema(props)
  }
  
  if (props.routePath.startsWith('/blog/') && props.routePath !== '/blog') {
    return generateBlogSchema(props)
  }
  
  if (props.routePath === '/about-us/dr-rockson-samuel') {
    return generateProfileSchema(props)
  }
  
  if (props.routePath === '/contact') {
    return generateContactSchema(props)
  }
  
  // Default WebPage schema
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${BASE_URL}${props.routePath}#webpage`,
    "url": `${BASE_URL}${props.routePath}`,
    "name": props.pageTitle,
    "description": props.pageDescription,
    "isPartOf": {
      "@id": ENTITY_IDS.website
    },
    "about": {
      "@id": ENTITY_IDS.organization
    },
    "provider": {
      "@id": ENTITY_IDS.organization
    },
  }
}

// Export generator functions for direct use
export {
  generateServiceSchema,
  generateConditionSchema,
  generateLocationSchema,
  generateQAPageSchema,
  generateBlogSchema,
  generateProfileSchema,
  generateContactSchema,
  inferSchemaType,
}
