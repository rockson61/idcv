import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'General Anesthesia | Indira Dental Clinic',
  description: 'General Anesthesia at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="General Anesthesia"
      serviceSlug="general-anesthesia"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
