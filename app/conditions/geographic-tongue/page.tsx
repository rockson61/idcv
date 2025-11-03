import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Geographic Tongue – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Manage geographic tongue in Vellore with personalised guidance, nutritional support, and soothing care from Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/geographic-tongue',
  },
}

export default function GeographicTonguePage() {
  return <StandardConditionLayout conditionName="Geographic Tongue" conditionSlug="geographic-tongue" />
}
