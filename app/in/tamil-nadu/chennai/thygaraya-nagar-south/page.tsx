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

const reviews = generateLocationReviews("Thygaraya Nagar South", "Chennai")

export const metadata: Metadata = {
  title: "Best Dentist in Thygaraya Nagar South, Chennai | Top Dental Clinic | Indira Dental Clinic",
  description: "Find the best dental clinic in Thygaraya Nagar South, Chennai for all your dental needs. Dr. Rockson Samuel offers expert treatments including root canals, implants, braces, and cosmetic dentistry.",
  keywords: ["dentist in Thygaraya Nagar South", "dental clinic Thygaraya Nagar South Chennai", "best dentist Thygaraya Nagar South", "dental care Thygaraya Nagar South", "Indira Dental Clinic Thygaraya Nagar South"],
  alternates: {
    canonical: `/in/tamil-nadu/chennai/thygaraya-nagar-south`,
  },
}

export default function ThygarayaNagarSouthPage() {
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
      question: "What dental services are available in Thygaraya Nagar South, Chennai?",
      answer: "In Thygaraya Nagar South, Chennai, Indira Dental Clinic offers comprehensive dental services including general dentistry, cosmetic treatments, root canal therapy, dental implants, orthodontics (braces & Invisalign), teeth whitening, gum disease treatment, wisdom teeth removal, pediatric dentistry, and emergency dental care.",
    },
    {
      question: "How can I book an appointment with Dr. Rockson Samuel from Thygaraya Nagar South?",
      answer: "You can book an appointment by calling us at 7010650063 or visiting our website to use the online booking form. We are conveniently located near Chennai and serve patients from Thygaraya Nagar South and all surrounding areas.",
    },
    {
      question: "What are the costs of dental treatments for Thygaraya Nagar South patients?",
      answer: "Our clinic offers transparent and competitive pricing. Root canal treatment starts from ₹3,000, dental implants from ₹25,000, braces from ₹30,000, and teeth whitening from ₹8,000. We provide detailed cost estimates during your consultation. Patients from Thygaraya Nagar South, Chennai can expect high-quality care at affordable prices.",
    },
    {
      question: "Is emergency dental care available for Thygaraya Nagar South area?",
      answer: "Yes, we provide 24/7 emergency dental care for patients from Thygaraya Nagar South and all Chennai areas. Whether you have a severe toothache, broken tooth, knocked-out tooth, or any dental emergency, call us immediately at 7010650063.",
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
            { title: 'Thygaraya Nagar South', href: '/in/tamil-nadu/chennai/thygaraya-nagar-south' }
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Thygaraya Nagar South, Chennai"
          taluk="Thygaraya Nagar South"
          pincode="600017"
          distance="130 KM from Vellore"
          category="town"
        />

        <div className="mb-8">
          <GoogleMapEmbed
            locationName="Thygaraya Nagar South"
            address="3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu - 632006"
          />
        </div>

        <WhyChooseUs locationName="Thygaraya Nagar South" />

        <EnhancedServicesList locationName="Thygaraya Nagar South" services={services} />

        <PriceComparisonTable locationName="Thygaraya Nagar South" />

        <LocationReviews locationName="Thygaraya Nagar South" reviews={reviews} />

        <LocationFAQs locationName="Thygaraya Nagar South" faqs={faqs} /><PeopleAlsoSearchFor location="Thygaraya Nagar South" city="Chennai" />

        <CTAWidget
          title="Book Your Appointment from Thygaraya Nagar South Today!"
          description="Experience expert dental care with Dr. Rockson Samuel. We serve all Chennai areas including Thygaraya Nagar South."
          primaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
          secondaryAction={{ text: "Book Online", href: "/contact#appointment" }}
        />
      </div>
    </div>
  )
}
