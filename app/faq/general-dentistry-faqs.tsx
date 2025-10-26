"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function GeneralDentistryFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "gd1",
      question: "What makes Indira Dental Clinic the best dental clinic near me in Vellore?",
      answer:
        "Indira Dental Clinic stands out as the best dental clinic in Vellore due to our comprehensive approach to dental care. Led by Dr. Rockson Samuel, we combine state-of-the-art technology with personalized treatment plans for every patient. Our clinic offers the full spectrum of dental services from preventive care to advanced treatments, all under one roof in our centrally located Gandhi Nagar facility. We prioritize patient comfort with pain management techniques and a welcoming environment. Our transparent pricing, extended hours (10 AM to 8 PM on weekdays), and multilingual staff make quality dental care accessible to all Vellore residents and visitors. With hundreds of 5-star reviews from patients across Vellore, including areas like Katpadi, Sathuvachari, and Bagayam, we've established ourselves as the trusted choice for dental excellence in the region.",
    },
    {
      id: "gd2",
      question: "Where can I find an affordable dentist for families in Vellore?",
      answer:
        "Indira Dental Clinic offers affordable family dental care in Vellore without compromising on quality. We provide family package deals that include discounts when multiple family members schedule appointments together. Our transparent pricing structure ensures no hidden costs, and we offer flexible payment options including installment plans for extensive treatments. For preventive care, we have special family packages covering examinations, cleanings, and fluoride treatments at reduced rates. We understand the financial concerns of Vellore families and work to make dental care accessible through periodic promotional offers and early intervention approaches that prevent costly treatments later. Located centrally in Gandhi Nagar, our clinic serves families from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam with comprehensive, budget-friendly dental care for all ages.",
    },
    {
      id: "gd3",
      question: "What are the top rated dental care services in Vellore?",
      answer:
        "In Vellore, the top-rated dental care services at Indira Dental Clinic include our comprehensive root canal treatments performed with advanced rotary endodontic technology, dental implant procedures with high success rates, and aesthetic smile makeovers that transform appearances. Our orthodontic treatments, including both traditional braces and clear aligners, receive excellent reviews for effective results. Patients particularly praise our pediatric dental services for creating positive experiences for children. Our preventive care programs, featuring thorough cleanings and personalized oral hygiene guidance, are highly rated for maintaining long-term dental health. Dr. Rockson Samuel's expertise in painless extractions and emergency dental care has earned recognition throughout Vellore. These services consistently receive five-star ratings from patients across Vellore, including areas like Gandhi Nagar, Katpadi, and Sathuvachari, establishing us as a leader in dental excellence in the region.",
    },
    {
      id: "gd4",
      question: "Where can I get painless tooth extraction near me in Vellore?",
      answer:
        "For painless tooth extraction in Vellore, Indira Dental Clinic offers advanced techniques that minimize discomfort. Dr. Rockson Samuel employs precise local anesthesia administration using topical gel before injection to reduce initial needle discomfort. We utilize modern extraction instruments and techniques that minimize trauma to surrounding tissues. For anxious patients, we provide sedation options including nitrous oxide (laughing gas) and oral conscious sedation. Our atraumatic extraction approach preserves bone structure, which is particularly important if you're considering future implants. Post-extraction, we provide comprehensive pain management protocols including appropriate medications and detailed aftercare instructions. Located centrally in Gandhi Nagar, our clinic is easily accessible from all Vellore areas including Katpadi, Sathuvachari, and Bagayam. Patients consistently report minimal discomfort during and after extractions at our clinic, making us the preferred choice for painless dental procedures in Vellore.",
    },
    {
      id: "gd5",
      question: "Is there an emergency dentist open now in Vellore?",
      answer:
        "Yes, Indira Dental Clinic provides emergency dental services in Vellore with extended hours from 10 AM to 8 PM Monday through Saturday, and 10 AM to 1:30 PM on Sundays. For after-hours emergencies, we offer an on-call service for existing patients. Our emergency dental care covers severe toothaches, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, dental abscesses, and soft tissue injuries. We prioritize emergency cases with same-day appointments whenever possible. Our central location in Gandhi Nagar makes us accessible from all areas of Vellore, including Katpadi, Sathuvachari, and Bagayam. For dental emergencies, call us immediately at 7010650063, and our team will provide guidance on immediate steps to take before you arrive. We understand that dental emergencies can be extremely painful and stressful, which is why we're committed to providing prompt, effective relief for patients throughout Vellore.",
    },
    {
      id: "gd6",
      question: "What are some dental health tips for strong teeth recommended by Vellore dentists?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore recommends these dental health tips for strong teeth: Maintain a thorough oral hygiene routine with brushing twice daily using fluoride toothpaste and soft-bristled brushes, and floss daily to remove interdental plaque. Follow a tooth-friendly diet by limiting sugary foods and acidic beverages like the popular tamarind-based drinks common in Vellore, and increase consumption of calcium-rich foods like dairy products and leafy greens. Stay hydrated with Vellore's clean water which helps maintain saliva flow that naturally protects teeth. Avoid harmful habits like using teeth as tools or chewing on hard items like ice or pen caps. Schedule regular dental check-ups every six months at our Gandhi Nagar clinic for professional cleanings and early problem detection. Use appropriate mouthwash as recommended by our dental team, and consider protective measures like mouthguards for sports activities popular among Vellore's youth. These practices will help maintain strong, healthy teeth for residents of Vellore and surrounding areas.",
    },
    {
      id: "gd7",
      question: "Where can I find the best dental care for kids and adults in Vellore?",
      answer:
        "Indira Dental Clinic provides comprehensive dental care for both kids and adults in Vellore. For children, we offer specialized pediatric services including gentle check-ups, preventive treatments like fluoride applications and sealants, behavior management techniques for anxious children, and early orthodontic assessments. Our child-friendly environment features a dedicated kids' area with age-appropriate distractions. For adults, we provide the full spectrum of dental services from routine preventive care to advanced treatments like implants, aesthetic procedures, and full mouth rehabilitation. Our team is trained to address the unique needs of patients at different life stages, from teenagers to seniors. Located centrally in Gandhi Nagar, our clinic serves families from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam. With extended hours from 10 AM to 8 PM on weekdays, we accommodate busy schedules of working adults and school-going children, making us the ideal choice for comprehensive family dental care in Vellore.",
    },
    {
      id: "gd8",
      question: "Which are the most family-friendly dental clinics near me in Vellore?",
      answer:
        "Indira Dental Clinic stands out as the most family-friendly dental clinic in Vellore with our comprehensive approach to accommodating families. We offer convenient family appointment scheduling where multiple family members can be seen during the same visit, saving time for busy Vellore families. Our clinic features a welcoming waiting area with amenities for all ages, including a dedicated children's space with toys and entertainment. We provide family discount packages when multiple members receive treatment. Our extended hours (10 AM to 8 PM on weekdays) accommodate school and work schedules, and our central Gandhi Nagar location is easily accessible from all Vellore neighborhoods. Our multilingual staff communicates effectively with family members of all ages, and we emphasize preventive education for the whole family. Dr. Rockson Samuel and our team are experienced in treating patients across all age groups, from toddlers to grandparents, making us the preferred choice for comprehensive family dental care in Vellore.",
    },
  ]

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      <Script id="faq-schema-general-dentistry" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">General Dentistry</h2>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger
                onClick={() => setActiveIndex(activeIndex === faq.id ? null : faq.id)}
                className={cn("text-left font-medium", activeIndex === faq.id ? "text-primary" : "text-gray-800")}
              >
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  )
}
