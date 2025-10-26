import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { ServiceSchema } from "@/components/seo/service-schema"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight, Clock, Shield, CheckCircle, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Fillings in Vellore | Tooth-Colored Fillings | Dr. Rockson Samuel",
  description:
    "Get natural-looking dental fillings in Vellore by Dr. Rockson Samuel. Composite & ceramic fillings for cavities. Painless procedure. Book appointment today!",
  keywords: [
    "dental fillings vellore",
    "tooth colored fillings",
    "composite fillings",
    "cavity treatment",
    "tooth restoration",
  ],
}

export default function DentalFillingsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Dental Fillings"
        description="Restore damaged teeth with natural-looking dental fillings. Composite and ceramic options available for a perfect match to your teeth."
        price="1,500 - 4,000"
        duration="PT30M"
        url="/services/general-dentistry/fillings"
        imageUrl="/dental-fillings.jpg"
        category="Restorative Dentistry"
      />
      <div className="container mx-auto px-4 py-8">
        <PageHeader
          heading="Dental Fillings"
          breadcrumb={[
            { title: "Services", href: "/services" },
            { title: "General Dentistry", href: "/services/general-dentistry" },
            { title: "Dental Fillings", href: "/services/general-dentistry/fillings" },
          ]}
        >
          <p className="text-muted-foreground">
            Restore damaged teeth with natural-looking, durable dental fillings that blend seamlessly with your smile.
          </p>
        </PageHeader>

        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Composite Fillings</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Tooth-colored composite resin fillings that match your natural teeth perfectly.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">30-60 minutes</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span className="text-sm">₹1,500-3,000</span>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {["Natural appearance", "Bonds to tooth", "Less tooth removal", "Same-day treatment"].map(
                  (benefit, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      <span className="text-sm text-muted-foreground">{benefit}</span>
                    </div>
                  ),
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Ceramic Fillings (Inlays/Onlays)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Premium ceramic restorations for larger cavities that need extra strength and durability.
              </p>
              <div className="flex flex-wrap gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  <span className="text-sm">2 visits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-primary" />
                  <span className="text-sm">₹6,000-15,000</span>
                </div>
              </div>
              <div className="space-y-2 mb-4">
                {["Superior strength", "Stain resistant", "Precise fit", "Long-lasting"].map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <h2 className="text-2xl font-bold mb-4">Get Natural-Looking Fillings Today</h2>
          <p className="text-muted-foreground mb-6">
            Don't let cavities compromise your smile. Dr. Rockson Samuel provides gentle, effective filling treatments
            that restore both function and appearance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link href="/contact">
                Book Appointment
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/services/general-dentistry">
                Back to General Dentistry
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  )
}
