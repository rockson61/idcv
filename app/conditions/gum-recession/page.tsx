import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Gum Recession – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Stop gum recession in Vellore with soft-tissue grafts, laser therapy, and customised prevention at Indira Dental Clinic. Preserve your smile line confidently.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/gum-recession',
  },
}

export default function GumRecessionPage() {
  return <StandardConditionLayout conditionName="Gum Recession" conditionSlug="gum-recession" />
}
