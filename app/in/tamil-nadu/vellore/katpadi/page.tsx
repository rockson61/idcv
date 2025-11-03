import type { Metadata } from 'next'
import { StandardLocationLayout } from '@/components/location/StandardLocationLayout'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Dentist in Katpadi | Indira Dental Clinic Vellore',
  description:
    'Looking for a dentist in Katpadi near VIT and CMC? Indira Dental Clinic offers painless treatments, student-friendly timings, and modern technology just minutes away.',
}

const specialFeatures = [
  'Quick access via Katpadi Junction & VIT Vellore',
  'Digital X-rays, CBCT & microscope-assisted dentistry',
  'Emergency dental care for hostel students',
  'Transparent pricing with EMI support',
]

const nearbyLocations = [
  { title: 'Dentist in Vellore', href: '/in/tamil-nadu/vellore' },
  { title: 'Dentist in Ranipet', href: '/in/tamil-nadu/ranipet' },
  { title: 'Dentist in Gudiyatham', href: '/in/tamil-nadu/gudiyatham' },
  { title: 'Dentist in Arcot', href: '/in/tamil-nadu/arcot' },
]

const introParagraph =
  'Need a dependable dentist near Katpadi Junction or VIT Vellore? Indira Dental Clinic combines painless treatments, digital planning, and flexible scheduling for students, families, and working professionals. A short 15-minute ride connects you to advanced dental care, transparent pricing, and a team that stays in touch over WhatsApp for every follow-up.'

const whyChoose = [
  'Open early and late to suit college and office schedules',
  'Experienced specialists for implants, braces, and smile makeovers',
  'Dedicated emergency line for urgent tooth pain or accidents',
  '0% EMI, student offers, and help with insurance paperwork',
  'Comfortable lounge with Wi-Fi and Netflix during treatments',
]

export default function Page() {
  return (
    <StandardLocationLayout
      locationName="Katpadi"
      stateName="Tamil Nadu"
      stateSlug="tamil-nadu"
      cityName="Vellore"
      citySlug="vellore"
      taluk="Katpadi"
      pincode="632007"
      distance="15 minutes from Indira Dental Clinic, Gandhi Nagar"
      category="town"
      specialFeatures={specialFeatures}
      landmark="Near VIT Vellore & Katpadi Junction"
      mapAddress="No. 17, 7th East Cross Road, Gandhi Nagar, Vellore - 632006"
      nearbyLocations={nearbyLocations}
      introParagraph={introParagraph}
      tagline="Your Trusted Dentist in Katpadi near CMC & VIT"
      whyChoose={whyChoose}
      faqDistance="15 minutes"
      ctaTitle="Book Your Dentist Appointment near Katpadi"
      ctaDescription="Reserve a slot online, call our care team, or WhatsApp us for fast assistance. Same-day emergency visits available for Katpadi residents and students."
    />
  )
}
