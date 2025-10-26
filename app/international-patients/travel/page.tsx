import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { 
  Plane, Car, MapPin, CheckCircle, Phone, MessageCircle, Clock,
  Navigation, Globe, Shield, DollarSign, AlertTriangle, Info
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Airport Pickup & Travel Help | International Dental Patients | Vellore',
  description: 'Airport pickup service for international dental patients. Chennai & Bangalore airport transfers to Vellore clinic. Safe, comfortable travel arranged. Book: +91-7010650063',
  keywords: 'airport pickup vellore, chennai to vellore transfer, bangalore to vellore, dental tourism travel, international patient transport',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/international-patients/travel' },
}

const airportOptions = [
  {
    name: "Chennai International Airport (MAA)",
    distance: "145 km",
    duration: "3 hours",
    recommended: true,
    price: "₹4,000 - ₹6,000 (round trip)",
    description: "Major international hub with direct flights from USA, UK, Middle East, Southeast Asia",
    tips: [
      "Most convenient for international travelers",
      "Well-connected with world destinations",
      "Our driver meets you at arrivals",
      "AC car, English-speaking driver",
    ],
  },
  {
    name: "Bangalore International Airport (BLR)",
    distance: "200 km",
    duration: "4 hours",
    recommended: false,
    price: "₹6,000 - ₹8,000 (round trip)",
    description: "Alternative option if better flight connections from your country",
    tips: [
      "Good for flights from Europe, USA",
      "Longer journey but scenic route",
      "Comfortable AC vehicle provided",
      "Rest stops available",
    ],
  },
]

const transportServices = [
  {
    service: "Airport Pickup",
    description: "Our driver meets you at airport arrivals with name board",
    price: "Included in packages / ₹2,500-₹4,000 one-way",
    features: ["AC car", "English-speaking driver", "Help with luggage", "Water bottles provided"],
  },
  {
    service: "Hotel to Clinic Transfers",
    description: "Daily transfers between hotel and clinic during treatment",
    price: "Usually walking distance / ₹200-₹500 if needed",
    features: ["Morning pickup", "Evening drop", "Wait during treatment if needed", "Flexible timing"],
  },
  {
    service: "Local Transportation",
    description: "Car with driver for local sightseeing on rest days",
    price: "₹2,000-₹3,000/day (8 hours)",
    features: ["Visit temples, fort, shopping", "Tourist guide available", "Comfortable travel", "Customized routes"],
  },
  {
    service: "Airport Drop",
    description: "Drop service to airport after treatment completion",
    price: "Included in packages / ₹2,500-₹4,000",
    features: ["Timely departure", "Help with check-in", "Wheelchair if needed", "Safe journey"],
  },
]

const travelTips = [
  {
    title: "Visa Requirements",
    tip: "Most countries get visa-on-arrival or e-visa for India. Medical visa available for long-term treatments. We can provide visa invitation letter.",
  },
  {
    title: "Best Time to Visit",
    tip: "October to March (pleasant weather). Avoid April-June (very hot). Monsoon July-September is manageable but humid.",
  },
  {
    title: "What to Pack",
    tip: "Your X-rays/dental records, medications you're on, comfortable clothes, sunscreen, any specific dietary items, power adapter (India uses 220V).",
  },
  {
    title: "Money & Payments",
    tip: "Indian Rupee (INR) is the currency. ATMs widely available. We accept cash, cards, international wire transfer. Inform us of preferred payment method.",
  },
  {
    title: "Communication",
    tip: "English is widely spoken. Get Indian SIM card at airport (₹200-₹500 for tourist SIM). Hotel WiFi available. WhatsApp works perfectly.",
  },
  {
    title: "Safety",
    tip: "Vellore is very safe. Our driver and staff ensure your security. Keep valuables in hotel safe. India is welcoming to foreign visitors.",
  },
]

export default function TravelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <SectionContainer className="pt-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'International Patients', href: '/international-patients' }, { title: 'Travel & Pickup', href: '/international-patients/travel' }]} />
      </SectionContainer>

      <SectionContainer className="pt-16 pb-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-blue-100 text-blue-700"><Plane className="w-4 h-4 inline mr-1" />Safe & Comfortable Travel</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Airport Pickup & Travel Assistance
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto">
            We arrange safe, comfortable transportation from airport to clinic. English-speaking drivers, 
            AC vehicles, and complete travel coordination for international dental patients.
          </p>
        </div>

        {/* Airport Options */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Choose Your Airport</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {airportOptions.map((airport, index) => (
              <GlassCard key={index} className={`p-8 ${airport.recommended ? 'border-4 border-green-500' : 'border-2 border-gray-200'}`}>
                {airport.recommended && (
                  <Badge className="mb-4 bg-green-600 text-white">⭐ Recommended</Badge>
                )}
                <div className="flex items-center gap-3 mb-4">
                  <Plane className="w-8 h-8 text-blue-600" />
                  <div>
                    <h3 className="text-xl font-bold">{airport.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span>{airport.distance}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {airport.duration}
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{airport.description}</p>
                <div className="text-lg font-bold text-green-600 mb-4">{airport.price}</div>

                <ul className="space-y-2">
                  {airport.tips.map((tip, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{tip}</span>
                    </li>
                  ))}
                </ul>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Transport Services */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">All Transportation Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {transportServices.map((service, index) => (
              <ModernCard key={index}>
                <ModernCardHeader>
                  <ModernCardTitle className="flex items-center gap-3">
                    <Car className="w-6 h-6 text-teal-600" />
                    {service.service}
                  </ModernCardTitle>
                </ModernCardHeader>
                <ModernCardContent>
                  <p className="text-gray-700 mb-3">{service.description}</p>
                  <div className="text-lg font-bold text-teal-600 mb-4">{service.price}</div>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </ModernCardContent>
              </ModernCard>
            ))}
          </div>
        </div>

        {/* Travel Tips */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Essential Travel Tips for International Patients</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {travelTips.map((item, index) => (
              <GlassCard key={index} className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-blue-600" />
                  <h3 className="font-bold text-lg">{item.title}</h3>
                </div>
                <p className="text-gray-700 text-sm">{item.tip}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* Important Info */}
        <ModernCard className="bg-gradient-to-br from-yellow-50 to-orange-50 border-2 border-yellow-300">
          <ModernCardContent className="p-8">
            <div className="flex items-start gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-orange-600 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold mb-2">Important: Book Airport Pickup in Advance</h3>
                <p className="text-gray-700">
                  Please inform us of your flight details at least 48 hours before arrival so we can arrange pickup. 
                  Provide: Flight number, arrival date/time, and number of passengers. We'll send driver details via WhatsApp.
                </p>
              </div>
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* CTA */}
        <ModernCard className="mt-12 p-8 text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <Plane className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Dental Tourism Trip?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us with your flight details and treatment needs. We'll arrange everything - 
            pickup, accommodation, treatment, and sightseeing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <MessageCircle className="mr-2 h-5 w-5" />
              WhatsApp: +91-7010650063
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              Call: +91-7010650063
            </Button>
          </div>
        </ModernCard>
      </SectionContainer>
    </div>
  )
}

