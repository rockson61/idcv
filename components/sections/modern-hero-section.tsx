import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { Phone, Calendar, Star, Users, Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ModernHeroSectionProps {
  locationName?: string;
}

export function ModernHeroSection({ locationName = 'Vellore' }: ModernHeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary-200/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
              <Award className="w-4 h-4 mr-2" />
              Trusted by 5000+ Patients in {locationName}
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 leading-tight">
                Expert Dental Care in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-600">
                  {locationName}
                </span>
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed max-w-2xl">
                Experience world-class dental treatments with Dr. Rockson Samuel. 
                <strong className="text-neutral-900"> 15+ years</strong> of expertise in cosmetic dentistry, 
                orthodontics, and dental implants.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">4.9/5</div>
                <div className="text-sm text-neutral-600">Patient Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">15+</div>
                <div className="text-sm text-neutral-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600">5000+</div>
                <div className="text-sm text-neutral-600">Happy Patients</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <ModernButton size="lg" variant="gradient" asChild>
                <a href="tel:7010650063">
                  📞 Call: 7010650063
                </a>
              </ModernButton>
              <ModernButton size="lg" variant="outline" asChild>
                <Link href="/contact">
                  📅 Book Appointment
                </Link>
              </ModernButton>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 text-sm text-neutral-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success-500" />
                <span>Emergency Care Available</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success-500" />
                <span>Latest Technology</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-success-500" />
                <span>Pain-Free Treatment</span>
              </div>
            </div>
          </div>

          {/* Right Content - Image and Cards */}
          <div className="relative">
            {/* Main Image */}
            <div className="relative">
              <ModernCard variant="glass" className="p-2">
                <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden">
                  <Image
                    src="/professional-dentist-portrait.png"
                    alt="Dr. Rockson Samuel - Expert Dentist in Vellore"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </ModernCard>

              {/* Floating Cards */}
              <ModernCard className="absolute -bottom-6 -left-6 p-4 bg-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">4.9/5 Rating</div>
                    <div className="text-sm text-neutral-600">500+ Reviews</div>
                  </div>
                </div>
              </ModernCard>

              <ModernCard className="absolute -top-6 -right-6 p-4 bg-white shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary-100 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <div className="font-bold text-neutral-900">5000+</div>
                    <div className="text-sm text-neutral-600">Happy Patients</div>
                  </div>
                </div>
              </ModernCard>
            </div>

            {/* Services Quick Links */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <ModernCard variant="outlined" className="p-4 hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">₹3,000</div>
                  <div className="text-sm text-neutral-600">Root Canal Treatment</div>
                </div>
              </ModernCard>
              <ModernCard variant="outlined" className="p-4 hover:shadow-md transition-all duration-300">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary-600">₹25,000</div>
                  <div className="text-sm text-neutral-600">Dental Implants</div>
                </div>
              </ModernCard>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neutral-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neutral-400 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
