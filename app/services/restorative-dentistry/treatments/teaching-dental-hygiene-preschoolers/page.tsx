import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Teaching Dental Hygiene Preschoolers | Indira Dental Clinic',
  description: 'Teaching Dental Hygiene Preschoolers at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Teaching Dental Hygiene Preschoolers"
      serviceSlug="teaching-dental-hygiene-preschoolers"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
