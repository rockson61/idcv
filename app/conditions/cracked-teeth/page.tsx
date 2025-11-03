import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Cracked Teeth – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Repair cracked or chipped teeth in Vellore with same-day bonding, crowns, and bite adjustments at Indira Dental Clinic. Restore strength and aesthetics quickly.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/cracked-teeth',
  },
}

export default function CrackedTeethPage() {
  return <StandardConditionLayout conditionName="Cracked Teeth" conditionSlug="cracked-teeth" />
}
