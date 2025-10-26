import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Zap, Shield, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Tooth Abscess Treatment | Dental Infection | Emergency Care | Vellore",
  description: "Emergency treatment for tooth abscess and dental infections at Indira Dental Clinic. Expert care for root abscesses, gum abscesses, and periapical infections. Available 24/7.",
  alternates: {
    canonical: "https://www.dentalclinicinvellore.in/conditions/tooth-abscess",
  },
}

export default function ToothAbscessPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-red-50/30 to-orange-50/30">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Conditions', href: '/conditions' },
            { title: 'Tooth Abscess', href: '/conditions/tooth-abscess' },
          ]}
        />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-red-500 text-red-700">
              Emergency Dental Condition
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
                Tooth Abscess Treatment
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Immediate relief and expert treatment for dental abscesses and infections. Emergency care available.
            </p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="w-8 h-8 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-xl font-bold text-red-900 mb-2">Dental Emergency - Seek Immediate Care</h2>
                <p className="text-red-800 mb-4">
                  A tooth abscess is a serious infection that requires prompt treatment to prevent complications. If you experience severe pain, swelling, or fever, contact us immediately.
                </p>
                <Button className="bg-red-600 hover:bg-red-700" asChild>
                  <Link href="tel:7010650063">
                    <Phone className="w-5 h-5 mr-2" />
                    Emergency: 7010650063
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          <GlassCard className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Zap className="w-12 h-12 text-red-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">What is a Tooth Abscess?</h2>
                <p className="text-gray-600 mb-4">
                  A <strong>tooth abscess</strong> is a pocket of pus caused by a bacterial infection. It can occur in different regions of the tooth for different reasons and typically causes severe, throbbing pain.
                </p>
                <p className="text-gray-600">
                  At Indira Dental Clinic, Dr. Rockson Samuel provides emergency treatment for dental abscesses, including drainage, antibiotics, and definitive root canal therapy to save your tooth.
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Periapical Abscess</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Occurs at the tip of the tooth root due to bacterial invasion of the dental pulp
              </p>
              <div className="bg-red-50 rounded-lg p-4">
                <p className="text-xs text-gray-700"><strong>Cause:</strong> Untreated tooth decay or dental trauma</p>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Periodontal Abscess</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Forms in the gum tissue adjacent to the tooth root
              </p>
              <div className="bg-orange-50 rounded-lg p-4">
                <p className="text-xs text-gray-700"><strong>Cause:</strong> Gum disease or foreign object lodged in gums</p>
              </div>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">Gingival Abscess</h3>
              <p className="text-sm text-gray-600 text-center mb-4">
                Limited to the gum tissue without affecting the tooth or periodontal ligament
              </p>
              <div className="bg-yellow-50 rounded-lg p-4">
                <p className="text-xs text-gray-700"><strong>Cause:</strong> Foreign body embedded in gums</p>
              </div>
            </GlassCard>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-red-600" />
                Warning Signs
              </h3>
              <ul className="space-y-3">
                {[
                  "Severe, persistent, throbbing toothache",
                  "Sensitivity to hot and cold temperatures",
                  "Sensitivity to pressure when chewing",
                  "Fever and general feeling of illness",
                  "Swelling in your face or cheek",
                  "Tender, swollen lymph nodes in neck",
                  "Bad taste in your mouth",
                  "Sudden rush of foul-tasting fluid",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-red-600 font-bold">!</span>
                    </div>
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-blue-600" />
                Risk Factors
              </h3>
              <ul className="space-y-3">
                {[
                  "Poor dental hygiene practices",
                  "Diet high in sugar and carbohydrates",
                  "Dry mouth from medications",
                  "Weakened immune system",
                  "Previous dental work or trauma",
                  "Gum disease (periodontitis)",
                  "Cracked or chipped teeth",
                  "Untreated tooth decay",
                ].map((risk, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{risk}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-8 bg-gradient-to-r from-red-50 to-orange-50">
            <h2 className="text-2xl font-semibold mb-6 text-center">Treatment Approach</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  step: "1",
                  name: "Drainage",
                  description: "Draining the abscess to eliminate infection and relieve pressure",
                },
                {
                  step: "2",
                  name: "Root Canal",
                  description: "Removing infected pulp and sealing the tooth to save it",
                },
                {
                  step: "3",
                  name: "Tooth Extraction",
                  description: "Removing the tooth if it cannot be saved",
                },
                {
                  step: "4",
                  name: "Antibiotics",
                  description: "Prescribing medications to fight the bacterial infection",
                },
                {
                  step: "5",
                  name: "Pain Management",
                  description: "Providing relief through medications and techniques",
                },
                {
                  step: "6",
                  name: "Follow-up Care",
                  description: "Monitoring healing and preventing recurrence",
                },
              ].map((treatment) => (
                <div key={treatment.step} className="bg-white rounded-lg p-6 border border-red-100">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full bg-red-600 text-white flex items-center justify-center font-bold">
                      {treatment.step}
                    </div>
                    <h3 className="font-bold text-lg">{treatment.name}</h3>
                  </div>
                  <p className="text-gray-600 text-sm">{treatment.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Prevention Strategies</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Brush teeth twice daily with fluoride toothpaste",
                "Floss daily to remove plaque between teeth",
                "Replace toothbrush every 3-4 months",
                "Limit sugary foods and drinks",
                "Visit dentist for regular check-ups",
                "Treat tooth decay promptly",
                "Use antiseptic mouthwash",
                "Address dental injuries immediately",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-blue-50">
                  <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Conditions</h3>
              <div className="space-y-2">
                <Link href="/conditions/tooth-decay" className="block text-red-600 hover:underline">
                  Tooth Decay
                </Link>
                <Link href="/conditions/gum-disease" className="block text-red-600 hover:underline">
                  Gum Disease
                </Link>
                <Link href="/conditions/tooth-sensitivity" className="block text-red-600 hover:underline">
                  Tooth Sensitivity
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Services</h3>
              <div className="space-y-2">
                <Link href="/services/root-canal-treatment" className="block text-red-600 hover:underline">
                  Root Canal Treatment
                </Link>
                <Link href="/services/tooth-extraction" className="block text-red-600 hover:underline">
                  Tooth Extraction
                </Link>
                <Link href="/services/emergency-dental" className="block text-red-600 hover:underline">
                  Emergency Dental
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center bg-gradient-to-br from-red-50 to-orange-50">
              <h3 className="font-bold text-lg mb-4">Emergency Care</h3>
              <p className="text-sm text-gray-600 mb-4">Available 24/7 for dental emergencies</p>
              <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600" asChild>
                <Link href="tel:7010650063">Call Now</Link>
              </Button>
            </GlassCard>
          </div>

          <GlassCard className="p-8 text-center bg-gradient-to-r from-red-50 to-orange-50">
            <AlertTriangle className="w-16 h-16 text-red-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't Ignore Tooth Pain</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Dental abscesses can lead to serious complications if left untreated. Get immediate expert care at Indira Dental Clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-red-600 to-orange-600" asChild>
                <Link href="tel:7010650063">
                  <Phone className="w-5 h-5 mr-2" />
                  Emergency: 7010650063
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
