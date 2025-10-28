import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, CheckCircle, Scissors, Shield, AlertCircle } from "lucide-react"
import { ConditionSemanticContent } from "@/components/sections/condition-semantic-content"
import { MedicineSection, commonMedicines } from '@/components/condition/MedicineSection'

export const metadata: Metadata = {
  title: "Impacted Teeth Treatment | Wisdom Teeth Removal | Vellore",
  description: "Expert treatment for impacted teeth and wisdom teeth at Indira Dental Clinic. Safe extractions, pain management, and comprehensive oral surgery care.",
  alternates: {
    canonical: "https://www.dentalclinicinvellore.in/conditions/impacted-teeth",
  },
}

export default function ImpactedTeethPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-indigo-50/30 to-violet-50/30">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Conditions', href: '/conditions' },
            { title: 'Impacted Teeth', href: '/conditions/impacted-teeth' },
          ]}
        />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-indigo-500 text-indigo-700">
              Impacted & Unerupted Teeth
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-indigo-600 to-violet-600 bg-clip-text text-transparent">
                Impacted Teeth Treatment
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert care for impacted wisdom teeth and other unerupted teeth with safe, effective oral surgery.
            </p>
          </div>

          <GlassCard className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Scissors className="w-12 h-12 text-indigo-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">What Are Impacted Teeth?</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Impacted teeth</strong> are teeth that cannot emerge properly through the gums due to lack of space, obstruction, or abnormal positioning. Wisdom teeth (third molars) are the most commonly impacted teeth, but any tooth can become impacted.
                </p>
                <p className="text-gray-600">
                  At Indira Dental Clinic, Dr. Rockson Samuel provides expert evaluation and treatment for impacted teeth, including safe extractions and management of complications.
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-4 gap-4 mb-8">
            {[
              { type: "Mesial", description: "Angled forward toward front of mouth" },
              { type: "Distal", description: "Angled toward back of mouth" },
              { type: "Horizontal", description: "Lying on its side" },
              { type: "Vertical", description: "Normal angle but trapped" },
            ].map((impact, i) => (
              <GlassCard key={i} className="p-4 text-center">
                <h3 className="font-bold text-sm mb-2">{impact.type} Impaction</h3>
                <p className="text-xs text-gray-600">{impact.description}</p>
              </GlassCard>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertTriangle className="w-6 h-6 text-indigo-600" />
                Signs & Symptoms
              </h3>
              <ul className="space-y-3">
                {[
                  "Pain or tenderness in gums or jaw",
                  "Swollen, red, or bleeding gums",
                  "Jaw pain or stiffness",
                  "Bad breath or unpleasant taste",
                  "Difficulty opening mouth",
                  "Swelling around jaw area",
                  "Headaches or earaches",
                  "Crowding of other teeth",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-orange-600" />
                Potential Complications
              </h3>
              <ul className="space-y-3">
                {[
                  "Damage to adjacent teeth",
                  "Cyst or tumor development",
                  "Gum disease (periodontitis)",
                  "Tooth decay from partial eruption",
                  "Infection (pericoronitis)",
                  "Crowding or shifting of teeth",
                  "Damage to jawbone",
                  "Sinus problems (upper teeth)",
                ].map((complication, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-indigo-600 font-bold">!</span>
                    </div>
                    <span className="text-gray-700">{complication}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-8 bg-gradient-to-r from-indigo-50 to-violet-50">
            <h2 className="text-2xl font-semibold mb-6 text-center">Treatment Options</h2>
            <div className="space-y-4">
              {[
                {
                  name: "Monitoring",
                  description: "Regular observation with X-rays if impacted teeth are not causing problems",
                  when: "Asymptomatic impaction",
                },
                {
                  name: "Surgical Extraction",
                  description: "Removal of impacted tooth through surgical procedure under local or general anesthesia",
                  when: "Pain, infection, or damage to adjacent teeth",
                },
                {
                  name: "Coronectomy",
                  description: "Removing the crown while leaving the roots in place (in specific cases)",
                  when: "Risk of nerve damage during full extraction",
                },
                {
                  name: "Orthodontic Exposure",
                  description: "Surgical exposure and orthodontic guidance to help tooth erupt properly",
                  when: "Impacted canines or premolars worth saving",
                },
                {
                  name: "Antibiotics",
                  description: "Medications to treat or prevent infection before or after surgery",
                  when: "Active infection present",
                },
              ].map((treatment, i) => (
                <div key={i} className="flex items-start gap-4 p-4 bg-white rounded-lg border border-indigo-100">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-2">{treatment.name}</h3>
                    <p className="text-gray-600 text-sm mb-2">{treatment.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      When: {treatment.when}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Post-Extraction Care</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Bite on gauze pad for 30-45 minutes",
                "Apply ice pack to reduce swelling",
                "Take prescribed pain medications",
                "Eat soft foods for first few days",
                "Avoid using straws (can dislodge clot)",
                "Don't smoke or use tobacco",
                "Rinse gently with salt water after 24 hours",
                "Rest and avoid strenuous activity",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-indigo-50">
                  <Shield className="w-5 h-5 text-indigo-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">When Should Wisdom Teeth Be Removed?</h2>
            <p className="text-gray-600 mb-6">
              The American Dental Association recommends removal of impacted wisdom teeth when:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { condition: "Infections or Cysts", icon: "🦠" },
                { condition: "Damage to Nearby Teeth", icon: "🦷" },
                { condition: "Gum Disease", icon: "🩹" },
                { condition: "Extensive Tooth Decay", icon: "⚠️" },
                { condition: "Causing Crowding", icon: "📏" },
                { condition: "Pain or Discomfort", icon: "😣" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-4 bg-violet-50 rounded-lg">
                  <span className="text-2xl">{item.icon}</span>
                  <span className="font-semibold text-gray-700">{item.condition}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-orange-600" />
              Seek Immediate Care If You Experience:
            </h3>
            <ul className="space-y-2 mt-4">
              {[
                "Excessive bleeding that won't stop",
                "Severe pain not relieved by medication",
                "Difficulty breathing or swallowing",
                "High fever (over 100°F/38°C)",
                "Pus or discharge from extraction site",
              ].map((symptom, i) => (
                <li key={i} className="flex items-start gap-2">
                  <AlertCircle className="w-5 h-5 text-orange-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{symptom}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Conditions</h3>
              <div className="space-y-2">
                <Link href="/conditions/tooth-abscess" className="block text-indigo-600 hover:underline">
                  Tooth Abscess
                </Link>
                <Link href="/conditions/gum-disease" className="block text-indigo-600 hover:underline">
                  Gum Disease
                </Link>
                <Link href="/conditions/tooth-decay" className="block text-indigo-600 hover:underline">
                  Tooth Decay
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Services</h3>
              <div className="space-y-2">
                <Link href="/services/oral-surgery" className="block text-indigo-600 hover:underline">
                  Oral Surgery
                </Link>
                <Link href="/services/tooth-extraction" className="block text-indigo-600 hover:underline">
                  Tooth Extraction
                </Link>
                <Link href="/services/orthodontics" className="block text-indigo-600 hover:underline">
                  Orthodontics
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center bg-gradient-to-br from-indigo-50 to-violet-50">
              <h3 className="font-bold text-lg mb-4">Expert Care</h3>
              <p className="text-sm text-gray-600 mb-4">Safe, comfortable tooth extraction</p>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-violet-600" asChild>
                <Link href="/contact">Book Consultation</Link>
              </Button>
            </GlassCard>
          </div>
        {/* Semantic Internal Links */}
        <ConditionSemanticContent conditionName="Impacted Teeth" conditionSlug="impacted-teeth" />


          <GlassCard className="p-8 text-center bg-gradient-to-r from-indigo-50 to-violet-50">
            <Scissors className="w-16 h-16 text-indigo-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Expert Impacted Tooth Treatment</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't let impacted teeth cause complications. Get safe, professional care at Indira Dental Clinic with experienced oral surgeon Dr. Rockson Samuel.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-violet-600" asChild>
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
