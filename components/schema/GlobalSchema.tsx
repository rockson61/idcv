// Global Comprehensive Schema for Indira Dental Clinic
// This implements semantic SEO with entity web mapping for Google Knowledge Graph

export function GlobalSchema() {
  const comprehensiveSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Dentist", "LocalBusiness", "MedicalBusiness", "MedicalOrganization", "HealthAndBeautyBusiness"],
        "@id": "https://www.dentalclinicinvellore.in/#organization",
        "name": "Indira Dental Clinic | Dr Rockson Samuel | Top Dentist in Vellore for RCT, Braces, Implants, & Dental Fillings",
        "legalName": "Indira Dental Clinic",
        "alternateName": ["Indira Dental", "Dental Clinic Vellore", "Dr Rockson Dental Clinic"],
        "url": "https://www.dentalclinicinvellore.in/",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.dentalclinicinvellore.in/#logo",
          "url": "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
          "caption": "Indira Dental Clinic Logo",
          "contentUrl": "https://www.dentalclinicinvellore.in/logo.png",
          "width": 600,
          "height": 600
        },
        "image": [
          "https://lh3.googleusercontent.com/K8lcq6RY2okp3bLpMSdwccD1j-Xdpy4eY07_YEb1jHr-JXcAyKfOAji1C2SWkQ5hwCF3BJD1_1581Td1=s0",
          "https://www.dentalclinicinvellore.in/professional-dentist-portrait.png",
          "https://www.dentalclinicinvellore.in/dental-implant-stages.png",
          "https://www.dentalclinicinvellore.in/root-canal-procedure.png",
          "https://www.dentalclinicinvellore.in/teeth-whitening.jpg",
          "https://www.dentalclinicinvellore.in/orthodontic-braces.jpg"
        ],
        "description": "Indira Dental Clinic, led by the top dentist Dr. Rockson Samuel in Vellore, Tamil Nadu, offers comprehensive dental care tailored to meet all your oral health needs. Specializing in Root Canal Treatment (RCT), braces for teeth alignment, high-quality dental implants, and precise dental fillings, our clinic is dedicated to providing exceptional dentistry services. We use state-of-the-art technology and advanced techniques in a comfortable and welcoming environment. Whether you seek preventive care or cosmetic enhancements, Indira Dental Clinic ensures personalized attention and effective, high-standard treatments.",
        "slogan": "Your Smile, Our Priority - Excellence in Every Treatment",
        "founder": {
          "@id": "https://www.dentalclinicinvellore.in/#person-drrocksonsam uel"
        },
        "telephone": "+91 70106 50063",
        "email": "rockson68@hotmail.com",
        "faxNumber": "+91 70106 50063",
        "address": {
          "@type": "PostalAddress",
          "@id": "https://www.dentalclinicinvellore.in/#address",
          "streetAddress": "3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar",
          "addressLocality": "Vellore",
          "addressRegion": "Tamil Nadu",
          "postalCode": "632006",
          "addressCountry": {
            "@type": "Country",
            "name": "India",
            "sameAs": "https://en.wikipedia.org/wiki/India"
          }
        },
        "geo": {
          "@type": "GeoCoordinates",
          "@id": "https://www.dentalclinicinvellore.in/#geocoordinates",
          "latitude": "12.9534426",
          "longitude": "79.1370592",
          "address": {
            "@id": "https://www.dentalclinicinvellore.in/#address"
          }
        },
        "hasMap": "https://maps.google.com/maps?cid=14385819900995297414",
        "maps": "https://maps.app.goo.gl/ngSpvWz8Turx9MsN9",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Monday",
            "opens": "10:00:00",
            "closes": "20:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Tuesday",
            "opens": "10:00:00",
            "closes": "20:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Wednesday",
            "opens": "10:00:00",
            "closes": "20:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Thursday",
            "opens": "10:00:00",
            "closes": "20:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Friday",
            "opens": "10:00:00",
            "closes": "20:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Saturday",
            "opens": "10:00:00",
            "closes": "20:00:00"
          },
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": "Sunday",
            "opens": "10:00:00",
            "closes": "13:30:00"
          }
        ],
        "priceRange": "₹₹",
        "currenciesAccepted": "INR",
        "paymentAccepted": "Cash, Credit Card, Debit Card, UPI, Insurance",
        "aggregateRating": {
          "@type": "AggregateRating",
          "@id": "https://www.dentalclinicinvellore.in/#aggregaterating",
          "ratingValue": "5.0",
          "bestRating": "5",
          "worstRating": "1",
          "ratingCount": "126",
          "reviewCount": "126",
          "itemReviewed": {
            "@id": "https://www.dentalclinicinvellore.in/#organization"
          }
        },
        "medicalSpecialty": [
          "Dentistry",
          "Endodontics",
          "Orthodontics",
          "Periodontics",
          "Prosthodontics",
          "Oral Surgery",
          "Cosmetic Dentistry",
          "Pediatric Dentistry",
          "Implantology"
        ],
        "areaServed": [
          {
            "@type": "City",
            "name": "Vellore",
            "containedInPlace": {
              "@type": "State",
              "name": "Tamil Nadu"
            }
          },
          {
            "@type": "AdministrativeArea",
            "name": "Gandhi Nagar"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Katpadi"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Sathuvachari"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Bagayam"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Kosapet"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Thorapadi"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Ranipet"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Ambur"
          },
          {
            "@type": "AdministrativeArea",
            "name": "Vaniyambadi"
          },
          {
            "@type": "State",
            "name": "Tamil Nadu",
            "containedInPlace": {
              "@type": "Country",
              "name": "India"
            }
          }
        ],
        "serviceArea": {
          "@type": "GeoCircle",
          "geoMidpoint": {
            "@id": "https://www.dentalclinicinvellore.in/#geocoordinates"
          },
          "geoRadius": "50000"
        },
        "knowsAbout": [
          "Root Canal Treatment",
          "Dental Implants",
          "Orthodontics",
          "Cosmetic Dentistry",
          "Teeth Whitening",
          "Dental Veneers",
          "Braces",
          "Invisalign",
          "Gum Disease Treatment",
          "Pediatric Dentistry",
          "Emergency Dental Care",
          "Dental Crowns",
          "Dental Bridges",
          "Dentures",
          "Oral Surgery",
          "Wisdom Teeth Removal"
        ],
        "makesOffer": [
          {
            "@type": "Offer",
            "name": "Dental Clinic",
            "description": "Comprehensive dental clinic services"
          },
          {
            "@type": "Offer",
            "name": "Dentist",
            "description": "General dentistry services"
          },
          {
            "@type": "Offer",
            "name": "Endodontist",
            "description": "Root canal treatment specialists"
          },
          {
            "@type": "Offer",
            "name": "Cosmetic Dentist",
            "description": "Smile makeover and aesthetic dentistry"
          },
          {
            "@type": "Offer",
            "name": "Dental Hygienist",
            "description": "Professional teeth cleaning and oral hygiene"
          },
          {
            "@type": "Offer",
            "name": "Dental Radiology",
            "description": "Digital X-rays and diagnostic imaging"
          },
          {
            "@type": "Offer",
            "name": "Paediatric Dentist",
            "description": "Specialized care for children"
          },
          {
            "@type": "Offer",
            "name": "Dental Implants Provider",
            "description": "Permanent tooth replacement solutions"
          },
          {
            "@type": "Offer",
            "name": "Emergency Dental Service",
            "description": "24/7 emergency dental care"
          },
          {
            "@type": "Offer",
            "name": "Dental Implants Periodontist",
            "description": "Implant surgery and gum disease treatment"
          }
        ],
        "employee": [
          {
            "@id": "https://www.dentalclinicinvellore.in/#person-drrocksonsam uel"
          }
        ],
        "numberOfEmployees": {
          "@type": "QuantitativeValue",
          "value": "8"
        },
        "foundingDate": "2008",
        "yearsInOperation": 17,
        "sameAs": [
          "https://www.facebook.com/indiradentalclinicvellore/",
          "https://www.instagram.com/indiradentalvellore/",
          "https://in.pinterest.com/indradentalclinic/",
          "https://www.justdial.com/Vellore/Indira-Dental-Clinic-Dr-Rockson-Samuel-Rct-Braces-Implants-Dental-Fillings-Near-Shell-Petrol-Pump-Katpadi-Vellore/9999PX416-X416-240129151733-B2V8_BZDET",
          "https://dentalreach.today/the-top-10-influencers-of-dentistry/",
          "https://velloredental.com/",
          "https://www.dentalclinicinvellore.in/"
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+91-7010650063",
            "contactType": "Customer Service",
            "availableLanguage": ["English", "Tamil", "Hindi", "Telugu"],
            "areaServed": "IN",
            "contactOption": ["TollFree", "HearingImpairedSupported"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
              "opens": "10:00",
              "closes": "20:00"
            }
          },
          {
            "@type": "ContactPoint",
            "telephone": "+91-7010650063",
            "contactType": "Emergency",
            "availableLanguage": ["English", "Tamil", "Hindi"],
            "areaServed": "IN",
            "contactOption": ["TollFree"],
            "hoursAvailable": {
              "@type": "OpeningHoursSpecification",
              "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
              "opens": "00:00",
              "closes": "23:59"
            }
          }
        ],
        "potentialAction": [
          {
            "@type": "ReserveAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.dentalclinicinvellore.in/contact",
              "inLanguage": "en-IN",
              "actionPlatform": [
                "http://schema.org/DesktopWebPlatform",
                "http://schema.org/MobileWebPlatform"
              ]
            },
            "result": {
              "@type": "Reservation",
              "name": "Dental Appointment Reservation"
            }
          },
          {
            "@type": "CommunicateAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "tel:+917010650063",
              "inLanguage": "en-IN"
            }
          }
        ]
      },
      {
        "@type": ["Person", "Dentist", "MedicalPractitioner"],
        "@id": "https://www.dentalclinicinvellore.in/#person-drrocksonsam uel",
        "name": "Dr. Rockson Samuel",
        "givenName": "Rockson",
        "familyName": "Samuel",
        "honorificPrefix": "Dr.",
        "jobTitle": "General Dentist and Community Leader",
        "description": "Dr. Rockson Samuel is a highly skilled and experienced dentist who has been serving the Vellore community for over 15 years. With BDS, PgDM, and BDM qualifications, he specializes in Root Canal Treatment, Dental Implants, Cosmetic Dentistry, and Orthodontics.",
        "image": {
          "@type": "ImageObject",
          "url": "https://www.dentalclinicinvellore.in/professional-dentist-portrait.png",
          "caption": "Dr. Rockson Samuel - Leading Dentist in Vellore"
        },
        "url": "https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel",
        "sameAs": [
          "https://dentalreach.today/the-top-10-influencers-of-dentistry/",
          "https://www.dentalclinicinvellore.in/about-us/dr-rockson-samuel"
        ],
        "worksFor": {
          "@id": "https://www.dentalclinicinvellore.in/#organization"
        },
        "memberOf": {
          "@type": "Organization",
          "name": "DentalReach Community Health Initiative"
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Tamil Nadu Government Dental College, Chennai"
          },
          {
            "@type": "EducationalOrganization",
            "name": "Healthcare Management Institute"
          },
          {
            "@type": "EducationalOrganization",
            "name": "International Dental Education Board"
          }
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "BDS (Bachelor of Dental Surgery)",
            "educationalLevel": "Bachelor's Degree",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Tamil Nadu Government Dental College"
            },
            "dateCreated": "2005"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "PgDM (Post Graduate Diploma in Management)",
            "educationalLevel": "Post Graduate",
            "recognizedBy": {
              "@type": "Organization",
              "name": "Healthcare Management Institute"
            },
            "dateCreated": "2010"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "degree",
            "name": "BDM (Bachelor of Dental Medicine)",
            "educationalLevel": "Bachelor's Degree",
            "recognizedBy": {
              "@type": "Organization",
              "name": "International Dental Education Board"
            },
            "dateCreated": "2012"
          }
        ],
        "knowsAbout": [
          {
            "@type": "Thing",
            "name": "Root Canal Treatment",
            "sameAs": "https://en.wikipedia.org/wiki/Root_canal_treatment"
          },
          {
            "@type": "Thing",
            "name": "Dental Implants",
            "sameAs": "https://en.wikipedia.org/wiki/Dental_implant"
          },
          {
            "@type": "Thing",
            "name": "Orthodontics",
            "sameAs": "https://en.wikipedia.org/wiki/Orthodontics"
          },
          {
            "@type": "Thing",
            "name": "Cosmetic Dentistry",
            "sameAs": "https://en.wikipedia.org/wiki/Cosmetic_dentistry"
          },
          {
            "@type": "Thing",
            "name": "Periodontics",
            "sameAs": "https://en.wikipedia.org/wiki/Periodontics"
          }
        ],
        "hasOccupation": {
          "@type": "Occupation",
          "name": "Dentist",
          "occupationLocation": {
            "@id": "https://www.dentalclinicinvellore.in/#address"
          },
          "experienceRequirements": "15+ years",
          "skills": [
            "Root Canal Treatment",
            "Dental Implant Surgery",
            "Orthodontic Treatment",
            "Cosmetic Dentistry",
            "Periodontal Therapy",
            "Pediatric Dentistry"
          ]
        },
        "award": [
          "Top Rated Dentist (4.9/5 stars)",
          "Community Leader - DentalReach",
          "Member - Indian Dental Association",
          "Member - Tamil Nadu Dental Council"
        ],
        "performerIn": [
          {
            "@type": "MedicalProcedure",
            "name": "Root Canal Treatment"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Dental Implant Surgery"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Orthodontic Treatment"
          },
          {
            "@type": "MedicalProcedure",
            "name": "Cosmetic Dental Procedures"
          }
        ],
        "telephone": "+91-7010650063",
        "email": "rockson68@hotmail.com"
      },
      {
        "@type": "WebSite",
        "@id": "https://www.dentalclinicinvellore.in/#website",
        "url": "https://www.dentalclinicinvellore.in/",
        "name": "Indira Dental Clinic - Best Dentist in Vellore",
        "description": "Leading dental care in Vellore, Tamil Nadu. Expert treatments including RCT, braces, implants, cosmetic dentistry by Dr. Rockson Samuel.",
        "publisher": {
          "@id": "https://www.dentalclinicinvellore.in/#organization"
        },
        "potentialAction": [
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.dentalclinicinvellore.in/search?q={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "inLanguage": "en-IN"
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(comprehensiveSchema) }}
    />
  )
}

