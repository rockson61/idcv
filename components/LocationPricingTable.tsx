"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp, Search } from "lucide-react"
import Link from "next/link"

interface PricingItem {
  treatment: string
  price: string
}

interface PricingCategory {
  category: string
  items: PricingItem[]
}

const pricingData: PricingCategory[] = [
  {
    category: "Preventive Care",
    items: [
      { treatment: "Checkup (Consultation)", price: "₹1,000" },
      { treatment: "X-ray (2D)", price: "₹700" },
      { treatment: "X-ray (3D)", price: "₹3,500" },
      { treatment: "Cleaning + Polishing", price: "₹1,200" },
      { treatment: "Deep Cleaning", price: "₹2,000-3,500" },
    ],
  },
  {
    category: "Restorative Dentistry",
    items: [
      { treatment: "Composite Filling (Per Surface)", price: "₹600-2,200" },
      { treatment: "Root Canal Treatment (Single Root)", price: "₹4,000-6,000" },
      { treatment: "Root Canal Treatment (Multiple Roots)", price: "₹6,000-8,000" },
      { treatment: "Ceramic Crown", price: "₹7,000-12,000" },
    ],
  },
  {
    category: "Cosmetic Dentistry",
    items: [
      { treatment: "Teeth Whitening", price: "₹5,000-8,000" },
      { treatment: "Dental Veneers (Per Tooth)", price: "₹8,000-15,000" },
      { treatment: "Smile Makeover", price: "₹50,000-1,50,000" },
    ],
  },
  {
    category: "Implant Dentistry",
    items: [
      { treatment: "Dental Implant (Single Tooth)", price: "₹35,000-50,000" },
      { treatment: "Implant Supported Denture", price: "₹1,50,000-2,50,000" },
      { treatment: "All-on-4 Implants", price: "₹3,50,000-5,00,000" },
    ],
  },
]

export function LocationPricingTable() {
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
          item.price.toLowerCase().includes(searchTerm.toLowerCase()),
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
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
      </div>

      {filteredData.map((category, index) => (
        <div key={index} className="border rounded-lg overflow-hidden">
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
            <div className="p-4 bg-gray-50">
              <table className="w-full">
                <tbody>
                  {category.items.map((item, itemIndex) => (
                    <tr key={itemIndex} className="border-b last:border-b-0">
                      <td className="py-2 pr-4">{item.treatment}</td>
                      <td className="py-2 text-right font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ))}

      <div className="text-center mt-6">
        <Button asChild>
          <Link href="/pricing">View Complete Price List with Currency Calculator</Link>
        </Button>
      </div>
    </div>
  )
}
