import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Gum Disease – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Treat gum disease in Vellore with scaling, laser therapy, and periodontal maintenance from Indira Dental Clinic. Protect your gums and overall health.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/gum-disease',
  },
}

export default function GumDiseasePage() {
  return <StandardConditionLayout conditionName="Gum Disease" conditionSlug="gum-disease" />
}
