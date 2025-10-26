import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Star, Shield, Clock, Users, Award } from "lucide-react"

interface WhyChooseUsProps {
  locationName?: string
}

export function WhyChooseUs({ locationName = "Vellore" }: WhyChooseUsProps) {
  const features = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Dr. Rockson Samuel brings over 15 years of dental expertise and specialized training in orthodontics."
    },
    {
      icon: Star,
      title: "4.9/5 Patient Rating",
      description: "Consistently rated as one of the best dentists in Vellore with hundreds of satisfied patients."
    },
    {
      icon: Shield,
      title: "Advanced Technology",
      description: "State-of-the-art equipment including digital X-rays, laser dentistry, and modern implant systems."
    },
    {
      icon: Clock,
      title: "Flexible Timings",
      description: "Convenient appointment slots including weekends and emergency dental care services."
    },
    {
      icon: Users,
      title: "Patient-Centered Care",
      description: "Personalized treatment plans tailored to each patient's unique dental needs and budget."
    },
    {
      icon: CheckCircle,
      title: "Comprehensive Services",
      description: "Complete dental care from routine checkups to complex procedures like implants and orthodontics."
    }
  ]

  return (
    <section className="py-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Indira Dental Clinic in {locationName}?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience world-class dental care with Dr. Rockson Samuel, combining years of expertise 
            with cutting-edge technology to deliver exceptional results for every patient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-4 bg-primary/10 px-6 py-3 rounded-full">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500 fill-current" />
              <span className="font-semibold">4.9/5</span>
            </div>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">500+ Happy Patients</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">15+ Years Experience</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs