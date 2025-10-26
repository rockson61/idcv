import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ModernCard } from "@/components/ui/modern-card"
import { Badge } from "@/components/ui/badge"
import { 
  MessageCircle, 
  Star, 
  Users, 
  Clock, 
  Award, 
  Phone,
  Calendar,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield
} from "lucide-react"

export function ConnectWithDentist() {
  return (
    <section className="py-16 bg-gradient-to-br from-teal-50 via-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <ModernCard className="bg-white border-2 border-teal-200 shadow-xl">
          <div className="p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left Side - Dentist Profile */}
              <div className="text-center lg:text-left">
                <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6">
                  {/* Doctor Image */}
                  <div className="relative">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg">
                      <Image
                        src="/professional-dentist-portrait.png"
                        alt="Dr. Rockson Samuel"
                        width={128}
                        height={128}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                  </div>

                  {/* Doctor Info */}
                  <div className="flex-1">
                    <div className="flex items-center justify-center lg:justify-start gap-2 mb-2">
                      <Badge variant="outline" className="border-teal-600 text-teal-700 text-sm font-semibold">
                        <Award className="w-4 h-4 mr-1" />
                        Expert Dentist
                      </Badge>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                      Dr. Rockson Samuel
                    </h3>
                    
                    <p className="text-lg text-teal-600 font-semibold mb-4">
                      BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach
                    </p>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="text-xl font-bold text-gray-900">4.9/5</span>
                        </div>
                        <p className="text-sm text-gray-600">Patient Rating</p>
                      </div>
                      
                      <div className="text-center lg:text-left">
                        <div className="flex items-center justify-center lg:justify-start gap-1 mb-1">
                          <MessageCircle className="w-5 h-5 text-blue-600" />
                          <span className="text-xl font-bold text-gray-900">500+</span>
                        </div>
                        <p className="text-sm text-gray-600">Questions Answered</p>
                      </div>
                    </div>

                    {/* Experience */}
                    <div className="flex items-center justify-center lg:justify-start gap-2 text-gray-600 mb-4">
                      <Clock className="w-5 h-5 text-teal-600" />
                      <span className="font-semibold">15+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Call to Action */}
              <div className="text-center lg:text-left">
                <div className="mb-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Connect One-on-One with a Dentist
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Get expert dental advice from <strong className="text-gray-900">Dr. Rockson Samuel</strong>, 
                    a highly experienced dentist with <strong className="text-gray-900">15+ years</strong> of practice 
                    and <strong className="text-gray-900">500+ questions answered</strong>.
                  </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Expert Professional</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Clock className="w-5 h-5 text-blue-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Quick Response</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Shield className="w-5 h-5 text-purple-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Trusted Advice</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center">
                      <Globe className="w-5 h-5 text-teal-600" />
                    </div>
                    <span className="text-gray-700 font-medium">Global Patients</span>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-4">
                    <Link href="/ask-the-dentist/submit">
                      <MessageCircle className="w-5 h-5 mr-2" />
                      Ask a Question
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  
                  <Button asChild size="lg" variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-semibold px-8 py-4">
                    <Link href="/contact">
                      <Phone className="w-5 h-5 mr-2" />
                      Book Appointment
                    </Link>
                  </Button>
                </div>

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-600">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>500+ Happy Patients</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      <span>15+ Years Experience</span>
                    </div>
                    <span className="hidden sm:inline">•</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span>4.9/5 Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ModernCard>
      </div>
    </section>
  )
}

export default ConnectWithDentist
