import type { Metadata } from "next"
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Tooth Abscess – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description: "Fast, painless treatment for tooth abscesses in Vellore. Indira Dental Clinic offers emergency drainage, root canal therapy, and infection relief. Book your appointment now.",
  alternates: {
    canonical: "https://www.dentalclinicinvellore.in/conditions/tooth-abscess",
  },
}

export default function ToothAbscessPage() {
  return <StandardConditionLayout conditionName="Tooth Abscess" conditionSlug="tooth-abscess" />
}
