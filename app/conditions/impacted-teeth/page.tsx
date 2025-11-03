import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Impacted Teeth – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Resolve impacted teeth and wisdom tooth pain in Vellore with minimally invasive oral surgery at Indira Dental Clinic. Safe, precise, and comfortable care.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/impacted-teeth',
  },
}

export default function ImpactedTeethPage() {
  return <StandardConditionLayout conditionName="Impacted Teeth" conditionSlug="impacted-teeth" />
}
