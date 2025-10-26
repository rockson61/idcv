import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { ServiceSchema } from "@/components/seo/service-schema"
import { AlertTriangle, Phone, Clock, Shield, Heart, Zap } from "lucide-react"

export const metadata: Metadata = {
  title: "24/7 Emergency Dental Care in Vellore | Urgent Dental Treatment | Indira Dental Clinic",
  description:
    "Get immediate relief from dental emergencies at Indira Dental Clinic in Vellore. We offer same-day appointments for severe toothaches, broken teeth, and other dental emergencies.",
  keywords: [
    "emergency dental care vellore",
    "urgent dental treatment",
    "dental emergency",
    "toothache relief",
    "broken tooth repair",
  ],
}

export default function EmergencyCare() {
  return (
    <>
      <ServiceSchema
        serviceName="Emergency Dental Care"
        description="Immediate dental treatment for urgent oral health issues with same-day availability"
        price="1000 - 5000"
        duration="PT30M"
        url="/services/general-dentistry/emergency-care"
        imageUrl="/emergency-dental-care.jpg"
        category="Emergency Dentistry"
      />
      <ServicePageTemplate
        title="Emergency Dental Care"
        subtitle="Urgent Treatment"
        description="Dental emergencies can happen at any time and require immediate attention to relieve pain and prevent further damage. We offer same-day emergency appointments to address urgent oral health issues promptly."
        heroImage="/emergency-dental-care.png"
        price="₹1,000 - ₹5,000"
        duration="30-60 minutes"
        stats={[
          { value: "Same Day", label: "Appointments" },
          { value: "24/7", label: "Availability" },
          { value: "Immediate", label: "Pain Relief" },
        ]}
        warnings={[
          "Call us immediately at 07010650063 for urgent dental care",
          "Don't delay treatment - dental infections can spread quickly",
          "If you have severe swelling or difficulty breathing, go to the emergency room",
          "Save any knocked-out teeth in milk or saliva and bring them with you",
        ]}
        benefits={[
          {
            icon: Clock,
            title: "Same-Day Appointments",
            description: "We prioritize emergency cases and offer same-day appointments for patients in pain",
          },
          {
            icon: Shield,
            title: "Experienced Emergency Dentists",
            description: "Our team has extensive experience in handling various dental emergencies with precision",
          },
          {
            icon: Heart,
            title: "Advanced Technology",
            description:
              "We use state-of-the-art equipment for accurate diagnosis and effective treatment of emergencies",
          },
          {
            icon: Zap,
            title: "Immediate Pain Relief",
            description: "Quick treatment to alleviate severe dental pain and discomfort",
          },
          {
            icon: Phone,
            title: "24/7 Availability",
            description: "Contact us anytime for emergency dental care guidance and appointments",
          },
          {
            icon: AlertTriangle,
            title: "Comprehensive Care",
            description: "Beyond immediate relief, we provide long-term solutions to address the root cause",
          },
        ]}
        procedure={[
          {
            step: 1,
            title: "Emergency Assessment",
            description:
              "Dr. Rockson Samuel examines your condition and takes X-rays if needed to diagnose the problem",
            duration: "10 minutes",
          },
          {
            step: 2,
            title: "Pain Management",
            description: "Immediate pain relief through local anesthesia or prescribed medication",
            duration: "5-10 minutes",
          },
          {
            step: 3,
            title: "Emergency Treatment",
            description:
              "Appropriate treatment based on your condition - extraction, root canal, restoration, or other procedures",
            duration: "20-45 minutes",
          },
          {
            step: 4,
            title: "Follow-up Care Plan",
            description: "Instructions for aftercare and scheduling any necessary follow-up appointments",
            duration: "5 minutes",
          },
        ]}
        aftercare={[
          "Take prescribed pain medication and antibiotics as directed",
          "Apply ice packs to reduce swelling (15 minutes on, 15 minutes off)",
          "Eat soft foods and avoid chewing on the affected side",
          "Rinse gently with warm salt water after 24 hours",
          "Avoid smoking and alcohol during recovery",
          "Keep the area clean but avoid vigorous brushing near the treatment site",
          "Contact us immediately if pain worsens or you develop fever",
          "Attend all scheduled follow-up appointments",
        ]}
        faqs={[
          {
            question: "What qualifies as a dental emergency?",
            answer:
              "Dental emergencies include severe toothache, knocked-out teeth, broken or chipped teeth, lost fillings or crowns, dental abscesses, soft tissue injuries, and any condition causing severe pain or bleeding. If you're unsure, call us for guidance.",
          },
          {
            question: "What should I do if my tooth gets knocked out?",
            answer:
              "Handle the tooth by the crown (not the root), rinse it gently without scrubbing, and try to reinsert it. If that's not possible, keep it in milk or saliva and see us immediately. Time is critical - the best chance of saving the tooth is within 30 minutes.",
          },
          {
            question: "How quickly can I get an emergency appointment?",
            answer:
              "We prioritize emergency cases and typically offer same-day appointments. Call us at 07010650063 as soon as possible, and we'll do our best to see you immediately or within a few hours.",
          },
          {
            question: "What if I have a dental emergency after hours?",
            answer:
              "Call our emergency line at 07010650063. We provide guidance for after-hours emergencies and can arrange urgent care when needed. For life-threatening situations with severe swelling or difficulty breathing, go to the emergency room.",
          },
          {
            question: "How much does emergency dental care cost?",
            answer:
              "Emergency care costs vary depending on the treatment needed, typically ranging from ₹1,000 to ₹5,000. We'll provide a cost estimate before treatment and work with you to find affordable solutions.",
          },
          {
            question: "Can you save a broken tooth?",
            answer:
              "In many cases, yes! The treatment depends on the severity of the break. Small chips can be repaired with bonding, while larger breaks may need crowns or root canals. Bring any broken pieces with you to your appointment.",
          },
        ]}
        relatedServices={[
          {
            title: "Root Canal Treatment",
            href: "/services/root-canal-treatment",
            image: "/root-canal-treatment.jpg",
          },
          {
            title: "Tooth Extraction",
            href: "/services/general-dentistry/extractions",
            image: "/tooth-extraction.jpg",
          },
          {
            title: "Dental Crowns",
            href: "/services/restorative-dentistry/crowns",
            image: "/dental-crowns.jpg",
          },
        ]}
        testimonials={[
          {
            name: "Arun Patel",
            image: "/young-indian-man.png",
            rating: 5,
            text: "I had a severe toothache on a Sunday and they saw me the same day. Dr. Rockson provided immediate relief and fixed the problem. Excellent emergency care!",
            treatment: "Emergency Root Canal",
          },
          {
            name: "Lakshmi Iyer",
            image: "/middle-aged-indian-woman.png",
            rating: 5,
            text: "My son broke his front tooth playing cricket. They saw us within an hour and restored his tooth beautifully. Very grateful for their quick response!",
            treatment: "Emergency Restoration",
          },
        ]}
      />
    </>
  )
}
