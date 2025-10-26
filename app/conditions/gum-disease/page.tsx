import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"
import { ChevronRight, AlertCircle, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Gum Disease Treatment in Vellore | Indira Dental Clinic",
  description:
    "Expert treatment for gum disease (periodontitis) at Indira Dental Clinic in Vellore. Learn about symptoms, causes, treatments, and prevention of periodontal disease.",
}

export default function GumDiseasePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex mb-6 text-sm" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/conditions" className="ml-1 text-gray-700 hover:text-blue-600 md:ml-2">
                Conditions
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-gray-500 md:ml-2">Gum Disease</span>
            </div>
          </li>
        </ol>
      </nav>

      {/* Hero Section */}
      <div className="relative rounded-xl overflow-hidden mb-10">
        <div className="absolute inset-0">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Gum Disease Treatment"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-900/40"></div>
        </div>

        <div className="relative px-6 py-16 sm:px-12 sm:py-24">
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Gum Disease (Periodontitis) Treatment
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Comprehensive care for gum disease to restore your oral health and protect your smile
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
              >
                Call: +91 98765 43210
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-4">What is Gum Disease?</h2>
            <p className="text-gray-600 mb-4">
              Gum disease, also known as periodontal disease, is a common but serious infection that damages the soft
              tissue and bone supporting your teeth. It's primarily caused by bacteria in plaque, a sticky film that
              constantly forms on teeth.
            </p>
            <p className="text-gray-600 mb-4">
              In its early stage, called gingivitis, gum disease causes inflammation and bleeding of the gums. If left
              untreated, it can progress to periodontitis, where the gums pull away from the teeth, bone is lost, and
              teeth may loosen or fall out.
            </p>
            <p className="text-gray-600">
              At Indira Dental Clinic in Vellore, we offer comprehensive treatment for all stages of gum disease to help
              restore your oral health and prevent further damage.
            </p>
          </div>
          <div className="relative h-64 md:h-auto rounded-lg overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Gum Disease Illustration"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Warning Signs */}
      <div className="mb-12 bg-red-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6 flex items-center">
          <AlertCircle className="w-6 h-6 text-red-600 mr-2" />
          Warning Signs of Gum Disease
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Red, Swollen Gums</h3>
                  <p className="text-gray-600">
                    Healthy gums should be pink and firm. Redness, swelling, or tenderness in the gums are early signs
                    of gingivitis.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Bleeding Gums</h3>
                  <p className="text-gray-600">
                    Gums that bleed during brushing, flossing, or eating hard foods indicate inflammation and potential
                    gum disease.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Persistent Bad Breath</h3>
                  <p className="text-gray-600">
                    Chronic bad breath that doesn't go away after brushing or using mouthwash can be a sign of bacteria
                    buildup from gum disease.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-4">
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Receding Gums</h3>
                  <p className="text-gray-600">
                    Gums that pull away from teeth, making teeth appear longer, indicate advancing gum disease.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Loose or Shifting Teeth</h3>
                  <p className="text-gray-600">
                    As gum disease progresses and affects the bone supporting your teeth, teeth may become loose or
                    change position.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <AlertCircle className="w-5 h-5 text-red-600 mr-3 mt-1" />
                <div>
                  <h3 className="font-semibold">Pus Between Teeth and Gums</h3>
                  <p className="text-gray-600">
                    Infection can cause pus to develop between teeth and gums, indicating advanced periodontal disease.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-red-600 font-medium">
            If you're experiencing any of these symptoms, schedule an appointment with our dental team immediately.
            Early intervention is key to preventing serious complications.
          </p>
        </div>
      </div>

      {/* Causes and Risk Factors */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Causes and Risk Factors</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Primary Causes</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Poor Oral Hygiene:</span> Inadequate brushing and flossing allows
                    plaque to build up on teeth and along the gumline.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Plaque Buildup:</span> Plaque contains bacteria that produce toxins
                    that irritate and damage the gums.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Tartar Formation:</span> When plaque hardens into tartar (calculus),
                    it creates a protective shield for bacteria and can only be removed by professional cleaning.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Risk Factors</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Smoking and Tobacco Use:</span> Tobacco use is one of the most
                    significant risk factors for gum disease and can lower treatment success.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Hormonal Changes:</span> Pregnancy, menopause, and other hormonal
                    changes can make gums more sensitive and vulnerable to disease.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Diabetes:</span> People with diabetes have a higher risk of
                    infections, including gum disease.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Medications:</span> Some medications can reduce saliva flow, which
                    protects the mouth, or cause abnormal gum tissue growth.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-blue-600 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Genetic Susceptibility:</span> Some people are genetically more prone
                    to gum disease than others.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Treatment Options */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Treatment Options for Gum Disease</h2>
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Non-Surgical Treatments</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Professional Dental Cleaning</h4>
                <p className="text-gray-600">
                  Regular professional cleanings remove plaque and tartar that can't be eliminated through regular
                  brushing and flossing.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Scaling and Root Planing</h4>
                <p className="text-gray-600">
                  This deep-cleaning procedure removes plaque and tartar from below the gumline (scaling) and smooths
                  the root surfaces to help gums reattach to teeth (root planing).
                </p>
                <Link
                  href="/services/periodontics/scaling-root-planing"
                  className="text-blue-600 inline-flex items-center text-sm font-medium mt-2"
                >
                  Learn more about Scaling and Root Planing
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div>
                <h4 className="font-medium">Antibiotic Therapy</h4>
                <p className="text-gray-600">
                  Topical or oral antibiotics may be prescribed to control bacterial infection. These can include
                  antibiotic mouth rinses, gels, or microspheres placed in periodontal pockets.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Surgical Treatments</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Flap Surgery (Pocket Reduction)</h4>
                <p className="text-gray-600">
                  In this procedure, the gums are lifted back to remove tartar deposits in deep pockets and then sutured
                  back in place to fit snugly around the tooth, reducing the space between the gum and tooth.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Bone Grafts</h4>
                <p className="text-gray-600">
                  When periodontitis has destroyed the bone surrounding your tooth root, bone grafts can help regenerate
                  bone and stabilize teeth.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Soft Tissue Grafts</h4>
                <p className="text-gray-600">
                  This procedure reinforces thin gums or fills in places where gums have receded by taking tissue from
                  another area of your mouth or using synthetic material.
                </p>
                <Link
                  href="/services/periodontics/gum-grafting"
                  className="text-blue-600 inline-flex items-center text-sm font-medium mt-2"
                >
                  Learn more about Gum Grafting
                  <ChevronRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
              <div>
                <h4 className="font-medium">Guided Tissue Regeneration</h4>
                <p className="text-gray-600">
                  This procedure stimulates bone and gum tissue growth by placing a special piece of biocompatible
                  fabric between existing bone and your tooth.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">Advanced Treatments</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium">Laser Therapy</h4>
                <p className="text-gray-600">
                  Laser treatments can be used to remove inflamed gum tissue and reduce the bacteria in periodontal
                  pockets, often with less pain and bleeding than traditional methods.
                </p>
              </div>
              <div>
                <h4 className="font-medium">Host Modulation</h4>
                <p className="text-gray-600">
                  This involves medications that modify the host response to infection, reducing tissue destruction and
                  bone loss associated with periodontitis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Prevention */}
      <div className="mb-12 bg-blue-50 p-8 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Preventing Gum Disease</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold mb-4">Daily Oral Hygiene</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Brush Twice Daily:</span> Use a soft-bristled toothbrush and fluoride
                    toothpaste to brush for at least two minutes, twice a day.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Floss Daily:</span> Clean between teeth once a day with dental floss
                    or an interdental cleaner to remove plaque and food particles.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Use Mouthwash:</span> Therapeutic mouthwashes can help reduce plaque,
                    prevent or reduce gingivitis, and reduce the speed at which tartar develops.
                  </p>
                </div>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Professional Care and Lifestyle</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Regular Dental Checkups:</span> Visit your dentist at least twice a
                    year for professional cleanings and examinations.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Quit Tobacco:</span> If you smoke or use tobacco products, quitting
                    will significantly reduce your risk of gum disease.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Maintain a Healthy Diet:</span> A balanced diet rich in vitamins and
                    minerals, particularly vitamin C, can help boost your immune system and fight gum infections.
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1" />
                <div>
                  <p className="text-gray-600">
                    <span className="font-medium">Manage Stress:</span> Chronic stress can weaken your immune system and
                    make it harder for your body to fight infections, including gum disease.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Connection to Overall Health */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Mouth-Body Connection</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <p className="text-gray-600 mb-4">
            Research has established a strong link between gum disease and various systemic health conditions. The
            bacteria associated with periodontitis can enter your bloodstream through gum tissue, potentially affecting
            other parts of your body.
          </p>
          <p className="text-gray-600 mb-4">Gum disease has been associated with increased risk of:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Heart Disease</h3>
              <p className="text-sm text-gray-600">
                Bacteria from gum infections can enter the bloodstream and contribute to heart disease, clogged
                arteries, and stroke.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Diabetes</h3>
              <p className="text-sm text-gray-600">
                People with diabetes are more susceptible to infections, including gum disease, which can in turn make
                diabetes harder to control.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Respiratory Diseases</h3>
              <p className="text-sm text-gray-600">
                Bacteria from the mouth can be aspirated into the lungs, causing respiratory diseases such as pneumonia.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Pregnancy Complications</h3>
              <p className="text-sm text-gray-600">
                Gum disease has been linked to premature birth and low birth weight in pregnant women.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Rheumatoid Arthritis</h3>
              <p className="text-sm text-gray-600">
                The inflammation from gum disease may increase the risk of developing rheumatoid arthritis.
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Alzheimer's Disease</h3>
              <p className="text-sm text-gray-600">
                Some research suggests a potential link between gum infections and the development of Alzheimer's
                disease.
              </p>
            </div>
          </div>
          <p className="text-gray-600 mt-6">
            Maintaining good oral health is not just important for your mouth—it's essential for your overall health and
            well-being.
          </p>
        </div>
      </div>

      {/* FAQs */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Is gum disease reversible?</h3>
            <p className="text-gray-600">
              Early gum disease (gingivitis) is reversible with professional treatment and good oral home care. However,
              advanced gum disease (periodontitis) is not reversible, but it can be controlled with proper treatment to
              prevent further damage.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Is gum disease treatment painful?</h3>
            <p className="text-gray-600">
              Most non-surgical treatments are minimally uncomfortable. For deeper cleanings or surgical procedures,
              local anesthesia is used to ensure your comfort. Our team prioritizes gentle care and will work with you
              to manage any anxiety or discomfort.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">How long does gum disease treatment take?</h3>
            <p className="text-gray-600">
              The duration of treatment depends on the severity of your condition. Mild cases may require just one or
              two visits for professional cleaning, while more advanced cases might need several appointments over a
              period of months for scaling, root planing, and possibly surgical interventions.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Will my insurance cover gum disease treatment?</h3>
            <p className="text-gray-600">
              Most dental insurance plans provide some coverage for periodontal treatments, especially preventive and
              non-surgical procedures. Coverage for surgical treatments varies. Our office staff can help you understand
              your benefits and explore payment options.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold mb-2">Can children get gum disease?</h3>
            <p className="text-gray-600">
              Yes, children can develop gingivitis, but periodontitis is less common in children. Good oral hygiene
              habits established early in life can help prevent gum problems. Regular dental check-ups are important for
              children to monitor their gum health.
            </p>
          </div>
        </div>
      </div>

      {/* Related Services */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Related Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <Link href="/services/periodontics/scaling-root-planing" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                Scaling and Root Planing
              </h3>
              <p className="text-gray-600 mb-4">
                Deep cleaning procedure to remove plaque and tartar from below the gumline and smooth the tooth roots.
              </p>
              <span className="text-blue-600 inline-flex items-center text-sm font-medium">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/services/periodontics/gum-grafting" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">Gum Grafting</h3>
              <p className="text-gray-600 mb-4">
                Surgical procedure to cover exposed tooth roots caused by gum recession and prevent further gum loss.
              </p>
              <span className="text-blue-600 inline-flex items-center text-sm font-medium">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>

          <Link href="/services/periodontics/gum-surgery" className="group">
            <div className="bg-white p-6 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
                Periodontal Surgery
              </h3>
              <p className="text-gray-600 mb-4">
                Advanced surgical treatments to restore damaged gum tissue and bone supporting the teeth.
              </p>
              <span className="text-blue-600 inline-flex items-center text-sm font-medium">
                Learn More
                <ChevronRight className="w-4 h-4 ml-1" />
              </span>
            </div>
          </Link>
        </div>
      </div>

      {/* CTA */}
      <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-2xl font-bold mb-4">Don't Ignore the Signs of Gum Disease</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Early intervention is key to preventing serious complications from gum disease. Contact Indira Dental Clinic
          today to schedule a comprehensive periodontal evaluation.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center justify-center px-6 py-3 bg-white text-blue-600 font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Call: +91 98765 43210
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-700 text-white font-medium rounded-md hover:bg-blue-800 transition-colors"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  )
}
