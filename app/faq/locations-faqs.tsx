"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function LocationsFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "l1",
      question: "Where is Indira Dental Clinic located in Vellore?",
      answer:
        "Indira Dental Clinic is centrally located at 3rd Floor, 54, Katpadi Main Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006. Our clinic is situated in a prominent area of Vellore that is easily accessible from various parts of the city. We're approximately 3.5 km from CMC Hospital Vellore, 4 km from Vellore Fort, and 2 km from the New Bus Stand. The central location makes our dental clinic convenient for patients from all areas of Vellore as well as visitors to the city seeking quality dental care during their stay.",
    },
    {
      id: "l2",
      question: "How can I reach Indira Dental Clinic from Katpadi Railway Station?",
      answer:
        "Reaching Indira Dental Clinic from Katpadi Railway Station is straightforward. The distance is approximately 5 km, and the journey typically takes 15-20 minutes depending on traffic. You can take an auto-rickshaw or taxi directly from the station to our clinic at 54, Katpadi Main Road, Gandhi Nagar. Alternatively, you can take a city bus from Katpadi to Gandhi Nagar and walk a short distance to our clinic. For patients visiting Vellore by train, our clinic's accessibility from Katpadi Railway Station makes it convenient to schedule dental appointments during your stay in the city.",
    },
    {
      id: "l3",
      question: "Which areas of Vellore does Indira Dental Clinic serve?",
      answer:
        "Indira Dental Clinic serves patients from all areas of Vellore including Gandhi Nagar, Katpadi, Sathuvachari, Bagayam, Kosapet, Saidapet, Thottapalayam, Thorapadi, Konavattam, Dharapadavedu, Shenbakkam, and Rangapuram. Our central location makes us accessible to residents from across the city. We also welcome patients from neighboring towns and districts including Ranipet, Arcot, Walajapet, Gudiyatham, and Ambur. Additionally, we provide dental care to visitors staying in Vellore for tourism or receiving treatment at medical facilities like CMC Hospital, making us a comprehensive dental care provider for the entire region.",
    },
    {
      id: "l4",
      question: "Is Indira Dental Clinic accessible from CMC Hospital Vellore?",
      answer:
        "Yes, Indira Dental Clinic is very accessible from CMC Hospital Vellore, located just 3.5 km away. The journey typically takes 10-15 minutes by auto-rickshaw or taxi. Many patients and their families who visit CMC Hospital from other cities or countries choose our clinic for their dental needs during their stay in Vellore. We understand the scheduling constraints of medical tourists and offer flexible appointment times to accommodate patients receiving treatment at CMC. Our proximity to this renowned medical institution makes us a convenient choice for comprehensive dental care while in Vellore for medical purposes.",
    },
    {
      id: "l5",
      question: "How far is Indira Dental Clinic from Vellore Fort?",
      answer:
        "Indira Dental Clinic is approximately 4 km from the historic Vellore Fort, one of the city's most prominent landmarks. The journey typically takes 10-15 minutes by auto-rickshaw or taxi. This proximity makes it convenient for tourists visiting Vellore Fort to schedule dental appointments during their stay in the city. Many visitors to Vellore combine sightseeing at the fort with dental treatments at our clinic, especially those seeking affordable, quality dental care while exploring the cultural heritage of Vellore. We welcome tourists and provide expedited treatment options when appropriate.",
    },
    {
      id: "l6",
      question: "Is parking available at Indira Dental Clinic in Vellore?",
      answer:
        "Yes, Indira Dental Clinic in Vellore offers convenient parking facilities for our patients. There is dedicated parking space available in front of our building, and additional parking options are available nearby. The parking area is secure and monitored. For patients with mobility challenges, we have drop-off access close to the entrance before parking. Our accessible parking makes visiting our Vellore dental clinic convenient for patients from across the city and those traveling from surrounding areas like Katpadi, Sathuvachari, or neighboring towns for dental treatment.",
    },
    {
      id: "l7",
      question: "How accessible is Indira Dental Clinic for patients with mobility challenges?",
      answer:
        "Indira Dental Clinic in Vellore is designed to be accessible for patients with mobility challenges. Our clinic features a ramp at the entrance, elevator access to our 3rd floor location, wide doorways to accommodate wheelchairs, and an accessible restroom. Our staff is trained to assist patients with mobility issues, and we can make special arrangements for those requiring additional help. We strive to ensure that quality dental care is available to all residents of Vellore and visitors to our city, regardless of physical limitations. Please inform us of any specific accessibility needs when scheduling your appointment.",
    },
    {
      id: "l8",
      question: "How far is Indira Dental Clinic from VIT University Vellore?",
      answer:
        "Indira Dental Clinic is approximately 6 km from VIT (Vellore Institute of Technology) University. The journey typically takes 15-20 minutes by auto-rickshaw, taxi, or personal vehicle. Our clinic provides dental services to many VIT students, faculty, and staff, offering special student packages and flexible appointment times to accommodate academic schedules. We understand the dental needs of the student population in Vellore and provide affordable, quality care in a comfortable environment. Our proximity to VIT makes us a convenient choice for the university community seeking professional dental treatment in Vellore.",
    },
    {
      id: "l9",
      question: "Which hotels near Indira Dental Clinic are recommended for dental tourists visiting Vellore?",
      answer:
        "For dental tourists visiting Vellore, we recommend several quality hotels near Indira Dental Clinic. Hotel Essence (1.5 km) offers comfortable rooms and good amenities. GRT Regency (2 km) provides luxury accommodation with excellent service. Hotel Ritz (1 km) is a budget-friendly option with clean rooms. Hotel Grand Krishna (1.2 km) offers mid-range accommodation with good dining options. For longer stays, Annamalai Residency (1.8 km) provides serviced apartments. All these hotels are within a short auto-rickshaw ride from our clinic, making them convenient choices for patients traveling to Vellore for dental treatment combined with exploring our historic city.",
    },
    {
      id: "l10",
      question: "How can I reach Indira Dental Clinic from Chennai?",
      answer:
        "Reaching Indira Dental Clinic from Chennai is convenient with multiple transportation options. By road, you can drive approximately 140 km via NH48, which typically takes 2.5-3 hours. Regular buses operate between Chennai and Vellore, with the journey taking about 3-4 hours. By train, frequent services run from Chennai Central/Chennai Egmore to Katpadi Junction, taking 2-3 hours, followed by a 15-minute auto-rickshaw ride to our clinic. For patients requiring multiple visits, we can schedule appointments to minimize travel and offer teledentistry follow-ups when appropriate. Many Chennai residents choose our Vellore clinic for specialized dental treatments, combining their visit with Vellore's cooler climate and historical attractions.",
    },
    {
      id: "l11",
      question: "What public transportation options are available to reach Indira Dental Clinic in Vellore?",
      answer:
        "Several public transportation options are available to reach Indira Dental Clinic in Vellore. City buses operate throughout Vellore with routes passing near Gandhi Nagar; the nearest bus stop is approximately 200 meters from our clinic. Auto-rickshaws are readily available throughout Vellore and provide direct transportation to our doorstep. App-based taxi services like Ola also operate in Vellore for convenient, door-to-door service. For patients coming from outside Vellore, the New Bus Stand is 2 km away, and Katpadi Railway Station is 5 km from our clinic, with easy connections via auto-rickshaw or local bus.",
    },
    {
      id: "l12",
      question: "How far is Indira Dental Clinic from the Golden Temple (Sripuram) in Vellore?",
      answer:
        "Indira Dental Clinic is approximately 6 km from the famous Golden Temple (Sripuram) in Vellore. The journey typically takes 15-20 minutes by auto-rickshaw or taxi. This proximity makes it convenient for tourists visiting this popular spiritual attraction to schedule dental appointments during their stay in Vellore. Many visitors combine their pilgrimage to the Golden Temple with dental treatments at our clinic, especially those seeking affordable, quality dental care while exploring Vellore's attractions. We welcome tourists and provide expedited treatment options when appropriate, allowing you to make the most of your visit to our historic city.",
    },
    {
      id: "l13",
      question: "Which areas near Katpadi does Indira Dental Clinic serve?",
      answer:
        "Indira Dental Clinic serves all areas near Katpadi in Vellore, including Katpadi proper, Vallalar Nagar, Kalinjur, Viruthampattu, Senthil Nagar, Rangapuram, and areas surrounding VIT University. Our clinic is approximately 5 km from Katpadi Junction Railway Station, making us accessible for residents of these neighborhoods. We provide comprehensive dental services to patients from the Katpadi region, including families, students, and staff associated with educational institutions in the area. Our central location and extended hours make quality dental care accessible to all residents of the Katpadi area and surrounding localities in Vellore.",
    },
    {
      id: "l14",
      question: "How far is Indira Dental Clinic from Bagayam in Vellore?",
      answer:
        "Indira Dental Clinic is approximately 4 km from Bagayam in Vellore. The journey typically takes 10-15 minutes by auto-rickshaw or personal vehicle. We serve many patients from the Bagayam area, including those associated with CMC Hospital and other institutions located there. Our clinic provides comprehensive dental services to Bagayam residents, from routine check-ups to specialized treatments like root canals, implants, and orthodontics. The convenient distance makes it easy for Bagayam residents to access quality dental care at our clinic, and we offer appointment scheduling that accommodates the working hours of healthcare professionals and other employees from the Bagayam area.",
    },
    {
      id: "l15",
      question: "Which areas of Sathuvachari does Indira Dental Clinic serve?",
      answer:
        "Indira Dental Clinic serves all areas of Sathuvachari in Vellore, including Phase 1, Phase 2, Chitteri, Gandhi Nagar Sathuvachari, Tollgate, and surrounding localities. Our clinic is approximately 7 km from central Sathuvachari, with the journey taking about 15-20 minutes by auto-rickshaw or personal vehicle. We provide comprehensive dental services to Sathuvachari residents, from preventive care to advanced treatments. Many families from this residential area of Vellore choose our clinic for their dental needs due to our reputation for quality care, modern facilities, and the expertise of Dr. Rockson Samuel in treating patients of all ages.",
    },
    {
      id: "l16",
      question: "How far is Indira Dental Clinic from Gandhi Nagar in Vellore?",
      answer:
        "Indira Dental Clinic is located right in Gandhi Nagar, Vellore, at 3rd Floor, 54, Katpadi Main Road. Being situated in Gandhi Nagar itself makes us extremely convenient for residents of this area, with no commute time required. We serve many patients from all parts of Gandhi Nagar including Suthanthira Ponvizha Nagar, Krishna Nagar, and surrounding localities. Our location in this central neighborhood of Vellore makes us easily accessible not only to Gandhi Nagar residents but also to those from adjacent areas. Many families choose our clinic for their regular dental care needs due to our convenient location combined with the comprehensive services offered by Dr. Rockson Samuel.",
    },
    {
      id: "l17",
      question: "Which areas near Thorapadi does Indira Dental Clinic serve?",
      answer:
        "Indira Dental Clinic serves all areas near and within Thorapadi in Vellore, including Thorapadi proper, Velapadi, Chittoor Road areas, Kagithapattarai, and surrounding localities. Our clinic is approximately 5 km from central Thorapadi, with the journey taking about 15 minutes by auto-rickshaw or personal vehicle. We provide comprehensive dental services to Thorapadi residents, from routine check-ups to specialized treatments. Many families from this residential and commercial area of Vellore choose our clinic for their dental needs due to our reputation for quality care and the expertise of Dr. Rockson Samuel in treating dental conditions common among residents of the Thorapadi area.",
    },
    {
      id: "l18",
      question: "How accessible is Indira Dental Clinic from Ambur?",
      answer:
        "Indira Dental Clinic is accessible from Ambur, which is approximately 35 km from Vellore. The journey typically takes about 45-60 minutes by car or bus via NH44. Regular buses operate between Ambur and Vellore, making it convenient for Ambur residents to visit our clinic for specialized dental care. Many patients from Ambur travel to our Vellore clinic for advanced treatments like implants, orthodontics, and full mouth rehabilitation. We understand the travel involved and try to optimize treatment plans to minimize the number of visits required. For Ambur patients requiring extensive work, we offer consolidated appointment scheduling to make the most of each visit to our Vellore clinic.",
    },
    {
      id: "l19",
      question: "What accommodation options are available near Indira Dental Clinic for patients from outside Vellore?",
      answer:
        "For patients visiting Indira Dental Clinic from outside Vellore, several accommodation options are available nearby. Budget options include Hotel Ritz and Sri Balaji Residency within 1 km of our clinic. Mid-range accommodations include Hotel Grand Krishna and Annamalai Residency within 2 km. For premium stays, GRT Regency and Hotel Essence offer excellent amenities within 2 km. For extended stays, service apartments like Treebo Trip Angson and OYO Townhouse provide kitchen facilities. Many medical tourists combine their visit to CMC Hospital with dental treatment at our clinic, and we can recommend accommodations convenient to both locations based on your budget and preferences.",
    },
    {
      id: "l20",
      question: "How can patients from Bangalore access dental care at Indira Dental Clinic in Vellore?",
      answer:
        "Patients from Bangalore can access Indira Dental Clinic in Vellore through several convenient transportation options. By road, Vellore is approximately 215 km from Bangalore via NH44, with the drive taking about 3.5-4 hours. Regular buses operate between Bangalore and Vellore, including overnight services. Trains run from Bangalore to Katpadi Junction, with the journey taking 3-4 hours, followed by a short auto-rickshaw ride to our clinic. For patients requiring multiple visits, we can schedule concentrated treatment sessions to minimize travel and offer teledentistry follow-ups when appropriate. Many Bangalore residents choose our Vellore clinic for specialized dental treatments, combining their visit with Vellore's historical attractions and the quality, affordable dental care provided by Dr. Rockson Samuel.",
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
      <Script id="faq-schema-locations" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Locations & Accessibility</h2>

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
