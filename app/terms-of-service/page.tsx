import { PageTemplate } from "@/components/PageTemplate"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

export default function TermsOfServicePage() {
  return (
    <PageTemplate
      title="Terms of Service | Indira Dental Clinic Vellore"
      description="Read our terms of service to understand the conditions of using Indira Dental Clinic's website and services."
      canonicalUrl="https://www.dentalclinicinvellore.in/terms-of-service"
      breadcrumbItems={[
        { name: "Home", href: "/" },
        { name: "Terms of Service", href: "/terms-of-service" },
      ]}
      pageHeading="Terms of Service"
      pageSubheading="Last updated: May 1, 2024"
    >
      <Card className="mt-8">
        <CardContent className="prose max-w-none p-6">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using the Indira Dental Clinic website and services, you agree to be bound by these Terms
            of Service. If you do not agree to these terms, please do not use our website or services.
          </p>

          <h2>2. Use of Website</h2>
          <p>
            You agree to use our website for lawful purposes only and in a way that does not infringe upon or restrict
            others' use and enjoyment of the website.
          </p>

          <h2>3. Medical Disclaimer</h2>
          <p>
            The information provided on our website is for general informational purposes only and should not be
            considered as medical advice. Always consult with a qualified dental professional for specific medical
            advice.
          </p>

          <h2>4. Appointment Booking</h2>
          <p>
            While we strive to honor all appointments booked through our website, we reserve the right to reschedule or
            cancel appointments due to unforeseen circumstances. We will make every effort to notify you in advance of
            any changes.
          </p>

          <h2>5. Payment and Insurance</h2>
          <p>
            Payment is due at the time of service unless prior arrangements have been made. We accept various forms of
            payment and work with most insurance providers. It is your responsibility to understand your insurance
            coverage.
          </p>

          <h2>6. Privacy Policy</h2>
          <p>
            Your use of our website and services is also governed by our Privacy Policy. Please review our{" "}
            <Link href="/privacy-policy" className="text-primary hover:underline">
              Privacy Policy
            </Link>{" "}
            to understand how we collect, use, and protect your information.
          </p>

          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website, including text, graphics, logos, and images, is the property of Indira Dental
            Clinic and protected by copyright laws.
          </p>

          <h2>8. Limitation of Liability</h2>
          <p>
            Indira Dental Clinic shall not be liable for any direct, indirect, incidental, consequential, or punitive
            damages arising out of your access to, or use of, the website and services.
          </p>

          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms of Service at any time. We will post the updated terms on this
            page with a new effective date.
          </p>

          <h2>10. Governing Law</h2>
          <p>
            These Terms of Service shall be governed by and construed in accordance with the laws of Tamil Nadu, India,
            without regard to its conflict of law provisions.
          </p>

          <h2>11. Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at:{" "}
            <Link href="mailto:info@indiradental.com" className="text-primary hover:underline">
              info@indiradental.com
            </Link>
          </p>
        </CardContent>
      </Card>
    </PageTemplate>
  )
}
