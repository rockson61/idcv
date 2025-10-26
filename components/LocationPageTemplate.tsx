import type React from "react"
import { SEOMetadata } from "@/components/seo/seo-metadata"
import { LocationBreadcrumb } from "@/components/location-breadcrumb"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, ArrowRight } from "lucide-react"
import { DentistProfileWidget } from "@/components/DentistProfileWidget"
import { LocationPricingTable } from "@/components/LocationPricingTable"
import { NearbyLocations } from "@/components/NearbyLocations"
import { CurrencyCalculator } from "@/components/CurrencyCalculator"
import { LocationFAQs } from "@/components/LocationFAQs"
import { CTASection } from "@/components/CTASection"
import { TestimonialCarousel } from "@/components/TestimonialCarousel"
import { LocationSchema } from "@/components/schema/location-schema"

interface LocationPageTemplateProps {
  title: string
  description: string
  canonicalUrl: string
  locationName: string
  stateOrCountry: string
  breadcrumbItems: Array<{ name: string; href: string }>
  locationDescription: string
  nearbyLocations: Array<{ name: string; link: string }>
  faqs: Array<{ question: string; answer: string }>
  specialties?: string[]
  attractions?: Array<{ name: string; description: string }>
  dentistName?: string
  dentistQualification?: string
  dentistExperience?: string
  dentistImageUrl?: string
  testimonials?: Array<{ name: string; location: string; rating: number; text: string; treatment?: string }>
  children?: React.ReactNode
  pagePath: string
}

export function LocationPageTemplate({
  title,
  description,
  canonicalUrl,
  locationName,
  stateOrCountry,
  breadcrumbItems,
  locationDescription,
  nearbyLocations,
  faqs,
  specialties = ["Dental Implants", "Root Canal Treatment", "Cosmetic Dentistry", "Orthodontics", "Periodontics"],
  attractions = [],
  dentistName = "Dr. Rockson Samuel",
  dentistQualification = "BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach",
  dentistExperience = "15+",
  dentistImageUrl = "/professional-dentist-portrait.png",
  testimonials = [
    {
      name: "John Smith",
      location: "United States",
      rating: 5,
      text: "I saved over 70% on my dental implants in India compared to prices back home. The quality of care was excellent, and the clinic was modern and clean.",
      treatment: "Dental Implants",
    },
    {
      name: "Sarah Johnson",
      location: "Australia",
      rating: 5,
      text: "My smile makeover was the best decision I've made. The dentists were highly skilled and took time to understand exactly what I wanted.",
      treatment: "Smile Makeover",
    },
    {
      name: "Michael Brown",
      location: "United Kingdom",
      rating: 5,
      text: "Not only did I get my dental work done at a fraction of UK prices, but I also enjoyed exploring India's rich culture and heritage during my stay.",
      treatment: "Full Mouth Rehabilitation",
    },
  ],
  children,
  pagePath,
}: LocationPageTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEOMetadata title={title} description={description} canonicalUrl={canonicalUrl} />

      <LocationBreadcrumb items={breadcrumbItems} />

      {/* Hero Section with Gradient Background */}
      <div className="relative rounded-xl overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 mb-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Best Dental Clinic in {locationName}, {stateOrCountry}
          </h1>
          <p className="text-xl mb-6">
            Save up to 70% on dental treatments while experiencing world-class care at Indira Dental Clinic
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/contact">Book an Appointment</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link href="#pricing">View Pricing</Link>
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

      {/* About Location Section */}
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle>About {locationName}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{locationDescription}</p>
              {attractions.length > 0 && (
                <>
                  <h3 className="text-lg font-semibold mb-2">Popular Attractions</h3>
                  <ul className="space-y-2">
                    {attractions.map((attraction, index) => (
                      <li key={index}>
                        <span className="font-medium">{attraction.name}</span> - {attraction.description}
                      </li>
                    ))}
                  </ul>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Our Dental Specialties in {locationName}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {specialties.map((specialty, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>{specialty}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button asChild>
                  <Link href="/services">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Dentist Profile Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Meet Our Lead Dentist in {locationName}</h2>
        <DentistProfileWidget
          name={dentistName}
          qualification={dentistQualification}
          experience={dentistExperience}
          specializations={["General Dentistry", "Orthodontics", "Dental Implants"]}
          imageUrl={dentistImageUrl}
          rating={4.9}
          reviewCount={120}
        />
      </section>

      {/* Testimonials Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">What Our Patients Say</h2>
        <TestimonialCarousel testimonials={testimonials} />
      </section>

      {/* Custom Content Section */}
      {children && <section className="mb-12">{children}</section>}

      {/* Pricing Section */}
      <section id="pricing" className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Dental Treatment Pricing in {locationName}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <LocationPricingTable />
          </div>
          <div>
            <CurrencyCalculator />
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="mb-12">
        <LocationFAQs faqs={faqs} locationName={locationName} />
      </section>

      {/* Nearby Locations Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Explore Nearby Locations</h2>
        <NearbyLocations cities={nearbyLocations} />
      </section>

      {/* CTA Section */}
      <CTASection locationName={locationName} />

      {/* Schema.org structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Indira Dental Clinic",
            image: "https://velloredental.com/oacmojos/2024/01/Dr-Rockson-Samuel-Best-Dentist-in-Vellore.jpeg",
            url: canonicalUrl,
            telephone: "+917010650063",
            address: {
              "@type": "PostalAddress",
              streetAddress: "3rd Floor, 54, Katpadi Main Rd, Gandhi Nagar",
              addressLocality: locationName,
              addressRegion: stateOrCountry,
              postalCode: "632006",
              addressCountry: "IN",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 12.9534426,
              longitude: 79.1370592,
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                opens: "10:00",
                closes: "20:00",
              },
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: "Sunday",
                opens: "10:00",
                closes: "13:30",
              },
            ],
            sameAs: [
              "https://www.facebook.com/indiradental",
              "https://www.instagram.com/indiradental",
              "https://twitter.com/indiradental",
            ],
          }),
        }}
      />
      {/* Add Schema Markup */}
      <LocationSchema
        locationName={locationName}
        locationDescription={`Indira Dental Clinic offers top-quality dental care in ${locationName}. Expert treatments, state-of-the-art technology, and personalized care by Dr. Rockson Samuel.`}
        pagePath={pagePath}
        hasFaq={!!faqs && faqs.length > 0}
        faqItems={faqs?.map((faq) => ({
          question: faq.question,
          answer: faq.answer,
        }))}
      />
    </div>
  )
}
