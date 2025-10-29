import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function FooterContent() {
  return (
    <div className="mt-8 text-sm text-white">
      <h1 className="text-2xl font-bold mb-4 text-primary">
        Find the Right Dentist for Your Needs at Indira Dental Clinic in Vellore
      </h1>

      <p className="mb-4">
        Vellore is home to some of the <strong>best dental clinics</strong>, offering top-notch services for patients
        seeking quality <strong>dental care</strong>. Whether you're looking for a <strong>dentist in Vellore</strong>{" "}
        for routine checkups, <strong>dental implants</strong>, or <strong>cosmetic dentistry</strong>, this guide will
        help you find the best options available. We cover everything from <strong>dental procedures</strong> to{" "}
        <strong>affordable dental care</strong>, ensuring you make an informed decision.
      </p>

      <Accordion type="single" collapsible className="w-full mb-6">
        <AccordionItem value="why-choose">
          <AccordionTrigger className="text-lg font-semibold">
            <div className="text-lg font-semibold m-0">Why Choose a Dental Clinic in Vellore?</div>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Vellore is known for its <strong>top dentists</strong> and advanced <strong>dental care</strong>{" "}
              facilities. The city offers <strong>affordable dental care</strong> without compromising on quality. Many
              clinics use cutting-edge technology for treatments like <strong>dental implants</strong>,
              <strong>root canal treatment</strong>, and <strong>cosmetic dental</strong> procedures.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="top-clinics">
          <AccordionTrigger className="text-lg font-semibold">
            <div className="text-lg font-semibold m-0">Top Dental Clinics in Vellore</div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Indira Dental Clinic</strong> – Known for <strong>affordable dental care</strong> and expert{" "}
                <strong>dentists in Vellore</strong>.
              </li>
              <li>
                <strong>Swetha Dental Clinic</strong> – Offers specialized treatments like <strong>braces</strong>,{" "}
                <strong>dental crowns</strong>, and <strong>root canal treatment</strong>.
              </li>
              <li>
                <strong>Nathan Dental Clinic</strong> – One of the <strong>best dental hospitals in Vellore</strong>,
                providing comprehensive care.
              </li>
              <li>
                <strong>Rajan Dental Clinic</strong> – Famous for <strong>cosmetic dentistry</strong> and{" "}
                <strong>oral surgery</strong>.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="services">
          <AccordionTrigger className="text-lg font-semibold">
            <div className="text-lg font-semibold m-0">What Services Do Vellore Dental Clinics Offer?</div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              A <strong>dental clinic in Vellore</strong> provides a <strong>range of dental services</strong>,
              including:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>General Dentistry</strong>: <strong>Dental checkups</strong>, <strong>fillings</strong>, and{" "}
                <strong>preventive care</strong>.
              </li>
              <li>
                <strong>Cosmetic Dentistry</strong>: <strong>Teeth whitening</strong>, <strong>veneers</strong>, and{" "}
                <strong>dental crowns</strong>.
              </li>
              <li>
                <strong>Restorative Dentistry</strong>: <strong>Dental implants</strong>, <strong>bridges</strong>, and{" "}
                <strong>root canal treatment</strong>.
              </li>
              <li>
                <strong>Emergency Dental Care</strong>: Quick relief for <strong>dental emergencies</strong> like
                toothaches or broken teeth.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="find-best">
          <AccordionTrigger className="text-lg font-semibold">
            <div className="text-lg font-semibold m-0">How to Find the Best Dentist in Vellore?</div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Finding the <strong>best dentist in Vellore</strong> requires considering:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Experience & Qualifications</strong> – Check their background and patient reviews.
              </li>
              <li>
                <strong>Clinic Facilities</strong> – Ensure modern equipment and hygienic practices.
              </li>
              <li>
                <strong>Treatment Costs</strong> – Compare prices across different{" "}
                <strong>dental clinics near Vellore</strong>.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="common-problems">
          <AccordionTrigger className="text-lg font-semibold">
            <div className="text-lg font-semibold m-0">Common Dental Problems & Treatments</div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Some of the most common <strong>dental issues</strong> treated in <strong>Vellore dental clinics</strong>{" "}
              include:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Tooth Decay</strong> – Treated with <strong>dental fillings</strong> and{" "}
                <strong>root canal therapy</strong>.
              </li>
              <li>
                <strong>Gum Disease</strong> – Managed with <strong>deep cleaning</strong> and preventive care.
              </li>
              <li>
                <strong>Missing Teeth</strong> – Restored with <strong>dental implants</strong> or{" "}
                <strong>bridges</strong>.
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card className="mb-6">
        <CardContent className="pt-6">
          <div className="text-xl font-bold mb-4">Cost of Dental Treatments in Vellore</div>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Treatment</TableHead>
                <TableHead>Price Range (₹)</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">Dental Implants</TableCell>
                <TableCell>₹30,000 - ₹60,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Root Canal Treatment</TableCell>
                <TableCell>₹5,000 - ₹12,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Braces</TableCell>
                <TableCell>₹25,000 - ₹80,000</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className="font-medium">Teeth Whitening</TableCell>
                <TableCell>₹5,000 - ₹15,000</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full mb-6">
        <AccordionItem value="implants">
          <AccordionTrigger className="text-lg font-semibold">
            <div className="text-lg font-semibold m-0">Best Dental Implants in Vellore</div>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              For those needing <strong>dental implants</strong>, top clinics like <strong>Swetha Dental Clinic</strong>{" "}
              and
              <strong>Nathan Dental Clinic</strong> offer advanced procedures ensuring durability and a natural look.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="cosmetic">
          <AccordionTrigger className="text-lg font-semibold">
            <div className="text-lg font-semibold m-0">Cosmetic Dentistry Services in Vellore</div>
          </AccordionTrigger>
          <AccordionContent>
            <p className="mb-2">
              Enhance your smile with <strong>cosmetic dental</strong> services such as:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Teeth whitening</strong>
              </li>
              <li>
                <strong>Veneers and dental crowns</strong>
              </li>
              <li>
                <strong>Smile makeovers</strong>
              </li>
            </ul>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="emergency">
          <AccordionTrigger className="text-lg font-semibold">
            <div className="text-lg font-semibold m-0">Emergency Dental Care in Vellore</div>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              If you have a <strong>dental emergency</strong>, contact a <strong>dental hospital in Vellore</strong>{" "}
              such as
              <strong>Indira Dental Clinic</strong> and <strong>Rajan Dental Clinic</strong> immediately. Most clinics
              offer <strong>emergency dental services</strong> and allow you to <strong>schedule an appointment</strong>{" "}
              quickly to address urgent
              <strong>dental issues</strong>.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="appointment">
          <AccordionTrigger className="text-lg font-semibold">
            <div className="text-lg font-semibold m-0">Book Your Appointment Online</div>
          </AccordionTrigger>
          <AccordionContent>
            <p>
              Most <strong>dental clinics in Vellore</strong> allow you to <strong>book your appointment online</strong>{" "}
              for convenience. Whether you need a <strong>regular dental checkup</strong> or specialized treatment,
              scheduling in advance ensures timely care.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <div className="mb-6">
        <div className="text-lg font-bold mb-2">Dental Clinics in Vellore</div>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Vellore has some of the <strong>best dental hospitals</strong> offering <strong>quality dental care</strong>
            .
          </li>
          <li>
            Services range from <strong>general dentistry</strong> to <strong>dental surgery</strong> and{" "}
            <strong>cosmetic dentistry</strong>.
          </li>
          <li>
            <strong>Affordable dental care</strong> is available with various pricing options.
          </li>
          <li>
            Clinics like <strong>Indira Dental Clinic</strong>, <strong>Swetha Dental Clinic</strong>, and{" "}
            <strong>Nathan Dental Clinic</strong> are top choices.
          </li>
          <li>
            You can <strong>book an appointment online</strong> for convenience and quick access to top{" "}
            <strong>dentists in Vellore</strong>.
          </li>
        </ul>
      </div>

      <div className="mb-6">
        <div className="text-lg font-bold mb-2">Dental Knowledge Hub</div>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            Vellore has some of the <strong>best dental hospitals</strong> offering <strong>quality dental care</strong>
            .
          </li>
          <li>
            Services range from <strong>general dentistry</strong> to <strong>dental surgery</strong> and{" "}
            <strong>cosmetic dentistry</strong>.
          </li>
          <li>
            <strong>Affordable dental care</strong> is available with various pricing options.
          </li>
          <li>
            Clinics like <strong>Indira Dental Clinic</strong>, <strong>Swetha Dental Clinic</strong>, and{" "}
            <strong>Nathan Dental Clinic</strong> are top choices.
          </li>
          <li>
            You can <strong>book an appointment online</strong> for convenience and quick access to top{" "}
            <strong>dentists in Vellore</strong>.
          </li>
        </ul>
      </div>

      <p className="mb-6">
        For <strong>the best dental care in Vellore</strong>, consult a <strong>leading dental specialist</strong> and
        ensure your <strong>oral health</strong> remains in top condition!
      </p>
    </div>
  )
}
