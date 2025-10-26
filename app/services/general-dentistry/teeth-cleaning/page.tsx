import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { ServiceSchema } from "@/components/seo/service-schema"
import { Sparkles, Shield, Heart, Clock, Zap, Users } from "lucide-react"

export const metadata: Metadata = {
  title: "Professional Teeth Cleaning in Vellore | Dental Cleaning | Dr. Rockson Samuel",
  description:
    "Get professional teeth cleaning in Vellore by Dr. Rockson Samuel. Remove plaque, tartar & stains. Prevent cavities & gum disease. Book your appointment today!",
  keywords: [
    "teeth cleaning vellore",
    "dental cleaning",
    "plaque removal",
    "tartar removal",
    "scaling and polishing",
    "preventive dentistry",
  ],
}

export default function TeethCleaningPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Professional Teeth Cleaning"
        description="Maintain optimal oral health with professional teeth cleaning. Remove plaque, tartar, and stains that regular brushing can't reach."
        price="800 - 1,500"
        duration="PT45M"
        url="/services/general-dentistry/teeth-cleaning"
        imageUrl="/teeth-cleaning.jpg"
        category="Preventive Dentistry"
      />
      <ServicePageTemplate
        title="Professional Teeth Cleaning"
        subtitle="Preventive Dentistry"
        description="Maintain optimal oral health with professional teeth cleaning. Our thorough cleaning removes plaque, tartar, and stains that regular brushing can't reach, helping prevent cavities and gum disease."
        heroImage="/teeth-cleaning.jpg"
        price="₹800 - ₹1,500"
        duration="45-60 minutes"
        successRate="100%"
        stats={[
          { value: "45min", label: "Quick Session" },
          { value: "100%", label: "Safe & Effective" },
          { value: "6mo", label: "Recommended Interval" },
        ]}
        benefits={[
          {
            icon: Sparkles,
            title: "Brighter Smile",
            description: "Remove surface stains from coffee, tea, and tobacco for a noticeably whiter smile",
          },
          {
            icon: Shield,
            title: "Prevent Cavities",
            description: "Remove plaque buildup that causes tooth decay and cavities",
          },
          {
            icon: Heart,
            title: "Healthy Gums",
            description: "Prevent gingivitis and gum disease by removing tartar from the gum line",
          },
          {
            icon: Clock,
            title: "Fresh Breath",
            description: "Eliminate bacteria that cause bad breath for long-lasting freshness",
          },
          {
            icon: Zap,
            title: "Early Detection",
            description: "Identify potential dental problems early during your cleaning appointment",
          },
          {
            icon: Users,
            title: "Overall Health",
            description: "Good oral health is linked to better heart health and overall wellbeing",
          },
        ]}
        procedure={[
          {
            step: 1,
            title: "Initial Examination",
            description:
              "Dr. Rockson Samuel examines your teeth and gums to check for any issues before cleaning begins",
            duration: "5-10 minutes",
          },
          {
            step: 2,
            title: "Plaque & Tartar Removal",
            description:
              "Using specialized instruments, we carefully remove plaque and hardened tartar (calculus) from tooth surfaces and below the gum line",
            duration: "15-20 minutes",
          },
          {
            step: 3,
            title: "Deep Cleaning",
            description: "Ultrasonic scalers are used to clean hard-to-reach areas and remove stubborn deposits",
            duration: "10-15 minutes",
          },
          {
            step: 4,
            title: "Polishing",
            description:
              "Teeth are polished with a special paste to remove surface stains and create a smooth, clean surface",
            duration: "10 minutes",
          },
          {
            step: 5,
            title: "Flossing",
            description: "Professional flossing removes any remaining debris between teeth",
            duration: "5 minutes",
          },
          {
            step: 6,
            title: "Fluoride Treatment",
            description: "Optional fluoride application strengthens enamel and provides extra cavity protection",
            duration: "5 minutes",
          },
        ]}
        aftercare={[
          "Brush teeth at least twice daily with fluoride toothpaste",
          "Floss daily to remove plaque between teeth",
          "Use antimicrobial mouthwash to reduce bacteria",
          "Avoid eating or drinking for 30 minutes after fluoride treatment",
          "Schedule your next cleaning in 6 months",
          "Maintain a balanced diet low in sugary foods",
          "Stay hydrated to promote saliva production",
          "Consider using an electric toothbrush for better cleaning",
        ]}
        faqs={[
          {
            question: "How often should I get my teeth cleaned?",
            answer:
              "Most people should have their teeth professionally cleaned every 6 months. However, if you have gum disease or are prone to plaque buildup, Dr. Rockson Samuel may recommend more frequent cleanings every 3-4 months.",
          },
          {
            question: "Is teeth cleaning painful?",
            answer:
              "Professional teeth cleaning is generally not painful. You may feel some discomfort or sensitivity, especially if you have sensitive teeth or haven't had a cleaning in a while. We use gentle techniques and can apply numbing gel if needed for your comfort.",
          },
          {
            question: "Will teeth cleaning damage my enamel?",
            answer:
              "No, professional teeth cleaning does not damage enamel when performed correctly by trained dental professionals. The instruments and techniques we use are specifically designed to safely remove deposits without harming tooth structure.",
          },
          {
            question: "Can teeth cleaning remove all stains?",
            answer:
              "Professional cleaning can remove surface stains caused by food, drinks, and tobacco. However, intrinsic stains (inside the tooth) may require teeth whitening treatments for removal. We can discuss whitening options during your cleaning appointment.",
          },
          {
            question: "Do I need teeth cleaning if I brush regularly?",
            answer:
              "Yes! Even with excellent home care, plaque can harden into tartar that can only be removed with professional instruments. Regular cleanings also allow us to monitor your oral health and catch problems early.",
          },
          {
            question: "What's the difference between regular cleaning and deep cleaning?",
            answer:
              "Regular cleaning (prophylaxis) removes plaque and tartar above the gum line. Deep cleaning (scaling and root planing) treats gum disease by cleaning below the gum line and smoothing root surfaces. Dr. Rockson Samuel will recommend which you need.",
          },
        ]}
        relatedServices={[
          {
            title: "Teeth Whitening",
            href: "/services/cosmetic-dentistry/teeth-whitening",
            image: "/teeth-whitening.jpg",
          },
          {
            title: "Dental Check-ups",
            href: "/services/general-dentistry/check-ups",
            image: "/dental-checkup.png",
          },
          {
            title: "Fluoride Treatment",
            href: "/services/general-dentistry/preventive-care",
            image: "/fluoride-treatment.jpg",
          },
        ]}
        testimonials={[
          {
            name: "Priya Sharma",
            image: "/indian-woman-smiling.png",
            rating: 5,
            text: "The cleaning was so thorough yet gentle. My teeth feel amazing and look brighter! The hygienist explained everything and made me feel comfortable.",
            treatment: "Professional Cleaning",
          },
          {
            name: "Rajesh Kumar",
            image: "/indian-man-smiling.png",
            rating: 5,
            text: "I've been getting my teeth cleaned here for years. The staff is professional, the clinic is spotless, and my dental health has never been better!",
            treatment: "6-Month Cleaning",
          },
          {
            name: "Meera Krishnan",
            image: "/indian-woman-professional.png",
            rating: 5,
            text: "Dr. Rockson Samuel's team is wonderful. They caught a small cavity during my cleaning that would have been a bigger problem if left untreated. Very thorough!",
            treatment: "Preventive Care",
          },
        ]}
      />
    </>
  )
}
