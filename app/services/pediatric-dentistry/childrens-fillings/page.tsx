import { Metadata } from 'next'
import { StandardServiceLayout } from '@/components/service/StandardServiceLayout'
import { SectionContainer } from '@/components/ui/section-container'
import { CTAWidget } from '@/components/widgets/cta-widget'
import { ServiceSemanticContent } from '@/components/service-content-template'
import { PageHeader } from '@/components/page-header'
import { Breadcrumb } from '@/components/breadcrumb'
import Link from 'next/link'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: "Children's Fillings | Pediatric Dentistry | Indira Dental Clinic",
  description: "Cavity fillings for children in Vellore. Gentle, painless treatment by pediatric dentist Dr. Rockson Samuel.",
}

export default function ChildrensFillings() {
  redirect('/services/pediatric-dentistry')
}


		<SectionContainer className="py-12">
			<ServiceSemanticContent serviceName="Childrens Fillings" serviceSlug="childrens-fillings" />
		</SectionContainer>


		<StandardServiceLayout serviceName="Childrens Fillings" serviceSlug="childrens-fillings" showPriceComparison={false} />

