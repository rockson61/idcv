import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Loose Baby Tooth With Crown | Indira Dental Clinic',
  description: 'Loose Baby Tooth With Crown at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Loose Baby Tooth With Crown"
      serviceSlug="loose-baby-tooth-with-crown"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
