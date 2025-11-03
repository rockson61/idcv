import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Malocclusion – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Correct malocclusion in Vellore with braces, aligners, and bite therapy from Indira Dental Clinic. Personalised plans for children, teens, and adults.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/malocclusion',
  },
}

export default function MalocclusionPage() {
  return <StandardConditionLayout conditionName="Malocclusion" conditionSlug="malocclusion" />
}
