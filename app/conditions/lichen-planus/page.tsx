import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Oral Lichen Planus – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Manage oral lichen planus in Vellore with gentle monitoring, medicated rinses, and lifestyle coaching from Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/lichen-planus',
  },
}

export default function LichenPlanusPage() {
  return <StandardConditionLayout conditionName="Oral Lichen Planus" conditionSlug="lichen-planus" />
}
