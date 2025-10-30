import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Premolar | Indira Dental Clinic',
  description: 'Premolar at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Premolar"
      serviceSlug="premolar"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
