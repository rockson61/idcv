import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Receding Gums – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Treat receding gums in Vellore with soft-tissue grafting, laser therapy, and personalised oral care at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/receding-gums',
  },
}

export default function RecedingGumsPage() {
  return <StandardConditionLayout conditionName="Receding Gums" conditionSlug="receding-gums" />
}
