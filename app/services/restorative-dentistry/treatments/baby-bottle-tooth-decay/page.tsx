import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Baby Bottle Tooth Decay | Indira Dental Clinic',
  description: 'Baby Bottle Tooth Decay at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Baby Bottle Tooth Decay"
      serviceSlug="baby-bottle-tooth-decay"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
