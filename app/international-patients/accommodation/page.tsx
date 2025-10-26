import { Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { 
  Hotel, Home, Building2, Crown, CheckCircle, Phone, MessageCircle,
  MapPin, DollarSign, Wifi, Utensils, Car, Star, Shield, Globe
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'Accommodation for International Dental Patients | Hotels Near Clinic | Vellore',
  description: 'Accommodation help for international dental patients in Vellore. Budget to luxury hotels near Indira Dental Clinic. We arrange everything. Book: +91-7010650063',
  keywords: 'hotels near dental clinic vellore, accommodation for patients, budget hotels vellore, guest house vellore, international patient stay',
  alternates: { canonical: 'https://www.dentalclinicinvellore.in/international-patients/accommodation' },
}

const accommodationOptions = [
  {
    category: "Budget Hotels",
    icon: Home,
    priceRange: "₹1,000 - ₹2,000/night",
    usd: "$12 - $24/night",
    distance: "0.5-2 km from clinic",
    options: [
      {
        name: "Local Guest Houses",
        price: "₹1,000-₹1,500",
        features: ["Clean rooms", "Basic amenities", "Walking distance", "Local food available"],
      },
      {
        name: "Budget Hotels",
        price: "₹1,500-₹2,000",
        features: ["AC rooms", "TV", "Hot water", "Room service"],
      },
    ],
  },
  {
    category: "Mid-Range Hotels",
    icon: Building2,
    priceRange: "₹2,500 - ₹4,000/night",
    usd: "$30 - $48/night",
    distance: "1-3 km from clinic",
    options: [
      {
        name: "3-Star Hotels",
        price: "₹2,500-₹3,500",
        features: ["Comfortable rooms", "Restaurant", "WiFi", "English-speaking staff", "Laundry service"],
      },
      {
        name: "Business Hotels",
        price: "₹3,000-₹4,000",
        features: ["Modern amenities", "Breakfast included", "Room service", "Travel desk"],
      },
    ],
  },
  {
    category: "Luxury Hotels",
    icon: Crown,
    priceRange: "₹5,000 - ₹10,000/night",
    usd: "$60 - $120/night",
    distance: "2-5 km from clinic",
    options: [
      {
        name: "4-Star Hotels",
        price: "₹5,000-₹7,000",
        features: ["Luxury rooms", "Multi-cuisine restaurant", "Spa services", "Gym", "Swimming pool"],
      },
      {
        name: "Premium Hotels",
        price: "₹7,000-₹10,000",
        features: ["Presidential suites available", "24/7 concierge", "Airport transfers", "All meals", "Premium amenities"],
      },
    ],
  },
]

const whatWeArrange = [
  "Hotel booking based on your budget",
  "Near clinic location (walking/short drive)",
  "English-speaking hotel staff",
  "WiFi and international call facilities",
  "Vegetarian/Non-veg food options",
  "Airport transfer coordination",
  "Check-in/check-out assistance",
  "Extension if treatment takes longer",
  "Bill payment assistance",
  "Tourism guidance for free days",
]

export default function AccommodationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      <SectionContainer className="pt-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'International Patients', href: '/international-patients' }, { title: 'Accommodation', href: '/international-patients/accommodation' }]} />
      </SectionContainer>

      <SectionContainer className="pt-16 pb-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-orange-100 text-orange-700"><Hotel className="w-4 h-4 inline mr-1" />We Arrange Your Stay</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Accommodation for International Patients
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
            Comfortable, affordable accommodation near our clinic. From budget guest houses to luxury hotels - we arrange everything based on your preferences.
          </p>
        </div>

        {/* Accommodation Options */}
        {accommodationOptions.map((category, index) => (
          <div key={index} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <category.icon className="w-10 h-10 text-orange-600" />
              <div>
                <h2 className="text-2xl font-bold">{category.category}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>{category.priceRange} ({category.usd})</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {category.distance}
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {category.options.map((option, idx) => (
                <GlassCard key={idx} className="p-6">
                  <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                  <div className="text-lg font-bold text-orange-600 mb-4">{option.price}/night</div>
                  <ul className="space-y-2">
                    {option.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>
        ))}

        {/* What We Arrange */}
        <ModernCard className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300">
          <ModernCardHeader>
            <h2 className="text-2xl font-bold">What We Arrange For You</h2>
          </ModernCardHeader>
          <ModernCardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {whatWeArrange.map((service, index) => (
                <div key={index} className="flex items-start gap-2 p-3 bg-white rounded-lg">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-800">{service}</span>
                </div>
              ))}
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* Sample Itinerary */}
        <ModernCard className="mt-12">
          <ModernCardHeader>
            <h2 className="text-2xl font-bold">Sample 7-Day Stay Itinerary</h2>
          </ModernCardHeader>
          <ModernCardContent>
            <div className="space-y-4">
              {[
                { day: "Day 1", activities: "Arrival, airport pickup, hotel check-in, rest" },
                { day: "Day 2", activities: "Clinic visit, consultation, X-rays, treatment planning" },
                { day: "Day 3-5", activities: "Main treatment procedures (implants/veneers/etc)" },
                { day: "Day 6", activities: "Follow-up appointment, final adjustments, rest" },
                { day: "Day 7", activities: "Final check-up, departure preparations, airport drop" },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 bg-orange-50 rounded-lg">
                  <div className="text-2xl font-bold text-orange-600 w-20">{item.day}</div>
                  <div className="text-gray-700">{item.activities}</div>
                </div>
              ))}
            </div>
          </ModernCardContent>
        </ModernCard>

        {/* CTA */}
        <ModernCard className="mt-12 p-8 text-center bg-gradient-to-r from-orange-50 to-pink-50 border-orange-200">
          <Hotel className="w-12 h-12 text-orange-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Let Us Arrange Your Stay</h2>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            Tell us your budget and preferences. We'll arrange comfortable accommodation near our clinic, 
            making your dental treatment journey stress-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700" asChild>
              <Link href="https://wa.me/917010650063?text=I%20need%20accommodation%20help%20for%20dental%20treatment" target="_blank">
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp: +91-7010650063
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-orange-600 text-orange-600" asChild>
              <Link href="/contact">
                <Phone className="w-5 h-5 mr-2" />
                Request Accommodation
              </Link>
            </Button>
          </div>
        </ModernCard>
      </SectionContainer>
    </div>
  )
}

