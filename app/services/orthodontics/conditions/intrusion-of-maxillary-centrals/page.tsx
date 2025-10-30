import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Intrusion Of Maxillary Centrals | Indira Dental Clinic',
  description: 'Intrusion Of Maxillary Centrals at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Intrusion Of Maxillary Centrals"
      serviceSlug="intrusion-of-maxillary-centrals"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
