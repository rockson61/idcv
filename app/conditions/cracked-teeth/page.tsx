import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from '@/components/breadcrumb'
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Zap, Shield, Activity } from "lucide-react"
import { ConditionSemanticContent } from "@/components/sections/condition-semantic-content"
import { MedicineSection, commonMedicines } from '@/components/condition/MedicineSection'

export const metadata: Metadata = {
  title: "Cracked Teeth Causes, Symptoms & Treatment | Dr. Rockson Samuel | Vellore",
  description: "Expert treatment for cracked and fractured teeth at Indira Dental Clinic. Bonding, crowns, and advanced restoration solutions. Save your natural teeth!",
  alternates: {
    canonical: "https://www.dentalclinicinvellore.in/conditions/cracked-teeth",
  },
}

export default function CrackedTeethPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50/30 to-yellow-50/30">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Conditions', href: '/conditions' },
            { title: 'Cracked Teeth', href: '/conditions/cracked-teeth' },
          ]}
        />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-amber-500 text-amber-700">
              Tooth Fractures & Cracks
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                Cracked Teeth Causes, Symptoms & Treatment
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced treatment for cracked and fractured teeth to restore function and prevent further damage.
            </p>
          </div>

          <GlassCard className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Activity className="w-12 h-12 text-amber-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">Understanding Cracked Teeth</h2>
                <p className="text-gray-600 mb-4">
                  A <strong>cracked tooth</strong> occurs when there is a fracture or split in the tooth structure. Cracks can range from minor surface cracks to severe fractures that extend into the root. Early detection and treatment are crucial to save the tooth.
                </p>
                <p className="text-gray-600">
                  At Indira Dental Clinic, Dr. Rockson Samuel uses advanced diagnostic tools to identify cracks and provides customized treatment to restore your tooth's integrity.
                </p>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-8 mb-8 bg-gradient-to-r from-amber-50 to-yellow-50">
            <h2 className="text-2xl font-semibold mb-6 text-center">Types of Tooth Cracks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Craze Lines",
                  severity: "Minor",
                  description: "Tiny cracks in the outer enamel, usually harmless and only cosmetic",
                  treatment: "Polishing or no treatment needed",
                },
                {
                  name: "Fractured Cusp",
                  severity: "Moderate",
                  description: "Break occurs around a dental filling, often not affecting the pulp",
                  treatment: "Crown or onlay restoration",
                },
                {
                  name: "Cracked Tooth",
                  severity: "Serious",
                  description: "Vertical crack from the chewing surface toward the root",
                  treatment: "Root canal and crown",
                },
                {
                  name: "Split Tooth",
                  severity: "Severe",
                  description: "Tooth is split into distinct segments from a long-term crack",
                  treatment: "Extraction or salvage portion",
                },
                {
                  name: "Vertical Root Fracture",
                  severity: "Critical",
                  description: "Crack begins in the root and extends toward chewing surface",
                  treatment: "Usually extraction required",
                },
              ].map((crack, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-amber-100">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg">{crack.name}</h3>
                    <Badge 
                      variant={crack.severity === "Minor" ? "secondary" : crack.severity === "Critical" ? "destructive" : "outline"}
                      className="text-xs"
                    >
                      {crack.severity}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{crack.description}</p>
                  <div className="bg-amber-50 rounded p-2">
                    <p className="text-xs text-gray-700"><strong>Treatment:</strong> {crack.treatment}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-amber-600" />
                Common Symptoms
              </h3>
              <ul className="space-y-3">
                {[
                  "Pain when chewing or biting",
                  "Sensitivity to hot or cold",
                  "Intermittent pain (comes and goes)",
                  "Pain when releasing bite pressure",
                  "Discomfort with sweet foods",
                  "Swelling around the tooth",
                  "Difficulty pinpointing pain location",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-orange-600" />
                Common Causes
              </h3>
              <ul className="space-y-3">
                {[
                  "Chewing on hard objects (ice, candy)",
                  "Teeth grinding (bruxism)",
                  "Large fillings weakening tooth",
                  "Trauma or injury to mouth",
                  "Sudden temperature changes in mouth",
                  "Age-related wear and tear",
                  "Uneven chewing pressure",
                  "Previous dental work",
                ].map((cause, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-amber-600 font-bold">{i + 1}</span>
                    </div>
                    <span className="text-gray-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Treatment Options</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Dental Bonding",
                  description: "Composite resin material applied to fill small cracks and restore appearance",
                  bestFor: "Minor cracks, cosmetic repair",
                },
                {
                  name: "Dental Crown",
                  description: "Custom cap placed over the tooth to protect and strengthen it",
                  bestFor: "Moderate to severe cracks, fractured cusps",
                },
                {
                  name: "Root Canal Therapy",
                  description: "Remove damaged pulp and seal the tooth when crack extends to nerve",
                  bestFor: "Cracks affecting dental pulp",
                },
                {
                  name: "Tooth Extraction",
                  description: "Remove tooth if crack is too severe to save",
                  bestFor: "Split teeth, severe vertical fractures",
                },
                {
                  name: "Veneers",
                  description: "Thin porcelain shell to cover front tooth cracks",
                  bestFor: "Front teeth with cosmetic cracks",
                },
              ].map((treatment, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-amber-50 rounded-lg">
                  <div className="w-10 h-10 rounded-full bg-amber-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{treatment.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{treatment.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      Best for: {treatment.bestFor}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Prevention Tips</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Avoid chewing ice, hard candy, or popcorn kernels",
                "Wear a mouthguard during sports",
                "Use a nightguard if you grind your teeth",
                "Don't use teeth as tools to open packages",
                "Maintain regular dental check-ups",
                "Address large fillings with crowns",
                "Avoid sudden temperature changes",
                "Eat a balanced diet for strong teeth",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-amber-50">
                  <Shield className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              When to Seek Immediate Care
            </h3>
            <ul className="space-y-2 mt-4">
              {[
                "Severe pain that doesn't subside",
                "Visible crack or chip in tooth",
                "Sharp edges cutting your tongue or cheek",
                "Trauma or injury to teeth",
                "Swelling or signs of infection",
              ].map((symptom, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Zap className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Conditions</h3>
              <div className="space-y-2">
                <Link href="/conditions/bruxism" className="block text-amber-600 hover:underline">
                  Bruxism (Teeth Grinding)
                </Link>
                <Link href="/conditions/tooth-sensitivity" className="block text-amber-600 hover:underline">
                  Tooth Sensitivity
                </Link>
                <Link href="/conditions/tooth-decay" className="block text-amber-600 hover:underline">
                  Tooth Decay
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Services</h3>
              <div className="space-y-2">
                <Link href="/services/dental-crowns" className="block text-amber-600 hover:underline">
                  Dental Crowns
                </Link>
                <Link href="/services/root-canal-treatment" className="block text-amber-600 hover:underline">
                  Root Canal Treatment
                </Link>
                <Link href="/services/dental-bonding" className="block text-amber-600 hover:underline">
                  Dental Bonding
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center bg-gradient-to-br from-amber-50 to-yellow-50">
              <h3 className="font-bold text-lg mb-4">Need Help?</h3>
              <p className="text-sm text-gray-600 mb-4">Get expert diagnosis and treatment</p>
              <Button className="w-full bg-gradient-to-r from-amber-600 to-yellow-600" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </GlassCard>
          </div>
        {/* Semantic Internal Links */}
        <ConditionSemanticContent conditionName="Cracked Teeth" conditionSlug="cracked-teeth" />


          <GlassCard className="p-8 text-center bg-gradient-to-r from-amber-50 to-yellow-50">
            <Activity className="w-16 h-16 text-amber-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Save Your Cracked Tooth</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Early intervention can prevent extraction. Visit Indira Dental Clinic for expert evaluation and restoration options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-amber-600 to-yellow-600" asChild>
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
