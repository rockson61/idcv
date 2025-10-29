import type { Metadata } from "next"
import Link from "next/link"
import { Breadcrumb } from '@/components/breadcrumb'
import { LocationHeader } from "@/components/location/LocationHeader"
import { GoogleMapEmbed } from "@/components/location/GoogleMapEmbed"
import { EnhancedServicesList } from "@/components/location/EnhancedServicesList"
import { LocationReviews } from "@/components/location/LocationReviews"
import { LocationFAQs } from '@/components/LocationFAQs'
import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"
import { CTAWidget } from "@/components/widgets/cta-widget"
import { WhyChooseUs } from "@/components/location/WhyChooseUs"
import { PriceComparisonTable } from "@/components/location/PriceComparisonTable"
import { generateLocationReviews } from "@/lib/review-data"

const reviews = generateLocationReviews("Washermanpet East", "Chennai")

export const metadata: Metadata = {
  title: "Best Dentist in Washermanpet East, Chennai | Top Dental Clinic | Indira Dental Clinic",
  description: "Find the best dental clinic in Washermanpet East, Chennai for all your dental needs. Dr. Rockson Samuel offers expert treatments including root canals, implants, braces, and cosmetic dentistry.",
  keywords: ["dentist in Washermanpet East", "dental clinic Washermanpet East Chennai", "best dentist Washermanpet East", "dental care Washermanpet East", "Indira Dental Clinic Washermanpet East"],
  alternates: {
    canonical: `/in/tamil-nadu/chennai/washermanpet-east`,
  },
}

export default function WashermanpetEastPage() {
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
      question: "What dental services are available in Washermanpet East, Chennai?",
      answer: "In Washermanpet East, Chennai, Indira Dental Clinic offers comprehensive dental services including general dentistry, cosmetic treatments, root canal therapy, dental implants, orthodontics (braces & Invisalign), teeth whitening, gum disease treatment, wisdom teeth removal, pediatric dentistry, and emergency dental care.",
    },
    {
      question: "How can I book an appointment with Dr. Rockson Samuel from Washermanpet East?",
      answer: "You can book an appointment by calling us at 7010650063 or visiting our website to use the online booking form. We are conveniently located near Chennai and serve patients from Washermanpet East and all surrounding areas.",
    },
    {
      question: "What are the costs of dental treatments for Washermanpet East patients?",
      answer: "Our clinic offers transparent and competitive pricing. Root canal treatment starts from ₹3,000, dental implants from ₹25,000, braces from ₹30,000, and teeth whitening from ₹8,000. We provide detailed cost estimates during your consultation. Patients from Washermanpet East, Chennai can expect high-quality care at affordable prices.",
    },
    {
      question: "Is emergency dental care available for Washermanpet East area?",
      answer: "Yes, we provide 24/7 emergency dental care for patients from Washermanpet East and all Chennai areas. Whether you have a severe toothache, broken tooth, knocked-out tooth, or any dental emergency, call us immediately at 7010650063.",
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
            { title: 'Washermanpet East', href: '/in/tamil-nadu/chennai/washermanpet-east' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Washermanpet East, Chennai"
          taluk="Washermanpet East"
          pincode="600021"
          distance="130 KM from Vellore"
          category="town"
        />

        <div className="mb-8">
          <GoogleMapEmbed
            locationName="Washermanpet East"
            address="3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu - 632006"
          />
        </div>

        <WhyChooseUs locationName="Washermanpet East" />

        <EnhancedServicesList locationName="Washermanpet East" services={services} />

        <PriceComparisonTable locationName="Washermanpet East" />

        <LocationReviews locationName="Washermanpet East" reviews={reviews} />

        <LocationFAQs locationName="Washermanpet East" faqs={faqs} /><PeopleAlsoSearchFor location="Washermanpet East" city="Chennai" />

        <CTAWidget
          title="Book Your Appointment from Washermanpet East Today!"
          description="Experience expert dental care with Dr. Rockson Samuel. We serve all Chennai areas including Washermanpet East."
          primaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
          secondaryAction={{ text: "Book Online", href: "/contact#appointment" }}
        />
      </div>
    </div>
  )
}
