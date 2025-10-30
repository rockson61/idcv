import { Metadata } from 'next'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { Breadcrumb } from '@/components/breadcrumb'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Emergency Tooth Pain Relief | 24/7 Dental Pain | Indira Dental Clinic Vellore',
  description: 'Immediate tooth pain relief in Vellore. 24/7 emergency dental care for severe toothache. Dr. Rockson Samuel.',
}

export default function ToothPainReliefPage() {
  redirect('/services/emergency-dentistry')
}


		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Tooth Pain Relief" serviceSlug="tooth-pain-relief" />
		</SectionContainer>
