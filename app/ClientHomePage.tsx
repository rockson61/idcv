"use client"
import { SchemaMarkup } from "@/components/schema/schema-markup"
import { Hero } from "@/components/sections/hero"
import { ServicesOverview } from "@/components/sections/services-overview"
import { DentistsOverview } from "@/components/sections/dentists-overview"
import { ClinicsOverview } from "@/components/sections/clinics-overview"
import { Testimonials } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"

export default function ClientHomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero
        title="Best Dental Clinic in Vellore"
        subtitle="Dr. Rockson Samuel"
        description="Vellore's premier dental clinic offering advanced treatments including implants, root canal, cosmetic dentistry & more. 5000+ successful cases with cutting-edge technology and personalized care."
        primaryCTA={{ text: "Book Free Consultation", href: "/contact" }}
        secondaryCTA={{ text: "View Our Services", href: "/services" }}
      />

      <ServicesOverview />

      <DentistsOverview />

      <ClinicsOverview />

      <Testimonials />

      <CTASection
        title="Experience Dental Excellence in Vellore"
        description="Join our family of 5,000+ satisfied patients. Schedule your consultation today and discover why we're Vellore's most trusted dental clinic."
      />

      <SchemaMarkup
        pageTitle="Best Dental Clinic in Vellore | Dr. Rockson Samuel | Top-Rated Dentist (2024)"
        pageDescription="Vellore's premier dental clinic offering advanced treatments including implants, root canal, cosmetic dentistry & more. 5000+ successful cases with Dr. Rockson Samuel."
        pagePath="/"
        pageType="WebPage"
      />
    </div>
  )
}
