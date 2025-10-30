import { Metadata } from 'next'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dental Fillings | Redirecting...',
}

// Redirect to restorative dentistry fillings page
export default function DentalFillingsRedirect() {
  redirect('/services/restorative-dentistry/dental-fillings')
}


		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Dental Fillings" serviceSlug="dental-fillings" />
		</SectionContainer>
