import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Tooth-Colored Fillings | Composite Fillings | Indira Dental Clinic Vellore',
  description: 'Tooth-colored composite fillings in Vellore. Natural-looking cavity fillings. Mercury-free. Dr. Rockson Samuel.',
}

export default function ToothColoredFillingsPage() {
  redirect('/services/restorative-dentistry/dental-fillings')
}


		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Tooth Colored Fillings" serviceSlug="tooth-colored-fillings" />
		</SectionContainer>


		<StandardServiceLayout serviceName="Tooth Colored Fillings" serviceSlug="tooth-colored-fillings" showPriceComparison={false} />

