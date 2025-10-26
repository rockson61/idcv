import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, Phone, Clock, MapPin, Zap, Shield, Heart, Stethoscope } from "lucide-react"

export function EmergencySection() {
  const emergencyTypes = [
    {
      icon: AlertTriangle,
      title: "Severe Tooth Pain",
      description: "Unbearable toothache requiring immediate pain relief",
      action: "Call immediately for emergency appointment",
    },
    {
      icon: Zap,
      title: "Knocked-Out Tooth",
      description: "Tooth completely displaced from socket due to trauma",
      action: "Preserve tooth in milk and visit within 30 minutes",
    },
    {
      icon: Shield,
      title: "Broken/Chipped Tooth",
      description: "Fractured tooth causing pain or sharp edges",
      action: "Save fragments and rinse mouth with warm water",
    },
    {
      icon: Heart,
      title: "Dental Abscess",
      description: "Swelling and infection around tooth or gums",
      action: "Requires immediate antibiotic treatment",
    },
  ]

  const emergencySteps = [
    {
      step: "1",
      title: "Call Our Emergency Line",
      description: "Contact us immediately at 7010650063 for urgent dental problems",
    },
    {
      step: "2",
      title: "Describe Your Emergency",
      description: "Provide details about your symptoms and pain level to our team",
    },
    {
      step: "3",
      title: "Follow First Aid Instructions",
      description: "Our team will guide you through immediate care steps over the phone",
    },
    {
      step: "4",
      title: "Visit Our Clinic",
      description: "Come to our clinic immediately or we'll arrange emergency care",
    },
  ]

  const firstAidTips = [
    {
      situation: "Severe Pain",
      tip: "Rinse with warm salt water and take over-the-counter pain medication as directed",
    },
    {
      situation: "Knocked-Out Tooth",
      tip: "Handle by crown only, rinse gently, and store in milk or saliva",
    },
    {
      situation: "Broken Tooth",
      tip: "Save any pieces, rinse mouth with warm water, apply cold compress",
    },
    {
      situation: "Lost Filling",
      tip: "Use temporary dental cement or sugar-free gum to cover the cavity",
    },
    {
      situation: "Bleeding Gums",
      tip: "Apply gentle pressure with clean gauze and rinse with salt water",
    },
    {
      situation: "Swelling",
      tip: "Apply cold compress to outside of face and avoid hot foods/drinks",
    },
  ]

  return (
    <section className="section-padding bg-red-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <Badge className="bg-red-100 text-red-700 mb-4">
            <AlertTriangle className="w-4 h-4 mr-2" />
            Emergency Dental Care
          </Badge>
          <h2 className="heading-secondary mb-4">
            24/7 <span className="gradient-text">Emergency Services</span>
          </h2>
          <p className="text-body max-w-3xl mx-auto">
            Dental emergencies can happen anytime. Our experienced team is available round-the-clock to provide
            immediate care and pain relief when you need it most.
          </p>
        </div>

        {/* Emergency Contact Card */}
        <Card className="card-glass bg-gradient-to-r from-red-500 to-red-600 text-white mb-16 max-w-4xl mx-auto">
          <div className="text-center space-y-6">
            <div className="icon-container-xl bg-white/20 mx-auto">
              <Phone className="w-12 h-12 text-white" />
            </div>

            <div>
              <h3 className="text-3xl font-bold mb-2">Emergency Hotline</h3>
              <p className="text-xl opacity-90 mb-4">Available 24 Hours, 7 Days a Week</p>
              <div className="text-4xl font-bold mb-6">7010650063</div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="flex items-center justify-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>24/7 Available</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <MapPin className="w-5 h-5" />
                <span>Gandhi Nagar, Vellore</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Stethoscope className="w-5 h-5" />
                <span>Expert Care</span>
              </div>
            </div>

            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 font-bold">
              <Phone className="w-5 h-5 mr-2" />
              Call Emergency Line
            </Button>
          </div>
        </Card>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Emergency Types */}
          <div className="space-y-8">
            <Card className="card-elevated">
              <h3 className="text-2xl font-bold text-[#005f73] mb-6">Common Dental Emergencies</h3>
              <div className="space-y-6">
                {emergencyTypes.map((emergency, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-red-50 rounded-lg">
                    <div className="icon-container bg-red-100 text-red-600">
                      <emergency.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#005f73] mb-1">{emergency.title}</h4>
                      <p className="text-gray-600 text-sm mb-2">{emergency.description}</p>
                      <p className="text-red-600 text-sm font-medium">{emergency.action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-elevated">
              <h3 className="text-2xl font-bold text-[#005f73] mb-6">What to Do in an Emergency</h3>
              <div className="space-y-4">
                {emergencySteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-[#54CAD3] text-white rounded-full flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#005f73] mb-1">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* First Aid Tips */}
          <div className="space-y-8">
            <Card className="card-elevated">
              <h3 className="text-2xl font-bold text-[#005f73] mb-6">Emergency First Aid Tips</h3>
              <div className="space-y-4">
                {firstAidTips.map((tip, index) => (
                  <div key={index} className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-bold text-[#005f73] mb-2">{tip.situation}</h4>
                    <p className="text-gray-700 text-sm">{tip.tip}</p>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="card-elevated bg-gradient-to-br from-[#54CAD3]/10 to-[#005f73]/10">
              <div className="text-center space-y-4">
                <div className="icon-container-lg bg-[#54CAD3]/20 mx-auto">
                  <Shield className="w-8 h-8 text-[#005f73]" />
                </div>
                <h3 className="text-xl font-bold text-[#005f73]">Prevention is Better Than Cure</h3>
                <p className="text-gray-600 text-sm">
                  Regular dental check-ups can prevent most dental emergencies. Schedule your routine visit today.
                </p>
                <Button className="btn-gradient">Book Preventive Check-up</Button>
              </div>
            </Card>

            <Card className="card-elevated">
              <h3 className="text-xl font-bold text-[#005f73] mb-4">Emergency Care Features</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Immediate pain relief</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">24/7 availability</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Expert emergency dentist</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Advanced pain management</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Same-day treatment</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-gray-700">Follow-up care included</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom Warning */}
        <div className="mt-16">
          <Card className="card-glass bg-yellow-50 border-yellow-200">
            <div className="flex items-start space-x-4">
              <AlertTriangle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-yellow-800 mb-2">Important Emergency Guidelines</h3>
                <div className="text-yellow-700 space-y-2 text-sm">
                  <p>
                    • <strong>Do not delay:</strong> Dental emergencies can worsen quickly without proper treatment
                  </p>
                  <p>
                    • <strong>Avoid self-medication:</strong> Only take prescribed medications or follow our guidance
                  </p>
                  <p>
                    • <strong>Preserve evidence:</strong> Save any broken tooth fragments or displaced dental work
                  </p>
                  <p>
                    • <strong>Stay calm:</strong> Our emergency team is trained to handle all dental emergencies
                    effectively
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
