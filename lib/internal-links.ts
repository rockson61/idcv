// Comprehensive Internal Linking Strategy for Topical Authority
// LSI Keywords mapped to relevant pages

export interface InternalLink {
  keyword: string
  url: string
  title: string
  context: 'service' | 'location' | 'resource' | 'authority'
}

// Core authority pages that should be linked from everywhere
export const authorityLinks: InternalLink[] = [
  {
    keyword: 'best dentist in Vellore',
    url: '/',
    title: 'Indira Dental Clinic - Best Dentist in Vellore',
    context: 'authority'
  },
  {
    keyword: 'Dr. Rockson Samuel',
    url: '/about-us/dr-rockson-samuel',
    title: 'Dr. Rockson Samuel - BDS, PgDM, BDM',
    context: 'authority'
  },
  {
    keyword: 'dentist near me',
    url: '/dentist-near-me',
    title: 'Find Dentist Near Me in Vellore',
    context: 'location'
  },
  {
    keyword: 'Gandhi Nagar dental clinic',
    url: '/in/tamil-nadu/vellore/gandhi',
    title: 'Dentist in Gandhi Nagar, Vellore',
    context: 'location'
  },
  {
    keyword: 'book appointment',
    url: '/contact',
    title: 'Book Appointment at Indira Dental Clinic',
    context: 'resource'
  },
  {
    keyword: 'Google Maps location',
    url: 'https://maps.app.goo.gl/ngSpvWz8Tur9MsN9A',
    title: 'Indira Dental Clinic on Google Maps',
    context: 'location'
  },
]

// Service-specific LSI keywords with internal links
export const serviceLSILinks: Record<string, InternalLink[]> = {
  'root-canal': [
    { keyword: 'root canal treatment', url: '/services/root-canal-treatment', title: 'Root Canal Treatment in Vellore', context: 'service' },
    { keyword: 'RCT Vellore', url: '/services/root-canal-treatment', title: 'RCT Treatment', context: 'service' },
    { keyword: 'painless RCT', url: '/services/root-canal-treatment/single-sitting-rct', title: 'Single Sitting RCT', context: 'service' },
    { keyword: 'endodontic treatment', url: '/services/endodontics', title: 'Endodontics', context: 'service' },
    { keyword: 'tooth infection treatment', url: '/services/root-canal-treatment', title: 'Root Canal for Tooth Infection', context: 'service' },
    { keyword: 'dental crown after RCT', url: '/services/prosthodontics/dental-crowns', title: 'Dental Crowns', context: 'service' },
  ],
  'dental-implants': [
    { keyword: 'dental implants', url: '/services/dental-implants', title: 'Dental Implants in Vellore', context: 'service' },
    { keyword: 'tooth replacement', url: '/services/dental-implants', title: 'Permanent Tooth Replacement', context: 'service' },
    { keyword: 'single tooth implant', url: '/services/dental-implants/single-tooth', title: 'Single Tooth Implant', context: 'service' },
    { keyword: 'All-on-4 implants', url: '/services/implantology/all-on-4', title: 'All-on-4 Dental Implants', context: 'service' },
    { keyword: 'implant surgery', url: '/services/oral-surgery', title: 'Oral Surgery for Implants', context: 'service' },
    { keyword: 'bone grafting for implants', url: '/services/oral-surgery/bone-grafting', title: 'Bone Grafting', context: 'service' },
  ],
  'orthodontics': [
    { keyword: 'braces', url: '/services/orthodontics', title: 'Orthodontic Braces in Vellore', context: 'service' },
    { keyword: 'teeth straightening', url: '/services/orthodontics', title: 'Teeth Straightening Treatment', context: 'service' },
    { keyword: 'Invisalign', url: '/services/orthodontics/invisalign', title: 'Invisalign Clear Aligners', context: 'service' },
    { keyword: 'clear aligners', url: '/services/orthodontics/invisalign', title: 'Clear Aligners', context: 'service' },
    { keyword: 'metal braces', url: '/services/orthodontics/metal-braces', title: 'Metal Braces', context: 'service' },
    { keyword: 'ceramic braces', url: '/services/orthodontics/ceramic-braces', title: 'Ceramic Braces', context: 'service' },
    { keyword: 'invisible braces', url: '/services/orthodontics/invisible-aligners', title: 'Invisible Aligners', context: 'service' },
  ],
  'cosmetic': [
    { keyword: 'teeth whitening', url: '/services/cosmetic-dentistry/teeth-whitening', title: 'Teeth Whitening in Vellore', context: 'service' },
    { keyword: 'smile makeover', url: '/services/cosmetic-dentistry/smile-makeover', title: 'Complete Smile Makeover', context: 'service' },
    { keyword: 'porcelain veneers', url: '/services/cosmetic-dentistry/veneers', title: 'Porcelain Veneers', context: 'service' },
    { keyword: 'cosmetic dentistry', url: '/services/cosmetic-dentistry', title: 'Cosmetic Dentistry Services', context: 'service' },
    { keyword: 'gum contouring', url: '/services/cosmetic-dentistry/gum-contouring', title: 'Gum Contouring', context: 'service' },
    { keyword: 'dental bonding', url: '/services/cosmetic-dentistry/bonding', title: 'Dental Bonding', context: 'service' },
  ],
  'periodontics': [
    { keyword: 'gum disease treatment', url: '/services/periodontics', title: 'Periodontics - Gum Disease Treatment', context: 'service' },
    { keyword: 'scaling and root planing', url: '/services/periodontics/scaling-root-planing', title: 'Scaling & Root Planing', context: 'service' },
    { keyword: 'gum grafting', url: '/services/periodontics/gum-grafting', title: 'Gum Grafting Surgery', context: 'service' },
    { keyword: 'gingival grafting', url: '/services/periodontics/gingival-grafting', title: 'Gingival Grafting', context: 'service' },
    { keyword: 'periodontal surgery', url: '/services/periodontics/gum-surgery', title: 'Gum Surgery', context: 'service' },
    { keyword: 'deep cleaning', url: '/services/periodontics/scaling-root-planing', title: 'Deep Cleaning', context: 'service' },
  ],
  'pediatric': [
    { keyword: 'kids dentist', url: '/services/pediatric-dentistry', title: 'Pediatric Dentistry', context: 'service' },
    { keyword: 'children\'s dental care', url: '/services/pediatric-dentistry/childrens-dentistry', title: 'Children\'s Dentistry', context: 'service' },
    { keyword: 'dental sealants for kids', url: '/services/pediatric-dentistry/dental-sealants', title: 'Dental Sealants', context: 'service' },
    { keyword: 'fluoride treatment', url: '/services/pediatric-dentistry/fluoride-treatment', title: 'Fluoride Treatment for Kids', context: 'service' },
    { keyword: 'child-friendly dentist', url: '/services/pediatric-dentistry', title: 'Child-Friendly Dental Care', context: 'service' },
  ],
  'emergency': [
    { keyword: 'dental emergency', url: '/services/emergency-dentistry', title: '24/7 Emergency Dental Care', context: 'service' },
    { keyword: 'tooth pain relief', url: '/services/emergency-dentistry/tooth-pain-relief', title: 'Emergency Tooth Pain Relief', context: 'service' },
    { keyword: 'emergency dentist', url: '/services/emergency-dentistry', title: 'Emergency Dentist Vellore', context: 'service' },
    { keyword: 'dental trauma', url: '/services/emergency-dentistry/dental-trauma', title: 'Dental Trauma Emergency Care', context: 'service' },
  ],
  'prosthodontics': [
    { keyword: 'dental crowns', url: '/services/prosthodontics/dental-crowns', title: 'Dental Crowns in Vellore', context: 'service' },
    { keyword: 'dental bridges', url: '/services/prosthodontics/dental-bridges', title: 'Dental Bridges', context: 'service' },
    { keyword: 'dentures', url: '/services/prosthodontics/dentures', title: 'Complete & Partial Dentures', context: 'service' },
    { keyword: 'tooth cap', url: '/services/prosthodontics/dental-crowns', title: 'Tooth Cap (Crown)', context: 'service' },
    { keyword: 'false teeth', url: '/services/prosthodontics/dentures', title: 'False Teeth (Dentures)', context: 'service' },
  ],
}

// Location-specific LSI keywords
export const locationLSILinks: InternalLink[] = [
  { keyword: 'Vellore dentist', url: '/in/tamil-nadu/vellore', title: 'Dentist in Vellore', context: 'location' },
  { keyword: 'Gandhi Nagar dentist', url: '/in/tamil-nadu/vellore/gandhi', title: 'Dentist in Gandhi Nagar', context: 'location' },
  { keyword: 'Katpadi dentist', url: '/in/tamil-nadu/vellore/katpadi', title: 'Dentist in Katpadi', context: 'location' },
  { keyword: 'dental clinic near me', url: '/dentist-near-me', title: 'Dental Clinic Near Me', context: 'location' },
  { keyword: 'Chennai dentist', url: '/in/tamil-nadu/chennai', title: 'Dentist in Chennai', context: 'location' },
  { keyword: 'Coimbatore dentist', url: '/in/tamil-nadu/coimbatore', title: 'Dentist in Coimbatore', context: 'location' },
  { keyword: 'Tamil Nadu dental clinic', url: '/in/tamil-nadu', title: 'Dental Clinic in Tamil Nadu', context: 'location' },
]

// Resource and engagement links
export const resourceLinks: InternalLink[] = [
  { keyword: 'ask the dentist', url: '/ask-the-dentist', title: 'Ask the Dentist - Free Expert Advice', context: 'resource' },
  { keyword: 'dental pricing', url: '/pricing', title: 'Transparent Dental Pricing', context: 'resource' },
  { keyword: 'patient testimonials', url: '/testimonials', title: 'Patient Reviews & Testimonials', context: 'resource' },
  { keyword: 'dental blog', url: '/blog', title: 'Dental Health Blog & Tips', context: 'resource' },
  { keyword: 'dental FAQs', url: '/faq', title: 'Frequently Asked Questions', context: 'resource' },
  { keyword: 'dental tourism India', url: '/international-patients', title: 'Dental Tourism in India', context: 'resource' },
]

// Flattened service links (for easy consumption by widgets)
export const serviceLinks: InternalLink[] = Object.values(serviceLSILinks).flat()

// Location links (already flat)
export const locationLinks: InternalLink[] = locationLSILinks

// Get contextual links based on current page
export function getContextualLinks(currentPath: string): InternalLink[] {
  const links: InternalLink[] = []
  
  // Always include homepage if not on homepage
  if (currentPath !== '/') {
    links.push(authorityLinks[0])
  }
  
  // Add Dr. Rockson link from service pages
  if (currentPath.startsWith('/services/')) {
    links.push(authorityLinks[1])
  }
  
  // Add location links from service pages
  if (currentPath.startsWith('/services/')) {
    links.push(...locationLSILinks.slice(0, 3)) // Top 3 location links
    links.push(authorityLinks[5]) // Google Maps
  }
  
  // Add service links from location pages
  if (currentPath.startsWith('/in/')) {
    // Add top services
    links.push(...serviceLSILinks['root-canal'].slice(0, 2))
    links.push(...serviceLSILinks['dental-implants'].slice(0, 2))
    links.push(...serviceLSILinks['orthodontics'].slice(0, 2))
    links.push(authorityLinks[4]) // Book appointment
  }
  
  // Add related services from service pages
  if (currentPath.includes('root-canal')) {
    links.push(...serviceLSILinks['root-canal'])
    links.push(serviceLSILinks['prosthodontics'][0]) // Crown after RCT
  }
  
  if (currentPath.includes('implant')) {
    links.push(...serviceLSILinks['dental-implants'])
  }
  
  if (currentPath.includes('orthodontic') || currentPath.includes('braces')) {
    links.push(...serviceLSILinks['orthodontics'])
  }
  
  if (currentPath.includes('cosmetic')) {
    links.push(...serviceLSILinks['cosmetic'])
  }
  
  // Add Ask the Dentist from all pages
  if (!currentPath.startsWith('/ask-the-dentist')) {
    links.push(resourceLinks[0])
  }
  
  // Add pricing from service pages
  if (currentPath.startsWith('/services/')) {
    links.push(resourceLinks[1])
  }
  
  // Remove duplicates and current page
  return links
    .filter((link, index, self) => 
      index === self.findIndex(l => l.url === link.url) && 
      link.url !== currentPath
    )
    .slice(0, 8) // Limit to 8 contextual links per page
}

// Get footer internal links (for all pages)
export const footerInternalLinks: InternalLink[] = [
  // Top Services (Pillar Pages)
  { keyword: 'Root Canal Treatment', url: '/services/root-canal-treatment', title: 'RCT in Vellore', context: 'service' },
  { keyword: 'Dental Implants', url: '/services/dental-implants', title: 'Dental Implants Vellore', context: 'service' },
  { keyword: 'Orthodontic Braces', url: '/services/orthodontics', title: 'Braces & Orthodontics', context: 'service' },
  { keyword: 'Teeth Whitening', url: '/services/cosmetic-dentistry/teeth-whitening', title: 'Teeth Whitening', context: 'service' },
  { keyword: 'Invisalign Clear Aligners', url: '/services/orthodontics/invisalign', title: 'Invisalign in Vellore', context: 'service' },
  
  // Top Locations
  { keyword: 'Dentist in Vellore', url: '/in/tamil-nadu/vellore', title: 'Vellore Dentist', context: 'location' },
  { keyword: 'Dentist in Gandhi Nagar', url: '/in/tamil-nadu/vellore/gandhi', title: 'Gandhi Nagar Dental Clinic', context: 'location' },
  { keyword: 'Dentist Near Me', url: '/dentist-near-me', title: 'Find Dentist Near Me', context: 'location' },
  
  // Authority & Resources
  { keyword: 'Best Dentist Vellore', url: '/', title: 'Indira Dental Clinic Home', context: 'authority' },
  { keyword: 'Expert Dental Advice', url: '/ask-the-dentist', title: 'Ask the Dentist', context: 'resource' },
  { keyword: 'Dental Tourism India', url: '/international-patients', title: 'International Patients', context: 'resource' },
  { keyword: 'Book Dental Appointment', url: '/contact', title: 'Contact & Appointments', context: 'resource' },
]

// Get related service links for cross-linking
export function getRelatedServices(currentServicePath: string): InternalLink[] {
  const relatedMap: Record<string, string[]> = {
    '/services/root-canal-treatment': [
      '/services/prosthodontics/dental-crowns',
      '/services/endodontics',
      '/services/emergency-dentistry',
      '/services/oral-surgery',
    ],
    '/services/dental-implants': [
      '/services/oral-surgery/bone-grafting',
      '/services/oral-surgery/sinus-lift',
      '/services/prosthodontics/dental-crowns',
      '/services/implantology/all-on-4',
    ],
    '/services/orthodontics': [
      '/services/orthodontics/invisalign',
      '/services/orthodontics/metal-braces',
      '/services/orthodontics/ceramic-braces',
      '/services/pediatric-dentistry',
    ],
    '/services/cosmetic-dentistry': [
      '/services/cosmetic-dentistry/teeth-whitening',
      '/services/cosmetic-dentistry/veneers',
      '/services/cosmetic-dentistry/smile-makeover',
      '/services/orthodontics/invisalign',
    ],
    '/services/periodontics': [
      '/services/periodontics/scaling-root-planing',
      '/services/periodontics/gum-grafting',
      '/services/periodontics/gingival-grafting',
      '/services/general-dentistry',
    ],
  }
  
  const relatedUrls = relatedMap[currentServicePath] || []
  return relatedUrls.map(url => ({
    keyword: url.split('/').pop()?.replace(/-/g, ' ') || '',
    url,
    title: url.split('/').pop()?.replace(/-/g, ' ') || '',
    context: 'service' as const
  }))
}

// Get location-based service links (for location pages)
export const locationServiceLinks: InternalLink[] = [
  { keyword: 'root canal in Vellore', url: '/services/root-canal-treatment', title: 'RCT Treatment Vellore', context: 'service' },
  { keyword: 'dental implants in Vellore', url: '/services/dental-implants', title: 'Implants Vellore', context: 'service' },
  { keyword: 'braces in Vellore', url: '/services/orthodontics', title: 'Orthodontic Braces Vellore', context: 'service' },
  { keyword: 'teeth whitening Vellore', url: '/services/cosmetic-dentistry/teeth-whitening', title: 'Teeth Whitening', context: 'service' },
  { keyword: 'kids dentist Vellore', url: '/services/pediatric-dentistry', title: 'Pediatric Dentist', context: 'service' },
  { keyword: 'emergency dentist Vellore', url: '/services/emergency-dentistry', title: '24/7 Emergency Care', context: 'service' },
]

// Generate internal link HTML
export function generateInternalLinkHTML(link: InternalLink, className?: string): string {
  const isExternal = link.url.startsWith('http')
  const target = isExternal ? ' target="_blank" rel="noopener noreferrer"' : ''
  const defaultClass = 'text-blue-600 hover:text-blue-800 underline font-medium transition-colors'
  
  return `<a href="${link.url}" title="${link.title}" class="${className || defaultClass}"${target}>${link.keyword}</a>`
}

// Smart internal linking suggestions based on page type
export function getSmartInternalLinks(pagePath: string): {
  primary: InternalLink[]
  secondary: InternalLink[]
  footer: InternalLink[]
} {
  const primary: InternalLink[] = []
  const secondary: InternalLink[] = []
  
  // Primary links (high priority, top of content)
  if (pagePath.startsWith('/services/')) {
    primary.push(authorityLinks[1]) // Dr. Rockson
    primary.push(authorityLinks[3]) // Gandhi Nagar location
    primary.push(authorityLinks[4]) // Book appointment
  } else if (pagePath.startsWith('/in/')) {
    primary.push(authorityLinks[0]) // Homepage
    primary.push(...locationServiceLinks.slice(0, 4)) // Top services
  } else if (pagePath.startsWith('/ask-the-dentist/')) {
    primary.push(authorityLinks[0])
    primary.push(authorityLinks[4])
  }
  
  // Secondary links (contextual, mid-content)
  const contextual = getContextualLinks(pagePath)
  secondary.push(...contextual)
  
  // Footer links (standard across all pages)
  const footer = footerInternalLinks
  
  return { primary, secondary, footer }
}

