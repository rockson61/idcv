import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Missing Baby Teeth Lateral Incisor | Indira Dental Clinic',
  description: 'Missing Baby Teeth Lateral Incisor at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Missing Baby Teeth Lateral Incisor"
      serviceSlug="missing-baby-teeth-lateral-incisor"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
