import { GlassPanel } from "@/components/ui/glass-panel"
import { SectionContainer } from "@/components/ui/section-container"
import { Button } from "@/components/ui/button"
import { MapPin, Clock, Phone, Car, Wifi, Shield, Heart, Users, Navigation, Star } from "lucide-react"

export function ClinicsOverview() {
  const clinicFeatures = [
    {
      icon: Shield,
      title: "Advanced Sterilization",
      description: "State-of-the-art sterilization protocols exceeding industry standards",
    },
    {
      icon: Heart,
      title: "Patient Comfort",
      description: "Relaxing environment designed to minimize anxiety and maximize comfort",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Highly trained dental professionals with years of experience",
    },
    {
      icon: Wifi,
      title: "Modern Amenities",
      description: "Free WiFi, comfortable seating, and entertainment systems",
    },
  ]

  const nearbyLocations = [
    { name: "Gandhi Nagar", distance: "0.5 km", time: "2 min" },
    { name: "Katpadi", distance: "2.1 km", time: "8 min" },
    { name: "Sathuvachari", distance: "3.5 km", time: "12 min" },
    { name: "Bagayam", distance: "4.2 km", time: "15 min" },
  ]

  return (
    <SectionContainer>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-[#005f73] mb-6">Our Modern Dental Clinic</h2>
        <p className="text-xl text-gray-700 max-w-3xl mx-auto">
          Experience dental care in a state-of-the-art facility designed for your comfort and safety, conveniently
          located in the heart of Vellore.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        {/* Clinic Information */}
        <div className="space-y-6">
          <GlassPanel variant="card">
            <div className="flex items-start space-x-4 mb-6">
              <MapPin className="h-6 w-6 text-[#54CAD3] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#005f73] mb-2">Prime Location</h3>
                <p className="text-gray-700 mb-2">
                  3rd Floor, 54, Katpadi Main Rd,
                  <br />
                  Suthanthira Ponvizha Nagar,
                  <br />
                  Gandhi Nagar, Vellore, Tamil Nadu 632006
                </p>
                <div className="flex items-center space-x-4 text-sm">
                  <div className="flex items-center space-x-1">
                    <Car className="h-4 w-4 text-[#54CAD3]" />
                    <span>Free Parking</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Navigation className="h-4 w-4 text-[#54CAD3]" />
                    <span>Easy Access</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4 mb-6">
              <Clock className="h-6 w-6 text-[#54CAD3] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#005f73] mb-2">Convenient Hours</h3>
                <div className="space-y-1 text-gray-700">
                  <p>Monday - Saturday: 10:00 AM - 8:00 PM</p>
                  <p>Sunday: 10:00 AM - 1:30 PM</p>
                  <p className="text-sm text-[#54CAD3] font-medium">Emergency care available 24/7</p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-[#54CAD3] mt-1 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-bold text-[#005f73] mb-2">Contact Information</h3>
                <div className="space-y-1">
                  <a href="tel:7010650063" className="text-gray-700 hover:text-[#54CAD3] transition-colors block">
                    📞 7010650063
                  </a>
                  <a
                    href="mailto:rockson68@hotmail.com"
                    className="text-gray-700 hover:text-[#54CAD3] transition-colors block"
                  >
                    ✉️ rockson68@hotmail.com
                  </a>
                  <a
                    href="https://wa.me/917010650063"
                    className="text-gray-700 hover:text-[#54CAD3] transition-colors block"
                  >
                    💬 WhatsApp: +91 7010650063
                  </a>
                </div>
              </div>
            </div>
          </GlassPanel>

          <GlassPanel variant="card">
            <h3 className="text-xl font-bold text-[#005f73] mb-4">Nearby Areas We Serve</h3>
            <div className="grid grid-cols-2 gap-3">
              {nearbyLocations.map((location, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-white/30 rounded-lg">
                  <div>
                    <p className="font-medium text-[#005f73]">{location.name}</p>
                    <p className="text-xs text-gray-600">{location.distance}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[#54CAD3] font-medium">{location.time}</p>
                    <p className="text-xs text-gray-600">drive</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassPanel>
        </div>

        {/* Map */}
        <GlassPanel variant="card" className="h-96">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2784186240674!2d79.1369615!3d12.9540278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad394e9843620f%3A0xc7a4b2fb0991e086!2sIndira%20Dental%20Clinic%20%7C%20Dr%20Rockson%20Samuel%20%7C%20Top%20Dentist%20in%20Vellore%20for%20RCT%2C%20Braces%2C%20Implants%2C%20%26%20Dental%20Fillings!5e0!3m2!1sen!2sin!4v1742776988474!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "1rem" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Indira Dental Clinic Location"
          />
        </GlassPanel>
      </div>

      {/* Clinic Features */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-[#005f73] text-center mb-8">Why Choose Our Clinic?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {clinicFeatures.map((feature, index) => (
            <GlassPanel
              key={index}
              variant="card"
              className="text-center group hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#54CAD3] to-[#005f73] rounded-xl mb-4">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-[#005f73] mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </GlassPanel>
          ))}
        </div>
      </div>

      {/* Google Reviews */}
      <GlassPanel variant="card" className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 text-[#54CAD3] fill-current" />
            ))}
          </div>
          <span className="text-2xl font-bold text-[#005f73]">4.9</span>
          <span className="text-gray-600">(64+ Google Reviews)</span>
        </div>

        <p className="text-gray-700 mb-6">
          Rated as one of the top dental clinics in Vellore based on patient satisfaction and treatment quality.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <a
              href="https://www.google.co.in/maps/place/Indira+Dental+Clinic+%7C+Dr+Rockson+Samuel+%7C+Top+Dentist+in+Vellore+for+RCT,+Braces,+Implants,+%26+Dental+Fillings/@12.9540278,79.1369615,17z/data=!3m1!4b1!4m6!3m5!1s0x3bad394e9843620f:0xc7a4b2fb0991e086!8m2!3d12.9540278!4d79.1369615!16s%2Fg%2F11vq058sc7?entry=ttu#lrd=0x3bad394e9843620f:0xc7a4b2fb0991e086,3"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <Star className="h-4 w-4" />
              <span>Read Google Reviews</span>
            </a>
          </Button>
          <Button asChild variant="outline" className="bg-white/50 backdrop-blur-sm">
            <a
              href="https://www.google.com/maps/dir//Indira+Dental+Clinic+%7C+Dr+Rockson+Samuel+%7C+Top+Dentist+in+Vellore+for+RCT,+Braces,+Implants,+%26+Dental+Fillings/@12.9540278,79.1369615,17z"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2"
            >
              <Navigation className="h-4 w-4" />
              <span>Get Directions</span>
            </a>
          </Button>
        </div>
      </GlassPanel>
    </SectionContainer>
  )
}
