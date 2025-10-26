import type { Metadata } from "next"
import Link from "next/link"
import { PageTemplate } from "@/components/PageTemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  CheckCircle,
  CreditCard,
  Percent,
  Calendar,
  Shield,
  Clock,
  IndianRupee,
  FileCheck,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Financing & Insurance | Affordable Payment Plans | Vellore",
  description:
    "Explore flexible financing options and insurance coverage at Indira Dental Clinic in Vellore. We accept major insurance plans and offer EMI, payment plans to make dental care affordable.",
  keywords:
    "dental financing Vellore, dental payment plans, dental insurance Vellore, affordable dental care, dental treatment EMI, flexible payment options, budget-friendly dentistry, insurance plans, cashless dental treatment, Indira Dental Clinic",
  alternates: {
    canonical: "https://www.dentalclinicinvellore.in/financing",
  },
}

const financingOptions = [
  {
    name: "In-House Payment Plans",
    description: "Flexible payment plans tailored to your budget",
    features: [
      "No interest options available",
      "Customized monthly payments",
      "No credit check required",
      "Start treatment immediately",
      "Suitable for all treatments",
    ],
    icon: Calendar,
    color: "bg-blue-50 text-blue-700",
  },
  {
    name: "EMI Options",
    description: "Easy monthly installments for expensive procedures",
    features: [
      "0% interest if paid in full within 6-12 months",
      "Longer-term financing options available",
      "Quick application process",
      "Can be used for the whole family",
      "Flexible tenure options",
    ],
    icon: CreditCard,
    color: "bg-green-50 text-green-700",
  },
  {
    name: "Dental Discount Plans",
    description: "Save on treatments with our discount plans",
    features: [
      "Immediate savings on most procedures",
      "No waiting periods or annual limits",
      "Includes cosmetic procedures",
      "Affordable annual membership fee",
      "Family discount packages available",
    ],
    icon: Percent,
    color: "bg-purple-50 text-purple-700",
  },
]

const insurancePlans = [
  {
    provider: "Star Health Insurance",
    coverage: "Up to ₹50,000",
    treatments: ["Root Canal", "Dental Implants", "Orthodontic Care", "General Dentistry"],
    cashless: true,
    color: "border-blue-200 bg-blue-50/50",
  },
  {
    provider: "HDFC ERGO Health",
    coverage: "Up to ₹75,000",
    treatments: ["All Dental Procedures", "Cosmetic Dentistry", "Oral Surgery"],
    cashless: true,
    color: "border-green-200 bg-green-50/50",
  },
  {
    provider: "Religare Health",
    coverage: "Up to ₹1,00,000",
    treatments: ["Major Dental Procedures", "Surgical Extractions", "Implantology"],
    cashless: true,
    color: "border-purple-200 bg-purple-50/50",
  },
  {
    provider: "Max Bupa Health",
    coverage: "Up to ₹60,000",
    treatments: ["Basic Dental Care", "Emergency Procedures", "Preventive Care"],
    cashless: true,
    color: "border-orange-200 bg-orange-50/50",
  },
]

const benefits = [
  {
    icon: Clock,
    title: "Get Treatment Now",
    description: "Don't delay necessary dental care due to cost concerns",
  },
  {
    icon: IndianRupee,
    title: "Budget-Friendly",
    description: "Flexible options to fit any budget and financial situation",
  },
  {
    icon: Shield,
    title: "Transparent Terms",
    description: "No hidden fees or surprise charges - everything upfront",
  },
  {
    icon: FileCheck,
    title: "Quick Approval",
    description: "Fast application process with instant approval decisions",
  },
]

export default function FinancingPage() {
  return (
    <PageTemplate
      title="Dental Financing & Insurance | Indira Dental Clinic Vellore"
      description="Make quality dental care affordable with our flexible financing options and accepted insurance plans. We're committed to helping you achieve a healthy smile without financial stress."
      canonicalUrl="https://www.dentalclinicinvellore.in/financing"
      breadcrumbItems={[
        { name: "Home", href: "/" },
        { name: "Financing & Insurance", href: "/financing" },
      ]}
      pageHeading="Financing & Insurance Options"
      pageSubheading="Quality dental care should be accessible to everyone. Explore our flexible financing options and accepted insurance plans."
    >
      {/* Why Choose Our Financing */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <benefit.icon className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Financing Options */}
      <div className="mt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold mb-3">Flexible Payment Plans</h2>
          <p className="text-muted-foreground text-lg">
            Choose from multiple financing options designed to make dental care affordable
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {financingOptions.map((option, index) => (
            <Card key={index} className="hover:shadow-lg transition-all">
              <CardHeader>
                <div className={`w-12 h-12 rounded-lg ${option.color} flex items-center justify-center mb-3`}>
                  <option.icon className="w-6 h-6" />
                </div>
                <CardTitle className="text-xl">{option.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <ul className="space-y-2">
                  {option.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Insurance Plans */}
      <div className="mt-16">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-3">
            Insurance Accepted
          </Badge>
          <h2 className="text-3xl font-bold mb-3">Accepted Insurance Plans</h2>
          <p className="text-muted-foreground text-lg">
            We work with major insurance providers to maximize your benefits
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {insurancePlans.map((plan, index) => (
            <Card key={index} className={`border-2 ${plan.color} hover:shadow-lg transition-all`}>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-xl mb-1">{plan.provider}</CardTitle>
                    <p className="text-2xl font-bold text-primary">{plan.coverage}</p>
                  </div>
                  {plan.cashless && (
                    <Badge className="bg-green-100 text-green-700 border-green-300">Cashless</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm font-semibold mb-3 text-muted-foreground">Covered Treatments:</p>
                <ul className="space-y-2">
                  {plan.treatments.map((treatment, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                      <span className="text-sm">{treatment}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Insurance Process */}
        <Card className="mt-8 bg-gradient-to-r from-blue-50 to-teal-50 border-2">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileCheck className="w-5 h-5" />
              Our Insurance Process - Simple & Hassle-Free
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                "Verify your coverage before appointment",
                "Present your insurance card at reception",
                "We handle paperwork & submit claims",
                "Pay any applicable co-pays or deductibles",
                "Receive treatment with peace of mind",
              ].map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold mx-auto mb-2">
                    {index + 1}
                  </div>
                  <p className="text-sm">{step}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Why Choose Our Financing */}
      <Card className="mt-12">
        <CardHeader>
          <CardTitle>Why Choose Our Financing Options?</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Get the treatment you need without delay",
              "Flexible options to fit your budget",
              "Transparent terms with no hidden fees",
              "Quick approval process",
              "Expert assistance with insurance claims",
              "Family discount packages available",
            ].map((reason, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* CTA Section */}
      <div className="mt-12 text-center bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-4">Ready to Explore Your Payment Options?</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Our team is here to help you understand your financing and insurance options. Contact us today to learn more
          or to verify your coverage.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="tel:7010650063">Call: 7010650063</Link>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>

      {/* Additional Info */}
      <Card className="mt-8 bg-yellow-50 border-yellow-200">
        <CardContent className="pt-6">
          <p className="text-center text-sm text-gray-700">
            <strong>Note:</strong> Insurance coverage varies by plan and provider. Please verify your specific benefits
            with your insurance company. Our team is happy to assist you with insurance verification and claims
            processing. For detailed information about your coverage, call us at{" "}
            <a href="tel:7010650063" className="text-primary hover:underline font-semibold">
              7010650063
            </a>
            .
          </p>
        </CardContent>
      </Card>
    </PageTemplate>
  )
}
