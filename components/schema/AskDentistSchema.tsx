// Comprehensive Q&A Schema for Ask the Dentist Section
// Implements QAPage and CollectionPage schema for SEO optimization

export function AskDentistSchema() {
  const qaPageSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "QAPage",
        "@id": "https://www.dentalclinicinvellore.in/ask-the-dentist#qapage",
        "name": "Ask the Dentist - Expert Dental Q&A by Dr. Rockson Samuel",
        "description": "Get expert answers to your dental questions from Dr. Rockson Samuel. Browse 500+ answered questions about dental treatments, oral health, and dental care.",
        "url": "https://www.dentalclinicinvellore.in/ask-the-dentist",
        "inLanguage": "en-IN",
        "isPartOf": {
          "@id": "https://www.dentalclinicinvellore.in/#website"
        },
        "about": {
          "@type": "MedicalBusiness",
          "@id": "https://www.dentalclinicinvellore.in/#organization"
        },
        "author": {
          "@type": "Person",
          "@id": "https://www.dentalclinicinvellore.in/#person-drrocksonsam uel",
          "name": "Dr. Rockson Samuel",
          "jobTitle": "General Dentist and Community Leader",
          "description": "Expert dentist with 15+ years experience answering patient questions"
        },
        "publisher": {
          "@type": "Organization",
          "@id": "https://www.dentalclinicinvellore.in/#organization",
          "name": "Indira Dental Clinic"
        },
        "potentialAction": {
          "@type": "AskAction",
          "target": {
            "@type": "EntryPoint",
            "urlTemplate": "https://www.dentalclinicinvellore.in/ask-the-dentist/submit",
            "actionPlatform": [
              "http://schema.org/DesktopWebPlatform",
              "http://schema.org/MobileWebPlatform"
            ]
          },
          "object": {
            "@type": "Question",
            "name": "Ask Dr. Rockson Samuel a dental question"
          }
        },
        "hasPart": [
          {
            "@type": "WebPageElement",
            "name": "Question Search",
            "description": "Search through 500+ answered dental questions"
          },
          {
            "@type": "WebPageElement",
            "name": "Question Categories",
            "description": "Browse questions by dental specialty or topic"
          }
        ]
      },
      {
        "@type": "CollectionPage",
        "@id": "https://www.dentalclinicinvellore.in/ask-the-dentist#collectionpage",
        "name": "Dental Questions & Answers Collection",
        "description": "Comprehensive collection of dental Q&A answered by Dr. Rockson Samuel covering all aspects of dental health and treatment.",
        "url": "https://www.dentalclinicinvellore.in/ask-the-dentist",
        "numberOfItems": 500,
        "about": [
          {
            "@type": "Thing",
            "name": "Root Canal Treatment"
          },
          {
            "@type": "Thing",
            "name": "Dental Implants"
          },
          {
            "@type": "Thing",
            "name": "Orthodontics"
          },
          {
            "@type": "Thing",
            "name": "Cosmetic Dentistry"
          },
          {
            "@type": "Thing",
            "name": "Teeth Whitening"
          },
          {
            "@type": "Thing",
            "name": "Gum Disease"
          },
          {
            "@type": "Thing",
            "name": "Emergency Dental Care"
          },
          {
            "@type": "Thing",
            "name": "Pediatric Dentistry"
          }
        ],
        "creator": {
          "@id": "https://www.dentalclinicinvellore.in/#person-drrocksonsam uel"
        }
      },
      {
        "@type": "ItemList",
        "@id": "https://www.dentalclinicinvellore.in/ask-the-dentist#questionlist",
        "name": "Popular Dental Questions",
        "description": "Most popular questions answered by Dr. Rockson Samuel",
        "numberOfItems": 20,
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "item": {
              "@type": "Question",
              "name": "What is an Abscessed Tooth and How is it Treated?",
              "url": "https://www.dentalclinicinvellore.in/ask-the-dentist/abscessed-tooth-treatment",
              "acceptedAnswer": {
                "@type": "Answer",
                "author": {
                  "@id": "https://www.dentalclinicinvellore.in/#person-drrocksonsam uel"
                }
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 2,
            "item": {
              "@type": "Question",
              "name": "How Long Do Dental Implants Last?",
              "url": "https://www.dentalclinicinvellore.in/ask-the-dentist/dental-implants-longevity",
              "acceptedAnswer": {
                "@type": "Answer",
                "author": {
                  "@id": "https://www.dentalclinicinvellore.in/#person-drrocksonsam uel"
                }
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 3,
            "item": {
              "@type": "Question",
              "name": "When Should I Remove My Wisdom Teeth?",
              "url": "https://www.dentalclinicinvellore.in/ask-the-dentist/wisdom-teeth-removal-timing",
              "acceptedAnswer": {
                "@type": "Answer",
                "author": {
                  "@id": "https://www.dentalclinicinvellore.in/#person-drrocksonsam uel"
                }
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 4,
            "item": {
              "@type": "Question",
              "name": "What Causes Teeth Crowding and How is it Treated?",
              "url": "https://www.dentalclinicinvellore.in/ask-the-dentist/teeth-crowding-causes-treatment",
              "acceptedAnswer": {
                "@type": "Answer",
                "author": {
                  "@id": "https://www.dentalclinicinvellore.in/#person-drrocksonsam uel"
                }
              }
            }
          },
          {
            "@type": "ListItem",
            "position": 5,
            "item": {
              "@type": "Question",
              "name": "How to Maintain Dental Implants for Longevity?",
              "url": "https://www.dentalclinicinvellore.in/ask-the-dentist/implant-maintenance",
              "acceptedAnswer": {
                "@type": "Answer",
                "author": {
                  "@id": "https://www.dentalclinicinvellore.in/#person-drrocksonsam uel"
                }
              }
            }
          }
        ]
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.dentalclinicinvellore.in/ask-the-dentist#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://www.dentalclinicinvellore.in/"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "Ask the Dentist",
            "item": "https://www.dentalclinicinvellore.in/ask-the-dentist"
          }
        ]
      },
      {
        "@type": "WebPage",
        "@id": "https://www.dentalclinicinvellore.in/ask-the-dentist#webpage",
        "url": "https://www.dentalclinicinvellore.in/ask-the-dentist",
        "name": "Ask the Dentist - Expert Dental Q&A",
        "description": "Get expert dental advice from Dr. Rockson Samuel. Browse 500+ answered questions or submit your own dental question for professional guidance.",
        "isPartOf": {
          "@id": "https://www.dentalclinicinvellore.in/#website"
        },
        "about": {
          "@id": "https://www.dentalclinicinvellore.in/#organization"
        },
        "breadcrumb": {
          "@id": "https://www.dentalclinicinvellore.in/ask-the-dentist#breadcrumb"
        },
        "datePublished": "2024-01-01",
        "dateModified": "2025-10-25",
        "inLanguage": "en-IN",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://www.dentalclinicinvellore.in/ask-the-dentist"]
          },
          {
            "@type": "SearchAction",
            "target": {
              "@type": "EntryPoint",
              "urlTemplate": "https://www.dentalclinicinvellore.in/ask-the-dentist?search={search_term_string}"
            },
            "query-input": "required name=search_term_string"
          }
        ],
        "mainEntity": {
          "@id": "https://www.dentalclinicinvellore.in/ask-the-dentist#qapage"
        },
        "specialty": [
          "Endodontics",
          "Orthodontics",
          "Cosmetic Dentistry",
          "Implantology",
          "Periodontics",
          "Pediatric Dentistry",
          "Emergency Dentistry"
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(qaPageSchema) }}
    />
  )
}

