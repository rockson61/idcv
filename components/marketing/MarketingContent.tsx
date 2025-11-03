'use client'

import { Fragment } from 'react'
import Link from 'next/link'
import { CheckCircle, ChevronRight, ListChecks, Sparkles } from 'lucide-react'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export interface MarketingSectionHighlight {
  title: string
  description: string
}

export interface MarketingSectionStep {
  title: string
  description: string
}

export interface MarketingSectionStat {
  label: string
  value: string
  description?: string
}

export interface MarketingSection {
  id: string
  heading: string
  eyebrow?: string
  description?: string
  content?: string[]
  bullets?: string[]
  highlights?: MarketingSectionHighlight[]
  steps?: MarketingSectionStep[]
  stats?: MarketingSectionStat[]
  cta?: {
    text: string
    href: string
  }
}

export interface MarketingFAQ {
  question: string
  answer: string
}

export interface MarketingCTA {
  heading: string
  description?: string
  primary: {
    text: string
    href: string
  }
  secondary?: {
    text: string
    href: string
  }
  tertiary?: {
    text: string
    href: string
  }
}

export interface MarketingContentProps {
  sections: MarketingSection[]
  tocTitle?: string
  intro?: {
    eyebrow?: string
    heading: string
    description?: string
  }
  stats?: MarketingSectionStat[]
  faqs?: MarketingFAQ[]
  cta?: MarketingCTA
  schema?: Record<string, unknown> | Record<string, unknown>[]
  className?: string
}

export function MarketingContent({
  sections,
  tocTitle = 'On this page',
  intro,
  stats,
  faqs,
  cta,
  schema,
  className,
}: MarketingContentProps) {
  if (!sections.length) {
    return null
  }

  return (
    <div className={cn('mt-16 space-y-16', className)}>
      {intro && (
        <div className="text-center max-w-3xl mx-auto space-y-3">
          {intro.eyebrow && <span className="text-sm font-semibold uppercase tracking-wide text-teal-600">{intro.eyebrow}</span>}
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{intro.heading}</h2>
          {intro.description && <p className="text-base text-slate-600 md:text-lg">{intro.description}</p>}
        </div>
      )}

      <section aria-labelledby="marketing-content-toc" className="rounded-2xl border border-teal-100 bg-white/80 p-6 shadow-sm">
        <h2 id="marketing-content-toc" className="text-xl font-semibold text-slate-900 mb-4">
          {tocTitle}
        </h2>
        <ol className="grid gap-3 sm:grid-cols-2">
          {sections.map((section, index) => (
            <li key={section.id} className="rounded-xl border border-teal-100 bg-teal-50/60 px-4 py-3 text-sm font-medium text-teal-700 transition hover:border-teal-400 hover:text-teal-900">
              <Link href={`#${section.id}`} className="flex items-center justify-between gap-2">
                <span className="flex items-center gap-2">
                  <ListChecks className="h-4 w-4" />
                  <span>{section.heading}</span>
                </span>
                <span className="text-xs text-teal-500 font-semibold">0{index + 1}</span>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      {stats && stats.length > 0 && (
        <section className="rounded-2xl border border-slate-100 bg-slate-50/80 p-6 shadow-sm">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-xl bg-white px-4 py-5 text-center shadow-sm">
                <p className="text-3xl font-bold text-teal-600">{stat.value}</p>
                <p className="text-sm font-semibold text-slate-900">{stat.label}</p>
                {stat.description && <p className="mt-1 text-xs text-slate-500">{stat.description}</p>}
              </div>
            ))}
          </div>
        </section>
      )}

      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-24 space-y-6 rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-sm">
          <header className="space-y-2">
            {section.eyebrow && <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">{section.eyebrow}</span>}
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">{section.heading}</h2>
            {section.description && <p className="text-base text-slate-600">{section.description}</p>}
          </header>

          {section.content && section.content.length > 0 && (
            <div className="prose prose-slate max-w-none">
              {section.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          )}

          {section.bullets && section.bullets.length > 0 && (
            <ul className="space-y-3">
              {section.bullets.map((bullet) => (
                <li key={bullet} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle className="mt-1 h-5 w-5 flex-shrink-0 text-teal-600" />
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          )}

          {section.highlights && section.highlights.length > 0 && (
            <div className="grid gap-4 md:grid-cols-2">
              {section.highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-xl border border-teal-100 bg-teal-50/70 p-5">
                  <h3 className="text-lg font-semibold text-teal-900">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-teal-700">{highlight.description}</p>
                </div>
              ))}
            </div>
          )}

          {section.steps && section.steps.length > 0 && (
            <ol className="grid gap-4 md:grid-cols-2">
              {section.steps.map((step, index) => (
                <li key={step.title} className="rounded-xl border border-slate-100 bg-slate-50 p-5">
                  <div className="mb-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-teal-600 text-sm font-semibold text-white">
                    {index + 1}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </li>
              ))}
            </ol>
          )}

          {section.stats && section.stats.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-2">
              {section.stats.map((stat) => (
                <div key={stat.label} className="rounded-xl border border-slate-100 bg-slate-50/80 p-4">
                  <p className="text-2xl font-bold text-teal-600">{stat.value}</p>
                  <p className="text-sm font-semibold text-slate-900">{stat.label}</p>
                  {stat.description && <p className="mt-1 text-xs text-slate-500">{stat.description}</p>}
                </div>
              ))}
            </div>
          )}

          {section.cta && (
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href={section.cta.href}>{section.cta.text}</Link>
              </Button>
            </div>
          )}
        </section>
      ))}

      {faqs && faqs.length > 0 && (
        <section className="rounded-3xl border border-slate-100 bg-white/90 p-8 shadow-sm" id="faqs">
          <header className="mb-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-teal-600">FAQs</span>
            <h2 className="mt-1 text-2xl font-bold text-slate-900 md:text-3xl">Frequently Asked Questions</h2>
            <p className="mt-2 text-sm text-slate-600">Answers to the questions we hear most from patients.</p>
          </header>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={faq.question} value={`faq-${index}`} className="rounded-xl border border-slate-100 bg-slate-50/80 px-4">
                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-slate-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {cta && (
        <section className="rounded-3xl border border-teal-100 bg-gradient-to-r from-teal-600 to-blue-600 p-8 shadow-sm text-white">
          <div className="space-y-4 text-center">
            <span className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-1 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              Let's get started
            </span>
            <h2 className="text-3xl font-bold md:text-4xl">{cta.heading}</h2>
            {cta.description && <p className="text-base text-white/80 md:text-lg">{cta.description}</p>}
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild size="lg" className="bg-white text-teal-600 hover:bg-slate-100">
                <Link href={cta.primary.href}>{cta.primary.text}</Link>
              </Button>
              {cta.secondary && (
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href={cta.secondary.href}>{cta.secondary.text}</Link>
                </Button>
              )}
              {cta.tertiary && (
                <Button asChild size="lg" variant="ghost" className="text-white hover:bg-white/10">
                  <Link href={cta.tertiary.href}>{cta.tertiary.text}</Link>
                </Button>
              )}
            </div>
          </div>
        </section>
      )}

      {schema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      )}
    </div>
  )
}


