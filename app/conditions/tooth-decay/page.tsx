import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Tooth Decay – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Prevent and treat tooth decay in Vellore with digital diagnostics, minimally invasive fillings, and preventive coaching at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/tooth-decay',
  },
}

export default function ToothDecayPage() {
  return <StandardConditionLayout conditionName="Tooth Decay" conditionSlug="tooth-decay" />
}
