import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Upper Jaw Multiple Implants | Indira Dental Clinic',
  description: 'Upper Jaw Multiple Implants at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Upper Jaw Multiple Implants"
      serviceSlug="upper-jaw-multiple-implants"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
