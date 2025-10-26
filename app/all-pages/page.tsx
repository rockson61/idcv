"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Search, ExternalLink, CheckCircle } from 'lucide-react'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

// Import all URLs - this will be generated dynamically
const allPageUrls = [
  '/', '/about-us', '/about-us/dr-rockson-samuel', '/about-us/our-team', '/ask-the-dentist', '/ask-the-dentist/submit',
  '/blog', '/complete-sitemap', '/contact', '/dental-tourism', '/dentist-near-me', '/dentist-near-me/locations',
  '/faq', '/faqs', '/financing', '/gallery', '/international-patients', '/international-patients/accommodation',
  '/international-patients/packages', '/international-patients/travel', '/pricing', '/privacy-policy',
  '/sitemap', '/terms', '/testimonials',
  // Services (82 URLs)
  '/services', '/services/cosmetic-dentistry', '/services/cosmetic-dentistry/bonding', '/services/cosmetic-dentistry/gum-contouring',
  '/services/cosmetic-dentistry/smile-makeover', '/services/cosmetic-dentistry/teeth-whitening', '/services/cosmetic-dentistry/veneers',
  '/services/dental-bridges', '/services/dental-crowns', '/services/dental-fillings', '/services/dental-implants',
  '/services/dental-implants/multiple-tooth', '/services/dental-implants/single-implant', '/services/dental-implants/single-tooth',
  '/services/dental-implants/single-tooth-implants', '/services/dental-radiology', '/services/dentures',
  '/services/emergency-dentistry', '/services/emergency-dentistry/dental-trauma', '/services/emergency-dentistry/tooth-pain-relief',
  '/services/endodontics', '/services/endodontics/apicoectomy', '/services/general-dentistry', '/services/general-dentistry/check-ups',
  '/services/general-dentistry/dental-check-ups', '/services/general-dentistry/emergency-care', '/services/general-dentistry/extractions',
  '/services/general-dentistry/fillings', '/services/general-dentistry/teeth-cleaning', '/services/implantology/all-on-4',
  '/services/implantology/all-on-6', '/services/invisalign', '/services/maxillofacial-surgery', '/services/oral-cancer-screening',
  '/services/oral-pathology', '/services/oral-surgery', '/services/oral-surgery/bone-grafting',
  '/services/oral-surgery/impacted-wisdom-teeth', '/services/oral-surgery/sinus-lift', '/services/oral-surgery/tooth-extraction',
  '/services/orthodontic-treatment', '/services/orthodontics', '/services/orthodontics/ceramic-braces',
  '/services/orthodontics/early-treatment', '/services/orthodontics/invisalign', '/services/orthodontics/invisible-aligners',
  '/services/orthodontics/lingual-braces', '/services/orthodontics/metal-braces', '/services/orthodontics/retainers',
  '/services/orthodontics/serial-extraction', '/services/orthodontics/space-maintainer', '/services/orthodontics/traditional-braces',
  '/services/pediatric-dentistry', '/services/pediatric-dentistry/childrens-dentistry', '/services/pediatric-dentistry/childrens-fillings',
  '/services/pediatric-dentistry/dental-sealants', '/services/pediatric-dentistry/fluoride-treatment', '/services/periodontics',
  '/services/periodontics/gingival-grafting', '/services/periodontics/gum-grafting', '/services/periodontics/gum-surgery',
  '/services/periodontics/pocket-reduction-surgery', '/services/periodontics/scaling-root-planing',
  '/services/preventive-dentistry', '/services/prosthodontics', '/services/prosthodontics/complete-dentures',
  '/services/prosthodontics/dental-bridges', '/services/prosthodontics/dental-crowns', '/services/prosthodontics/dentures',
  '/services/prosthodontics/inlays-onlays', '/services/prosthodontics/partial-dentures', '/services/restorative-dentistry',
  '/services/restorative-dentistry/composite-bonding', '/services/restorative-dentistry/crowns',
  '/services/restorative-dentistry/dental-fillings', '/services/restorative-dentistry/tooth-colored-fillings',
  '/services/root-canal-treatment', '/services/root-canal-treatment/multi-visit-rct', '/services/root-canal-treatment/post-and-core',
  '/services/root-canal-treatment/re-rct', '/services/root-canal-treatment/single-sitting-rct', '/services/sedation-dentistry',
  '/services/teeth-whitening',
].concat(
  // Tamil Nadu cities (generated dynamically - sample shown)
  Array.from({length: 20}, (_, i) => `/in/tamil-nadu/city-${i}`),
  // Vellore areas (27 areas)
  ['/in/tamil-nadu/vellore/gandhi', '/in/tamil-nadu/vellore/gandhi-nagar', '/in/tamil-nadu/vellore/gandhinagar',
   '/in/tamil-nadu/vellore/katpadi', '/in/tamil-nadu/vellore/sathuvachari', '/in/tamil-nadu/vellore/bagayam',
   '/in/tamil-nadu/vellore/kosapet', '/in/tamil-nadu/vellore/saidapet', '/in/tamil-nadu/vellore/thottapalayam',
   '/in/tamil-nadu/vellore/thorapadi', '/in/tamil-nadu/vellore/konavattam', '/in/tamil-nadu/vellore/shenbakkam',
   '/in/tamil-nadu/vellore/dharapadavedu', '/in/tamil-nadu/vellore/ambur', '/in/tamil-nadu/vellore/kosapettai',
   '/in/tamil-nadu/vellore/perumugai', '/in/tamil-nadu/vellore/toll-gate', '/in/tamil-nadu/vellore/r-n-palayam',
   '/in/tamil-nadu/vellore/kaspa', '/in/tamil-nadu/vellore/kagithapattrai', '/in/tamil-nadu/vellore/perumal-nagar',
   '/in/tamil-nadu/vellore/viruthampet', '/in/tamil-nadu/vellore/otteri', '/in/tamil-nadu/vellore/melvisharam',
   '/in/tamil-nadu/vellore/abdullapuram', '/in/tamil-nadu/vellore/anaicut', '/in/tamil-nadu/vellore/arcot']
)

export default function AllPagesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  
  const filteredUrls = allPageUrls.filter(url =>
    url.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  const serviceUrls = filteredUrls.filter(url => url.startsWith('/services'))
  const locationUrls = filteredUrls.filter(url => url.startsWith('/in/'))
  const otherUrls = filteredUrls.filter(url => !url.startsWith('/services') && !url.startsWith('/in/'))
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-12">
      <SectionContainer>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-teal-100 text-teal-700">All Pages</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Complete Page List</h1>
            <p className="text-xl text-gray-600 mb-6">All {allPageUrls.length} pages - Search and navigate</p>
            
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search pages... (e.g., 'implants', 'vellore', 'gandhi')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 py-6 text-lg"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Showing {filteredUrls.length} of {allPageUrls.length} pages
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="text-center p-6">
              <div className="text-4xl font-bold text-blue-600 mb-2">{serviceUrls.length}</div>
              <div className="text-sm text-gray-600">Service Pages</div>
            </GlassCard>
            <GlassCard className="text-center p-6">
              <div className="text-4xl font-bold text-green-600 mb-2">{locationUrls.length}</div>
              <div className="text-sm text-gray-600">Location Pages</div>
            </GlassCard>
            <GlassCard className="text-center p-6">
              <div className="text-4xl font-bold text-orange-600 mb-2">{otherUrls.length}</div>
              <div className="text-sm text-gray-600">Other Pages</div>
            </GlassCard>
          </div>

          {/* Service URLs */}
          {serviceUrls.length > 0 && (
            <GlassCard className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Service Pages ({serviceUrls.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-4">
                {serviceUrls.map(url => (
                  <Link key={url} href={url} className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-start gap-1 p-2 hover:bg-blue-50 rounded">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span className="break-all">{url}</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </GlassCard>
          )}

          {/* Location URLs */}
          {locationUrls.length > 0 && (
            <GlassCard className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Location Pages ({locationUrls.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-96 overflow-y-auto p-4">
                {locationUrls.map(url => (
                  <Link key={url} href={url} className="text-sm text-green-600 hover:text-green-800 hover:underline flex items-start gap-1 p-2 hover:bg-green-50 rounded">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span className="break-all">{url}</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </GlassCard>
          )}

          {/* Other URLs */}
          {otherUrls.length > 0 && (
            <GlassCard className="p-8 mb-8">
              <h2 className="text-2xl font-bold mb-6">Other Pages ({otherUrls.length})</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                {otherUrls.map(url => (
                  <Link key={url} href={url} className="text-sm text-orange-600 hover:text-orange-800 hover:underline flex items-start gap-1 p-2 hover:bg-orange-50 rounded">
                    <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                    <span className="break-all">{url}</span>
                    <ExternalLink className="w-3 h-3 ml-auto opacity-0 group-hover:opacity-100 flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </GlassCard>
          )}
        </div>
      </SectionContainer>
    </div>
  )
}

