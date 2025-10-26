"use client"

import { useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"
import { Card } from "@/components/ui/card"

const faqs = [
  {
    question: "What are your clinic hours?",
    answer:
      "We are open Monday to Saturday from 10:00 AM to 8:00 PM, and Sunday from 10:00 AM to 1:30 PM. We also provide 24/7 emergency dental services.",
  },
  {
    question: "Do you accept dental insurance?",
    answer:
      "Yes, we accept most major dental insurance plans. Please contact our office with your insurance details, and we'll verify your coverage before your appointment.",
  },
  {
    question: "Is root canal treatment painful?",
    answer:
      "Modern root canal treatment is virtually painless. We use advanced anesthesia techniques and the latest technology to ensure your comfort throughout the procedure. Most patients report feeling little to no discomfort.",
  },
  {
    question: "How much do dental implants cost?",
    answer:
      "Dental implant costs vary depending on the complexity of the case. Single tooth implants start from ₹20,000. We offer free consultations where we can provide a detailed treatment plan and accurate cost estimate.",
  },
  {
    question: "Do you offer emergency dental services?",
    answer:
      "Yes, we provide 24/7 emergency dental care for urgent situations like severe tooth pain, broken teeth, or dental trauma. Call us at 7010650063 for immediate assistance.",
  },
  {
    question: "How long does teeth whitening last?",
    answer:
      "Professional teeth whitening results typically last 1-3 years, depending on your oral hygiene habits and lifestyle factors like smoking or consuming staining foods and beverages.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/30 rounded-full text-sm font-semibold text-blue-700 dark:text-blue-300 mb-4">
            <HelpCircle className="h-4 w-4" />
            FAQ
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Frequently Asked <span className="text-teal-600">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about our dental services, treatments, and clinic policies
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="overflow-hidden transition-all duration-300 hover:shadow-lg bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <span className="font-semibold text-lg text-gray-900 dark:text-white">{faq.question}</span>
                <ChevronDown
                  className={`h-5 w-5 text-teal-600 flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-600 dark:text-gray-400 leading-relaxed">{faq.answer}</div>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4">Still have questions?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="tel:7010650063"
              className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white rounded-xl font-semibold shadow-lg transition-all"
            >
              Call Us: 7010650063
            </a>
            <a
              href="/faq"
              className="px-6 py-3 bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-300 dark:border-gray-700 rounded-xl font-semibold hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
            >
              View All FAQs
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
