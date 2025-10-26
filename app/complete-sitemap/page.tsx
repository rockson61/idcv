import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle } from 'lucide-react'
import { SectionContainer } from '@/components/ui/section-container'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'

export const metadata: Metadata = {
  title: 'Complete Sitemap | All 588 Pages | Indira Dental Clinic Vellore',
  description: 'Complete sitemap of all 588 pages including services, locations (India wide), blog posts, and more.',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/complete-sitemap' },
}

// Service URLs
const serviceUrls = [
  '/services',
  '/services/general-dentistry',
  '/services/general-dentistry/check-ups',
  '/services/general-dentistry/dental-check-ups',
  '/services/general-dentistry/teeth-cleaning',
  '/services/general-dentistry/fillings',
  '/services/general-dentistry/extractions',
  '/services/general-dentistry/emergency-care',
  '/services/cosmetic-dentistry',
  '/services/cosmetic-dentistry/teeth-whitening',
  '/services/cosmetic-dentistry/veneers',
  '/services/cosmetic-dentistry/smile-makeover',
  '/services/cosmetic-dentistry/gum-contouring',
  '/services/cosmetic-dentistry/bonding',
  '/services/orthodontics',
  '/services/orthodontics/invisalign',
  '/services/orthodontics/metal-braces',
  '/services/orthodontics/ceramic-braces',
  '/services/orthodontics/lingual-braces',
  '/services/orthodontics/traditional-braces',
  '/services/orthodontics/invisible-aligners',
  '/services/orthodontics/retainers',
  '/services/orthodontics/early-treatment',
  '/services/orthodontics/space-maintainer',
  '/services/orthodontics/serial-extraction',
  '/services/root-canal-treatment',
  '/services/root-canal-treatment/single-sitting-rct',
  '/services/root-canal-treatment/multi-visit-rct',
  '/services/root-canal-treatment/post-and-core',
  '/services/root-canal-treatment/re-rct',
  '/services/dental-implants',
  '/services/dental-implants/single-implant',
  '/services/dental-implants/single-tooth',
  '/services/dental-implants/single-tooth-implants',
  '/services/dental-implants/multiple-tooth',
  '/services/implantology/all-on-4',
  '/services/implantology/all-on-6',
  '/services/pediatric-dentistry',
  '/services/pediatric-dentistry/childrens-dentistry',
  '/services/pediatric-dentistry/fluoride-treatment',
  '/services/pediatric-dentistry/dental-sealants',
  '/services/pediatric-dentistry/childrens-fillings',
  '/services/emergency-dentistry',
  '/services/emergency-dentistry/dental-trauma',
  '/services/emergency-dentistry/tooth-pain-relief',
  '/services/periodontics',
  '/services/periodontics/scaling-root-planing',
  '/services/periodontics/gum-grafting',
  '/services/periodontics/gum-surgery',
  '/services/periodontics/gingival-grafting',
  '/services/periodontics/pocket-reduction-surgery',
  '/services/endodontics',
  '/services/endodontics/apicoectomy',
  '/services/restorative-dentistry',
  '/services/restorative-dentistry/dental-fillings',
  '/services/restorative-dentistry/composite-bonding',
  '/services/restorative-dentistry/crowns',
  '/services/restorative-dentistry/tooth-colored-fillings',
  '/services/prosthodontics',
  '/services/prosthodontics/dental-crowns',
  '/services/prosthodontics/dental-bridges',
  '/services/prosthodontics/dentures',
  '/services/prosthodontics/complete-dentures',
  '/services/prosthodontics/partial-dentures',
  '/services/prosthodontics/inlays-onlays',
  '/services/oral-surgery',
  '/services/oral-surgery/tooth-extraction',
  '/services/oral-surgery/impacted-wisdom-teeth',
  '/services/oral-surgery/bone-grafting',
  '/services/oral-surgery/sinus-lift',
  '/services/maxillofacial-surgery',
  '/services/dental-radiology',
  '/services/oral-pathology',
  '/services/oral-cancer-screening',
  '/services/preventive-dentistry',
  '/services/sedation-dentistry',
  '/services/invisalign',
  '/services/teeth-whitening',
  '/services/dental-crowns',
  '/services/dental-bridges',
  '/services/dental-fillings',
  '/services/dentures',
  '/services/orthodontic-treatment',
]

// Location URLs - Vellore Area
const velloreUrls = [
  '/in/tamil-nadu/vellore',
  '/in/tamil-nadu/vellore/gandhi',
  '/in/tamil-nadu/vellore/katpadi',
  '/in/tamil-nadu/vellore/sathuvachari',
  '/in/tamil-nadu/vellore/thorapadi',
  '/in/tamil-nadu/vellore/bagayam',
  '/in/tamil-nadu/vellore/kaspa',
]

// State URLs
const stateUrls = [
  '/in/tamil-nadu',
  '/in/andhra-pradesh',
  '/in/karnataka',
  '/in/kerala',
  '/in/telangana',
  '/in/maharashtra',
  '/in/gujarat',
  '/in/delhi',
  '/in/rajasthan',
  '/in/uttar-pradesh',
  '/in/madhya-pradesh',
  '/in/bihar',
  '/in/west-bengal',
  '/in/assam',
  '/in/punjab',
  '/in/haryana',
  '/in/jharkhand',
  '/in/chhattisgarh',
  '/in/odisha',
  '/in/himachal-pradesh',
  '/in/uttarakhand',
  '/in/goa',
  '/in/jammu-and-kashmir',
  '/in/manipur',
  '/in/meghalaya',
  '/in/mizoram',
  '/in/nagaland',
  '/in/sikkim',
  '/in/tripura',
  '/in/arunachal-pradesh',
  '/in/andaman-and-nicobar-islands',
  '/in/chandigarh',
  '/in/dadra-and-nagar-haveli-and-daman-and-diu',
  '/in/lakshadweep',
  '/in/puducherry',
]

// Major Tamil Nadu Cities
const tamilNaduCities = [
  '/in/tamil-nadu/chennai',
  '/in/tamil-nadu/coimbatore',
  '/in/tamil-nadu/madurai',
  '/in/tamil-nadu/tiruchirappalli',
  '/in/tamil-nadu/salem',
  '/in/tamil-nadu/tirunelveli',
  '/in/tamil-nadu/tiruppur',
  '/in/tamil-nadu/erode',
  '/in/tamil-nadu/vellore',
  '/in/tamil-nadu/thoothukudi',
  '/in/tamil-nadu/thanjavur',
  '/in/tamil-nadu/dindigul',
  '/in/tamil-nadu/ranipet',
  '/in/tamil-nadu/tirupattur',
  '/in/tamil-nadu/tiruvannamalai',
  '/in/tamil-nadu/kanchipuram',
  '/in/tamil-nadu/hosur',
  '/in/tamil-nadu/nagercoil',
]

// Other Pages
const otherUrls = [
  '/',
  '/about-us',
  '/about-us/dr-rockson-samuel',
  '/contact',
  '/pricing',
  '/testimonials',
  '/gallery',
  '/ask-the-dentist',
  '/ask-the-dentist/submit',
  '/blog',
  '/faq',
  '/sitemap',
  '/international-patients',
  '/international-patients/packages',
  '/international-patients/accommodation',
  '/international-patients/travel',
  '/dentist-near-me',
  '/dental-tourism',
  '/conditions',
  '/conditions/tooth-decay',
  '/conditions/gum-disease',
  '/conditions/bad-breath',
  '/conditions/tooth-sensitivity',
  '/conditions/dry-mouth',
]

export default function CompleteSitemapPage() {
  const totalPages = serviceUrls.length + velloreUrls.length + stateUrls.length + tamilNaduCities.length + otherUrls.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-teal-50 py-12">
      <SectionContainer>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-teal-100 text-teal-700">Complete Index</Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Complete Website Sitemap</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
              All {totalPages}+ pages including services, locations across India, and resources
            </p>
            <div className="flex items-center justify-center gap-6">
              <div className="text-center"><div className="text-3xl font-bold text-teal-600">{serviceUrls.length}</div><div className="text-sm text-gray-600">Services</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-blue-600">{stateUrls.length + velloreUrls.length + tamilNaduCities.length}</div><div className="text-sm text-gray-600">Locations</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-green-600">{otherUrls.length}</div><div className="text-sm text-gray-600">Other Pages</div></div>
            </div>
          </div>

          {/* Services */}
          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">All Services ({serviceUrls.length} pages)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-96 overflow-y-auto">
              {serviceUrls.map(url => (
                <Link key={url} href={url} className="text-sm text-blue-600 hover:text-blue-800 hover:underline flex items-start gap-1">
                  <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span className="break-all">{url}</span>
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Vellore Locations */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-teal-50 to-blue-50">
            <h2 className="text-2xl font-bold mb-6">Vellore & Nearby Areas ({velloreUrls.length} pages)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {velloreUrls.map(url => (
                <Link key={url} href={url} className="text-sm text-teal-600 hover:text-teal-800 hover:underline flex items-start gap-1">
                  <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span className="break-all">{url}</span>
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Tamil Nadu Cities */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-orange-50 to-yellow-50">
            <h2 className="text-2xl font-bold mb-6">Tamil Nadu Cities ({tamilNaduCities.length} pages)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {tamilNaduCities.map(url => (
                <Link key={url} href={url} className="text-sm text-orange-600 hover:text-orange-800 hover:underline flex items-start gap-1">
                  <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span className="break-all">{url}</span>
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* States */}
          <GlassCard className="p-8 mb-8 bg-gradient-to-br from-green-50 to-teal-50">
            <h2 className="text-2xl font-bold mb-6">All Indian States & UTs ({stateUrls.length} pages)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 max-h-64 overflow-y-auto">
              {stateUrls.map(url => (
                <Link key={url} href={url} className="text-sm text-green-600 hover:text-green-800 hover:underline flex items-start gap-1">
                  <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span className="break-all">{url}</span>
                </Link>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-4">💡 Each state page links to 20-30 cities. Total: 500+ city location pages available!</p>
          </GlassCard>

          {/* Other Pages */}
          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-bold mb-6">Other Important Pages ({otherUrls.length} pages)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
              {otherUrls.map(url => (
                <Link key={url} href={url} className="text-sm text-purple-600 hover:text-purple-800 hover:underline flex items-start gap-1">
                  <CheckCircle className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span className="break-all">{url}</span>
                </Link>
              ))}
            </div>
          </GlassCard>

          {/* Full State Coverage Note */}
          <GlassCard className="p-8 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <h2 className="text-2xl font-bold mb-4">🇮🇳 Complete India Coverage</h2>
            <p className="text-lg mb-4">This sitemap shows main categories. We have comprehensive coverage:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">588+</div>
                <div className="text-sm">Total Pages</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">36</div>
                <div className="text-sm">States & UTs</div>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <div className="text-3xl font-bold mb-2">500+</div>
                <div className="text-sm">City Pages</div>
              </div>
            </div>
            <p className="text-sm mt-4 opacity-90">Each state page (/in/[state]) contains links to all major cities in that state.</p>
          </GlassCard>
        </div>
      </SectionContainer>
    </div>
  )
}

