import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Periodontitis – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Reverse periodontitis in Vellore with deep cleaning, laser therapy, and maintenance programmes from Indira Dental Clinic. Protect gums and bone health.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/periodontitis',
  },
}

export default function PeriodontitisPage() {
  return <StandardConditionLayout conditionName="Periodontitis" conditionSlug="periodontitis" />
}
