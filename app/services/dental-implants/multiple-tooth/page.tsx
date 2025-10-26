import { SEOMetadata } from "@/components/seo/seo-metadata"
import { LocationBreadcrumb } from "@/components/location-breadcrumb"
import { PageHeader } from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Clock, CircleDollarSign, CheckCircle } from "lucide-react"

export default function MultipleToothImplantPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <SEOMetadata
        title="Multiple Tooth Implants in Vellore | Dental Implant Treatment | Indira Dental Clinic"
        description="Get expert multiple tooth implant treatment in Vellore at Indira Dental Clinic. Our experienced implantologists provide comprehensive solutions for replacing multiple missing teeth."
        canonicalUrl="https://www.dentalclinicinvellore.in/services/dental-implants/multiple-tooth"
      />

      <LocationBreadcrumb
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: "Dental Implants", href: "/services/dental-implants" },
          { name: "Multiple Tooth Implants", href: "/services/dental-implants/multiple-tooth" },
        ]}
      />

      <PageHeader
        heading="Multiple Tooth Implants"
        breadcrumb={[
          { title: "Services", href: "/services" },
          { title: "Dental Implants", href: "/services/dental-implants" },
          { title: "Multiple Tooth Implants", href: "/services/dental-implants/multiple-tooth" },
        ]}
      >
        <p className="text-muted-foreground">
          Restore your smile and oral function with our advanced multiple tooth implant solutions.
        </p>
      </PageHeader>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>About Multiple Tooth Implants</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Multiple tooth implants are an ideal solution for replacing several missing teeth. This treatment involves
            placing two or more titanium posts in the jawbone, topped with custom-made crowns or bridges that look and
            function like natural teeth.
          </p>
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary" />
              <span className="text-sm">Treatment duration: 3-6 months (including healing time)</span>
            </div>
            <div className="flex items-center gap-2">
              <CircleDollarSign className="w-4 h-4 text-primary" />
              <span className="text-sm">₹45,000 - ₹80,000 (varies based on number of implants)</span>
            </div>
          </div>
          <div className="space-y-2 mb-4">
            {[
              "Restores full chewing function",
              "Prevents bone loss and maintains facial structure",
              "More stable and comfortable than removable dentures",
              "Long-lasting solution for multiple missing teeth",
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
            <CardTitle>The Multiple Tooth Implant Process</CardTitle>
          </CardHeader>
          <CardContent>
            <ol className="list-decimal pl-5 space-y-2">
              <li>Initial consultation and treatment planning</li>
              <li>Implant placement surgery</li>
              <li>Healing and osseointegration period (3-6 months)</li>
              <li>Abutment placement</li>
              <li>Custom crown or bridge creation and attachment</li>
              <li>Final adjustments and follow-up care</li>
            </ol>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Why Choose Us for Multiple Tooth Implants</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Experienced implantologists led by Dr. Rockson Samuel</li>
              <li>State-of-the-art implant technology and materials</li>
              <li>Personalized treatment plans for optimal results</li>
              <li>Comprehensive aftercare and support</li>
              <li>Affordable pricing and flexible payment options</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <div className="text-center mt-8">
        <h2 className="text-2xl font-bold mb-4">Restore Your Smile with Multiple Tooth Implants</h2>
        <p className="text-muted-foreground mb-6">
          Book a consultation with Dr. Rockson Samuel to discuss how multiple tooth implants can transform your smile
          and improve your quality of life.
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
