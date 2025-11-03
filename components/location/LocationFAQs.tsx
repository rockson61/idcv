'use client'

import { HelpCircle, ChevronDown } from 'lucide-react'
import { ModernCard } from '@/components/ui/modern-card'
import { useState } from 'react'
import { generateDefaultFAQs } from '@/lib/location-generators'

export interface FAQ {
  question: string
  answer: string
  category?: string
}

interface LocationFAQsProps {
  faqs: FAQ[]
  locationName: string
  className?: string
  distance?: string
}

export function LocationFAQs({ faqs, locationName, className = '', distance = '15–20 minutes' }: LocationFAQsProps) {
  const faqData = faqs && faqs.length > 0 ? faqs : generateDefaultFAQs(locationName, distance)
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className={className} id="faqs">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">FAQs about visiting our dentist near {locationName}</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Answers to the most common questions patients from {locationName} ask before booking their dental appointment.
        </p>
      </div>

      <div className="space-y-4 max-w-4xl mx-auto">
        {faqData.map((faq, index) => (
          <ModernCard key={`${faq.question}-${index}`} className="overflow-hidden">
            <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full text-left p-6 hover:bg-gray-50 transition-colors">
              <div className="flex items-start gap-4">
                <HelpCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 pr-8">{faq.question}</h3>
                  {openIndex === index && <div className="mt-3 text-gray-700 leading-relaxed">{faq.answer}</div>}
                </div>
                <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform ${openIndex === index ? 'transform rotate-180' : ''}`} />
              </div>
            </button>
          </ModernCard>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-teal-100 bg-gradient-to-r from-blue-50 to-teal-50 p-6 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Ready to book your dental visit?</h3>
        <p className="text-gray-600 mb-4">
          Appointments fill fast for peak slots. Secure your time or chat with us to plan travel from {locationName}.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a href="/contact" className="inline-flex items-center justify-center rounded-lg bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow hover:bg-teal-700">
            Book Online
          </a>
          <a href="tel:+917010650063" className="inline-flex items-center justify-center rounded-lg border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-600 hover:bg-teal-50">
            Call 7010 650 063
          </a>
          <a href="https://wa.me/917010650063" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-lg border border-green-500 px-6 py-3 text-sm font-semibold text-green-600 hover:bg-green-50">
            WhatsApp Chat
          </a>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faqData.map((faq) => ({
              '@type': 'Question',
              name: faq.question,
              acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  )
}
