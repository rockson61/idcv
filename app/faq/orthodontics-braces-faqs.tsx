"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function OrthodonticsBracesFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "ob1",
      question: "Where can I find affordable braces for adults near me in Vellore?",
      answer:
        "Indira Dental Clinic offers affordable braces for adults in Vellore without compromising on quality or results. Our traditional metal braces typically range from ₹25,000-₹35,000 for a complete treatment, which is 20-30% lower than metropolitan cities. We also offer more aesthetic options including ceramic braces (₹30,000-₹40,000) and lingual braces (₹60,000-₹80,000). To make orthodontic treatment more accessible, we provide flexible payment plans that spread the cost over the treatment duration. Our transparent pricing includes all aspects of treatment—initial consultation, records, the appliance itself, all adjustment visits, and retainers. We also offer periodic promotional discounts for adult orthodontic treatments. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam. Dr. Rockson Samuel's expertise in adult orthodontics ensures efficient treatment with excellent results, making quality smile correction accessible to adult patients throughout Vellore regardless of age.",
    },
    {
      id: "ob2",
      question: "What are the differences between Invisalign vs. traditional braces available in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer both clear aligner therapy (similar to Invisalign) and traditional braces, with recommendations based on your specific needs. Clear aligners (₹50,000-₹70,000) offer superior aesthetics with nearly invisible treatment, removability for eating and cleaning, no dietary restrictions, fewer emergency visits, and typically fewer in-office appointments. However, they require excellent compliance (20-22 hours daily wear), may not be suitable for complex cases, have a higher cost, and can be easily lost. Traditional braces (₹25,000-₹35,000 for metal, ₹30,000-₹40,000 for ceramic) work 24/7 without compliance concerns, can treat virtually all orthodontic issues including complex cases, cost less, and may achieve results faster in certain scenarios. However, they're more visible (though ceramic options are less noticeable), have dietary restrictions, require more careful cleaning, and may cause initial discomfort. Dr. Rockson Samuel provides comprehensive consultations to determine the best option based on your specific case complexity, lifestyle, budget, and aesthetic concerns at our Gandhi Nagar clinic.",
    },
    {
      id: "ob3",
      question: "Who is the best orthodontist for teeth straightening in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic is recognized as the best orthodontist for teeth straightening in Vellore. With specialized training in orthodontics and years of experience, Dr. Samuel offers comprehensive orthodontic solutions for patients of all ages. He provides various treatment options including traditional metal braces, more aesthetic ceramic braces, discreet lingual braces, and clear aligner therapy similar to Invisalign. Dr. Samuel employs modern orthodontic techniques that reduce treatment time and discomfort while achieving excellent results. His approach includes detailed initial assessment using digital imaging, customized treatment planning, and regular monitoring to ensure efficient tooth movement. Located in Gandhi Nagar, Dr. Samuel serves patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. His expertise extends to complex cases including severe crowding, significant bite issues, and adult orthodontics. Dr. Samuel's commitment to continuing education ensures he stays updated with the latest orthodontic advancements. For Vellore residents seeking orthodontic treatment that combines technical excellence with personalized care, Dr. Samuel offers unparalleled expertise with consistently beautiful results.",
    },
    {
      id: "ob4",
      question: "What is the clear aligners price in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, clear aligner therapy (similar to Invisalign) typically costs between ₹50,000-₹70,000 for a complete treatment, depending on case complexity and the number of aligners required. This comprehensive price includes initial consultation and records, customized treatment planning with digital simulation of expected results, all aligners needed for the full treatment, regular monitoring appointments, refinement aligners if needed to perfect results, and retainers to maintain your new smile. For minor corrections involving just a few teeth, we offer limited treatment options starting from ₹30,000. We provide flexible payment plans that spread the cost over the treatment duration. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam. Our clear aligner pricing is significantly more affordable than in metropolitan cities like Chennai or Bangalore, making this aesthetic orthodontic option accessible to more Vellore residents who prefer a discreet alternative to traditional braces.",
    },
    {
      id: "ob5",
      question: "What are the pros and cons of metal braces vs. ceramic braces available in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer both metal and ceramic braces, with recommendations based on your specific needs. Metal braces (₹25,000-₹35,000) are more economical, extremely durable with fewer breakages, slightly smaller in size, potentially faster for complex movements, and available with colorful elastics popular among younger patients. However, they're more visible and may cause initial lip and cheek irritation. Ceramic braces (₹30,000-₹40,000) offer superior aesthetics with tooth-colored or clear brackets that blend with teeth, making them less noticeable in person and in photographs. They're ideal for professionals and adults concerned about appearance during treatment. However, they cost more, may stain if not properly maintained (though elastics are changed at each adjustment), can be slightly larger than metal brackets, and may be somewhat more brittle requiring careful eating habits. Dr. Rockson Samuel provides comprehensive consultations to determine the best option based on your treatment needs, aesthetic concerns, lifestyle, and budget at our Gandhi Nagar clinic serving all Vellore neighborhoods.",
    },
    {
      id: "ob6",
      question: "How can I fix crooked teeth without braces in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer several alternatives to traditional braces for fixing crooked teeth. Clear aligners (₹50,000-₹70,000) provide nearly invisible correction using a series of removable transparent trays, ideal for mild to moderate misalignment. For instant results with minor crowding or spacing, porcelain veneers (₹8,000-₹12,000 per tooth) can create the appearance of straight teeth in just two visits without moving teeth. Dental bonding (₹1,500-₹3,000 per tooth) offers an economical, single-visit solution for minor corrections by adding composite resin to reshape teeth. In some cases, dental crowns can recontour and align teeth that are also damaged or decayed. For select situations, minor tooth recontouring can improve the appearance of slightly crooked teeth by carefully reshaping enamel. Dr. Rockson Samuel provides comprehensive consultations to determine which option best suits your specific condition, aesthetic goals, timeline, and budget. Located in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with these innovative alternatives to traditional orthodontics.",
    },
    {
      id: "ob7",
      question: "What is the invisible braces cost in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, 'invisible' orthodontic options vary in cost depending on the specific type. Clear aligners (similar to Invisalign) typically range from ₹50,000-₹70,000 for full treatment, depending on case complexity. These removable transparent trays offer the most convenient and virtually invisible option. Lingual braces, which attach to the inner surface of teeth, range from ₹60,000-₹80,000, providing completely hidden correction suitable for complex cases. Ceramic braces with tooth-colored brackets offer a more economical aesthetic option at ₹30,000-₹40,000, being less visible than metal while remaining fixed to teeth. These comprehensive prices include initial consultation, all appliances, adjustment visits, and retainers. We offer flexible payment plans for all options. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam. Our pricing for invisible orthodontic options is significantly more affordable than in metropolitan cities, making aesthetic teeth straightening accessible to more Vellore residents concerned about their appearance during treatment.",
    },
    {
      id: "ob8",
      question: "Who offers the best lingual braces treatment near me in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic offers the best lingual braces treatment in Vellore. With specialized training in this advanced orthodontic technique, Dr. Samuel provides truly invisible orthodontic correction by placing custom-made brackets on the inner (tongue) side of your teeth. Our lingual braces treatment (₹60,000-₹80,000) offers complete invisibility from the outside, making them ideal for professionals, public figures, and adults concerned about their appearance during orthodontic treatment. Unlike clear aligners, lingual braces work 24/7 and can address complex orthodontic issues. Dr. Samuel's expertise in this technically demanding procedure ensures comfortable, efficient treatment with excellent results. The process includes detailed 3D imaging, customized bracket fabrication, precise placement, and regular adjustments optimized for lingual treatment. Located in Gandhi Nagar, Dr. Samuel serves patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. For Vellore residents seeking orthodontic correction that remains completely hidden throughout treatment while effectively addressing even complex alignment issues, Dr. Samuel's lingual braces expertise offers an ideal solution with consistently excellent outcomes.",
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
      <Script id="faq-schema-orthodontics-braces" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Orthodontics & Braces</h2>

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
