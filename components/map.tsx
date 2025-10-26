import { MapPin } from "lucide-react"

export function Map() {
  return (
    <section className="py-20 bg-muted/40">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Visit Our Clinic</h2>
        <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2875534666364!2d79.1370592!3d12.953442599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad394e9843620f%3A0xc7a4b2fb0991e086!2sIndira%20Dental%20Clinic%20%7C%20Dr%20Rockson%20Samuel%20%7C%20Top%20Dentist%20in%20Vellore%20for%20RCT%2C%20Braces%2C%20Implants%2C%20%26%20Dental%20Fillings!5e0!3m2!1sen!2sin!4v1735776203255!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="text-center mt-4">
          <a
            href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary hover:underline"
          >
            <MapPin className="h-4 w-4 mr-1" />
            View on Google Maps
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          Visit Our{" "}
          <a href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69" target="_blank" rel="noopener noreferrer">
            Dental Clinic in Vellore
          </a>
        </h2>
        <p className="mb-4">
          Experience top-notch dental care near VIT University. Our clinic is conveniently located to serve patients
          from all around Vellore, including Gandhi Nagar and Katpadi.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <a
            href="tel:+917010650063"
            className="inline-flex items-center px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            Call Now
          </a>
          <a
            href="https://maps.app.goo.gl/mckxYfwVuYhkzPg69"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            Get Directions
          </a>
        </div>
      </div>
    </section>
  )
}

export function LocationMap() {
  return <Map />
}
