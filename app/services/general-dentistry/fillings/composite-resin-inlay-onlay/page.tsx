import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Composite Resin Inlay Onlay | Indira Dental Clinic',
  description: 'Composite Resin Inlay Onlay at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Composite Resin Inlay Onlay"
      serviceSlug="composite-resin-inlay-onlay"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
