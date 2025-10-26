"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Check, Phone, MessageCircle, Calendar } from "lucide-react"
import { cn } from "@/lib/utils"

const plans = [
  {
    name: "Basic Care",
    description: "Essential dental care for individuals and families",
    price: {
      monthly: "₹500",
      yearly: "₹5,000",
    },
    features: [
      "Regular dental check-ups",
      "Basic cleaning & scaling",
      "Digital X-rays",
      "Fluoride treatments",
      "Emergency dental care",
    ],
    cta: "Book Consultation",
    popular: false,
  },
  {
    name: "Complete Care",
    description: "Comprehensive dental care with advanced treatments",
    price: {
      monthly: "₹1,000",
      yearly: "₹10,000",
    },
    features: [
      "All Basic Care features",
      "Deep cleaning procedures",
      "Dental fillings",
      "Root canal treatment",
      "Crown & bridge work",
      "Priority appointments",
    ],
    cta: "Get Started",
    popular: true,
  },
  {
    name: "Premium Care",
    description: "Advanced dental care with cosmetic procedures",
    price: {
      monthly: "₹2,000",
      yearly: "₹20,000",
    },
    features: [
      "All Complete Care features",
      "Dental implants",
      "Orthodontic treatment",
      "Cosmetic procedures",
      "24/7 emergency support",
      "VIP appointments",
    ],
    cta: "Contact Us",
    popular: false,
  },
]

export function Pricing() {
  const [isYearly, setIsYearly] = useState(false)

  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transparent Pricing Plans</h2>
          <p className="text-xl text-muted-foreground mb-8">Choose the perfect plan for your dental care needs</p>
          <div className="inline-flex items-center p-1 rounded-full border bg-muted">
            <Button
              variant={isYearly ? "ghost" : "secondary"}
              className="relative rounded-full px-6"
              onClick={() => setIsYearly(false)}
            >
              Monthly
            </Button>
            <Button
              variant={!isYearly ? "ghost" : "secondary"}
              className="relative rounded-full px-6"
              onClick={() => setIsYearly(true)}
            >
              <span>Yearly</span>
              <span className="absolute -top-2 -right-2 px-2 py-1 text-xs font-medium text-primary bg-primary/10 rounded-full">
                Save 15%
              </span>
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={cn("relative overflow-hidden", plan.popular && "border-primary shadow-lg")}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{isYearly ? plan.price.yearly : plan.price.monthly}</span>
                  <span className="text-muted-foreground ml-2">/{isYearly ? "year" : "month"}</span>
                </div>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="w-4 h-4 text-primary mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="flex flex-col gap-4">
                <Button className="w-full" variant={plan.popular ? "default" : "outline"}>
                  {plan.cta}
                </Button>
                <div className="flex justify-center gap-4 text-sm text-muted-foreground">
                  <a href="tel:07010650063" className="flex items-center hover:text-primary">
                    <Phone className="w-4 h-4 mr-2" />
                    Call us
                  </a>
                  <a
                    href="https://wa.me/917010650063"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-primary"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                  <a href="/book" className="flex items-center hover:text-primary">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule
                  </a>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All plans include free initial consultation and flexible payment options
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="link" className="text-primary" asChild>
              <a href="/insurance">View Insurance Coverage</a>
            </Button>
            <Button variant="link" className="text-primary" asChild>
              <a href="/emi">EMI Options</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
