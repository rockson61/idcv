import type { Metadata } from 'next'
import { StandardConditionLayout } from '@/components/condition/StandardConditionLayout'

export const metadata: Metadata = {
  title: "Abscessed Tooth – Causes, Symptoms & Treatment in Vellore | Indira Dental Clinic",
  description:
    'Get fast relief from abscessed teeth in Vellore. Indira Dental Clinic treats dental infections with drainage, root canal therapy, and pain-free care. Book your visit today.',
  alternates: {
    canonical: 'https://www.dentalclinicinvellore.in/conditions/abscessed-tooth',
  },
}

export default function AbscessedToothPage() {
  return <StandardConditionLayout conditionName="Abscessed Tooth" conditionSlug="abscessed-tooth" />
}
