import type { Metadata } from "next"
import PricingPageClient from "./PricingPageClient"
import { RelatedLinks } from "@/components/related-links"
import { getRelatedLinks } from "@/utils/generate-links"
import { ModernCard, ModernCardContent, ModernCardHeader, ModernCardTitle } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { 
  CheckCircle, 
  X, 
  Star, 
  Award, 
  Shield, 
  Clock, 
  Phone, 
  Calendar, 
  MapPin, 
  DollarSign,
  TrendingDown,
  Plane,
  Users,
  Globe,
  Heart,
  Zap
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Dental Treatment Prices in Vellore | Transparent Pricing | Indira Dental Clinic',
  description: 'Affordable dental treatment prices in Vellore. Transparent pricing for RCT, implants, braces, cosmetic dentistry. 50% lower costs than other cities. View our pricing now!',
  keywords: [
    'dental prices vellore',
    'dental treatment cost vellore',
    'affordable dental care vellore',
    'dental implants price vellore',
    'root canal treatment cost vellore',
    'braces price vellore',
    'dental tourism vellore',
    'cheap dental treatment vellore',
    'dental clinic pricing vellore',
    'Dr Rockson Samuel pricing'
  ],
  openGraph: {
    title: 'Affordable Dental Treatment Prices in Vellore | Indira Dental Clinic',
    description: 'Get transparent pricing for all dental treatments. Save 50% on dental implants, RCT, braces, and cosmetic dentistry in Vellore.',
    url: 'https://www.dentalclinicinvellore.in/pricing',
    images: [
      {
        url: '/dental-pricing-vellore.jpg',
        width: 1200,
        height: 630,
        alt: 'Affordable Dental Treatment Prices in Vellore'
      }
    ]
  }
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Pricing', href: '/pricing' },
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-teal-600 text-teal-700 font-semibold">
            Transparent Pricing
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Affordable Dental Treatment Prices in Vellore
          </h1>
          <p className="text-lg text-gray-700 mb-8 max-w-4xl mx-auto">
            Experience world-class dental care at <strong className="text-gray-900">50% lower costs</strong> than other cities. 
            Our transparent pricing ensures you get the best value for your dental treatments with no hidden fees.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold" asChild>
              <a href="tel:7010650063">
                <Phone className="w-5 h-5 mr-2" />
                Call Now: 7010650063
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-teal-600 text-gray-900 hover:bg-teal-50 bg-white font-semibold"
              asChild
            >
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Free Consultation
              </Link>
            </Button>
          </div>
        </section>

        {/* Pricing Comparison Chart */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dental Treatment Cost Comparison</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              See how much you can save by choosing Indira Dental Clinic in Vellore compared to other major cities
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
              <thead>
                <tr className="bg-teal-600 text-white">
                  <th className="py-4 px-6 text-left font-semibold">Treatment</th>
                  <th className="py-4 px-6 text-center font-semibold">Vellore (Our Clinic)</th>
                  <th className="py-4 px-6 text-center font-semibold">Chennai</th>
                  <th className="py-4 px-6 text-center font-semibold">Bangalore</th>
                  <th className="py-4 px-6 text-center font-semibold">Mumbai</th>
                  <th className="py-4 px-6 text-center font-semibold">Delhi</th>
                  <th className="py-4 px-6 text-center font-semibold">Savings</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Root Canal Treatment</td>
                  <td className="py-4 px-6 text-center font-bold text-teal-600">₹3,500 - ₹8,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹6,000 - ₹12,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹7,000 - ₹15,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹8,000 - ₹18,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹7,500 - ₹16,000</td>
                  <td className="py-4 px-6 text-center font-bold text-green-600">40-50%</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Dental Implants</td>
                  <td className="py-4 px-6 text-center font-bold text-teal-600">₹25,000 - ₹45,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹40,000 - ₹70,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹45,000 - ₹80,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹50,000 - ₹90,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹45,000 - ₹85,000</td>
                  <td className="py-4 px-6 text-center font-bold text-green-600">45-55%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Braces Treatment</td>
                  <td className="py-4 px-6 text-center font-bold text-teal-600">₹30,000 - ₹80,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹50,000 - ₹1,20,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹55,000 - ₹1,30,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹60,000 - ₹1,40,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹55,000 - ₹1,35,000</td>
                  <td className="py-4 px-6 text-center font-bold text-green-600">40-50%</td>
                </tr>
                <tr className="border-b border-gray-200 bg-gray-50">
                  <td className="py-4 px-6 font-medium">Teeth Whitening</td>
                  <td className="py-4 px-6 text-center font-bold text-teal-600">₹3,000 - ₹8,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹5,000 - ₹12,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹6,000 - ₹15,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹7,000 - ₹18,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹6,500 - ₹16,000</td>
                  <td className="py-4 px-6 text-center font-bold text-green-600">50-60%</td>
                </tr>
                <tr className="border-b border-gray-200">
                  <td className="py-4 px-6 font-medium">Dental Crowns</td>
                  <td className="py-4 px-6 text-center font-bold text-teal-600">₹6,000 - ₹15,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹10,000 - ₹25,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹12,000 - ₹30,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹15,000 - ₹35,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹13,000 - ₹32,000</td>
                  <td className="py-4 px-6 text-center font-bold text-green-600">45-55%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-4 px-6 font-medium">Full Mouth Rehabilitation</td>
                  <td className="py-4 px-6 text-center font-bold text-teal-600">₹1,50,000 - ₹3,00,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹2,50,000 - ₹5,00,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹3,00,000 - ₹6,00,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹3,50,000 - ₹7,00,000</td>
                  <td className="py-4 px-6 text-center text-gray-600">₹3,20,000 - ₹6,50,000</td>
                  <td className="py-4 px-6 text-center font-bold text-green-600">50-60%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <ModernCard className="bg-gradient-to-r from-green-50 to-teal-50 border-green-200">
              <ModernCardContent className="py-8">
                <div className="flex items-center justify-center mb-4">
                  <TrendingDown className="w-8 h-8 text-green-600 mr-3" />
                  <h3 className="text-2xl font-bold text-green-800">Average Savings: 50%</h3>
                </div>
                <p className="text-lg text-gray-700">
                  Patients save an average of <strong className="text-green-800">₹50,000 - ₹2,00,000</strong> on major dental treatments 
                  by choosing Indira Dental Clinic in Vellore over other metropolitan cities.
                </p>
              </ModernCardContent>
            </ModernCard>
          </div>
        </section>

        {/* Dental Tourism Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dental Tourism in Vellore</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Combine your dental treatment with a memorable vacation in beautiful Vellore and save thousands on dental care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ModernCard className="text-center p-6">
              <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Massive Cost Savings</h3>
              <p className="text-gray-600 mb-4">
                Save up to 60% on dental treatments compared to your home country. 
                Even including travel costs, you'll save thousands.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Root Canal: Save ₹15,000-25,000</li>
                <li>• Dental Implants: Save ₹50,000-1,00,000</li>
                <li>• Full Mouth Treatment: Save ₹2,00,000-5,00,000</li>
              </ul>
            </ModernCard>

            <ModernCard className="text-center p-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">World-Class Quality</h3>
              <p className="text-gray-600 mb-4">
                Same high-quality materials and techniques used in developed countries, 
                but at a fraction of the cost.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• International standard materials</li>
                <li>• Advanced technology & equipment</li>
                <li>• Experienced dental specialists</li>
              </ul>
            </ModernCard>

            <ModernCard className="text-center p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Plane className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Travel & Tourism</h3>
              <p className="text-gray-600 mb-4">
                Combine your dental treatment with exploring beautiful Vellore and nearby tourist destinations.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Vellore Fort & Temples</li>
                <li>• Nearby hill stations</li>
                <li>• Cultural heritage sites</li>
              </ul>
            </ModernCard>
          </div>

          <div className="mt-12">
            <ModernCard className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
              <ModernCardContent className="py-12">
                <div className="text-center">
                  <h3 className="text-3xl font-bold mb-4">Complete Dental Tourism Package</h3>
                  <p className="text-xl mb-8">
                    We provide comprehensive dental tourism packages including treatment, accommodation, and local guidance
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                      <h4 className="text-xl font-semibold mb-4">What's Included:</h4>
                      <ul className="space-y-2 text-left">
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Airport pickup and drop
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Accommodation assistance
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Complete dental treatment
                        </li>
                        <li className="flex items-center">
                          <CheckCircle className="w-5 h-5 mr-2" />
                          Post-treatment care
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold mb-4">Popular Packages:</h4>
                      <ul className="space-y-2 text-left">
                        <li>• Single Implant Package: ₹35,000</li>
                        <li>• Multiple Implants: ₹80,000</li>
                        <li>• Full Mouth Rehabilitation: ₹2,50,000</li>
                        <li>• Cosmetic Makeover: ₹1,20,000</li>
                      </ul>
                    </div>
                  </div>
                  <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Dental Tourism Quote
                  </Button>
                </div>
              </ModernCardContent>
            </ModernCard>
          </div>
        </section>

        {/* Why Choose Our Pricing */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Our Pricing is the Best in Vellore</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We offer the most competitive dental treatment prices in Vellore without compromising on quality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModernCard className="text-center p-6">
              <Shield className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">No Hidden Costs</h3>
              <p className="text-gray-600 text-sm">
                Transparent pricing with no surprise charges. What we quote is what you pay.
              </p>
            </ModernCard>

            <ModernCard className="text-center p-6">
              <Award className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Premium Materials</h3>
              <p className="text-gray-600 text-sm">
                We use only the highest quality materials from internationally recognized brands.
              </p>
            </ModernCard>

            <ModernCard className="text-center p-6">
              <Users className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Expert Care</h3>
              <p className="text-gray-600 text-sm">
                Dr. Rockson Samuel with 15+ years of experience ensures the best treatment outcomes.
              </p>
            </ModernCard>

            <ModernCard className="text-center p-6">
              <Clock className="w-12 h-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flexible Payment</h3>
              <p className="text-gray-600 text-sm">
                EMI options available for major treatments. Make dental care affordable for everyone.
              </p>
            </ModernCard>
          </div>
        </section>

        {/* Location-Based Pricing */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Dental Treatment Prices by Location</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We serve patients from all areas of Vellore and neighboring cities with consistent pricing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModernCard className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Vellore Areas</h3>
              <div className="space-y-3">
                <Link href="/in/tamil-nadu/vellore/gandhinagar" className="block text-teal-600 hover:text-teal-700">
            Gandhi Nagar
          </Link>
                <Link href="/in/tamil-nadu/vellore/katpadi" className="block text-teal-600 hover:text-teal-700">
            Katpadi
          </Link>
                <Link href="/in/tamil-nadu/vellore/sathuvachari" className="block text-teal-600 hover:text-teal-700">
            Sathuvachari
          </Link>
                <Link href="/in/tamil-nadu/vellore/bagayam" className="block text-teal-600 hover:text-teal-700">
                  Bagayam
                </Link>
                <Link href="/in/tamil-nadu/vellore/kosapet" className="block text-teal-600 hover:text-teal-700">
                  Kosapet
                </Link>
              </div>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nearby Cities</h3>
              <div className="space-y-3">
                <Link href="/in/tamil-nadu/chennai" className="block text-teal-600 hover:text-teal-700">
                  Chennai (140 km)
                </Link>
                <Link href="/in/tamil-nadu/bangalore" className="block text-teal-600 hover:text-teal-700">
                  Bangalore (200 km)
                </Link>
                <Link href="/in/tamil-nadu/coimbatore" className="block text-teal-600 hover:text-teal-700">
                  Coimbatore (180 km)
                </Link>
                <Link href="/in/tamil-nadu/madurai" className="block text-teal-600 hover:text-teal-700">
                  Madurai (250 km)
                </Link>
                <Link href="/in/andhra-pradesh/tirupati" className="block text-teal-600 hover:text-teal-700">
                  Tirupati (120 km)
                </Link>
              </div>
            </ModernCard>

            <ModernCard className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">International Patients</h3>
              <div className="space-y-3">
                <div className="text-gray-600">
                  <strong>From USA:</strong> Save $3,000-8,000
                </div>
                <div className="text-gray-600">
                  <strong>From UK:</strong> Save £2,000-6,000
                </div>
                <div className="text-gray-600">
                  <strong>From Australia:</strong> Save $4,000-10,000
                </div>
                <div className="text-gray-600">
                  <strong>From UAE:</strong> Save 8,000-20,000 AED
                </div>
                <div className="text-gray-600">
                  <strong>From Singapore:</strong> Save $5,000-12,000
                </div>
              </div>
            </ModernCard>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Patients Say About Our Pricing</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Real testimonials from patients who saved thousands by choosing our clinic
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ModernCard className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "I saved ₹45,000 on my dental implants compared to Chennai prices. The quality is exactly the same, 
                but the cost difference is incredible!"
              </p>
              <div className="text-sm text-gray-600">
                <strong>Rajesh Kumar</strong><br />
                Chennai → Vellore
              </div>
            </ModernCard>

            <ModernCard className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Coming from Bangalore for dental treatment was the best decision. I saved ₹60,000 on my full mouth 
                rehabilitation and got better care."
              </p>
              <div className="text-sm text-gray-600">
                <strong>Priya Sharma</strong><br />
                Bangalore → Vellore
              </div>
            </ModernCard>

            <ModernCard className="p-6">
              <div className="flex items-center mb-4">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "As an NRI from the USA, I saved over $5,000 on my dental treatment. The quality is world-class, 
                and the savings made my trip completely worthwhile."
              </p>
              <div className="text-sm text-gray-600">
                <strong>David Johnson</strong><br />
                USA → Vellore
              </div>
            </ModernCard>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mb-16">
          <ModernCard className="bg-gradient-to-r from-teal-600 to-blue-600 text-white">
            <ModernCardContent className="py-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Save on Your Dental Treatment?</h2>
              <p className="text-xl mb-8">
                Get a personalized quote and see exactly how much you can save. 
                Our transparent pricing ensures no surprises.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-teal-600 hover:bg-gray-100 font-semibold">
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Quote: 7010650063
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-teal-600">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Consultation
                </Button>
              </div>
            </ModernCardContent>
          </ModernCard>
        </section>

        {/* Related Links */}
        <section>
        <RelatedLinks
          title="Explore Our Services & Locations"
          links={getRelatedLinks("/pricing", ["services", "locations", "conditions"])}
          variant="cards"
        />
      </section>
      </div>

      {/* Client Component */}
      <PricingPageClient />
    </div>
  )
}
