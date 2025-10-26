"use client"
import { SchemaMarkup } from "@/components/schema/schema-markup"
// Using static Hero - no props accepted
import { Hero } from "@/components/sections/hero"
import { ServicesOverview } from "@/components/sections/services-overview"
// Updated imports with correct names
import { ClinicsOverview } from "@/components/sections/clinics-overview"
import { TestimonialsSection } from "@/components/sections/testimonials"
import { CTASection } from "@/components/sections/cta-section"
import { SemanticLinksSection } from "@/components/sections/semantic-links-section"

export default function ClientHomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />

      <ServicesOverview />
      
      <SemanticLinksSection pageType="homepage" />

      {/* <DentistsOverview /> */}

      <ClinicsOverview />

      <TestimonialsSection />

      <CTASection />

      <SchemaMarkup
        pageTitle="Best Dental Clinic in Vellore | Dr. Rockson Samuel | Top-Rated Dentist (2024)"
        pageDescription="Vellore's premier dental clinic offering advanced treatments including implants, root canal, cosmetic dentistry & more. 5000+ successful cases with Dr. Rockson Samuel."
        pagePath="/"
        pageType="WebPage"
      />
    </div>
  )
}
