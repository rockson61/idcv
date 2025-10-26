import { ModernCard } from '@/components/ui/modern-card';
import { Star, Quote, User, Calendar, MapPin, Phone } from 'lucide-react';
import { RelevantQAWidget } from "@/components/widgets/relevant-qa-widget"
import { CompactServiceWidget } from "@/components/widgets/compact-service-widget"
import Image from 'next/image';

interface ModernTestimonialsSectionProps {
  locationName?: string;
}

export function ModernTestimonialsSection({ locationName = 'Vellore' }: ModernTestimonialsSectionProps) {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Gandhi Nagar, Vellore',
      treatment: 'Root Canal Treatment',
      rating: 5,
      date: '2 weeks ago',
      image: '/indian-woman-smiling.png',
      text: 'Dr. Rockson Samuel made my root canal treatment completely painless. The clinic is modern and the staff is very friendly. Highly recommended!',
      verified: true,
    },
    {
      name: 'Rajesh Kumar',
      location: 'Katpadi, Vellore',
      treatment: 'Dental Implants',
      rating: 5,
      date: '1 month ago',
      image: '/indian-professional-man.png',
      text: 'I had two dental implants done here. The procedure was smooth and the results are amazing. My smile looks natural and beautiful now.',
      verified: true,
    },
    {
      name: 'Meera Devi',
      location: 'Arcot, Vellore',
      treatment: 'Teeth Whitening',
      rating: 5,
      date: '3 weeks ago',
      image: '/indian-woman-happy.jpg',
      text: 'The teeth whitening treatment exceeded my expectations. My teeth are several shades whiter and the process was comfortable.',
      verified: true,
    },
    {
      name: 'Vikram Singh',
      location: 'Ranipet',
      treatment: 'Orthodontic Treatment',
      rating: 5,
      date: '2 months ago',
      image: '/young-indian-man.png',
      text: 'I am halfway through my braces treatment and already seeing great results. Dr. Samuel is very knowledgeable and explains everything clearly.',
      verified: true,
    },
    {
      name: 'Sunita Reddy',
      location: 'Jolarpet',
      treatment: 'Cosmetic Dentistry',
      rating: 5,
      date: '1 week ago',
      image: '/indian-woman-middle-aged.jpg',
      text: 'The veneers treatment transformed my smile completely. The clinic uses the latest technology and the results are outstanding.',
      verified: true,
    },
    {
      name: 'Anand Patel',
      location: 'Chennai',
      treatment: 'Dental Tourism',
      rating: 5,
      date: '3 weeks ago',
      image: '/indian-man-smiling.png',
      text: 'I came from Chennai for dental implants. The quality of care and the cost savings made it worth the trip. Excellent service!',
      verified: true,
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
            <Quote className="w-4 h-4 mr-2" />
            Patient Success Stories
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
            What Our Patients Say About Us
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our patients have to say about their 
            experience at Indira Dental Clinic in {locationName}.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <ModernCard
              key={index}
              variant="elevated"
              hover={true}
              className="p-6 relative overflow-hidden"
            >
              {/* Quote Icon */}
              <div className="absolute top-4 right-4 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <Quote className="w-4 h-4 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent-400 fill-current" />
                ))}
                <span className="ml-2 text-sm text-neutral-600">({testimonial.rating}/5)</span>
              </div>

              {/* Testimonial Text */}
              <p className="text-neutral-700 mb-6 leading-relaxed italic">
                "{testimonial.text}"
              </p>

              {/* Patient Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-bold text-neutral-900">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <div className="w-4 h-4 bg-success-500 rounded-full flex items-center justify-center">
                        <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    )}
                  </div>
                  <p className="text-sm text-neutral-600">{testimonial.treatment}</p>
                  <div className="flex items-center gap-2 text-xs text-neutral-500 mt-1">
                    <MapPin className="w-3 h-3" />
                    <span>{testimonial.location}</span>
                    <span>•</span>
                    <Calendar className="w-3 h-3" />
                    <span>{testimonial.date}</span>
                  </div>
                </div>
              </div>
            </ModernCard>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">5000+</div>
            <div className="text-neutral-600">Happy Patients</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">4.9/5</div>
            <div className="text-neutral-600">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
            <div className="text-neutral-600">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-neutral-600">Reviews</div>
          </div>
        </div>

        {/* Related Q&A and Services Widgets */}
        <div className="mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <RelevantQAWidget
              title="Patient Questions"
              questions={[
                {
                  id: '1',
                  title: 'What should I expect during my first visit?',
                  slug: 'first-dental-visit-expectations',
                  excerpt: 'Learn what to expect during your first visit to Indira Dental Clinic.',
                  helpfulVotes: 45,
                  views: 1200,
                  createdAt: '2023-12-26T10:30:00Z'
                },
                {
                  id: '2',
                  title: 'How do I prepare for dental treatment?',
                  slug: 'preparing-for-dental-treatment',
                  excerpt: 'Get tips on how to prepare for your dental treatment appointment.',
                  helpfulVotes: 38,
                  views: 980,
                  createdAt: '2023-12-25T14:15:00Z'
                },
                {
                  id: '3',
                  title: 'What payment options are available?',
                  slug: 'dental-treatment-payment-options',
                  excerpt: 'Learn about flexible payment plans and insurance options available.',
                  helpfulVotes: 42,
                  views: 1100,
                  createdAt: '2023-12-24T09:45:00Z'
                }
              ]}
              serviceName="dental care"
            />

            <CompactServiceWidget
              title="Popular Treatments"
              description="Most requested dental treatments by our patients."
              services={[
                { name: "Root Canal Treatment", slug: "root-canal-treatment", price: "₹3,000 - ₹8,000", duration: "1-2 hours" },
                { name: "Dental Implants", slug: "dental-implants", price: "₹25,000 - ₹45,000", duration: "2-3 hours" },
                { name: "Teeth Whitening", slug: "cosmetic-dentistry/teeth-whitening", price: "₹5,000 - ₹15,000", duration: "1-2 hours" },
                { name: "Dental Crowns", slug: "restorative-dentistry/crowns", price: "₹8,000 - ₹15,000", duration: "2 visits" }
              ]}
              ctaText="View All Services"
              ctaLink="/services"
            />
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <ModernCard variant="glass" className="p-8 bg-gradient-to-r from-primary-50 to-secondary-50">
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Ready to Join Our Happy Patients?
            </h3>
            <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
              Experience the same quality care and exceptional results that our patients rave about. 
              Book your appointment today and start your journey to a healthier, more beautiful smile.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:7010650063"
                className="inline-flex items-center justify-center px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors"
              >
                📞 Call: 7010650063
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 border-2 border-primary-600 text-primary-600 rounded-lg font-semibold hover:bg-primary-50 transition-colors"
              >
                📅 Book Appointment
              </a>
            </div>
          </ModernCard>
        </div>
      </div>
    </section>
  );
}
