export interface CatalogQAItem {
  id: string
  title: string
  slug: string
  excerpt: string
  helpfulVotes: number
  views: number
  createdAt: string
}

export interface CatalogServiceLink {
  title: string
  href: string
}

export interface CatalogPricingRow {
  market: string
  average: string
  range: string
}

export interface ServiceCatalogEntry {
  related: CatalogServiceLink[]
  alternatives: CatalogServiceLink[]
  qas: CatalogQAItem[]
  pricing?: CatalogPricingRow[]
}

export const serviceCatalog: Record<string, ServiceCatalogEntry> = {
  'dental-implants': {
    related: [
      { title: 'All-on-4 Dental Implants', href: '/services/dental-implants/all-on-4' },
      { title: 'Sinus Lift', href: '/services/dental-implants/sinus-lift' },
      { title: 'Bone Grafting', href: '/services/bone-grafting' },
    ],
    alternatives: [
      { title: 'Dental Bridges', href: '/services/restorative-dentistry/dental-bridges' },
      { title: 'Dentures', href: '/services/prosthodontics/dentures' },
    ],
    qas: [
      {
        id: 'qa-di-1',
        title: 'Are dental implants right for me?',
        slug: 'dental-implants-right-for-me',
        excerpt: 'Who qualifies for implants, healing times, and success rates.',
        helpfulVotes: 28,
        views: 1320,
        createdAt: '2024-01-10T10:00:00Z',
      },
      {
        id: 'qa-di-2',
        title: 'Dental implant cost and EMI options',
        slug: 'dental-implants-cost-emi',
        excerpt: 'Typical price ranges, warranties, and payment flexibility.',
        helpfulVotes: 19,
        views: 980,
        createdAt: '2024-02-05T10:00:00Z',
      },
      {
        id: 'qa-di-3',
        title: 'Implant care and recovery timeline',
        slug: 'dental-implants-recovery',
        excerpt: 'Aftercare, diet, and how to speed up recovery.',
        helpfulVotes: 14,
        views: 740,
        createdAt: '2024-03-12T10:00:00Z',
      },
    ],
    pricing: [
      { market: 'Vellore', average: '₹ 35,000', range: '₹ 25,000 – ₹ 55,000' },
      { market: 'Chennai', average: '₹ 45,000', range: '₹ 35,000 – ₹ 65,000' },
      { market: 'Bengaluru', average: '₹ 55,000', range: '₹ 40,000 – ₹ 80,000' },
      { market: 'Mumbai', average: '₹ 65,000', range: '₹ 50,000 – ₹ 95,000' },
      { market: 'Dubai (UAE)', average: '₹ 1,20,000', range: '₹ 95,000 – ₹ 1,60,000' },
      { market: 'New York (USA)', average: '₹ 2,50,000', range: '₹ 1,80,000 – ₹ 3,50,000' },
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
    qas: [
      {
        id: 'qa-crn-1',
        title: 'When do I need a dental crown?',
        slug: 'when-do-i-need-dental-crown',
        excerpt: 'Indications, longevity, and materials overview.',
        helpfulVotes: 17,
        views: 620,
        createdAt: '2024-01-18T10:00:00Z',
      },
      {
        id: 'qa-crn-2',
        title: 'Crown cost and differences between materials',
        slug: 'dental-crown-cost-materials',
        excerpt: 'PFM vs. zirconia vs. porcelain—durability and price.',
        helpfulVotes: 11,
        views: 510,
        createdAt: '2024-02-03T10:00:00Z',
      },
    ],
  },
}


