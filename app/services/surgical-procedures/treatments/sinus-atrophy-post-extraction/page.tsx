import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Sinus Atrophy Post Extraction | Indira Dental Clinic',
  description: 'Sinus Atrophy Post Extraction at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Sinus Atrophy Post Extraction"
      serviceSlug="sinus-atrophy-post-extraction"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
