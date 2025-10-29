import { GlassmorphicCard } from "@/components/ui/glassmorphic-card"
import { CheckCircle2, Award, Users, Stethoscope } from "lucide-react"

const achievements = [
  {
    title: "Root Canal Treatments",
    count: "3000+",
    icon: Stethoscope,
    description: "Successful RCT procedures with 97.5% accuracy",
  },
  {
    title: "Dental Implants",
    count: "3000+",
    icon: Award,
    description: "Permanent tooth replacement solutions",
  },
  {
    title: "Invisible Aligners",
    count: "600+",
    icon: Users,
    description: "Smile transformation success stories",
  },
]

const trustFactors = [
  {
    category: "Expert Care",
    points: [
      "Ensure every bit to save your natural teeth",
      "Conduct Root Canal Treatments with 97.5% accuracy",
      "Expert Doctors in their field",
      "Work passionately with every single patient",
    ],
  },
  {
    category: "Advanced Technology",
    points: [
      "Use advanced Dental Instruments & Materials",
      "Follow 4-tier Sterilization of Dental Instruments",
      "Association with the best labs in India",
      "Regular equipment upgrades",
    ],
  },
  {
    category: "Patient Experience",
    points: [
      "There's no waiting time for patients",
      "Educate patients during the treatment",
      "Ensure regular follow-ups with Patients",
      "Treat patients from around the globe",
    ],
  },
]

export function ClinicUSP() {
  return (
    <section className="py-20 bg-gradient-to-b from-primary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Indira Dental Clinic?</h2>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-center mb-8">Successful Dental Treatments</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <GlassmorphicCard key={index} className="group">
                <div className="p-6 text-center">
                  <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h4 className="text-4xl font-bold text-primary mb-2">{achievement.count}</h4>
                  <p className="text-lg font-semibold mb-2">{achievement.title}</p>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-center mb-8">Why Our Patients Trust Us</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustFactors.map((factor, index) => (
              <GlassmorphicCard key={index} className="group">
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-4 group-hover:text-primary transition-colors">
                    {factor.category}
                  </h4>
                  <div className="space-y-3">
                    {factor.points.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <p className="text-sm text-muted-foreground">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassmorphicCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
