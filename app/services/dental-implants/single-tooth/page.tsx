import { SEOMetadata } from "@/components/seo/seo-metadata"
import { LocationBreadcrumb } from "@/components/location-breadcrumb"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CircleDollarSign, CheckCircle } from "lucide-react"

export default function SingleToothImplantPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEOMetadata
        title="Single Tooth Implant in Vellore | Dental Implant Treatment | Indira Dental Clinic"
        description="Get expert single tooth implant treatment in Vellore at Indira Dental Clinic. Our experienced implantologists provide natural-looking and long-lasting tooth replacement solutions."
        canonicalUrl="https://www.dentalclinicinvellore.in/services/dental-implants/single-tooth"
      />

      <LocationBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Dental Implants", href: "/services/dental-implants" },
          { name: "Single Tooth Implant", href: "/services/dental-implants/single-tooth" },
        ]}
      />

      <PageHeader
        heading="Single Tooth Implant"
        breadcrumb={[
          { title: "Services", href: "/services" },
          { title: "Dental Implants", href: "/services/dental-implants" },
          { title: "Single Tooth Implant", href: "/services/dental-implants/single-tooth" },
        ]}
      >
        <p className="text-muted-foreground">
          Restore your smile with a natural-looking and long-lasting single tooth implant solution.
        </p>
      </PageHeader>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Single Tooth Implants</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            A single tooth implant is an ideal solution for replacing a missing tooth. It consists of a titanium post
            surgically placed in the jawbone, topped with a custom-made crown that looks and functions like a natural
            tooth.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">Treatment duration: 3-6 months (including healing time)</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleDollarSign className="w-4 h-4 text-primary" />
              <span className="text-sm">₹25,000 - ₹45,000</span>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            {[
              "Natural look and feel",
              "Preserves jawbone health",
              "No impact on adjacent teeth",
              "Long-lasting solution",
            ].map((benefit, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm text-muted-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>The Single Tooth Implant Process</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Initial consultation and treatment planning</li>
              <li>Implant placement surgery</li>
              <li>Healing and osseointegration period (3-6 months)</li>
              <li>Abutment placement</li>
              <li>Custom crown creation and attachment</li>
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Why Choose Us for Dental Implants</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Experienced implantologists led by Dr. Rockson Samuel</li>
              <li>State-of-the-art implant technology</li>
              <li>High-quality, biocompatible implant materials</li>
              <li>Personalized treatment plans</li>
              <li>Comprehensive aftercare and support</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Restore Your Smile with a Single Tooth Implant</h2>
        <p className="text-muted-foreground mb-6">
          Book a consultation with Dr. Rockson Samuel to discuss how a single tooth implant can transform your smile and
          oral health.
        </p>
        <Button asChild>
          <Link href="/contact">
            Schedule Consultation
            <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
