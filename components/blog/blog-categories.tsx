import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight } from "lucide-react"

const categories = [
  {
    title: "Treatments",
    subcategories: [
      {
        title: "Oral Hygiene & Maintenance",
        count: 2,
        items: ["Teaching Dental Hygiene to Preschoolers", "Reduce Gum Pockets Naturally"],
      },
      {
        title: "Gum Diseases & Conditions",
        count: 10,
        items: ["Deep Gum Pockets Treatment", "Scaling and Root Planing", "Gum Graft Failure"],
      },
      // ... other treatment subcategories
    ],
  },
  {
    title: "Conditions",
    subcategories: [
      {
        title: "Tooth Pain & Sensitivity",
        count: 4,
        items: ["Soothe Tooth Pain", "Jaw Pain", "Toothache Only at Night"],
      },
      // ... other condition subcategories
    ],
  },
  {
    title: "Dental Care",
    subcategories: [
      {
        title: "Oral Hygiene & Maintenance",
        count: 3,
        items: ["Oral Hygiene for Elderly with No Teeth", "Oral Hygiene with Braces"],
      },
      // ... other dental care subcategories
    ],
  },
]

export function BlogCategories() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Categories</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {categories.map((category) => (
            <div key={category.title}>
              <h3 className="font-semibold text-lg mb-2">{category.title}</h3>
              <div className="space-y-2">
                {category.subcategories.map((subcategory) => (
                  <div key={subcategory.title}>
                    <Button variant="ghost" className="w-full justify-between" asChild>
                      <Link href={`/blog/category/${subcategory.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        <span className="flex items-center justify-between w-full">
                          <span>{subcategory.title}</span>
                          <span className="flex items-center text-muted-foreground">
                            <span className="text-sm">{subcategory.count}</span>
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </span>
                        </span>
                      </Link>
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
