'use client'

import Link from 'next/link'

interface ConditionSemanticContentProps {
  conditionName: string
  conditionSlug: string
}

export function ConditionSemanticContent({ conditionName, conditionSlug }: ConditionSemanticContentProps) {
  return (
    <section className="mb-12">
      <div className="prose prose-lg max-w-none">
        <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-lg p-8 border border-blue-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Expert Treatment for {conditionName} in Vellore
          </h2>
          
          <p className="text-gray-700 leading-relaxed mb-4">
            At <Link href="/about-us" className="text-teal-600 hover:text-teal-700 font-semibold underline">Indira Dental Clinic</Link>,{' '}
            <Link href="/about-us/dr-rockson-samuel" className="text-teal-600 hover:text-teal-700 font-semibold underline">Dr. Rockson Samuel</Link>{' '}
            provides comprehensive diagnosis and treatment for {conditionName.toLowerCase()}. Serving patients across{' '}
            <Link href="/in/tamil-nadu/vellore" className="text-blue-600 hover:text-blue-700 font-semibold underline">Vellore</Link>{' '}
            including{' '}
            <Link href="/in/tamil-nadu/vellore/gandhi" className="text-blue-600 hover:text-blue-700 font-semibold underline">Gandhi Nagar</Link>,{' '}
            <Link href="/in/tamil-nadu/vellore/katpadi" className="text-blue-600 hover:text-blue-700 font-semibold underline">Katpadi</Link>, and{' '}
            <Link href="/in/tamil-nadu/vellore/sathuvachari" className="text-blue-600 hover:text-blue-700 font-semibold underline">Sathuvachari</Link>.
          </p>

          {getConditionSpecificContent(conditionSlug)}

          <p className="text-gray-700 leading-relaxed">
            Don't let {conditionName.toLowerCase()} affect your quality of life.{' '}
            <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-semibold underline">Schedule your consultation</Link>{' '}
            today or{' '}
            <Link href="/ask-the-dentist" className="text-teal-600 hover:text-teal-700 font-semibold underline">ask our dentist</Link>{' '}
            your questions. Call <a href="tel:7010650063" className="text-teal-600 hover:text-teal-700 font-semibold underline">7010650063</a>{' '}
            for immediate assistance.
          </p>
        </div>
      </div>
    </section>
  )
}

function getConditionSpecificContent(slug: string) {
  const content: Record<string, JSX.Element> = {
    'tooth-decay': (
      <p className="text-gray-700 leading-relaxed mb-4">
        We treat tooth decay with{' '}
        <Link href="/services/general-dentistry/fillings" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental fillings</Link>,{' '}
        <Link href="/services/root-canal-treatment" className="text-teal-600 hover:text-teal-700 font-semibold underline">root canal treatment</Link>{' '}
        for advanced cases, and{' '}
        <Link href="/services/prosthodontics/dental-crowns" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental crowns</Link>{' '}
        for restoration. Prevention is key -{' '}
        <Link href="/services/general-dentistry/check-ups" className="text-teal-600 hover:text-teal-700 font-semibold underline">regular dental checkups</Link>{' '}
        help catch cavities early before they become serious.
      </p>
    ),
    'gum-disease': (
      <p className="text-gray-700 leading-relaxed mb-4">
        Our comprehensive{' '}
        <Link href="/services/periodontics" className="text-teal-600 hover:text-teal-700 font-semibold underline">periodontal treatment</Link>{' '}
        includes{' '}
        <Link href="/services/periodontics/scaling-root-planing" className="text-teal-600 hover:text-teal-700 font-semibold underline">scaling and root planing</Link>,{' '}
        <Link href="/services/periodontics/gum-surgery" className="text-teal-600 hover:text-teal-700 font-semibold underline">gum surgery</Link>,
        and{' '}
        <Link href="/services/periodontics/gum-grafting" className="text-teal-600 hover:text-teal-700 font-semibold underline">gum grafting</Link>{' '}
        for advanced cases. Left untreated, gum disease can lead to{' '}
        <Link href="/conditions/receding-gums" className="text-blue-600 hover:text-blue-700 font-semibold underline">receding gums</Link>{' '}
        and tooth loss requiring{' '}
        <Link href="/services/dental-implants" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental implants</Link>.
      </p>
    ),
    'tooth-sensitivity': (
      <p className="text-gray-700 leading-relaxed mb-4">
        Treatment options include{' '}
        <Link href="/services/pediatric-dentistry/fluoride-treatment" className="text-teal-600 hover:text-teal-700 font-semibold underline">fluoride treatments</Link>,{' '}
        <Link href="/services/cosmetic-dentistry/bonding" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental bonding</Link>{' '}
        for exposed roots, and{' '}
        <Link href="/services/periodontics/gum-grafting" className="text-teal-600 hover:text-teal-700 font-semibold underline">gum grafting</Link>{' '}
        for{' '}
        <Link href="/conditions/receding-gums" className="text-blue-600 hover:text-blue-700 font-semibold underline">gum recession</Link>.
        In severe cases,{' '}
        <Link href="/services/root-canal-treatment" className="text-teal-600 hover:text-teal-700 font-semibold underline">root canal therapy</Link>{' '}
        may be needed.
      </p>
    ),
    'bad-breath': (
      <p className="text-gray-700 leading-relaxed mb-4">
        We identify underlying causes like{' '}
        <Link href="/conditions/gum-disease" className="text-blue-600 hover:text-blue-700 font-semibold underline">gum disease</Link>,{' '}
        <Link href="/conditions/tooth-decay" className="text-blue-600 hover:text-blue-700 font-semibold underline">tooth decay</Link>, or{' '}
        <Link href="/conditions/dry-mouth" className="text-blue-600 hover:text-blue-700 font-semibold underline">dry mouth</Link>.
        Treatment may include{' '}
        <Link href="/services/periodontics" className="text-teal-600 hover:text-teal-700 font-semibold underline">professional deep cleaning</Link>,{' '}
        <Link href="/services/general-dentistry/fillings" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental fillings</Link>,
        or specialized medications.
      </p>
    ),
    'bruxism': (
      <p className="text-gray-700 leading-relaxed mb-4">
        We provide custom night guards to protect your teeth from grinding damage. If bruxism has already caused{' '}
        <Link href="/conditions/cracked-teeth" className="text-blue-600 hover:text-blue-700 font-semibold underline">cracked teeth</Link>{' '}
        or{' '}
        <Link href="/conditions/tooth-sensitivity" className="text-blue-600 hover:text-blue-700 font-semibold underline">tooth sensitivity</Link>,
        we offer restorative treatments like{' '}
        <Link href="/services/prosthodontics/dental-crowns" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental crowns</Link>{' '}
        and{' '}
        <Link href="/services/cosmetic-dentistry/bonding" className="text-teal-600 hover:text-teal-700 font-semibold underline">bonding</Link>.
      </p>
    ),
    'tooth-abscess': (
      <p className="text-gray-700 leading-relaxed mb-4">
        Dental abscesses require urgent{' '}
        <Link href="/services/emergency-dentistry" className="text-teal-600 hover:text-teal-700 font-semibold underline">emergency dental care</Link>.
        Treatment typically involves{' '}
        <Link href="/services/root-canal-treatment" className="text-teal-600 hover:text-teal-700 font-semibold underline">root canal therapy</Link>,
        antibiotics, and drainage. In severe cases,{' '}
        <Link href="/services/oral-surgery/tooth-extraction" className="text-teal-600 hover:text-teal-700 font-semibold underline">tooth extraction</Link>{' '}
        may be necessary, followed by{' '}
        <Link href="/services/dental-implants" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental implant</Link>{' '}
        replacement.
      </p>
    ),
  }

  return content[slug] || (
    <p className="text-gray-700 leading-relaxed mb-4">
      We provide evidence-based treatment using modern techniques and technology. Explore all our{' '}
      <Link href="/services" className="text-teal-600 hover:text-teal-700 font-semibold underline">dental services</Link>{' '}
      and learn about related{' '}
      <Link href="/conditions" className="text-blue-600 hover:text-blue-700 font-semibold underline">dental conditions</Link>.
    </p>
  )
}
