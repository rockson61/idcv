"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function ConditionsFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "c1",
      question: "What causes tooth decay and how does Dr. Rockson Samuel treat it in Vellore?",
      answer:
        "Tooth decay in Vellore patients is primarily caused by plaque bacteria converting sugars into acids that erode tooth enamel. Contributing factors include poor oral hygiene, frequent snacking on sugary foods, inadequate fluoride exposure, dry mouth conditions, and genetic factors. At Indira Dental Clinic in Vellore, Dr. Rockson Samuel treats tooth decay through a comprehensive approach including removal of decayed tissue, placement of appropriate fillings (composite, glass ionomer, or amalgam), root canal therapy for deep decay, and crowns for extensively damaged teeth. We also provide preventive guidance to help patients from Vellore and surrounding areas avoid future decay.",
    },
    {
      id: "c2",
      question: "How does gum disease develop and what treatments are available in Vellore?",
      answer:
        "Gum disease develops when plaque bacteria accumulate along the gumline, causing inflammation that progresses from gingivitis (early stage) to periodontitis (advanced stage). Risk factors common in Vellore include poor oral hygiene, tobacco use, diabetes, certain medications, hormonal changes, and genetic predisposition. At Indira Dental Clinic in Vellore, treatments include professional dental cleanings for gingivitis, scaling and root planing (deep cleaning) for early periodontitis, and surgical interventions for advanced cases. We also provide antimicrobial treatments and personalized home care instructions to help patients from Vellore and visitors to our city maintain gum health.",
    },
    {
      id: "c3",
      question: "What causes tooth sensitivity and how is it managed at your Vellore clinic?",
      answer:
        "Tooth sensitivity in Vellore patients is commonly caused by exposed dentin due to enamel erosion, gum recession, cracked teeth, recent dental procedures, or teeth grinding. At Indira Dental Clinic, Dr. Rockson Samuel manages sensitivity through a multi-faceted approach including in-office desensitizing treatments, prescription-strength desensitizing toothpastes, fluoride applications to strengthen enamel, dental bonding to cover exposed roots, and gum grafting for severe recession cases. We also provide guidance on dietary modifications and proper brushing techniques to prevent worsening sensitivity, helping patients from Vellore and surrounding areas find relief from this uncomfortable condition.",
    },
    {
      id: "c4",
      question: "How does Dr. Rockson Samuel diagnose and treat cracked teeth in Vellore patients?",
      answer:
        "At Indira Dental Clinic in Vellore, Dr. Rockson Samuel diagnoses cracked teeth through comprehensive examination including visual inspection, dental dye application, bite tests, temperature sensitivity tests, and digital radiography or 3D imaging for detailed visualization. Treatment depends on crack severity and location: minor cracks may require bonding or a filling, moderate cracks often need crowns to prevent propagation, cracks extending into the pulp necessitate root canal therapy followed by a crown, and severely cracked teeth that split to the root may require extraction and replacement. Our precise diagnosis and treatment help patients from Vellore and those visiting our historic city preserve their natural teeth whenever possible.",
    },
    {
      id: "c5",
      question: "What causes bad breath and how can it be treated at Indira Dental Clinic in Vellore?",
      answer:
        "Bad breath (halitosis) in Vellore patients is commonly caused by poor oral hygiene, gum disease, dry mouth, tobacco use, certain foods, medical conditions like diabetes or sinus infections, and digestive issues. At Indira Dental Clinic, Dr. Rockson Samuel treats bad breath through a comprehensive approach including professional dental cleanings to remove bacteria, treatment of underlying gum disease or cavities, tongue cleaning guidance, prescription mouthwashes when needed, and management of dry mouth. We also help identify non-dental causes requiring medical referral. Our thorough approach helps patients from Vellore and surrounding areas address this embarrassing condition effectively.",
    },
    {
      id: "c6",
      question: "How does teeth grinding (bruxism) affect Vellore patients and what solutions are available?",
      answer:
        "Teeth grinding (bruxism) affects many Vellore patients, causing worn enamel, flattened teeth, increased sensitivity, jaw pain, headaches, and disrupted sleep. Common causes include stress, anxiety, sleep disorders, misaligned teeth, and certain medications. At Indira Dental Clinic, Dr. Rockson Samuel provides custom-fitted nightguards to protect teeth during sleep, stress management guidance, and correction of bite problems that may contribute to grinding. For severe cases, we may recommend muscle relaxants or BOTOX® therapy. Our comprehensive approach helps patients from Vellore and those visiting our city for dental tourism protect their teeth from the damaging effects of bruxism.",
    },
    {
      id: "c7",
      question: "What causes tooth discoloration in Vellore patients and how does Indira Dental Clinic treat it?",
      answer:
        "Tooth discoloration in Vellore patients has various causes including consumption of staining substances (tea, coffee, tobacco), aging, certain medications (tetracycline), excessive fluoride exposure during tooth development, and trauma to developing teeth. At Indira Dental Clinic, Dr. Rockson Samuel offers multiple treatment options: professional teeth whitening for extrinsic stains, dental bonding for localized discoloration, porcelain veneers for resistant stains, and crowns for severely discolored teeth. We customize treatments based on discoloration type, severity, and patient preferences, helping residents of Vellore and visitors to our historic city achieve brighter, more confident smiles.",
    },
    {
      id: "c8",
      question: "How does Dr. Rockson Samuel diagnose and treat TMJ disorders in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, Dr. Rockson Samuel diagnoses TMJ disorders through comprehensive evaluation including detailed medical history, physical examination of jaw movement and muscle tenderness, bite analysis, and imaging studies when necessary. Treatment approaches include custom-fitted occlusal splints to reduce teeth grinding and improve jaw alignment, physical therapy exercises to strengthen jaw muscles, medication recommendations for pain and inflammation, and lifestyle modifications to reduce jaw strain. For complex cases, we coordinate with specialists in Vellore or at nearby medical centers like CMC Hospital. Our multi-disciplinary approach helps patients from Vellore and surrounding areas find relief from jaw pain and dysfunction.",
    },
    {
      id: "c9",
      question: "What causes dental abscesses and how are they treated at your Vellore clinic?",
      answer:
        "Dental abscesses in Vellore patients are typically caused by untreated tooth decay, gum disease, or trauma that allows bacteria to infect the tooth pulp or surrounding tissues. At Indira Dental Clinic, Dr. Rockson Samuel treats abscesses through drainage to remove the infection, followed by addressing the underlying cause—either through root canal therapy to save the tooth or extraction for severely damaged teeth. We prescribe antibiotics when necessary and provide pain management. Our emergency dental services ensure that patients from Vellore and visitors experiencing the severe pain of a dental abscess receive prompt treatment to prevent the infection from spreading to other areas of the body.",
    },
    {
      id: "c10",
      question: "How does Indira Dental Clinic address missing teeth for Vellore patients?",
      answer:
        "At Indira Dental Clinic in Vellore, we address missing teeth through several options tailored to individual needs. Dental implants provide the most natural-looking and functioning replacement by integrating with the jawbone. Fixed bridges offer a non-removable solution by anchoring to adjacent teeth. Partial dentures replace multiple missing teeth while preserving remaining natural teeth, and complete dentures restore full arches. For patients visiting Vellore for medical tourism, we can often complete treatments like implant placement and temporary restorations during their stay. Dr. Rockson Samuel evaluates factors like bone density, overall oral health, budget, and timeline to recommend the optimal solution for each patient.",
    },
    {
      id: "c11",
      question: "What causes receding gums in Vellore patients and how does Dr. Rockson Samuel treat this condition?",
      answer:
        "Receding gums in Vellore patients are commonly caused by aggressive brushing techniques, periodontal disease, genetic factors, hormonal changes, tobacco use, teeth grinding, and misaligned teeth. At Indira Dental Clinic, Dr. Rockson Samuel treats gum recession through a comprehensive approach including addressing underlying causes, deep cleaning procedures for gum disease, occlusal adjustments for bite issues, and surgical interventions like gum grafting for severe cases. We also provide guidance on proper brushing techniques and oral hygiene practices to prevent further recession. Our treatments help patients from Vellore and surrounding areas protect their oral health and prevent the tooth sensitivity and aesthetic concerns associated with receding gums.",
    },
    {
      id: "c12",
      question: "How does Dr. Rockson Samuel diagnose and treat oral cancer in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, Dr. Rockson Samuel conducts thorough oral cancer screenings as part of regular dental examinations, looking for abnormal tissues, discolored patches, lumps, or persistent sores. We use advanced visual examination techniques and digital imaging when necessary. If suspicious areas are identified, we arrange for prompt biopsy referrals to pathology services at medical centers like CMC Vellore. While treatment typically involves oncology specialists, we coordinate dental care before, during, and after cancer treatment to manage oral side effects. Our proactive screening approach helps detect oral cancer in early stages when it's most treatable, serving patients from throughout Vellore and surrounding districts.",
    },
    {
      id: "c13",
      question: "What causes dry mouth and how is it managed at Indira Dental Clinic in Vellore?",
      answer:
        "Dry mouth (xerostomia) in Vellore patients is commonly caused by medication side effects, aging, certain medical conditions like diabetes or Sjögren's syndrome, radiation therapy to the head and neck, dehydration, and mouth breathing. At Indira Dental Clinic, Dr. Rockson Samuel manages dry mouth through a comprehensive approach including saliva substitutes and moisturizing products, prescription medications to stimulate saliva production when appropriate, guidance on staying hydrated, sugar-free gum or lozenges to stimulate saliva flow, and preventive dental care to avoid the increased cavity risk associated with dry mouth. Our management strategies help patients from Vellore and visitors to our city improve comfort and protect their oral health.",
    },
    {
      id: "c14",
      question: "How does Indira Dental Clinic treat dental trauma cases in Vellore?",
      answer:
        "Indira Dental Clinic in Vellore treats dental trauma cases with emergency priority. For knocked-out teeth, we provide immediate reimplantation when possible, with splinting to stabilize the tooth. Cracked or fractured teeth are treated based on severity—minor fractures may require bonding, while more severe cases need crowns or root canal therapy. Luxated (displaced) teeth are repositioned and stabilized. Soft tissue injuries are cleaned and sutured when necessary. We offer same-day emergency appointments for trauma cases, serving both Vellore residents and visitors to our city. Our comprehensive approach focuses on preserving natural teeth whenever possible and restoring both function and aesthetics following dental injuries.",
    },
    {
      id: "c15",
      question: "What causes wisdom tooth problems and how does Dr. Rockson Samuel address them in Vellore?",
      answer:
        "Wisdom tooth problems in Vellore patients typically occur due to insufficient jaw space causing impaction, partial eruption leading to infection (pericoronitis), damage to adjacent teeth, development of cysts, and contribution to dental crowding. At Indira Dental Clinic, Dr. Rockson Samuel addresses these issues through comprehensive evaluation using panoramic X-rays, monitoring of asymptomatic wisdom teeth, extraction of problematic teeth under appropriate anesthesia, and management of complications like infection with antibiotics when necessary. Our expertise in wisdom tooth management helps patients from Vellore and surrounding areas avoid the pain and complications associated with problematic third molars.",
    },
    {
      id: "c16",
      question: "How does Indira Dental Clinic treat dental erosion in Vellore patients?",
      answer:
        "At Indira Dental Clinic in Vellore, we treat dental erosion through a comprehensive approach addressing both the condition and its causes. For mild erosion, we apply fluoride treatments and desensitizing agents to strengthen remaining enamel and reduce sensitivity. Moderate erosion may require dental bonding or fillings to restore damaged areas. Severe erosion often necessitates crowns to protect and restore extensively damaged teeth. We also identify and address underlying causes like acidic diet, GERD, eating disorders, or certain medications. Our preventive guidance helps patients from Vellore and those visiting our city for dental tourism protect their teeth from further erosion damage.",
    },
    {
      id: "c17",
      question: "What causes teeth staining in Vellore residents and how does Indira Dental Clinic treat it?",
      answer:
        "Teeth staining in Vellore residents has various causes including consumption of staining foods and beverages (tea, coffee, red wine), tobacco use, aging, certain medications, excessive fluoride exposure during tooth development, and inadequate oral hygiene. At Indira Dental Clinic, Dr. Rockson Samuel offers multiple treatment options: professional in-office whitening for faster results, custom take-home whitening kits for gradual improvement, dental bonding for localized stains, and porcelain veneers for resistant discoloration. We also provide guidance on preventing future staining. Our customized approach helps patients from Vellore and surrounding areas achieve brighter smiles that enhance their confidence and appearance.",
    },
    {
      id: "c18",
      question: "How does Dr. Rockson Samuel diagnose and treat tooth infections in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, Dr. Rockson Samuel diagnoses tooth infections through comprehensive examination including patient symptoms, visual inspection, percussion testing, temperature sensitivity tests, and digital radiography to visualize infection extent. Treatment approaches include root canal therapy to remove infected pulp tissue while preserving the natural tooth, antibiotics to control active infection when necessary, drainage of abscesses to relieve pressure and pain, and extraction with replacement options for severely infected teeth that cannot be saved. Our emergency dental services ensure that patients from Vellore and visitors to our city receive prompt treatment for painful tooth infections, preventing spread to surrounding tissues.",
    },
    {
      id: "c19",
      question: "What causes dental hypersensitivity in Vellore patients and how is it treated?",
      answer:
        "Dental hypersensitivity in Vellore patients is commonly caused by exposed dentin due to enamel erosion from acidic foods and beverages, aggressive brushing, gum recession, teeth grinding, recent dental procedures, and cracked teeth or fillings. At Indira Dental Clinic, Dr. Rockson Samuel treats hypersensitivity through in-office application of desensitizing agents and fluoride varnishes, prescription of desensitizing toothpastes with compounds like potassium nitrate or stannous fluoride, dental bonding to cover exposed roots, and addressing underlying causes like improper brushing techniques or bruxism. Our comprehensive approach helps patients from Vellore and surrounding areas find relief from the sharp, temporary pain associated with sensitive teeth.",
    },
    {
      id: "c20",
      question: "How does Indira Dental Clinic address dental anxiety for Vellore patients?",
      answer:
        "At Indira Dental Clinic in Vellore, we address dental anxiety through a multi-faceted approach tailored to individual needs. We create a calming environment with soothing décor, music, and amenities. Dr. Rockson Samuel practices patient-centered communication, explaining procedures thoroughly and encouraging questions. We offer distraction options like entertainment during treatment and employ gentle, modern techniques that minimize discomfort. For patients with moderate to severe anxiety, we provide sedation options including nitrous oxide and oral conscious sedation. Our compassionate approach has helped many anxious patients from Vellore and those visiting our city for dental tourism overcome their fears and receive necessary dental care comfortably.",
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
      <Script id="faq-schema-conditions" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Dental Conditions</h2>

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
