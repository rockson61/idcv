"use client"

import { useState } from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

// Currency conversion rates (approximate)
const USD_RATE = 0.012 // 1 INR = 0.012 USD
const EUR_RATE = 0.011 // 1 INR = 0.011 EUR

interface ServicePrice {
  name: string
  description: string
  price: number
  discountedPrice?: number
  popular?: boolean
}

interface ServiceCategory {
  title: string
  services: ServicePrice[]
}

const serviceCategories: ServiceCategory[] = [
  {
    title: "General Dentistry",
    services: [
      {
        name: "Dental Check-up & Consultation",
        description: "Comprehensive dental examination with digital X-rays",
        price: 500,
        discountedPrice: 399,
        popular: true,
      },
      {
        name: "Teeth Cleaning (Scaling)",
        description: "Professional removal of plaque and tartar",
        price: 1200,
        discountedPrice: 999,
      },
      {
        name: "Dental Fillings",
        description: "Tooth-colored composite fillings",
        price: 1500,
        discountedPrice: 1200,
      },
      {
        name: "Root Canal Treatment (RCT)",
        description: "Single tooth treatment including medication",
        price: 5000,
        discountedPrice: 4500,
        popular: true,
      },
    ],
  },
  {
    title: "Cosmetic Dentistry",
    services: [
      {
        name: "Teeth Whitening",
        description: "Professional in-clinic teeth whitening",
        price: 8000,
        discountedPrice: 6999,
      },
      {
        name: "Dental Veneers",
        description: "Per tooth (porcelain)",
        price: 10000,
        discountedPrice: 8500,
        popular: true,
      },
      {
        name: "Smile Makeover",
        description: "Comprehensive cosmetic treatment plan",
        price: 30000,
        discountedPrice: 25000,
      },
    ],
  },
  {
    title: "Orthodontics",
    services: [
      {
        name: "Traditional Braces",
        description: "Full treatment including adjustments",
        price: 35000,
        discountedPrice: 30000,
      },
      {
        name: "Clear Aligners",
        description: "Full treatment with regular check-ups",
        price: 65000,
        discountedPrice: 55000,
        popular: true,
      },
    ],
  },
  {
    title: "Dental Implants",
    services: [
      {
        name: "Single Tooth Implant",
        description: "Includes implant, abutment and crown",
        price: 35000,
        discountedPrice: 30000,
        popular: true,
      },
      {
        name: "Multiple Tooth Implants",
        description: "Per implant (3+ implants)",
        price: 30000,
      },
      {
        name: "Full Mouth Rehabilitation",
        description: "Complete smile restoration with implants",
        price: 250000,
        discountedPrice: 225000,
      },
    ],
  },
]

const formatCurrency = (amount: number, currency: "INR" | "USD" | "EUR") => {
  if (currency === "USD") {
    return `$${(amount * USD_RATE).toFixed(2)}`
  }
  if (currency === "EUR") {
    return `€${(amount * EUR_RATE).toFixed(2)}`
  }
  return `₹${amount.toLocaleString("en-IN")}`
}

export function PricingTable() {
  const [currency, setCurrency] = useState<"INR" | "USD" | "EUR">("INR")

  return (
    <div className="container py-10 mx-auto">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-primary mb-2">Transparent Pricing</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          At Indira Dental Clinic, we believe in transparent pricing without hidden fees. All treatments include
          consultation, procedure, and follow-up care.
        </p>
      </div>

      <Tabs
        defaultValue="INR"
        className="w-full"
        onValueChange={(value) => setCurrency(value as "INR" | "USD" | "EUR")}
      >
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-3 w-full max-w-md">
            <TabsTrigger value="INR">₹ INR</TabsTrigger>
            <TabsTrigger value="USD">$ USD</TabsTrigger>
            <TabsTrigger value="EUR">€ EUR</TabsTrigger>
          </TabsList>
        </div>

        {["INR", "USD", "EUR"].map((currencyValue) => (
          <TabsContent key={currencyValue} value={currencyValue} className="space-y-12">
            {serviceCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-2xl font-bold mb-6 text-center text-primary">{category.title}</h3>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {category.services.map((service, serviceIndex) => (
                    <Card
                      key={serviceIndex}
                      className={`overflow-hidden transition-shadow hover:shadow-lg ${service.popular ? "border-primary border-2" : ""}`}
                    >
                      <CardHeader className="pb-3">
                        <div className="flex justify-between items-start">
                          <CardTitle className="text-lg">{service.name}</CardTitle>
                          {service.popular && <Badge className="bg-primary">Popular</Badge>}
                        </div>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-baseline mb-2">
                          <span className="text-2xl font-bold text-primary">
                            {formatCurrency(
                              service.discountedPrice || service.price,
                              currency as "INR" | "USD" | "EUR",
                            )}
                          </span>
                          {service.discountedPrice && (
                            <span className="ml-2 text-sm text-gray-500 line-through">
                              {formatCurrency(service.price, currency as "INR" | "USD" | "EUR")}
                            </span>
                          )}
                        </div>
                        {service.discountedPrice && (
                          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                            Save{" "}
                            {formatCurrency(service.price - service.discountedPrice, currency as "INR" | "USD" | "EUR")}
                          </Badge>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
            <div className="text-center mt-8 text-sm text-gray-500">
              <p>* Prices are approximate and may vary based on individual case assessment during consultation.</p>
              <p>* Currency conversion rates are approximate and subject to change.</p>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}
