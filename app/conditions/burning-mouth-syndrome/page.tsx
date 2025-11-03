import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Burning Mouth Syndrome – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Find relief from burning mouth syndrome in Vellore with personalised diagnostics, nutritional guidance, and gentle oral care at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/burning-mouth-syndrome',
  },
}

export default function BurningMouthSyndromePage() {
  return <StandardConditionLayout conditionName="Burning Mouth Syndrome" conditionSlug="burning-mouth-syndrome" />
}
