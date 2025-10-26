import { Card } from "@/components/ui/card"
import { Users, Award, Clock, Heart, Star, Trophy } from "lucide-react"

export function StatsSection() {
  const stats = [
    {
      icon: Users,
      number: "5000+",
      label: "Happy Patients",
      description: "Satisfied customers across Vellore",
    },
    {
      icon: Award,
      number: "15+",
      label: "Years Experience",
      description: "Proven expertise in dental care",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Emergency Care",
      description: "Round-the-clock dental support",
    },
    {
      icon: Heart,
      number: "98%",
      label: "Success Rate",
      description: "Successful treatment outcomes",
    },
    {
      icon: Star,
      number: "4.9/5",
      label: "Patient Rating",
      description: "Excellent patient satisfaction",
    },
    {
      icon: Trophy,
      number: "50+",
      label: "Awards Won",
      description: "Recognition for excellence",
    },
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-secondary mb-4">
            Trusted by Thousands in <span className="gradient-text">Vellore</span>
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            Our commitment to excellence has made us the most trusted dental clinic in Vellore. Here are the numbers
            that speak for our quality care.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="stats-card hover-lift">
              <div className="icon-container-lg bg-[#54CAD3]/10 mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-[#005f73]" />
              </div>
              <div className="text-3xl font-bold text-[#005f73] mb-2">{stat.number}</div>
              <div className="font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
