import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  Users,
  Clock,
  Heart,
  Star,
  CheckCircle2,
  Phone,
  Calendar,
  MapPin,
  Stethoscope,
  GraduationCap,
  Trophy,
  Shield,
  Target,
  Lightbulb,
  Smile,
} from "lucide-react"

export const metadata: Metadata = {
  title: 'About Indira Dental Clinic Vellore | Expert Dentist Dr. Rockson Samuel | 15+ Years Experience',
  description: 'Learn about Indira Dental Clinic in Vellore. Expert dentist Dr. Rockson Samuel with 15+ years experience. Specialized in dental implants, RCT, cosmetic dentistry, braces.',
  keywords: ['about dental clinic vellore', 'Dr. Rockson Samuel', 'dental clinic history', 'expert dentist vellore'],
  alternates: {
    canonical: "https://www.dentalclinicinvellore.in/about-us",
  },
}

const achievements = [
  {
    icon: Users,
    number: "5000+",
    title: "Happy Patients",
    description: "Successfully treated patients across Vellore and Tamil Nadu",
  },
  {
    icon: Clock,
    number: "15+",
    title: "Years Experience",
    description: "Dedicated years of professional dental practice",
  },
  {
    icon: Award,
    number: "50+",
    title: "Awards & Recognition",
    description: "Professional achievements and patient appreciation",
  },
  {
    icon: Star,
    number: "4.9",
    title: "Patient Rating",
    description: "Average rating from patient reviews and feedback",
  },
]

const qualifications = [
  {
    degree: "Bachelor of Dental Surgery (BDS)",
    institution: "Tamil Nadu Dr. M.G.R. Medical University",
    year: "2008",
    description: "Comprehensive dental education with clinical training in all aspects of dentistry",
  },
  {
    degree: "Advanced Implantology Certification",
    institution: "Indian Society of Oral Implantologists",
    year: "2012",
    description: "Specialized training in dental implant procedures and osseointegration techniques",
  },
  {
    degree: "Endodontic Excellence Program",
    institution: "Indian Endodontic Society",
    year: "2014",
    description: "Advanced root canal treatment techniques including rotary endodontics",
  },
  {
    degree: "Cosmetic Dentistry Certification",
    institution: "American Academy of Cosmetic Dentistry",
    year: "2016",
    description: "International certification in aesthetic dentistry and smile design",
  },
]

const specializations = [
  {
    icon: Heart,
    title: "Root Canal Treatment",
    description: "Expert in painless RCT with high success rates using advanced rotary endodontic techniques",
  },
  {
    icon: Shield,
    title: "Dental Implants",
    description: "Specialized in single and multiple tooth implant procedures with predictable outcomes",
  },
  {
    icon: Star,
    title: "Cosmetic Dentistry",
    description: "Transform smiles with veneers, whitening, and aesthetic treatments",
  },
  {
    icon: Stethoscope,
    title: "General Dentistry",
    description: "Comprehensive oral health care for patients of all ages with preventive focus",
  },
]

const values = [
  {
    icon: Heart,
    title: "Patient-Centered Care",
    description:
      "Every treatment plan is customized to meet individual patient needs, preferences, and comfort levels. We listen to your concerns and involve you in treatment decisions.",
  },
  {
    icon: CheckCircle2,
    title: "Quality Excellence",
    description:
      "We maintain the highest standards of dental care using state-of-the-art technology and evidence-based practices. Continuous education keeps us at the forefront of dentistry.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description:
      "Strict sterilization protocols and safety measures ensure patient well-being. We follow international infection control standards and use disposable materials wherever possible.",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description:
      "Respect for patient time with punctual appointments and efficient treatment. We value your schedule and minimize waiting times without compromising care quality.",
  },
  {
    icon: Target,
    title: "Honest Communication",
    description:
      "Transparent treatment discussions and realistic expectations. We explain procedures clearly, discuss alternatives, and provide detailed cost estimates upfront.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Innovation",
    description:
      "Embracing latest dental technologies and techniques. From digital imaging to laser dentistry, we invest in tools that improve patient outcomes and comfort.",
  },
]

export default function AboutUsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-teal-50/30 to-blue-50/30">
      <SectionContainer className="pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <Badge variant="outline" className="mb-4 border-teal-500 text-teal-700">
              About Our Practice
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                Meet Dr. Rockson Samuel
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Vellore's most trusted dentist with over 15 years of experience in providing exceptional dental care. Dr.
              Rockson Samuel is dedicated to transforming smiles and improving oral health through personalized,
              compassionate treatment.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              At Indira Dental Clinic, we believe that everyone deserves a healthy, beautiful smile. Our mission is to
              provide world-class dental care in a comfortable, modern environment using the latest technology and
              techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white hover:shadow-lg">
                <Calendar className="w-5 h-5 mr-2" />
                Book Consultation
              </Button>
              <Button size="lg" variant="outline" className="border-teal-500 text-teal-700 bg-transparent" asChild>
                <Link href="tel:7010650063">
                  <Phone className="w-5 h-5 mr-2" />
                  Call: 7010650063
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <GlassCard className="p-8">
              <div className="relative w-full h-96 mb-6 rounded-lg overflow-hidden">
                <Image
                  src="/professional-dentist-portrait.png"
                  alt="Dr. Rockson Samuel - Best Dentist in Vellore"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Dr. Rockson Samuel</h3>
                <p className="text-teal-600 font-semibold mb-4">General Dentist & Implantologist</p>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4" />
                  <span>Indira Dental Clinic, Vellore</span>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and patient satisfaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <GlassCard key={index} className="text-center p-6 hover:shadow-xl transition-all duration-300">
                <achievement.icon className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <div className="text-4xl font-bold text-teal-600 mb-2">{achievement.number}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education & Qualifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Continuous learning and professional development to provide the best care
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((qual, index) => (
              <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-teal-50 flex-shrink-0">
                    <GraduationCap className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{qual.degree}</h3>
                    <p className="text-teal-600 font-semibold mb-1">{qual.institution}</p>
                    <p className="text-sm text-gray-500 mb-2">{qual.year}</p>
                    <p className="text-gray-600 text-sm">{qual.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Areas of Specialization</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Expert care across multiple dental specialties with proven results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <GlassCard
                key={index}
                className="text-center p-6 hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                <spec.icon className="w-12 h-12 text-teal-600 mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-lg font-bold text-gray-900 mb-3">{spec.title}</h3>
                <p className="text-gray-600 text-sm">{spec.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide our practice and patient care philosophy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <GlassCard key={index} className="p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-teal-50 flex-shrink-0">
                    <value.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-gray-600 text-sm">{value.description}</p>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>

        <GlassCard className="p-8 text-center bg-gradient-to-r from-teal-50 to-blue-50">
          <Trophy className="w-16 h-16 text-teal-600 mx-auto mb-6" />
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <p className="text-xl text-gray-600 mb-6 max-w-4xl mx-auto leading-relaxed">
            "To provide exceptional dental care that combines advanced technology with compassionate treatment, ensuring
            every patient receives personalized attention and achieves optimal oral health. We are committed to creating
            beautiful, healthy smiles that last a lifetime while maintaining the highest standards of safety, comfort,
            and professional excellence."
          </p>
          <div className="flex items-center justify-center gap-2 text-lg font-semibold text-gray-900 mb-8">
            <span>- Dr. Rockson Samuel</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white" asChild>
              <Link href="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Visit
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-teal-500 text-teal-700 bg-transparent" asChild>
              <Link href="/testimonials">
                <Star className="w-5 h-5 mr-2" />
                Read Patient Reviews
              </Link>
            </Button>
          </div>
        </GlassCard>

        <div className="mt-16">
          <GlassCard className="p-8">
            <div className="text-center max-w-3xl mx-auto">
              <Smile className="w-16 h-16 text-teal-600 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Experience the Difference</h2>
              <p className="text-xl text-gray-600 mb-8">
                Join thousands of satisfied patients who have experienced exceptional dental care with Dr. Rockson
                Samuel. Schedule your consultation today and take the first step towards a healthier, more beautiful
                smile.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">15+</div>
                  <div className="text-gray-600">Years Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">5000+</div>
                  <div className="text-gray-600">Happy Patients</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">4.9/5</div>
                  <div className="text-gray-600">Patient Rating</div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-gradient-to-r from-teal-600 to-blue-600 text-white" asChild>
                  <Link href="tel:7010650063">
                    <Phone className="w-5 h-5 mr-2" />
                    Call: 7010650063
                  </Link>
                </Button>
                <Button size="lg" variant="outline" className="border-teal-500 text-teal-700 bg-transparent" asChild>
                  <Link href="/services">View All Services</Link>
                </Button>
              </div>
            </div>
          </GlassCard>
        </div>
      </SectionContainer>
    </div>
  )
}
