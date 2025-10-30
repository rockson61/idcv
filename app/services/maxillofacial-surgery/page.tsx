import { redirect } from 'next/navigation'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { Breadcrumb } from '@/components/breadcrumb'

export default function MaxillofacialSurgeryRedirect() {
  redirect('/services/oral-surgery')
}

		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Maxillofacial Surgery" serviceSlug="maxillofacial-surgery" />
		</SectionContainer>


		<StandardServiceLayout serviceName="Maxillofacial Surgery" serviceSlug="maxillofacial-surgery" showPriceComparison={false} />

