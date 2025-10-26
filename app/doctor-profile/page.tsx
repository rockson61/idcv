import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Dr. Rockson Samuel | Expert Dentist in Vellore | Indira Dental Clinic",
  description:
    "Meet Dr. Rockson Samuel, a highly qualified dentist with extensive experience in general, cosmetic, and restorative dentistry at Indira Dental Clinic in Vellore.",
}

export default function DoctorProfilePage() {
  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-6">Dr. Rockson Samuel</h1>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="md:col-span-1">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=300"
                alt="Dr. Rockson Samuel"
                width={300}
                height={400}
                className="w-full object-cover"
              />
            </div>

            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Qualifications</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>BDS - Bachelor of Dental Surgery</li>
                <li>MDS - Master of Dental Surgery (Prosthodontics)</li>
                <li>Fellowship in Implantology</li>
              </ul>
            </div>

            <div className="mt-4 bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold text-lg mb-2">Professional Memberships</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Indian Dental Association (IDA)</li>
                <li>Indian Prosthodontic Society</li>
                <li>Indian Society of Oral Implantologists</li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <div className="prose max-w-none">
              <h2 className="text-2xl font-semibold mb-4">About Dr. Rockson Samuel</h2>
              <p>
                Dr. Rockson Samuel is the founder and chief dental surgeon at Indira Dental Clinic in Vellore. With over
                15 years of experience in dentistry, Dr. Samuel has established himself as one of the leading dental
                practitioners in Tamil Nadu.
              </p>
              <p>
                After completing his Bachelor of Dental Surgery, Dr. Samuel pursued his Master's degree in
                Prosthodontics, specializing in advanced restorative procedures. He further enhanced his expertise with
                a Fellowship in Implantology from a prestigious international institute.
              </p>
              <p>
                Dr. Samuel is known for his gentle approach, precision, and commitment to staying updated with the
                latest advancements in dental technology and techniques. He believes in providing personalized care to
                each patient and takes time to understand their unique dental needs and concerns.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Areas of Expertise</h2>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <h3 className="font-medium">Cosmetic Dentistry</h3>
                  <p className="text-sm">Veneers, Teeth Whitening, Smile Makeovers</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <h3 className="font-medium">Implantology</h3>
                  <p className="text-sm">Single & Multiple Implants, All-on-4</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <h3 className="font-medium">Prosthodontics</h3>
                  <p className="text-sm">Crowns, Bridges, Dentures</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <h3 className="font-medium">Endodontics</h3>
                  <p className="text-sm">Root Canal Treatments</p>
                </div>
              </div>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Philosophy of Care</h2>
              <blockquote className="italic border-l-4 border-primary pl-4 py-2 my-4">
                "My goal is to provide comprehensive dental care that not only addresses immediate concerns but also
                promotes long-term oral health. I believe in educating my patients about preventive care and involving
                them in the decision-making process for their treatment."
              </blockquote>
              <p>
                Dr. Samuel is committed to creating a comfortable and stress-free environment for his patients. He takes
                special care with anxious patients and children, ensuring they have a positive dental experience.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Continuing Education</h2>
              <p>
                Dr. Samuel regularly attends national and international dental conferences, workshops, and training
                programs to stay abreast of the latest developments in dentistry. He has also conducted several
                workshops for dental professionals on advanced implant techniques and cosmetic procedures.
              </p>

              <h2 className="text-2xl font-semibold mt-8 mb-4">Patient Testimonials</h2>
              <div className="space-y-4 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="italic mb-2">
                    "Dr. Rockson is by far the best dentist I've ever visited. His gentle approach and clear
                    explanations made my root canal treatment much less stressful than I expected. The results were
                    excellent!"
                  </p>
                  <p className="font-medium">- Lakshmi R., Vellore</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="italic mb-2">
                    "I had severe dental anxiety before meeting Dr. Samuel. His patience and understanding helped me
                    overcome my fears. Now I don't miss my regular check-ups!"
                  </p>
                  <p className="font-medium">- Mohan K., Katpadi</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-primary/10 p-6 rounded-lg my-8">
          <h3 className="text-xl font-semibold mb-4">Schedule an Appointment with Dr. Rockson Samuel</h3>
          <p className="mb-4">
            Experience expert dental care tailored to your needs. Dr. Samuel is currently accepting new patients at
            Indira Dental Clinic in Vellore.
          </p>
          <p className="mb-4">
            <strong>Location:</strong>{" "}
            <a
              href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              Indira Dental Clinic, Vellore
            </a>
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg">
              <Link href="/contact">📅 Book Your Appointment</Link>
            </Button>
            <Button variant="outline" asChild size="lg">
              <Link href="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  )
}
