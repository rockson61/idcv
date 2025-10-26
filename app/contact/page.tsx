import type { Metadata } from "next"
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from "@/components/ui/modern-card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Calendar,
  MessageCircle,
  Navigation,
  Send,
  CheckCircle2,
  Building2,
  Star,
} from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'Contact Best Dental Clinic in Vellore | Book Appointment | Indira Dental Clinic',
  description: 'Contact Indira Dental Clinic in Vellore for dental appointments. Expert dentist Dr. Rockson Samuel. Call +91 70106 50063. Book consultation for RCT, implants, braces.',
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { title: 'Home', href: '/' },
            { title: 'Contact', href: '/contact' },
          ]}
        />

        {/* Hero Section */}
        <section className="text-center mb-12">
          <Badge variant="outline" className="mb-4 border-teal-600 text-teal-700 text-sm font-semibold">
            <MessageCircle className="w-4 h-4 mr-2" />
            Get In Touch
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Indira Dental Clinic</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            We're here to help you achieve a <strong className="text-gray-900">healthy, beautiful smile</strong>. Reach
            out for appointments, consultations, or questions about our dental services.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Contact Form */}
          <ModernCard className="p-8">
            <ModernCardHeader>
              <ModernCardTitle className="text-2xl">Send Us a Message</ModernCardTitle>
              <p className="text-gray-700">
                Fill out the form and we'll respond within <strong className="text-gray-900">24 hours</strong>
              </p>
            </ModernCardHeader>
            <ModernCardContent>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName" className="text-sm font-semibold text-gray-900 mb-2 block">
                      First Name *
                    </Label>
                    <Input
                      id="firstName"
                      type="text"
                      placeholder="John"
                      className="text-base text-gray-900 bg-white border-gray-300"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName" className="text-sm font-semibold text-gray-900 mb-2 block">
                      Last Name *
                    </Label>
                    <Input
                      id="lastName"
                      type="text"
                      placeholder="Doe"
                      className="text-base text-gray-900 bg-white border-gray-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-sm font-semibold text-gray-900 mb-2 block">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john.doe@example.com"
                    className="text-base text-gray-900 bg-white border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-sm font-semibold text-gray-900 mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+91 98765 43210"
                    className="text-base text-gray-900 bg-white border-gray-300"
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="service" className="text-sm font-semibold text-gray-900 mb-2 block">
                    Service Interested In
                  </Label>
                  <select
                    id="service"
                    className="w-full px-4 py-2.5 text-base text-gray-900 rounded-lg border-2 border-gray-300 focus:border-teal-600 focus:ring-2 focus:ring-teal-600/20 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="general">General Dentistry</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="orthodontics">Orthodontics</option>
                    <option value="rct">Root Canal Treatment</option>
                    <option value="implants">Dental Implants</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-semibold text-gray-900 mb-2 block">
                    Your Message
                  </Label>
                  <Textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your dental concerns..."
                    className="text-base text-gray-900 bg-white border-gray-300 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-teal-600 hover:bg-teal-700 text-white text-base font-semibold"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>

                <p className="text-sm text-gray-600 text-center">By submitting, you agree to our privacy policy</p>
              </form>
            </ModernCardContent>
          </ModernCard>

          {/* Contact Information */}
          <div className="space-y-6">
            {/* Main Contact Card */}
            <ModernCard className="p-8 bg-gradient-to-r from-teal-600 to-blue-600 text-white">
              <ModernCardHeader>
                <ModernCardTitle className="text-2xl text-white">Contact Information</ModernCardTitle>
              </ModernCardHeader>
              <ModernCardContent>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">Call Us</h3>
                      <a href="tel:7010650063" className="text-base text-white hover:text-white/90 block font-semibold">
                        +91 70106 50063
                      </a>
                      <p className="text-sm text-white/90 mt-1">
                        Available <strong className="text-white">24/7</strong> for emergencies
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">Email Us</h3>
                      <a
                        href="mailto:rockson68@hotmail.com"
                        className="text-base text-white hover:text-white/90 break-all block font-semibold"
                      >
                        rockson68@hotmail.com
                      </a>
                      <p className="text-sm text-white/90 mt-1">
                        Response within <strong className="text-white">24 hours</strong>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-1">Visit Us</h3>
                      <p className="text-base text-white leading-relaxed">
                        <strong className="text-white">3rd Floor, 54</strong>, Katpadi Main Rd
                        <br />
                        Suthanthira Ponvizha Nagar
                        <br />
                        <strong className="text-white">Gandhi Nagar, Vellore</strong>
                        <br />
                        Tamil Nadu 632006
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white mb-2">Clinic Hours</h3>
                      <div className="space-y-1.5 text-base text-white">
                        <div className="flex justify-between gap-4">
                          <span className="text-white/90">Monday - Saturday</span>
                          <span className="font-bold text-white">10 AM - 8 PM</span>
                        </div>
                        <div className="flex justify-between gap-4">
                          <span className="text-white/90">Sunday</span>
                          <span className="font-bold text-white">10 AM - 1:30 PM</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-white/20">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white hover:bg-gray-100 text-teal-700 text-base font-bold"
                  >
                    <a
                      href="https://www.google.com/maps/dir//3rd+Floor,+54,+Katpadi+Main+Rd,+Gandhi+Nagar,+Vellore,+Tamil+Nadu+632006"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Navigation className="w-4 h-4 mr-2" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </ModernCardContent>
            </ModernCard>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <ModernCard className="p-6 text-center">
                <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">4.9/5</div>
                <div className="text-sm text-gray-700">Patient Rating</div>
              </ModernCard>

              <ModernCard className="p-6 text-center">
                <Building2 className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
                <div className="text-sm text-gray-700">Years Experience</div>
              </ModernCard>
            </div>

            {/* Emergency Contact */}
            <ModernCard className="p-6 bg-red-50 border-2 border-red-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-red-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Dental Emergency?</h3>
                  <p className="text-base text-gray-900 mb-4">
                    We provide <strong className="text-gray-900">24/7 emergency</strong> dental services. Don't wait,
                    call now!
                  </p>
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-red-600 hover:bg-red-700 text-white text-base font-bold"
                  >
                    <a href="tel:7010650063">
                      <Phone className="w-4 h-4 mr-2" />
                      Emergency: 7010650063
                    </a>
                  </Button>
                </div>
              </div>
            </ModernCard>
          </div>
        </div>

        {/* Why Contact Us */}
        <section className="mb-12">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Why Choose Indira Dental Clinic?</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Quality dental care backed by <strong className="text-gray-900">15+ years experience</strong> and{" "}
              <strong className="text-gray-900">500+ happy patients</strong>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ModernCard className="p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-7 h-7 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Same Day</h3>
              <p className="text-base text-gray-700">
                Appointments for <strong className="text-gray-900">urgent cases</strong>
              </p>
            </ModernCard>

            <ModernCard className="p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Support</h3>
              <p className="text-base text-gray-700">
                <strong className="text-gray-900">Emergency care</strong> always available
              </p>
            </ModernCard>

            <ModernCard className="p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                <CheckCircle2 className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">15+ Years</h3>
              <p className="text-base text-gray-700">
                <strong className="text-gray-900">Trusted experience</strong> in care
              </p>
            </ModernCard>

            <ModernCard className="p-6 text-center">
              <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-7 h-7 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Prime Location</h3>
              <p className="text-base text-gray-700">
                Easy access from <strong className="text-gray-900">all areas</strong>
              </p>
            </ModernCard>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center">
          <ModernCard className="p-8 md:p-10 bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ready to Schedule Your Visit?</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Our friendly team is ready to assist you with{" "}
              <strong className="text-gray-900">appointments, consultations</strong>, and any questions. Contact us today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-teal-600 hover:bg-teal-700 text-white text-base font-bold">
                <a href="tel:7010650063">
                  <Phone className="w-4 h-4 mr-2" />
                  Call: 7010650063
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-2 border-teal-600 text-gray-900 hover:bg-teal-50 text-base font-bold bg-white"
              >
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </ModernCard>
        </section>
      </div>
    </div>
  )
}