import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Broken Jaw – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Receive compassionate care for broken or fractured jaws in Vellore. Indira Dental Clinic provides digital imaging, splinting, and coordinated oral surgery for safe healing.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/broken-jaw',
  },
}

export default function BrokenJawPage() {
  return <StandardConditionLayout conditionName="Broken Jaw" conditionSlug="broken-jaw" />
}
