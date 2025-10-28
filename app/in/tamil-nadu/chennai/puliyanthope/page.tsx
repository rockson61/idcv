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

const reviews = generateLocationReviews("Puliyanthope", "Chennai")

export const metadata: Metadata = {
  title: "Best Dentist in Puliyanthope, Chennai | Top Dental Clinic | Indira Dental Clinic",
  description: "Find the best dental clinic in Puliyanthope, Chennai for all your dental needs. Dr. Rockson Samuel offers expert treatments including root canals, implants, braces, and cosmetic dentistry.",
  keywords: ["dentist in Puliyanthope", "dental clinic Puliyanthope Chennai", "best dentist Puliyanthope", "dental care Puliyanthope", "Indira Dental Clinic Puliyanthope"],
  alternates: {
    canonical: `/in/tamil-nadu/chennai/puliyanthope`,
  },
}

export default function PuliyanthopePage() {
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
      question: "What dental services are available in Puliyanthope, Chennai?",
      answer: "In Puliyanthope, Chennai, Indira Dental Clinic offers comprehensive dental services including general dentistry, cosmetic treatments, root canal therapy, dental implants, orthodontics (braces & Invisalign), teeth whitening, gum disease treatment, wisdom teeth removal, pediatric dentistry, and emergency dental care.",
    },
    {
      question: "How can I book an appointment with Dr. Rockson Samuel from Puliyanthope?",
      answer: "You can book an appointment by calling us at 7010650063 or visiting our website to use the online booking form. We are conveniently located near Chennai and serve patients from Puliyanthope and all surrounding areas.",
    },
    {
      question: "What are the costs of dental treatments for Puliyanthope patients?",
      answer: "Our clinic offers transparent and competitive pricing. Root canal treatment starts from ₹3,000, dental implants from ₹25,000, braces from ₹30,000, and teeth whitening from ₹8,000. We provide detailed cost estimates during your consultation. Patients from Puliyanthope, Chennai can expect high-quality care at affordable prices.",
    },
    {
      question: "Is emergency dental care available for Puliyanthope area?",
      answer: "Yes, we provide 24/7 emergency dental care for patients from Puliyanthope and all Chennai areas. Whether you have a severe toothache, broken tooth, knocked-out tooth, or any dental emergency, call us immediately at 7010650063.",
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
            { title: 'Puliyanthope', href: '/in/tamil-nadu/chennai/puliyanthope' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Puliyanthope, Chennai"
          taluk="Puliyanthope"
          pincode="600012"
          distance="130 KM from Vellore"
          category="town"
        />

        <div className="mb-8">
          <GoogleMapEmbed
            locationName="Puliyanthope"
            address="3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu - 632006"
          />
        </div>

        <WhyChooseUs locationName="Puliyanthope" />

        <EnhancedServicesList locationName="Puliyanthope" services={services} />

        <PriceComparisonTable locationName="Puliyanthope" />

        <LocationReviews locationName="Puliyanthope" reviews={reviews} />

        <LocationFAQs locationName="Puliyanthope" faqs={faqs} />

        <TravelInfoCard />

        <PeopleAlsoSearchFor location="Puliyanthope" city="Chennai" />

        <CTAWidget
          title="Book Your Appointment from Puliyanthope Today!"
          description="Experience expert dental care with Dr. Rockson Samuel. We serve all Chennai areas including Puliyanthope."
          primaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
          secondaryAction={{ text: "Book Online", href: "/contact#appointment" }}
        />
      </div>
    </div>
  )
}
