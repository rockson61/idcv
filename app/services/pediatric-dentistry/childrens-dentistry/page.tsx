import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Children's Dentistry | Pediatric Dental Care | Indira Dental Clinic Vellore",
  description:
    "Specialized dental care for children of all ages. Our gentle approach helps kids develop positive dental habits for a lifetime of healthy smiles.",
}

export default function ChildrensDentistryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Children's Dentistry</h1>
        <p className="text-lg text-gray-600">
          Specialized dental care for infants, children, and adolescents in a comfortable, child-friendly environment.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        <div className="md:col-span-2">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Child at dental appointment smiling"
            width={600}
            height={400}
            className="rounded-lg shadow-md mb-6"
          />

          <h2 id="importance" className="text-2xl font-semibold mb-4">
            The Importance of Early Dental Care
          </h2>
          <p className="mb-4">
            Establishing good dental habits early in life is crucial for your child's long-term oral health. The
            American Academy of Pediatric Dentistry recommends that children visit a dentist by their first birthday or
            when their first tooth appears. These early visits help:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Establish a "dental home" for your child</li>
            <li>Prevent early childhood cavities</li>
            <li>Educate parents on proper oral hygiene techniques</li>
            <li>Monitor growth and development</li>
            <li>Build positive associations with dental visits</li>
          </ul>

          <h2 id="services" className="text-2xl font-semibold mb-4 mt-8">
            Our Pediatric Dental Services
          </h2>
          <p className="mb-4">At Indira Dental Clinic, we offer comprehensive dental care for children of all ages:</p>

          <h3 id="preventive-care" className="text-xl font-medium mb-3 mt-6">
            Preventive Care
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Regular dental check-ups and cleanings</li>
            <li>Dental sealants to protect against cavities</li>
            <li>Fluoride treatments to strengthen enamel</li>
            <li>Oral hygiene education and demonstrations</li>
            <li>Nutritional counseling for dental health</li>
          </ul>

          <h3 id="diagnostic-services" className="text-xl font-medium mb-3 mt-6">
            Diagnostic Services
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Digital X-rays (with minimal radiation)</li>
            <li>Comprehensive oral examinations</li>
            <li>Growth and development monitoring</li>
            <li>Early orthodontic evaluations</li>
          </ul>

          <h3 id="restorative-treatments" className="text-xl font-medium mb-3 mt-6">
            Restorative Treatments
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Tooth-colored fillings for cavities</li>
            <li>Pulp therapy for damaged primary teeth</li>
            <li>Crowns for severely damaged teeth</li>
            <li>Space maintainers for premature tooth loss</li>
          </ul>

          <h3 id="emergency-care" className="text-xl font-medium mb-3 mt-6">
            Emergency Dental Care
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Treatment for dental injuries</li>
            <li>Management of dental pain</li>
            <li>Care for knocked-out or fractured teeth</li>
          </ul>

          <h2 id="approach" className="text-2xl font-semibold mb-4 mt-8">
            Our Child-Friendly Approach
          </h2>
          <p className="mb-4">
            We understand that visiting the dentist can be intimidating for children. Our team is specially trained to
            make dental visits positive and comfortable:
          </p>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Child-friendly environment with colorful décor and play areas</li>
            <li>"Tell-Show-Do" technique to familiarize children with procedures</li>
            <li>Simple, age-appropriate explanations</li>
            <li>Positive reinforcement and rewards</li>
            <li>Gentle touch and patience</li>
            <li>Distraction techniques like ceiling TVs and music</li>
          </ul>

          <h2 id="first-visit" className="text-2xl font-semibold mb-4 mt-8">
            What to Expect at Your Child's First Visit
          </h2>
          <p className="mb-4">
            Your child's first dental visit is primarily about getting them comfortable with the dentist and dental
            office. During this visit:
          </p>
          <ol className="list-decimal pl-6 mb-6 space-y-2">
            <li>We'll review your child's medical and dental history</li>
            <li>Perform a gentle examination of your child's teeth, jaws, bite, gums, and oral tissues</li>
            <li>Clean your child's teeth if needed and assess their fluoride needs</li>
            <li>Demonstrate proper cleaning techniques</li>
            <li>Discuss dental developmental issues and answer your questions</li>
            <li>Schedule the next check-up</li>
          </ol>

          <h2 id="home-care" className="text-2xl font-semibold mb-4 mt-8">
            Home Care Tips for Children's Teeth
          </h2>
          <h3 id="infants" className="text-xl font-medium mb-3 mt-6">
            For Infants (0-1 year)
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Clean gums with a soft, damp cloth after feedings</li>
            <li>Once teeth erupt, brush with a tiny smear of fluoride toothpaste</li>
            <li>Avoid putting baby to bed with a bottle</li>
          </ul>

          <h3 id="toddlers" className="text-xl font-medium mb-3 mt-6">
            For Toddlers (1-3 years)
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Brush teeth twice daily with a rice-grain sized amount of fluoride toothpaste</li>
            <li>Begin flossing when teeth touch</li>
            <li>Limit sugary snacks and drinks</li>
          </ul>

          <h3 id="children" className="text-xl font-medium mb-3 mt-6">
            For Children (3-6 years)
          </h3>
          <ul className="list-disc pl-6 mb-6 space-y-2">
            <li>Brush teeth twice daily with a pea-sized amount of fluoride toothpaste</li>
            <li>Help with brushing and flossing until age 7-8</li>
            <li>Encourage healthy eating habits</li>
          </ul>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg shadow-sm h-fit">
          <h3 className="text-xl font-semibold mb-4 text-primary">Schedule Your Child's Visit</h3>
          <p className="mb-4">
            Give your child the gift of a healthy smile. Contact Indira Dental Clinic today to schedule your child's
            dental appointment.
          </p>
          <div className="mb-6">
            <h4 className="font-medium mb-2">Contact Us</h4>
            <p className="mb-1">
              📞{" "}
              <a href="tel:+919876543210" className="text-blue-600 hover:underline">
                +91 98765 43210
              </a>
            </p>
            <p className="mb-1">
              ✉️{" "}
              <a href="mailto:info@indiradentalclinic.com" className="text-blue-600 hover:underline">
                info@indiradentalclinic.com
              </a>
            </p>
            <p>
              🗺️{" "}
              <a
                href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </p>
          </div>
          <Link
            href="/contact"
            className="block w-full bg-primary text-white text-center py-3 rounded-md hover:bg-primary/90 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>

      <div className="border-t pt-8 mt-8">
        <h2 id="faq" className="text-2xl font-semibold mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-6">
          <div>
            <h3 id="faq-first-visit" className="text-xl font-medium mb-2">
              When should my child first see a dentist?
            </h3>
            <p>
              The American Academy of Pediatric Dentistry recommends that children visit a dentist by their first
              birthday or when their first tooth appears, whichever comes first.
            </p>
          </div>

          <div>
            <h3 id="faq-baby-teeth" className="text-xl font-medium mb-2">
              Why are baby teeth important if they're just going to fall out?
            </h3>
            <p>
              Baby teeth are crucial for proper speech development, chewing food, and maintaining space for permanent
              teeth. They also help shape the face and guide permanent teeth into their correct positions. Decay or
              early loss of baby teeth can lead to problems with permanent teeth.
            </p>
          </div>

          <div>
            <h3 id="faq-afraid" className="text-xl font-medium mb-2">
              My child is afraid of the dentist. What can I do?
            </h3>
            <p>
              It's normal for children to feel anxious about dental visits. You can help by using positive language when
              discussing the dentist, avoiding sharing negative dental experiences, reading children's books about
              dental visits, and choosing a dentist experienced with children. Our team is specially trained to help
              anxious children feel comfortable.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
