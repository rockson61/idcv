import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin } from "lucide-react"

export function AreasWeServe() {
  const areas = [
    {
      name: "Gandhi Nagar",
      distance: "0.5 km",
      link: "/in/tamil-nadu/vellore/gandhi-nagar",
    },
    {
      name: "Suthanthira Ponvizha Nagar",
      distance: "0.2 km",
      link: "/in/tamil-nadu/vellore/suthanthira-ponvizha-nagar",
    },
    {
      name: "Katpadi",
      distance: "3 km",
      link: "/in/tamil-nadu/vellore/katpadi",
    },
    {
      name: "Bagayam",
      distance: "5 km",
      link: "/in/tamil-nadu/vellore/bagayam",
    },
    {
      name: "Thorapadi",
      distance: "7 km",
      link: "/in/tamil-nadu/vellore/thorapadi",
    },
    {
      name: "Sathuvachari",
      distance: "8 km",
      link: "/in/tamil-nadu/vellore/sathuvachari",
    },
    {
      name: "Rangapuram",
      distance: "6 km",
      link: "/in/tamil-nadu/vellore/rangapuram",
    },
    {
      name: "Kosapet",
      distance: "4 km",
      link: "/in/tamil-nadu/vellore/kosapet",
    },
  ]

  return (
    <section className="py-12 md:py-16 lg:py-20 bg-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Areas We Serve in Vellore</h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Providing quality dental care to patients throughout Vellore and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {areas.map((area, index) => (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <Link href={area.link} className="flex flex-col items-center text-center">
                  <MapPin className="h-5 w-5 text-blue-600 mb-2" />
                  <h3 className="font-medium">{area.name}</h3>
                  <p className="text-sm text-gray-500">{area.distance}</p>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            We welcome patients from all areas of Vellore and nearby towns. Our central location makes us easily
            accessible from anywhere in the region.
          </p>
          <Button asChild variant="outline">
            <Link href="/locations">View All Service Areas</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
