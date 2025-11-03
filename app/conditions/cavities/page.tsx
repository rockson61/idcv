import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Cavities – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Treat dental cavities in Vellore with minimally invasive fillings, fluoride therapy, and preventive advice from Indira Dental Clinic. Schedule your check-up today.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/cavities',
  },
}

export default function CavitiesPage() {
  return <StandardConditionLayout conditionName="Cavities" conditionSlug="cavities" />
}
