import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Wisdom Teeth Issues – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Solve wisdom teeth issues in Vellore with precise evaluation, painless extraction, and personalised recovery care at Indira Dental Clinic.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/wisdom-teeth-issues',
  },
}

export default function WisdomTeethIssuesPage() {
  return <StandardConditionLayout conditionName="Wisdom Teeth Issues" conditionSlug="wisdom-teeth-issues" />
}
