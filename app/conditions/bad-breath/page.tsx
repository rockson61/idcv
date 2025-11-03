import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Bad Breath – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Eliminate chronic bad breath in Vellore with personalised dental care. Indira Dental Clinic identifies the underlying cause and offers gentle, long-lasting breath freshening solutions. Book an appointment today.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/bad-breath',
  },
}

export default function BadBreathPage() {
  return <StandardConditionLayout conditionName="Bad Breath" conditionSlug="bad-breath" />
}
