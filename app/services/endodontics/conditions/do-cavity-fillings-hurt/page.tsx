import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'

export const metadata: Metadata = {
  title: 'Do Cavity Fillings Hurt | Indira Dental Clinic',
  description: 'Do Cavity Fillings Hurt at Indira Dental Clinic. Advanced care, transparent pricing, expert team in Vellore.',
}

export default function ServicePage() {
  return (
    <StandardServiceLayout
      serviceName="Do Cavity Fillings Hurt"
      serviceSlug="do-cavity-fillings-hurt"
      showPriceComparison
      defaultLocationName="Vellore"
      defaultCityName="Vellore"
    />
  )
}
