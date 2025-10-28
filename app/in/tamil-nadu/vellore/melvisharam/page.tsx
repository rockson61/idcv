import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Star, Users, Shield, Award, Clock, Navigation, CheckCircle } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { CTAWidget } from '@/components/widgets/cta-widget'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Best Dentist and Dental Clinic in Melvisharam, Vellore | Indira Dental Clinic',
  description: 'Expert dental services for Melvisharam. RCT, implants, braces by Dr. Rockson Samuel.',
  keywords: ['dentist Melvisharam', 'dental clinic Melvisharam Vellore'],
}

export default function MelvisharamPage() {
  const services = [{title:'Root Canal',price:'₹3,000-₹8,000',features:['Painless','Digital X-Ray']},{title:'Dental Implants',price:'₹25,000-₹45,000',features:['Titanium','Lifetime warranty']},{title:'Braces',price:'₹30,000-₹80,000',features:['Metal/Ceramic','Invisalign']},{title:'Cosmetic',price:'₹5,000-₹25,000',features:['Whitening','Veneers']}]
  return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50"><div className="container mx-auto px-4 py-12"><Breadcrumb items={[{title:'Home',href:'/'},{title:'India',href:'/in'},{title:'Tamil Nadu',href:'/in/tamil-nadu'},{title:'Vellore',href:'/in/tamil-nadu/vellore'},{title:'Melvisharam',href:'/in/tamil-nadu/vellore/melvisharam'}]} className="mb-8"/><h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Best Dentist and Dental Clinic in Melvisharam, Vellore</h1><section className="mb-12"><div className="grid md:grid-cols-4 gap-6">{services.map((s,i)=>(<ModernCard key={i}><ModernCardHeader><ModernCardTitle>{s.title}</ModernCardTitle></ModernCardHeader><ModernCardContent><p className="text-2xl font-bold text-teal-600 mb-4">{s.price}</p><ul className="space-y-2 text-sm">{s.features.map((f,j)=>(<li key={j} className="flex"><CheckCircle className="w-4 h-4 text-teal-500 mr-2 mt-1"/>{f}</li>))}</ul></ModernCardContent></ModernCard>))}</div></section><section className="mb-12"><ModernCard><ModernCardContent className="py-8"><div className="grid md:grid-cols-2 gap-8"><Image src="/dr-rockson-samuel-best-dentist-vellore.jpg" alt="Dr. Rockson" width={400} height={400} className="rounded-lg"/><div><h2 className="text-3xl font-bold mb-2">Dr. Rockson Samuel</h2><p className="text-xl text-teal-600 mb-4">BDS, MDS</p><p className="mb-4">15+ Years Experience</p><div className="flex items-center"><Star className="w-5 h-5 text-yellow-400 fill-current"/><span className="ml-2">4.9/5 Rating</span></div></div></div></ModernCardContent></ModernCard></section><section className="mb-12"><ModernCard><ModernCardHeader><ModernCardTitle className="flex items-center gap-2"><MapPin className="w-6 h-6 text-teal-600"/>Contact</ModernCardTitle></ModernCardHeader><ModernCardContent><p className="mb-4">Indira Dental Clinic<br/>Gandhi Nagar, Vellore<br/>Tamil Nadu - 632001</p><div className="flex items-center mb-2"><Phone className="w-5 h-5 text-teal-600 mr-3"/><span>+91 70106 50063</span></div><div className="flex items-center"><Clock className="w-5 h-5 text-teal-600 mr-3"/><span>Mon-Sun: 9 AM - 9 PM</span></div></ModernCardContent></ModernCard></section><section className="text-center mb-12"><ModernCard><ModernCardContent className="py-12"><h2 className="text-3xl font-bold mb-4">Book Appointment</h2><div className="flex flex-col sm:flex-row gap-4 justify-center"><Link href="/contact" className="inline-flex items-center px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold"><Phone className="w-5 h-5 mr-2"/>Call Now</Link><Link href="/services" className="inline-flex items-center px-8 py-3 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold"><Navigation className="w-5 h-5 mr-2"/>Services</Link></div></ModernCardContent></ModernCard></section>
        <PeopleAlsoSearchFor location="Melvisharam" city="Vellore" />

        <CTAWidget title="Start Today" description="Serving Melvisharam patients." primaryAction={{text:"Book",href:"/contact"}} secondaryAction={{text:"Ask",href:"/ask-the-dentist/submit"}} benefits={["15+ years experience","Modern equipment","From Melvisharam"]} showRating={true}/></div></div>)
}
