import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const treatmentsAndConditions = [
  {
    category: "Common Dental Conditions",
    items: [
      { name: "Tooth Decay", path: "/conditions/tooth-decay" },
      { name: "Gum Disease", path: "/conditions/gum-disease" },
      { name: "Tooth Sensitivity", path: "/conditions/tooth-sensitivity" },
      { name: "Bad Breath", path: "/conditions/bad-breath" },
    ],
  },
  {
    category: "Popular Treatments",
    items: [
      { name: "Teeth Whitening", path: "/services/cosmetic-dentistry/teeth-whitening" },
      { name: "Dental Implants", path: "/services/dental-implants" },
      { name: "Invisalign", path: "/services/orthodontics/invisalign" },
      { name: "Veneers", path: "/services/cosmetic-dentistry/veneers" },
    ],
  },
]

export function TreatmentsAndConditions() {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Treatments and Conditions</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {treatmentsAndConditions.map((category, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{category.category}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <Link href={item.path} className="text-primary hover:underline">
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
