import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Chipped Crown Exposed Metal | Indira Dental Clinic',
  description: 'Chipped Crown Exposed Metal at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Chipped Crown Exposed Metal"
      serviceSlug="chipped-crown-exposed-metal"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
