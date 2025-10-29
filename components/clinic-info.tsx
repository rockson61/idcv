import { MapPin, Phone, Mail, Clock } from "lucide-react"

interface ClinicInfoProps {
  variant?: "full" | "compact"
  showHours?: boolean
  showEmail?: boolean
  className?: string
}

export function ClinicInfo({ variant = "full", showHours = true, showEmail = true, className = "" }: ClinicInfoProps) {
  const hours = [
    { day: "Monday", hours: "10 am–8 pm" },
    { day: "Tuesday", hours: "10 am–8 pm" },
    { day: "Wednesday", hours: "10 am–8 pm" },
    { day: "Thursday", hours: "10 am–8 pm" },
    { day: "Friday", hours: "10 am–8 pm" },
    { day: "Saturday", hours: "10 am–8 pm" },
    { day: "Sunday", hours: "10 am–1:30 pm" },
  ]

  return (
    <div className={`clinic-info ${className}`}>
      {variant === "full" && <h3 className="text-xl font-bold mb-3">Indira Dental Clinic</h3>}

      <div className="flex items-start gap-2 mb-2">
        <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0 text-blue-600" />
        <address className="not-italic">
          3rd Floor, 54, Katpadi Main Rd, Suthanthira Ponvizha Nagar, Gandhi Nagar, Vellore, Tamil Nadu 632006
        </address>
      </div>

      <div className="flex items-center gap-2 mb-2">
        <Phone className="h-5 w-5 flex-shrink-0 text-blue-600" />
        <a href="tel:7010650063" className="hover:underline">
          7010650063
        </a>
      </div>

      {showEmail && (
        <div className="flex items-center gap-2 mb-2">
          <Mail className="h-5 w-5 flex-shrink-0 text-blue-600" />
          <a href="mailto:rockson68@hotmail.com" className="hover:underline">
            rockson68@hotmail.com
          </a>
        </div>
      )}

      {showHours && (
        <div className="mt-4">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="h-5 w-5 flex-shrink-0 text-blue-600" />
            <span className="font-medium">Clinic Hours</span>
          </div>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-1 ml-7">
            {hours.map((item) => (
              <li key={item.day} className="flex justify-between">
                <span>{item.day}</span>
                <span>{item.hours}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {variant === "full" && (
        <div className="mt-4 ml-7">
          <p className="font-medium">Dentist: Dr. Rockson Samuel, General Dentist</p>
          <p className="text-sm text-gray-600 mt-1">
            Top Dentist in Vellore for RCT, Braces, Implants, & Dental Fillings
          </p>
        </div>
      )}
    </div>
  )
}
