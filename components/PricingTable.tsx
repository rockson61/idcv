"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import Link from "next/link"

const pricingData = [
  {
    category: "Preventive Care",
    items: [
      { treatment: "Checkup (Consultation)", inr: "₹1,000", usd: "$12" },
      { treatment: "X-ray (2D)", inr: "₹700", usd: "$8" },
      { treatment: "X-ray (3D)", inr: "₹3,500", usd: "$42" },
      { treatment: "Cleaning + Polishing with Airflow", inr: "₹1,200", usd: "$14" },
      { treatment: "Deep Cleaning", inr: "₹2,000-3,500", usd: "$24-42" },
    ],
  },
  {
    category: "Operative Dentistry",
    items: [
      { treatment: "Filling with Composite Resin (Per Surface)", inr: "₹600-2,200", usd: "$7-26" },
      { treatment: "Inlay and Onlay Ceramic", inr: "₹4,000-6,000", usd: "$48-72" },
    ],
  },
  {
    category: "Dental Whitening",
    items: [
      { treatment: "Laser", inr: "₹5,000", usd: "$60" },
      { treatment: "Customized Tray", inr: "₹1,800", usd: "$22" },
      { treatment: "Zoom II", inr: "₹6,500", usd: "$78" },
    ],
  },
  {
    category: "Crowns",
    items: [
      { treatment: "Ceramic Non-Precious Crown", inr: "₹7,000", usd: "$84" },
      { treatment: "Emax Crown", inr: "₹12,000", usd: "$144" },
      { treatment: "Zirconia Crown", inr: "₹14,000", usd: "$168" },
    ],
  },
  {
    category: "Implant Dentistry",
    items: [{ treatment: "Implant", inr: "₹35,000-50,000", usd: "$420-600" }],
  },
]

export function PricingTable() {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const filteredData = pricingData
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.treatment.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.inr && item.inr.toLowerCase().includes(searchTerm.toLowerCase())),
      ),
    }))
    .filter((category) => category.items.length > 0)

  return (
    <div className="space-y-6">
      <div className="relative">
        <Input
          type="text"
          placeholder="Search treatments..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="pl-10"
        />
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
      </div>

      <Tabs defaultValue="inr" className="w-full">
        <TabsList className="grid grid-cols-2 mb-4">
          <TabsTrigger value="inr">INR (₹)</TabsTrigger>
          <TabsTrigger value="usd">USD ($)</TabsTrigger>
        </TabsList>

        {["inr", "usd"].map((currency) => (
          <TabsContent key={currency} value={currency}>
            {filteredData.map((category, index) => (
              <div key={index} className="border rounded-lg overflow-hidden mb-4">
                <Button
                  variant="ghost"
                  className="w-full flex justify-between items-center p-4 text-left"
                  onClick={() => toggleCategory(category.category)}
                >
                  <span className="text-lg font-semibold">{category.category}</span>
                  {expandedCategories.includes(category.category) ? (
                    <ChevronUp className="h-5 w-5" />
                  ) : (
                    <ChevronDown className="h-5 w-5" />
                  )}
                </Button>
                {expandedCategories.includes(category.category) && (
                  <div className="p-4 bg-muted/30">
                    <table className="w-full">
                      <thead className="bg-muted/50">
                        <tr>
                          <th className="text-left p-2">Treatment</th>
                          <th className="text-right p-2">Price ({currency.toUpperCase()})</th>
                        </tr>
                      </thead>
                      <tbody>
                        {category.items.map((item, itemIndex) => (
                          <tr key={itemIndex} className="border-b last:border-b-0">
                            <td className="py-2 pr-4">
                              <div>{item.treatment}</div>
                            </td>
                            <td className="py-2 text-right font-semibold">
                              {item[currency as keyof typeof item] || "By Quote"}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </TabsContent>
        ))}
      </Tabs>

      <div className="text-center mt-6">
        <Button asChild>
          <Link href="/pricing">View Complete Price List with Currency Calculator</Link>
        </Button>
      </div>
    </div>
  )
}
