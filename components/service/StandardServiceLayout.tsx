import React from 'react'
import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { PageHeader } from '@/components/page-header'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PriceComparisonTable } from '@/components/location/PriceComparisonTable'
import { PeopleAlsoSearchFor } from '@/components/location/PeopleAlsoSearchFor'
import { RelevantQAWidget } from '@/components/widgets/relevant-qa-widget'
import { RelatedServices } from '@/components/service/RelatedServices'

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

  return (
    <div className="container mx-auto px-4 py-8">
      <Breadcrumb items={crumb} />

      <PageHeader
        title={serviceName}
        subtitle="Advanced, evidence-based care with modern technology and transparent pricing"
      />

      <SectionContainer className="py-12">
        <ServiceSemanticContent serviceName={serviceName} serviceSlug={serviceSlug} />
      </SectionContainer>

      {showPriceComparison && (
        <SectionContainer className="py-12">
          <PriceComparisonTable locationName={defaultCityName} />
        </SectionContainer>
      )}

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

      <SectionContainer className="py-12">
        <RelatedServices serviceSlug={serviceSlug} />
      </SectionContainer>

      <SectionContainer className="py-12">
        <RelevantQAWidget
          title={`Common Questions About ${serviceName}`}
          serviceName={serviceName}
          questions={[
            {
              id: 'qa-1',
              title: `${serviceName}: Is it right for me?`,
              slug: serviceSlug,
              excerpt: `Learn who benefits most from ${serviceName}, expected results, and safety.`,
              helpfulVotes: 12,
              views: 320,
              createdAt: '2024-01-10T10:00:00Z',
            },
            {
              id: 'qa-2',
              title: `${serviceName} cost and financing options`,
              slug: `${serviceSlug}-cost`,
              excerpt: 'A quick overview of price ranges, EMI availability, and what affects cost.',
              helpfulVotes: 9,
              views: 210,
              createdAt: '2024-02-05T10:00:00Z',
            },
            {
              id: 'qa-3',
              title: `Recovery time after ${serviceName}`,
              slug: `${serviceSlug}-recovery-time`,
              excerpt: 'How long recovery typically takes and how to speed it up.',
              helpfulVotes: 7,
              views: 150,
              createdAt: '2024-03-12T10:00:00Z',
            },
          ]}
        />
      </SectionContainer>

      <SectionContainer className="py-12">
        <PeopleAlsoSearchFor location={defaultLocationName} city={defaultCityName} />
      </SectionContainer>
    </div>
  )
}


