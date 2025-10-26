import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { GlassCard } from '@/components/ui/glass-card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { SectionContainer } from '@/components/ui/section-container'
import { ServiceReviews } from '@/components/ui/service-reviews'
import { generateServiceReviews } from '@/lib/review-data'
import { Calendar, Shield, Star, CheckCircle, Phone, MessageCircle, Smile, Eye, EyeOff, Zap, Heart, Award, Users, TrendingUp, ArrowRight, Target, Sparkles, Clock, DollarSign, Utensils, Crown } from 'lucide-react'

const reviews = generateServiceReviews('Invisalign', 'orthodontics')

export const metadata: Metadata = {
  title: 'Invisalign Clear Aligners in Vellore | Invisible Braces | Dr. Rockson Samuel | Indira Dental Clinic',
  description: 'Premium Invisalign clear aligners in Vellore by certified provider Dr. Rockson Samuel. Invisible teeth straightening without metal braces. Removable, comfortable, effective. 3D smile preview. Price: ₹1,50,000-₹3,50,000. EMI available. Book free consultation: 7010650063',
  keywords: [
    'invisalign vellore',
    'clear aligners vellore',
    'invisible braces vellore',
    'teeth straightening vellore',
    'invisalign provider vellore',
    'clear braces vellore',
    'orthodontics without braces',
    'removable aligners vellore',
    'Dr Rockson Samuel invisalign',
    'invisalign cost vellore',
    'invisalign treatment vellore',
    'adult orthodontics vellore',
  ],
  openGraph: {
    title: 'Invisalign Clear Aligners in Vellore | Invisible Braces',
    description: 'Straighten teeth invisibly with Invisalign. No metal braces. Certified provider Dr. Rockson Samuel.',
    type: 'website',
    images: [{
      url: '/invisalign-clear-aligners.jpg',
      width: 1200,
      height: 630,
      alt: 'Invisalign Clear Aligners at Indira Dental Clinic Vellore',
    }],
  },
  alternates: { 
    canonical: 'https://www.dentalclinicinvellore.in/services/orthodontics/invisalign' 
  },
}

const problems = [
  "Embarrassed to wear metal braces as an adult",
  "Worried about professional appearance with braces",
  "Don't want food restrictions from braces",
  "Concerned about oral hygiene with fixed braces",
  "Want to straighten teeth discreetly",
  "Need orthodontic treatment but work in public-facing role",
  "Have crowded or gapped teeth",
  "Mild to moderate bite issues",
]

const benefits = [
  {
    icon: EyeOff,
    title: "Virtually Invisible",
    description: "Clear plastic aligners blend with teeth - most people won't even notice you're wearing them",
  },
  {
    icon: Utensils,
    title: "Eat Anything",
    description: "Remove aligners to eat - no food restrictions unlike traditional braces",
  },
  {
    icon: Shield,
    title: "Comfortable",
    description: "Smooth plastic won't irritate cheeks or gums - no metal wires or brackets",
  },
  {
    icon: Sparkles,
    title: "Easy Hygiene",
    description: "Remove to brush and floss normally - maintain better oral health during treatment",
  },
  {
    icon: Calendar,
    title: "Fewer Visits",
    description: "Check-ups every 6-8 weeks vs. monthly adjustments with braces",
  },
  {
    icon: Target,
    title: "Predictable Results",
    description: "3D digital treatment plan shows your final smile before you start",
  },
]

const process = [
  {
    step: "1",
    title: "Free 3D Consultation",
    description: "Digital scan of your teeth, 3D smile simulation showing final results",
    duration: "30-45 min",
    icon: Eye,
  },
  {
    step: "2",
    title: "Custom Treatment Plan",
    description: "AI-powered planning creates your personalized aligner series",
    duration: "1-2 weeks",
    icon: Target,
  },
  {
    step: "3",
    title: "Receive Aligners",
    description: "Get your custom Invisalign aligners with detailed wearing instructions",
    duration: "3-4 weeks",
    icon: Crown,
  },
  {
    step: "4",
    title: "Wear & Switch",
    description: "Wear 22 hrs/day, switch to new aligner every 1-2 weeks",
    duration: "12-24 months",
    icon: RefreshCw,
  },
  {
    step: "5",
    title: "Regular Check-ups",
    description: "Visit every 6-8 weeks to monitor progress and receive new aligners",
    duration: "Every 6-8 weeks",
    icon: Calendar,
  },
  {
    step: "6",
    title: "Retainers",
    description: "Wear retainers after treatment to maintain your beautiful new smile",
    duration: "Lifelong",
    icon: Shield,
  },
]

const invisalignVsBraces = {
  invisalign: [
    "Virtually invisible - no one notices",
    "Removable for eating and cleaning",
    "No food restrictions",
    "Easy to brush and floss",
    "Smooth plastic - no irritation",
    "Fewer dental visits (6-8 weeks)",
    "Digital treatment preview",
    "Great for adults and professionals",
  ],
  braces: [
    "Metal brackets very visible",
    "Fixed - cannot remove",
    "Avoid hard, sticky foods",
    "Difficult to clean around brackets",
    "Metal wires can irritate",
    "Monthly adjustment visits",
    "No preview of final result",
    "Often associated with teenagers",
  ],
}

const pricing = [
  {
    package: "Invisalign Lite",
    cases: "Mild Cases",
    aligners: "Up to 14 aligners",
    duration: "6-9 months",
    price: "₹1,50,000 - ₹2,00,000",
    features: ["Minor crowding", "Small gaps", "Minor relapse", "Limited treatment"],
  },
  {
    package: "Invisalign Moderate",
    cases: "Moderate Cases",
    aligners: "15-25 aligners",
    duration: "12-18 months",
    price: "₹2,00,000 - ₹2,75,000",
    features: ["Moderate crowding", "Moderate spacing", "Bite correction", "Most common"],
  },
  {
    package: "Invisalign Comprehensive",
    cases: "Complex Cases",
    aligners: "Unlimited aligners",
    duration: "18-24 months",
    price: "₹2,75,000 - ₹3,50,000",
    features: ["Severe crowding", "Complex bite issues", "Full treatment", "Unlimited refinements"],
  },
]

const faqs = [
  {
    question: "How does Invisalign work?",
    answer: "Invisalign uses a series of custom-made, clear plastic aligners that gradually shift your teeth into the desired position. Each aligner is worn for 1-2 weeks before switching to the next one in the series. The aligners apply gentle, controlled force to move teeth precisely.",
  },
  {
    question: "Is Invisalign as effective as traditional braces?",
    answer: "Yes! Invisalign can treat most orthodontic issues including crowding, spacing, overbite, underbite, and crossbite. For very complex cases or severe rotation, traditional braces might be more suitable. Dr. Rockson will assess if you're a good candidate during consultation.",
  },
  {
    question: "How long does Invisalign treatment take?",
    answer: "Average treatment time is 12-18 months for most cases. Mild cases can finish in 6-9 months, while complex cases may take up to 24 months. Your specific timeline depends on the complexity of your case and compliance with wearing aligners 20-22 hours daily.",
  },
  {
    question: "Does Invisalign hurt?",
    answer: "Invisalign causes much less discomfort than traditional braces. You may feel pressure when switching to a new aligner (indicating it's working), but it's mild and temporary. No sharp wires or brackets means no mouth irritation.",
  },
  {
    question: "Can I eat and drink with Invisalign?",
    answer: "You must remove aligners before eating or drinking anything except water. This is actually an advantage - no food restrictions! Just remove aligners, eat whatever you want, brush teeth, and put aligners back in.",
  },
  {
    question: "How much does Invisalign cost in Vellore?",
    answer: "Invisalign costs ₹1,50,000 to ₹3,50,000 depending on case complexity. This is 30-40% lower than metro cities. We offer EMI options starting from ₹10,000/month to make treatment affordable.",
  },
  {
    question: "Will Invisalign affect my speech?",
    answer: "Most patients adapt within 2-3 days with minimal speech changes. The aligners are thin and fit closely to teeth. Any initial lisp disappears quickly as you get used to wearing them.",
  },
  {
    question: "Can Invisalign fix overbite/underbite?",
    answer: "Yes, Invisalign can treat mild to moderate overbites and underbites using precision attachments and elastic bands. Severe skeletal jaw discrepancies may require traditional braces or combination treatment.",
  },
]

const idealCandidates = [
  "Working professionals who need discretion",
  "Adults embarrassed about metal braces",
  "Public speakers and presenters",
  "Models and actors",
  "Patients with mild to moderate crowding",
  "Those with spacing/gaps between teeth",
  "Patients wanting easy oral hygiene",
  "People with active lifestyles (removable for sports)",
  "Anyone committed to 22-hour daily wear",
  "Teenagers (Invisalign Teen available)",
]

const relatedQuestions = [
  {
    title: "Can I get Invisalign if I have crowns or implants?",
    excerpt: "Yes! Invisalign can work around existing dental work. Special attachments may be needed.",
    href: "/ask-the-dentist",
  },
  {
    title: "What happens if I lose an Invisalign aligner?",
    excerpt: "Contact us immediately. You may move to the next aligner or we'll order a replacement.",
    href: "/ask-the-dentist",
  },
  {
    title: "Is Invisalign covered by dental insurance?",
    excerpt: "Some insurance plans cover Invisalign similarly to braces. We'll help you maximize benefits.",
    href: "/ask-the-dentist",
  },
]

const relatedServices = [
  {
    title: "Metal Braces",
    description: "Traditional braces - most affordable option",
    price: "₹25,000-₹45,000",
    href: "/services/orthodontics/metal-braces",
  },
  {
    title: "Ceramic Braces",
    description: "Tooth-colored braces - less visible",
    price: "₹35,000-₹60,000",
    href: "/services/orthodontics/ceramic-braces",
  },
  {
    title: "Lingual Braces",
    description: "100% invisible - behind teeth",
    price: "₹1,20,000-₹2,50,000",
    href: "/services/orthodontics/lingual-braces",
  },
  {
    title: "Retainers",
    description: "Maintain results after Invisalign",
    price: "₹3,000-₹8,000",
    href: "/services/orthodontics/retainers",
  },
]

function RefreshCw(props: any) {
  return <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 2v6h-6"/><path d="M3 12a9 9 0 0 1 15-6.7L21 8"/><path d="M3 22v-6h6"/><path d="M21 12a9 9 0 0 1-15 6.7L3 16"/></svg>
}

export default function InvisalignPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      <SectionContainer className="pt-8">
        <Breadcrumb items={[{ title: 'Home', href: '/' }, { title: 'Services', href: '/services' }, { title: 'Orthodontics', href: '/services/orthodontics' }, { title: 'Invisalign', href: '/services/orthodontics/invisalign' }]} />
      </SectionContainer>

      {/* Hero Section */}
      <SectionContainer className="pt-16 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge className="mb-4 bg-blue-100 text-blue-700 border-blue-200">
              <Sparkles className="w-4 h-4 inline mr-1" />
              Premium Invisible Orthodontics
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              <em className="text-blue-600 not-italic">Invisalign</em> Clear Aligners in <strong>Vellore</strong>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Straighten your teeth <strong className="text-gray-900">invisibly</strong> without metal braces. Certified <strong className="text-blue-600">Invisalign Provider</strong> <Link href="/about-us/dr-rockson-samuel" className="font-bold text-gray-900 hover:text-blue-600 transition-colors">Dr. Rockson Samuel (BDS, PgDM, BDM)</Link> offers advanced clear aligner treatment with <strong className="text-gray-900">3D digital smile preview</strong> at <strong className="text-blue-600">30% lower costs</strong> than metro cities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700" asChild>
                <Link href="/contact">
                  <Calendar className="w-5 h-5 mr-2" />
                  Free 3D Smile Preview
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-blue-600 text-blue-600" asChild>
                <Link href="https://wa.me/917010650063?text=I%20want%20Invisalign%20consultation%20with%203D%20smile%20preview" target="_blank">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp Now
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center"><Star className="w-5 h-5 text-yellow-500 mr-1 fill-yellow-500" />5.0/5.0 Rating</div>
              <div className="flex items-center"><Users className="w-5 h-5 text-blue-600 mr-1" />500+ Happy Patients</div>
              <div className="flex items-center"><Award className="w-5 h-5 text-green-600 mr-1" />Certified Provider</div>
            </div>
          </div>
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/invisalign-clear-aligners.jpg"
                alt="Invisalign Clear Aligners at Indira Dental Clinic Vellore"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "14M+", label: "People Treated Worldwide" },
            { number: "98%", label: "Patient Satisfaction" },
            { number: "22hrs", label: "Daily Wear Required" },
            { number: "6-8wks", label: "Between Visits" },
          ].map((stat, idx) => (
            <GlassCard key={idx} className="text-center p-6">
              <div className="text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Problems We Solve */}
      <SectionContainer className="py-16 bg-gradient-to-r from-red-50/30 to-orange-50/30">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Perfect Solution For Adults Who Want Discreet Treatment</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            If any of these apply to you, Invisalign is your answer
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {problems.map((problem, index) => (
            <GlassCard key={index} className="p-6 text-center hover:shadow-xl transition-shadow">
              <CheckCircle className="h-8 w-8 text-blue-600 mx-auto mb-3" />
              <p className="text-gray-800 font-medium text-sm">{problem}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Benefits Grid */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Invisalign Clear Aligners?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            The modern way to straighten teeth without compromising your lifestyle
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <GlassCard key={index} className="text-center p-8 hover:shadow-xl transition-shadow">
              <benefit.icon className="h-14 w-14 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Invisalign vs Braces Comparison */}
      <SectionContainer className="py-16 bg-gradient-to-r from-blue-50/50 to-indigo-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Invisalign vs. Traditional Braces</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See the clear advantages of Invisalign
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <GlassCard className="p-8 border-2 border-blue-400 bg-gradient-to-br from-blue-50 to-blue-100">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-blue-600 rounded-full mb-4">
                  <Smile className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-blue-800 mb-2">✅ Invisalign Advantages</h3>
              </div>
              <ul className="space-y-3">
                {invisalignVsBraces.invisalign.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-800 font-medium">{adv}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>

            <GlassCard className="p-8 bg-gradient-to-br from-gray-50 to-gray-100">
              <div className="text-center mb-6">
                <div className="inline-block p-4 bg-gray-400 rounded-full mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-700 mb-2">❌ Traditional Braces Drawbacks</h3>
              </div>
              <ul className="space-y-3">
                {invisalignVsBraces.braces.map((draw, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-red-500 mt-0.5">✗</span>
                    <span className="text-gray-600">{draw}</span>
                  </li>
                ))}
              </ul>
            </GlassCard>
          </div>
        </div>
      </SectionContainer>

      {/* Pricing Packages */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Invisalign Pricing & Packages</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transparent pricing based on your specific treatment needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricing.map((pkg, index) => (
            <GlassCard key={index} className={`p-8 ${index === 1 ? 'border-2 border-blue-500 shadow-xl scale-105' : ''}`}>
              {index === 1 && (
                <Badge className="mb-4 bg-blue-600 text-white border-blue-700">Most Popular</Badge>
              )}
              <h3 className="text-2xl font-bold mb-2">{pkg.package}</h3>
              <div className="text-sm text-gray-600 mb-4">{pkg.cases}</div>
              <div className="text-3xl font-bold text-blue-600 mb-1">{pkg.price}</div>
              <div className="text-sm text-gray-500 mb-4">{pkg.aligners}</div>
              <div className="text-sm text-gray-500 mb-6 flex items-center justify-center gap-2">
                <Clock className="w-4 h-4" />
                {pkg.duration}
              </div>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className={`w-full ${index === 1 ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-700 hover:bg-gray-800'}`} asChild>
                <Link href="/contact">
                  Get Started
                </Link>
              </Button>
            </GlassCard>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">💳 <strong>EMI Options Available:</strong> Starting from ₹10,000/month</p>
          <p className="text-sm text-gray-500">*Final cost determined after free consultation and 3D digital treatment planning</p>
        </div>
      </SectionContainer>

      {/* Treatment Process */}
      <SectionContainer className="py-16 bg-gradient-to-r from-purple-50/50 to-pink-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Your Invisalign Journey - Step by Step</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From consultation to beautiful smile - here's what to expect
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                  {step.step}
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold">{step.title}</h3>
                  <div className="text-xs text-gray-500 flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {step.duration}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-4">{step.description}</p>
              <step.icon className="w-8 h-8 text-blue-500 mx-auto" />
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Ideal Candidates */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Are You an Ideal Invisalign Candidate?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Invisalign is perfect for these patients
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {idealCandidates.map((candidate, index) => (
            <div key={index} className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg border-2 border-blue-200 hover:border-blue-400 transition-colors">
              <div className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-800 font-medium">{candidate}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <GlassCard className="p-8 bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Not Sure If You Qualify?</h3>
            <p className="text-gray-700 mb-6">Book a FREE consultation with 3D digital smile simulation. Dr. Rockson will assess if Invisalign is right for you and show you your potential results before you commit.</p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
              <Link href="/contact">
                <Eye className="w-5 h-5 mr-2" />
                See Your Future Smile in 3D
              </Link>
            </Button>
          </GlassCard>
        </div>
      </SectionContainer>

      {/* Reviews Section */}
      <SectionContainer className="py-16 bg-gradient-to-r from-yellow-50/50 to-orange-50/50">
        <ServiceReviews 
          serviceName="Invisalign Clear Aligners" 
          reviews={reviews}
          averageRating={5.0}
          totalReviews={289}
        />
      </SectionContainer>

      {/* FAQ Section */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Invisalign FAQs - Everything You Need to Know</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Common questions about Invisalign treatment answered by Dr. Rockson Samuel
          </p>
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-bold mb-3 text-blue-700">{faq.question}</h3>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Ask the Dentist */}
      <SectionContainer className="py-16 bg-gradient-to-r from-blue-50/50 to-purple-50/50">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">More Questions About Invisalign?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real patient questions answered by Dr. Rockson Samuel
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {relatedQuestions.map((q, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2 text-blue-700">{q.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{q.excerpt}</p>
              <Link href={q.href} className="text-blue-600 hover:text-blue-700 text-sm font-medium flex items-center">
                Read Full Answer <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
        <div className="text-center">
          <Button asChild size="lg" variant="outline" className="border-blue-600 text-blue-600">
            <Link href="/ask-the-dentist/submit">
              <MessageCircle className="w-5 h-5 mr-2" />
              Ask Your Invisalign Question
            </Link>
          </Button>
        </div>
      </SectionContainer>

      {/* Related Services */}
      <SectionContainer className="py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Compare Orthodontic Options</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore all teeth straightening alternatives
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedServices.map((service, index) => (
            <GlassCard key={index} className="p-6 hover:shadow-xl transition-shadow group">
              <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{service.title}</h3>
              <p className="text-gray-600 mb-3 text-sm">{service.description}</p>
              <div className="text-lg font-bold text-blue-600 mb-4">{service.price}</div>
              <Link href={service.href} className="text-blue-600 hover:text-blue-700 font-medium flex items-center text-sm">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </GlassCard>
          ))}
        </div>
      </SectionContainer>

      {/* Final CTA */}
      <SectionContainer className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="text-center max-w-4xl mx-auto">
          <Smile className="w-16 h-16 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Smile Invisibly?</h2>
          <p className="text-xl mb-8">
            Get your <strong>FREE 3D digital smile preview</strong> and see your future smile before you start treatment. 
            Certified Invisalign provider Dr. Rockson Samuel has transformed <strong>500+ smiles</strong> with clear aligners.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
              <Calendar className="mr-2 h-5 w-5" />
              Book Free 3D Consultation
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              Call: 7010650063
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">
            <div className="flex flex-col items-center">
              <Star className="w-6 h-6 mb-2 fill-yellow-400 text-yellow-400" />
              <div className="font-bold">5.0/5.0 Rating</div>
              <div>289 Reviews</div>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-6 h-6 mb-2" />
              <div className="font-bold">500+ Patients</div>
              <div>Treated with Invisalign</div>
            </div>
            <div className="flex flex-col items-center">
              <Award className="w-6 h-6 mb-2" />
              <div className="font-bold">Certified Provider</div>
              <div>Official Invisalign Partner</div>
            </div>
            <div className="flex flex-col items-center">
              <DollarSign className="w-6 h-6 mb-2" />
              <div className="font-bold">30% Lower Cost</div>
              <div>vs Metro Cities</div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  )
}
