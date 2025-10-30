import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: '3rd Molar Causing Crowding | Indira Dental Clinic',
  description: '3rd Molar Causing Crowding at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="3rd Molar Causing Crowding"
      serviceSlug="3rd-molar-causing-crowding"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
