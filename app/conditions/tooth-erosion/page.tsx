import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Tooth Erosion – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Treat tooth erosion in Vellore with remineralisation therapy, protective restorations, and dietary counselling at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/tooth-erosion',
  },
}

export default function ToothErosionPage() {
  return <StandardConditionLayout conditionName="Tooth Erosion" conditionSlug="tooth-erosion" />
}
