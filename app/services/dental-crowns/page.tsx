import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Dental Crowns | Redirecting...',
}

// Redirect to prosthodontics dental crowns page
export default function DentalCrownsRedirect() {
  redirect('/services/prosthodontics/dental-crowns')
}


		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Dental Crowns" serviceSlug="dental-crowns" />
		</SectionContainer>


		<StandardServiceLayout serviceName="Dental Crowns" serviceSlug="dental-crowns" showPriceComparison={false} />

