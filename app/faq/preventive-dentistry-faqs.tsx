"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function PreventiveDentistryFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "pv1",
      question: "What are the best preventive dental care services in Vellore?",
      answer:
        "Indira Dental Clinic offers the best preventive dental care services in Vellore with our comprehensive approach to maintaining oral health. Our preventive services include thorough professional cleanings (scaling and polishing) that remove plaque and tartar buildup, preventing decay and gum disease. We provide detailed oral hygiene instruction tailored to each patient's specific needs, demonstrating proper brushing and flossing techniques. Our preventive examinations include oral cancer screenings, checking for early signs of potentially serious conditions. We offer protective dental sealants for children and adults, creating barriers against decay in vulnerable grooves of back teeth. Professional fluoride treatments strengthen enamel and prevent cavities. For patients who grind their teeth, we provide custom nightguards to prevent damage. We create athletic mouthguards for sports enthusiasts to protect against dental injuries. Our preventive approach includes nutritional counseling focused on reducing decay-causing foods and beverages. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with these essential preventive services that help avoid more extensive and expensive treatments later, making us the preferred choice for proactive dental care in Vellore.",
    },
    {
      id: "pv2",
      question: "How often should I visit the dentist for check-ups in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore recommends dental check-up frequency based on your individual risk factors and oral health status. For most patients with good oral health, visits every six months are ideal for professional cleaning, examination, and early problem detection. Patients with higher risk factors may need more frequent visits, typically every 3-4 months, including those with active periodontal (gum) disease, diabetes, compromised immune systems, history of extensive decay or restorative work, tobacco users, and pregnant women experiencing hormonal changes affecting gum health. Children and adolescents should maintain six-month visits to monitor development and provide preventive care like fluoride treatments and sealants. New patients should schedule a comprehensive examination to establish baseline oral health status and determine appropriate recall intervals. Located in Gandhi Nagar, our clinic accommodates patients from all Vellore neighborhoods with flexible scheduling options. Regular preventive visits are more economical in the long run, as they help avoid extensive treatments for advanced conditions. Dr. Samuel emphasizes that consistent check-ups are essential for maintaining optimal oral health and detecting problems when they're smaller and easier to treat.",
    },
    {
      id: "pv3",
      question: "What is included in a dental check-up at Vellore clinics?",
      answer:
        "At Indira Dental Clinic in Vellore, a comprehensive dental check-up (₹500-₹1,000) includes multiple components designed for thorough evaluation and preventive care. We begin with updating your medical and dental history to identify any changes affecting your oral health. Our examination includes checking all teeth for decay, existing restorations, cracks, or other issues using specialized instruments and intraoral cameras when needed. We perform periodontal (gum) assessment to measure gum pocket depths and check for inflammation or recession. Oral cancer screening examines soft tissues including lips, cheeks, tongue, palate, and throat for any suspicious areas. We evaluate your bite, jaw joints, and chewing muscles for proper function and TMJ issues. When necessary, we take digital X-rays to detect problems not visible during clinical examination. We provide professional cleaning (scaling and polishing) to remove plaque and tartar buildup, though extensive cleaning may require a separate appointment. Following the examination, Dr. Rockson Samuel discusses findings, treatment recommendations, and preventive strategies personalized to your needs. Located in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with these thorough check-ups that form the foundation of good oral health.",
    },
    {
      id: "pv4",
      question: "What are the best ways to prevent cavities according to Vellore dentists?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore recommends these comprehensive strategies to prevent cavities: Maintain thorough oral hygiene with brushing twice daily using fluoride toothpaste and a soft-bristled brush, focusing on all tooth surfaces. Clean between teeth daily with floss, interdental brushes, or water flossers to remove plaque from areas your toothbrush can't reach. Visit our Gandhi Nagar clinic every six months for professional cleanings and check-ups to remove tartar buildup and detect early problems. Consider professional fluoride treatments (₹300-₹500) that strengthen enamel and make teeth more resistant to acid attacks. For children and adults with deep grooves in molars, dental sealants (₹500-₹700 per tooth) provide physical barriers against decay. Limit sugary and acidic foods and beverages, particularly between meals, and avoid frequent snacking that keeps teeth under constant acid attack. After consuming acidic foods or drinks, rinse with water rather than brushing immediately to prevent enamel damage. Stay hydrated with water, which helps maintain saliva flow that naturally protects teeth. Consider using antimicrobial mouthwashes to reduce bacteria that cause decay. For high-risk patients, we may recommend prescription-strength fluoride toothpaste or other specialized preventive products.",
    },
    {
      id: "pv5",
      question: "What is the dental cleaning cost in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, dental cleaning costs vary based on the type and extent of cleaning required. Regular prophylactic cleaning (scaling and polishing) for patients with good maintenance and minimal buildup typically costs ₹1,000-₹1,500. For patients with moderate tartar accumulation requiring more extensive scaling, costs range from ₹1,500-₹2,000. Deep cleaning (scaling and root planing) for patients with periodontal disease costs ₹3,000-₹6,000 for full mouth treatment, often performed in quadrants. Specialized cleaning for patients with dental implants or complex restorations may cost ₹1,500-₹2,500. These prices include oral hygiene instruction and basic examination. For new patients, a comprehensive examination with cleaning typically costs ₹1,500-₹2,000. These prices are 20-30% lower than equivalent treatments in metropolitan cities like Chennai or Bangalore. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with transparent pricing and no hidden costs. Regular professional cleanings are a worthwhile investment in preventing more costly treatments for decay and gum disease, making our affordable cleaning services an essential component of maintaining oral health for Vellore residents.",
    },
    {
      id: "pv6",
      question: "What are dental sealants and are they worth it for children in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, dental sealants (₹500-₹700 per tooth) are highly recommended preventive treatments for children, providing excellent value through long-term cavity prevention. These thin, protective coatings are applied to the chewing surfaces of back teeth (molars and premolars), which have deep grooves where decay often begins despite good brushing. The application process is quick, painless, and requires no drilling or anesthesia. The sealant material flows into the grooves and is hardened with a special light, creating a smooth, protective barrier that prevents food particles and bacteria from settling in these vulnerable areas. Sealants can reduce cavity risk in molars by up to 80% and typically last 3-5 years or longer with proper care. They're particularly valuable in Vellore where access to fluoridated water varies, providing additional protection against decay. The cost of sealants is minimal compared to the expense of treating cavities, making them an excellent preventive investment. Dr. Rockson Samuel recommends sealants soon after permanent molars erupt (around ages 6 and 12) before decay can begin. Located in Gandhi Nagar, our clinic serves young patients from all Vellore neighborhoods with this simple, effective preventive treatment that helps establish a foundation for lifelong oral health by protecting teeth during cavity-prone childhood and adolescent years.",
    },
    {
      id: "pv7",
      question: "What are the benefits of fluoride treatment for teeth in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, professional fluoride treatments (₹300-₹500) offer multiple benefits for patients of all ages. Fluoride significantly strengthens tooth enamel by promoting remineralization, making teeth more resistant to acid attacks from plaque bacteria and sugars. It effectively reverses early decay (white spot lesions) before they develop into cavities requiring fillings. Fluoride treatments reduce sensitivity in exposed root surfaces, providing relief for patients with gum recession. They're particularly beneficial in Vellore where water fluoridation is inconsistent, helping compensate for inadequate fluoride intake. The treatment creates an antibacterial environment that inhibits plaque formation and bacterial growth. For children, fluoride applications support developing teeth and establish stronger enamel. Adults with dry mouth conditions benefit from fluoride's protective effects against the increased decay risk associated with reduced saliva. The procedure is quick (taking just minutes), painless, and provides protection that lasts several months. Located centrally in Gandhi Nagar, our clinic serves patients from all Vellore neighborhoods with these effective preventive treatments. For both children and adults in Vellore, professional fluoride applications represent a simple, cost-effective investment in preventing more extensive and expensive dental problems.",
    },
    {
      id: "pv8",
      question: "How can I maintain good oral hygiene at home according to Vellore dentists?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic in Vellore recommends these comprehensive home oral hygiene practices: Brush thoroughly twice daily for two minutes using fluoride toothpaste and a soft-bristled brush, angling bristles 45 degrees toward the gumline and using gentle circular motions. Clean between teeth daily with dental floss, interdental brushes, or water flossers, as toothbrushes can't reach between teeth where decay and gum disease often begin. Clean your tongue daily using a tongue scraper or your toothbrush to remove bacteria that cause bad breath and can redeposit on teeth. Use antimicrobial or fluoride mouthwash as recommended, but not immediately after brushing to avoid washing away concentrated fluoride from toothpaste. Replace your toothbrush every 3-4 months or sooner if bristles are frayed. Maintain a tooth-friendly diet by limiting sugary and acidic foods and beverages, particularly between meals. Stay hydrated with water, which helps maintain saliva flow that naturally protects teeth. If you wear dental appliances like dentures, retainers, or night guards, clean them regularly according to instructions. Consider using additional preventive products like high-fluoride toothpaste if recommended based on your cavity risk. Visit our Gandhi Nagar clinic every six months for professional cleanings and examinations to complement your home care routine.",
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
      <Script id="faq-schema-preventive-dentistry" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Preventive Dentistry</h2>

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
