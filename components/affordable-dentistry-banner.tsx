import { DollarSign, MapPin, Calendar, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function AffordableDentistryBanner() {
  return (
    <section className="bg-gradient-to-r from-teal-600 to-blue-600 text-white py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              World-Class Dental Care at 50% Lower Cost
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Get expert dental treatment in Vellore with significant savings compared to major cities. 
              No compromise on quality, just smarter pricing.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" variant="secondary" className="bg-white text-teal-600 hover:bg-gray-100" asChild>
                <Link href="/pricing">
                  <DollarSign className="w-5 h-5 mr-2" />
                  View Pricing
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white/10" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Appointment
                </Link>
              </Button>
            </div>
          </div>

          {/* Right Column - Benefits */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <DollarSign className="w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg mb-2">50% Savings</h3>
              <p className="text-sm opacity-90">
                Save significantly on dental treatments without compromising quality
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Shield className="w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Expert Care</h3>
              <p className="text-sm opacity-90">
                15+ years experience with advanced dental technology
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <MapPin className="w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Dental Tourism</h3>
              <p className="text-sm opacity-90">
                Combine treatment with exploring beautiful Vellore
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <Calendar className="w-10 h-10 mb-3" />
              <h3 className="font-semibold text-lg mb-2">Same Day Care</h3>
              <p className="text-sm opacity-90">
                Emergency appointments and same-day treatments available
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AffordableDentistryBanner
