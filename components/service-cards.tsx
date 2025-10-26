import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight } from "lucide-react"

interface Service {
  id: string
  title: string
  description: string
  imageUrl: string
  link: string
  popular?: boolean
  price?: string
  features?: string[]
}

interface ServiceCardsProps {
  title: string
  description?: string
  services: Service[]
  layout?: "grid" | "carousel"
  location?: string
}

export default function ServiceCards({
  title,
  description,
  services,
  layout = "grid",
  location = "Vellore",
}: ServiceCardsProps) {
  return (
    <div className="my-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold mb-3">{title}</h2>
        {description && <p className="text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">{description}</p>}
      </div>

      <div className={`grid ${layout === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "md:grid-cols-1"} gap-6`}>
        {services.map((service) => (
          <Card key={service.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48">
              <Image
                src={service.imageUrl || `/placeholder.svg?height=300&width=500`}
                alt={service.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {service.popular && <Badge className="absolute top-2 right-2 bg-primary text-white">Popular</Badge>}
            </div>
            <CardHeader>
              <CardTitle>{service.title}</CardTitle>
              {service.price && <CardDescription>Starting from {service.price}</CardDescription>}
            </CardHeader>
            <CardContent className="flex-grow">
              <p className="text-gray-600 dark:text-gray-400">{service.description}</p>

              {service.features && service.features.length > 0 && (
                <ul className="mt-4 space-y-2">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
            </CardContent>
            <CardFooter>
              <Link href={service.link} className="w-full">
                <Button className="w-full group">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}

// Example usage for dental services
export function DentalServices({ location = "Vellore" }) {
  const dentalServices = [
    {
      id: "general-dentistry",
      title: "General Dentistry",
      description: `Comprehensive dental care for patients of all ages in ${location}. Our general dentistry services focus on prevention, diagnosis, and treatment of various dental issues.`,
      imageUrl: "/general-dentistry.jpg",
      link: "/services/general-dentistry",
      popular: true,
      price: "₹500",
      features: [
        "Dental Check-ups & Cleaning",
        "Fillings & Restorations",
        "Gum Disease Treatment",
        "Root Canal Therapy",
      ],
    },
    {
      id: "cosmetic-dentistry",
      title: "Cosmetic Dentistry",
      description: `Transform your smile with our cosmetic dentistry services in ${location}. We offer various treatments to enhance the appearance of your teeth and overall smile.`,
      imageUrl: "/cosmetic-dentistry.jpg",
      link: "/services/cosmetic-dentistry",
      price: "₹2,000",
      features: ["Teeth Whitening", "Dental Veneers", "Smile Makeovers", "Composite Bonding"],
    },
    {
      id: "dental-implants",
      title: "Dental Implants",
      description: `Restore missing teeth with the most advanced tooth replacement option available. Our dental implants in ${location} look, feel, and function just like natural teeth.`,
      imageUrl: "/dental-implants.jpg",
      link: "/services/dental-implants",
      popular: true,
      price: "₹25,000",
      features: [
        "Single Tooth Implants",
        "Multiple Tooth Implants",
        "Full Arch Replacements",
        "Implant-Supported Dentures",
      ],
    },
    {
      id: "orthodontics",
      title: "Orthodontics",
      description: `Straighten your teeth and correct bite issues with our orthodontic treatments in ${location}. We offer both traditional braces and clear aligner options.`,
      imageUrl: "/orthodontics.jpg",
      link: "/services/orthodontics",
      price: "₹20,000",
      features: ["Traditional Metal Braces", "Ceramic Braces", "Invisalign Clear Aligners", "Retainers & Maintenance"],
    },
    {
      id: "pediatric-dentistry",
      title: "Pediatric Dentistry",
      description: `Specialized dental care for children in ${location}. Our child-friendly approach ensures a positive dental experience for your little ones from an early age.`,
      imageUrl: "/pediatric-dentistry.jpg",
      link: "/services/pediatric-dentistry",
      price: "₹500",
      features: ["Child Dental Check-ups", "Preventive Treatments", "Dental Sealants", "Behavior Management"],
    },
    {
      id: "emergency-dentistry",
      title: "Emergency Dental Care",
      description: `Prompt dental care for unexpected dental emergencies in ${location}. We offer same-day appointments for patients experiencing dental pain or trauma.`,
      imageUrl: "/emergency-dentistry.jpg",
      link: "/services/emergency-dentistry",
      price: "₹1,000",
      features: [
        "Toothache Relief",
        "Broken Tooth Repair",
        "Lost Filling/Crown Replacement",
        "Dental Abscess Treatment",
      ],
    },
  ]

  return (
    <ServiceCards
      title={`Our Dental Services in ${location}`}
      description={`Comprehensive dental care services provided by our experienced team in ${location}`}
      services={dentalServices}
      location={location}
    />
  )
}
