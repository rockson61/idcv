import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Braces With Crowns And Bridges | Indira Dental Clinic',
  description: 'Braces With Crowns And Bridges at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Braces With Crowns And Bridges"
      serviceSlug="braces-with-crowns-and-bridges"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
