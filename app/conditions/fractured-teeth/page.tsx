import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Fractured Teeth – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Repair fractured teeth in Vellore with crowns, bonding, and bite correction at Indira Dental Clinic. Enjoy durable, natural-looking results.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/fractured-teeth',
  },
}

export default function FracturedTeethPage() {
  return <StandardConditionLayout conditionName="Fractured Teeth" conditionSlug="fractured-teeth" />
}
