import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Sensitive Teeth Treatment | Indira Dental Clinic',
  description: 'Sensitive Teeth Treatment at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Sensitive Teeth Treatment"
      serviceSlug="sensitive-teeth-treatment"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
