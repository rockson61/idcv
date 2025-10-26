"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function CosmeticDentistryFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "cd1",
      question: "Where can I get a Hollywood smile makeover near me in Vellore?",
      answer:
        "For a Hollywood smile makeover in Vellore, Indira Dental Clinic offers comprehensive aesthetic transformations tailored to Indian facial features and preferences. Dr. Rockson Samuel creates customized smile designs considering your facial proportions, skin tone, and personal aesthetic goals. Our smile makeovers combine multiple treatments including porcelain veneers (₹8,000-₹12,000 per tooth), professional teeth whitening (₹5,000-₹8,000), cosmetic bonding for minor imperfections (₹1,500-₹3,000 per tooth), and gum contouring when needed (₹2,000-₹4,000). We utilize digital smile design technology to preview your results before treatment begins. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam. Our smile makeovers have transformed the confidence and appearance of numerous patients throughout Vellore, with results that look natural yet dramatically improved. We offer flexible payment options for these comprehensive treatments, making Hollywood-quality smiles accessible to Vellore residents.",
    },
    {
      id: "cd2",
      question: "Where can I find affordable teeth whitening services in Vellore?",
      answer:
        "Indira Dental Clinic offers affordable teeth whitening services in Vellore with options to suit different budgets and preferences. Our in-office professional whitening treatments range from ₹5,000-₹8,000, achieving up to 8 shades lighter in a single visit using high-concentration bleaching agents with special gum protection. For a more economical option, our take-home whitening kits with custom-fitted trays and professional-grade gel cost between ₹3,000-₹4,000, providing gradual whitening over 1-2 weeks. We also offer combination packages with both in-office and take-home treatments for optimal, long-lasting results at ₹8,000-₹10,000. These prices are significantly lower than equivalent treatments in metropolitan cities. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam. Dr. Rockson Samuel provides personalized whitening plans based on the cause and extent of your discoloration, ensuring safe, effective results that enhance your smile while maintaining dental health.",
    },
    {
      id: "cd3",
      question: "What is the laser teeth whitening cost in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, laser teeth whitening costs between ₹8,000-₹12,000 for a complete treatment, which is significantly more affordable than in metropolitan cities like Chennai or Bangalore. Our advanced laser whitening procedure uses light-activated bleaching agents that provide dramatic results in just 60-90 minutes, with teeth becoming 5-8 shades lighter in a single session. The procedure includes dental cleaning before whitening, application of professional-grade whitening gel, activation with specialized laser light, and fluoride treatment afterward to reduce sensitivity. We also provide post-whitening care instructions and maintenance recommendations to prolong results. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam. The laser whitening treatment is ideal for patients seeking immediate results for special occasions or those with busy schedules who prefer a single-visit solution. We also offer combination packages with take-home maintenance kits for extended results, making our laser teeth whitening service the most advanced and efficient option for Vellore residents seeking a brighter smile.",
    },
    {
      id: "cd4",
      question: "Who is the best cosmetic dentist for smile design in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic is recognized as the best cosmetic dentist for smile design in Vellore. With specialized training in aesthetic dentistry, Dr. Samuel combines artistic vision with technical expertise to create customized smile transformations. He utilizes digital smile design technology to preview results before treatment begins, ensuring patient satisfaction. Dr. Samuel's comprehensive approach considers facial proportions, skin tone, lip line, and personal preferences to create harmonious, natural-looking results. His expertise spans the full range of cosmetic procedures including porcelain veneers, teeth whitening, cosmetic bonding, gum contouring, and full smile makeovers. Located in Gandhi Nagar, Dr. Samuel serves patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. His meticulous attention to detail and commitment to aesthetic excellence have earned him a reputation for creating stunning smile transformations. Numerous before-and-after cases showcase his ability to address various cosmetic concerns, from discoloration and gaps to misalignment and worn teeth, making him Vellore's premier choice for smile design.",
    },
    {
      id: "cd5",
      question: "What are the dental veneers before and after results like in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, dental veneer before-and-after results show remarkable transformations addressing multiple aesthetic concerns simultaneously. Patients with discolored teeth resistant to whitening experience dramatic brightening, achieving the ideal shade that complements their complexion. Cases of chipped or worn teeth show restoration of proper length and shape, creating a more youthful appearance. Patients with minor misalignments or gaps see instant correction without the need for orthodontics, often called 'instant orthodontics.' Those with misshapen or disproportionate teeth gain perfectly contoured, harmonious smiles. Our veneer results maintain a natural appearance rather than an artificial 'too perfect' look, thanks to Dr. Rockson Samuel's artistic approach and high-quality materials. The transformation extends beyond aesthetics, with many patients reporting increased confidence and improved social interactions. Located in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with veneer procedures that typically require just 2-3 visits to complete, providing efficient, dramatic smile enhancements for Vellore residents.",
    },
    {
      id: "cd6",
      question: "What's better for my teeth - Lumineers vs. Veneers in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer both traditional porcelain veneers and Lumineers, with recommendations based on your specific needs. Traditional porcelain veneers (₹8,000-₹12,000 per tooth) require removing a thin layer of enamel but offer superior aesthetics for significant color changes and can mask severe discoloration. They provide better control over shape and contour for major smile transformations and typically last 10-15 years with proper care. Lumineers (₹10,000-₹15,000 per tooth) are ultra-thin and often require minimal or no enamel removal, making them reversible in some cases. They're ideal for minor cosmetic enhancements and patients concerned about enamel removal. However, they may appear slightly bulkier than traditional veneers and don't mask severe discoloration as effectively. Dr. Rockson Samuel provides comprehensive consultations to determine which option best suits your specific situation, considering factors like the extent of cosmetic correction needed, tooth condition, and long-term goals. Both options are available to patients from all Vellore neighborhoods at our Gandhi Nagar clinic.",
    },
    {
      id: "cd7",
      question: "Who is the best composite bonding dentist near me in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic is recognized as the best composite bonding dentist in Vellore. With exceptional artistic skill and attention to detail, Dr. Samuel performs precise composite bonding procedures (₹1,500-₹3,000 per tooth) that address various aesthetic concerns. His expertise allows for seamless color matching that blends perfectly with natural teeth, creating invisible restorations. Dr. Samuel excels in shaping composite material to correct chipped teeth, close small gaps, lengthen worn teeth, and mask discoloration while maintaining natural tooth anatomy. His conservative approach preserves maximum healthy tooth structure, often completing treatments in a single visit without anesthesia. Located in Gandhi Nagar, Dr. Samuel serves patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. His composite bonding work is distinguished by its durability and aesthetic excellence, with proper finishing and polishing techniques that resist staining and maintain luster. For Vellore residents seeking affordable, immediate smile enhancements with minimal tooth alteration, Dr. Samuel's composite bonding expertise offers an ideal solution with consistently excellent results.",
    },
    {
      id: "cd8",
      question: "How can I get perfect smile dentistry like celebrities in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, you can achieve a celebrity-worthy smile through our comprehensive approach to aesthetic dentistry. Dr. Rockson Samuel creates customized smile makeovers beginning with detailed consultation and analysis of your facial proportions, skin tone, and personal preferences. We utilize digital smile design technology to preview your results before treatment begins. Our celebrity-inspired smile transformations may include porcelain veneers (₹8,000-₹12,000 per tooth) for dramatic shape and color improvements, professional teeth whitening (₹5,000-₹8,000) for brilliant brightness, cosmetic bonding (₹1,500-₹3,000 per tooth) for minor enhancements, and gum contouring when needed to create ideal tooth proportions. For alignment issues, we offer discreet orthodontic options including clear aligners. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with smile makeover procedures that rival those available in metropolitan cities but at more accessible prices. Our attention to detail and commitment to natural-looking results ensure your celebrity smile enhances your appearance while still looking authentically yours.",
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
      <Script id="faq-schema-cosmetic-dentistry" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Cosmetic Dentistry</h2>

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
