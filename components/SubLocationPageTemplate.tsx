import type React from "react"
import { SEOMetadata } from "@/components/seo/seo-metadata"
import { LocationBreadcrumb } from "@/components/location-breadcrumb"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, MapPin, Clock, Phone } from "lucide-react"
import { DentistProfileWidget } from "@/components/DentistProfileWidget"
import { LocationFAQs } from "@/components/LocationFAQs"
import { CTASection } from "@/components/CTASection"
import { ServicesOverview } from "@/components/ServicesOverview"
import { LocationContent } from "@/components/LocationContent"
import { LocationSchema } from "@/components/schema/location-schema"
import Image from "next/image"

interface SubLocationPageTemplateProps {
  title: string
  description: string
  canonicalUrl: string
  locationName: string
  parentLocation: string
  stateOrCountry: string
  breadcrumbItems: Array<{ name: string; href: string }>
  locationDescription: string
  locationHighlights?: string[]
  nearbyLocations?: Array<{ name: string; link: string }>
  faqs: Array<{ question: string; answer: string }>
  specialties?: string[]
  landmarks?: Array<{ name: string; distance: string }>
  clinicTimings?: Array<{ day: string; hours: string }>
  clinicAddress?: string
  clinicPhone?: string
  locationImageUrl?: string
  children?: React.ReactNode
  pagePath: string
}

export function SubLocationPageTemplate({
  title,
  description,
  canonicalUrl,
  locationName,
  parentLocation,
  stateOrCountry,
  breadcrumbItems,
  locationDescription,
  locationHighlights = [],
  nearbyLocations = [],
  faqs,
  specialties = ["Dental Implants", "Root Canal Treatment", "Cosmetic Dentistry", "Orthodontics", "Periodontics"],
  landmarks = [],
  clinicTimings = [
    { day: "Monday - Friday", hours: "10:00 AM - 8:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 6:00 PM" },
    { day: "Sunday", hours: "10:00 AM - 1:30 PM" },
  ],
  clinicAddress = "3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar, Vellore, Tamil Nadu 632006",
  clinicPhone = "+917010650063",
  locationImageUrl = "/placeholder.svg?height=300&width=600",
  children,
  pagePath,
}: SubLocationPageTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEOMetadata title={title} description={description} canonicalUrl={canonicalUrl} />

      <LocationBreadcrumb items={breadcrumbItems} />

      {/* Hero Section with Gradient Background */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 mb-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Dental Clinic in {locationName}, {parentLocation}
          </h1>
          <p className="text-xl mb-6">
            Expert dental care by Dr. Rockson Samuel at Indira Dental Clinic, serving patients in {locationName}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Book an Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href={`tel:${clinicPhone}`}>Call Now</Link>
            </Button>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-20 pointer-events-none">
          <svg width="300" height="300" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              fill="white"
              d="M40,120 C40,80 80,40 120,40 C160,40 200,80 200,120 C200,160 160,200 120,200 C80,200 40,160 40,120 Z"
            />
          </svg>
        </div>
      </div>

      {/* Location Image and Description */}
      <section className="mb-12 grid md:grid-cols-2 gap-8 items-center">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <Image
            src={locationImageUrl || "/placeholder.svg"}
            alt={`Dental clinic in ${locationName}, ${parentLocation}`}
            width={600}
            height={300}
            className="w-full h-auto object-cover"
          />
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">About {locationName}</h2>
          <p className="mb-4 text-gray-700">{locationDescription}</p>
          {locationHighlights.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Area Highlights</h3>
              <ul className="space-y-2">
                {locationHighlights.map((highlight, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </section>

      {/* Clinic Information */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Our Dental Clinic in {locationName}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-blue-500" />
                Location & Landmarks
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{clinicAddress}</p>
              {landmarks.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-2">Nearby Landmarks</h3>
                  <ul className="space-y-2">
                    {landmarks.map((landmark, index) => (
                      <li key={index}>
                        <span className="font-medium">{landmark.name}</span> - {landmark.distance}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-blue-500" />
                Clinic Hours
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {clinicTimings.map((timing, index) => (
                  <li key={index} className="flex justify-between">
                    <span className="font-medium">{timing.day}</span>
                    <span>{timing.hours}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-blue-500" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-2">
                <span className="font-medium">Phone:</span>{" "}
                <Link href={`tel:${clinicPhone}`} className="text-primary hover:underline">
                  {clinicPhone}
                </Link>
              </p>
              <p className="mb-4">
                <span className="font-medium">Email:</span>{" "}
                <Link href="mailto:info@indiradental.com" className="text-primary hover:underline">
                  info@indiradental.com
                </Link>
              </p>
              <Button asChild className="w-full">
                <Link href="/contact">Schedule Appointment</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dentist Profile Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Meet Our Dentist in {locationName}</h2>
        <DentistProfileWidget
          name="Dr. Rockson Samuel"
          qualification="BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach"
          experience="15+"
          specializations={["General Dentistry", "Orthodontics", "Dental Implants"]}
          imageUrl="/professional-dentist-portrait.png"
          rating={4.9}
          reviewCount={120}
        />
      </section>

      {/* Services Overview */}
      <section className="mb-12">
        <ServicesOverview locationName={locationName} />
      </section>

      {/* Location Content */}
      <section className="mb-12">
        <LocationContent locationName={locationName} />
      </section>

      {/* Custom Content Section */}
      {children && <section className="mb-12">{children}</section>}

      {/* FAQs Section */}
      <section className="mb-12">
        <LocationFAQs faqs={faqs} locationName={locationName} />
      </section>

      {/* Nearby Locations Section */}
      {nearbyLocations.length > 0 && (
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Other Areas We Serve Near {locationName}</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {nearbyLocations.map((location, index) => (
              <Link
                key={index}
                href={location.link}
                className="p-4 bg-gray-50 hover:bg-blue-50 rounded-lg text-center transition-colors"
              >
                {location.name}
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection locationName={locationName} />

      {/* Schema.org structured data */}
      <LocationSchema
        locationName={locationName}
        locationDescription={`Indira Dental Clinic offers top-quality dental care in ${locationName}, ${parentLocation}. Expert treatments, state-of-the-art technology, and personalized care by Dr. Rockson Samuel.`}
        pagePath={pagePath}
        hasFaq={true}
        faqItems={faqs}
      />
    </div>
  )
}
