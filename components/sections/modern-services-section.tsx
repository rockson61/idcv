import { ModernButton } from '@/components/ui/modern-button';
import { ModernCard } from '@/components/ui/modern-card';
import { 
  Smile, 
  Shield, 
  Zap, 
  Heart, 
  Baby, 
  ArrowRight, 
  CheckCircle,
  Clock,
  DollarSign,
  Phone,
  Calendar
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ModernServicesSectionProps {
  locationName?: string;
}

export function ModernServicesSection({ locationName = 'Vellore' }: ModernServicesSectionProps) {
  const services = [
    {
      icon: Shield,
      title: 'Root Canal Treatment',
      description: 'Pain-free RCT with advanced techniques. Single sitting & multi-visit options available.',
      image: '/root-canal-procedure.png',
      price: '₹3,000 - ₹8,000',
      duration: '1-2 hours',
      features: ['Single Sitting RCT', 'Painless Procedure', 'Digital X-Ray', 'Crown Included'],
      href: '/services/root-canal-treatment',
      popular: true,
      color: 'primary',
    },
    {
      icon: Smile,
      title: 'Dental Implants',
      description: 'Permanent tooth replacement with titanium implants. Lifetime warranty available.',
      image: '/dental-implant-stages.png',
      price: '₹25,000 - ₹45,000',
      duration: '3-6 months',
      features: ['Titanium Implants', 'Lifetime Warranty', 'Natural Look', 'Bone Grafting'],
      href: '/services/dental-implants',
      color: 'secondary',
    },
    {
      icon: Heart,
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with veneers, whitening, and smile makeovers.',
      image: '/cosmetic-dentistry-smile.jpg',
      price: '₹5,000 - ₹25,000',
      duration: '1-3 visits',
      features: ['Teeth Whitening', 'Veneers', 'Smile Makeover', 'Bonding'],
      href: '/services/cosmetic-dentistry',
      color: 'accent',
    },
    {
      icon: Zap,
      title: 'Orthodontics & Braces',
      description: 'Straighten teeth with traditional braces, ceramic braces, or Invisalign.',
      image: '/orthodontic-braces.jpg',
      price: '₹30,000 - ₹80,000',
      duration: '12-24 months',
      features: ['Metal Braces', 'Ceramic Braces', 'Invisalign', 'Retainers'],
      href: '/services/orthodontics',
      color: 'primary',
    },
    {
      icon: Baby,
      title: 'General Dentistry',
      description: 'Comprehensive dental care including checkups, cleanings, and preventive treatments.',
      image: '/dental-checkup.png',
      price: '₹500 - ₹3,000',
      duration: '30-60 mins',
      features: ['Dental Checkups', 'Teeth Cleaning', 'Fillings', 'Emergency Care'],
      href: '/services/general-dentistry',
      color: 'secondary',
    },
    {
      icon: Shield,
      title: 'Pediatric Dentistry',
      description: 'Specialized dental care for children with a gentle, child-friendly approach.',
      image: '/childrens-dental-exam.jpg',
      price: '₹800 - ₹2,500',
      duration: '30-45 mins',
      features: ['Child-Friendly Care', 'Preventive Treatment', 'Behavior Management', 'Growth Monitoring'],
      href: '/services/pediatric-dentistry',
      color: 'accent',
    },
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'primary':
        return {
          bg: 'bg-primary-50',
          text: 'text-primary-600',
          border: 'border-primary-200',
          button: 'bg-primary-600 hover:bg-primary-700',
        };
      case 'secondary':
        return {
          bg: 'bg-secondary-50',
          text: 'text-secondary-600',
          border: 'border-secondary-200',
          button: 'bg-secondary-600 hover:bg-secondary-700',
        };
      case 'accent':
        return {
          bg: 'bg-accent-50',
          text: 'text-accent-600',
          border: 'border-accent-200',
          button: 'bg-accent-600 hover:bg-accent-700',
        };
      default:
        return {
          bg: 'bg-primary-50',
          text: 'text-primary-600',
          border: 'border-primary-200',
          button: 'bg-primary-600 hover:bg-primary-700',
        };
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            <CheckCircle className="w-4 h-4 mr-2" />
            Comprehensive Dental Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            Expert Dental Care in <span className="text-primary-600">{locationName}</span>
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From routine checkups to complex procedures, we provide comprehensive dental care 
            using the latest technology and techniques. Your smile is our priority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color);
            
            return (
              <ModernCard
                key={index}
                variant="elevated"
                hover={true}
                className={`relative overflow-hidden group ${colors.border} border-2`}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                      Most Popular
                    </div>
                  </div>
                )}

                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  
                  {/* Service Icon */}
                  <div className={`absolute top-4 left-4 w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                </div>

                {/* Service Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{service.title}</h3>
                  <p className="text-neutral-600 mb-4 leading-relaxed">{service.description}</p>

                  {/* Price and Duration */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-success-600" />
                      <span className="font-bold text-success-600">{service.price}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-neutral-400" />
                      <span className="text-sm text-neutral-500">{service.duration}</span>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-success-500 flex-shrink-0" />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <ModernButton
                    variant="default"
                    className={`w-full ${colors.button} text-white`}
                    asChild
                  >
                    <Link href={service.href}>
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </ModernButton>
                </div>
              </ModernCard>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <ModernCard variant="glass" className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Need Help Choosing the Right Treatment?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Our experienced team is here to help you understand your options and create a 
              personalized treatment plan that fits your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <ModernButton size="lg" variant="gradient" asChild>
                <a href="tel:7010650063">
                  📞 Call for Consultation
                </a>
              </ModernButton>
              <ModernButton size="lg" variant="outline" asChild>
                <Link href="/contact">
                  📅 Book Appointment
                </Link>
              </ModernButton>
            </div>
          </ModernCard>
        </div>
      </div>
    </section>
  );
}
