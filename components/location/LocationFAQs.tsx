'use client'

import { HelpCircle, ChevronDown } from 'lucide-react'
import { ModernCard } from '@/components/ui/modern-card'
import { useState } from 'react'

export interface FAQ {
  question: string
  answer: string
  category?: string
}

interface LocationFAQsProps {
  faqs: FAQ[]
  locationName: string
  className?: string
}

export function LocationFAQs({ faqs, locationName, className = "" }: LocationFAQsProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={className} id="faqs">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">
          Frequently Asked Questions - {locationName}
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Common questions from patients in {locationName} about our dental services
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqs.map((faq, index) => (
          <ModernCard key={index} className="overflow-hidden">
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full text-left p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">
                    {faq.question}
                  </h3>
                  {openIndex === index && (
                    <div className="mt-3 text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                />
              </div>
            </button>
          </ModernCard>
        ))}
      </div>

      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map(faq => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
              }
            }))
          })
        }}
      />
    </section>
  )
}

// Default FAQ generator
export function generateDefaultFAQs(locationName: string, distance: string = "nearby"): FAQ[] {
  return [
    {
      question: `Where is the best dental clinic near ${locationName}?`,
      answer: `Indira Dental Clinic in Gandhi Nagar, Vellore is the best choice for ${locationName} residents. We are ${distance} from ${locationName} and offer comprehensive dental services with modern equipment, experienced dentists, and affordable pricing.`,
      category: 'location'
    },
    {
      question: `How much does dental treatment cost for ${locationName} patients?`,
      answer: `At Indira Dental Clinic serving ${locationName}, root canal treatment costs ₹3,000-8,000, dental implants ₹25,000-45,000, and braces ₹30,000-80,000. We offer transparent pricing with no hidden costs and flexible payment plans.`,
      category: 'pricing'
    },
    {
      question: `Who is the best dentist for ${locationName} patients?`,
      answer: `Dr. Rockson Samuel at Indira Dental Clinic is highly experienced with over 15 years of expertise and is trusted by thousands of ${locationName} residents. He provides personalized dental care using modern technology and international standards.`,
      category: 'doctor'
    },
    {
      question: `How do I reach the dental clinic from ${locationName}?`,
      answer: `Our clinic in Gandhi Nagar, Vellore is easily accessible from ${locationName} by car, bus, or auto. We provide free parking and our clinic is open 7 days a week from 9 AM to 9 PM for your convenience.`,
      category: 'access'
    },
    {
      question: `What dental services are available for ${locationName} residents?`,
      answer: `We offer complete dental services for ${locationName} patients including root canal treatment, dental implants, braces, cosmetic dentistry, teeth whitening, dental cleaning, pediatric dentistry, and emergency dental care. All treatments use the latest technology.`,
      category: 'services'
    }
  ]
}

