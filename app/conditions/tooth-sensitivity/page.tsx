import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Tooth Sensitivity – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Soothe tooth sensitivity in Vellore with desensitising therapy, fluoride applications, and protective restorations at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/tooth-sensitivity',
  },
}

export default function ToothSensitivityPage() {
  return <StandardConditionLayout conditionName="Tooth Sensitivity" conditionSlug="tooth-sensitivity" />
}
