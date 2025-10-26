import type React from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string | React.ReactNode
}

interface FAQSectionProps {
  title: string
  description?: string
  faqs: FAQItem[]
  category?: string
  location?: string
}

export default function FAQSection({
  title,
  description,
  faqs,
  category = "dental",
  location = "Vellore",
}: FAQSectionProps) {
  // Generate unique IDs for schema markup
  const baseId = `${category.toLowerCase().replace(/\s+/g, "-")}-faq`

  return (
    <div className="my-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        {description && <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{description}</p>}
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
            <AccordionContent>
              {typeof faq.answer === "string" ? (
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              ) : (
                faq.answer
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      {/* FAQ Schema Markup */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq, index) => ({
              "@type": "Question",
              name: faq.question,
              id: `${baseId}-question-${index}`,
              acceptedAnswer: {
                "@type": "Answer",
                text: typeof faq.answer === "string" ? faq.answer : "Please visit our website for the detailed answer.",
                id: `${baseId}-answer-${index}`,
              },
            })),
          }),
        }}
      />
    </div>
  )
}

// Example usage for dental FAQs
export function DentalFAQs({ location = "Vellore" }) {
  const dentalFaqs = [
    {
      question: "How often should I visit the dentist?",
      answer: `Most dental professionals recommend visiting the dentist every six months for a check-up and professional cleaning. However, patients with specific dental conditions may need more frequent visits. At our ${location} clinic, we create personalized care plans based on your individual needs.`,
    },
    {
      question: "What should I do in case of a dental emergency?",
      answer: `For dental emergencies in ${location}, contact our clinic immediately at our emergency number. For severe tooth pain, broken teeth, knocked-out teeth, or oral injuries, rinse with warm water, apply cold compress for swelling, and seek immediate dental care. Our clinic offers same-day emergency appointments whenever possible.`,
    },
    {
      question: "How can I improve my oral hygiene at home?",
      answer: `To maintain good oral hygiene: brush twice daily with fluoride toothpaste, floss daily, use an antimicrobial mouthwash, replace your toothbrush every 3-4 months, maintain a balanced diet low in sugary foods and drinks, and avoid tobacco products. Regular dental check-ups at our ${location} clinic complement your home care routine.`,
    },
    {
      question: "Are dental X-rays safe?",
      answer:
        "Modern dental X-rays are very safe, with minimal radiation exposure. Digital X-rays used at our clinic reduce radiation by up to 90% compared to traditional X-rays. We also use protective equipment like lead aprons. The diagnostic benefits of X-rays far outweigh the minimal risks.",
    },
    {
      question: "What causes tooth sensitivity and how can it be treated?",
      answer:
        "Tooth sensitivity can be caused by enamel erosion, gum recession, tooth decay, cracked teeth, or teeth grinding. Treatments include desensitizing toothpaste, fluoride treatments, dental bonding, gum grafts, or root canal therapy depending on the cause and severity. Our dentists can determine the best treatment for your specific situation.",
    },
    {
      question: "What payment options do you offer?",
      answer: `Our ${location} dental clinic accepts various payment methods including cash, credit/debit cards, and major insurance plans. We also offer flexible payment plans and financing options to make dental care more affordable. Our administrative team can help you understand your insurance coverage and out-of-pocket expenses before treatment.`,
    },
    {
      question: "How long do dental implants last?",
      answer:
        "With proper care and maintenance, dental implants can last a lifetime. The implant itself (titanium post) has a success rate of over 95% at 10 years. The crown attached to the implant typically lasts 10-15 years before needing replacement. Regular dental check-ups and good oral hygiene are essential for implant longevity.",
    },
  ]

  return (
    <FAQSection
      title={`Frequently Asked Dental Questions in ${location}`}
      description={`Find answers to common dental questions from our experienced dentists in ${location}`}
      faqs={dentalFaqs}
      category="General Dentistry"
      location={location}
    />
  )
}

// Example usage for Invisalign FAQs
export function InvisalignFAQs({ location = "Vellore" }) {
  const invisalignFaqs = [
    {
      question: "How does Invisalign work?",
      answer: `Invisalign uses a series of clear, custom-made aligners that gradually shift your teeth into the desired position. Each set of aligners is worn for about 1-2 weeks before moving to the next set in the series. Our ${location} dental clinic uses advanced 3D imaging to plan your entire treatment from start to finish.`,
    },
    {
      question: "How long does Invisalign treatment take?",
      answer:
        "The average Invisalign treatment takes about 12-18 months, but this varies depending on the complexity of your case. Simple cases may be completed in as little as 6 months, while more complex cases might take up to 24 months. Your dentist will provide a more accurate timeline after your initial consultation.",
    },
    {
      question: "Is Invisalign painful?",
      answer:
        "Invisalign is generally less painful than traditional braces. You may experience some discomfort or pressure for a few days when you start wearing a new set of aligners, which is a sign that they're working to move your teeth. This mild discomfort typically subsides within a few days.",
    },
    {
      question: "Can I eat and drink with Invisalign aligners?",
      answer:
        "You should remove your Invisalign aligners before eating or drinking anything other than water. This prevents staining of the aligners and damage from chewing. After eating, brush your teeth before reinserting the aligners to prevent food particles from getting trapped against your teeth.",
    },
    {
      question: "How do I clean my Invisalign aligners?",
      answer:
        "Clean your aligners by brushing them gently with a soft toothbrush and lukewarm water. You can use a small amount of clear, unscented antibacterial soap if needed. Avoid hot water, colored or scented soaps, and toothpaste, as these can damage or discolor the aligners. Invisalign also offers a specialized cleaning system.",
    },
    {
      question: `How much does Invisalign cost in ${location}?`,
      answer: `Invisalign treatment in ${location} typically costs between ₹50,000 and ₹1,50,000, depending on the complexity of your case and treatment duration. This is often 30-40% less expensive than in metropolitan cities like Chennai or Bangalore. We offer flexible payment plans to make treatment more affordable.`,
    },
    {
      question: "What happens after Invisalign treatment is completed?",
      answer:
        "After completing Invisalign treatment, you'll need to wear retainers to maintain your new smile. Initially, you may need to wear retainers full-time (except when eating or cleaning), gradually transitioning to nighttime only. Without retainers, teeth have a tendency to shift back toward their original positions.",
    },
  ]

  return (
    <FAQSection
      title={`Invisalign FAQs in ${location}`}
      description={`Common questions about Invisalign clear aligner treatment at our ${location} dental clinic`}
      faqs={invisalignFaqs}
      category="Invisalign"
      location={location}
    />
  )
}
