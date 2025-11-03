import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Enamel Erosion – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Strengthen enamel and prevent wear in Vellore with fluoride therapy, remineralisation, and dietary coaching at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/enamel-erosion',
  },
}

export default function EnamelErosionPage() {
  return <StandardConditionLayout conditionName="Enamel Erosion" conditionSlug="enamel-erosion" />
}
