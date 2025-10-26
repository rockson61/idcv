import Link from 'next/link'

interface ServiceSemanticContentProps {
  serviceName: string
  serviceSlug: string
}

export function ServiceSemanticContent({ serviceName, serviceSlug }: ServiceSemanticContentProps) {
  return (
    <section className="mb-16">
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-8 border border-teal-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Why Choose Indira Dental Clinic for {serviceName}?
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            At <Link href="/about-us" className="text-teal-600 hover:text-teal-700 font-semibold underline">Indira Dental Clinic</Link> in{' '}
            <Link href="/in/tamil-nadu/vellore" className="text-blue-600 hover:text-blue-700 font-semibold underline">Vellore</Link>,{' '}
            <Link href="/about-us/dr-rockson-samuel" className="text-teal-600 hover:text-teal-700 font-semibold underline">Dr. Rockson Samuel</Link>{' '}
            combines 15+ years of expertise with state-of-the-art technology to deliver exceptional {serviceName.toLowerCase()} results.
            We serve patients from{' '}
            <Link href="/in/tamil-nadu/vellore/gandhi" className="text-blue-600 hover:text-blue-700 font-semibold underline">Gandhi Nagar</Link>,{' '}
            <Link href="/in/tamil-nadu/vellore/katpadi" className="text-blue-600 hover:text-blue-700 font-semibold underline">Katpadi</Link>,{' '}
            <Link href="/in/tamil-nadu/vellore/bagayam" className="text-blue-600 hover:text-blue-700 font-semibold underline">Bagayam</Link>,
            and across Tamil Nadu.
          </p>

          {getServiceSpecificContent(serviceSlug)}

          <p className="text-gray-700 leading-relaxed mb-4">
            Have questions about this treatment?{' '}
            <Link href="/ask-the-dentist" className="text-teal-600 hover:text-teal-700 font-semibold underline">Ask our dentist</Link>{' '}
            for expert advice,{' '}
            <Link href="/pricing" className="text-teal-600 hover:text-teal-700 font-semibold underline">check our pricing</Link>, or{' '}
            <Link href="/testimonials" className="text-teal-600 hover:text-teal-700 font-semibold underline">read patient testimonials</Link>.
            Ready to get started?{' '}
            <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-semibold underline">Book your consultation</Link>{' '}
            or call us at <a href="tel:7010650063" className="text-teal-600 hover:text-teal-700 font-semibold underline">7010650063</a>!
          </p>
        </div>
      </div>
    </section>
  )
}

function getServiceSpecificContent(slug: string) {
  const content: Record<string, JSX.Element> = {
    'root-canal-treatment': (
      <p className="text-gray-700 leading-relaxed mb-4">
        Our clinic uses advanced rotary endodontics for faster, more comfortable treatment. If you're experiencing{' '}
        <Link href="/conditions/tooth-decay" className="text-blue-600 hover:text-blue-700 font-semibold underline">severe tooth decay</Link>,{' '}
        <Link href="/conditions/tooth-abscess" className="text-blue-600 hover:text-blue-700 font-semibold underline">dental abscess</Link>, or{' '}
        <Link href="/conditions/tooth-sensitivity" className="text-blue-600 hover:text-blue-700 font-semibold underline">persistent tooth sensitivity</Link>,
        root canal therapy can save your natural tooth. After treatment, we recommend{' '}
        <Link href="/services/prosthodontics/dental-crowns" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental crowns</Link>{' '}
        to protect and strengthen the restored tooth. We also offer{' '}
        <Link href="/services/emergency-dentistry" className="text-teal-600 hover:text-teal-700 font-semibold underline">emergency dental care</Link>{' '}
        for severe cases.
      </p>
    ),
    'dental-implants': (
      <p className="text-gray-700 leading-relaxed mb-4">
        We provide comprehensive implant solutions including{' '}
        <Link href="/services/dental-implants/single-tooth-implants" className="text-teal-600 hover:text-teal-700 font-semibold underline">single tooth implants</Link>,{' '}
        <Link href="/services/implantology/all-on-4" className="text-teal-600 hover:text-teal-700 font-semibold underline">All-on-4 full arch restoration</Link>, and{' '}
        <Link href="/services/oral-surgery/bone-grafting" className="text-teal-600 hover:text-teal-700 font-semibold underline">bone grafting</Link>{' '}
        when needed. For patients with{' '}
        <Link href="/conditions/receding-gums" className="text-blue-600 hover:text-blue-700 font-semibold underline">receding gums</Link>{' '}
        or{' '}
        <Link href="/conditions/gum-disease" className="text-blue-600 hover:text-blue-700 font-semibold underline">gum disease</Link>,
        we first address periodontal health. We also welcome{' '}
        <Link href="/international-patients" className="text-teal-600 hover:text-teal-700 font-semibold underline">international patients</Link>{' '}
        for dental tourism with 60-70% cost savings.
      </p>
    ),
    'orthodontics': (
      <p className="text-gray-700 leading-relaxed mb-4">
        Whether you prefer{' '}
        <Link href="/services/orthodontics/invisalign" className="text-teal-600 hover:text-teal-700 font-semibold underline">Invisalign clear aligners</Link>,{' '}
        <Link href="/services/orthodontics/ceramic-braces" className="text-teal-600 hover:text-teal-700 font-semibold underline">ceramic braces</Link>, or{' '}
        <Link href="/services/orthodontics/traditional-braces" className="text-teal-600 hover:text-teal-700 font-semibold underline">traditional metal braces</Link>,
        we customize treatment for your needs. We also offer{' '}
        <Link href="/services/pediatric-dentistry" className="text-teal-600 hover:text-teal-700 font-semibold underline">pediatric orthodontics</Link>{' '}
        for children and teenagers. If you're concerned about{' '}
        <Link href="/conditions/bruxism" className="text-blue-600 hover:text-blue-700 font-semibold underline">teeth grinding (bruxism)</Link>,
        we provide custom nightguards alongside orthodontic treatment.
      </p>
    ),
    'cosmetic-dentistry': (
      <p className="text-gray-700 leading-relaxed mb-4">
        Transform your smile with our comprehensive cosmetic treatments including{' '}
        <Link href="/services/cosmetic-dentistry/teeth-whitening" className="text-teal-600 hover:text-teal-700 font-semibold underline">professional teeth whitening</Link>,{' '}
        <Link href="/services/cosmetic-dentistry/veneers" className="text-teal-600 hover:text-teal-700 font-semibold underline">porcelain veneers</Link>,{' '}
        <Link href="/services/cosmetic-dentistry/smile-makeover" className="text-teal-600 hover:text-teal-700 font-semibold underline">complete smile makeovers</Link>, and{' '}
        <Link href="/services/cosmetic-dentistry/bonding" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental bonding</Link>.
        We address cosmetic concerns from{' '}
        <Link href="/conditions/tooth-erosion" className="text-blue-600 hover:text-blue-700 font-semibold underline">tooth erosion</Link>{' '}
        to{' '}
        <Link href="/conditions/cracked-teeth" className="text-blue-600 hover:text-blue-700 font-semibold underline">cracked teeth</Link>.
      </p>
    ),
  }

  return content[slug] || (
    <p className="text-gray-700 leading-relaxed mb-4">
      We combine advanced technology with personalized care to ensure the best outcomes for every patient.
      Explore our full range of{' '}
      <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental services</Link>{' '}
      and learn about common{' '}
      <Link href="/conditions" className="text-blue-600 hover:text-blue-700 font-semibold underline">dental conditions</Link>{' '}
      we treat.
    </p>
  )
}
