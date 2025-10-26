import { CheckCircle } from "lucide-react"

export function Features() {
  const features = [
    {
      title: "Advanced Dental Technology",
      description: "State-of-the-art equipment for precise diagnosis and comfortable treatments.",
    },
    {
      title: "Painless Procedures",
      description: "Modern techniques and sedation options to ensure a pain-free experience.",
    },
    {
      title: "Experienced Dentist",
      description: "Dr. Rockson Samuel brings years of expertise in all aspects of dentistry.",
    },
    {
      title: "Comprehensive Care",
      description: "From routine check-ups to complex procedures, all under one roof.",
    },
    {
      title: "Affordable Pricing",
      description: "Quality dental care at reasonable rates with transparent pricing.",
    },
    {
      title: "Convenient Location",
      description: "Easily accessible clinic in the heart of Vellore with ample parking.",
    },
  ]

  return (
    <section className="w-full py-12 md:py-16 lg:py-20">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Choose Indira Dental Clinic
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We combine expertise, technology, and compassionate care to deliver the best dental experience.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-start gap-2 p-6 bg-white rounded-lg shadow-sm border border-gray-100"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
