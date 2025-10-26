import type { Metadata } from "next"
import { PageTemplate } from "@/components/PageTemplate"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { CheckCircle, ArrowRight, Phone, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

// Ensure the metadata title is optimized
export const metadata: Metadata = {
  title: "Premium Invisible Aligners in Vellore | Clear Braces Alternative | Dr. Rockson Samuel",
  description:
    "Get a straighter smile discreetly with invisible aligners in Vellore. Clear, removable, and comfortable alternative to braces by Dr. Rockson Samuel.",
  keywords:
    "invisible aligners Vellore, clear aligners, transparent braces, Invisalign alternative, discreet orthodontics, adult braces Vellore, teeth straightening, Dr. Rockson Samuel orthodontist, removable aligners, smile correction Vellore",
}

export default function InvisibleAlignersPage() {
  return (
    <PageTemplate
      title="Invisible Aligners in Vellore"
      description="Straighten your teeth discreetly with custom-made clear aligners at Indira Dental Clinic in Vellore."
      canonicalUrl="https://www.indiradental.com/services/orthodontics/invisible-aligners"
      breadcrumbItems={[
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "Orthodontics", href: "/services/orthodontics" },
        { name: "Invisible Aligners", href: "/services/orthodontics/invisible-aligners" },
      ]}
      pageHeading="Invisible Aligners"
      pageSubheading="The clear, comfortable, and removable alternative to traditional braces for a straighter smile."
    >
      <div className="grid md:grid-cols-2 gap-8 mt-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">What Are Invisible Aligners?</h2>
          <p className="mb-4">
            <strong>Invisible aligners</strong> are a modern orthodontic treatment that uses a series of clear,
            custom-made, removable trays to gradually shift your teeth into proper alignment. Unlike traditional metal
            braces, these aligners are virtually invisible, making them a popular choice for adults and teens who want
            to straighten their teeth discreetly.
          </p>
          <p className="mb-4">
            At <strong>Indira Dental Clinic in Vellore</strong>, Dr. Rockson Samuel offers premium invisible aligner
            treatment using advanced 3D digital planning technology. Each set of aligners is precisely crafted to move
            your teeth in small increments until they reach their final, desired positions.
          </p>
          <p className="mb-4">
            This innovative approach to orthodontic treatment allows you to achieve a beautifully aligned smile without
            the aesthetic concerns and lifestyle restrictions associated with traditional braces.
          </p>

          <h2 className="text-2xl font-bold mt-8 mb-4">Benefits of Invisible Aligners</h2>
          <ul className="space-y-2 mb-6">
            {[
              "Nearly invisible - most people won't notice you're wearing them",
              "Removable for eating, drinking, brushing, and special occasions",
              "No dietary restrictions - enjoy all your favorite foods",
              "More comfortable than traditional braces - no wires or brackets",
              "Easier oral hygiene maintenance during treatment",
              "Fewer dental visits required - change aligners at home",
              "Digital treatment planning allows you to preview your results",
              "Effective for mild to moderate orthodontic issues",
            ].map((benefit, index) => (
              <li key={index} className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-lg overflow-hidden shadow-md">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Invisible aligners being placed on teeth, showing their clear, discreet appearance"
              width={600}
              height={400}
              className="w-full h-auto"
            />
            <div className="p-4 bg-muted">
              <p className="text-sm text-muted-foreground">
                Invisible aligners are custom-made clear trays that fit snugly over your teeth, gradually shifting them
                into proper alignment.
              </p>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Why Choose Indira Dental Clinic for Invisible Aligners?</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Advanced 3D digital scanning for precise treatment planning",
                  "Experienced orthodontist Dr. Rockson Samuel",
                  "Premium aligner materials for comfort and effectiveness",
                  "Personalized treatment plans for optimal results",
                  "Flexible payment options and financing available",
                  "Comprehensive aftercare and retention planning",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    <Phone className="mr-2 h-4 w-4" /> Schedule Consultation
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">The Invisible Aligner Treatment Process</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Initial Consultation",
              description:
                "Comprehensive examination including digital scans to determine if invisible aligners are right for you and discuss treatment goals.",
            },
            {
              title: "Digital Treatment Planning",
              description:
                "3D digital mapping of your current teeth positions and creation of a customized treatment plan showing the projected movement.",
            },
            {
              title: "Custom Aligner Fabrication",
              description:
                "Production of your personalized series of clear aligners based on the digital treatment plan.",
            },
            {
              title: "Aligner Delivery & Instructions",
              description:
                "Fitting of your first set of aligners with detailed instructions on wear time, care, and changing to new sets.",
            },
            {
              title: "Progress Monitoring",
              description:
                "Regular check-ups (typically every 6-8 weeks) to monitor your progress and provide new sets of aligners as needed.",
            },
            {
              title: "Completion & Retention",
              description:
                "Final assessment when treatment is complete and provision of retainers to maintain your new smile.",
            },
          ].map((step, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Comparing Orthodontic Treatment Options</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Feature</TableHead>
              <TableHead>Invisible Aligners</TableHead>
              <TableHead>Traditional Metal Braces</TableHead>
              <TableHead>Ceramic Braces</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Appearance</TableCell>
              <TableCell>Nearly invisible</TableCell>
              <TableCell>Very noticeable</TableCell>
              <TableCell>Less noticeable than metal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Removable</TableCell>
              <TableCell>Yes</TableCell>
              <TableCell>No</TableCell>
              <TableCell>No</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Comfort</TableCell>
              <TableCell>High - no wires or brackets</TableCell>
              <TableCell>Lower - may cause irritation</TableCell>
              <TableCell>Moderate - smoother than metal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Dietary Restrictions</TableCell>
              <TableCell>None - removable for eating</TableCell>
              <TableCell>Many restrictions</TableCell>
              <TableCell>Many restrictions</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Oral Hygiene</TableCell>
              <TableCell>Easy - remove to brush & floss</TableCell>
              <TableCell>Challenging</TableCell>
              <TableCell>Challenging</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Treatment Time</TableCell>
              <TableCell>6-18 months (average)</TableCell>
              <TableCell>18-24 months (average)</TableCell>
              <TableCell>18-24 months (average)</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Office Visits</TableCell>
              <TableCell>Every 6-8 weeks</TableCell>
              <TableCell>Every 4 weeks</TableCell>
              <TableCell>Every 4 weeks</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Best For</TableCell>
              <TableCell>Mild to moderate cases</TableCell>
              <TableCell>All cases, including complex</TableCell>
              <TableCell>All cases, including complex</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Is Invisible Aligner Treatment Right for You?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="w-5 h-5 text-primary mr-2" />
                Ideal Candidates
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Adults and teenagers with mild to moderate misalignment",
                  "Patients with spacing issues or gaps between teeth",
                  "Those with mild to moderate crowding of teeth",
                  "Patients with minor bite issues",
                  "Individuals who want a discreet orthodontic option",
                  "People with active social or professional lives",
                  "Those who can commit to wearing aligners 20-22 hours daily",
                  "Patients who previously had braces but experienced relapse",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <X className="w-5 h-5 text-destructive mr-2" />
                May Not Be Suitable For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "Patients with severe misalignment or complex bite issues",
                  "Cases requiring significant tooth rotation or vertical movement",
                  "Individuals with active gum disease or poor oral health",
                  "Patients with bridgework or certain types of dental restorations",
                  "Young children whose teeth are still developing",
                  "Those who may struggle with compliance (wearing 20-22 hours daily)",
                  "Patients requiring extraction or surgical intervention",
                  "Cases with significant jaw discrepancies",
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <X className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {[
            {
              question: "How much do invisible aligners cost in Vellore?",
              answer:
                "At Indira Dental Clinic in Vellore, invisible aligner treatment typically ranges from ₹45,000 to ₹150,000, depending on the complexity of your case and treatment duration. This is comparable to traditional braces while offering additional benefits of comfort and aesthetics. We offer flexible payment plans and financing options to make this investment in your smile more accessible.",
            },
            {
              question: "How long does invisible aligner treatment take?",
              answer:
                "Treatment duration varies based on individual needs, but most cases are completed within 6-18 months. Simple alignment issues may be resolved in as little as 6 months, while more complex cases may take longer. During your consultation with Dr. Rockson Samuel, you'll receive a personalized treatment timeline based on your specific orthodontic needs.",
            },
            {
              question: "Are invisible aligners painful?",
              answer:
                "Invisible aligners are generally more comfortable than traditional braces. You may experience some pressure or discomfort for a few days when switching to a new set of aligners, which is a sign that your teeth are moving. This mild discomfort can typically be managed with over-the-counter pain relievers if needed, but most patients find it minimal and temporary.",
            },
            {
              question: "How often do I need to wear my aligners?",
              answer:
                "For optimal results, you should wear your invisible aligners for 20-22 hours per day, removing them only for eating, drinking anything besides water, and cleaning your teeth. Consistent wear is crucial for treatment success and staying on schedule. The ability to remove aligners is a major advantage, but it also requires patient compliance to ensure effective treatment.",
            },
            {
              question: "How do I clean my invisible aligners?",
              answer:
                "Clean your aligners daily by gently brushing them with a soft toothbrush and lukewarm water. Avoid hot water as it can warp the plastic. Special aligner cleaning solutions or crystals are available, but avoid toothpaste as it can be abrasive and create scratches that harbor bacteria. Always rinse aligners thoroughly before reinserting them, and store them in their protective case when not in use.",
            },
            {
              question: "Will invisible aligners affect my speech?",
              answer:
                "Some patients experience a slight lisp when they first start wearing invisible aligners, but this typically resolves within a few days as you adjust to wearing them. Your tongue will quickly adapt to the presence of the aligners, and most people find that any speech changes are temporary and minimal.",
            },
          ].map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>
                <p>{faq.answer}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      <div className="mt-12 bg-muted p-6 rounded-lg">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Ready for a Straighter Smile Without Braces?</h2>;
          <p className="text-muted-foreground mt-2">
            Schedule a consultation with Dr. Rockson Samuel at Indira Dental Clinic in Vellore to see if invisible
            aligners are right for you.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">
              Book Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild size="lg">
            <Link href="tel:+919876543210">
              <Phone className="mr-2 h-4 w-4" /> Call (987) 654-3210
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Traditional Braces",
              description: "Classic metal braces for effective teeth alignment and complex orthodontic issues.",
              link: "/services/orthodontics/traditional-braces",
            },
            {
              title: "Ceramic Braces",
              description:
                "Less visible braces made of clear or tooth-colored materials for a more discreet appearance.",
              link: "/services/orthodontics/ceramic-braces",
            },
            {
              title: "Retainers",
              description: "Custom-made devices to maintain your new smile after orthodontic treatment.",
              link: "/services/orthodontics/retainers",
            },
          ].map((service, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <Button variant="outline" asChild>
                  <Link href={service.link}>
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-4">Expert Orthodontic Services in Vellore</h3>
        <p className="mb-4">
          Indira Dental Clinic, led by Dr. Rockson Samuel, is a leading provider of{" "}
          <Link href="/services/orthodontics" className="text-primary hover:underline">
            orthodontic services in Vellore
          </Link>
          . Our state-of-the-art clinic offers comprehensive orthodontic solutions using the latest technology and
          premium materials.
        </p>
        <p className="mb-4">
          We serve patients from all areas of Vellore including{" "}
          <Link href="/in/tamil-nadu/vellore/shenbaakkam" className="text-primary hover:underline">
            Shenbaakkam
          </Link>
          ,{" "}
          <Link href="/in/tamil-nadu/vellore/kosapettai" className="text-primary hover:underline">
            Kosapettai
          </Link>
          ,{" "}
          <Link href="/in/tamil-nadu/vellore/allapuram" className="text-primary hover:underline">
            Allapuram
          </Link>
          , and{" "}
          <Link href="/in/tamil-nadu/vellore/kamaraj-nagar" className="text-primary hover:underline">
            Kamaraj Nagar
          </Link>
          . Our convenient location at{" "}
          <a
            href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            123 Dental Street, Vellore
          </a>{" "}
          makes us accessible to patients throughout Tamil Nadu.
        </p>
        <p>
          For more information about invisible aligners or to schedule your consultation,{" "}
          <Link href="/contact" className="text-primary hover:underline">
            contact us
          </Link>{" "}
          today or call{" "}
          <a href="tel:+919876543210" className="text-primary hover:underline">
            (987) 654-3210
          </a>
          .
        </p>
      </div>
    </PageTemplate>
  )
}
