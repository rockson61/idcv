import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Badge } from "@/components/ui/badge"
import { 
  AlertCircle, 
  CheckCircle, 
  Activity, 
  Shield,
  HeartPulse,
  Sparkles,
  Flame,
  Droplet,
  AlertTriangle,
  TrendingDown,
  Smile
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Conditions We Treat | Comprehensive Oral Health Care | Vellore",
  description: "Expert treatment for all dental conditions including tooth decay, gum disease, sensitivity, bad breath, dry mouth, bruxism, and more at Indira Dental Clinic Vellore.",
  alternates: {
    canonical: "https://www.dentalclinicinvellore.in/conditions",
  },
}

const conditions = [
  {
    name: "Bad Breath (Halitosis)",
    slug: "bad-breath",
    description: "Persistent mouth odor caused by bacteria, food particles, or underlying dental issues.",
    symptoms: ["Unpleasant breath odor", "Unpleasant taste", "Dry mouth", "White coating on tongue"],
    icon: Activity,
    color: "text-red-600",
    bgColor: "bg-red-50",
    severity: "Low",
  },
  {
    name: "Dry Mouth (Xerostomia)",
    slug: "dry-mouth",
    description: "Insufficient saliva production leading to discomfort and increased risk of dental problems.",
    symptoms: ["Dry, sticky mouth", "Difficulty swallowing", "Altered sense of taste", "Sore throat"],
    icon: Droplet,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
    severity: "Medium",
  },
  {
    name: "Gum Disease (Periodontitis)",
    slug: "gum-disease",
    description: "Infection of the gums that can lead to tooth loss and other serious health complications.",
    symptoms: ["Bleeding gums", "Swollen gums", "Receding gum line", "Loose teeth", "Persistent bad breath"],
    icon: AlertTriangle,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
    severity: "High",
  },
  {
    name: "Tooth Decay (Cavities)",
    slug: "tooth-decay",
    description: "Destruction of tooth structure caused by bacteria-produced acids leading to cavities.",
    symptoms: ["Toothache", "Sensitivity", "Visible holes", "Staining", "Pain when biting"],
    icon: TrendingDown,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    severity: "Medium",
  },
  {
    name: "Tooth Sensitivity",
    slug: "tooth-sensitivity",
    description: "Pain or discomfort when teeth are exposed to hot, cold, sweet, or acidic substances.",
    symptoms: ["Sharp pain with hot/cold", "Discomfort when brushing", "Pain with sweet foods", "Pain with acidic drinks"],
    icon: Flame,
    color: "text-yellow-600",
    bgColor: "bg-yellow-50",
    severity: "Low",
  },
  {
    name: "Bruxism (Teeth Grinding)",
    slug: "bruxism",
    description: "Unconscious grinding or clenching of teeth, often during sleep, causing damage and pain.",
    symptoms: ["Teeth grinding sounds", "Worn teeth", "Jaw pain", "Headaches", "Disrupted sleep"],
    icon: Activity,
    color: "text-purple-600",
    bgColor: "bg-purple-50",
    severity: "Medium",
  },
  {
    name: "Tooth Abscess",
    slug: "tooth-abscess",
    description: "Pocket of pus caused by bacterial infection requiring immediate dental treatment.",
    symptoms: ["Severe toothache", "Fever", "Facial swelling", "Tender lymph nodes", "Bad taste"],
    icon: AlertTriangle,
    color: "text-red-600",
    bgColor: "bg-red-50",
    severity: "High",
  },
  {
    name: "Cracked Teeth",
    slug: "cracked-teeth",
    description: "Fractures or splits in tooth structure from trauma, grinding, or weakened enamel.",
    symptoms: ["Pain when chewing", "Temperature sensitivity", "Intermittent pain", "Swelling"],
    icon: TrendingDown,
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    severity: "Medium",
  },
  {
    name: "Receding Gums",
    slug: "receding-gums",
    description: "Gum tissue pulls back exposing tooth roots, increasing risk of decay and sensitivity.",
    symptoms: ["Exposed roots", "Longer-looking teeth", "Tooth sensitivity", "Gaps at gum line"],
    icon: TrendingDown,
    color: "text-pink-600",
    bgColor: "bg-pink-50",
    severity: "Medium",
  },
  {
    name: "Tooth Erosion",
    slug: "tooth-erosion",
    description: "Loss of tooth enamel caused by acid attack from foods, drinks, or stomach acid.",
    symptoms: ["Yellowing teeth", "Increased sensitivity", "Transparent edges", "Rounded surfaces"],
    icon: Droplet,
    color: "text-cyan-600",
    bgColor: "bg-cyan-50",
    severity: "Medium",
  },
  {
    name: "Impacted Teeth",
    slug: "impacted-teeth",
    description: "Teeth unable to emerge properly through gums, commonly affecting wisdom teeth.",
    symptoms: ["Jaw pain", "Swollen gums", "Bad breath", "Difficulty opening mouth", "Headaches"],
    icon: AlertTriangle,
    color: "text-indigo-600",
    bgColor: "bg-indigo-50",
    severity: "High",
  },
]

const treatments = [
  {
    name: "Professional Cleaning",
    description: "Deep cleaning to remove plaque and tartar buildup",
    conditions: ["Bad Breath", "Gum Disease", "Tooth Decay"],
  },
  {
    name: "Fluoride Treatment",
    description: "Strengthening enamel and preventing cavities",
    conditions: ["Tooth Decay", "Tooth Sensitivity"],
  },
  {
    name: "Periodontal Therapy",
    description: "Comprehensive treatment for gum disease",
    conditions: ["Gum Disease", "Receding Gums"],
  },
  {
    name: "Root Canal Treatment",
    description: "Saving infected teeth from extraction",
    conditions: ["Tooth Decay", "Abscess"],
  },
  {
    name: "Dental Fillings",
    description: "Restoring decayed teeth with composite materials",
    conditions: ["Tooth Decay"],
  },
]

export default function ConditionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/30 to-blue-50/30">
      <SectionContainer className="pt-24 pb-16">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Conditions', href: '/conditions' },
          ]}
        />

        {/* Hero Section */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-teal-500 text-teal-700">
            Dental Conditions
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
              Common Dental Conditions We Treat
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            At Indira Dental Clinic, we provide expert diagnosis and treatment for a wide range of dental conditions. 
            Our experienced team, led by Dr. Rockson Samuel, ensures personalized care for every patient.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600" asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Conditions We Treat</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {conditions.map((condition, index) => {
              const Icon = condition.icon
              return (
                <GlassCard key={index} className="hover:shadow-xl transition-all duration-300 cursor-pointer group">
                  <Link href={`/conditions/${condition.slug}`} className="block">
                    <div className={`w-16 h-16 ${condition.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-8 h-8 ${condition.color}`} />
                    </div>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900">{condition.name}</h3>
                      <Badge variant="outline" className="text-xs">
                        {condition.severity}
                      </Badge>
                    </div>
                    <p className="text-gray-600 mb-4 text-sm">{condition.description}</p>
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Common Symptoms:</h4>
                      <ul className="space-y-1">
                        {condition.symptoms.slice(0, 3).map((symptom, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <Activity className="w-3 h-3 text-teal-600" />
                            {symptom}
                          </li>
                        ))}
                        {condition.symptoms.length > 3 && (
                          <li className="text-xs text-gray-500">+ {condition.symptoms.length - 3} more</li>
                        )}
                      </ul>
                    </div>
                    <div className="flex items-center text-teal-600 font-semibold text-sm group-hover:gap-2 transition-all">
                      Learn More
                      <span className="text-lg">→</span>
                    </div>
                  </Link>
                </GlassCard>
              )
            })}
          </div>
        </div>

        {/* Why Choose Us */}
        <GlassCard className="p-8 mb-16 bg-gradient-to-r from-teal-50 to-blue-50">
          <div className="text-center mb-8">
            <HeartPulse className="w-16 h-16 text-teal-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Indira Dental Clinic?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Expert Diagnosis</h3>
              <p className="text-gray-600 text-sm">15+ years of experience in identifying and treating dental conditions</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-blue-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Advanced Technology</h3>
              <p className="text-gray-600 text-sm">State-of-the-art diagnostic tools for accurate treatment</p>
            </div>
            <div className="text-center">
              <Smile className="w-12 h-12 text-purple-600 mx-auto mb-3" />
              <h3 className="font-bold text-lg mb-2">Compassionate Care</h3>
              <p className="text-gray-600 text-sm">Personalized treatment plans for each patient's unique needs</p>
            </div>
          </div>
        </GlassCard>

        {/* Available Treatments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-4">Available Treatments</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            We offer a comprehensive range of treatments to address various dental conditions effectively.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {treatments.map((treatment, index) => (
              <GlassCard key={index} className="p-6">
                <Sparkles className="w-10 h-10 text-teal-600 mb-3" />
                <h3 className="text-lg font-bold mb-2">{treatment.name}</h3>
                <p className="text-gray-600 text-sm mb-3">{treatment.description}</p>
                <div className="flex flex-wrap gap-2">
                  {treatment.conditions.map((condition, i) => (
                    <Badge key={i} variant="secondary" className="text-xs">
                      {condition}
                    </Badge>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <GlassCard className="p-8 text-center bg-gradient-to-r from-teal-50 to-blue-50">
          <AlertCircle className="w-16 h-16 text-teal-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Experiencing Dental Issues?</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-2xl mx-auto">
            Don't wait for dental problems to worsen. Early diagnosis and treatment can prevent complications 
            and save your natural teeth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600" asChild>
              <Link href="/contact">
                <CheckCircle className="w-5 h-5 mr-2" />
                Book Consultation
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="tel:7010650063">
                Call: 7010650063
              </Link>
            </Button>
          </div>
        </GlassCard>

        {/* FAQ Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GlassCard className="p-6">
              <h3 className="font-bold text-lg mb-2">What are the most common dental conditions?</h3>
              <p className="text-gray-600 text-sm">
                The most common dental conditions include tooth decay, gum disease, tooth sensitivity, bad breath, 
                and dry mouth. Regular dental check-ups help detect and treat these issues early.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-bold text-lg mb-2">How often should I visit the dentist?</h3>
              <p className="text-gray-600 text-sm">
                We recommend visiting the dentist every six months for routine check-ups and cleanings. However, 
                if you experience symptoms, don't wait - schedule an appointment immediately.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-bold text-lg mb-2">Can I prevent dental conditions?</h3>
              <p className="text-gray-600 text-sm">
                Yes! Good oral hygiene practices including brushing twice daily, flossing, and regular professional 
                cleanings can prevent most dental conditions. We'll provide personalized preventive care guidance.
              </p>
            </GlassCard>
            <GlassCard className="p-6">
              <h3 className="font-bold text-lg mb-2">What if I have a dental emergency?</h3>
              <p className="text-gray-600 text-sm">
                We provide emergency dental care at Indira Dental Clinic. Call us at 7010650063 for immediate 
                assistance with severe pain, trauma, or urgent dental issues.
              </p>
            </GlassCard>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
