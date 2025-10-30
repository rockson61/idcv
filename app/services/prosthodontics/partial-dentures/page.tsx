import { Metadata } from 'next'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Partial Dentures | Removable False Teeth | Indira Dental Clinic Vellore',
  description: 'Partial dentures in Vellore. Replace multiple missing teeth with comfortable, natural-looking partial dentures. Dr. Rockson Samuel.',
}

export default function PartialDenturesPage() {
  redirect('/services/prosthodontics/dentures')
}


		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Partial Dentures" serviceSlug="partial-dentures" />
		</SectionContainer>
