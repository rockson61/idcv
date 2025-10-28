import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Moon, Shield, Zap } from "lucide-react"
import { ConditionSemanticContent } from "@/components/sections/condition-semantic-content"
import { MedicineSection, commonMedicines } from '@/components/condition/MedicineSection'

export const metadata: Metadata = {
  title: "Bruxism (Teeth Grinding) Treatment | Night Guards | Vellore",
  description: "Expert treatment for bruxism and teeth grinding at Indira Dental Clinic. Custom night guards, TMJ therapy, and comprehensive solutions. Book your consultation today!",
  alternates: {
    canonical: "https://www.dentalclinicinvellore.in/conditions/bruxism",
  },
}

export default function BruxismPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Conditions', href: '/conditions' },
            { title: 'Bruxism', href: '/conditions/bruxism' },
          ]}
        />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-purple-500 text-purple-700">
              Teeth Grinding & Clenching
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Bruxism (Teeth Grinding) Treatment
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect your teeth from grinding and clenching with our custom night guards and comprehensive treatment solutions.
            </p>
          </div>

          <GlassCard className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Moon className="w-12 h-12 text-purple-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">What is Bruxism?</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Bruxism</strong> is a condition where you grind, gnash, or clench your teeth unconsciously, often during sleep (sleep bruxism) or while awake (awake bruxism). This can lead to various dental and health problems if left untreated.
                </p>
                <p className="text-gray-600">
                  At Indira Dental Clinic in Vellore, Dr. Rockson Samuel provides comprehensive diagnosis and treatment for bruxism, including custom-fitted night guards and therapeutic interventions.
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                Common Symptoms
              </h3>
              <ul className="space-y-3">
                {[
                  "Teeth grinding or clenching sounds during sleep",
                  "Worn, flattened, or chipped teeth",
                  "Increased tooth sensitivity",
                  "Jaw pain or tightness",
                  "Headaches, especially in the morning",
                  "Facial pain or earache",
                  "Disrupted sleep patterns",
                  "Damaged dental work (crowns, fillings)",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-red-600" />
                Common Causes
              </h3>
              <ul className="space-y-3">
                {[
                  "Stress and anxiety",
                  "Sleep disorders (sleep apnea)",
                  "Misaligned teeth or jaw",
                  "Certain medications (antidepressants)",
                  "Lifestyle factors (caffeine, alcohol)",
                  "Genetics and family history",
                  "Age (common in children)",
                  "Personality type (competitive, aggressive)",
                ].map((cause, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-purple-600 font-bold">{i + 1}</span>
                    </div>
                    <span className="text-gray-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-8 bg-gradient-to-r from-purple-50 to-blue-50">
            <h2 className="text-2xl font-semibold mb-6 text-center">Treatment Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Custom Night Guards",
                  description: "Professionally fitted mouthguards worn during sleep to protect teeth from grinding",
                  effectiveness: "Highly Effective",
                },
                {
                  name: "Stress Management",
                  description: "Counseling, meditation, and relaxation techniques to reduce grinding triggers",
                  effectiveness: "Long-term Solution",
                },
                {
                  name: "Dental Correction",
                  description: "Orthodontic treatment or reshaping to correct bite alignment issues",
                  effectiveness: "Corrective",
                },
                {
                  name: "Muscle Relaxants",
                  description: "Medications to relax jaw muscles, typically for short-term use",
                  effectiveness: "Temporary Relief",
                },
                {
                  name: "Botox Injections",
                  description: "Injections to reduce jaw muscle activity in severe cases",
                  effectiveness: "Advanced Treatment",
                },
                {
                  name: "Lifestyle Changes",
                  description: "Reducing caffeine, alcohol, and managing sleep patterns",
                  effectiveness: "Preventive",
                },
              ].map((treatment, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-purple-100">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg">{treatment.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {treatment.effectiveness}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm">{treatment.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Prevention Tips</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Practice stress-reduction techniques daily",
                "Avoid stimulants (caffeine, nicotine) before bed",
                "Establish a relaxing bedtime routine",
                "Exercise regularly to reduce tension",
                "Avoid chewing gum or hard foods",
                "Be conscious of jaw clenching during the day",
                "Schedule regular dental check-ups",
                "Address sleep disorders promptly",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-purple-50">
                  <Shield className="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">When to See a Dentist</h2>
            <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-6">
              <p className="text-gray-700 mb-4">
                <strong>Seek professional help if you experience:</strong>
              </p>
              <ul className="space-y-2">
                {[
                  "Damaged, worn, or sensitive teeth",
                  "Pain in your jaw, face, or ear",
                  "Frequent headaches upon waking",
                  "Partner reports loud grinding sounds",
                  "Locked jaw or difficulty opening/closing mouth",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Conditions</h3>
              <div className="space-y-2">
                <Link href="/conditions/tooth-sensitivity" className="block text-purple-600 hover:underline">
                  Tooth Sensitivity
                </Link>
                <Link href="/conditions/tooth-decay" className="block text-purple-600 hover:underline">
                  Tooth Decay
                </Link>
                <Link href="/conditions/gum-disease" className="block text-purple-600 hover:underline">
                  Gum Disease
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Services</h3>
              <div className="space-y-2">
                <Link href="/services/general-dentistry" className="block text-purple-600 hover:underline">
                  General Dentistry
                </Link>
                <Link href="/services/dental-crowns" className="block text-purple-600 hover:underline">
                  Dental Crowns
                </Link>
                <Link href="/services/orthodontics" className="block text-purple-600 hover:underline">
                  Orthodontics
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center bg-gradient-to-br from-purple-50 to-blue-50">
              <h3 className="font-bold text-lg mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Schedule a consultation to discuss your bruxism treatment options</p>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </GlassCard>
          </div>
        {/* Semantic Internal Links */}
        <ConditionSemanticContent conditionName="Bruxism" conditionSlug="bruxism" />


          <GlassCard className="p-8 text-center bg-gradient-to-r from-purple-50 to-blue-50">
            <AlertCircle className="w-16 h-16 text-purple-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Don't Let Bruxism Damage Your Teeth</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Early intervention can prevent serious dental damage. Visit Indira Dental Clinic for expert diagnosis and custom treatment solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-blue-600" asChild>
                <Link href="/contact">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="tel:7010650063">Call: 7010650063</Link>
              </Button>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  )
}
