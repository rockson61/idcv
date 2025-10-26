"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function GeneralFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "g1",
      question: "What makes Indira Dental Clinic the best dental clinic in Vellore?",
      answer:
        "Indira Dental Clinic, led by Dr. Rockson Samuel, is recognized as one of the top dental clinics in Vellore due to our state-of-the-art facilities, experienced dental professionals, and comprehensive range of dental services. We combine modern dental technology with personalized care to ensure each patient receives the highest quality treatment. Our clinic serves patients from across Vellore, including Katpadi, Gandhi Nagar, and surrounding areas, as well as medical tourists visiting Vellore for healthcare.",
    },
    {
      id: "g2",
      question: "How can I schedule an appointment at Indira Dental Clinic in Vellore?",
      answer:
        "Scheduling an appointment at our dental clinic in Vellore is simple. You can call us at 7010650063, email us at rockson68@hotmail.com, or use our online appointment booking system. We offer flexible scheduling options for patients from all areas of Vellore and visitors to the city. Our clinic is conveniently located on Katpadi Main Road, making it accessible for patients from CMC Hospital, VIT University, and other parts of Vellore.",
    },
    {
      id: "g3",
      question: "What dental emergencies does Dr. Rockson Samuel treat in Vellore?",
      answer:
        "Dr. Rockson Samuel at Indira Dental Clinic provides emergency dental care for various conditions including severe toothaches, broken or chipped teeth, knocked-out teeth, lost fillings or crowns, dental abscesses, and injuries to the gums or soft tissues. Our Vellore dental clinic prioritizes emergency cases and strives to provide same-day appointments for patients experiencing dental pain or trauma, whether you're a local resident or visiting Vellore for tourism or medical purposes.",
    },
    {
      id: "g4",
      question: "Is Indira Dental Clinic suitable for dental tourists visiting Vellore?",
      answer:
        "Indira Dental Clinic is an excellent choice for dental tourists visiting Vellore. We cater to patients who come to Vellore for medical tourism, offering world-class dental treatments at affordable prices. Our clinic understands the needs of visitors to Vellore and provides expedited treatment plans when possible. We're conveniently located near major hospitals like CMC Vellore and tourist attractions, making it easy to combine dental care with your visit to this historic city in Tamil Nadu.",
    },
    {
      id: "g5",
      question: "What languages are spoken at your dental clinic in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, our staff speaks multiple languages to accommodate our diverse patient base. We offer services in Tamil, English, Hindi, and Telugu. This multilingual approach helps us better serve both local patients from Vellore and surrounding areas in Tamil Nadu, as well as visitors from other parts of India and international patients who come to Vellore for medical and dental tourism.",
    },
    {
      id: "g6",
      question: "How does Indira Dental Clinic ensure patient safety and hygiene in Vellore?",
      answer:
        "At our Vellore dental clinic, patient safety is our top priority. We follow strict sterilization protocols that meet international standards. All our instruments are thoroughly sterilized, and we use disposable products whenever possible. Our clinic maintains a clean environment with regular sanitization, and our staff follows proper hand hygiene and personal protective equipment protocols. These measures ensure that patients from Vellore and those visiting our city receive care in a safe, hygienic environment.",
    },
    {
      id: "g7",
      question: "What are the operating hours of Indira Dental Clinic in Vellore?",
      answer:
        "Indira Dental Clinic in Vellore operates from 10 AM to 8 PM Monday through Saturday, and from 10 AM to 1:30 PM on Sundays. These extended hours make it convenient for patients from all areas of Vellore, including those working at institutions like VIT University or CMC Hospital, to schedule appointments. We also accommodate emergency cases outside regular hours when possible for both local patients and visitors to Vellore.",
    },
    {
      id: "g8",
      question: "Does Dr. Rockson Samuel treat pediatric dental patients in Vellore?",
      answer:
        "Yes, Dr. Rockson Samuel at Indira Dental Clinic provides comprehensive dental care for children of all ages in Vellore. Our clinic offers a child-friendly environment and specialized pediatric dental services including preventive care, cavity treatment, and education on proper oral hygiene habits. We understand the unique needs of young patients from Vellore and surrounding areas, and our team is trained to make dental visits comfortable and positive experiences for children.",
    },
    {
      id: "g9",
      question: "What payment methods are accepted at Indira Dental Clinic in Vellore?",
      answer:
        "Indira Dental Clinic in Vellore accepts multiple payment methods for your convenience. We take cash, all major credit and debit cards, UPI payments, and bank transfers. For patients from Vellore and visitors requiring extensive dental work, we also offer flexible payment plans. Our transparent pricing policy ensures you know the cost of treatment upfront, making dental care accessible for both local patients and those visiting Vellore for dental tourism.",
    },
    {
      id: "g10",
      question: "How can I reach Indira Dental Clinic from CMC Hospital Vellore?",
      answer:
        "Indira Dental Clinic is conveniently located just 3.5 km from CMC Hospital Vellore. From CMC Hospital, you can take a direct auto-rickshaw or taxi to our clinic at 3rd Floor, 54, Katpadi Main Road, Gandhi Nagar, Vellore. The journey typically takes about 10-15 minutes depending on traffic. For patients visiting CMC Vellore from other cities or countries, our accessible location makes it easy to combine your medical visit with quality dental care during your stay in Vellore.",
    },
    {
      id: "g11",
      question: "What COVID-19 precautions does your dental clinic in Vellore follow?",
      answer:
        "Indira Dental Clinic in Vellore implements comprehensive COVID-19 safety protocols. These include mandatory temperature checks, hand sanitization stations, regular disinfection of surfaces, proper ventilation, and appropriate personal protective equipment for staff. We maintain social distancing in waiting areas and offer staggered appointments to reduce crowding. These measures protect both our local Vellore patients and those traveling to our city for dental or medical care during the pandemic.",
    },
    {
      id: "g12",
      question: "Can tourists visiting Vellore Fort get same-day dental appointments?",
      answer:
        "Yes, tourists visiting Vellore Fort and other attractions can often get same-day appointments at Indira Dental Clinic, especially for emergency dental issues. We understand that visitors to Vellore may have limited time in our historic city and try to accommodate their schedules. Our clinic is approximately 4 km from Vellore Fort, making it convenient to combine dental care with your tourism activities in Vellore. We recommend calling ahead at 7010650063 to check availability.",
    },
    {
      id: "g13",
      question: "Does Indira Dental Clinic provide dental care for international patients in Vellore?",
      answer:
        "Indira Dental Clinic welcomes international patients visiting Vellore. Dr. Rockson Samuel and our team provide world-class dental care that meets international standards at a fraction of the cost compared to many Western countries. We understand the needs of international visitors to Vellore and can arrange expedited treatment plans to accommodate your travel schedule. Our staff speaks English fluently, ensuring clear communication about your dental care while you're in Vellore.",
    },
    {
      id: "g14",
      question: "What amenities are available near Indira Dental Clinic for patients visiting from outside Vellore?",
      answer:
        "Patients visiting Indira Dental Clinic from outside Vellore will find numerous amenities nearby. There are several quality hotels within 1-2 km of our clinic, including Hotel Essence and GRT Regency. Popular restaurants like Darling Residency and Barbeque Nation are within walking distance. For those combining dental care with tourism, attractions like Vellore Fort, Golden Temple, and Science Park are all within 5 km. Major shopping centers like Vellore New Bus Stand Market and CMC Shopping Complex are also easily accessible from our centrally located clinic.",
    },
    {
      id: "g15",
      question: "How does Indira Dental Clinic contribute to dental health awareness in Vellore?",
      answer:
        "Indira Dental Clinic actively promotes dental health awareness throughout Vellore through various community initiatives. We conduct free dental check-up camps in schools and colleges across Vellore, including areas like Katpadi, Sathuvachari, and Bagayam. Our team regularly participates in health fairs and community events to educate Vellore residents about oral hygiene. We also collaborate with local organizations to provide dental education and subsidized treatments for underprivileged communities in Vellore, reinforcing our commitment to improving dental health across the city.",
    },
    {
      id: "g16",
      question: "What makes Vellore a good destination for dental tourism in India?",
      answer:
        "Vellore has emerged as an excellent destination for dental tourism in India due to several factors. The city is home to world-class healthcare facilities like CMC Hospital, which has fostered a culture of medical excellence that extends to dental care. Clinics like Indira Dental Clinic offer high-quality dental treatments at 60-70% lower costs compared to Western countries. Vellore's central location in Tamil Nadu, good connectivity, pleasant climate, and attractions like Vellore Fort and Golden Temple make it an attractive destination for combining dental care with tourism. The city also offers comfortable accommodation options for medical tourists at various price points.",
    },
    {
      id: "g17",
      question: "How can patients from Chennai access dental care at Indira Dental Clinic in Vellore?",
      answer:
        "Patients from Chennai can easily access Indira Dental Clinic in Vellore, which is approximately 140 km away. Direct trains run frequently between Chennai and Vellore, with the journey taking about 2-3 hours. Alternatively, you can drive via NH48, which typically takes 2.5-3 hours. For patients requiring multiple visits, we can schedule appointments to minimize travel and offer teledentistry follow-ups when appropriate. Many Chennai residents choose our Vellore clinic for specialized dental treatments, combining their visit with Vellore's cooler climate and historical attractions.",
    },
    {
      id: "g18",
      question: "What dental technologies does Indira Dental Clinic use that are unique in Vellore?",
      answer:
        "Indira Dental Clinic stands out in Vellore for our advanced dental technologies. We feature digital radiography that reduces radiation exposure by up to 90% compared to traditional X-rays. Our clinic utilizes CAD/CAM technology for same-day crowns and inlays, laser dentistry for minimally invasive procedures, and 3D imaging for precise treatment planning. We're one of the few clinics in Vellore to offer computer-guided implant placement and digital smile design. These technologies ensure that patients from Vellore and those visiting our historic city receive the most advanced dental care available.",
    },
    {
      id: "g19",
      question: "How does Indira Dental Clinic accommodate patients with dental anxiety in Vellore?",
      answer:
        "At Indira Dental Clinic in Vellore, we understand dental anxiety and have developed specific protocols to help nervous patients. We offer a calm, soothing environment with options like noise-canceling headphones and entertainment during treatment. Dr. Rockson Samuel takes extra time to explain procedures thoroughly and answer all questions. For patients with severe anxiety, we provide various sedation options including nitrous oxide (laughing gas) and oral conscious sedation. Our compassionate approach has helped many anxious patients from Vellore and surrounding areas overcome their dental fears.",
    },
    {
      id: "g20",
      question: "What attractions can I visit near Indira Dental Clinic while in Vellore for dental treatment?",
      answer:
        "While visiting Indira Dental Clinic in Vellore for dental treatment, you can explore several nearby attractions. The historic Vellore Fort is just 4 km away, featuring beautiful architecture and the Archaeological Survey of India museum. The stunning Sripuram Golden Temple is approximately 6 km from our clinic. Nature enthusiasts can visit the Amirthi Zoological Park (25 km) or Yelagiri Hills (80 km) for a day trip. Shopping options include CMC Shopping Complex and Vellore New Bus Stand Market. These attractions make Vellore an ideal destination to combine quality dental care with tourism experiences.",
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
      <Script id="faq-schema-general" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">General Questions</h2>

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
