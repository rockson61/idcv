import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Loss Of Posterior Occlusion | Indira Dental Clinic',
  description: 'Loss Of Posterior Occlusion at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Loss Of Posterior Occlusion"
      serviceSlug="loss-of-posterior-occlusion"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
