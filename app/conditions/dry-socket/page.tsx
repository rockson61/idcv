import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Dry Socket – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Treat dry socket pain in Vellore quickly. Indira Dental Clinic provides medicated dressings, expert follow-up, and prevention tips after tooth extractions.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/dry-socket',
  },
}

export default function DrySocketPage() {
  return <StandardConditionLayout conditionName="Dry Socket" conditionSlug="dry-socket" />
}
