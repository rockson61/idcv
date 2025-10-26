"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Navigation,
  Calendar,
  Star,
  Users,
  Award,
  Building2,
  Car,
  Bus,
  Train,
  Bike,
  Shield,
  Wifi,
  Zap,
  Heart,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"

export function LocationsSection() {
  const [selectedTransport, setSelectedTransport] = useState("car")

  const transportOptions = [
    {
      id: "car",
      icon: Car,
      label: "By Car",
      time: "15 min",
      description: "Take NH 48 from Bangalore, exit at Katpadi Junction",
      directions: [
        "Take NH 48 towards Vellore",
        "Exit at Katpadi Junction",
        "Turn right onto Katpadi Main Road",
        "Clinic on 3rd floor (10 minutes from junction)",
      ],
    },
    {
      id: "bus",
      icon: Bus,
      label: "By Bus",
      time: "25 min",
      description: "Regular buses from Vellore Bus Stand to Gandhi Nagar",
      directions: [
        "Take bus to Gandhi Nagar from Vellore Bus Stand",
        "Get down at Gandhi Nagar Bus Stop",
        "Walk 5 minutes to Katpadi Main Road",
        "Clinic is on 3rd floor of building",
      ],
    },
    {
      id: "train",
      icon: Train,
      label: "By Train",
      time: "20 min",
      description: "Katpadi Junction Railway Station is 2 km away",
      directions: [
        "Arrive at Katpadi Junction Railway Station",
        "Take auto-rickshaw or cab (₹50-100)",
        "5 minute ride to Katpadi Main Road",
        "Clinic on 3rd floor",
      ],
    },
    {
      id: "bike",
      icon: Bike,
      label: "By Bike",
      time: "10 min",
      description: "Bike parking available at ground level",
      directions: [
        "Navigate to Katpadi Main Road",
        "Free bike parking available",
        "Secure parking with CCTV",
        "Elevator access to 3rd floor",
      ],
    },
  ]

  const nearbyLandmarks = [
    { name: "Katpadi Junction Railway Station", distance: "2.0 km", time: "5 min drive" },
    { name: "VIT University", distance: "5.5 km", time: "12 min drive" },
    { name: "CMC Vellore", distance: "3.8 km", time: "10 min drive" },
    { name: "Vellore Fort", distance: "4.2 km", time: "11 min drive" },
    { name: "Golden Temple", distance: "6.5 km", time: "15 min drive" },
    { name: "Vellore Bus Stand", distance: "3.0 km", time: "8 min drive" },
  ]

  const facilities = [
    { icon: Shield, label: "Sterilized Equipment", description: "100% Safe" },
    { icon: Wifi, label: "Free WiFi", description: "High Speed" },
    { icon: Zap, label: "Digital X-Ray", description: "Latest Tech" },
    { icon: Heart, label: "Emergency Care", description: "24/7 Available" },
    { icon: Building2, label: "Modern Facility", description: "State-of-art" },
    { icon: Users, label: "Expert Team", description: "Experienced" },
  ]

  const serviceAreas = [
    "Vellore",
    "Katpadi",
    "Gandhi Nagar",
    "Sathuvachari",
    "Bagayam",
    "Kosapet",
    "Thorapadi",
    "Shenoy Nagar",
    "CMC Area",
    "VIT University",
    "Arcot",
    "Ranipet",
    "Walajah",
    "Gudiyatham",
    "Ambur",
    "Vaniyambadi",
    "Tirupattur",
    "Sholinghur",
    "Arakkonam",
    "Kanchipuram",
    "Hosur",
    "Krishnagiri",
    "Bangalore",
    "Chennai",
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-40 left-20 w-96 h-96 bg-theme-primary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-96 h-96 bg-theme-accent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="secondary" className="mb-4 bg-theme-primary/10 text-theme-primary border-theme-primary/20">
            <MapPin className="w-4 h-4 mr-2" />
            Visit Us
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Find Us in{" "}
            <span className="bg-gradient-to-r from-theme-primary to-theme-accent bg-clip-text text-transparent">
              Vellore
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Conveniently located in the heart of Vellore at Gandhi Nagar. Easy access from all major areas with ample
            parking facilities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Map and Contact Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Interactive Map */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 shadow-2xl overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-theme-primary to-theme-accent"></div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-theme-primary to-theme-accent flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    Our Location
                  </h3>
                  <Button
                    className="bg-gradient-to-r from-theme-primary to-theme-accent hover:from-theme-primary/90 hover:to-theme-accent/90 text-white"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/dir//3rd+Floor,+54,+Katpadi+Main+Rd,+Gandhi+Nagar,+Vellore,+Tamil+Nadu+632006",
                        "_blank",
                      )
                    }
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>

                {/* Embedded Google Map */}
                <div className="relative rounded-xl overflow-hidden shadow-lg mb-6">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9315885547!2d79.13264731482063!3d12.966665690866858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479b85e597df%3A0x7f1e8b4a7c4f8a5c!2sKatpadi%20Main%20Rd%2C%20Gandhi%20Nagar%2C%20Vellore%2C%20Tamil%20Nadu%20632006!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  ></iframe>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                    <Users className="w-8 h-8 text-theme-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">10,000+</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Happy Patients</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                    <Award className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">15+ Years</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Experience</div>
                  </div>
                  <div className="text-center p-4 rounded-xl bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20">
                    <Star className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                    <div className="text-2xl font-bold text-gray-900 dark:text-white">4.9/5</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">Google Rating</div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Transport Options */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-green-500 to-green-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
                    <Navigation className="w-5 h-5 text-white" />
                  </div>
                  How to Reach Us
                </h3>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
                  {transportOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedTransport(option.id)}
                      className={`p-4 rounded-xl border-2 transition-all ${
                        selectedTransport === option.id
                          ? "border-theme-primary bg-theme-primary/10 shadow-lg scale-105"
                          : "border-gray-200 dark:border-gray-700 hover:border-theme-primary/50"
                      }`}
                    >
                      <option.icon
                        className={`w-8 h-8 mx-auto mb-2 ${
                          selectedTransport === option.id ? "text-theme-primary" : "text-gray-400"
                        }`}
                      />
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{option.label}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{option.time}</div>
                    </button>
                  ))}
                </div>

                {transportOptions
                  .filter((option) => option.id === selectedTransport)
                  .map((option) => (
                    <div
                      key={option.id}
                      className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600"
                    >
                      <p className="text-gray-700 dark:text-gray-300 mb-4 font-medium">{option.description}</p>
                      <ol className="space-y-2">
                        {option.directions.map((direction, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-theme-primary text-white flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                              {index + 1}
                            </div>
                            <span className="text-gray-600 dark:text-gray-300">{direction}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  ))}
              </div>
            </Card>

            {/* Nearby Landmarks */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-600"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  Nearby Landmarks
                </h3>

                <div className="grid md:grid-cols-2 gap-4">
                  {nearbyLandmarks.map((landmark, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all"
                    >
                      <div className="w-12 h-12 rounded-full bg-theme-primary/10 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-6 h-6 text-theme-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white">{landmark.name}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {landmark.distance} • {landmark.time}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Sidebar */}
          <div className="space-y-6">
            {/* Contact Information */}
            <Card className="bg-teal-600 text-white shadow-2xl overflow-hidden border-0">
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Address</div>
                      <div className="text-sm opacity-90">
                        3rd Floor, 54, Katpadi Main Rd
                        <br />
                        Suthanthira Ponvizha Nagar
                        <br />
                        Gandhi Nagar, Vellore
                        <br />
                        Tamil Nadu 632006
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Phone</div>
                      <a href="tel:7010650063" className="text-sm opacity-90 hover:opacity-100 transition-opacity">
                        7010650063
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Email</div>
                      <a
                        href="mailto:rockson68@hotmail.com"
                        className="text-sm opacity-90 hover:opacity-100 transition-opacity break-all"
                      >
                        rockson68@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="font-semibold mb-2">Clinic Hours</div>
                      <div className="text-sm opacity-90 space-y-1">
                        <div>Mon - Sat: 10:00 AM - 8:00 PM</div>
                        <div>Sunday: 10:00 AM - 1:30 PM</div>
                        <div className="flex items-center gap-2 mt-2 pt-2 border-t border-white/30">
                          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                          <span className="font-semibold">24/7 Emergency Care</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/30 space-y-3">
                  <Button
                    className="w-full bg-white text-teal-600 hover:bg-gray-50 shadow-lg font-semibold"
                    onClick={() => window.open("tel:7010650063")}
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>

                  <Button
                    variant="outline"
                    className="w-full border-2 border-white text-white hover:bg-white hover:text-teal-600 bg-transparent font-semibold transition-all"
                    onClick={() =>
                      window.open(
                        "https://www.google.com/maps/dir//3rd+Floor,+54,+Katpadi+Main+Rd,+Gandhi+Nagar,+Vellore,+Tamil+Nadu+632006",
                        "_blank",
                      )
                    }
                  >
                    <Navigation className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                </div>
              </div>
            </Card>

            {/* Facilities */}
            <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              <div className="p-6">
                <h4 className="font-bold text-gray-900 dark:text-white mb-4 text-lg">World-Class Facilities</h4>
                <div className="space-y-3">
                  {facilities.map((facility, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-800 border border-gray-200 dark:border-gray-600"
                    >
                      <div className="w-10 h-10 rounded-full bg-theme-primary/10 flex items-center justify-center flex-shrink-0">
                        <facility.icon className="w-5 h-5 text-theme-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-semibold text-gray-900 dark:text-white text-sm">{facility.label}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">{facility.description}</div>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Emergency Contact */}
            <Card className="bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 shadow-xl">
              <div className="p-6">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center mx-auto">
                    <Phone className="w-8 h-8 text-white animate-pulse" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">Dental Emergency?</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    We provide 24/7 emergency dental services. Don't wait, call us now!
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700 text-white shadow-lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Emergency: 7010650063
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Service Areas */}
        <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
          <div className="h-2 bg-gradient-to-r from-theme-primary to-theme-accent"></div>
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Areas We Serve</h3>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We proudly serve patients from Vellore and surrounding areas. Our convenient location makes us
                accessible from all major localities.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 justify-center">
              {serviceAreas.map((area, index) => (
                <Badge
                  key={index}
                  variant={
                    ["Vellore", "Katpadi", "Gandhi Nagar", "CMC Area", "VIT University"].includes(area)
                      ? "default"
                      : "secondary"
                  }
                  className={`text-sm px-4 py-2 ${
                    ["Vellore", "Katpadi", "Gandhi Nagar", "CMC Area", "VIT University"].includes(area)
                      ? "bg-gradient-to-r from-theme-primary to-theme-accent text-white shadow-lg"
                      : ""
                  }`}
                >
                  {area}
                </Badge>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-theme-primary to-theme-accent hover:from-theme-primary/90 hover:to-theme-accent/90 text-white shadow-xl"
              >
                <Calendar className="w-5 h-5 mr-2" />
                Book Your Appointment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
