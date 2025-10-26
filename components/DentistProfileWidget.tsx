import Image from "next/image"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Award, Calendar, Star, User, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export function DentistProfileWidget() {
  const name = "Dr. Rockson Samuel"
  const qualification = "BDS, PgDM, BDM | General Dentist & Community Leader - DentalReach"
  const experience = "15"
  const specializations = ["General Dentistry", "Implants", "Root Canal Treatment", "Orthodontics"]
  const imageUrl = "/professional-dentist-portrait.png"
  const rating = 5
  const reviewCount = 39
  const email = "rockson68@hotmail.com"
  const phone = "07010650063"

  return (
    <Card className="overflow-hidden">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-1 p-6 flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
            <Image
              src={imageUrl || "/placeholder.svg"}
              alt={name}
              width={160}
              height={160}
              className="object-cover w-full h-full"
            />
          </div>
          <h3 className="text-xl font-bold text-center">{name}</h3>
          <p className="text-blue-600 font-medium text-center mb-2">{qualification}</p>
          <div className="flex items-center justify-center mb-4">
            <div className="flex text-yellow-400 mr-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? "fill-current" : ""}`} />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {rating} ({reviewCount} reviews)
            </span>
          </div>
          {(email || phone) && (
            <div className="w-full space-y-2 mt-2">
              {email && (
                <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                  <Link href={`mailto:${email}`}>
                    <Mail className="h-4 w-4 mr-2" />
                    Email
                  </Link>
                </Button>
              )}
              {phone && (
                <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                  <Link href={`tel:${phone}`}>
                    <Phone className="h-4 w-4 mr-2" />
                    Call
                  </Link>
                </Button>
              )}
              <Button variant="outline" className="w-full flex items-center justify-center" asChild>
                <Link href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69" target="_blank" rel="noopener noreferrer">
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions
                </Link>
              </Button>
            </div>
          )}
        </div>

        <div className="md:col-span-2 p-6">
          <div className="mb-6">
            <h4 className="text-lg font-semibold mb-2 flex items-center">
              <User className="h-5 w-5 mr-2 text-blue-500" />
              About Dr. Rockson
            </h4>
            <p className="text-gray-700">
              Dr. Rockson Samuel is a highly skilled dental professional with {experience} years of experience.
              Specializing in {specializations.join(", ")}, Dr. Rockson is committed to providing exceptional dental
              care using the latest techniques and technologies. Patients appreciate his gentle approach and thorough
              explanations of treatment options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="flex items-start">
              <Award className="h-5 w-5 mr-2 text-purple-500 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-medium">Qualifications</h5>
                <p className="text-sm text-gray-600">{qualification}</p>
              </div>
            </div>

            <div className="flex items-start">
              <Calendar className="h-5 w-5 mr-2 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-medium">Experience</h5>
                <p className="text-sm text-gray-600">{experience} years</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-2">Specializations</h4>
            <div className="flex flex-wrap gap-2">
              {specializations.map((specialization, index) => (
                <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                  {specialization}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <Button asChild>
              <Link href="/about-us/dr-rockson-samuel">View Full Profile</Link>
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
