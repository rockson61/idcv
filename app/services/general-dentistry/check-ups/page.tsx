import type { Metadata } from "next"
import { ServicePageTemplate } from "@/components/service-page-template"
import { ServiceSchema } from "@/components/seo/service-schema"
import { Search, Shield, AlertTriangle, Heart, CheckCircle, FileText } from "lucide-react"

export const metadata: Metadata = {
  title: "Dental Check-ups in Vellore | Comprehensive Oral Examination | Dr. Rockson Samuel",
  description:
    "Complete dental check-ups in Vellore by Dr. Rockson Samuel. Early detection of cavities, gum disease & oral cancer. Digital X-rays included. Book today!",
  keywords: [
    "dental checkup vellore",
    "oral examination",
    "dental screening",
    "preventive dentistry",
    "oral health assessment",
  ],
}

export default function DentalCheckupsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Comprehensive Dental Check-up"
        description="Regular dental check-ups for early detection of cavities, gum disease, and oral cancer. Includes digital X-rays and complete oral examination."
        price="500 - 800"
        duration="PT30M"
        url="/services/general-dentistry/check-ups"
        imageUrl="/dental-checkup.png"
        category="Preventive Dentistry"
      />
      <ServicePageTemplate
        title="Comprehensive Dental Check-ups"
        subtitle="Preventive Care"
        description="Regular dental check-ups are essential for maintaining optimal oral health. Our thorough examinations detect problems early, preventing costly treatments and preserving your natural teeth."
        heroImage="/dental-checkup.png"
        price="₹500 - ₹800"
        duration="30-45 minutes"
        stats={[
          { value: "2x", label: "Per Year" },
          { value: "95%", label: "Early Detection" },
          { value: "30min", label: "Quick Exam" },
        ]}
        benefits={[
          {
            icon: Search,
            title: "Early Detection",
            description: "Identify cavities, gum disease, and oral cancer in their earliest, most treatable stages",
          },
          {
            icon: Shield,
            title: "Prevent Major Issues",
            description: "Regular check-ups help prevent small problems from becoming expensive, painful emergencies",
          },
          {
            icon: AlertTriangle,
            title: "Risk Assessment",
            description: "Evaluate your risk factors for dental disease and create a personalized prevention plan",
          },
          {
            icon: Heart,
            title: "Overall Health Link",
            description: "Oral health affects your overall health; we check for signs of systemic diseases",
          },
          {
            icon: CheckCircle,
            title: "Professional Advice",
            description: "Get expert guidance on oral hygiene, nutrition, and habits affecting your dental health",
          },
          {
            icon: FileText,
            title: "Complete Records",
            description: "Maintain detailed dental records to track changes and plan future treatments",
          },
        ]}
        procedure={[
          {
            step: 1,
            title: "Medical History Review",
            description:
              "We review your medical history, medications, and any changes in your health that may affect dental treatment",
            duration: "5 minutes",
          },
          {
            step: 2,
            title: "Visual Examination",
            description:
              "Dr. Rockson Samuel carefully examines your teeth, gums, tongue, and oral tissues for any abnormalities",
            duration: "10 minutes",
          },
          {
            step: 3,
            title: "Digital X-rays",
            description:
              "When needed, we take digital X-rays to detect problems not visible during visual examination, such as decay between teeth or bone loss",
            duration: "5 minutes",
          },
          {
            step: 4,
            title: "Oral Cancer Screening",
            description:
              "A thorough examination of oral tissues to check for signs of oral cancer or precancerous conditions",
            duration: "5 minutes",
          },
          {
            step: 5,
            title: "Gum Health Assessment",
            description: "We measure gum pocket depths and check for signs of gingivitis or periodontitis",
            duration: "5 minutes",
          },
          {
            step: 6,
            title: "Discussion & Treatment Plan",
            description:
              "We discuss findings, answer your questions, and create a treatment plan if any issues are detected",
            duration: "10 minutes",
          },
        ]}
        warnings={[
          "If you haven't had a dental check-up in over a year, schedule one immediately",
          "Dental problems often don't cause pain until they're advanced - don't wait for symptoms",
          "Children should have their first dental visit by age 1 or when the first tooth erupts",
        ]}
        aftercare={[
          "Schedule your next check-up in 6 months",
          "Follow any treatment recommendations provided during your exam",
          "Maintain daily brushing and flossing routine",
          "Contact us immediately if you notice any changes between check-ups",
          "Follow dietary recommendations for better oral health",
          "Address any scheduled treatments promptly to prevent worsening",
        ]}
        faqs={[
          {
            question: "How often should I have a dental check-up?",
            answer:
              "Most people should have dental check-ups every 6 months. However, Dr. Rockson Samuel may recommend more frequent visits (every 3-4 months) if you have gum disease, are prone to cavities, or have other risk factors.",
          },
          {
            question: "What happens during a dental check-up?",
            answer:
              "A comprehensive check-up includes examination of teeth, gums, tongue, and oral tissues; oral cancer screening; gum health assessment; and often digital X-rays. We discuss any findings and create a treatment plan if needed.",
          },
          {
            question: "Are dental X-rays safe?",
            answer:
              "Yes, modern digital X-rays are very safe. They emit 90% less radiation than traditional film X-rays, and we only take them when necessary for diagnosis. The benefits of early detection far outweigh any minimal risk.",
          },
          {
            question: "Do I need a check-up if I have no dental problems?",
            answer:
              "Many dental problems, including cavities and gum disease, develop without symptoms. Regular check-ups detect issues early when they're easier and less expensive to treat. Prevention is always better than treatment.",
          },
          {
            question: "What if the check-up finds problems?",
            answer:
              "If we detect any issues, we'll explain them clearly and discuss treatment options. We'll prioritize treatments, provide cost estimates, and work with you to create a plan that fits your needs and budget.",
          },
          {
            question: "Can I combine a check-up with a cleaning?",
            answer:
              "Yes! Most patients have both a check-up and professional cleaning during the same appointment. This is an efficient way to maintain your oral health and saves you time.",
          },
        ]}
        relatedServices={[
          {
            title: "Professional Cleaning",
            href: "/services/general-dentistry/teeth-cleaning",
            image: "/teeth-cleaning.jpg",
          },
          {
            title: "Dental Fillings",
            href: "/services/general-dentistry/fillings",
            image: "/dental-fillings.jpg",
          },
          {
            title: "Gum Disease Treatment",
            href: "/services/periodontics",
            image: "/gum-treatment.jpg",
          },
        ]}
        testimonials={[
          {
            name: "Arun Prakash",
            image: "/indian-professional-man.png",
            rating: 5,
            text: "The check-up was very thorough. Dr. Rockson explained everything clearly and caught a cavity early. Very professional and caring service!",
            treatment: "Comprehensive Exam",
          },
          {
            name: "Lakshmi Devi",
            image: "/indian-woman-happy.jpg",
            rating: 5,
            text: "I bring my whole family here for check-ups. The staff is gentle with kids and takes time to educate us about oral health. Highly recommend!",
            treatment: "Family Check-ups",
          },
        ]}
      />
    </>
  )
}
