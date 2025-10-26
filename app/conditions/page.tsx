// Add the import for RelatedLinks component
import { RelatedLinks } from "@/components/related-links"
import { getRelatedLinks } from "@/utils/generate-links"
import Link from "next/link"

export default function ConditionsPage() {
  return (
    <main className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Dental Conditions</h1>
      <p className="mb-4">This page provides information about various dental conditions.</p>

      <section className="container mx-auto my-12">
        <h2 className="text-2xl font-bold mb-6">Dental Conditions We Treat in Vellore</h2>
        <p className="mb-6">
          At <strong>Indira Dental Clinic</strong>, we diagnose and treat a wide range of dental conditions for patients
          from all areas of Vellore including{" "}
          <Link href="/in/tamil-nadu/vellore/gandhinagar" className="text-primary hover:underline">
            Gandhi Nagar
          </Link>
          ,{" "}
          <Link href="/in/tamil-nadu/vellore/katpadi" className="text-primary hover:underline">
            Katpadi
          </Link>
          , and{" "}
          <Link href="/in/tamil-nadu/vellore/bagayam" className="text-primary hover:underline">
            Bagayam
          </Link>
          .
        </p>

        <p className="mb-6">
          Our comprehensive treatments address common issues like{" "}
          <Link href="/conditions/tooth-decay" className="text-primary hover:underline">
            tooth decay
          </Link>
          ,{" "}
          <Link href="/conditions/gum-disease" className="text-primary hover:underline">
            gum disease
          </Link>
          , and{" "}
          <Link href="/conditions/missing-teeth" className="text-primary hover:underline">
            missing teeth
          </Link>
          . For severe cases of decay, we offer{" "}
          <Link href="/services/root-canal-treatment" className="text-primary hover:underline">
            root canal treatment
          </Link>{" "}
          and{" "}
          <Link href="/services/dental-crowns" className="text-primary hover:underline">
            dental crowns
          </Link>{" "}
          to restore your oral health.
        </p>

        <RelatedLinks
          title="Related Dental Services & Conditions"
          links={getRelatedLinks("/conditions", ["conditions", "services", "locations"])}
          variant="list"
        />
      </section>
    </main>
  )
}
