import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, TrendingDown, Shield, Heart } from "lucide-react"

export const metadata: Metadata = {
  title: "Receding Gums Treatment | Gum Grafting | Gingival Recession | Vellore",
  description: "Expert treatment for receding gums at Indira Dental Clinic. Gum grafting, deep cleaning, and preventive care to restore your gum line and protect your teeth.",
  alternates: {
    canonical: "https://www.dentalclinicinvellore.in/conditions/receding-gums",
  },
}

export default function RecedingGumsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-pink-50/30 to-rose-50/30">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Conditions', href: '/conditions' },
            { title: 'Receding Gums', href: '/conditions/receding-gums' },
          ]}
        />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-pink-500 text-pink-700">
              Gingival Recession
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Receding Gums Treatment
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Restore your gum line and protect exposed tooth roots with advanced periodontal treatments.
            </p>
          </div>

          <GlassCard className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <TrendingDown className="w-12 h-12 text-pink-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">What Are Receding Gums?</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Receding gums</strong> (gingival recession) occur when the gum tissue around teeth wears away or pulls back, exposing more of the tooth or its root. This can lead to sensitivity, decay, and eventual tooth loss if left untreated.
                </p>
                <p className="text-gray-600">
                  At Indira Dental Clinic, Dr. Rockson Samuel provides comprehensive treatment including deep cleaning, gum grafting, and preventive care to restore and protect your gums.
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-pink-600" />
                Warning Signs
              </h3>
              <ul className="space-y-3">
                {[
                  "Teeth appear longer than normal",
                  "Exposed tooth roots visible",
                  "Increased tooth sensitivity",
                  "Gaps between teeth and gums",
                  "Tender or bleeding gums",
                  "Bad breath (halitosis)",
                  "Loose teeth",
                  "Change in bite alignment",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{symptom}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Shield className="w-6 h-6 text-rose-600" />
                Common Causes
              </h3>
              <ul className="space-y-3">
                {[
                  "Aggressive tooth brushing",
                  "Periodontal (gum) disease",
                  "Genetics and family history",
                  "Hormonal changes (pregnancy, menopause)",
                  "Tobacco use (smoking, chewing)",
                  "Teeth grinding or clenching",
                  "Misaligned teeth or crooked bite",
                  "Lip or tongue piercings",
                ].map((cause, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-pink-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-pink-600 font-bold">{i + 1}</span>
                    </div>
                    <span className="text-gray-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-8 bg-gradient-to-r from-pink-50 to-rose-50">
            <h2 className="text-2xl font-semibold mb-6 text-center">Treatment Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Deep Cleaning (Scaling & Root Planing)",
                  description: "Remove plaque and tartar below the gum line and smooth root surfaces",
                  stage: "Early to Moderate",
                },
                {
                  name: "Gum Graft Surgery",
                  description: "Tissue taken from palate or donor source to cover exposed roots",
                  stage: "Moderate to Severe",
                },
                {
                  name: "Pinhole Surgical Technique",
                  description: "Minimally invasive procedure to reposition gum tissue without grafts",
                  stage: "Moderate",
                },
                {
                  name: "Regenerative Procedures",
                  description: "Bone grafts and proteins to regenerate lost tissue and bone",
                  stage: "Advanced",
                },
                {
                  name: "Dental Bonding",
                  description: "Cover exposed root surfaces with tooth-colored resin",
                  stage: "Mild to Moderate",
                },
                {
                  name: "Orthodontic Treatment",
                  description: "Correct misaligned teeth that contribute to recession",
                  stage: "Preventive/Corrective",
                },
              ].map((treatment, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-pink-100">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="font-bold text-lg">{treatment.name}</h3>
                    <Badge variant="secondary" className="text-xs">
                      {treatment.stage}
                    </Badge>
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
                "Use a soft-bristled toothbrush",
                "Brush gently using circular motions",
                "Floss daily but carefully",
                "Quit smoking and tobacco products",
                "Maintain regular dental cleanings",
                "Wear a nightguard if you grind teeth",
                "Address gum disease promptly",
                "Eat a balanced diet rich in vitamins C and D",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-pink-50">
                  <Heart className="w-5 h-5 text-pink-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-4">Complications of Untreated Receding Gums</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                {
                  title: "Root Decay",
                  description: "Exposed roots are more susceptible to cavities and decay",
                },
                {
                  title: "Tooth Loss",
                  description: "Advanced recession can lead to loose teeth and eventual loss",
                },
                {
                  title: "Bone Loss",
                  description: "Supporting bone structure may deteriorate over time",
                },
                {
                  title: "Increased Sensitivity",
                  description: "Exposed roots cause pain with hot, cold, and sweet foods",
                },
                {
                  title: "Aesthetic Concerns",
                  description: "Longer-appearing teeth affect smile appearance",
                },
                {
                  title: "Gum Infection",
                  description: "Bacteria can penetrate deeper causing periodontal disease",
                },
              ].map((complication, i) => (
                <div key={i} className="bg-rose-50 rounded-lg p-4">
                  <h3 className="font-bold text-sm mb-2">{complication.title}</h3>
                  <p className="text-gray-600 text-xs">{complication.description}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded-r-lg mb-8">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-orange-600" />
              Did You Know?
            </h3>
            <p className="text-gray-700 mt-3">
              Gum recession affects approximately <strong>88% of people over age 65</strong> and <strong>50% of people ages 18-64</strong>. Early detection and treatment can prevent progression and save your teeth.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Conditions</h3>
              <div className="space-y-2">
                <Link href="/conditions/gum-disease" className="block text-pink-600 hover:underline">
                  Gum Disease
                </Link>
                <Link href="/conditions/tooth-sensitivity" className="block text-pink-600 hover:underline">
                  Tooth Sensitivity
                </Link>
                <Link href="/conditions/tooth-decay" className="block text-pink-600 hover:underline">
                  Tooth Decay
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Services</h3>
              <div className="space-y-2">
                <Link href="/services/periodontics" className="block text-pink-600 hover:underline">
                  Periodontics
                </Link>
                <Link href="/services/scaling-root-planing" className="block text-pink-600 hover:underline">
                  Scaling & Root Planing
                </Link>
                <Link href="/services/gum-grafting" className="block text-pink-600 hover:underline">
                  Gum Grafting
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center bg-gradient-to-br from-pink-50 to-rose-50">
              <h3 className="font-bold text-lg mb-4">Get Treatment</h3>
              <p className="text-sm text-gray-600 mb-4">Restore your gum health today</p>
              <Button className="w-full bg-gradient-to-r from-pink-600 to-rose-600" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </GlassCard>
          </div>

          <GlassCard className="p-8 text-center bg-gradient-to-r from-pink-50 to-rose-50">
            <TrendingDown className="w-16 h-16 text-pink-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Restore Your Healthy Gums</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Don't let receding gums threaten your oral health. Get expert periodontal care at Indira Dental Clinic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-pink-600 to-rose-600" asChild>
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
