'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  MapPin,
  Users,
  Clock,
  Shield,
  Star,
  Award,
  Landmark,
  Factory,
  Building,
  Phone,
  MessageCircle,
  Navigation2,
  HeartPulse,
} from 'lucide-react'

export interface DentistProfile {
  name: string
  qualification: string
  experience: string
  expertise: string
  href: string
}

interface LocationHeaderProps {
  locationName: string
  taluk?: string
  pincode?: string
  distance?: string
  category?: 'major_town' | 'town' | 'village' | 'industrial' | 'historic'
  specialFeatures?: string[]
  className?: string
  stateName?: string
  clinicName?: string
  tagline?: string
  introParagraph?: string
  whyChoose?: string[]
  dentists?: DentistProfile[]
  leadCtaTitle?: string
  leadCtaDescription?: string
}

const categoryConfig = {
  major_town: { icon: Building, color: 'bg-blue-100 text-blue-700', label: 'Major Town' },
  town: { icon: MapPin, color: 'bg-green-100 text-green-700', label: 'Town' },
  village: { icon: MapPin, color: 'bg-gray-100 text-gray-700', label: 'Village' },
  industrial: { icon: Factory, color: 'bg-purple-100 text-purple-700', label: 'Industrial Area' },
  historic: { icon: Landmark, color: 'bg-orange-100 text-orange-700', label: 'Historic Town' },
}

const defaultDentists: DentistProfile[] = [
  {
    name: 'Dr. Rockson Samuel',
    qualification: 'BDS, PgDM, BDM',
    experience: '15+ Years',
    expertise: 'Dental Implants, Complex Root Canal Treatment, Smile Design',
    href: '/about-us/dr-rockson-samuel',
  },
  {
    name: 'Dr. Priya Narayanan',
    qualification: 'MDS (Orthodontics)',
    experience: '10+ Years',
    expertise: 'Braces & Aligners, Pediatric Orthodontics, Facial Aesthetics',
    href: '/about-us/our-team',
  },
]

export function LocationHeader({
  locationName,
  taluk,
  pincode,
  distance = '15–20 mins from the clinic',
  category = 'town',
  specialFeatures = [],
  className = '',
  stateName,
  clinicName = 'Indira Dental Clinic',
  tagline,
  introParagraph,
  whyChoose,
  dentists,
  leadCtaTitle,
  leadCtaDescription,
}: LocationHeaderProps) {
  const pathname = usePathname()
  const segments = pathname?.split('/').filter(Boolean) ?? []
  const stateSlug = segments[1] // after "in"

  const formatStateName = (slug?: string) =>
    slug
      ? slug
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join(' ')
      : 'Tamil Nadu'

  const resolvedStateName = stateName || formatStateName(stateSlug)
  const config = categoryConfig[category] || categoryConfig.town
  const Icon = config.icon
  const cityLabel = taluk && taluk !== locationName ? `${taluk}, ${resolvedStateName}` : `${locationName}, ${resolvedStateName}`

  const resolvedTagline =
    tagline || `Your trusted dental clinic for family and cosmetic dentistry near ${locationName}.`

  const resolvedIntro =
    introParagraph ||
    `Looking for a trusted dentist in ${locationName}? ${clinicName} in Vellore welcomes families from ${locationName}, offering painless treatments, digital diagnostics, and compassionate care. From routine cleanings to smile makeovers, our experienced team tailors every visit to your comfort. Travelling from ${locationName} takes just ${distance}, and we keep parking, appointment scheduling, and emergency support convenient for you.`

  const resolvedWhyChoose =
    whyChoose && whyChoose.length > 0
      ? whyChoose
      : [
          `Convenient access for patients from ${locationName} with extended weekday and weekend timings`,
          'Experienced dentists with international exposure in implants, cosmetic dentistry, and orthodontics',
          'In-house CBCT, digital impressions, and 3D guided planning for precise, comfortable dentistry',
          'Same-day emergency appointments and WhatsApp follow-ups for peace of mind',
          'Transparent pricing with EMI support and assistance for insurance documentation',
        ]

  const dentistProfiles = dentists && dentists.length > 0 ? dentists : defaultDentists

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'MedicalBusiness',
    name: clinicName,
    url: 'https://www.dentalclinicinvellore.in',
    telephone: '+91-7010-650-063',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'No. 17, 7th East Cross Road, Gandhi Nagar',
      addressLocality: 'Vellore',
      addressRegion: resolvedStateName,
      postalCode: '632006',
      addressCountry: 'IN',
    },
    image:
      'https://www.dentalclinicinvellore.in/dental-clinic-vellore.jpg',
    priceRange: '₹₹',
    medicalSpecialty: ['Dentistry', 'CosmeticDentistry', 'DentalCare'],
    areaServed: {
      '@type': 'AdministrativeArea',
      name: locationName,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '10:00',
        closes: '13:30',
      },
    ],
  }

  return (
    <section className={`mb-12 ${className}`}>
      <div className="rounded-3xl border border-teal-100 bg-white/90 p-8 shadow-sm backdrop-blur-sm">
        {/* Category & Location identifiers */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className={`inline-flex items-center gap-2 px-4 py-1.5 ${config.color} rounded-full text-xs font-semibold uppercase tracking-wide`}>
            <Icon className="w-3.5 h-3.5" />
            {config.label}
          </div>
          {pincode && (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
              <MapPin className="w-3.5 h-3.5" />
              PIN: {pincode}
            </div>
          )}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
            <Navigation2 className="w-3.5 h-3.5" />
            {distance}
          </div>
        </div>

        {/* Main hero content */}
        <h1 className="text-4xl font-bold text-slate-900 md:text-5xl">Dentist in {locationName}</h1>
        <p className="mt-3 text-xl font-semibold text-teal-700">{resolvedTagline}</p>
        <p className="mt-4 text-base leading-relaxed text-slate-700 md:text-lg">{resolvedIntro}</p>

        {/* CTAs */}
        <div className="mt-6 flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700">
            <Link href="/contact">Book Appointment</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
            <a href="tel:+917010650063" className="flex items-center gap-2">
              <Phone className="h-4 w-4" />
              Call 7010 650 063
            </a>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-green-500 text-green-600 hover:bg-green-50">
            <a href="https://wa.me/917010650063" target="_blank" rel="noreferrer" className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              WhatsApp Our Team
            </a>
          </Button>
        </div>

        {/* Quick stats */}
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="flex flex-col items-center rounded-lg border border-teal-100 bg-teal-50 p-4 text-center shadow-sm">
            <Shield className="mb-2 h-8 w-8 text-teal-600" />
            <p className="text-sm font-semibold text-slate-900">Pain-free Dentistry</p>
            <span className="text-xs text-slate-600">Advanced anaesthesia & sterilisation</span>
          </div>
          <div className="flex flex-col items-center rounded-lg border border-blue-100 bg-blue-50 p-4 text-center shadow-sm">
            <Users className="mb-2 h-8 w-8 text-blue-600" />
            <p className="text-sm font-semibold text-slate-900">15,000+ Smiles</p>
            <span className="text-xs text-slate-600">Patients from {cityLabel}</span>
          </div>
          <div className="flex flex-col items-center rounded-lg border border-yellow-100 bg-yellow-50 p-4 text-center shadow-sm">
            <Star className="mb-2 h-8 w-8 text-yellow-500" />
            <p className="text-sm font-semibold text-slate-900">4.9/5 Rated</p>
            <span className="text-xs text-slate-600">Verified Google reviews</span>
          </div>
          <div className="flex flex-col items-center rounded-lg border border-purple-100 bg-purple-50 p-4 text-center shadow-sm">
            <Clock className="mb-2 h-8 w-8 text-purple-600" />
            <p className="text-sm font-semibold text-slate-900">Flexible Timings</p>
            <span className="text-xs text-slate-600">Open 7 days a week</span>
          </div>
        </div>

        {/* Special features chip list */}
        {specialFeatures.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {specialFeatures.map((feature, index) => (
              <span key={index} className="rounded-full border border-teal-200 px-3 py-1 text-xs font-semibold text-teal-700">
                {feature}
              </span>
            ))}
          </div>
        )}

        {/* Why choose section */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Why Choose Our Dental Clinic in {locationName}?</h2>
          <ul className="space-y-3 text-sm text-slate-700 md:text-base">
            {resolvedWhyChoose.map((reason) => (
              <li key={reason} className="flex items-start gap-2">
                <HeartPulse className="mt-1 h-4 w-4 text-teal-600" />
                <span>{reason}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Meet our dentists */}
        <div className="mt-10">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Meet Our Dentists Serving {locationName}</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {dentistProfiles.map((dentist) => (
              <div key={dentist.name} className="rounded-2xl border border-gray-100 bg-gray-50 p-6 shadow-sm">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{dentist.name}</h3>
                    <p className="text-sm text-teal-600 font-medium">{dentist.qualification}</p>
                  </div>
                  <Badge variant="secondary" className="bg-teal-100 text-teal-700">
                    {dentist.experience}
                  </Badge>
                </div>
                <p className="mt-3 text-sm text-slate-700 leading-relaxed">{dentist.expertise}</p>
                <Link
                  href={dentist.href}
                  className="mt-4 inline-flex items-center text-sm font-semibold text-teal-600 hover:text-teal-700"
                >
                  Know more →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Reinforced CTA */}
        <div className="mt-10 rounded-2xl border border-teal-100 bg-gradient-to-r from-teal-50 to-blue-50 p-6">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-bold text-slate-900">{leadCtaTitle || `Ready to visit the #1 dentist near ${locationName}?`}</h3>
              <p className="text-sm text-slate-700">
                {leadCtaDescription ||
                  'Secure your appointment in under 60 seconds. Same-day slots and emergency care available.'}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-teal-600 hover:bg-teal-700">
                <Link href="/contact">Book Now</Link>
              </Button>
              <Button asChild variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
                <a href="https://goo.gl/maps/9yQ6L1XoDhn" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                  <Navigation2 className="h-4 w-4" />
                  Get Directions
                </a>
              </Button>
            </div>
          </div>
        </div>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </div>
    </section>
  )
}

