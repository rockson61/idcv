import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, CheckCircle, Droplets, Shield, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "Tooth Erosion Treatment | Enamel Loss | Acid Wear | Vellore",
  description: "Expert treatment for tooth erosion and enamel loss at Indira Dental Clinic. Fluoride treatments, bonding, and preventive care to protect your teeth from acid wear.",
  alternates: {
    canonical: "https://www.dentalclinicinvellore.in/conditions/tooth-erosion",
  },
}

export default function ToothErosionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-cyan-50/30 to-sky-50/30">
      <div className="container mx-auto px-4 py-12">
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Conditions', href: '/conditions' },
            { title: 'Tooth Erosion', href: '/conditions/tooth-erosion' },
          ]}
        />

        <div className="max-w-5xl mx-auto mt-8">
          <div className="text-center mb-12">
            <Badge variant="outline" className="mb-4 border-cyan-500 text-cyan-700">
              Enamel Erosion & Acid Wear
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-600 to-sky-600 bg-clip-text text-transparent">
                Tooth Erosion Treatment
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Protect and restore your enamel with advanced treatments for tooth erosion and acid wear.
            </p>
          </div>

          <GlassCard className="p-8 mb-8">
            <div className="flex items-start gap-4 mb-6">
              <Droplets className="w-12 h-12 text-cyan-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-semibold mb-4">What is Tooth Erosion?</h2>
                <p className="text-gray-600 mb-4">
                  <strong>Tooth erosion</strong> is the loss of tooth enamel caused by acid attack. Unlike tooth decay (cavities), which is caused by bacteria, erosion is caused by acids from foods, drinks, or stomach acid wearing away the tooth surface.
                </p>
                <p className="text-gray-600">
                  At Indira Dental Clinic, Dr. Rockson Samuel provides comprehensive treatment to protect your enamel, including fluoride applications, dietary counseling, and restorative procedures.
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <GlassCard className="p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <AlertCircle className="w-6 h-6 text-cyan-600" />
                Signs & Symptoms
              </h3>
              <ul className="space-y-3">
                {[
                  "Sensitivity to hot, cold, or sweet foods",
                  "Yellowing teeth (dentin showing through)",
                  "Transparent or translucent edges",
                  "Rounded or cupped tooth surfaces",
                  "Cracks or chips in teeth",
                  "Smooth, shiny surfaces on teeth",
                  "Small dents or depressions",
                  "Pain or discomfort when eating",
                ].map((symptom, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
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
                  "Acidic foods and drinks (citrus, soda)",
                  "Gastric acid (acid reflux, GERD)",
                  "Frequent vomiting (bulimia, morning sickness)",
                  "Excessive alcohol consumption",
                  "Low saliva flow (dry mouth)",
                  "Medications causing dry mouth",
                  "Chlorinated swimming pools (frequent exposure)",
                  "Environmental factors (industrial acids)",
                ].map((cause, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyan-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs text-cyan-600 font-bold">{i + 1}</span>
                    </div>
                    <span className="text-gray-700">{cause}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>

          <GlassCard className="p-8 mb-8 bg-gradient-to-r from-cyan-50 to-sky-50">
            <h2 className="text-2xl font-semibold mb-6 text-center">Treatment Options</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  name: "Fluoride Treatment",
                  description: "Professional fluoride application to strengthen enamel and reduce sensitivity",
                  effectiveness: "Preventive",
                },
                {
                  name: "Dental Bonding",
                  description: "Tooth-colored resin to cover eroded areas and protect teeth",
                  effectiveness: "Restorative",
                },
                {
                  name: "Dental Crowns",
                  description: "Caps to cover severely eroded teeth and restore shape and function",
                  effectiveness: "Advanced",
                },
                {
                  name: "Veneers",
                  description: "Thin shells to cover front teeth affected by erosion",
                  effectiveness: "Cosmetic",
                },
                {
                  name: "Desensitizing Treatment",
                  description: "Special pastes and varnishes to reduce tooth sensitivity",
                  effectiveness: "Symptomatic",
                },
                {
                  name: "Dietary Modification",
                  description: "Guidance to reduce acidic food and drink consumption",
                  effectiveness: "Preventive",
                },
              ].map((treatment, i) => (
                <div key={i} className="bg-white rounded-lg p-6 border border-cyan-100">
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
                "Limit acidic foods and drinks",
                "Use a straw when drinking acidic beverages",
                "Rinse mouth with water after acidic exposure",
                "Wait 30 minutes before brushing after acids",
                "Use fluoride toothpaste daily",
                "Chew sugar-free gum to stimulate saliva",
                "Treat acid reflux or GERD promptly",
                "Stay hydrated to maintain saliva flow",
              ].map((tip, i) => (
                <div key={i} className="flex items-start gap-3 p-3 rounded-lg bg-cyan-50">
                  <Shield className="w-5 h-5 text-cyan-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{tip}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          <GlassCard className="p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6">Foods & Drinks to Limit</h2>
            <div className="grid md:grid-cols-3 gap-4">
              {[
                { category: "Beverages", items: ["Soda & cola", "Sports drinks", "Energy drinks", "Wine", "Fruit juices"] },
                { category: "Foods", items: ["Citrus fruits", "Tomatoes", "Pickles", "Vinegar-based foods", "Candy"] },
                { category: "Others", items: ["Aspirin (chewable)", "Vitamin C tablets", "Chlorine exposure", "Industrial acids", "Stomach acid"] },
              ].map((group, i) => (
                <div key={i} className="bg-orange-50 rounded-lg p-4">
                  <h3 className="font-bold text-sm mb-3 text-center">{group.category}</h3>
                  <ul className="space-y-2">
                    {group.items.map((item, j) => (
                      <li key={j} className="text-xs text-gray-700 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-orange-500" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
              <Droplets className="w-6 h-6 text-blue-600" />
              The pH Scale & Your Teeth
            </h3>
            <p className="text-gray-700 mt-3 mb-4">
              Tooth enamel begins to dissolve at a pH of <strong>5.5 or below</strong>. Many common drinks fall well below this threshold:
            </p>
            <ul className="space-y-2">
              {[
                "Cola: pH 2.5",
                "Orange juice: pH 3.8",
                "Sports drinks: pH 3.0-4.0",
                "Wine: pH 3.0-3.5",
                "Water: pH 7.0 (neutral)",
              ].map((item, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Conditions</h3>
              <div className="space-y-2">
                <Link href="/conditions/tooth-sensitivity" className="block text-cyan-600 hover:underline">
                  Tooth Sensitivity
                </Link>
                <Link href="/conditions/tooth-decay" className="block text-cyan-600 hover:underline">
                  Tooth Decay
                </Link>
                <Link href="/conditions/dry-mouth" className="block text-cyan-600 hover:underline">
                  Dry Mouth
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center">
              <h3 className="font-bold text-lg mb-2">Related Services</h3>
              <div className="space-y-2">
                <Link href="/services/fluoride-treatment" className="block text-cyan-600 hover:underline">
                  Fluoride Treatment
                </Link>
                <Link href="/services/dental-bonding" className="block text-cyan-600 hover:underline">
                  Dental Bonding
                </Link>
                <Link href="/services/dental-crowns" className="block text-cyan-600 hover:underline">
                  Dental Crowns
                </Link>
              </div>
            </GlassCard>

            <GlassCard className="p-6 text-center bg-gradient-to-br from-cyan-50 to-sky-50">
              <h3 className="font-bold text-lg mb-4">Protect Your Enamel</h3>
              <p className="text-sm text-gray-600 mb-4">Get expert care today</p>
              <Button className="w-full bg-gradient-to-r from-cyan-600 to-sky-600" asChild>
                <Link href="/contact">Book Appointment</Link>
              </Button>
            </GlassCard>
          </div>

          <GlassCard className="p-8 text-center bg-gradient-to-r from-cyan-50 to-sky-50">
            <Droplets className="w-16 h-16 text-cyan-600 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Protect Your Tooth Enamel</h2>
            <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
              Once enamel is lost, it cannot regenerate. Get expert care at Indira Dental Clinic to protect and restore your teeth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-600 to-sky-600" asChild>
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
