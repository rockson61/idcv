"use client"

import { useState } from "react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { cn } from "@/lib/utils"
import Script from "next/script"

export function LocationSpecificFAQs() {
  const [activeIndex, setActiveIndex] = useState<string | null>(null)

  const faqs = [
    {
      id: "ls1",
      question: "Where is the best dental clinic in Vellore located?",
      answer:
        "Indira Dental Clinic, recognized as the best dental clinic in Vellore, is strategically located on the 3rd Floor, 54, Katpadi Main Road, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006. This central location provides easy accessibility from all major areas of Vellore. The clinic is approximately 3 km from Vellore Cantonment Railway Station and 2 km from the Old Bus Stand, making it convenient for patients using public transportation. For those coming from CMC Hospital, we're just a 10-minute drive away. Patients from Katpadi can reach us in about 15 minutes, while those from Sathuvachari and Bagayam areas can typically arrive within 20-25 minutes. Our Gandhi Nagar location places us in a well-established residential and commercial area with good parking facilities nearby. The building is easily identifiable with prominent signage, and the third-floor location offers a quiet, peaceful environment away from street noise. For precise directions, patients can call us at 7010650063, and our staff will guide them to our location. Our central positioning makes quality dental care accessible to residents from all Vellore neighborhoods.",
    },
    {
      id: "ls2",
      question: "What are the best dental clinics near Katpadi, Vellore?",
      answer:
        "Indira Dental Clinic stands out as the best dental clinic serving the Katpadi area of Vellore, located just 15 minutes away on Katpadi Main Road in Gandhi Nagar. Our proximity to Katpadi makes us the preferred choice for residents of this growing neighborhood and for patients arriving via Katpadi Railway Station. Led by Dr. Rockson Samuel, our clinic offers comprehensive dental services including preventive care, restorative treatments, cosmetic procedures, orthodontics, implants, and emergency services. Our modern facility features state-of-the-art equipment including digital radiography, rotary endodontic technology, and advanced sterilization protocols ensuring the highest standards of care and safety. We maintain extended hours (10 AM to 8 PM on weekdays) to accommodate the busy schedules of Katpadi residents, including those working at the numerous educational institutions and companies in the area. Our multilingual staff communicates effectively in Tamil, English, and Hindi, serving Katpadi's diverse population including students, professionals, and families. With hundreds of positive reviews from satisfied Katpadi patients, our reputation for quality care, transparent pricing, and comfortable treatment experience makes us the top dental choice for this important Vellore neighborhood.",
    },
    {
      id: "ls3",
      question: "Which dental clinic in Vellore Gandhi Nagar has the best reviews?",
      answer:
        "Indira Dental Clinic has earned the best reviews among dental clinics in Vellore's Gandhi Nagar area, with hundreds of 5-star ratings across Google, Practo, and other platforms. Patients consistently praise Dr. Rockson Samuel's expertise and gentle approach, with many mentioning their painless experience even during complex procedures like root canals and extractions. Reviews frequently highlight our comprehensive care approach, where treatment plans address both immediate concerns and long-term oral health. Patients appreciate our transparent pricing with no hidden costs and the detailed explanations provided before procedures. Our modern, hygienic facility receives numerous positive comments, with patients noting the clean environment and advanced technology. The friendly, professional staff earns praise for creating a welcoming atmosphere and efficiently handling appointments. Many reviews mention our convenient Gandhi Nagar location and extended hours that accommodate busy schedules. Numerous testimonials come from long-term patients who have been visiting for years and from families who trust us with care for multiple generations. These consistently excellent reviews reflect our commitment to providing exceptional dental care to Gandhi Nagar residents and patients from throughout Vellore.",
    },
    {
      id: "ls4",
      question: "How do I get to Indira Dental Clinic from Vellore Fort?",
      answer:
        "To reach Indira Dental Clinic from Vellore Fort, you have several convenient transportation options. By car or auto-rickshaw, the journey takes approximately 10-15 minutes (3.5 km) via Anna Salai and Arcot Road. From the Fort, head southeast on Anna Salai toward the Old Bus Stand, continue onto Arcot Road, then turn right onto Katpadi Main Road. Our clinic is located on the 3rd Floor at 54, Katpadi Main Road in Gandhi Nagar. By public transportation, you can take city buses from near the Fort to Gandhi Nagar or the Old Bus Stand, followed by a short auto-rickshaw ride to our location. For visitors using ride-sharing services like Ola or Uber, simply enter 'Indira Dental Clinic, Gandhi Nagar' as your destination. If you're walking from nearby areas, our clinic is approximately 1 km from the Old Bus Stand. For those visiting Vellore Fort as tourists, combining your heritage visit with a dental appointment at our clinic is convenient, as we're located along a major route from the Fort to other Vellore attractions. For precise directions based on your specific starting point near the Fort, please call us at 7010650063, and our staff will guide you to our location.",
    },
    {
      id: "ls5",
      question: "Which areas of Vellore does Indira Dental Clinic serve?",
      answer:
        "Indira Dental Clinic serves patients from all areas of Vellore and beyond from our centrally located Gandhi Nagar facility. We regularly welcome patients from central Vellore neighborhoods including Gandhi Nagar, Officers Line, Kosapet, Saidapet, and Chinna Allapuram. From northern Vellore, we serve residents of Katpadi, Gandhinagar, Allapuram, and areas surrounding VIT University. From eastern Vellore, we cater to patients from Rangapuram, Ariyur, Viruthampattu, and Kagithapattarai. From southern Vellore, we welcome residents from Sathuvachari, Thorapadi, Kalinjur, and Alamelumangapuram. From western Vellore, we serve patients from Bagayam, Christian Medical College area, Ida Scudder Road, and Voorhees College area. We also provide dental care to patients from surrounding towns and villages including Gudiyatham, Arakkonam, Arcot, Ranipet, Walajapet, and Ambur. Our extended hours (10 AM to 8 PM on weekdays) and Sunday morning availability accommodate patients traveling from these outlying areas. Our central location near major transportation hubs makes us accessible to patients from throughout the Vellore district, establishing us as a regional dental care destination serving the broader North Tamil Nadu area.",
    },
    {
      id: "ls6",
      question: "What are the parking options near Indira Dental Clinic in Vellore?",
      answer:
        "Indira Dental Clinic offers several convenient parking options for patients visiting our Gandhi Nagar location in Vellore. Directly in front of our building on Katpadi Main Road, there is limited street parking available for two-wheelers and a few cars, ideal for quick appointments. For more secure parking, we have arrangements with a nearby parking facility approximately 100 meters from our clinic that accommodates both cars and two-wheelers at nominal rates (typically ₹20-₹30 per hour for cars, ₹10 for two-wheelers). Additionally, there are several public parking areas within 200-300 meters of our location, including the spacious parking lot near Gandhi Nagar market. For patients with mobility challenges, we offer a drop-off point directly in front of our building, with a family member then parking the vehicle. Our staff can provide specific parking recommendations based on the time of your appointment, as availability varies throughout the day. The Gandhi Nagar area generally has better parking options compared to more congested parts of Vellore like the Fort area or Old Town. For patients unfamiliar with the area, calling us at 7010650063 before your visit allows our staff to provide current parking guidance based on construction or other temporary changes in the neighborhood.",
    },
    {
      id: "ls7",
      question: "Is Indira Dental Clinic near CMC Hospital Vellore?",
      answer:
        "Indira Dental Clinic is conveniently located approximately 2.5 kilometers from Christian Medical College (CMC) Hospital Vellore, making us easily accessible for CMC patients, staff, and visitors. The journey from CMC Hospital to our Gandhi Nagar clinic typically takes 10-15 minutes by car or auto-rickshaw via Ida Scudder Road and Arcot Road. For those using public transportation, city buses running between CMC and the Old Bus Stand pass near our location, with a short walk from the nearest stop. Many CMC patients combine their hospital visits with dental appointments at our clinic, as we offer complementary dental care that integrates with their overall healthcare. We regularly receive referrals from CMC doctors for specialized dental treatments. Our clinic maintains communication channels with CMC departments for coordinated care of patients with complex medical conditions requiring dental treatment. For CMC staff working long shifts, our extended hours (10 AM to 8 PM on weekdays) provide flexible scheduling options. We're familiar with the special dental needs of international patients visiting CMC and offer appropriate care for these visitors. For precise directions from specific CMC buildings or departments, please call us at 7010650063, and our staff will guide you to our location.",
    },
    {
      id: "ls8",
      question: "Which dental clinic is best for VIT Vellore students?",
      answer:
        "Indira Dental Clinic is the best choice for VIT (Vellore Institute of Technology) students seeking dental care in Vellore, with several advantages specifically beneficial to the student population. Located approximately 7 kilometers from VIT campus, our clinic is easily accessible by auto-rickshaw (20-25 minutes) or by the frequent city buses that connect VIT to central Vellore. Our extended hours (10 AM to 8 PM on weekdays and Saturday, plus Sunday morning hours) accommodate busy student schedules and allow appointments between classes or on weekends. We offer special student discounts on preventive services like check-ups and cleanings with valid student ID. Our dentists understand the unique needs of the diverse international student community at VIT, providing care that respects various cultural backgrounds. We maintain digital records that can be easily transferred if students need continuing care in their hometowns during breaks. For international students, we offer multilingual services and assistance with insurance documentation. We provide emergency dental services for common student issues like sports injuries or wisdom tooth pain. Many VIT faculty members and their families are also our regular patients. For VIT students without personal transportation, we can recommend reliable auto services or coordinate appointments with campus shuttle timings.",
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
      <Script id="faq-schema-location-specific" type="application/ld+json">
        {JSON.stringify(schemaData)}
      </Script>

      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6">Location Specific</h2>

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
