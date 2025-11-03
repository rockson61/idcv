import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Oral Thrush – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Treat oral thrush in Vellore with antifungal therapy, immune support, and oral hygiene coaching from Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/oral-thrush',
  },
}

export default function OralThrushPage() {
  return <StandardConditionLayout conditionName="Oral Thrush" conditionSlug="oral-thrush" />
}
