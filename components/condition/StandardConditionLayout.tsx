'use client'

import Link from 'next/link'
import { Breadcrumb } from '@/components/breadcrumb'
import { SectionContainer } from '@/components/ui/section-container'
import { ConditionSupportContent } from '@/components/condition/ConditionSupportContent'
import { ConditionSemanticContent } from '@/components/sections/condition-semantic-content'
import { CTAWidget } from '@/components/widgets/cta-widget'

type Crumb = { title: string; href?: string }

export interface StandardConditionLayoutProps {
  conditionName: string
  conditionSlug: string
  breadcrumb?: Crumb[]
  defaultCityName?: string
  defaultLocationName?: string
  clinicName?: string
}

export function StandardConditionLayout({
  conditionName,
  conditionSlug,
  breadcrumb,
  defaultCityName = 'Vellore',
  defaultLocationName = 'Vellore',
  clinicName = 'Indira Dental Clinic',
}: StandardConditionLayoutProps) {
  const crumb: Crumb[] =
    breadcrumb && breadcrumb.length
      ? breadcrumb
      : [
          { title: 'Home', href: '/' },
          { title: 'Conditions', href: '/conditions' },
          { title: conditionName },
        ]

  const heroTitle = `${conditionName} – Causes, Symptoms & Treatment in ${defaultCityName}`
  const heroDescription = `Struggling with ${conditionName.toLowerCase()}? ${clinicName} in ${defaultCityName} offers precise diagnosis, same-day relief, and long-term protection for your smile.`

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50/40 to-teal-50/40">
      <div className="container mx-auto px-4 py-8">
        <Breadcrumb items={crumb} />

        <header className="mt-10 rounded-3xl border border-teal-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
          <div className="flex flex-col gap-4">
            <div>
              <span className="inline-flex items-center rounded-full bg-teal-100 px-4 py-1 text-xs font-semibold text-teal-700">
                Dental Condition Care
              </span>
            </div>
            <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">{heroTitle}</h1>
            <p className="text-lg text-slate-700 md:text-xl">{heroDescription}</p>
            <div className="mt-4 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow transition-colors hover:bg-teal-700"
              >
                Book Appointment Today
              </Link>
              <a
                href="tel:+917010650063"
                className="inline-flex items-center rounded-xl border border-teal-600 px-6 py-3 text-sm font-semibold text-teal-600 transition-colors hover:bg-teal-50"
              >
                Call 7010 650 063
              </a>
            </div>
          </div>
        </header>

        <ConditionSupportContent
          conditionName={conditionName}
          conditionSlug={conditionSlug}
          cityName={defaultCityName}
          clinicName={clinicName}
        />

        <SectionContainer className="py-12">
          <ConditionSemanticContent conditionName={conditionName} conditionSlug={conditionSlug} />
        </SectionContainer>

        <SectionContainer className="py-12">
          <CTAWidget
            title={`Need relief from ${conditionName}?`}
            description={`${clinicName} in ${defaultCityName} offers compassionate, technology-led care to tackle ${conditionName.toLowerCase()} quickly and comfortably.`}
            primaryAction={{ text: 'Book Consultation', href: '/contact' }}
            secondaryAction={{ text: 'Call 7010 650 063', href: 'tel:+917010650063' }}
            showRating
            showAvailability
          />
        </SectionContainer>
      </div>
    </div>
  )
}

