import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Bleeding Gums – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Stop bleeding gums in Vellore with gentle periodontal care. Indira Dental Clinic offers deep cleaning, laser therapy, and customised home care to protect your smile.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/bleeding-gums',
  },
}

export default function BleedingGumsPage() {
  return <StandardConditionLayout conditionName="Bleeding Gums" conditionSlug="bleeding-gums" />
}
