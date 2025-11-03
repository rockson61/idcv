import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Oral Cancer – Causes, Symptoms & Screening in Vellore | Indira Dental Clinic",
  description:
    'Early detection of oral cancer in Vellore with advanced screening, biopsies, and specialist coordination at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/oral-cancer',
  },
}

export default function OralCancerPage() {
  return <StandardConditionLayout conditionName="Oral Cancer" conditionSlug="oral-cancer" />
}
