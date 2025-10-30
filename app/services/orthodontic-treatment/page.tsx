import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Orthodontic Treatment | Redirecting...',
}

// Redirect to main orthodontics page
export default function OrthodonticTreatmentRedirect() {
  redirect('/services/orthodontics')
}


		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Orthodontic Treatment" serviceSlug="orthodontic-treatment" />
		</SectionContainer>


		<StandardServiceLayout serviceName="Orthodontic Treatment" serviceSlug="orthodontic-treatment" showPriceComparison={false} />

