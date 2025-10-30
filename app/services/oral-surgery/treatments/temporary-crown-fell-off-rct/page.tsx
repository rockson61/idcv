import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Temporary Crown Fell Off Rct | Indira Dental Clinic',
  description: 'Temporary Crown Fell Off Rct at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Temporary Crown Fell Off Rct"
      serviceSlug="temporary-crown-fell-off-rct"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
