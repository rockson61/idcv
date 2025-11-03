import type { Metadata } from 'next'
import { StandardLocationLayout } from '@/components/location/StandardLocationLayout'
import type { LocationService } from '@/components/location/EnhancedServicesList'
import type { Review } from '@/components/location/LocationReviews'
import type { FAQ } from '@/components/location/LocationFAQs'

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  title: 'Dentist in Vellore | Indira Dental Clinic',
  description:
    'Visit Indira Dental Clinic in Vellore for painless dentistry, advanced technology, and trusted family dental care. Book online, call, or chat with our team today.',
}

const specialFeatures = [
  '3D CBCT & Digital Dentistry',
  'Same-day Emergency Care',
  'Transparent Pricing & EMI Support',
  'ISO Sterilisation Protocols',
]

const services: LocationService[] = [
  {
    title: 'Dental Implants in Vellore',
    slug: 'dental-implants',
    description:
      'Replace missing teeth with 3D-guided implant placement, immediate loading options, and lifetime maintenance plans for Vellore residents.',
    features: [
      'Free implant consultation for Vellore patients',
      'CBCT, intraoral scanner & digital smile preview',
      'Flexible EMI starting at ₹3,499/month',
    ],
    popular: true,
  },
  {
    title: 'Painless Root Canal Treatment',
    slug: 'root-canal-treatment',
    description:
      'Same-day rotary RCT with digital anaesthesia, microscope guidance, and customised crowns for long-lasting relief from tooth pain.',
    features: ['Single-visit option', 'CBCT-based diagnosis', 'Post-treatment WhatsApp follow-up'],
  },
  {
    title: 'Braces & Invisible Aligners',
    slug: 'braces-and-aligners',
    description:
      'Metal braces, ceramic braces, and Invisalign® aligners designed by orthodontic specialists for teens and adults in Vellore.',
    features: ['Digital smile simulation', 'Monthly or quarterly reviews', 'Special plans for students and working professionals'],
  },
  {
    title: 'Smile Design & Veneers',
    slug: 'cosmetic-dentistry/veneers',
    description:
      'Custom veneers, bonding, and whitening to brighten your smile with natural-looking results tailored to your facial profile.',
    features: ['Digital mock-up preview', 'Shade-matched ceramics', 'Special event packages'],
    badge: 'Trending',
  },
  {
    title: 'Family & Child Dentistry',
    slug: 'pediatric-dentistry',
    description:
      'Gentle care for toddlers, children, and teens including fluoride, sealants, habit counselling, and emergency trauma management.',
    features: ['Behavioural guidance experts', 'Playful, child-friendly operatories', 'Special needs care support'],
  },
  {
    title: 'Full Mouth Rehabilitation',
    slug: 'full-mouth-rehabilitation',
    description:
      'Multi-specialty planning combining implants, crowns, gums, and bite correction for a complete smile transformation.',
    features: ['Dedicated treatment coordinator', 'Phased treatment scheduling', 'NABH-aligned sterilisation protocols'],
  },
]

const reviews: Review[] = [
  {
    name: 'Rajesh Kumar',
    location: 'Vellore',
    rating: 5,
    treatment: 'Dental Implants',
    text: 'Best dentist in Vellore! My implant surgery was effortless, and the team explained every step with patience. The clinic is spotless and uses advanced technology.',
    date: '2024-03-18',
    verified: true,
  },
  {
    name: 'Priya Devi',
    location: 'Vellore',
    rating: 5,
    treatment: 'Root Canal & Crown',
    text: 'Painless RCT and a perfect crown. I travelled from Katpadi and the appointment scheduling was super convenient. Highly recommend Dr. Rockson Samuel.',
    date: '2024-02-10',
    verified: true,
  },
  {
    name: 'Sunita Sharma',
    location: 'Vellore',
    rating: 5,
    treatment: 'Clear Aligners',
    text: 'The orthodontic team customised my Invisalign plan and closely tracked progress. Indira Dental Clinic is truly the top dental clinic in Vellore.',
    date: '2024-01-22',
    verified: true,
  },
]

const faqs: FAQ[] = [
  {
    question: 'How much does a dental cleaning cost in Vellore?',
    answer:
      'Professional dental cleaning at Indira Dental Clinic starts from ₹1,200 and includes ultrasonic scaling, polishing, and personalised home-care tips. Book online or call us to check current offers.',
  },
  {
    question: 'Which is the best clinic for dental implants in Vellore?',
    answer:
      'Indira Dental Clinic is trusted for dental implants in Vellore thanks to 3D guided planning, titanium/zirconia options, and a success rate above 98%. We also provide maintenance follow-ups at no extra cost for Vellore patients.',
  },
  {
    question: 'Do you offer emergency dental care near me?',
    answer:
      'Yes. We block priority slots daily for dental emergencies such as toothache, swelling, or accidents. Call or WhatsApp us anytime and our team will arrange immediate care.',
  },
  {
    question: 'Are EMI or insurance options available?',
    answer:
      'We partner with multiple healthcare financiers to offer 0% EMI on major treatments. Our front-office team also helps with insurance paperwork for reimbursement.',
  },
  {
    question: 'How far is the clinic from Katpadi Railway Station?',
    answer:
      'The clinic is approximately 10 minutes from Katpadi Railway Station and 12 minutes from CMC Vellore by car. Auto, cab, and bus connectivity is available throughout the day.',
  },
]

const nearbyLocations = [
  { title: 'Dentist in Katpadi', href: '/in/tamil-nadu/vellore/katpadi' },
  { title: 'Dentist in Arcot', href: '/in/tamil-nadu/arcot' },
  { title: 'Dentist in Ranipet', href: '/in/tamil-nadu/ranipet' },
  { title: 'Dentist in Gudiyatham', href: '/in/tamil-nadu/gudiyatham' },
  { title: 'Dentist in Ambur', href: '/in/tamil-nadu/ambur' },
]

const introParagraph =
  'Missing the comfort of a reliable dentist in Vellore? Indira Dental Clinic delivers painless treatments, digital diagnostics, and personalised smile makeovers right in the heart of the city. From emergency toothache relief to advanced implant dentistry, our experienced team plans every visit around your comfort and goals so you feel confident from the moment you book.'

const whyChoose = [
  'Central Vellore clinic with extended weekday and weekend timings',
  'Implantologists, endodontists, and orthodontists with international training',
  'In-house CBCT, digital impressions, and 3D guided planning',
  'Same-day emergency appointments and WhatsApp follow-ups',
  'Transparent costs, EMI options, and insurance assistance',
]

export default function Page() {
  return (
    <StandardLocationLayout
      locationName="Vellore"
      stateName="Tamil Nadu"
      stateSlug="tamil-nadu"
      taluk="Vellore"
      pincode="632006"
      distance="Located in the heart of Vellore city"
      category="major_town"
      specialFeatures={specialFeatures}
      landmark="Opposite CMC Vellore Ambulance Bay"
      mapAddress="No. 17, 7th East Cross Road, Gandhi Nagar, Vellore - 632006"
      services={services}
      reviews={reviews}
      faqs={faqs}
      nearbyLocations={nearbyLocations}
      introParagraph={introParagraph}
      tagline="Your Trusted Dentist in Vellore for Family & Cosmetic Dentistry"
      whyChoose={whyChoose}
      faqDistance="10 minutes"
      ctaTitle="Book an Appointment in Vellore"
      ctaDescription="Secure your visit with the #1 dentist in Vellore. Choose a slot online, call our care team, or start a WhatsApp chat for quick assistance."
    />
  )
}
