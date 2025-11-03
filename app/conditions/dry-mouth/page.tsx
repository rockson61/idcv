import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Dry Mouth – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Find lasting relief from dry mouth in Vellore. Indira Dental Clinic addresses xerostomia triggers, hydration habits, and salivary gland health with personalised care.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/dry-mouth',
  },
}

export default function DryMouthPage() {
  return <StandardConditionLayout conditionName="Dry Mouth" conditionSlug="dry-mouth" />
}
