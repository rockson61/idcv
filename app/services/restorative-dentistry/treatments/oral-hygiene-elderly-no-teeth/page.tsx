import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Oral Hygiene Elderly No Teeth | Indira Dental Clinic',
  description: 'Oral Hygiene Elderly No Teeth at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Oral Hygiene Elderly No Teeth"
      serviceSlug="oral-hygiene-elderly-no-teeth"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
