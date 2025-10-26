import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Phone, Calendar, Mail, ArrowRight, Star, Shield, Award, Clock } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-theme-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-theme-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Main CTA Card */}
        <Card className="max-w-6xl mx-auto overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2">
            {/* Left Side - Content */}
            <div className="p-12 bg-gradient-to-br from-theme-primary via-theme-accent to-red-700 text-white">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  4.9/5 Rating • 10,000+ Happy Patients
                </div>

                <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                  Ready for a
                  <br />
                  Brighter Smile?
                </h2>

                <p className="text-lg opacity-90 leading-relaxed">
                  Experience world-class dental care with Dr. Rockson Samuel. Book your consultation today and take the
                  first step towards a healthier, more confident smile.
                </p>

                {/* Trust Indicators */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Shield className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold">100% Safe</div>
                      <div className="text-sm opacity-80">Sterilized</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Award className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold">15+ Years</div>
                      <div className="text-sm opacity-80">Experience</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-bold">24/7 Care</div>
                      <div className="text-sm opacity-80">Emergency</div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Star className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    </div>
                    <div>
                      <div className="font-bold">Top Rated</div>
                      <div className="text-sm opacity-80">In Vellore</div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-6">
                  <Button
                    asChild
                    size="lg"
                    className="w-full bg-white text-theme-primary hover:bg-gray-100 shadow-xl font-semibold text-lg h-14"
                  >
                    <a href="/contact">
                      <Calendar className="w-5 h-5 mr-2" />
                      Book Appointment Now
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>

                  <Button
                    asChild
                    size="lg"
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white/10 bg-transparent font-semibold text-lg h-14"
                  >
                    <a href="tel:7010650063">
                      <Phone className="w-5 h-5 mr-2" />
                      Call: 7010650063
                    </a>
                  </Button>
                </div>

                <p className="text-sm opacity-75 text-center pt-4">
                  ✓ Free Consultation ✓ Same Day Appointments ✓ Flexible Payment Options
                </p>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="p-12 bg-white dark:bg-gray-800">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Quick Contact</h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Fill out the form and we'll get back to you within 24 hours
                  </p>
                </div>

                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your full name"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="Enter your phone number"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20 transition-all"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Treatment Interest
                    </label>
                    <select className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20 transition-all">
                      <option value="">Select a service</option>
                      <option value="general">General Dentistry</option>
                      <option value="cosmetic">Cosmetic Dentistry</option>
                      <option value="orthodontics">Orthodontics</option>
                      <option value="rct">Root Canal Treatment</option>
                      <option value="implants">Dental Implants</option>
                      <option value="periodontics">Periodontics</option>
                      <option value="emergency">Emergency Care</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Tell us about your dental concerns..."
                      className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:border-theme-primary focus:ring-2 focus:ring-theme-primary/20 transition-all resize-none"
                    ></textarea>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-theme-primary to-theme-accent hover:from-theme-primary/90 hover:to-theme-accent/90 text-white shadow-lg font-semibold"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Appointment Request
                  </Button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </Card>

        {/* Bottom Trust Bar */}
        <div className="mt-16 grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="p-6 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">100%</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Sterilization</div>
          </Card>

          <Card className="p-6 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
          </Card>

          <Card className="p-6 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 flex items-center justify-center">
              <Star className="w-8 h-8 text-white fill-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">4.9/5</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Google Rating</div>
          </Card>

          <Card className="p-6 text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 shadow-lg hover:shadow-xl transition-all">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
              <Clock className="w-8 h-8 text-white" />
            </div>
            <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">24/7</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Emergency Care</div>
          </Card>
        </div>

        {/* Final Contact Section */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 dark:text-gray-300 mb-4">Have questions? Our friendly team is here to help</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button asChild variant="outline" size="lg" className="border-2 bg-transparent">
              <a href="tel:7010650063">
                <Phone className="w-5 h-5 mr-2" />
                7010650063
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-2 bg-transparent">
              <a href="mailto:rockson68@hotmail.com">
                <Mail className="w-5 h-5 mr-2" />
                rockson68@hotmail.com
              </a>
            </Button>

            <Button asChild variant="outline" size="lg" className="border-2 bg-transparent">
              <a href="/faq">
                <ArrowRight className="w-5 h-5 mr-2" />
                View FAQs
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

export { CtaSection as CTASection }
