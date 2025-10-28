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

const reviews = generateLocationReviews("West Mambalam", "Chennai")

export const metadata: Metadata = {
  title: "Best Dentist in West Mambalam, Chennai | Top Dental Clinic | Indira Dental Clinic",
  description: "Find the best dental clinic in West Mambalam, Chennai for all your dental needs. Dr. Rockson Samuel offers expert treatments including root canals, implants, braces, and cosmetic dentistry.",
  keywords: ["dentist in West Mambalam", "dental clinic West Mambalam Chennai", "best dentist West Mambalam", "dental care West Mambalam", "Indira Dental Clinic West Mambalam"],
  alternates: {
    canonical: `/in/tamil-nadu/chennai/west-mambalam`,
  },
}

export default function WestMambalamPage() {
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
      question: "What dental services are available in West Mambalam, Chennai?",
      answer: "In West Mambalam, Chennai, Indira Dental Clinic offers comprehensive dental services including general dentistry, cosmetic treatments, root canal therapy, dental implants, orthodontics (braces & Invisalign), teeth whitening, gum disease treatment, wisdom teeth removal, pediatric dentistry, and emergency dental care.",
    },
    {
      question: "How can I book an appointment with Dr. Rockson Samuel from West Mambalam?",
      answer: "You can book an appointment by calling us at 7010650063 or visiting our website to use the online booking form. We are conveniently located near Chennai and serve patients from West Mambalam and all surrounding areas.",
    },
    {
      question: "What are the costs of dental treatments for West Mambalam patients?",
      answer: "Our clinic offers transparent and competitive pricing. Root canal treatment starts from ₹3,000, dental implants from ₹25,000, braces from ₹30,000, and teeth whitening from ₹8,000. We provide detailed cost estimates during your consultation. Patients from West Mambalam, Chennai can expect high-quality care at affordable prices.",
    },
    {
      question: "Is emergency dental care available for West Mambalam area?",
      answer: "Yes, we provide 24/7 emergency dental care for patients from West Mambalam and all Chennai areas. Whether you have a severe toothache, broken tooth, knocked-out tooth, or any dental emergency, call us immediately at 7010650063.",
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
            { title: 'West Mambalam', href: '/in/tamil-nadu/chennai/west-mambalam' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in West Mambalam, Chennai"
          taluk="West Mambalam"
          pincode="600033"
          distance="130 KM from Vellore"
          category="town"
        />

        <div className="mb-8">
          <GoogleMapEmbed
            locationName="West Mambalam"
            address="3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu - 632006"
          />
        </div>

        <WhyChooseUs locationName="West Mambalam" />

        <EnhancedServicesList locationName="West Mambalam" services={services} />

        <PriceComparisonTable locationName="West Mambalam" />

        <LocationReviews locationName="West Mambalam" reviews={reviews} />

        <LocationFAQs faqs={faqs} />

        <TravelInfoCard locationName="West Mambalam" />

        <PeopleAlsoSearchFor location="West Mambalam" city="Chennai" />

        <CTAWidget
          title="Book Your Appointment from West Mambalam Today!"
          description="Experience expert dental care with Dr. Rockson Samuel. We serve all Chennai areas including West Mambalam."
          primaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
          secondaryAction={{ text: "Book Online", href: "/contact#appointment" }}
        />
      </div>
    </div>
  )
}
