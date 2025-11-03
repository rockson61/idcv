import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Bruxism – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Protect teeth from grinding and clenching in Vellore. Indira Dental Clinic designs custom night guards, TMJ therapy, and stress-management plans for bruxism relief.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/bruxism',
  },
}

export default function BruxismPage() {
  return <StandardConditionLayout conditionName="Bruxism" conditionSlug="bruxism" />
}
