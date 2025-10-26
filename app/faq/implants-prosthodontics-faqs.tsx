"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function ImplantsProsthodonticsFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "ip1",
      question: "Who is the best dental implants specialist near me in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic is recognized as the best dental implant specialist in Vellore. With specialized training in implantology and years of experience, Dr. Samuel has successfully placed hundreds of implants with excellent success rates. He employs advanced 3D imaging for precise implant planning and utilizes premium implant systems known for their reliability and longevity. Dr. Samuel's comprehensive approach includes thorough pre-operative assessment, meticulous surgical technique, and detailed post-operative care. He offers various implant solutions including single tooth replacements, multiple tooth implants, and full-arch reconstructions like All-on-4. Located in Gandhi Nagar, Dr. Samuel serves patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. His expertise extends to complex cases including bone grafting for patients with insufficient jaw bone density. Dr. Samuel's commitment to continuing education ensures he stays updated with the latest implant technologies and techniques. For Vellore residents seeking implant treatment that combines surgical precision with aesthetic excellence, Dr. Samuel offers unparalleled expertise with consistently successful outcomes.",
    },
    {
      id: "ip2",
      question: "What is the full mouth dental implants cost in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, full mouth dental implant rehabilitation costs vary based on the chosen approach. Traditional full mouth reconstruction using 10-14 implants per arch ranges from ₹2,50,000-₹3,50,000 per arch, including implants, abutments, and prosthetics. More economical All-on-4 or All-on-6 treatments, which use 4-6 strategically placed implants to support a full arch prosthesis, range from ₹1,50,000-₹2,50,000 per arch. These prices reflect the use of premium implant systems with high success rates and quality prosthetics that provide excellent aesthetics and function. The cost includes comprehensive treatment from planning through surgery and final restoration. We offer flexible payment plans for these extensive treatments. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods and surrounding areas. Our full mouth implant costs are approximately 60-70% lower than equivalent treatments in Western countries while maintaining international quality standards, making Vellore an attractive destination for comprehensive implant rehabilitation.",
    },
    {
      id: "ip3",
      question: "What are the pros and cons of single tooth implant vs. bridge in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we provide both single tooth implants and bridges, with recommendations based on your specific situation. Single tooth implants (₹25,000-₹35,000) preserve adjacent healthy teeth, prevent bone loss, offer easier cleaning and maintenance, provide a more natural feel, and typically last longer (potentially a lifetime with proper care). However, they require surgical placement, have a longer treatment timeline (3-6 months), higher initial cost, and may need bone grafting in some cases. Dental bridges (₹15,000-₹25,000 for three-unit bridges) offer advantages including no surgery, faster completion (2-3 weeks), lower initial cost, and no bone grafting requirements. However, they require reducing adjacent healthy teeth, don't prevent bone loss, have more challenging cleaning requirements, typically last 10-15 years, and may place additional stress on supporting teeth. Dr. Rockson Samuel provides comprehensive consultations to determine the best option based on your oral health, budget, timeline, and long-term goals. Both treatments are available to patients from all Vellore neighborhoods at our Gandhi Nagar clinic.",
    },
    {
      id: "ip4",
      question: "What is the All-on-4 dental implants price in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, All-on-4 dental implant treatment typically costs between ₹1,50,000-₹2,00,000 per arch, which is significantly more affordable than in metropolitan cities or Western countries. This comprehensive price includes the surgical placement of four strategic implants, temporary prosthesis for immediate function, and the final full-arch prosthesis made from high-quality materials. The cost covers all aspects of treatment including consultation, 3D imaging for precise planning, surgery, temporary and permanent prosthetics, and follow-up care. For patients requiring both upper and lower arch rehabilitation, we offer package pricing with some cost reduction. We also provide flexible payment plans for this investment in your oral health. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods and surrounding areas. The All-on-4 technique offers a cost-effective solution for full-arch rehabilitation compared to traditional approaches requiring more implants, making this life-changing treatment more accessible to Vellore residents suffering from complete or near-complete tooth loss.",
    },
    {
      id: "ip5",
      question: "Where can I find the cheapest dental implants near me in Vellore without compromising quality?",
      answer:
        "Indira Dental Clinic offers the most affordable quality dental implants in Vellore without compromising on standards or materials. Our single tooth implant treatment typically ranges from ₹25,000-₹35,000, including the implant fixture, abutment, and crown. This pricing is 20-30% lower than equivalent treatments in metropolitan cities like Chennai or Bangalore. We achieve this affordability through efficient clinical protocols and lower overhead costs compared to big-city practices, not by cutting corners on quality. We use reputable implant systems with documented success rates and provide comprehensive care throughout the treatment process. For patients requiring multiple implants, we offer volume discounts that further reduce per-implant costs. We also provide flexible payment options for these investments in your oral health. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods and surrounding areas. Dr. Rockson Samuel's expertise ensures successful outcomes with these affordable implants, making quality tooth replacement accessible to more Vellore residents.",
    },
    {
      id: "ip6",
      question: "What are the differences between zirconia vs. titanium dental implants available in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer both titanium and zirconia dental implants, with recommendations based on your specific needs. Titanium implants (₹25,000-₹35,000 complete treatment) have a long-established track record with decades of research supporting 95%+ success rates. They offer excellent strength and durability, are available in various sizes and configurations for different clinical situations, and are more economical. However, they may cause issues for patients with metal allergies (though rare) and can occasionally show a grayish tint through thin gums. Zirconia implants (₹35,000-₹45,000 complete treatment) are metal-free and ideal for patients with metal sensitivities. They offer superior aesthetics with a white color that mimics natural tooth roots, excellent biocompatibility with soft tissue, and potentially reduced plaque accumulation. However, they have less long-term research, fewer configuration options, higher cost, and may be less suitable for some complex cases. Dr. Rockson Samuel provides comprehensive consultations to determine the best option based on your clinical situation, aesthetic concerns, and budget at our Gandhi Nagar clinic.",
    },
    {
      id: "ip7",
      question: "Who is the best denture specialist near me in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic is recognized as the best denture specialist in Vellore. With extensive experience in prosthodontics, Dr. Samuel creates custom dentures that combine optimal function with natural aesthetics. He offers various denture options including conventional complete dentures (₹15,000-₹25,000 per arch), partial dentures with different framework materials (₹8,000-₹25,000), immediate dentures placed right after extractions, and implant-supported dentures for superior stability (starting from ₹80,000 per arch including implants). Dr. Samuel's meticulous approach includes comprehensive assessment of your oral condition, precise impressions for accurate fit, customized selection of tooth shape and color to complement your facial features, and careful attention to proper bite alignment. Located in Gandhi Nagar, Dr. Samuel serves patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. His expertise in denture fabrication and adjustment ensures comfortable, functional prosthetics that restore confidence and quality of life. For Vellore residents seeking dentures that look natural and function reliably, Dr. Samuel offers unparalleled expertise with consistently excellent outcomes.",
    },
    {
      id: "ip8",
      question: "What are snap-on dentures for missing teeth and are they available in Vellore?",
      answer:
        "Snap-on dentures (implant-retained overdentures) are available at Indira Dental Clinic in Vellore, offering an excellent middle-ground solution between conventional dentures and fixed implant restorations. These innovative prosthetics use 2-4 strategically placed dental implants with special attachments that allow the denture to 'snap' securely into place. The cost typically ranges from ₹80,000-₹1,20,000 per arch including implants and the specialized denture. Snap-on dentures provide significantly improved stability compared to conventional dentures, preventing embarrassing slippage during speaking and eating. They offer better chewing efficiency, allowing you to enjoy a wider variety of foods. The implants help preserve jawbone, maintaining facial structure over time. These dentures remain removable for easy cleaning while providing confidence in social situations. Dr. Rockson Samuel provides comprehensive consultations to determine if snap-on dentures are right for you. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with this advanced tooth replacement option that combines the affordability of dentures with many benefits of dental implants.",
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
      <Script id="faq-schema-implants-prosthodontics" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Implants & Prosthodontics</h2>

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
