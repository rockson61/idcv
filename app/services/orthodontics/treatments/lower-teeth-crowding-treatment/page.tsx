import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Lower Teeth Crowding Treatment | Indira Dental Clinic',
  description: 'Lower Teeth Crowding Treatment at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Lower Teeth Crowding Treatment"
      serviceSlug="lower-teeth-crowding-treatment"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
