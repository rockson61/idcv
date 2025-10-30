import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dental Trauma Emergency | Knocked Out Tooth | Indira Dental Clinic Vellore',
  description: 'Emergency dental trauma treatment in Vellore. Knocked out tooth, broken tooth, facial injury. 24/7 emergency care.',
}

export default function DentalTraumaPage() {
  redirect('/services/emergency-dentistry')
}


		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Dental Trauma" serviceSlug="dental-trauma" />
		</SectionContainer>


		<StandardServiceLayout serviceName="Dental Trauma" serviceSlug="dental-trauma" showPriceComparison={false} />

