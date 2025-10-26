import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

interface ServiceLink {
  keyword: string
  url: string
  title: string
}

interface RelatedServicesProps {
  services: ServiceLink[]
}

export function RelatedServices({ services }: RelatedServicesProps) {
  if (services.length === 0) {
    return null
  }

  return (
    <ModernCard className="p-6">
      <ModernCardHeader>
        <ModernCardTitle className="text-lg">Related Services</ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="space-y-3">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.url || '#'}
              className="flex items-center justify-between p-3 rounded-lg border border-gray-200 hover:border-teal-300 hover:bg-teal-50 transition-colors"
            >
              <span className="text-sm font-medium text-gray-900">{service.title}</span>
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </Link>
          ))}
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-200">
          <Link href="/services">
            <Button variant="outline" size="sm" className="w-full">
              View All Services
            </Button>
          </Link>
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}
