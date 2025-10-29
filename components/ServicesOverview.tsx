import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const services = [
  { name: "General Dentistry", path: "/services/general-dentistry" },
  { name: "Cosmetic Dentistry", path: "/services/cosmetic-dentistry" },
  { name: "Orthodontics", path: "/services/orthodontics" },
  { name: "Dental Implants", path: "/services/dental-implants" },
  { name: "Root Canal Treatment", path: "/services/root-canal-treatment" },
  { name: "Periodontics", path: "/services/periodontics" },
]

interface ServicesOverviewProps {
  locationName?: string
}

export function ServicesOverview({ locationName }: ServicesOverviewProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Our Dental Services {locationName ? `in ${locationName}` : ""}</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{service.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <Link href={service.path} className="text-primary hover:underline flex items-center">
                {locationName ? `${service.name} in ${locationName}` : "Learn More"}{" "}
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
