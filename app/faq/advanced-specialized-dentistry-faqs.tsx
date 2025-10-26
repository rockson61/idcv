"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function AdvancedSpecializedDentistryFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "as1",
      question: "Where can I find sleep dentistry (sedation) near me in Vellore?",
      answer:
        "Indira Dental Clinic offers sleep dentistry (dental sedation) in Vellore for patients with dental anxiety or those undergoing complex procedures. We provide several sedation options tailored to patient needs and procedure complexity. Nitrous oxide sedation (₹1,000-₹1,500 per session), commonly called 'laughing gas,' induces mild relaxation while maintaining full consciousness, with effects that dissipate quickly after treatment. Oral conscious sedation (₹2,000-₹3,000) involves taking prescribed medication before your appointment to create moderate relaxation while remaining awake. For more complex procedures or severe anxiety, we coordinate with anesthesiologists for IV sedation at partner facilities. Our sedation protocols include thorough pre-sedation assessment, continuous monitoring during treatment, and detailed post-sedation care instructions. Dr. Rockson Samuel has specialized training in sedation techniques to ensure patient safety and comfort. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with these anxiety-reducing options. Dental sedation is particularly beneficial for patients with severe dental phobia, strong gag reflexes, difficulty getting numb, or those undergoing extensive treatments, making quality dental care accessible to Vellore residents who might otherwise avoid necessary treatment due to fear.",
    },
    {
      id: "as2",
      question: "What are the oral cancer screening methods available in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we provide comprehensive oral cancer screening as part of regular dental check-ups, with no additional charge for basic visual and tactile examination. Our screening protocol includes thorough visual inspection of all oral tissues including lips, cheeks, gums, tongue, palate, and throat, checking for abnormalities like white or red patches, sores that don't heal, lumps, or texture changes. We perform tactile examination, carefully palpating tissues to detect abnormalities beneath the surface. For higher-risk patients or suspicious areas, we offer advanced screening with specialized light-based detection systems (₹1,000-₹1,500) that highlight abnormal tissues that might not be visible to the naked eye. When concerning areas are identified, we provide referrals for biopsy and further evaluation by oral pathologists or specialists. Dr. Rockson Samuel emphasizes regular screenings, as early detection significantly improves treatment outcomes for oral cancer. Located in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with these essential screening services. Given the higher prevalence of oral cancer in India due to tobacco use, betel quid chewing, and other risk factors, these screenings are particularly important for Vellore residents, potentially saving lives through early detection.",
    },
    {
      id: "as3",
      question: "Where can I find treatment for sleep apnea with dental appliances in Vellore?",
      answer:
        "Indira Dental Clinic offers treatment for obstructive sleep apnea using custom dental appliances in Vellore, providing an effective alternative to CPAP therapy for many patients. Dr. Rockson Samuel creates mandibular advancement devices (₹15,000-₹25,000) that reposition the lower jaw slightly forward during sleep, preventing airway collapse and reducing apnea episodes. Our comprehensive approach begins with screening for sleep apnea symptoms and coordination with sleep physicians for proper diagnosis through sleep studies. We take precise digital impressions to create comfortable, custom-fitted appliances that maximize effectiveness while minimizing side effects. Regular follow-up appointments ensure proper fit and function, with adjustments as needed for optimal results. These oral appliances are particularly beneficial for patients with mild to moderate sleep apnea, those who cannot tolerate CPAP therapy, and individuals who travel frequently. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with this specialized treatment. For Vellore residents suffering from sleep apnea symptoms like snoring, daytime fatigue, and interrupted sleep, our dental sleep medicine services offer a comfortable, portable, and effective treatment option that can significantly improve sleep quality and overall health.",
    },
    {
      id: "as4",
      question: "What is the cost of full mouth rehabilitation in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, full mouth rehabilitation costs vary widely based on the specific treatments required, materials used, and case complexity. For comprehensive rehabilitation using crowns and bridges, costs typically range from ₹1,00,000-₹2,50,000 for a full mouth, depending on materials (porcelain-fused-to-metal vs. all-ceramic/zirconia). Rehabilitation involving dental implants ranges from ₹2,50,000-₹4,00,000 for fixed implant-supported prostheses. More economical options using a combination of treatments (selective crowns, partial dentures) typically range from ₹75,000-₹1,50,000. These comprehensive prices include all aspects of treatment from planning through completion, including any necessary preliminary procedures like extractions or periodontal therapy. We offer phased treatment plans that allow the rehabilitation to be completed in stages, making the financial investment more manageable. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with transparent pricing and flexible payment options for these extensive treatments. While representing a significant investment, our full mouth rehabilitation costs are approximately 50-60% lower than equivalent treatments in Western countries while maintaining international quality standards, making Vellore an attractive destination for comprehensive dental reconstruction.",
    },
    {
      id: "as5",
      question: "What are the signs of oral cancer to watch for according to Vellore dentists?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore emphasizes these critical signs of oral cancer that require immediate evaluation: Persistent mouth sores or ulcers that don't heal within 2-3 weeks, particularly common in high-risk individuals who use tobacco products prevalent in Vellore. White or red patches (leukoplakia or erythroplakia) anywhere in the mouth, which may indicate precancerous changes. Unusual lumps, thickening, rough spots, crusts, or small eroded areas in the mouth, lips, or throat. Numbness, pain, or tenderness in any area of the face, mouth, or neck without obvious cause. Difficulty chewing, swallowing, speaking, or moving the jaw or tongue. The sensation of something being caught in the throat that doesn't go away. Swelling that causes dentures to fit poorly or become uncomfortable. Persistent bad breath not explained by oral hygiene issues, dietary factors, or other causes. Unexplained bleeding in the mouth. Dramatic weight loss associated with any of these symptoms. Dr. Samuel recommends regular oral cancer screenings at our Gandhi Nagar clinic, especially for those with risk factors like tobacco use, alcohol consumption, betel quid chewing (common in Tamil Nadu), or previous oral cancer history. Early detection significantly improves treatment outcomes for this serious condition.",
    },
    {
      id: "as6",
      question: "Where can I find treatment for dental trauma and emergencies in Vellore?",
      answer:
        "Indira Dental Clinic provides comprehensive treatment for dental trauma and emergencies in Vellore with our prompt, expert care approach. We offer extended hours (10 AM to 8 PM Monday through Saturday, and 10 AM to 1:30 PM on Sundays) with same-day emergency appointments whenever possible. Our emergency services include treatment for knocked-out teeth (with highest success when treated within 30-60 minutes), broken or chipped teeth requiring immediate repair, severe toothaches indicating infection or pulp damage, lost fillings or crowns that expose sensitive tooth structure, dental abscesses requiring drainage and antibiotics, and soft tissue injuries to lips, cheeks, or gums. Dr. Rockson Samuel has extensive experience in trauma management, employing techniques that maximize the chances of saving injured teeth. Located centrally in Gandhi Nagar, our clinic is easily accessible from all Vellore areas including Katpadi, Sathuvachari, and Bagayam. For after-hours emergencies, we provide an on-call service for existing patients. Our emergency protocols include immediate pain relief, damage assessment, and development of treatment plans for both immediate needs and long-term restoration. For dental emergencies, call us immediately at 7010650063 for guidance and prompt care.",
    },
    {
      id: "as7",
      question: "What is the treatment for teeth grinding and sleep bruxism in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer comprehensive treatment for teeth grinding (bruxism) and sleep bruxism through our multi-faceted approach. Our primary intervention is custom-made night guards (₹3,000-₹5,000) precisely fitted to your teeth to prevent grinding damage and reduce muscle tension. For sleep bruxism specifically, we provide specialized occlusal splints designed for nighttime wear that reposition the jaw slightly to relax muscles and prevent clenching. We offer behavioral therapy recommendations including stress management techniques, as psychological factors often contribute to bruxism. For patients whose grinding is linked to sleep disorders like sleep apnea, we provide sleep assessments and appropriate referrals or treatments including mandibular advancement devices that address both conditions simultaneously. We may recommend physical therapy including jaw exercises and massage techniques to relax muscles and improve function. For severe cases with significant pain, we sometimes prescribe muscle relaxants for short-term relief. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with effective bruxism treatment that not only protects teeth but addresses underlying causes, providing relief from symptoms like jaw pain, headaches, tooth sensitivity, and disrupted sleep for residents throughout Vellore.",
    },
    {
      id: "as8",
      question: "What are the latest dental technologies available in Vellore clinics?",
      answer:
        "Indira Dental Clinic incorporates cutting-edge dental technologies in our Vellore practice to enhance diagnosis, treatment, and patient comfort. We utilize digital radiography that reduces radiation exposure by up to 90% compared to traditional X-rays while providing instant, high-resolution images that can be enhanced for better diagnosis. Our intraoral cameras allow patients to see what we see, improving understanding of dental conditions through magnified images displayed on screen. For restorative procedures, we employ CAD/CAM technology for same-day crowns and restorations in select cases, eliminating the need for temporary restorations and multiple visits. Our advanced rotary endodontic equipment makes root canal treatment faster, more precise, and significantly more comfortable. We use laser technology for select soft tissue procedures, providing more precise treatment with reduced bleeding and faster healing. Our ultrasonic scaling equipment ensures more thorough, comfortable cleanings. Digital smile design software helps visualize cosmetic treatment outcomes before beginning work. Located in Gandhi Nagar, our clinic brings these metropolitan-level technologies to Vellore residents, providing more accurate diagnosis, efficient treatment, and enhanced comfort. We continually invest in new technologies and training to offer the most advanced dental care available in the Vellore region.",
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
      <Script id="faq-schema-advanced-specialized" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Advanced & Specialized Dentistry</h2>

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
