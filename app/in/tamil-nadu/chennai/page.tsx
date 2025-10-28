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

const reviews = generateLocationReviews("Chennai", "Chennai")

export const metadata: Metadata = {
  title: "Best Dentist in Chennai | Top Dental Clinic | Dr. Rockson Samuel",
  description:
    "Find the best dental clinic in Chennai for all your dental needs. Dr. Rockson Samuel offers expert treatments including root canals, implants, braces, and cosmetic dentistry. Serving all Chennai areas.",
  keywords: [
    "dentist in Chennai",
    "best dentist Chennai",
    "dental clinic Chennai",
    "top dentist Chennai",
    "dental care Chennai",
    "root canal Chennai",
    "dental implants Chennai",
    "braces Chennai",
    "teeth whitening Chennai",
    "cosmetic dentistry Chennai",
    "emergency dentist Chennai",
    "pediatric dentist Chennai",
  ],
  alternates: {
    canonical: `/in/tamil-nadu/chennai`,
  },
  openGraph: {
    title: "Best Dentist in Chennai | Top Dental Clinic | Dr. Rockson Samuel",
    description: "Find the best dental clinic in Chennai. Expert treatments with advanced technology. Serving all Chennai areas.",
    url: "https://www.dentalclinicinvellore.in/in/tamil-nadu/chennai",
    siteName: "Indira Dental Clinic",
    locale: "en_IN",
    type: "website",
  },
}

export default function ChennaiPage() {
  const services = [
    { title: "Root Canal Treatment", href: "/services/root-canal-treatment" },
    { title: "Dental Implants", href: "/services/dental-implants" },
    { title: "Orthodontic Braces", href: "/services/orthodontics" },
    { title: "Teeth Whitening", href: "/services/cosmetic-dentistry/teeth-whitening" },
    { title: "Cosmetic Dentistry", href: "/services/cosmetic-dentistry" },
    { title: "Pediatric Dentistry", href: "/services/pediatric-dentistry" },
    { title: "Emergency Dental Care", href: "/services/emergency-dentistry" },
    { title: "Gum Disease Treatment", href: "/services/periodontics" },
    { title: "Wisdom Teeth Removal", href: "/services/oral-surgery/wisdom-teeth-emerging" },
    { title: "Dental Crowns & Bridges", href: "/services/restorative-dentistry/dental-crowns" },
    { title: "All-on-4 Implants", href: "/services/dental-implants/all-on-4-implants" },
    { title: "General Dentistry", href: "/services/general-dentistry" },
  ]

  const faqs = [
    {
      question: "What dental services are available in Chennai?",
      answer:
        "In Chennai, Indira Dental Clinic offers comprehensive dental services including general dentistry, cosmetic treatments, root canal therapy, dental implants, orthodontics (braces & Invisalign), teeth whitening, gum disease treatment, wisdom teeth emerging, pediatric dentistry, and emergency dental care. We serve all Chennai areas with expert care.",
    },
    {
      question: "How can I book an appointment with Dr. Rockson Samuel in Chennai?",
      answer:
        "You can book an appointment by calling us at 7010650063 or visiting our website to use the online booking form. We are conveniently located near Chennai and serve patients from all areas including Mylapore, Velacherry, Adyar, T Nagar, and more.",
    },
    {
      question: "What are the costs of dental treatments in Chennai?",
      answer:
        "Our clinic offers transparent and competitive pricing for all treatments. Root canal treatment starts from ₹3,000, dental implants from ₹25,000, braces from ₹30,000, and teeth whitening from ₹8,000. We provide detailed cost estimates during your consultation. Patients from Chennai can expect high-quality care at affordable prices.",
    },
    {
      question: "Is emergency dental care available for Chennai patients?",
      answer:
        "Yes, we provide 24/7 emergency dental care for patients from Chennai and surrounding areas. Whether you have a severe toothache, broken tooth, knocked-out tooth, or any other dental emergency, call us immediately at 7010650063 for urgent assistance.",
    },
    {
      question: "Which areas of Chennai do you serve?",
      answer:
        "We serve all areas of Chennai including Mylapore, Adyar, T Nagar, Velacherry, Guindy, Egmore, Ambattur, Perambur, Sholinganallur, and many more. We are located approximately 130 KM from Chennai and welcome patients from all Chennai localities for comprehensive dental care.",
    },
  ]

  const nearbyLocations = [
    { name: "Mylapore", href: "/in/tamil-nadu/chennai/mylapore", distance: "Central Chennai" },
    { name: "Adyar", href: "/in/tamil-nadu/chennai/adyar", distance: "South Chennai" },
    { name: "T Nagar", href: "/in/tamil-nadu/chennai/t-nagar", distance: "Central Chennai" },
    { name: "Velacherry", href: "/in/tamil-nadu/chennai/velacherry", distance: "South Chennai" },
    { name: "Guindy", href: "/in/tamil-nadu/chennai/guindy", distance: "South Chennai" },
    { name: "Egmore", href: "/in/tamil-nadu/chennai/egmore", distance: "Central Chennai" },
    { name: "Ambattur", href: "/in/tamil-nadu/chennai/ambattur", distance: "West Chennai" },
    { name: "Perambur", href: "/in/tamil-nadu/chennai/perambur", distance: "North Chennai" },
    { name: "Sholinganallur", href: "/in/tamil-nadu/chennai/sholinganallur", distance: "South Chennai" },
    { name: "Aminjikarai", href: "/in/tamil-nadu/chennai/aminjikarai", distance: "Central Chennai" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <Breadcrumb
          items={[
            { title: "Home", href: "/" },
            { title: "Tamil Nadu", href: "/in/tamil-nadu" },
            { title: "Chennai", href: "/in/tamil-nadu/chennai" },
          ]}
        />

        <LocationHeader
          locationName="Best Dentist and Dental Clinic in Chennai"
          taluk="Chennai"
          pincode="600001"
          distance="130 KM from Vellore"
          category="town"
        />

        <div className="mb-8">
          <GoogleMapEmbed
            locationName="Chennai"
            address="3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu - 632006"
          />
        </div>

        <WhyChooseUs locationName="Chennai" />

        <EnhancedServicesList locationName="Chennai" services={services} />

        <PriceComparisonTable locationName="Chennai" />

        <LocationReviews locationName="Chennai" reviews={reviews} />

        <LocationFAQs locationName="Chennai" faqs={faqs} />

        <TravelInfoCard />

        {/* Nearby Locations */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-[#005f73] mb-6">Chennai Areas We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {nearbyLocations.map((location) => (
              <Link
                key={location.href}
                href={location.href}
                className="p-4 bg-white rounded-lg border-2 border-gray-200 hover:border-[#54CAD3] transition-all hover:shadow-md group"
              >
                <h3 className="font-semibold text-[#005f73] group-hover:text-[#54CAD3] mb-1">
                  Best Dentist in {location.name}
                </h3>
                <p className="text-sm text-gray-600">{location.distance}</p>
              </Link>
            ))}
          </div>
        </div>

        <PeopleAlsoSearchFor location="Chennai" city="Chennai" />

        <CTAWidget
          title="Book Your Appointment in Chennai Today!"
          description="Experience expert dental care with Dr. Rockson Samuel. We serve all Chennai areas with comprehensive dental services."
          primaryAction={{ text: "Call Now: 7010650063", href: "tel:7010650063" }}
          secondaryAction={{ text: "Book Online", href: "/contact#appointment" }}
        />
      </div>
    </div>
  )
}

