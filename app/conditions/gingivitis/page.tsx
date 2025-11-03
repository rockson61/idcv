import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Gingivitis – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Reverse gingivitis in Vellore with professional cleanings, gum therapy, and personalised hygiene coaching at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/gingivitis',
  },
}

export default function GingivitisPage() {
  return <StandardConditionLayout conditionName="Gingivitis" conditionSlug="gingivitis" />
}
