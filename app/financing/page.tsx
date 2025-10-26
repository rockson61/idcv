import { PageTemplate } from "@/components/PageTemplate"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, CheckCircle, CreditCard, Percent, Calendar } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dental Financing Options | Affordable Payment Plans | Vellore Dentist",
  description:
    "Explore flexible financing options for dental treatments at Indira Dental Clinic in Vellore. Various payment plans to make quality dental care affordable for everyone.",
  keywords:
    "dental financing Vellore, dental payment plans, affordable dental care, dental treatment EMI, flexible payment options, budget-friendly dentistry, dental care financing, Indira Dental Clinic payment options, cost-effective dental treatments",
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
    ],
    icon: Calendar,
  },
  {
    name: "CareCredit",
    description: "Healthcare credit card for dental procedures",
    features: [
      "0% interest if paid in full within 6-18 months",
      "Longer-term financing options available",
      "Quick application process",
      "Can be used for the whole family",
    ],
    icon: CreditCard,
  },
  {
    name: "Dental Discount Plans",
    description: "Save on treatments with our discount plans",
    features: [
      "Immediate savings on most procedures",
      "No waiting periods or annual limits",
      "Includes cosmetic procedures",
      "Affordable annual membership fee",
    ],
    icon: Percent,
  },
]

export default function FinancingPage() {
  return (
    <PageTemplate
      title="Dental Financing Options | Indira Dental Clinic Vellore"
      description="Explore flexible financing options for dental treatments at Indira Dental Clinic in Vellore. We offer various payment plans to make quality dental care affordable for everyone."
      canonicalUrl="https://www.dentalclinicinvellore.in/financing"
      breadcrumbItems={[
        { name: "Home", href: "/" },
        { name: "Financing", href: "/financing" },
      ]}
      pageHeading="Dental Financing Options"
      pageSubheading="We believe that quality dental care should be accessible to everyone. Explore our flexible financing options to help manage your dental expenses."
    >
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {financingOptions.map((option, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <option.icon className="w-5 h-5 text-primary" />
                {option.name}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">{option.description}</p>
              <ul className="space-y-2">
                {option.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="mt-8">
        <CardHeader>
          <CardTitle>Why Choose Our Financing Options?</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Get the treatment you need without delay</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Flexible options to fit your budget</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Transparent terms with no hidden fees</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
              <span>Quick approval process</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      <div className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-4">Ready to Explore Your Financing Options?</h2>
        <p className="text-muted-foreground mb-6">
          Our team is here to help you understand your financing options and choose the best plan for your needs.
          Contact us today to learn more or to start your application.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild>
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/services">
              Explore Our Services
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </PageTemplate>
  )
}
