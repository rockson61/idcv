import { ServiceContentTemplate } from "@/components/service-content-template"
import { generateContent } from "@/lib/content-generator"
import { notFound } from "next/navigation"

// This would typically come from a database or CMS
const services = [
  {
    slug: "root-canal-treatment",
    title: "Root Canal Treatment",
    description: "Painless and effective treatment to save your natural tooth",
    image: "/root-canal-procedure.png",
    relatedServices: [
      { title: "Dental Crowns", slug: "dental-crowns" },
      { title: "Dental Fillings", slug: "dental-fillings" },
      { title: "Tooth Extraction", slug: "tooth-extraction" },
    ],
    pricing: [
      { service: "Anterior Teeth", price: "3,500 - 5,000" },
      { service: "Premolars", price: "5,000 - 7,000" },
      { service: "Molars", price: "7,000 - 10,000" },
    ],
    procedureSteps: [
      {
        title: "Diagnosis and X-ray",
        description:
          "Dr. Rockson Samuel will examine your tooth and take X-rays to confirm the need for a root canal and assess the extent of infection.",
      },
      {
        title: "Anesthesia and Isolation",
        description:
          "Local anesthesia is administered to ensure you feel no pain during the procedure. A dental dam is placed to keep the area clean and dry.",
      },
      {
        title: "Access and Cleaning",
        description:
          "A small opening is made in the crown of the tooth to access the pulp chamber. Infected pulp is removed and the canals are cleaned and shaped.",
      },
      {
        title: "Filling and Sealing",
        description:
          "The cleaned canals are filled with a biocompatible material called gutta-percha and sealed with adhesive cement.",
      },
      {
        title: "Restoration",
        description:
          "A temporary or permanent filling is placed to close the access hole. In most cases, a crown is recommended to protect the tooth and restore full function.",
      },
    ],
    benefits: [
      "Saves your natural tooth and prevents extraction",
      "Eliminates pain and infection",
      "Restores normal biting force and sensation",
      "Maintains natural appearance",
      "Protects other teeth from excessive wear or strain",
      "High success rate with proper care",
    ],
  },
  {
    slug: "dental-implants",
    title: "Dental Implants",
    description: "Permanent solution for missing teeth with natural look and function",
    image: "/dental-implant-stages.png",
    relatedServices: [
      { title: "Dental Crowns", slug: "dental-crowns" },
      { title: "Bone Grafting", slug: "bone-grafting" },
      { title: "Full Mouth Rehabilitation", slug: "full-mouth-rehabilitation" },
    ],
    pricing: [
      { service: "Single Tooth Implant", price: "25,000 - 35,000" },
      { service: "Multiple Implants (per unit)", price: "22,000 - 30,000" },
      { service: "All-on-4 (per arch)", price: "1,50,000 - 2,00,000" },
    ],
  },
  {
    slug: "dental-crowns",
    title: "Dental Crowns",
    description: "Restore damaged teeth with durable and natural-looking crowns",
    image: "/dental-crown-steps.png",
    relatedServices: [
      { title: "Root Canal Treatment", slug: "root-canal-treatment" },
      { title: "Dental Implants", slug: "dental-implants" },
      { title: "Dental Bridges", slug: "dental-bridges" },
    ],
    pricing: [
      { service: "Porcelain Fused to Metal Crown", price: "5,000 - 8,000" },
      { service: "Zirconia Crown", price: "8,000 - 12,000" },
      { service: "E-max Crown", price: "10,000 - 15,000" },
    ],
  },
]

export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Service Not Found",
      description: "The requested dental service could not be found",
    }
  }

  return {
    title: `${service.title} | Indira Dental Clinic`,
    description: service.description,
    keywords: `${service.title.toLowerCase()}, dentist vellore, dental clinic vellore, Dr. Rockson Samuel, affordable ${service.title.toLowerCase()}, best ${service.title.toLowerCase()} in vellore`,
  }
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  // Generate content for the service if not already available
  // In a real application, this would likely be stored in a database or CMS
  let content = ""
  let faq = []
  let aftercare = ""

  try {
    // Generate main content
    const contentResult = await generateContent({
      contentType: "service-description",
      serviceName: service.title,
      contentLength: "medium",
    })

    if (contentResult.success) {
      content = contentResult.content
    }

    // Generate FAQ
    const faqResult = await generateContent({
      contentType: "patient-faq",
      serviceName: service.title,
      contentLength: "short",
    })

    if (faqResult.success) {
      // Parse the HTML to extract questions and answers
      const faqHtml = faqResult.content
      const faqRegex = /<h3>(.*?)<\/h3>\s*<p>(.*?)<\/p>/gs
      const matches = [...faqHtml.matchAll(faqRegex)]

      faq = matches.map((match) => ({
        question: match[1].replace(/<.*?>/g, ""),
        answer: match[2].replace(/<.*?>/g, ""),
      }))
    }

    // Generate aftercare
    const aftercareResult = await generateContent({
      contentType: "aftercare",
      serviceName: service.title,
      contentLength: "short",
    })

    if (aftercareResult.success) {
      aftercare = aftercareResult.content
    }
  } catch (error) {
    // TODO: Implement proper error logging service
    // console.error("Error generating content:", error)
    // Fallback content if generation fails
    content = `<p>
      ${service.title} is a specialized dental procedure offered at Indira Dental Clinic by Dr. Rockson Samuel. 
      This treatment is performed with the highest standards of care and using the latest dental technology.
      Contact us to learn more about this procedure and how it can benefit your dental health.
    </p>`
  }

  return (
    <ServiceContentTemplate
      title={service.title}
      description={service.description}
      image={service.image}
      content={content}
      procedureSteps={service.procedureSteps}
      benefits={service.benefits}
      faq={faq}
      pricing={service.pricing}
      aftercare={aftercare}
      relatedServices={service.relatedServices}
    />
  )
}
