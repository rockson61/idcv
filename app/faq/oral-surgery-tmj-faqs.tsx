"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function OralSurgeryTMJFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "os1",
      question: "Who is the best oral surgeon near me in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic is recognized as the best oral surgeon in Vellore for dental and maxillofacial procedures. With specialized training in oral surgery and years of experience, Dr. Samuel performs a wide range of surgical procedures with precision and care. His expertise includes complex extractions including impacted wisdom teeth, surgical exposure of impacted canines for orthodontic treatment, pre-prosthetic surgeries to prepare the mouth for dentures, and minor oral pathology procedures. Dr. Samuel employs advanced surgical techniques that minimize trauma and promote faster healing. His comprehensive approach includes thorough pre-operative assessment, effective pain management during and after procedures, and detailed post-operative care instructions. Located in Gandhi Nagar, Dr. Samuel serves patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. His gentle manner combined with surgical precision has earned him a reputation for providing comfortable, successful oral surgical procedures with minimal recovery time, making him the trusted choice for oral surgery needs throughout Vellore.",
    },
    {
      id: "os2",
      question: "What is the wisdom tooth removal cost in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, wisdom tooth removal costs vary based on complexity and impaction status. Simple extractions of erupted wisdom teeth typically range from ₹1,000-₹2,000 per tooth. Surgical extractions of partially impacted wisdom teeth cost between ₹2,000-₹3,500 per tooth. Complex extractions of completely impacted wisdom teeth, requiring more extensive surgery, range from ₹3,500-₹5,000 per tooth. These prices include local anesthesia, the surgical procedure, and immediate post-operative care. For patients requiring sedation for anxiety management, there may be additional charges of ₹1,000-₹2,000. The cost also covers one follow-up visit to ensure proper healing. These prices are 20-30% lower than equivalent procedures in metropolitan cities like Chennai or Bangalore. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with transparent pricing and flexible payment options. Dr. Rockson Samuel's expertise ensures efficient, minimally traumatic extractions that reduce recovery time and complications, making our clinic the preferred choice for wisdom tooth removal in Vellore.",
    },
    {
      id: "os3",
      question: "Where can I find TMJ treatment for jaw pain near me in Vellore?",
      answer:
        "Indira Dental Clinic offers comprehensive TMJ treatment for jaw pain in Vellore through our multi-faceted approach to temporomandibular joint disorders. Dr. Rockson Samuel begins with thorough evaluation including detailed history, clinical examination, and imaging when necessary to determine the specific cause of your TMJ issues. Our treatment options include custom-made occlusal splints/night guards (₹3,000-₹5,000) that reposition the jaw and reduce muscle tension and grinding forces. We provide physical therapy recommendations including specific jaw exercises to strengthen muscles and improve mobility. For patients with stress-related TMJ problems, we offer counseling on stress management techniques and relaxation strategies. When appropriate, we prescribe muscle relaxants and anti-inflammatory medications to reduce pain and inflammation. Our treatment may include occlusal adjustment to correct bite issues contributing to TMJ problems. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with effective TMJ treatment that addresses the root causes of jaw pain rather than just masking symptoms, providing long-term relief for residents throughout Vellore suffering from this often debilitating condition.",
    },
    {
      id: "os4",
      question: "What are the symptoms of TMJ disorder according to Vellore dentists?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore identifies these key symptoms of TMJ disorder: Jaw pain or tenderness, particularly in front of the ear, that may radiate to the face, neck, or shoulders. Clicking, popping, or grating sounds when opening or closing the mouth or chewing, sometimes accompanied by a sensation of the jaw 'catching' or 'locking.' Limited jaw movement or difficulty opening the mouth wide. Facial muscle fatigue or tightness, especially noticeable in the morning. Malocclusion (changes in how the upper and lower teeth fit together). Headaches, particularly in the temples, that may mimic migraines or tension headaches. Ear symptoms including pain, ringing (tinnitus), or a feeling of fullness, often mistaken for ear infections. Dizziness or vertigo in some cases. Neck and shoulder pain or stiffness. Tooth sensitivity or wear from grinding or clenching. If you experience these symptoms, Dr. Samuel recommends a comprehensive evaluation at our Gandhi Nagar clinic to determine if TMJ disorder is the cause and to develop an appropriate treatment plan tailored to your specific condition.",
    },
    {
      id: "os5",
      question: "Where can I get surgical tooth extraction near me in Vellore?",
      answer:
        "Indira Dental Clinic provides expert surgical tooth extraction in Vellore with our comprehensive approach to oral surgery. Dr. Rockson Samuel performs various types of surgical extractions including removal of impacted wisdom teeth, extraction of broken teeth below the gum line, removal of teeth with curved or multiple roots, and extraction of teeth in patients with dense bone. Our surgical protocol includes thorough pre-operative assessment with appropriate imaging, effective local anesthesia with sedation options for anxious patients, precise surgical technique that minimizes trauma to surrounding tissues, and comprehensive post-operative care instructions with appropriate pain management. The cost typically ranges from ₹2,000-₹5,000 depending on complexity, which is more affordable than in metropolitan cities. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods including Katpadi, Sathuvachari, and Bagayam. Dr. Samuel's expertise in surgical extractions ensures efficient procedures with minimal post-operative discomfort and faster healing, making our clinic the preferred choice for complex dental extractions throughout Vellore.",
    },
    {
      id: "os6",
      question: "What is the jaw surgery cost in Vellore for orthognathic treatment?",
      answer:
        "At Indira Dental Clinic in Vellore, orthognathic (jaw) surgery costs vary based on complexity and specific procedure type. For minor procedures like genioplasty (chin surgery), costs typically range from ₹50,000-₹75,000. Single-jaw surgery (either maxillary or mandibular) generally costs between ₹1,00,000-₹1,50,000. More complex double-jaw surgery for severe cases ranges from ₹1,50,000-₹2,50,000. These comprehensive prices include pre-surgical planning, the surgical procedure itself, hospital stay, and immediate post-operative care. The total treatment cost also includes pre-surgical orthodontics (₹30,000-₹40,000) and post-surgical orthodontics (₹20,000-₹30,000) which are essential components of comprehensive orthognathic treatment. While these figures represent significant investments, they are approximately 40-50% lower than equivalent procedures in Western countries. Located centrally in Gandhi Nagar, our clinic coordinates with specialized maxillofacial surgeons and hospital facilities for these complex procedures. For Vellore residents requiring orthognathic surgery to correct severe jaw discrepancies, we provide detailed treatment plans with transparent pricing and potential financing options for these life-changing procedures.",
    },
    {
      id: "os7",
      question: "Where can I find treatment for facial trauma and jaw fractures in Vellore?",
      answer:
        "Indira Dental Clinic provides initial assessment and referral services for facial trauma and jaw fractures in Vellore, working in coordination with specialized maxillofacial surgeons and hospital facilities. Dr. Rockson Samuel offers emergency evaluation of dental and facial injuries, providing immediate care for dental trauma including displaced or knocked-out teeth. For jaw fractures and complex facial trauma, we facilitate referrals to specialized oral and maxillofacial surgeons at partner hospitals in Vellore, including Christian Medical College (CMC) and other facilities with advanced trauma care capabilities. Our role includes initial stabilization, pain management, coordination with specialists, and post-surgical dental rehabilitation after healing. Located centrally in Gandhi Nagar, our clinic serves as an accessible first point of contact for dental and oral injuries. Following treatment of jaw fractures by specialists, we provide essential follow-up care including occlusal adjustments, management of any resulting TMJ issues, and restoration of damaged teeth. For Vellore residents experiencing facial trauma, our clinic offers prompt initial assessment and seamless coordination with the appropriate specialists to ensure comprehensive care for these serious injuries.",
    },
    {
      id: "os8",
      question: "What are the best treatments for teeth grinding (bruxism) available in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer comprehensive treatment for teeth grinding (bruxism) through our multi-faceted approach. Our primary intervention is custom-made night guards/occlusal splints (₹3,000-₹5,000) precisely fitted to your teeth to prevent grinding damage and reduce muscle tension. These are significantly more effective than over-the-counter options. We provide stress management guidance, as psychological factors often contribute to bruxism, including relaxation techniques and referrals for counseling when appropriate. For patients with bite irregularities contributing to grinding, we offer occlusal adjustment to create a more harmonious bite. We may recommend physical therapy including jaw exercises to relax muscles and improve function. For severe cases, we sometimes prescribe muscle relaxants for short-term relief of muscle spasms. Our comprehensive approach includes addressing sleep disorders that may be linked to bruxism, with appropriate referrals when indicated. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with effective bruxism treatment that not only protects teeth but addresses underlying causes, providing relief from symptoms like jaw pain, headaches, and tooth sensitivity for residents throughout Vellore.",
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
      <Script id="faq-schema-oral-surgery-tmj" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Oral Surgery & TMJ</h2>

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
