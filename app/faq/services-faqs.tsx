"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function ServicesFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "s1",
      question: "What root canal treatment options does Dr. Rockson Samuel offer in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore offers comprehensive root canal treatment options using advanced techniques. We provide single-visit RCT for suitable cases, multi-visit treatments for complex cases, and retreatment for failed root canals. Our Vellore clinic uses rotary endodontics for more precise and comfortable procedures, along with digital radiography for accurate diagnosis. We serve patients from all areas of Vellore including Katpadi, Gandhi Nagar, and Sathuvachari, as well as those visiting Vellore for medical tourism.",
    },
    {
      id: "s2",
      question: "What types of dental braces are available at Indira Dental Clinic in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer various types of dental braces to suit different needs and preferences. Options include traditional metal braces, more discreet ceramic braces, lingual braces that attach behind the teeth, and clear aligners like Invisalign. Dr. Rockson Samuel provides personalized orthodontic consultations to determine the most suitable option based on your specific dental alignment needs, lifestyle, and budget. Our comprehensive orthodontic services attract patients from across Vellore and neighboring districts in Tamil Nadu.",
    },
    {
      id: "s3",
      question: "How does the dental implant procedure work at your Vellore clinic?",
      answer:
        "The dental implant procedure at Indira Dental Clinic in Vellore involves several steps. First, Dr. Rockson Samuel conducts a comprehensive evaluation including 3D imaging. The implant placement surgery involves inserting a titanium post into the jawbone under local anesthesia. After a healing period of 3-6 months for osseointegration, we attach an abutment and then the final crown. Our Vellore clinic uses premium implant systems with high success rates, serving patients from throughout Tamil Nadu and visitors to Vellore seeking quality dental implant solutions.",
    },
    {
      id: "s4",
      question: "What types of dental fillings are offered at Indira Dental Clinic in Vellore?",
      answer:
        "Indira Dental Clinic in Vellore offers various types of dental fillings to restore damaged teeth. We provide tooth-colored composite resin fillings that match your natural teeth, glass ionomer fillings that release fluoride, silver amalgam fillings known for durability, and ceramic inlays/onlays for larger restorations. Dr. Rockson Samuel recommends the most appropriate filling material based on the cavity location, extent of decay, aesthetic concerns, and budget. Our quality dental filling services are sought by patients from all areas of Vellore and those visiting our historic city for dental care.",
    },
    {
      id: "s5",
      question: "How does teeth whitening at Indira Dental Clinic compare to other options in Vellore?",
      answer:
        "Teeth whitening at Indira Dental Clinic stands out in Vellore for our professional approach and superior results. Unlike over-the-counter products available in Vellore, our in-office whitening uses higher-concentration bleaching agents with special safeguards for sensitive gums, achieving up to 8 shades lighter in a single visit. We also offer custom take-home whitening kits with professional-grade gels. Dr. Rockson Samuel provides personalized whitening plans based on the cause and extent of discoloration, ensuring optimal results for patients from Vellore and those visiting our city for dental tourism.",
    },
    {
      id: "s6",
      question: "What sedation dentistry options are available at your Vellore dental clinic?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer several sedation dentistry options to ensure comfortable treatment experiences. These include nitrous oxide (laughing gas) for mild anxiety, oral conscious sedation for moderate anxiety, and referral arrangements for IV sedation in complex cases. Dr. Rockson Samuel evaluates each patient's medical history, anxiety level, and procedure complexity to recommend the appropriate sedation method. Our sedation dentistry services help anxious patients from Vellore and surrounding areas receive necessary dental care without stress or discomfort.",
    },
    {
      id: "s7",
      question: "How does Dr. Rockson Samuel perform dental crown procedures in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, Dr. Rockson Samuel performs dental crown procedures using a precise, patient-centered approach. The process typically requires two visits: first, we prepare the tooth by removing damaged portions and taking detailed impressions. We place a temporary crown while your custom crown is fabricated in a trusted dental laboratory. During your second visit to our Vellore clinic, we remove the temporary crown and cement the permanent one, ensuring perfect fit and bite alignment. For suitable cases, we also offer same-day crowns using CAD/CAM technology, particularly beneficial for tourists visiting Vellore.",
    },
    {
      id: "s8",
      question: "What preventive dental services does Indira Dental Clinic offer in Vellore?",
      answer:
        "Indira Dental Clinic in Vellore offers comprehensive preventive dental services including professional dental cleanings, detailed oral examinations, digital X-rays for early detection, fluoride treatments to strengthen enamel, dental sealants for cavity prevention, custom mouthguards for sports and bruxism, and oral cancer screenings. We also provide personalized oral hygiene education tailored to patients of all ages from Vellore and surrounding areas. Our preventive approach emphasizes regular maintenance to avoid costly treatments later, making us a preferred choice for families in Vellore seeking long-term dental health solutions.",
    },
    {
      id: "s9",
      question: "How does Indira Dental Clinic handle pediatric dentistry needs in Vellore?",
      answer:
        "Indira Dental Clinic addresses pediatric dentistry needs in Vellore with a child-friendly approach. Our services include gentle dental check-ups, preventive treatments like fluoride applications and sealants, cavity treatments using minimally invasive techniques, space maintainers for premature tooth loss, and early orthodontic assessments. Dr. Rockson Samuel and our team create positive experiences through age-appropriate explanations, a welcoming environment with distractions like toys and videos, and patience with nervous children. We serve young patients from across Vellore, including areas like Katpadi, Sathuvachari, and Gandhi Nagar.",
    },
    {
      id: "s10",
      question: "What cosmetic dentistry procedures are most popular at your Vellore clinic?",
      answer:
        "The most popular cosmetic dentistry procedures at Indira Dental Clinic in Vellore include porcelain veneers for transforming smile appearance, professional teeth whitening for removing stains, dental bonding for minor repairs, smile makeovers combining multiple treatments, and gum contouring for improved smile aesthetics. Dr. Rockson Samuel is known throughout Vellore for his artistic approach to cosmetic dentistry, creating natural-looking results that enhance facial harmony. Our affordable yet high-quality cosmetic services attract patients from across Tamil Nadu and visitors to Vellore looking to improve their smile during their stay.",
    },
    {
      id: "s11",
      question: "How does Indira Dental Clinic treat gum disease in Vellore patients?",
      answer:
        "At Indira Dental Clinic in Vellore, we treat gum disease through a comprehensive approach. For early-stage gingivitis, we perform professional dental cleanings and provide personalized oral hygiene instructions. For more advanced periodontitis, we offer scaling and root planing (deep cleaning) to remove bacteria below the gumline. Severe cases may require surgical interventions like flap surgery or bone grafting. We also provide antibiotic treatments when necessary. Our periodontal care serves patients from throughout Vellore and neighboring areas, with follow-up programs to maintain gum health after treatment.",
    },
    {
      id: "s12",
      question: "What denture options does Dr. Rockson Samuel provide in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore provides several denture options to suit different needs. We offer conventional complete dentures for patients missing all teeth, partial dentures for those missing some teeth, immediate dentures placed right after extractions, implant-supported dentures for superior stability, and flexible dentures made from comfortable, aesthetic materials. Each denture is custom-crafted for optimal fit, function, and appearance. Our comprehensive denture services attract patients from across Vellore and surrounding districts in Tamil Nadu, as well as medical tourists visiting Vellore for affordable, quality dental care.",
    },
    {
      id: "s13",
      question: "How does Indira Dental Clinic handle dental emergencies for tourists in Vellore?",
      answer:
        "Indira Dental Clinic prioritizes dental emergencies for tourists visiting Vellore with same-day appointments whenever possible. We understand that dental pain can disrupt travel plans, so our team provides prompt care for issues like toothaches, broken teeth, lost fillings, or dental trauma. Dr. Rockson Samuel offers temporary solutions when appropriate to allow tourists to continue enjoying Vellore's attractions like the historic fort and Golden Temple. We maintain extended hours and provide clear post-treatment instructions with phone support, ensuring visitors to Vellore can receive quality emergency dental care without disrupting their travel itinerary.",
    },
    {
      id: "s14",
      question: "What digital dentistry technologies does Indira Dental Clinic use in Vellore?",
      answer:
        "Indira Dental Clinic in Vellore utilizes advanced digital dentistry technologies including digital X-rays that reduce radiation exposure by up to 90%, intraoral scanners for precise digital impressions without uncomfortable traditional materials, CAD/CAM systems for same-day restorations, 3D imaging for comprehensive treatment planning, and digital smile design software to preview cosmetic results. These technologies enhance diagnosis accuracy, treatment precision, and patient comfort. Our digital approach makes us one of the most technologically advanced dental clinics in Vellore, serving patients from throughout Tamil Nadu who seek modern dental care.",
    },
    {
      id: "s15",
      question: "How does wisdom tooth extraction work at Indira Dental Clinic in Vellore?",
      answer:
        "Wisdom tooth extraction at Indira Dental Clinic in Vellore begins with a comprehensive evaluation including panoramic X-rays to assess position and complexity. Dr. Rockson Samuel performs extractions under appropriate anesthesia—local anesthesia for simple cases or sedation for complex impactions. The procedure involves creating a small incision if needed, removing bone tissue covering the tooth, sectioning the tooth if necessary, and carefully extracting it. We provide detailed aftercare instructions and follow-up care to ensure proper healing. Our expertise in wisdom tooth management attracts patients from across Vellore and neighboring districts seeking comfortable, complication-free extractions.",
    },
    {
      id: "s16",
      question: "What smile makeover options are available at your dental clinic in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we offer comprehensive smile makeover options tailored to individual needs. These include porcelain veneers for transforming tooth appearance, professional whitening for brightness, dental bonding for minor repairs, crown lengthening for gummy smiles, orthodontic treatments for alignment, and replacement of old metal fillings with tooth-colored restorations. Dr. Rockson Samuel creates customized smile design plans using digital imaging to preview results. Our affordable yet high-quality smile makeovers attract patients from throughout Vellore and visitors to our historic city who want to enhance their appearance during their stay.",
    },
    {
      id: "s17",
      question: "How does Indira Dental Clinic treat dental sensitivity in Vellore patients?",
      answer:
        "At Indira Dental Clinic in Vellore, we treat dental sensitivity through a comprehensive approach. First, Dr. Rockson Samuel conducts a thorough examination to identify underlying causes like enamel erosion, receding gums, or cracked teeth. Treatment options include in-office application of desensitizing agents, prescription-strength desensitizing toothpaste, fluoride treatments to strengthen enamel, dental bonding to cover exposed roots, and gum grafting for severe recession cases. We also provide guidance on dietary modifications and proper brushing techniques to prevent worsening sensitivity. Our multi-faceted approach helps patients from Vellore and surrounding areas find relief from this common dental concern.",
    },
    {
      id: "s18",
      question: "What TMJ/TMD treatment options does your Vellore dental clinic provide?",
      answer:
        "Indira Dental Clinic in Vellore provides several TMJ/TMD treatment options based on individual diagnosis. We offer custom-fitted occlusal splints and nightguards to reduce teeth grinding and jaw clenching, physical therapy exercises to strengthen jaw muscles, medication recommendations for pain and inflammation, and BOTOX® injections for muscle relaxation in select cases. For complex cases, we coordinate with specialists in Vellore or at nearby medical centers like CMC Hospital. Our comprehensive approach helps patients from Vellore and those visiting our city find relief from jaw pain, headaches, and other TMJ-related symptoms.",
    },
    {
      id: "s19",
      question: "How does laser dentistry at Indira Dental Clinic benefit Vellore patients?",
      answer:
        "Laser dentistry at Indira Dental Clinic offers numerous benefits for Vellore patients. Our advanced dental lasers enable minimally invasive procedures with reduced bleeding, swelling, and post-operative pain. Laser treatments at our Vellore clinic include gum disease therapy with greater precision and comfort, cavity preparation without the drill noise and vibration, soft tissue procedures with faster healing, and teeth whitening with enhanced results. Many procedures require less or no anesthesia, making them ideal for anxious patients. Our laser dentistry services attract patients from throughout Vellore and neighboring areas who seek comfortable, state-of-the-art dental care with reduced recovery time.",
    },
    {
      id: "s20",
      question: "What dental care services does Indira Dental Clinic provide for elderly patients in Vellore?",
      answer:
        "Indira Dental Clinic provides specialized dental care services for elderly patients in Vellore, addressing their unique needs. We offer comprehensive oral health assessments focusing on age-related concerns, management of dry mouth conditions common in older adults, treatment of root surface cavities, periodontal care for gum disease prevention, denture services including repairs and relines, implant solutions for denture stabilization, and coordination with physicians for patients with complex medical histories. Our clinic is wheelchair accessible, and we offer flexible scheduling for elderly patients from all areas of Vellore, including those residing in retirement communities or receiving care at facilities like CMC Hospital Vellore.",
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
      <Script id="faq-schema-services" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Dental Services</h2>

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
