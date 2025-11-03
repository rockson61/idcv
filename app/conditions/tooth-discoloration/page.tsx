import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Tooth Discoloration – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Brighten tooth discoloration in Vellore with professional whitening, veneers, and stain management at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/tooth-discoloration',
  },
}

export default function ToothDiscolorationPage() {
  return <StandardConditionLayout conditionName="Tooth Discoloration" conditionSlug="tooth-discoloration" />
}
