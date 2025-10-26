"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function PricingFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "p1",
      question: "What is the cost of a dental check-up at Indira Dental Clinic in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, a comprehensive dental check-up typically costs between ₹300-₹500, which includes oral examination, consultation with Dr. Rockson Samuel, and treatment planning. This is significantly more affordable than dental check-ups in major metropolitan cities like Chennai or Bangalore. For new patients, we often run promotions that include a complete examination with digital X-rays at a special package rate. We believe in preventive care and making quality dental examinations accessible to all residents of Vellore and visitors to our city, which is why we maintain competitive pricing for initial consultations.",
    },
    {
      id: "p2",
      question: "How much do dental fillings cost at your clinic in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, dental filling costs vary based on the material used and the extent of the cavity. Composite (tooth-colored) fillings typically range from ₹800-₹1,500 per tooth, while glass ionomer fillings range from ₹700-₹1,200. Silver amalgam fillings, known for their durability, cost between ₹600-₹1,000. For larger cavities requiring inlays or onlays, prices range from ₹2,500-₹4,500. These prices are competitive for Vellore and significantly lower than in metropolitan cities, making quality dental restorations accessible to local residents and those visiting Vellore for dental tourism.",
    },
    {
      id: "p3",
      question: "What is the cost of root canal treatment at Indira Dental Clinic in Vellore?",
      answer:
        "Root canal treatment at Indira Dental Clinic in Vellore is priced based on tooth complexity and location. For front teeth (incisors and canines), RCT typically costs ₹3,000-₹4,000. Premolars with two canals range from ₹4,000-₹5,000, while molars with three or more canals range from ₹5,000-₹7,000. These prices include the procedure and temporary filling but exclude the final crown. We offer package deals that combine RCT with crown placement for comprehensive treatment. Our root canal prices are competitive for Vellore and approximately 40-60% lower than equivalent treatments in Western countries, making us an attractive option for international patients visiting Vellore for dental care.",
    },
    {
      id: "p4",
      question: "How much do dental crowns cost at your Vellore clinic?",
      answer:
        "At Indira Dental Clinic in Vellore, dental crown costs vary based on material and customization. Porcelain-fused-to-metal (PFM) crowns range from ₹5,000-₹7,000, offering a balance of strength and aesthetics. All-ceramic or zirconia crowns, which provide superior aesthetics for front teeth, range from ₹8,000-₹12,000. Full metal crowns, suitable for back teeth requiring maximum strength, cost between ₹4,000-₹6,000. These prices are for single crowns and include temporary crowns during fabrication. Our crown prices are competitive for Vellore and significantly lower than in metropolitan cities or Western countries, making quality dental restorations accessible to local residents and medical tourists.",
    },
    {
      id: "p5",
      question: "What is the cost of dental implants at Indira Dental Clinic in Vellore?",
      answer:
        "Dental implant treatment at Indira Dental Clinic in Vellore typically ranges from ₹25,000-₹35,000 for a single tooth implant, including the implant fixture, abutment, and crown. For multiple implants, we offer package pricing with volume discounts. All-on-4 or All-on-6 full arch reconstructions range from ₹1,50,000-₹2,50,000 per arch. These prices reflect the use of premium implant systems with high success rates. Our implant costs are approximately 60-70% lower than equivalent treatments in Western countries while maintaining international quality standards, making Vellore an attractive destination for dental implant tourism.",
    },
    {
      id: "p6",
      question: "How much do braces cost at your dental clinic in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, orthodontic treatment costs vary based on complexity and appliance type. Traditional metal braces typically range from ₹25,000-₹35,000 for a complete treatment. Ceramic braces, which are less visible, range from ₹30,000-₹40,000. Lingual braces (attached behind the teeth) cost between ₹60,000-₹80,000. Clear aligner therapy similar to Invisalign ranges from ₹50,000-₹70,000 depending on case complexity. These prices include all adjustments, retainers, and follow-up visits. Our orthodontic treatment costs are competitive for Vellore and significantly lower than in metropolitan cities, making quality smile correction accessible to local residents and those visiting Vellore for dental care.",
    },
    {
      id: "p7",
      question: "What is the cost of teeth whitening at Indira Dental Clinic in Vellore?",
      answer:
        "Teeth whitening at Indira Dental Clinic in Vellore is offered at competitive rates. In-office professional whitening treatments range from ₹5,000-₹8,000 for a complete session, achieving up to 8 shades lighter in a single visit. Take-home whitening kits with custom-fitted trays and professional-grade gel cost between ₹3,000-₹4,000. We also offer combination packages with both in-office and take-home treatments for optimal, long-lasting results at ₹8,000-₹10,000. These prices are significantly lower than equivalent treatments in metropolitan cities or Western countries, making professional teeth whitening accessible to Vellore residents and visitors to our historic city seeking to enhance their smile.",
    },
    {
      id: "p8",
      question: "How much do dentures cost at your Vellore dental clinic?",
      answer:
        "At Indira Dental Clinic in Vellore, denture costs vary based on type and materials. Conventional complete dentures (full set) range from ₹15,000-₹25,000 per arch. Partial dentures with acrylic base cost between ₹8,000-₹12,000, while flexible partial dentures range from ₹12,000-₹18,000. Cast partial dentures with metal framework, known for better fit and durability, cost between ₹18,000-₹25,000. Implant-supported dentures, which offer superior stability, start from ₹80,000 per arch including implants. These prices are competitive for Vellore and significantly lower than in metropolitan cities, making quality tooth replacement solutions accessible to local residents and those visiting Vellore for dental tourism.",
    },
    {
      id: "p9",
      question: "What is the cost of wisdom tooth extraction at Indira Dental Clinic in Vellore?",
      answer:
        "Wisdom tooth extraction at Indira Dental Clinic in Vellore is priced based on complexity. Simple extractions of erupted wisdom teeth typically cost between ₹1,000-₹2,000 per tooth. Surgical extractions for partially impacted wisdom teeth range from ₹2,500-₹4,000. Complex extractions for completely impacted teeth or those in difficult positions cost between ₹4,000-₹6,000. These prices include local anesthesia, the extraction procedure, and initial post-operative care. For patients requiring all four wisdom teeth to be removed, we offer package pricing with discounts. Our extraction costs are competitive for Vellore and significantly lower than in metropolitan cities, making necessary dental surgery accessible to local residents and visitors.",
    },
    {
      id: "p10",
      question: "How much does a dental cleaning (scaling) cost at your Vellore clinic?",
      answer:
        "At Indira Dental Clinic in Vellore, professional dental cleaning (scaling and polishing) typically costs between ₹1,000-₹2,000 for a standard cleaning. For patients with heavy calculus buildup requiring deep cleaning, the cost ranges from ₹2,000-₹3,000. Full mouth scaling and root planing for periodontal disease treatment is priced between ₹3,000-₹5,000, often performed over multiple sessions. We offer dental cleaning as part of preventive care packages that include examination and fluoride treatment at special rates. Our cleaning prices are competitive for Vellore and significantly lower than in metropolitan cities, making professional oral hygiene care accessible to local residents and those visiting Vellore for dental tourism.",
    },
    {
      id: "p11",
      question: "What payment options does Indira Dental Clinic accept in Vellore?",
      answer:
        "Indira Dental Clinic in Vellore accepts multiple payment options for your convenience. We take cash payments in Indian Rupees, all major credit and debit cards including Visa, MasterCard, and RuPay, and digital payment methods like UPI, Google Pay, PhonePe, and Paytm. For international patients visiting Vellore, we accept major international credit cards and can provide assistance with currency exchange. For extensive treatment plans, we offer flexible payment arrangements allowing you to pay in installments. We provide detailed cost estimates before beginning treatment and transparent billing with no hidden charges, ensuring a hassle-free financial experience for all our patients in Vellore.",
    },
    {
      id: "p12",
      question: "Does Indira Dental Clinic offer dental treatment packages for tourists visiting Vellore?",
      answer:
        "Yes, Indira Dental Clinic offers special dental treatment packages designed for tourists visiting Vellore. These packages include comprehensive examination, necessary treatments, and expedited scheduling to accommodate your travel timeline. For international tourists, we offer all-inclusive packages that combine multiple procedures at discounted rates, such as our 'Smile Makeover Tourism Package' and 'Dental Implant Tourism Package.' We understand that visitors to Vellore have limited time and often coordinate dental care with visits to attractions like Vellore Fort and Golden Temple or medical treatment at CMC Hospital. Our team can help arrange local transportation and recommend accommodation options to make your dental tourism experience in Vellore smooth and convenient.",
    },
    {
      id: "p13",
      question: "How much do porcelain veneers cost at Indira Dental Clinic in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, porcelain veneers typically cost between ₹8,000-₹12,000 per tooth, depending on the complexity of your case and the type of ceramic material used. E-max or lithium disilicate veneers, known for their superior aesthetics and strength, are at the higher end of this range. For multiple veneers, we offer package pricing with volume discounts, such as our 'Smile Makeover Package' for 6-8 veneers. These prices include consultation, preparation, temporary veneers if needed, and the final custom-crafted porcelain veneers. Our veneer costs are competitive for Vellore and significantly lower than in metropolitan cities or Western countries, making aesthetic smile enhancements accessible to local residents and dental tourists.",
    },
    {
      id: "p14",
      question: "What is the cost comparison between dental treatments in Vellore versus major cities?",
      answer:
        "Dental treatment costs at Indira Dental Clinic in Vellore are typically 20-30% lower than equivalent treatments in major Indian cities like Chennai, Bangalore, or Delhi, while maintaining comparable quality. For example, a root canal treatment that costs ₹5,000-₹7,000 in Vellore might cost ₹7,000-₹10,000 in metropolitan cities. Dental implants priced at ₹25,000-₹35,000 in Vellore could cost ₹35,000-₹50,000 in major cities. This cost advantage makes Vellore an attractive destination for dental care, especially when combined with the city's pleasant climate, historical attractions, and renowned medical facilities. Many patients from larger cities choose to combine dental treatment at our Vellore clinic with tourism or medical visits to institutions like CMC Hospital.",
    },
    {
      id: "p15",
      question: "How much do dental X-rays cost at your clinic in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, dental X-ray costs are structured based on type and coverage. Digital periapical X-rays (single tooth views) cost ₹200-₹300 per image. Bitewing X-rays used to detect interproximal cavities cost ₹250-₹350 per image. Panoramic X-rays, which provide a comprehensive view of all teeth, jaws, and surrounding structures, cost ₹800-₹1,000. Cone Beam CT scans for implant planning or complex cases range from ₹2,000-₹3,000. These digital imaging services use low-radiation technology for patient safety. X-rays are often included in treatment packages or initial consultation offers. Our imaging costs are competitive for Vellore and significantly lower than in metropolitan cities.",
    },
    {
      id: "p16",
      question: "Does Indira Dental Clinic offer discounts for senior citizens in Vellore?",
      answer:
        "Yes, Indira Dental Clinic in Vellore offers special considerations for senior citizens. We provide a 10-15% discount on most dental procedures for patients aged 60 and above. Additionally, we offer complimentary consultations and dental check-ups for seniors during certain promotional periods. Our clinic is designed to be senior-friendly with easy access, and we take extra time with elderly patients to ensure their comfort and understanding of treatments. We also offer specialized services addressing common senior dental concerns like dry mouth, denture adjustments, and sensitive teeth. These discounts and considerations make quality dental care more accessible to Vellore's senior population, including those residing in retirement communities or receiving care at facilities like CMC Hospital.",
    },
    {
      id: "p17",
      question: "What is the cost of pediatric dental treatments at Indira Dental Clinic in Vellore?",
      answer:
        "Pediatric dental treatments at Indira Dental Clinic in Vellore are priced to be family-friendly. Dental check-ups for children cost ₹250-₹400. Preventive treatments like fluoride applications range from ₹300-₹500, while dental sealants cost ₹500-₹700 per tooth. Pediatric fillings are priced between ₹700-₹1,200 depending on size and material. Pulp treatments for primary teeth range from ₹1,500-₹2,500. We offer special 'Child Dental Health Packages' that combine preventive and educational services at discounted rates. Our pediatric dental prices are competitive for Vellore and designed to encourage regular dental care from an early age, helping families from Vellore and surrounding areas establish good oral health habits for their children.",
    },
    {
      id: "p18",
      question: "How much does gum disease treatment cost at your Vellore dental clinic?",
      answer:
        "At Indira Dental Clinic in Vellore, gum disease treatment costs vary based on severity and extent. Regular scaling and polishing for mild gingivitis costs ₹1,000-₹2,000. Deep cleaning (scaling and root planing) for early periodontitis ranges from ₹3,000-₹5,000 for full mouth treatment, often performed in quadrants. Localized gum surgeries like gingivectomy or flap surgery cost between ₹2,000-₹4,000 per site. Advanced periodontal treatments including bone grafting range from ₹5,000-₹8,000 per site. We offer periodontal maintenance programs with regular follow-up visits at reduced rates. Our gum treatment prices are competitive for Vellore and significantly lower than in metropolitan cities, making essential periodontal care accessible to local residents and those visiting Vellore for dental tourism.",
    },
    {
      id: "p19",
      question: "What is the cost comparison between dental treatments in Vellore versus Western countries?",
      answer:
        "Dental treatment costs at Indira Dental Clinic in Vellore are typically 60-80% lower than equivalent treatments in Western countries like the USA, UK, Australia, or Canada, while maintaining international quality standards. For example, a dental implant that costs ₹25,000-₹35,000 (approximately $300-$425) in Vellore might cost $3,000-$4,500 in the United States. A porcelain crown priced at ₹8,000-₹12,000 ($100-$150) in Vellore could cost $800-$1,500 in Western countries. This significant cost advantage makes Vellore an attractive destination for dental tourism, especially when combined with the city's cultural attractions, renowned medical facilities like CMC Hospital, and the comprehensive care provided by experienced dentists like Dr. Rockson Samuel.",
    },
    {
      id: "p20",
      question: "Does Indira Dental Clinic offer EMI or financing options for dental treatments in Vellore?",
      answer:
        "Yes, Indira Dental Clinic in Vellore offers flexible financing options for more extensive dental treatments. We provide interest-free installment plans for treatments exceeding ₹10,000, allowing payments to be spread over 3-6 months. For major procedures like full mouth rehabilitation or multiple implants, we offer customized payment schedules aligned with treatment phases. We also facilitate EMI options through tie-ups with select banks and credit cards, and can help process dental insurance claims where applicable. These financing options make comprehensive dental care more accessible to Vellore residents and visitors, ensuring that financial constraints don't prevent patients from receiving necessary treatments. Our front office team provides detailed information about these payment plans during treatment consultations.",
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
      <Script id="faq-schema-pricing" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Pricing & Payment</h2>

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
