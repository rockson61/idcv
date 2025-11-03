import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "TMJ Disorders – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Ease TMJ disorders and jaw pain in Vellore with splints, physiotherapy, and minimally invasive joint care at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/tmj-disorders',
  },
}

export default function TmjDisordersPage() {
  return <StandardConditionLayout conditionName="TMJ Disorders" conditionSlug="tmj-disorders" />
}
