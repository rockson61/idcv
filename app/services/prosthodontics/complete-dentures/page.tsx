import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Complete Dentures | Full Set False Teeth | Indira Dental Clinic Vellore',
  description: 'Complete dentures (full set) in Vellore. Natural-looking false teeth for total tooth loss. Dr. Rockson Samuel prosthodontist.',
}

export default function CompleteDenturesPage() {
  redirect('/services/prosthodontics/dentures')
}


		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Complete Dentures" serviceSlug="complete-dentures" />
		</SectionContainer>


		<StandardServiceLayout serviceName="Complete Dentures" serviceSlug="complete-dentures" showPriceComparison={false} />

