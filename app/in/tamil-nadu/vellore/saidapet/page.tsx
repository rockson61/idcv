import { PeopleAlsoSearchFor } from "@/components/location/PeopleAlsoSearchFor"
import { Metadata } from 'next'
import Link from 'next/link'
import { ModernCard, ModernCardHeader, ModernCardTitle, ModernCardContent } from '@/components/ui/modern-card'
import { MapPin, Phone, Star, Clock, Navigation } from 'lucide-react'
import { Breadcrumb } from '@/components/ui/breadcrumb'
import { CTAWidget } from '@/components/widgets/cta-widget'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Best Dentist and Dental Clinic in Saidapet, Vellore | Indira Dental Clinic',
  description: 'Expert dental care for Saidapet. RCT, implants, braces.',
  keywords: ['dentist Saidapet', 'dental clinic Saidapet Vellore'],
}

export default function SaidapetPage() {
  const services = [{title:'RCT',price:'₹3,000-₹8,000'},{title:'Implants',price:'₹25,000-₹45,000'},{title:'Braces',price:'₹30,000-₹80,000'},{title:'Cosmetic',price:'₹5,000-₹25,000'}]
  return (<div className="min-h-screen bg-gradient-to-br from-blue-50 to-teal-50"><div className="container mx-auto px-4 py-12"><Breadcrumb items={[{title:'Home',href:'/'},{title:'India',href:'/in'},{title:'Tamil Nadu',href:'/in/tamil-nadu'},{title:'Vellore',href:'/in/tamil-nadu/vellore'},{title:'Saidapet',href:'/in/tamil-nadu/vellore/saidapet'}]} className="mb-8"/><h1 className="text-4xl md:text-5xl font-bold text-[#005f73] mb-6 leading-tight">Best Dentist and Dental Clinic in Saidapet, Vellore</h1><section className="mb-12"><div className="grid md:grid-cols-4 gap-6">{services.map((s,i)=>(<ModernCard key={i}><ModernCardHeader><ModernCardTitle>{s.title}</ModernCardTitle></ModernCardHeader><ModernCardContent><p className="text-2xl font-bold text-teal-600">{s.price}</p></ModernCardContent></ModernCard>))}</div></section><section className="mb-12"><ModernCard><ModernCardContent className="py-8"><div className="grid md:grid-cols-2 gap-8"><Image src="/dr-rockson-samuel-best-dentist-vellore.jpg" alt="Dr. Rockson" width={400} height={400} className="rounded-lg"/><div><h2 className="text-3xl font-bold">Dr. Rockson Samuel</h2><p className="text-xl text-teal-600">BDS, MDS</p><p className="mt-2">15+ Years</p><div className="flex items-center mt-4"><Star className="w-5 h-5 text-yellow-400 fill-current"/><span className="ml-2">4.9/5</span></div></div></div></ModernCardContent></ModernCard></section><section className="mb-12"><ModernCard><ModernCardHeader><ModernCardTitle className="flex items-center gap-2"><MapPin className="w-6 h-6 text-teal-600"/>Contact</ModernCardTitle></ModernCardHeader><ModernCardContent><p>Indira Dental Clinic<br/>Gandhi Nagar<br/>Vellore 632001</p><div className="flex items-center mt-4"><Phone className="w-5 h-5 text-teal-600 mr-3"/><span>+91 70106 50063</span></div><div className="flex items-center mt-2"><Clock className="w-5 h-5 text-teal-600 mr-3"/><span>9 AM - 9 PM</span></div></ModernCardContent></ModernCard></section><section className="text-center mb-12"><ModernCard><ModernCardContent className="py-12"><h2 className="text-3xl font-bold mb-4">Book Now</h2><Link href="/contact" className="inline-flex items-center px-8 py-3 bg-teal-600 text-white rounded-lg font-semibold"><Phone className="w-5 h-5 mr-2"/>Call</Link></ModernCardContent></ModernCard></section>
        <PeopleAlsoSearchFor location="Saidapet" city="Vellore" />

        <CTAWidget title="Dental Care" description="Serving Saidapet." primaryAction={{text:"Book",href:"/contact"}} secondaryAction={{text:"Ask",href:"/ask-the-dentist/submit"}} benefits={["Expert care","Modern tech"]} showRating={true}/></div></div>)
}
