import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'

export interface SimpleServiceItem {
  title: string
  href: string
}

export interface RelatedServicesProps {
  serviceSlug: string
  heading?: string
  related?: SimpleServiceItem[]
  alternatives?: SimpleServiceItem[]
}

const FALLBACK_MAP: Record<string, { related: SimpleServiceItem[]; alternatives: SimpleServiceItem[] }> = {
  'dental-implants': {
    related: [
      { title: 'All-on-4 Dental Implants', href: '/services/dental-implants/all-on-4' },
      { title: 'Bone Grafting', href: '/services/bone-grafting' },
      { title: 'Sinus Lift', href: '/services/dental-implants/sinus-lift' },
    ],
    alternatives: [
      { title: 'Dental Bridges', href: '/services/restorative-dentistry/dental-bridges' },
      { title: 'Dentures', href: '/services/prosthodontics/dentures' },
    ],
  },
  'dental-crowns': {
    related: [
      { title: 'Zirconia Crown', href: '/services/restorative-dentistry/dental-crowns/zirconia-crown' },
      { title: 'PFM Crown', href: '/services/restorative-dentistry/dental-crowns/pfm-crown' },
    ],
    alternatives: [
      { title: 'Porcelain Veneers', href: '/services/cosmetic-dentistry/dental-veneers' },
      { title: 'Composite Bonding', href: '/services/restorative-dentistry/composite-bonding' },
    ],
  },
}

export function RelatedServices({ serviceSlug, heading = 'Related & Alternative Services', related, alternatives }: RelatedServicesProps) {
  const data = FALLBACK_MAP[serviceSlug] || { related: related || [], alternatives: alternatives || [] }
  const relatedList = related || data.related || []
  const altList = alternatives || data.alternatives || []

  if (relatedList.length === 0 && altList.length === 0) return null

  return (
    <ModernCard>
      <ModernCardHeader>
        <ModernCardTitle>{heading}</ModernCardTitle>
      </ModernCardHeader>
      <ModernCardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {relatedList.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Related Services</h3>
              <ul className="space-y-2">
                {relatedList.map((s) => (
                  <li key={s.href}>
                    <Link className="text-teal-700 hover:underline" href={s.href}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {altList.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-gray-700 mb-3">Alternative Services</h3>
              <ul className="space-y-2">
                {altList.map((s) => (
                  <li key={s.href}>
                    <Link className="text-teal-700 hover:underline" href={s.href}>{s.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </ModernCardContent>
    </ModernCard>
  )
}


