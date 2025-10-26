"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function PediatricDentistryFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "pd1",
      question: "Who is the best kids dentist near me in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic is recognized as the best kids' dentist in Vellore. With a special focus on pediatric dental care, Dr. Samuel creates positive, comfortable experiences for children of all ages. Our child-friendly approach includes a welcoming environment with a dedicated kids' area featuring toys, books, and entertainment. Dr. Samuel employs gentle, patient communication tailored to each child's age and temperament. He offers comprehensive pediatric services including preventive care (check-ups, cleanings, fluoride treatments, sealants), restorative procedures using minimally invasive techniques, and early orthodontic assessment. Our \"tell-show-do\" approach helps children understand procedures before they happen, reducing anxiety. Located centrally in Gandhi Nagar, Dr. Samuel serves young patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. His expertise in behavior management for anxious children and ability to create positive dental experiences has earned the trust of countless Vellore families. For parents seeking a dentist who combines technical skill with the patience and compassion needed for pediatric care, Dr. Samuel offers an ideal solution with consistently gentle, effective treatment for children.",
    },
    {
      id: "pd2",
      question: "Where can I find painless tooth extraction for kids in Vellore?",
      answer:
        "Indira Dental Clinic offers painless tooth extraction for children in Vellore through our specialized approach to pediatric dental care. Dr. Rockson Samuel employs several techniques to ensure comfort, beginning with age-appropriate explanation using child-friendly language to reduce anxiety. We use topical anesthetic gel before injections to minimize initial discomfort, followed by gentle administration of local anesthesia with the smallest possible needles. For anxious children, we offer sedation options including nitrous oxide (laughing gas) that creates a relaxed state while maintaining consciousness. Our quick, efficient extraction technique minimizes procedure time, and we use distraction methods like ceiling TVs or tablets during treatment. The child-friendly environment with toys and entertainment helps create a positive association with dental visits. Located centrally in Gandhi Nagar, our clinic serves young patients from all Vellore neighborhoods. Parents consistently report that their children experience minimal discomfort and anxiety during extractions at our clinic, making us the trusted choice for pediatric dental procedures in Vellore.",
    },
    {
      id: "pd3",
      question: "Where can I get pediatric root canal treatment near me in Vellore?",
      answer:
        "Indira Dental Clinic provides specialized pediatric root canal treatment (pulp therapy) in Vellore, tailored to children's unique dental needs. Dr. Rockson Samuel offers different types of pulp therapy including pulpotomy (partial removal of infected pulp while maintaining vital tissue in the roots) for primary teeth with limited infection, pulpectomy (complete removal of pulp tissue) for severely infected primary teeth, and conventional root canal therapy for permanent teeth when necessary. Our child-friendly approach includes thorough explanation using age-appropriate language, effective local anesthesia with topical gel application before injection, nitrous oxide sedation for anxious children, and distraction techniques during treatment. We use specialized instruments sized for children's teeth and efficient techniques to minimize chair time. Located centrally in Gandhi Nagar, our clinic serves young patients from all Vellore neighborhoods. Dr. Samuel's expertise in pediatric pulp therapy helps preserve primary teeth until their natural exfoliation time, maintaining proper spacing for permanent teeth and avoiding the complications of premature tooth loss.",
    },
    {
      id: "pd4",
      question: "What should I expect during my baby's first dental visit in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, your baby's first dental visit (recommended by age 1 or within 6 months of first tooth eruption) is designed to be a positive introduction to dental care. The appointment typically lasts 30-45 minutes and begins with a friendly welcome in our child-friendly environment. We'll collect a brief medical and dental history, discussing feeding practices, pacifier use, thumb-sucking habits, and any concerns you may have. Dr. Rockson Samuel will perform a gentle examination, often with your child sitting on your lap in a knee-to-knee position for comfort. He'll check existing teeth for decay, examine gums, jaw, and oral tissues, and assess growth and development. We'll demonstrate proper cleaning techniques specific to your child's age and provide guidance on diet, fluoride needs, and cavity prevention. This visit establishes our clinic as your child's 'dental home' for ongoing care. Located in Gandhi Nagar, we welcome families from all Vellore neighborhoods for this important first step in your child's dental journey.",
    },
    {
      id: "pd5",
      question: "Where can I find the best dental sealants for children in Vellore?",
      answer:
        "Indira Dental Clinic offers the best dental sealants for children in Vellore, providing this essential preventive treatment with meticulous attention to detail. Our dental sealants (₹500-₹700 per tooth) create a protective barrier on the chewing surfaces of back teeth (molars and premolars), which have deep grooves where decay often begins in children. Dr. Rockson Samuel's precise application technique ensures optimal coverage and longevity. The procedure is completely painless, requiring no drilling or anesthesia. We use high-quality resin materials that bond effectively to the tooth surface and are BPA-free for safety. The process includes thorough cleaning of the tooth surface, gentle etching to improve adhesion, careful application of the sealant material, and hardening with a special curing light. We regularly check sealants during routine visits and repair or replace them as needed. Located centrally in Gandhi Nagar, our clinic serves young patients from all Vellore neighborhoods. For parents seeking effective cavity prevention for their children, our dental sealant service provides an excellent investment in long-term dental health.",
    },
    {
      id: "pd6",
      question: "Who is the top pediatric orthodontist near me in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic is recognized as the top pediatric orthodontist in Vellore, specializing in early intervention and interceptive orthodontics for children. He provides comprehensive orthodontic assessment for children starting around age 7, as recommended by the American Association of Orthodontists, to identify developing problems early. Dr. Samuel offers various early treatment options including space maintainers to preserve room for permanent teeth after premature loss of baby teeth, palatal expanders to address crossbites and crowding, habit-breaking appliances for thumb-sucking or tongue-thrusting, and partial braces for specific alignment issues in mixed dentition. His child-friendly approach includes age-appropriate explanations, positive reinforcement, and a comfortable environment that reduces anxiety. Located in Gandhi Nagar, Dr. Samuel serves young patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. His expertise in timing orthodontic interventions appropriately—treating some issues early while monitoring others for comprehensive treatment later—has earned the trust of countless Vellore families seeking optimal orthodontic care for their children.",
    },
    {
      id: "pd7",
      question: "What is the fluoride treatment for kids' teeth available in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer professional fluoride treatments (₹300-₹500) as an essential preventive service for children. This quick, painless procedure provides concentrated fluoride application that strengthens tooth enamel, making it more resistant to acid attacks from plaque bacteria and sugars. For children, we use flavored fluoride varnish that has a pleasant taste and is simply painted onto clean, dry teeth. The varnish hardens quickly upon contact with saliva, allowing children to eat and drink shortly after application (though we recommend avoiding hot beverages and crunchy foods for a few hours). We recommend fluoride treatments every 6 months for most children, though those at higher risk for cavities may benefit from quarterly applications. The treatment is particularly beneficial for children in Vellore areas without optimally fluoridated water. Located centrally in Gandhi Nagar, our clinic serves young patients from all Vellore neighborhoods. This simple preventive measure significantly reduces cavity risk, potentially saving families from more extensive and costly treatments later.",
    },
    {
      id: "pd8",
      question: "How can I prevent cavities in children according to Vellore dentists?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore recommends these comprehensive strategies to prevent childhood cavities: Establish good oral hygiene habits early, helping children brush twice daily with fluoride toothpaste (rice-grain size for under 3, pea-size for older children) and teaching flossing once teeth touch. Schedule regular dental check-ups every six months starting by age 1 at our Gandhi Nagar clinic for professional cleanings, examinations, and preventive treatments. Consider professional fluoride treatments and dental sealants, which reduce cavity risk by 80% in molars. Maintain a tooth-friendly diet by limiting sugary snacks and drinks, especially between meals, and avoiding bedtime bottles with anything but water. For Vellore children, be particularly mindful of local sweet treats like jangiri and laddu that can contribute to decay. Ensure adequate fluoride through appropriate toothpaste and professional applications, especially important in areas of Vellore without optimally fluoridated water. Address habits like prolonged pacifier use or thumb-sucking that can affect dental development. These preventive approaches help Vellore families establish lifelong oral health habits while avoiding the pain and expense of treating advanced decay.",
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
      <Script id="faq-schema-pediatric-dentistry" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Pediatric Dentistry</h2>

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
