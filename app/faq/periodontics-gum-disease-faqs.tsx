"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function PeriodonticsGumDiseaseFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "pg1",
      question: "Who is the best periodontist for gum disease treatment in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic is recognized as the best periodontist for gum disease treatment in Vellore. With specialized training in periodontics, Dr. Samuel provides comprehensive care for all stages of gum disease. His expertise includes non-surgical treatments like scaling and root planing (deep cleaning) for early to moderate periodontitis, using advanced ultrasonic equipment for thorough biofilm removal. For advanced cases, he offers surgical interventions including pocket reduction surgery, gum grafting for receded gums, and regenerative procedures using growth factors to stimulate tissue regeneration. Dr. Samuel emphasizes personalized maintenance programs to prevent disease recurrence, tailored to each patient's specific risk factors. Located in Gandhi Nagar, Dr. Samuel serves patients from across Vellore including Katpadi, Sathuvachari, and Bagayam. His comprehensive approach addresses both the bacterial causes and contributing factors like smoking and diabetes. For Vellore residents concerned about bleeding gums, gum recession, loose teeth, or diagnosed periodontal disease, Dr. Samuel offers expert care that not only treats current problems but helps prevent future progression, preserving natural teeth and supporting overall health.",
    },
    {
      id: "pg2",
      question: "What is the cost of gum disease treatment in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, gum disease treatment costs vary based on disease severity and required interventions. For gingivitis (early gum disease), professional cleaning costs ₹1,000-₹2,000, effectively reversing the condition when combined with improved home care. For early to moderate periodontitis, scaling and root planing (deep cleaning) costs ₹3,000-₹6,000 for full mouth treatment, often performed in quadrants. Localized antibiotic therapy for specific problem areas adds ₹500-₹1,000 per site. For advanced cases requiring surgical intervention, pocket reduction surgery ranges from ₹5,000-₹10,000 per quadrant. Gum grafting for recession defects costs ₹3,000-₹5,000 per tooth. Regenerative procedures using growth factors or bone grafts range from ₹5,000-₹10,000 per site. Maintenance therapy, recommended every 3-4 months for periodontal patients, costs ₹1,000-₹1,500 per visit. These prices are 20-30% lower than equivalent treatments in metropolitan cities. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with transparent pricing and the option of phased treatment to distribute costs over time for extensive cases.",
    },
    {
      id: "pg3",
      question: "What are the best treatments for receding gums available in Vellore?",
      answer:
        "Indira Dental Clinic offers comprehensive treatments for receding gums in Vellore, tailored to the cause and severity of recession. For mild recession caused by aggressive brushing, we provide guidance on proper brushing techniques using soft-bristled brushes and recommend specialized toothpastes for sensitive exposed roots. For moderate recession with adequate attached gingiva, we offer pinhole surgical technique (₹3,000-₹5,000 per tooth), a minimally invasive procedure that repositions existing gum tissue without grafting. For more significant recession or areas with insufficient attached gingiva, we provide connective tissue grafting (₹3,000-₹5,000 per tooth), using tissue from the palate to cover exposed roots and reinforce thin gums. For multiple adjacent recessions, we offer tunnel technique grafting (₹10,000-₹15,000 per segment) that treats several teeth through minimal incisions. All surgical procedures include follow-up care and maintenance recommendations. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with effective recession treatments that not only improve aesthetics but also reduce sensitivity and protect root surfaces from decay and further damage.",
    },
    {
      id: "pg4",
      question: "What are the symptoms of gum disease according to Vellore dentists?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore identifies these key symptoms of gum disease: Bleeding gums during brushing or flossing, often the earliest and most common sign, even without pain. Red, swollen, or tender gums that have lost their firm, pink appearance. Persistent bad breath (halitosis) or bad taste that doesn't improve with brushing. Receding gums that make teeth appear longer, often creating sensitivity to hot and cold. Formation of deep pockets between teeth and gums, measured during dental examinations. Loose or shifting teeth, particularly noticeable when biting. Changes in the way partial dentures fit. Pus between teeth and gums, indicating infection. Pain or discomfort when chewing, particularly in advanced cases. Dr. Samuel emphasizes that early-stage gum disease (gingivitis) often has subtle symptoms that many Vellore residents ignore, allowing progression to more serious periodontitis. Regular check-ups at our Gandhi Nagar clinic can detect these signs before significant damage occurs. If you experience any of these symptoms, prompt evaluation is recommended to prevent progression and preserve your natural teeth.",
    },
    {
      id: "pg5",
      question: "Where can I find laser gum treatment near me in Vellore?",
      answer:
        "Indira Dental Clinic offers advanced laser gum treatment in Vellore, providing state-of-the-art care for various periodontal conditions. Our laser therapy (₹2,000-₹5,000 depending on extent) offers several advantages over traditional methods, including more precise tissue removal with minimal impact on surrounding healthy tissue. The laser effectively eliminates bacteria in periodontal pockets while promoting tissue regeneration. Patients experience significantly less bleeding, swelling, and post-operative discomfort compared to conventional surgery. The procedure often requires minimal or no anesthesia and provides faster healing times. We utilize laser therapy for various gum procedures including gingivectomy (reshaping gum tissue), treatment of periodontal pockets, crown lengthening procedures, and management of gingival pigmentation. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with this advanced technology that represents the cutting edge of periodontal care. For Vellore residents seeking the most comfortable, efficient treatment for gum disease and other periodontal conditions, our laser therapy offers an excellent alternative to traditional surgical approaches with improved outcomes and patient comfort.",
    },
    {
      id: "pg6",
      question: "What are the best home remedies for gum disease recommended by Vellore dentists?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore recommends these home care strategies for supporting gum health, while emphasizing they complement rather than replace professional treatment: Maintain meticulous oral hygiene with twice-daily brushing using soft-bristled brushes and proper technique, focusing on the gumline. Use daily flossing or interdental brushes to clean between teeth where gum disease often begins. Rinse with warm salt water (1/2 teaspoon salt in 8 ounces water) 2-3 times daily to reduce inflammation and kill bacteria. Apply aloe vera gel directly to inflamed gums for its anti-inflammatory and healing properties. Use neem-based toothpastes or mouthwashes, widely available in Vellore, for their antimicrobial properties. Massage gums gently with a mixture of turmeric and water to reduce inflammation, a traditional remedy common in Tamil Nadu. Oil pulling with coconut oil for 15-20 minutes daily may help reduce plaque and gingivitis. Increase vitamin C consumption through citrus fruits and amla (Indian gooseberry) to support gum health. Quit smoking, as tobacco use significantly worsens gum disease. Control blood sugar if diabetic, as diabetes and gum disease have a bidirectional relationship. While these measures help manage symptoms, Dr. Samuel emphasizes that professional treatment at our Gandhi Nagar clinic is essential for addressing established gum disease.",
    },
    {
      id: "pg7",
      question: "Where can I get gum grafting surgery near me in Vellore?",
      answer:
        "Indira Dental Clinic provides expert gum grafting surgery in Vellore with our comprehensive approach to treating gum recession. Dr. Rockson Samuel performs various types of gum grafting procedures tailored to each patient's specific needs. For exposed roots with adequate surrounding gum tissue, he offers connective tissue grafts (₹3,000-₹5,000 per tooth), using tissue from the palate placed under a flap to cover roots and thicken gums. For areas needing both root coverage and increased attached gingiva, free gingival grafts (₹3,000-₹4,000 per site) use palatal tissue placed directly over the recipient site. For multiple adjacent recessions, tunnel technique grafting (₹10,000-₹15,000 per segment) treats several teeth through minimal incisions. In some cases, we use donor tissue (allograft) materials (₹4,000-₹6,000 per site) to avoid a second surgical site. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with these specialized procedures that not only improve aesthetics but also reduce sensitivity, protect root surfaces from decay, and create a more stable periodontal environment to prevent further recession.",
    },
    {
      id: "pg8",
      question: "What is the connection between gum disease and heart health according to Vellore dentists?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore explains the significant connection between gum disease and heart health, an association particularly relevant in India where both periodontal disease and cardiovascular conditions are prevalent. Research indicates that people with periodontal disease have a 2-3 times higher risk of experiencing a heart attack, stroke, or other serious cardiovascular event. The connection works through several mechanisms: bacteria from infected gums can enter the bloodstream and travel to the heart, potentially causing endocarditis or attaching to existing arterial plaques. The chronic inflammation from gum disease triggers an inflammatory response throughout the body, contributing to arterial plaque formation and instability. Both conditions share common risk factors including smoking, diabetes, and age. Dr. Samuel emphasizes that treating gum disease not only improves oral health but may reduce inflammatory markers linked to heart disease. For Vellore residents with heart conditions or risk factors, maintaining periodontal health through regular professional care at our Gandhi Nagar clinic and excellent home hygiene is an important component of overall cardiovascular health management. This understanding highlights the importance of the mouth-body connection in comprehensive healthcare.",
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
      <Script id="faq-schema-periodontics-gum-disease" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Periodontics & Gum Disease</h2>

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
