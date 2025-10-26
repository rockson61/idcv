"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function DentalTreatmentFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "dt1",
      question: "Where can I find affordable root canal treatment near me in Vellore?",
      answer:
        "Indira Dental Clinic offers affordable root canal treatment in Vellore without compromising on quality. Our root canal procedures typically range from ₹3,000-₹7,000 depending on tooth complexity, which is 20-30% lower than metropolitan cities while maintaining high standards. We use advanced rotary endodontic technology for more precise, comfortable, and efficient treatment. Our transparent pricing includes the procedure and temporary filling, with no hidden costs. For patients with financial constraints, we offer flexible payment options including installment plans for extensive treatments. We also provide package deals combining root canal with crown placement for comprehensive care. Located centrally in Gandhi Nagar, our clinic is easily accessible from all Vellore areas including Katpadi, Sathuvachari, and Bagayam. Dr. Rockson Samuel's expertise in endodontic procedures ensures successful outcomes with minimal discomfort, making us the preferred choice for affordable, quality root canal treatment in Vellore.",
    },
    {
      id: "dt2",
      question: "Who is the best dentist for root canal in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic is widely recognized as the best dentist for root canal treatment in Vellore. With extensive experience in endodontic procedures, Dr. Samuel employs advanced rotary endodontic technology that makes treatments faster, more precise, and significantly more comfortable than traditional methods. His expertise in pain management ensures minimal discomfort during and after procedures. Dr. Samuel has successfully performed thousands of root canal treatments with excellent outcomes, earning him a reputation for handling even complex cases involving severely infected teeth or unusual root anatomy. He stays updated with the latest endodontic techniques through continuous education. Located in Gandhi Nagar, Dr. Samuel serves patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. His gentle approach, combined with technical excellence and high success rates, has established him as Vellore's premier choice for root canal treatment, with numerous five-star reviews from satisfied patients throughout the region.",
    },
    {
      id: "dt3",
      question: "What is the cost of tooth filling near me in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, tooth filling costs vary based on material and cavity size. Composite (tooth-colored) fillings range from ₹800-₹1,500 per tooth, providing aesthetic results that blend seamlessly with natural teeth. Glass ionomer fillings cost between ₹700-₹1,200, offering fluoride release that helps prevent future decay. Silver amalgam fillings, known for durability in high-pressure areas, range from ₹600-₹1,000. For larger cavities requiring inlays or onlays, prices range from ₹2,500-₹4,500. These prices are 20-30% lower than equivalent treatments in metropolitan cities like Chennai or Bangalore. We offer transparent pricing with no hidden costs and provide detailed treatment plans with cost estimates before beginning work. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam with affordable, quality dental fillings that restore both function and aesthetics.",
    },
    {
      id: "dt4",
      question: "Where can I get painless wisdom tooth removal in Vellore?",
      answer:
        "For painless wisdom tooth removal in Vellore, Indira Dental Clinic offers advanced techniques that minimize discomfort. Dr. Rockson Samuel employs precise local anesthesia administration, using topical gel before injection to reduce initial needle discomfort. For complex extractions or anxious patients, we provide sedation options including nitrous oxide (laughing gas) and oral conscious sedation. We utilize modern surgical techniques that minimize trauma and reduce recovery time. Our comprehensive approach includes detailed pre-operative assessment using panoramic X-rays, effective pain management during the procedure, and thorough post-operative care instructions with appropriate pain medications. Located centrally in Gandhi Nagar, our clinic is easily accessible from all Vellore areas including Katpadi, Sathuvachari, and Bagayam. Patients consistently report minimal discomfort during and after wisdom tooth extractions at our clinic, making us the preferred choice for painless dental surgeries in Vellore. We also offer emergency appointments for wisdom tooth pain, providing prompt relief when needed.",
    },
    {
      id: "dt5",
      question: "Where can I find the best dental crowns and bridges near me in Vellore?",
      answer:
        "Indira Dental Clinic provides the best dental crowns and bridges in Vellore, combining aesthetic excellence with functional durability. Dr. Rockson Samuel offers various crown options including porcelain-fused-to-metal (PFM) crowns (₹5,000-₹7,000), all-ceramic or zirconia crowns for superior aesthetics (₹8,000-₹12,000), and full metal crowns for maximum strength (₹4,000-₹6,000). For bridges, we provide fixed bridges anchored to natural teeth, cantilever bridges for specific situations, and Maryland bridges that are more conservative. Our comprehensive process includes precise preparation, detailed impressions, custom shade matching for natural appearance, and meticulous fitting for proper bite alignment. We work with trusted dental laboratories that use quality materials for durable restorations. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam. With hundreds of successful crown and bridge placements, we've established ourselves as Vellore's premier destination for restorative dentistry that restores both function and aesthetics.",
    },
    {
      id: "dt6",
      question: "What is the cavity treatment cost in Vellore?",
      answer:
        "Cavity treatment costs at Indira Dental Clinic in Vellore vary based on cavity size and treatment approach. For small to medium cavities, composite (tooth-colored) fillings range from ₹800-₹1,500 per tooth, while glass ionomer fillings cost between ₹700-₹1,200. Silver amalgam fillings range from ₹600-₹1,000. For deeper cavities approaching the pulp, pulp capping procedures cost ₹1,000-₹1,500. Extensive cavities requiring root canal therapy range from ₹3,000-₹7,000 depending on tooth complexity, followed by crown placement (₹5,000-₹12,000 based on material). For severely damaged teeth beyond repair, extraction costs ₹500-₹2,000 depending on complexity. We offer preventive treatments like fluoride applications (₹300-₹500) and sealants (₹500-₹700 per tooth) to prevent cavity formation. These prices are 20-30% lower than equivalent treatments in metropolitan cities. Located in Gandhi Nagar, we serve patients from all Vellore neighborhoods with transparent pricing and flexible payment options for quality cavity treatments.",
    },
    {
      id: "dt7",
      question: "What are some effective toothache relief home remedies recommended by Vellore dentists?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore recommends these temporary toothache relief home remedies until you can visit our clinic: Rinse with warm salt water (1/2 teaspoon salt in 8 ounces warm water) to reduce inflammation and kill bacteria. Apply a cold compress outside your cheek for 20 minutes to reduce swelling and numb the area. Take over-the-counter pain relievers like ibuprofen according to package directions to reduce pain and inflammation. Apply clove oil with a cotton ball to the affected area, as clove oil contains eugenol, a natural anesthetic (widely available in Vellore markets). Avoid very hot, cold, or sweet foods that can trigger pain. Gently floss around the painful tooth to remove any trapped food particles that may be causing pressure. While these remedies can provide temporary relief, Dr. Samuel emphasizes that they don't address the underlying cause of toothache. For permanent relief, visit our Gandhi Nagar clinic promptly, as we offer same-day emergency appointments for Vellore residents experiencing dental pain.",
    },
    {
      id: "dt8",
      question: "Where can I find the best dental cleaning and polishing service in Vellore?",
      answer:
        "Indira Dental Clinic offers the best dental cleaning and polishing services in Vellore with our comprehensive approach to oral hygiene. Our professional cleaning (scaling and polishing) typically costs between ₹1,000-₹2,000, which is more affordable than metropolitan cities while maintaining high standards. Our thorough process includes ultrasonic scaling to remove tartar and plaque, hand scaling for precision cleaning in difficult-to-reach areas, polishing to remove surface stains and create a smooth finish that resists future plaque buildup, and fluoride application when appropriate. We provide personalized oral hygiene education during your appointment, demonstrating proper brushing and flossing techniques specific to your needs. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam. Our dental hygienists are known for their gentle yet effective technique, making the cleaning experience comfortable even for sensitive patients. Regular professional cleanings at our clinic help prevent gum disease and maintain optimal oral health for Vellore residents.",
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
      <Script id="faq-schema-dental-treatment" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Dental Treatment</h2>

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
