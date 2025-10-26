import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { SectionContainer } from "@/components/ui/section-container"
import { Phone, Clock, AlertTriangle, Zap } from "lucide-react"

export function EmergencyContact() {
  const emergencyServices = [
    "Severe Tooth Pain",
    "Dental Trauma & Injuries",
    "Broken or Knocked-out Teeth",
    "Dental Abscesses",
    "Lost Fillings or Crowns",
    "Bleeding Gums",
    "Jaw Pain & TMJ Issues",
    "Post-surgical Complications",
  ]

  return (
    <section className="py-20 bg-gradient-to-r from-red-500 to-red-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"></div>
      </div>

      <SectionContainer className="relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6">
            <AlertTriangle className="h-10 w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Dental Emergency?</h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Don't suffer in pain! We provide 24/7 emergency dental care for urgent situations
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Emergency Contact Info */}
          <div className="space-y-8">
            <GlassCard className="p-8 bg-white/10 border-white/20">
              <div className="text-center space-y-6">
                <Phone className="h-16 w-16 text-white mx-auto" />
                <div>
                  <h3 className="text-3xl font-bold mb-2">Emergency Hotline</h3>
                  <a href="tel:7010650063" className="text-4xl font-bold hover:text-yellow-300 transition-colors">
                    7010650063
                  </a>
                  <p className="text-lg opacity-90 mt-2">Available 24/7</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 bg-white/10 border-white/20">
              <div className="flex items-center gap-4">
                <Clock className="h-8 w-8 text-yellow-300" />
                <div>
                  <h4 className="text-xl font-bold">Response Time</h4>
                  <p className="opacity-90">Emergency calls answered within 5 minutes</p>
                  <p className="opacity-90">On-site emergency care within 30 minutes</p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="p-6 bg-white/10 border-white/20">
              <div className="flex items-center gap-4">
                <Zap className="h-8 w-8 text-yellow-300" />
                <div>
                  <h4 className="text-xl font-bold">Immediate Relief</h4>
                  <p className="opacity-90">Pain management and temporary solutions</p>
                  <p className="opacity-90">Follow-up care scheduling available</p>
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Emergency Services */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Emergency Services We Handle</h3>
              <div className="grid grid-cols-1 gap-3">
                {emergencyServices.map((service, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-white/10 rounded-lg">
                    <AlertTriangle className="h-5 w-5 text-yellow-300 flex-shrink-0" />
                    <span className="font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white/10 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-4">What to Do in a Dental Emergency</h4>
              <div className="space-y-3 text-sm opacity-90">
                <p>
                  <strong>1. Stay Calm:</strong> Take deep breaths and assess the situation
                </p>
                <p>
                  <strong>2. Call Immediately:</strong> Contact our emergency line at 7010650063
                </p>
                <p>
                  <strong>3. Control Bleeding:</strong> Apply gentle pressure with clean gauze
                </p>
                <p>
                  <strong>4. Save Broken Pieces:</strong> Keep any broken tooth fragments
                </p>
                <p>
                  <strong>5. Pain Management:</strong> Use cold compress and over-the-counter pain relief
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Don't Wait - Get Help Now!</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold text-lg px-8 py-4" asChild>
                <a href="tel:7010650063">
                  <Phone className="h-5 w-5 mr-2" />
                  Call Emergency: 7010650063
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 text-lg px-8 py-4 bg-transparent"
                asChild
              >
                <a href="https://wa.me/917010650063" target="_blank" rel="noopener noreferrer">
                  WhatsApp Emergency
                </a>
              </Button>
            </div>
            <p className="text-sm opacity-75">
              Emergency consultations available via phone, WhatsApp, or in-person visits
            </p>
          </div>
        </div>
      </SectionContainer>
    </section>
  )
}
