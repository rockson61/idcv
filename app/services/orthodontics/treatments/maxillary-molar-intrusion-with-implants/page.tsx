import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Maxillary Molar Intrusion With Implants | Indira Dental Clinic',
  description: 'Maxillary Molar Intrusion With Implants at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Maxillary Molar Intrusion With Implants"
      serviceSlug="maxillary-molar-intrusion-with-implants"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
