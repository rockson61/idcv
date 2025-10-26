import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { Shield, Clock, Heart, Pill, Home, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Tooth Extraction in Vellore | Painless Tooth Removal | Dr. Rockson Samuel",
  description:
    "Safe, painless tooth extraction in Vellore by Dr. Rockson Samuel. Simple & surgical extractions, wisdom teeth removal. Advanced pain management. Book today!",
  keywords: [
    "tooth extraction vellore",
    "tooth removal",
    "wisdom teeth extraction",
    "painless extraction",
    "dental surgery vellore",
  ],
}

export default function ToothExtractionsPage() {
  return (
    <ServicePageTemplate
      title="Tooth Extraction"
      subtitle="Oral Surgery"
      description="When a tooth is too damaged to save, extraction may be the best option. We provide gentle, painless tooth removal with advanced anesthesia and careful post-operative care."
      heroImage="/placeholder.svg?height=400&width=600"
      price="₹800 - ₹5,000"
      duration="15-60 minutes"
      stats={[
        { value: "98%", label: "Success Rate" },
        { value: "Painless", label: "Procedure" },
        { value: "3-7 days", label: "Recovery" },
      ]}
      benefits={[
        {
          icon: Shield,
          title: "Pain Relief",
          description: "Removes source of severe pain and prevents spread of infection to other teeth",
        },
        {
          icon: Clock,
          title: "Quick Procedure",
          description: "Most extractions are completed in 15-45 minutes with minimal discomfort",
        },
        {
          icon: Heart,
          title: "Prevents Complications",
          description: "Stops infection spread, prevents bone loss, and protects adjacent teeth",
        },
        {
          icon: Pill,
          title: "Advanced Pain Control",
          description: "Multiple anesthesia options ensure you feel no pain during extraction",
        },
        {
          icon: Home,
          title: "Fast Recovery",
          description: "Most patients resume normal activities within 24-48 hours",
        },
        {
          icon: CheckCircle,
          title: "Replacement Options",
          description: "We discuss dental implants, bridges, or dentures to replace extracted teeth",
        },
      ]}
      procedure={[
        {
          step: 1,
          title: "Examination & X-rays",
          description:
            "Dr. Rockson Samuel examines the tooth and takes X-rays to assess root structure and plan the extraction approach",
          duration: "10 minutes",
        },
        {
          step: 2,
          title: "Anesthesia Administration",
          description:
            "Local anesthesia is administered to completely numb the area. Sedation options are available for anxious patients",
          duration: "5-10 minutes",
        },
        {
          step: 3,
          title: "Tooth Loosening",
          description: "Special instruments gently loosen the tooth by widening the socket and severing ligaments",
          duration: "5-15 minutes",
        },
        {
          step: 4,
          title: "Tooth Removal",
          description:
            "The tooth is carefully removed. For difficult extractions, it may be sectioned into smaller pieces",
          duration: "5-30 minutes",
        },
        {
          step: 5,
          title: "Socket Cleaning",
          description: "The socket is cleaned and any infection or debris is removed to promote healing",
          duration: "5 minutes",
        },
        {
          step: 6,
          title: "Bleeding Control & Sutures",
          description: "Gauze is placed to control bleeding. Sutures may be placed if needed to help healing",
          duration: "5-10 minutes",
        },
      ]}
      warnings={[
        "Don't delay extraction of severely damaged teeth - infection can spread to other teeth and jaw bone",
        "Inform us about all medications, especially blood thinners, before extraction",
        "Impacted wisdom teeth should be removed before they cause problems",
        "If you experience severe pain or fever after extraction, contact us immediately",
      ]}
      aftercare={[
        "Bite on gauze for 30-45 minutes to control bleeding",
        "Apply ice packs for 15 minutes on, 15 minutes off for first 24 hours",
        "Take prescribed pain medication as directed",
        "Avoid spitting, rinsing, or using straws for 24 hours (prevents dry socket)",
        "Eat soft foods and chew on opposite side for first few days",
        "Rinse gently with warm salt water after 24 hours",
        "No smoking or alcohol for at least 72 hours",
        "Avoid vigorous exercise for 24-48 hours",
        "Keep extraction site clean but don't brush directly on it for 24 hours",
      ]}
      faqs={[
        {
          question: "Is tooth extraction painful?",
          answer:
            "No, the extraction itself is not painful. You'll receive local anesthesia that completely numbs the area. You may feel pressure during the procedure, but no pain. After the anesthesia wears off, mild discomfort is normal and manageable with prescribed medication.",
        },
        {
          question: "How long does it take to heal after extraction?",
          answer:
            "Initial healing takes 1-2 weeks, with the socket filling in with soft tissue. Complete bone healing takes 3-6 months. Most people can return to normal activities within 24-48 hours, though you should avoid strenuous activity for a few days.",
        },
        {
          question: "What can I eat after tooth extraction?",
          answer:
            "For the first 24 hours, stick to soft, cool foods like yogurt, pudding, ice cream, and smoothies. Gradually introduce soft foods like pasta, eggs, and cooked vegetables over the next few days. Avoid hot, spicy, or crunchy foods until the site heals.",
        },
        {
          question: "What is dry socket and how can I prevent it?",
          answer:
            "Dry socket occurs when the blood clot protecting the extraction site dislodges, exposing bone and nerves. Prevent it by avoiding smoking, spitting, using straws, and vigorous rinsing for 72 hours after extraction. Follow all post-operative instructions carefully.",
        },
        {
          question: "When should I replace an extracted tooth?",
          answer:
            "It's best to replace extracted teeth (except wisdom teeth) to prevent bone loss and shifting of adjacent teeth. Dental implants are the gold standard, but bridges and dentures are also options. We can discuss replacement during your extraction visit.",
        },
        {
          question: "Can I get all my teeth extracted at once?",
          answer:
            "While it's technically possible, we usually don't recommend extracting all teeth in one appointment due to the healing burden on your body. However, multiple extractions in one session are common. Dr. Rockson Samuel will recommend the best approach for your situation.",
        },
      ]}
      relatedServices={[
        {
          title: "Dental Implants",
          href: "/services/dental-implants",
          image: "/dental-implant-stages.png",
        },
        {
          title: "Wisdom Teeth Removal",
          href: "/services/oral-surgery",
          image: "/placeholder.svg?height=200&width=300",
        },
        {
          title: "Dental Bridges",
          href: "/services/dental-bridges",
          image: "/dental-bridges.jpg",
        },
      ]}
      testimonials={[
        {
          name: "Vijay Kumar",
          image: "/young-indian-man.png",
          rating: 5,
          text: "I was nervous about getting my tooth extracted, but Dr. Rockson made it painless and quick. The aftercare instructions were clear and recovery was smooth.",
          treatment: "Tooth Extraction",
        },
        {
          name: "Anitha Reddy",
          image: "/middle-aged-indian-woman.png",
          rating: 5,
          text: "Had to get two wisdom teeth extracted. The procedure was surprisingly comfortable and healing was faster than expected. Excellent care!",
          treatment: "Wisdom Teeth Removal",
        },
      ]}
    />
  )
}
