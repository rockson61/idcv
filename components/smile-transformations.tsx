import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"

export function SmileTransformations() {
  const transformations = [
    {
      title: "Complete Smile Makeover",
      description: "Combination of veneers, crowns, and whitening for a total transformation",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/cosmetic-dentistry",
    },
    {
      title: "Dental Implant Restoration",
      description: "Single tooth implant with natural-looking crown replacement",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/dental-implants",
    },
    {
      title: "Orthodontic Correction",
      description: "Braces treatment for severely misaligned teeth",
      image: "/placeholder.svg?height=300&width=400",
      link: "/services/orthodontics",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Smile Transformations</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Real patients, real results. See how we've transformed smiles and lives.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {transformations.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={`Before and after ${item.title}`}
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
                  <div className="p-4 text-white">
                    <h3 className="font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button variant="outline" asChild className="w-full">
                  <Link href={item.link} className="flex items-center justify-center">
                    View More Cases
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button asChild>
            <Link href="/gallery">View All Transformations</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
