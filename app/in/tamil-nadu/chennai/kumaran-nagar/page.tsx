import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { LocationHeader } from "@/components/location/LocationHeader"
import { GoogleMapEmbed } from "@/components/location/GoogleMapEmbed"
import { EnhancedServicesList } from "@/components/location/EnhancedServicesList"
import { LocationReviews } from "@/components/location/LocationReviews"
import { LocationFAQs } from "@/components/location/LocationFAQs"
import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { WhyChooseUs } from "@/components/location/WhyChooseUs"
import { PriceComparisonTable } from "@/components/location/PriceComparisonTable"
import { TravelInfoCard } from "@/components/location/TravelInfoCard"
import { generateLocationReviews } from "@/lib/review-data"

const reviews = generateLocationReviews("Kumaran Nagar", "Chennai")

export const metadata: Metadata = {
  title: "Best Dentist in Kumaran Nagar, Chennai | Top Dental Clinic | Indira Dental Clinic",
  description: "Find the best dental clinic in Kumaran Nagar, Chennai for all your dental needs. Dr. Rockson Samuel offers expert treatments including root canals, implants, braces, and cosmetic dentistry.",
  keywords: ["dentist in Kumaran Nagar", "dental clinic Kumaran Nagar Chennai", "best dentist Kumaran Nagar", "dental care Kumaran Nagar", "Indira Dental Clinic Kumaran Nagar"],
  alternates: {
    canonical: `/in/tamil-nadu/chennai/kumaran-nagar`,
  },
}

export default function KumaranNagarPage() {
  const services = [
    { title: "Root Canal Treatment", href: "/services/root-canal-treatment" },
    { title: "Dental Implants", href: "/services/dental-implants" },
    { title: "Orthodontic Braces", href: "/services/orthodontics" },
    { title: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening" },
    { title: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
    { title: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
    { title: "Emergency Dental Care", href: "/services/emergency-dentistry" },
    { title: "Gum Disease Treatment", href: "/services/periodontics" },
    { title: "Wisdom Teeth Removal", href: "/services/oral-surgery/wisdom-teeth-removal" },
    { title: "Dental Crowns & Bridges", href: "/services/restorative-dentistry/dental-crowns" },
    { title: "General Dentistry", href: "/services/general-dentistry" },
    { title: "All-on-4 Implants", href: "/services/dental-implants/all-on-4-implants" },
  ]

  const faqs = [
    {
      question: "What dental services are available in Kumaran Nagar, Chennai?",
      answer: "In Kumaran Nagar, Chennai, Indira Dental Clinic offers comprehensive dental services including general dentistry, cosmetic treatments, root canal therapy, dental implants, orthodontics (braces & Invisalign), teeth whitening, gum disease treatment, wisdom teeth removal, pediatric dentistry, and emergency dental care.",
    },
    {
      question: "How can I book an appointment with Dr. Rockson Samuel from Kumaran Nagar?",
      answer: "You can book an appointment by calling us at 7010650063 or visiting our website to use the online booking form. We are conveniently located near Chennai and serve patients from Kumaran Nagar and all surrounding areas.",
    },
    {
      question: "What are the costs of dental treatments for Kumaran Nagar patients?",
      answer: "Our clinic offers transparent and competitive pricing. Root canal treatment starts from ₹3,000, dental implants from ₹25,000, braces from ₹30,000, and teeth whitening from ₹8,000. We provide detailed cost estimates during your consultation. Patients from Kumaran Nagar, Chennai can expect high-quality care at affordable prices.",
    },
    {
      question: "Is emergency dental care available for Kumaran Nagar area?",
      answer: "Yes, we provide 24/7 emergency dental care for patients from Kumaran Nagar and all Chennai areas. Whether you have a severe toothache, broken tooth, knocked-out tooth, or any dental emergency, call us immediately at 7010650063.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Tamil Nadu', href: '/in/tamil-nadu' },
            { title: 'Chennai', href: '/in/tamil-nadu/chennai' },
            { title: 'Kumaran Nagar', href: '/in/tamil-nadu/chennai/kumaran-nagar' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Kumaran Nagar, Chennai"
          taluk="Kumaran Nagar"
          pincode="600033"
          distance="130 KM from Vellore"
          category="town"
        />

        <div className="mb-8">
          <GoogleMapEmbed
            locationName="Kumaran Nagar"
            address="3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu - 632006"
          />
        </div>

        <WhyChooseUs locationName="Kumaran Nagar" />

        <EnhancedServicesList locationName="Kumaran Nagar" services={services} />

        <PriceComparisonTable locationName="Kumaran Nagar" />

        <LocationReviews locationName="Kumaran Nagar" reviews={reviews} />

        <LocationFAQs locationName="Kumaran Nagar" faqs={faqs} />

        <TravelInfoCard locationName="Kumaran Nagar" />

        <PeopleAlsoSearchFor location="Kumaran Nagar" city="Chennai" />

        <CTAWidget
          title="Book Your Appointment from Kumaran Nagar Today!"
          description="Experience expert dental care with Dr. Rockson Samuel. We serve all Chennai areas including Kumaran Nagar."
          primaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
          secondaryAction={{ text: "Book Online", href: "/contact#appointment" }}
        />
      </div>
    </div>
  )
}
