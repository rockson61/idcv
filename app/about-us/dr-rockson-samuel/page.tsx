import { Hero } from "@/components/sections/hero"
import { SectionContainer } from "@/components/ui/section-container"
import { GlassPanel } from "@/components/ui/glass-panel"
import { Button } from "@/components/ui/button"
import { CTASection } from "@/components/sections/cta-section"
import { Badge } from "@/components/ui/badge"
import {
  Award,
  GraduationCap,
  Star,
  Heart,
  Shield,
  Phone,
  Calendar,
  BookOpen,
  Stethoscope,
  CheckCircle,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dr. Rockson Samuel | Best Dentist in Vellore | 15+ Years Experience",
  description:
    "Meet Dr. Rockson Samuel, Vellore's most trusted dentist with 15+ years experience, General Dentist and Community Leader - DentalReach. Expert in dental implants, root canal, and cosmetic dentistry with 5000+ satisfied patients.",
  keywords: [
    "Dr. Rockson Samuel",
    "best dentist vellore",
    "experienced dentist",
    "dental implant specialist",
    "root canal expert",
    "cosmetic dentist vellore",
    "DentalReach",
    "community dentist",
  ],
}

const qualifications = [
  {
    degree: "BDS (Bachelor of Dental Surgery)",
    institution: "Tamil Nadu Government Dental College, Chennai",
    year: "2005",
    description: "Comprehensive dental education covering all aspects of oral health and dental treatments.",
  },
  {
    degree: "PgDM (Post Graduate Diploma in Management)",
    institution: "Healthcare Management Institute",
    year: "2010",
    description: "Advanced training in healthcare management and dental practice administration.",
  },
  {
    degree: "BDM (Bachelor of Dental Medicine)",
    institution: "International Dental Education Board",
    year: "2012",
    description: "Specialized certification in modern dental medicine and patient care.",
  },
  {
    degree: "Community Leader - DentalReach",
    institution: "DentalReach Community Health Initiative",
    year: "Present",
    description: "Leading community dental health programs and making quality dental care accessible to all.",
  },
]

const specializations = [
  {
    title: "Root Canal Treatment (Endodontics)",
    description: "Advanced endodontic procedures including single-sitting RCT and complex retreatments.",
    experience: "15+ years",
    cases: "2000+",
  },
  {
    title: "Dental Implants & Oral Surgery",
    description: "Comprehensive implant dentistry from single tooth to full mouth rehabilitation.",
    experience: "12+ years",
    cases: "800+",
  },
  {
    title: "Cosmetic & Aesthetic Dentistry",
    description: "Smile makeovers, veneers, teeth whitening, and aesthetic restorations.",
    experience: "15+ years",
    cases: "1500+",
  },
  {
    title: "Orthodontics & Teeth Alignment",
    description: "Traditional braces, ceramic braces, and clear aligner treatments.",
    experience: "15+ years",
    cases: "1200+",
  },
  {
    title: "Periodontics & Gum Treatment",
    description: "Comprehensive gum disease treatment and periodontal maintenance.",
    experience: "15+ years",
    cases: "1000+",
  },
  {
    title: "General & Family Dentistry",
    description: "Complete dental care for patients of all ages including preventive treatments.",
    experience: "15+ years",
    cases: "5000+",
  },
]

const achievements = [
  {
    title: "Top Rated Dentist",
    description: "Consistently rated 4.9/5 stars by patients on Google Reviews",
    icon: Star,
  },
  {
    title: "Advanced Training",
    description: "Completed multiple continuing education courses in implant dentistry",
    icon: GraduationCap,
  },
  {
    title: "Professional Memberships",
    description: "Active member of Indian Dental Association and Tamil Nadu Dental Council",
    icon: Award,
  },
  {
    title: "Community Service",
    description: "Regular dental health camps and awareness programs in rural areas",
    icon: Heart,
  },
]

const philosophy = [
  {
    title: "Patient-Centered Approach",
    description:
      "Every treatment plan is customized to meet individual patient needs, preferences, and budget considerations.",
    icon: Heart,
  },
  {
    title: "Gentle & Painless Care",
    description:
      "Using advanced techniques and modern anesthesia to ensure comfortable, anxiety-free dental experiences.",
    icon: Shield,
  },
  {
    title: "Preventive Focus",
    description: "Emphasizing preventive care and patient education to maintain optimal oral health long-term.",
    icon: CheckCircle,
  },
  {
    title: "Continuous Learning",
    description: "Staying updated with latest dental technologies and techniques through regular continuing education.",
    icon: BookOpen,
  },
]

export default function DrRocksonSamuelPage() {
  return (
    <main>
      <Hero
        title="Dr. Rockson Samuel"
        subtitle="BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach"
        description="Meet Vellore's most trusted dentist with over 15 years of experience in providing exceptional dental care. Specializing in advanced treatments with a gentle, patient-centered approach."
        primaryCTA={{ text: "Book Consultation", href: "/contact" }}
        secondaryCTA={{ text: "Call: 7010650063", href: "tel:7010650063" }}
        showStats={false}
      />

      {/* Doctor Profile */}
      <SectionContainer>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <GlassPanel variant="card" className="text-center">
            <div className="relative w-80 h-80 mx-auto mb-6 rounded-2xl overflow-hidden">
              <Image
                src="/professional-dentist-portrait.png"
                alt="Dr. Rockson Samuel - Leading Dentist in Vellore"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-[#005f73]">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#005f73]">5000+</div>
                <div className="text-sm text-gray-600">Patients Treated</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#005f73]">4.9/5</div>
                <div className="text-sm text-gray-600">Patient Rating</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-[#005f73]">24/7</div>
                <div className="text-sm text-gray-600">Emergency Care</div>
              </div>
            </div>

            <div className="flex gap-3">
              <Button asChild className="flex-1">
                <a href="tel:7010650063" className="inline-flex items-center justify-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </Button>
              <Button asChild variant="outline" className="flex-1 bg-white/50 backdrop-blur-sm">
                <Link href="/contact" className="inline-flex items-center justify-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Book Online</span>
                </Link>
              </Button>
            </div>
          </GlassPanel>

          <div className="space-y-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-4">About Dr. Rockson Samuel</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Dr. Rockson Samuel is a highly skilled and experienced dentist who has been serving the Vellore
                  community for over 15 years. With a passion for dentistry and a commitment to excellence, he has
                  established himself as one of the most trusted dental professionals in the region.
                </p>
                <p>
                  After completing his BDS from the prestigious Tamil Nadu Government Dental College in Chennai, Dr.
                  Samuel pursued his MDS in Orthodontics to further enhance his expertise. He has since treated over
                  5000 patients, earning a reputation for gentle, painless treatments and exceptional results.
                </p>
                <p>
                  Dr. Samuel believes in staying at the forefront of dental technology and techniques. He regularly
                  attends continuing education programs and has completed advanced training in dental implants, cosmetic
                  dentistry, and laser treatments to provide his patients with the most modern and effective care
                  available.
                </p>
              </div>
            </div>

            <GlassPanel variant="subtle">
              <blockquote className="text-lg italic text-[#005f73] text-center">
                "My philosophy is simple: treat every patient like family, use the gentlest techniques possible, and
                never compromise on quality. Every smile I help create brings me immense satisfaction."
              </blockquote>
              <p className="text-center text-gray-600 mt-3">- Dr. Rockson Samuel</p>
            </GlassPanel>
          </div>
        </div>
      </SectionContainer>

      {/* Qualifications */}
      <SectionContainer className="bg-gradient-to-br from-[#54CAD3]/5 to-[#005f73]/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-6">Education & Qualifications</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. Samuel's educational background reflects his commitment to excellence and continuous learning in
            dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {qualifications.map((qual, index) => (
            <GlassPanel key={index} variant="card">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#54CAD3] to-[#005f73] rounded-xl flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="text-lg font-bold text-[#005f73]">{qual.degree}</h3>
                    <Badge variant="secondary">{qual.year}</Badge>
                  </div>
                  <p className="text-[#54CAD3] font-semibold mb-3">{qual.institution}</p>
                  <p className="text-gray-700 text-sm">{qual.description}</p>
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </SectionContainer>

      {/* Specializations */}
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-6">Areas of Specialization</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. Samuel's expertise spans across multiple dental specialties, ensuring comprehensive care for all your
            dental needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {specializations.map((spec, index) => (
            <GlassPanel key={index} variant="card" className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-[#54CAD3] to-[#005f73] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-[#005f73] mb-3">{spec.title}</h3>
              <p className="text-gray-700 text-sm mb-4 leading-relaxed">{spec.description}</p>
              <div className="flex justify-between text-xs text-gray-600 bg-white/30 rounded-lg p-3">
                <div>
                  <span className="font-semibold">Experience:</span>
                  <br />
                  {spec.experience}
                </div>
                <div>
                  <span className="font-semibold">Cases:</span>
                  <br />
                  {spec.cases}
                </div>
              </div>
            </GlassPanel>
          ))}
        </div>
      </SectionContainer>

      {/* Philosophy */}
      <SectionContainer className="bg-gradient-to-br from-[#54CAD3]/5 to-[#005f73]/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-6">Treatment Philosophy</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. Samuel's approach to dentistry is guided by core principles that ensure every patient receives the best
            possible care.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {philosophy.map((item, index) => (
            <GlassPanel key={index} variant="card" className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-[#54CAD3] to-[#005f73] rounded-xl flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#005f73] mb-3">{item.title}</h3>
                <p className="text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            </GlassPanel>
          ))}
        </div>
      </SectionContainer>

      {/* Achievements */}
      <SectionContainer>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-6">Recognition & Achievements</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dr. Samuel's dedication to excellence has earned him recognition from patients and peers alike.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {achievements.map((achievement, index) => (
            <GlassPanel key={index} variant="card" className="text-center">
              <achievement.icon className="h-12 w-12 text-[#54CAD3] mx-auto mb-4" />
              <h3 className="text-lg font-bold text-[#005f73] mb-3">{achievement.title}</h3>
              <p className="text-gray-700 text-sm">{achievement.description}</p>
            </GlassPanel>
          ))}
        </div>
      </SectionContainer>

      {/* Patient Testimonials */}
      <SectionContainer className="bg-gradient-to-br from-[#54CAD3]/5 to-[#005f73]/5">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#005f73] mb-6">What Patients Say</h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Read what our patients have to say about their experience with Dr. Rockson Samuel.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <GlassPanel variant="card" className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#54CAD3] fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "Dr. Rockson is the most gentle dentist I've ever met. My root canal was completely painless, and the
              results were perfect. Highly recommend!"
            </p>
            <p className="text-sm font-semibold text-[#005f73]">- Rajesh Kumar</p>
            <p className="text-xs text-gray-600">Root Canal Treatment</p>
          </GlassPanel>

          <GlassPanel variant="card" className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#54CAD3] fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "Got my dental implants done by Dr. Rockson. The entire process was smooth, and I'm amazed by how natural
              they look and feel. Excellent work!"
            </p>
            <p className="text-sm font-semibold text-[#005f73]">- Priya Venkatesh</p>
            <p className="text-xs text-gray-600">Dental Implants</p>
          </GlassPanel>

          <GlassPanel variant="card" className="text-center">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-[#54CAD3] fill-current" />
              ))}
            </div>
            <p className="text-gray-700 italic mb-4">
              "Dr. Rockson transformed my smile with cosmetic dentistry. His attention to detail and artistic approach
              gave me the confidence I always wanted."
            </p>
            <p className="text-sm font-semibold text-[#005f73]">- Sundar Raman</p>
            <p className="text-xs text-gray-600">Smile Makeover</p>
          </GlassPanel>
        </div>

        <div className="text-center">
          <Button asChild variant="outline" className="bg-white/50 backdrop-blur-sm">
            <Link href="/testimonials">Read More Reviews</Link>
          </Button>
        </div>
      </SectionContainer>

      <CTASection
        title="Schedule Your Consultation with Dr. Rockson Samuel"
        description="Experience the difference of personalized, expert dental care. Book your appointment today and discover why Dr. Samuel is Vellore's most trusted dentist."
        showEmergency={true}
      />
    </main>
  )
}
