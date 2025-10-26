"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronDown, ChevronUp, Search } from "lucide-react"

interface PricingItem {
  treatment: string
  inr?: string
  thb?: string
  aud?: string
  usd?: string
  eur?: string
  nzd?: string
  details?: string
}

interface PricingCategory {
  category: string
  items: PricingItem[]
}

interface MultiCurrencyPricingTableProps {
  data: PricingCategory[]
}

export function MultiCurrencyPricingTable({ data }: MultiCurrencyPricingTableProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) =>
      prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category],
    )
  }

  const filteredData = data
    .map((category) => ({
      ...category,
      items: category.items.filter(
        (item) =>
          item.treatment.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (item.inr && item.inr.toLowerCase().includes(searchTerm.toLowerCase())) ||
          (item.details && item.details.toLowerCase().includes(searchTerm.toLowerCase())),
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

      <Tabs defaultValue="inr" className="w-full">
        <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-4">
          <TabsTrigger value="inr">INR (₹)</TabsTrigger>
          <TabsTrigger value="thb">THB (฿)</TabsTrigger>
          <TabsTrigger value="aud">AUD (A$)</TabsTrigger>
          <TabsTrigger value="usd">USD ($)</TabsTrigger>
          <TabsTrigger value="eur">EUR (€)</TabsTrigger>
          <TabsTrigger value="nzd">NZD (NZ$)</TabsTrigger>
        </TabsList>

        {["inr", "thb", "aud", "usd", "eur", "nzd"].map((currency) => (
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
                  <div className="p-4 bg-gray-50">
                    <table className="w-full">
                      <thead className="bg-gray-100">
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
                              {item.details && <div className="text-sm text-gray-500">{item.details}</div>}
                            </td>
                            <td className="py-2 text-right font-semibold">
                              {item[currency as keyof PricingItem] || "By Quote"}
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

      <div className="bg-blue-50 p-4 rounded-lg text-sm">
        <h3 className="font-semibold mb-2">Important Notes:</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>All prices are discussed prior to treatment and proceed only after patient approval.</li>
          <li>No hidden costs. Any additional work diagnosed during treatment will be discussed before proceeding.</li>
          <li>No extra charge on credit card payments.</li>
          <li>Exchange rates are subject to change on a daily basis.</li>
          <li>Indira Dental Clinic is not responsible for price variations due to currency exchange rates.</li>
          <li>Our prices are fixed in Indian Rupees (INR) and payment will be accepted as per Indian currency.</li>
        </ul>
      </div>
    </div>
  )
}
