import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Invisalign For Severely Crowded Teeth | Indira Dental Clinic',
  description: 'Invisalign For Severely Crowded Teeth at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Invisalign For Severely Crowded Teeth"
      serviceSlug="invisalign-for-severely-crowded-teeth"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
