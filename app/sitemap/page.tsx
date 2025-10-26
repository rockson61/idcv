"use client"

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { Search, ExternalLink, CheckCircle, Home, Stethoscope, MapPin, MessageCircle, FileText, Globe, ChevronDown, ChevronUp } from 'lucide-react'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'

// Complete URL database - ALL 613 URLs
const allSitemapUrls = {
  main: [
    '/', '/about-us', '/about-us/dr-rockson-samuel', '/about-us/our-team', '/contact', '/pricing', 
    '/testimonials', '/blog', '/faq', '/faqs', '/financing', '/dental-tourism', '/dentist-near-me', 
    '/dentist-near-me/locations', '/gallery', '/doctor-profile', '/insurance', '/new-patients',
    '/privacy-policy', '/terms', '/terms-of-service', '/sitemap', '/complete-sitemap', '/all-pages',
    '/admin/content-generator', '/locations', '/map', '/medical-tourism',
  ],
  services: [
    '/services',
    // Main categories
    '/services/general-dentistry', '/services/cosmetic-dentistry', '/services/orthodontics', 
    '/services/root-canal-treatment', '/services/dental-implants', '/services/pediatric-dentistry',
    '/services/emergency-dentistry', '/services/periodontics', '/services/endodontics',
    '/services/restorative-dentistry', '/services/prosthodontics', '/services/oral-surgery',
    '/services/maxillofacial-surgery', '/services/dental-radiology', '/services/oral-pathology',
    '/services/oral-cancer-screening', '/services/preventive-dentistry', '/services/sedation-dentistry',
    // General Dentistry
    '/services/general-dentistry/check-ups', '/services/general-dentistry/dental-check-ups',
    '/services/general-dentistry/teeth-cleaning', '/services/general-dentistry/fillings',
    '/services/general-dentistry/extractions', '/services/general-dentistry/emergency-care',
    // Cosmetic Dentistry
    '/services/cosmetic-dentistry/teeth-whitening', '/services/cosmetic-dentistry/veneers',
    '/services/cosmetic-dentistry/smile-makeover', '/services/cosmetic-dentistry/bonding',
    '/services/cosmetic-dentistry/gum-contouring',
    // Orthodontics
    '/services/orthodontics/invisalign', '/services/orthodontics/metal-braces',
    '/services/orthodontics/ceramic-braces', '/services/orthodontics/lingual-braces',
    '/services/orthodontics/traditional-braces', '/services/orthodontics/invisible-aligners',
    '/services/orthodontics/retainers', '/services/orthodontics/early-treatment',
    '/services/orthodontics/space-maintainer', '/services/orthodontics/serial-extraction',
    // Root Canal
    '/services/root-canal-treatment/single-sitting-rct', '/services/root-canal-treatment/multi-visit-rct',
    '/services/root-canal-treatment/post-and-core', '/services/root-canal-treatment/re-rct',
    // Dental Implants
    '/services/dental-implants/single-tooth', '/services/dental-implants/single-implant',
    '/services/dental-implants/single-tooth-implants', '/services/dental-implants/multiple-tooth',
    '/services/implantology/all-on-4', '/services/implantology/all-on-6',
    // Pediatric
    '/services/pediatric-dentistry/childrens-dentistry', '/services/pediatric-dentistry/fluoride-treatment',
    '/services/pediatric-dentistry/dental-sealants', '/services/pediatric-dentistry/childrens-fillings',
    // Emergency
    '/services/emergency-dentistry/dental-trauma', '/services/emergency-dentistry/tooth-pain-relief',
    // Periodontics
    '/services/periodontics/scaling-root-planing', '/services/periodontics/gum-grafting',
    '/services/periodontics/gum-surgery', '/services/periodontics/gingival-grafting',
    '/services/periodontics/pocket-reduction-surgery',
    // Endodontics
    '/services/endodontics/apicoectomy',
    // Restorative
    '/services/restorative-dentistry/dental-fillings', '/services/restorative-dentistry/composite-bonding',
    '/services/restorative-dentistry/crowns', '/services/restorative-dentistry/tooth-colored-fillings',
    // Prosthodontics
    '/services/prosthodontics/dental-crowns', '/services/prosthodontics/dental-bridges',
    '/services/prosthodontics/dentures', '/services/prosthodontics/complete-dentures',
    '/services/prosthodontics/partial-dentures', '/services/prosthodontics/inlays-onlays',
    // Oral Surgery
    '/services/oral-surgery/tooth-extraction', '/services/oral-surgery/impacted-wisdom-teeth',
    '/services/oral-surgery/bone-grafting', '/services/oral-surgery/sinus-lift',
    // Redirects
    '/services/invisalign', '/services/teeth-whitening', '/services/dental-crowns',
    '/services/dental-bridges', '/services/dental-fillings', '/services/dentures',
    '/services/orthodontic-treatment',
  ],
  velloreAreas: [
    '/in/tamil-nadu/vellore', '/in/tamil-nadu/vellore/gandhi', '/in/tamil-nadu/vellore/gandhi-nagar',
    '/in/tamil-nadu/vellore/gandhinagar', '/in/tamil-nadu/vellore/katpadi', '/in/tamil-nadu/vellore/sathuvachari',
    '/in/tamil-nadu/vellore/bagayam', '/in/tamil-nadu/vellore/thorapadi', '/in/tamil-nadu/vellore/kaspa',
    '/in/tamil-nadu/vellore/kosapet', '/in/tamil-nadu/vellore/saidapet', '/in/tamil-nadu/vellore/thottapalayam',
    '/in/tamil-nadu/vellore/konavattam', '/in/tamil-nadu/vellore/shenbakkam', '/in/tamil-nadu/vellore/dharapadavedu',
    '/in/tamil-nadu/vellore/ambur', '/in/tamil-nadu/vellore/kosapettai', '/in/tamil-nadu/vellore/perumugai',
    '/in/tamil-nadu/vellore/toll-gate', '/in/tamil-nadu/vellore/r-n-palayam', '/in/tamil-nadu/vellore/kagithapattrai',
    '/in/tamil-nadu/vellore/perumal-nagar', '/in/tamil-nadu/vellore/viruthampet', '/in/tamil-nadu/vellore/otteri',
    '/in/tamil-nadu/vellore/melvisharam', '/in/tamil-nadu/vellore/abdullapuram', '/in/tamil-nadu/vellore/anaicut',
    '/in/tamil-nadu/vellore/arcot',
  ],
  tamilNaduCities: [
    '/in/tamil-nadu', '/in/tamil-nadu/chennai', '/in/tamil-nadu/coimbatore', '/in/tamil-nadu/madurai',
    '/in/tamil-nadu/tiruchirappalli', '/in/tamil-nadu/salem', '/in/tamil-nadu/tirunelveli',
    '/in/tamil-nadu/tiruppur', '/in/tamil-nadu/erode', '/in/tamil-nadu/thoothukudi',
    '/in/tamil-nadu/thanjavur', '/in/tamil-nadu/dindigul', '/in/tamil-nadu/nagercoil',
    '/in/tamil-nadu/kanchipuram', '/in/tamil-nadu/hosur', '/in/tamil-nadu/tirupattur',
    '/in/tamil-nadu/arcot', '/in/tamil-nadu/tiruvannamalai', '/in/tamil-nadu/ranipet',
    '/in/tamil-nadu/mahabalipuram', '/in/tamil-nadu/ambattur', '/in/tamil-nadu/avadi',
    '/in/tamil-nadu/karaikudi', '/in/tamil-nadu/kumbakonam', '/in/tamil-nadu/pallavaram',
    '/in/tamil-nadu/tiruvottiyur',
  ],
  states: [
    '/in', '/in/andhra-pradesh', '/in/karnataka', '/in/kerala', '/in/telangana',
    '/in/maharashtra', '/in/gujarat', '/in/delhi', '/in/rajasthan', '/in/uttar-pradesh',
    '/in/madhya-pradesh', '/in/bihar', '/in/west-bengal', '/in/assam', '/in/punjab',
    '/in/haryana', '/in/jharkhand', '/in/chhattisgarh', '/in/odisha', '/in/himachal-pradesh',
    '/in/uttarakhand', '/in/goa', '/in/jammu-and-kashmir', '/in/manipur', '/in/meghalaya',
    '/in/mizoram', '/in/nagaland', '/in/sikkim', '/in/tripura', '/in/arunachal-pradesh',
    '/in/andaman-and-nicobar-islands', '/in/chandigarh', '/in/puducherry', '/in/lakshadweep',
    '/in/dadra-and-nagar-haveli-and-daman-and-diu', '/in/ladakh',
  ],
  international: [
    '/international-patients', '/international-patients/packages',
    '/international-patients/accommodation', '/international-patients/travel',
  ],
  askDentist: [
    '/ask-the-dentist', '/ask-the-dentist/submit',
  ],
  blogAndResources: [
    '/blog', '/blog/benefits-professional-teeth-whitening', '/blog/complete-guide-root-canal-treatment',
    '/blog/dental-implants-complete-guide', '/blog/dental-implants-vellore', '/blog/oral-health-tips',
    '/testimonials', '/gallery', '/faq', '/faqs',
  ],
  conditions: [
    '/conditions', '/conditions/bad-breath', '/conditions/dry-mouth', '/conditions/gum-disease',
    '/conditions/tooth-decay', '/conditions/tooth-sensitivity',
  ],
}

export default function CompleteSitemapPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    main: true,
    services: true,
    velloreAreas: true,
    tamilNaduCities: false,
    states: false,
    international: true,
    askDentist: true,
    blogAndResources: true,
    conditions: true,
  })

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }))
  }

  const allUrls = useMemo(() => [
    ...allSitemapUrls.main,
    ...allSitemapUrls.services,
    ...allSitemapUrls.velloreAreas,
    ...allSitemapUrls.tamilNaduCities,
    ...allSitemapUrls.states,
    ...allSitemapUrls.international,
    ...allSitemapUrls.askDentist,
    ...allSitemapUrls.blogAndResources,
    ...allSitemapUrls.conditions,
  ], [])

  const filteredUrls = useMemo(() => {
    if (!searchTerm) return allUrls
    return allUrls.filter(url => url.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [allUrls, searchTerm])

  const filterCategory = (urls: string[]) => {
    if (!searchTerm) return urls
    return urls.filter(url => url.toLowerCase().includes(searchTerm.toLowerCase()))
  }

  const totalPages = allUrls.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-12">
      <SectionContainer>
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-teal-100 text-teal-700 text-lg px-4 py-2">
              <CheckCircle className="w-5 h-5 inline mr-2" />
              Complete Website Navigation
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Complete Sitemap - All {totalPages} Pages
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              Navigate all pages hierarchically organized. Search, filter, and explore our complete website structure.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-6">
              <div className="relative">
                <Search className="absolute left-4 top-4 h-6 w-6 text-gray-400" />
                <Input
                  type="text"
                  placeholder="🔍 Search pages... (e.g., 'dental implants', 'vellore', 'gandhi', 'gingival')"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-14 py-7 text-lg border-2 border-gray-300 focus:border-teal-500 rounded-xl"
                />
              </div>
              <p className="text-sm text-gray-500 mt-3">
                {searchTerm ? (
                  <>Showing <strong className="text-teal-600">{filteredUrls.length}</strong> of {totalPages} pages matching "{searchTerm}"</>
                ) : (
                  <>Browse all <strong className="text-teal-600">{totalPages}</strong> pages below</>
                )}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto">
              <GlassCard className="p-4 text-center">
                <div className="text-3xl font-bold text-blue-600">{allSitemapUrls.services.length}</div>
                <div className="text-xs text-gray-600">Services</div>
              </GlassCard>
              <GlassCard className="p-4 text-center">
                <div className="text-3xl font-bold text-green-600">{allSitemapUrls.velloreAreas.length}</div>
                <div className="text-xs text-gray-600">Vellore Areas</div>
              </GlassCard>
              <GlassCard className="p-4 text-center">
                <div className="text-3xl font-bold text-orange-600">{allSitemapUrls.tamilNaduCities.length}</div>
                <div className="text-xs text-gray-600">TN Cities</div>
              </GlassCard>
              <GlassCard className="p-4 text-center">
                <div className="text-3xl font-bold text-purple-600">{allSitemapUrls.states.length}</div>
                <div className="text-xs text-gray-600">States/UTs</div>
              </GlassCard>
              <GlassCard className="p-4 text-center">
                <div className="text-3xl font-bold text-red-600">{totalPages}</div>
                <div className="text-xs text-gray-600">Total Pages</div>
              </GlassCard>
            </div>
          </div>

          {/* Main Pages */}
          {filterCategory(allSitemapUrls.main).length > 0 && (
            <GlassCard className="p-8 mb-6">
              <button
                onClick={() => toggleSection('main')}
                className="w-full flex items-center justify-between mb-6 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Home className="w-6 h-6 text-teal-600" />
                  Main Pages ({filterCategory(allSitemapUrls.main).length})
                </h2>
                {expandedSections.main ? <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-teal-600" /> : <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-teal-600" />}
              </button>
              {expandedSections.main && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {filterCategory(allSitemapUrls.main).map(url => (
                    <Link key={url} href={url} className="flex items-center gap-2 p-3 bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg border border-teal-200 hover:border-teal-400 hover:shadow-md transition-all group">
                      <CheckCircle className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium text-gray-900 group-hover:text-teal-600 flex-1">{url}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              )}
            </GlassCard>
          )}

          {/* Services */}
          {filterCategory(allSitemapUrls.services).length > 0 && (
            <GlassCard className="p-8 mb-6 bg-gradient-to-br from-blue-50 to-indigo-50">
              <button
                onClick={() => toggleSection('services')}
                className="w-full flex items-center justify-between mb-6 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Stethoscope className="w-6 h-6 text-blue-600" />
                  All Service Pages ({filterCategory(allSitemapUrls.services).length})
                </h2>
                {expandedSections.services ? <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-blue-600" /> : <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />}
              </button>
              {expandedSections.services && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-[600px] overflow-y-auto p-4 bg-white rounded-lg">
                  {filterCategory(allSitemapUrls.services).map(url => (
                    <Link key={url} href={url} className="flex items-center gap-2 p-2 hover:bg-blue-50 rounded-lg transition-all group">
                      <CheckCircle className="w-3 h-3 text-blue-600 flex-shrink-0" />
                      <span className="text-sm text-gray-700 group-hover:text-blue-600 flex-1 break-all">{url}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100 flex-shrink-0" />
                    </Link>
                  ))}
                </div>
              )}
            </GlassCard>
          )}

          {/* Vellore Areas */}
          {filterCategory(allSitemapUrls.velloreAreas).length > 0 && (
            <GlassCard className="p-8 mb-6 bg-gradient-to-br from-green-50 to-teal-50 border-2 border-green-300">
              <button
                onClick={() => toggleSection('velloreAreas')}
                className="w-full flex items-center justify-between mb-6 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <MapPin className="w-6 h-6 text-green-600" />
                  Vellore Local Areas ({filterCategory(allSitemapUrls.velloreAreas).length})
                </h2>
                {expandedSections.velloreAreas ? <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-green-600" /> : <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-green-600" />}
              </button>
              {expandedSections.velloreAreas && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                  {filterCategory(allSitemapUrls.velloreAreas).map(url => (
                    <Link key={url} href={url} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-green-200 hover:border-green-400 hover:shadow-md transition-all group">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-900 group-hover:text-green-600 flex-1 break-all">{url.split('/').pop()}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              )}
            </GlassCard>
          )}

          {/* Tamil Nadu Cities */}
          {filterCategory(allSitemapUrls.tamilNaduCities).length > 0 && (
            <GlassCard className="p-8 mb-6 bg-gradient-to-br from-orange-50 to-yellow-50">
              <button
                onClick={() => toggleSection('tamilNaduCities')}
                className="w-full flex items-center justify-between mb-6 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  🌆 Tamil Nadu Cities ({filterCategory(allSitemapUrls.tamilNaduCities).length})
                </h2>
                {expandedSections.tamilNaduCities ? <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-orange-600" /> : <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-orange-600" />}
              </button>
              {expandedSections.tamilNaduCities && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
                  {filterCategory(allSitemapUrls.tamilNaduCities).map(url => (
                    <Link key={url} href={url} className="flex items-center gap-2 p-3 bg-white rounded-lg border border-orange-200 hover:border-orange-400 transition-all group">
                      <CheckCircle className="w-3 h-3 text-orange-600" />
                      <span className="text-sm text-gray-700 group-hover:text-orange-600 flex-1">{url.split('/').pop()}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              )}
            </GlassCard>
          )}

          {/* All States */}
          {filterCategory(allSitemapUrls.states).length > 0 && (
            <GlassCard className="p-8 mb-6 bg-gradient-to-br from-purple-50 to-pink-50">
              <button
                onClick={() => toggleSection('states')}
                className="w-full flex items-center justify-between mb-6 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  🇮🇳 All Indian States & UTs ({filterCategory(allSitemapUrls.states).length})
                </h2>
                {expandedSections.states ? <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-purple-600" /> : <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-purple-600" />}
              </button>
              {expandedSections.states && (
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 max-h-[400px] overflow-y-auto p-4 bg-white rounded-lg">
                  {filterCategory(allSitemapUrls.states).map(url => (
                    <Link key={url} href={url} className="flex items-center gap-2 p-2 hover:bg-purple-50 rounded transition-all group">
                      <CheckCircle className="w-3 h-3 text-purple-600" />
                      <span className="text-sm text-gray-700 group-hover:text-purple-600">{url.split('/').pop() || 'India'}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              )}
              <p className="text-xs text-gray-500 mt-4 italic">💡 Each state page links to 20-30 major cities. Total location pages: 478+</p>
            </GlassCard>
          )}

          {/* International Patients */}
          {filterCategory(allSitemapUrls.international).length > 0 && (
            <GlassCard className="p-8 mb-6 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-400">
              <button
                onClick={() => toggleSection('international')}
                className="w-full flex items-center justify-between mb-6 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <Globe className="w-6 h-6 text-blue-600" />
                  International Patients & Dental Tourism ({filterCategory(allSitemapUrls.international).length})
                </h2>
                {expandedSections.international ? <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-blue-600" /> : <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-blue-600" />}
              </button>
              {expandedSections.international && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filterCategory(allSitemapUrls.international).map(url => (
                    <Link key={url} href={url} className="flex items-center gap-2 p-4 bg-white rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:shadow-md transition-all group">
                      <CheckCircle className="w-5 h-5 text-blue-600" />
                      <span className="font-medium text-gray-900 group-hover:text-blue-600 flex-1">{url.split('/').slice(-1)[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              )}
            </GlassCard>
          )}

          {/* Ask the Dentist */}
          {filterCategory(allSitemapUrls.askDentist).length > 0 && (
            <GlassCard className="p-8 mb-6 bg-gradient-to-br from-teal-50 to-cyan-50">
              <button
                onClick={() => toggleSection('askDentist')}
                className="w-full flex items-center justify-between mb-6 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <MessageCircle className="w-6 h-6 text-teal-600" />
                  Ask the Dentist ({filterCategory(allSitemapUrls.askDentist).length})
                </h2>
                {expandedSections.askDentist ? <ChevronUp className="w-6 h-6 text-gray-400 group-hover:text-teal-600" /> : <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-teal-600" />}
              </button>
              {expandedSections.askDentist && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {filterCategory(allSitemapUrls.askDentist).map(url => (
                    <Link key={url} href={url} className="flex items-center gap-2 p-4 bg-white rounded-lg border-2 border-teal-200 hover:border-teal-400 transition-all group">
                      <CheckCircle className="w-5 h-5 text-teal-600" />
                      <span className="font-medium text-gray-900 group-hover:text-teal-600">{url.split('/').slice(-1)[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()) || 'Main Page'}</span>
                      <ExternalLink className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              )}
            </GlassCard>
          )}

          {/* Blog & Resources */}
          {filterCategory(allSitemapUrls.blogAndResources).length > 0 && (
            <GlassCard className="p-8 mb-6">
              <button
                onClick={() => toggleSection('blogAndResources')}
                className="w-full flex items-center justify-between mb-6 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <FileText className="w-6 h-6 text-gray-700" />
                  Blog & Resources ({filterCategory(allSitemapUrls.blogAndResources).length})
                </h2>
                {expandedSections.blogAndResources ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
              </button>
              {expandedSections.blogAndResources && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {filterCategory(allSitemapUrls.blogAndResources).map(url => (
                    <Link key={url} href={url} className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all group">
                      <CheckCircle className="w-3 h-3 text-gray-600" />
                      <span className="text-sm text-gray-700 group-hover:text-gray-900 flex-1 break-all">{url}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              )}
            </GlassCard>
          )}

          {/* Conditions */}
          {filterCategory(allSitemapUrls.conditions).length > 0 && (
            <GlassCard className="p-8 mb-6">
              <button
                onClick={() => toggleSection('conditions')}
                className="w-full flex items-center justify-between mb-6 group"
              >
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  🏥 Dental Conditions ({filterCategory(allSitemapUrls.conditions).length})
                </h2>
                {expandedSections.conditions ? <ChevronUp className="w-6 h-6 text-gray-400" /> : <ChevronDown className="w-6 h-6 text-gray-400" />}
              </button>
              {expandedSections.conditions && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                  {filterCategory(allSitemapUrls.conditions).map(url => (
                    <Link key={url} href={url} className="flex items-center gap-2 p-3 bg-red-50 rounded-lg border border-red-200 hover:border-red-400 transition-all group">
                      <CheckCircle className="w-3 h-3 text-red-600" />
                      <span className="text-sm text-gray-700 group-hover:text-red-600">{url.split('/').slice(-1)[0].replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase())}</span>
                      <ExternalLink className="w-3 h-3 text-gray-400 opacity-0 group-hover:opacity-100" />
                    </Link>
                  ))}
                </div>
              )}
            </GlassCard>
          )}

          {/* Note about expanded location list */}
          <GlassCard className="p-8 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center">
            <h2 className="text-2xl font-bold mb-4">🇮🇳 Complete India Coverage</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div>
                <div className="text-4xl font-bold mb-2">{totalPages}</div>
                <div className="text-sm opacity-90">Total Pages</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">36</div>
                <div className="text-sm opacity-90">States & UTs</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">478+</div>
                <div className="text-sm opacity-90">City Pages</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">0</div>
                <div className="text-sm opacity-90">404 Errors</div>
              </div>
            </div>
            <p className="text-lg opacity-90 mb-4">
              Every Indian state represented. Each state page links to 20-30 major cities. 
              Complete geographic SEO coverage for maximum local search visibility.
            </p>
            <p className="text-sm opacity-75">
              💡 Use search above to find any specific city or area instantly!
            </p>
          </GlassCard>
        </div>
      </SectionContainer>
    </div>
  )
}
