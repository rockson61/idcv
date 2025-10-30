import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Mandibular Posterior Atrophy | Indira Dental Clinic',
  description: 'Mandibular Posterior Atrophy at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Mandibular Posterior Atrophy"
      serviceSlug="mandibular-posterior-atrophy"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
