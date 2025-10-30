import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Bleeding Gums After Quitting Smoking | Indira Dental Clinic',
  description: 'Bleeding Gums After Quitting Smoking at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Bleeding Gums After Quitting Smoking"
      serviceSlug="bleeding-gums-after-quitting-smoking"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
