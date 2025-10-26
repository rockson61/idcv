import type React from "react"
import { SEOMetadata } from "@/components/seo/seo-metadata"
import { LocationBreadcrumb } from "@/components/location-breadcrumb"
import { PageHeader } from "@/components/page-header"
import { DentistProfileWidget } from "@/components/DentistProfileWidget"
import { ServicesOverview } from "@/components/ServicesOverview"
import { TreatmentsAndConditions } from "@/components/TreatmentsAndConditions"
import { PatientReviews } from "@/components/patient-reviews"
import { ClinicUSP } from "@/components/clinic-usp"
import { NearbyLocations } from "@/components/nearby-locations"
import { LocationContent } from "@/components/LocationContent"
import { CTASection } from "@/components/CTASection"
import { Footer } from "@/components/footer"
import { SchemaMarkup } from "@/components/schema/schema-markup"

interface PageTemplateProps {
  title: string
  description: string
  canonicalUrl: string
  breadcrumbItems: Array<{ name: string; href: string }>
  pageHeading: string
  pageSubheading?: string
  locationName?: string
  nearbyLocations?: Array<{ name: string; link: string }>
  children?: React.ReactNode
}

export function PageTemplate({
  title,
  description,
  canonicalUrl,
  breadcrumbItems,
  pageHeading,
  pageSubheading = "", // Provide a default value
  locationName,
  nearbyLocations,
  children,
}: PageTemplateProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEOMetadata title={title} description={description} canonicalUrl={canonicalUrl} />
      <LocationBreadcrumb items={breadcrumbItems} />
      <PageHeader heading={pageHeading} breadcrumb={breadcrumbItems}>
        {pageSubheading && <p className="text-muted-foreground">{pageSubheading}</p>}
      </PageHeader>
      {locationName && <LocationContent locationName={locationName} />}
      {children}
      <ServicesOverview locationName={locationName} />
      <DentistProfileWidget
        name="Dr. Rockson Samuel"
        qualification="BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach"
        experience="15+"
        specializations={["General Dentistry", "Orthodontics", "Dental Implants"]}
        imageUrl="/professional-dentist-portrait.png"
        rating={4.9}
        reviewCount={100}
        locationName={locationName}
      />
      <TreatmentsAndConditions locationName={locationName} />
      <PatientReviews locationName={locationName} />
      <ClinicUSP locationName={locationName} />
      <CTASection locationName={locationName} /> {/* Include CTASection here */}
      {nearbyLocations && <NearbyLocations nearbyLocations={nearbyLocations} />}
      <Footer />
      {/* Add Schema Markup */}
      <SchemaMarkup
        pageTitle={title}
        pageDescription={description}
        pagePath={canonicalUrl.replace("https://www.dentalclinicinvellore.in", "")}
        hasFaq={!!breadcrumbItems.find((item) => item.name.toLowerCase().includes("faq"))}
      />
    </div>
  )
}
