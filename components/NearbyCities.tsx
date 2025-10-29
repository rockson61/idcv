import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface NearbyCitiesProps {
  cities: Array<{ name: string; link: string }>
}

export function NearbyCities({ cities }: NearbyCitiesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Nearby Cities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="grid grid-cols-2 gap-2">
          {cities.map((city, index) => (
            <li key={index}>
              <Link href={city.link} className="text-primary hover:underline">
                {city.name}
              </Link>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
