'use client'

import React from 'react'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { PageHeader } from '@/components/page-header'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/sections/service-semantic-content'
import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'
import { RelevantQAWidget } from '@/components/widgets/relevant-qa-widget'
import { RelatedServices } from '@/components/service/RelatedServices'
import { serviceCatalog } from '@/lib/service-catalog'
import { ServiceSupportContent } from '@/components/service/ServiceSupportContent'

type BreadcrumbItem = { title: string; href?: string }

export interface StandardServiceLayoutProps {
  serviceName: string
  serviceSlug: string
  breadcrumb?: BreadcrumbItem[]
  showPriceComparison?: boolean
  defaultLocationName?: string
  defaultCityName?: string
}

export function StandardServiceLayout({
  serviceName,
  serviceSlug,
  breadcrumb,
  showPriceComparison = true,
  defaultLocationName = 'Vellore',
  defaultCityName = 'Vellore',
}: StandardServiceLayoutProps) {
  const crumb: BreadcrumbItem[] =
    breadcrumb && breadcrumb.length
      ? breadcrumb
      : [
          { title: 'Home', href: '/' },
          { title: 'Services', href: '/services' },
          { title: serviceName },
        ]

  const clinicName = 'Indira Dental Clinic'
  const serviceHeading = `${serviceName} in ${defaultCityName} – Restore Your Smile with ${clinicName}`
  const introCopy = `Experience personalised ${serviceName.toLowerCase()} at ${clinicName} in ${defaultCityName}. We combine advanced diagnostics, gentle techniques, and transparent advice so you can feel confident about every step of your treatment.`

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={crumb} />

      <PageHeader heading={serviceHeading}>
        <p className="text-lg text-gray-700 leading-relaxed">{introCopy}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-teal-700"
          >
            Book Your Free Consultation
          </Link>
          <a
            href="tel:+917010650063"
            className="inline-flex items-center rounded-xl border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-600 transition-colors hover:bg-teal-50"
          >
            Call 7010 650 063
          </a>
        </div>
      </PageHeader>

      <SectionContainer className="py-12">
        <ServiceSemanticContent serviceName={serviceName} serviceSlug={serviceSlug} />
      </SectionContainer>

      <ServiceSupportContent
        serviceName={serviceName}
        serviceSlug={serviceSlug}
        cityName={defaultCityName}
        locationName={defaultLocationName}
        clinicName={clinicName}
        showPriceComparison={showPriceComparison}
      />

      <SectionContainer className="py-12">
        <CTAWidget
          title={`Book ${serviceName}`}
          description="Get expert dental care from our experienced clinical team. Flexible scheduling, transparent costs."
          primaryAction={{ text: 'Book Appointment', href: '/contact' }}
          secondaryAction={{ text: 'Call Now', href: 'tel:+917010650063' }}
          showRating
          showAvailability
        />
      </SectionContainer>

      <SectionContainer className="py-12" id="related-services">
        <RelatedServices 
          serviceSlug={serviceSlug}
          related={serviceCatalog[serviceSlug]?.related}
          alternatives={serviceCatalog[serviceSlug]?.alternatives}
        />
      </SectionContainer>

      <SectionContainer className="py-12">
        <RelevantQAWidget
          title={`Common Questions About ${serviceName}`}
          serviceName={serviceName}
          questions={serviceCatalog[serviceSlug]?.qas || []}
        />
      </SectionContainer>

      <SectionContainer className="py-12">
        <PeopleAlsoSearchFor location={defaultLocationName} city={defaultCityName} />
      </SectionContainer>
    </div>
  )
}


