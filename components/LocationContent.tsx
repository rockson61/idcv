import Link from "next/link"

interface LocationContentProps {
  locationName: string
}

export function LocationContent({ locationName }: LocationContentProps) {
  return (
    <section className="my-8">
      <h2 className="text-2xl font-bold mb-4">Expert Dental Care in {locationName}</h2>
      <p className="mb-4">
        Welcome to Indira Dental Clinic, your trusted provider of{" "}
        <Link href={`/services/general-dentistry`} className="text-primary hover:underline">
          comprehensive dental care in {locationName}
        </Link>
        . Our state-of-the-art facility offers a wide range of dental services to meet all your oral health needs.
      </p>
      <p className="mb-4">
        Led by{" "}
        <Link href="/about-us/dr-rockson-samuel" className="text-primary hover:underline">
          Dr. Rockson Samuel, the best dentist in {locationName}
        </Link>
        , our clinic is committed to providing exceptional dental care using the latest techniques and technologies.
      </p>
      <p className="mb-4">
        Whether you need{" "}
        <Link href={`/services/general-dentistry/check-ups`} className="text-primary hover:underline">
          routine check-ups
        </Link>
        ,{" "}
        <Link href={`/services/cosmetic-dentistry`} className="text-primary hover:underline">
          cosmetic dentistry in {locationName}
        </Link>
        , or{" "}
        <Link href={`/services/dental-implants`} className="text-primary hover:underline">
          advanced dental implant procedures
        </Link>
        , Dr. Rockson is here to help you achieve and maintain a healthy, beautiful smile.
      </p>
      <p>
        Experience the difference of personalized dental care at Indira Dental Clinic, conveniently located in{" "}
        {locationName}.{" "}
        <Link href="/contact" className="text-primary hover:underline">
          Schedule your appointment
        </Link>{" "}
        today and take the first step towards optimal oral health.
      </p>
    </section>
  )
}
