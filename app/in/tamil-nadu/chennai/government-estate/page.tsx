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
import { generateLocationReviews } from "@/lib/review-data"

const reviews = generateLocationReviews("Government Estate", "Chennai")

export const metadata: Metadata = {
  title: "Best Dentist in Government Estate, Chennai | Top Dental Clinic | Indira Dental Clinic",
  description: "Find the best dental clinic in Government Estate, Chennai for all your dental needs. Dr. Rockson Samuel offers expert treatments including root canals, implants, braces, and cosmetic dentistry.",
  keywords: ["dentist in Government Estate", "dental clinic Government Estate Chennai", "best dentist Government Estate", "dental care Government Estate", "Indira Dental Clinic Government Estate"],
  alternates: {
    canonical: `/in/tamil-nadu/chennai/government-estate`,
  },
}

export default function GovernmentEstatePage() {
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
      question: "What dental services are available in Government Estate, Chennai?",
      answer: "In Government Estate, Chennai, Indira Dental Clinic offers comprehensive dental services including general dentistry, cosmetic treatments, root canal therapy, dental implants, orthodontics (braces & Invisalign), teeth whitening, gum disease treatment, wisdom teeth removal, pediatric dentistry, and emergency dental care.",
    },
    {
      question: "How can I book an appointment with Dr. Rockson Samuel from Government Estate?",
      answer: "You can book an appointment by calling us at 7010650063 or visiting our website to use the online booking form. We are conveniently located near Chennai and serve patients from Government Estate and all surrounding areas.",
    },
    {
      question: "What are the costs of dental treatments for Government Estate patients?",
      answer: "Our clinic offers transparent and competitive pricing. Root canal treatment starts from ₹3,000, dental implants from ₹25,000, braces from ₹30,000, and teeth whitening from ₹8,000. We provide detailed cost estimates during your consultation. Patients from Government Estate, Chennai can expect high-quality care at affordable prices.",
    },
    {
      question: "Is emergency dental care available for Government Estate area?",
      answer: "Yes, we provide 24/7 emergency dental care for patients from Government Estate and all Chennai areas. Whether you have a severe toothache, broken tooth, knocked-out tooth, or any dental emergency, call us immediately at 7010650063.",
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
            { title: 'Government Estate', href: '/in/tamil-nadu/chennai/government-estate' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Government Estate, Chennai"
          taluk="Government Estate"
          pincode="600002"
          distance="130 KM from Vellore"
          category="town"
        />

        <div className="mb-8">
          <GoogleMapEmbed
            locationName="Government Estate"
            address="3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu - 632006"
          />
        </div>

        <WhyChooseUs locationName="Government Estate" />

        <EnhancedServicesList locationName="Government Estate" services={services} />

        <PriceComparisonTable locationName="Government Estate" />

        <LocationReviews locationName="Government Estate" reviews={reviews} />

        <LocationFAQs locationName="Government Estate" faqs={faqs} /><PeopleAlsoSearchFor location="Government Estate" city="Chennai" />

        <CTAWidget
          title="Book Your Appointment from Government Estate Today!"
          description="Experience expert dental care with Dr. Rockson Samuel. We serve all Chennai areas including Government Estate."
          primaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
          secondaryAction={{ text: "Book Online", href: "/contact#appointment" }}
        />
      </div>
    </div>
  )
}
