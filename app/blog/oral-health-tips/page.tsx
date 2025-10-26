import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Calendar, User } from "lucide-react"

export const metadata: Metadata = {
  title: "10 Essential Oral Health Tips for a Perfect Smile in 2024 | Vellore Dental",
  description:
    "Discover 10 proven dental care tips from Dr. Rockson Samuel to maintain perfect oral health. Learn proper brushing techniques, flossing methods & diet recommendations.",
}

export default function OralHealthTipsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Blog Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded">Oral Hygiene</span>
              <div className="flex items-center text-gray-500 text-sm">
                <Calendar className="h-4 w-4 mr-1" />
                <span>January 20, 2024</span>
              </div>
              <div className="flex items-center text-gray-500 text-sm">
                <User className="h-4 w-4 mr-1" />
                <span>Dr. Rockson Samuel</span>
              </div>
            </div>

            <h1 className="text-4xl font-bold mb-4">10 Essential Oral Health Tips for a Perfect Smile</h1>
            <p className="text-lg text-gray-700 mb-6">
              Maintaining good oral health is essential not just for a beautiful smile, but for your overall well-being.
              As a leading dentist in Vellore with over 15 years of experience, Dr. Rockson Samuel shares his top 10
              tips for keeping your teeth and gums healthy. These simple yet effective daily habits can significantly
              improve your oral health and prevent common dental problems.
            </p>

            <Image
              src="/placeholder.svg?height=400&width=800"
              alt="Dental care essentials including toothbrush, floss, and mouthwash"
              width={800}
              height={400}
              className="rounded-lg w-full mb-6"
            />
          </div>

          {/* Table of Contents */}
          <div className="bg-slate-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
            <ul className="space-y-2">
              <li>
                <a href="#brushing" className="text-primary hover:underline">
                  1. Proper Brushing Technique
                </a>
              </li>
              <li>
                <a href="#flossing" className="text-primary hover:underline">
                  2. Daily Flossing is Non-Negotiable
                </a>
              </li>
              <li>
                <a href="#mouthwash" className="text-primary hover:underline">
                  3. Use Antimicrobial Mouthwash
                </a>
              </li>
              <li>
                <a href="#diet" className="text-primary hover:underline">
                  4. Watch Your Diet
                </a>
              </li>
              <li>
                <a href="#water" className="text-primary hover:underline">
                  5. Stay Hydrated
                </a>
              </li>
              <li>
                <a href="#checkups" className="text-primary hover:underline">
                  6. Regular Dental Check-ups
                </a>
              </li>
              <li>
                <a href="#replace" className="text-primary hover:underline">
                  7. Replace Your Toothbrush Regularly
                </a>
              </li>
              <li>
                <a href="#tongue" className="text-primary hover:underline">
                  8. Clean Your Tongue
                </a>
              </li>
              <li>
                <a href="#habits" className="text-primary hover:underline">
                  9. Avoid Harmful Habits
                </a>
              </li>
              <li>
                <a href="#nightguard" className="text-primary hover:underline">
                  10. Consider a Night Guard
                </a>
              </li>
            </ul>
          </div>

          {/* Blog Content */}
          <div className="prose max-w-none">
            <h2 id="brushing" className="text-2xl font-bold mt-8 mb-4">
              1. Proper Brushing Technique
            </h2>
            <p>
              Brushing your teeth is the foundation of good oral hygiene, but many people don't do it correctly. The
              proper technique is just as important as the frequency.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm my-4">
              <h3 className="font-bold text-lg mb-2">The Right Way to Brush:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Use a soft-bristled toothbrush to avoid gum damage</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Hold your brush at a 45-degree angle to your gums</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Use gentle, circular motions rather than aggressive back-and-forth scrubbing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Brush for at least 2 minutes, twice daily</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Don't forget to brush the inner surfaces and chewing surfaces of your teeth</span>
                </li>
              </ul>
            </div>

            <p>
              At our Vellore dental clinic, we often see patients with receding gums and enamel wear due to aggressive
              brushing. Remember, gentle and thorough is better than hard and fast.
            </p>

            <h2 id="flossing" className="text-2xl font-bold mt-8 mb-4">
              2. Daily Flossing is Non-Negotiable
            </h2>
            <p>
              Brushing alone reaches only about 60% of your tooth surfaces. Flossing is essential for removing plaque
              and food particles from between teeth and under the gumline—areas your toothbrush can't reach.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-4">
              <div>
                <h3 className="font-bold text-lg mb-2">Flossing Tips:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Use about 18 inches of floss</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Curve the floss around each tooth in a C-shape</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Gently slide the floss up and down against each tooth surface</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Use a fresh section of floss for each tooth</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-2">Flossing Alternatives:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Floss picks for easier handling</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Water flossers for those with braces or dexterity issues</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Interdental brushes for larger spaces between teeth</span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              If your gums bleed when you floss, it's often a sign of gingivitis (early gum disease). Regular flossing
              will actually help improve this condition, not worsen it. If bleeding persists for more than two weeks,
              schedule a check-up at our Vellore dental clinic.
            </p>

            <h2 id="mouthwash" className="text-2xl font-bold mt-8 mb-4">
              3. Use Antimicrobial Mouthwash
            </h2>
            <p>
              A good antimicrobial mouthwash can reach areas that brushing and flossing might miss, reducing the
              bacteria that cause plaque, gingivitis, and bad breath.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm my-4">
              <h3 className="font-bold text-lg mb-2">Choosing the Right Mouthwash:</h3>
              <p className="mb-4">Different mouthwashes address different concerns:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <strong>Antimicrobial:</strong> Reduces bacteria and helps prevent gingivitis
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <strong>Fluoride:</strong> Strengthens enamel and helps prevent cavities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <strong>Desensitizing:</strong> Helps with sensitive teeth
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <strong>Alcohol-free:</strong> Better for dry mouth and sensitive tissues
                  </span>
                </li>
              </ul>
            </div>

            <p>
              For personalized mouthwash recommendations based on your specific oral health needs, consult with Dr.
              Rockson Samuel during your next visit to our Vellore dental clinic.
            </p>

            <h2 id="diet" className="text-2xl font-bold mt-8 mb-4">
              4. Watch Your Diet
            </h2>
            <p>
              What you eat significantly impacts your oral health. Sugary and acidic foods and beverages are the main
              culprits behind tooth decay and enamel erosion.
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-4">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Foods to Limit:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Sugary snacks and candies</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Carbonated soft drinks</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Sticky foods that cling to teeth</span>
                  </li>
                  <li className="flex items-start">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    <span>Citrus fruits and juices (consume in moderation)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="font-bold text-lg mb-2">Foods to Embrace:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Crunchy fruits and vegetables (natural teeth cleaners)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Calcium-rich foods like dairy products</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Green and black teas (contain polyphenols)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                    <span>Sugar-free gum with xylitol</span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              If you do consume sugary or acidic foods, try to do so during meals rather than as snacks, and rinse your
              mouth with water afterward. Wait at least 30 minutes before brushing after consuming acidic foods or
              drinks to avoid damaging softened enamel.
            </p>

            <h2 id="water" className="text-2xl font-bold mt-8 mb-4">
              5. Stay Hydrated
            </h2>
            <p>
              Drinking plenty of water throughout the day is one of the simplest yet most effective ways to maintain
              oral health. Water helps wash away food particles and bacteria, dilutes acids produced by bacteria, and
              prevents dry mouth—a condition that increases the risk of tooth decay and gum disease.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg my-4">
              <h3 className="font-bold text-lg mb-2">Benefits of Water for Oral Health:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Rinses away food debris and bacteria</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Helps maintain saliva production</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Contains no sugar or acids that damage teeth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Often contains fluoride (tap water), which strengthens teeth</span>
                </li>
              </ul>
            </div>

            <p>
              Aim to drink at least 8 glasses of water daily, and make water your beverage of choice instead of sugary
              or acidic drinks. This simple habit can significantly reduce your risk of cavities and other dental
              problems.
            </p>

            <h2 id="checkups" className="text-2xl font-bold mt-8 mb-4">
              6. Regular Dental Check-ups
            </h2>
            <p>
              Even with excellent home care, professional dental check-ups and cleanings are essential for maintaining
              optimal oral health. Regular visits to our Vellore dental clinic allow Dr. Rockson Samuel to detect and
              address potential problems before they become serious.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm my-4">
              <h3 className="font-bold text-lg mb-2">What Happens During a Dental Check-up:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Professional cleaning to remove plaque and tartar</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Examination for cavities, gum disease, and other issues</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Oral cancer screening</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>X-rays to detect hidden problems</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Personalized advice for improving your oral hygiene routine</span>
                </li>
              </ul>
            </div>

            <p>
              Most patients should visit the dentist every six months, though some may need more frequent visits based
              on their oral health status. Remember, preventive care is always less expensive and less invasive than
              treating advanced dental problems.
            </p>

            <h2 id="replace" className="text-2xl font-bold mt-8 mb-4">
              7. Replace Your Toothbrush Regularly
            </h2>
            <p>
              Many people use their toothbrushes far longer than they should. Over time, bristles become frayed and
              worn, making them less effective at cleaning and potentially harboring bacteria.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg my-4">
              <h3 className="font-bold text-lg mb-2">Toothbrush Replacement Guidelines:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Replace your toothbrush or electric toothbrush head every 3-4 months</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Replace sooner if bristles are visibly frayed</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Replace after you've been sick</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Store your toothbrush upright and allow it to air dry</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Don't share toothbrushes with others</span>
                </li>
              </ul>
            </div>

            <p>
              A good way to remember: replace your toothbrush with each season change, four times per year. This simple
              habit ensures you're always cleaning your teeth effectively.
            </p>

            <h2 id="tongue" className="text-2xl font-bold mt-8 mb-4">
              8. Clean Your Tongue
            </h2>
            <p>
              Your tongue harbors bacteria that can contribute to bad breath and affect your oral health. Cleaning your
              tongue should be a regular part of your oral hygiene routine.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm my-4">
              <h3 className="font-bold text-lg mb-2">Tongue Cleaning Methods:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <strong>Tongue scraper:</strong> The most effective tool, gently scrape from back to front
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>
                    <strong>Toothbrush:</strong> Many toothbrushes have a textured back designed for tongue cleaning
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Clean your tongue once daily, preferably in the morning</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Be gentle to avoid irritating the tongue</span>
                </li>
              </ul>
            </div>

            <p>
              Tongue cleaning not only freshens your breath but also removes bacteria that could be transferred to your
              teeth and gums. It's a simple addition to your routine that makes a noticeable difference.
            </p>

            <h2 id="habits" className="text-2xl font-bold mt-8 mb-4">
              9. Avoid Harmful Habits
            </h2>
            <p>
              Certain habits can damage your teeth and compromise your oral health, even if you maintain good oral
              hygiene in other ways.
            </p>

            <div className="bg-white p-6 rounded-lg shadow-sm my-4">
              <h3 className="font-bold text-lg mb-2">Habits to Avoid:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>
                    <strong>Smoking and tobacco use:</strong> Increases risk of gum disease, tooth loss, and oral cancer
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>
                    <strong>Nail biting:</strong> Can chip teeth and impact jaw alignment
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>
                    <strong>Using teeth as tools:</strong> Opening packages, cutting thread, etc.
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>
                    <strong>Chewing ice:</strong> Can crack or chip teeth
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-red-500 mr-2 shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>
                    <strong>Constant snacking:</strong> Continuously exposes teeth to acids and sugars
                  </span>
                </li>
              </ul>
            </div>

            <p>
              Being mindful of these habits can prevent unnecessary damage to your teeth and save you from costly dental
              procedures in the future. If you struggle with any of these habits, discuss strategies for breaking them
              with Dr. Rockson Samuel at our Vellore dental clinic.
            </p>

            <h2 id="nightguard" className="text-2xl font-bold mt-8 mb-4">
              10. Consider a Night Guard
            </h2>
            <p>
              Many people unknowingly grind or clench their teeth during sleep, a condition known as bruxism. Over time,
              this can lead to worn enamel, cracked teeth, jaw pain, and headaches.
            </p>

            <div className="bg-primary/10 p-6 rounded-lg my-4">
              <h3 className="font-bold text-lg mb-2">Signs You Might Need a Night Guard:</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Morning headaches or jaw pain</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Worn, flattened, or chipped teeth</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Increased tooth sensitivity</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Tired or tight jaw muscles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 shrink-0 mt-0.5" />
                  <span>Your sleep partner hears you grinding at night</span>
                </li>
              </ul>
            </div>

            <p>
              A custom-fitted night guard from our Vellore dental clinic provides a protective barrier between your
              upper and lower teeth, preventing damage from grinding and clenching. Unlike over-the-counter options, a
              professionally made night guard is designed for your specific bite, ensuring maximum comfort and
              protection.
            </p>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p>
              Maintaining good oral health doesn't require complicated procedures or expensive products—just consistent,
              proper care. By following these 10 essential tips from Dr. Rockson Samuel, you can enjoy a healthy,
              beautiful smile for years to come.
            </p>

            <p className="mt-4">
              Remember that everyone's oral health needs are unique. For personalized advice and professional dental
              care in Vellore, schedule a consultation with Dr. Rockson Samuel. Our team is committed to helping you
              achieve and maintain optimal oral health through preventive care and education.
            </p>

            <div className="bg-primary text-white p-6 rounded-lg my-8">
              <h3 className="text-xl font-bold mb-4">Ready to Improve Your Oral Health?</h3>
              <p className="mb-4">
                Schedule a comprehensive dental check-up with Dr. Rockson Samuel at our Vellore clinic today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button variant="secondary">Book an Appointment</Button>
                </Link>
                <a href="tel:+919876543210">
                  <Button
                    variant="outline"
                    className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
                  >
                    Call: +91 98765 43210
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="md:col-span-1">
          {/* Author Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <div className="flex items-center mb-4">
              <Image
                src="/placeholder.svg?height=80&width=80"
                alt="Dr. Rockson Samuel - Vellore's Leading Dentist"
                width={80}
                height={80}
                className="rounded-full mr-4"
              />
              <div>
                <h3 className="font-bold text-lg">Dr. Rockson Samuel</h3>
                <p className="text-sm text-gray-600">Dental Surgeon, Vellore</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Dr. Rockson Samuel is a leading dental surgeon in Vellore with over 15 years of experience. He specializes
              in implantology, cosmetic dentistry, and preventive dental care.
            </p>
            <Link href="/about-us/dr-rockson-samuel">
              <Button variant="outline" size="sm" className="w-full">
                View Profile
              </Button>
            </Link>
          </div>

          {/* Book Appointment Card */}
          <div className="bg-primary/10 p-6 rounded-lg mb-6">
            <h3 className="font-bold text-lg mb-4">Book a Dental Check-up</h3>
            <p className="text-sm mb-4">
              Regular dental check-ups are essential for maintaining good oral health. Schedule your appointment with
              Dr. Rockson Samuel today.
            </p>
            <Link href="/contact">
              <Button className="w-full">Book Appointment</Button>
            </Link>
          </div>

          {/* Related Articles */}
          <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
            <h3 className="font-bold text-lg mb-4">Related Articles</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Dental implants article"
                  width={60}
                  height={60}
                  className="rounded mr-3"
                />
                <div>
                  <h4 className="font-medium text-sm">The Complete Guide to Dental Implants</h4>
                  <Link href="/blog/dental-implants-guide" className="text-primary text-xs hover:underline">
                    Read Article →
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Root canal article"
                  width={60}
                  height={60}
                  className="rounded mr-3"
                />
                <div>
                  <h4 className="font-medium text-sm">7 Signs You Need a Root Canal</h4>
                  <Link href="/blog/root-canal-signs" className="text-primary text-xs hover:underline">
                    Read Article →
                  </Link>
                </div>
              </div>

              <div className="flex items-start">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  alt="Teeth whitening article"
                  width={60}
                  height={60}
                  className="rounded mr-3"
                />
                <div>
                  <h4 className="font-medium text-sm">Professional vs. At-Home Teeth Whitening</h4>
                  <Link href="/blog/teeth-whitening-comparison" className="text-primary text-xs hover:underline">
                    Read Article →
                  </Link>
                </div>
              </div>
            </div>
            <div className="mt-4">
              <Link href="/blog" className="text-primary text-sm hover:underline">
                View All Articles →
              </Link>
            </div>
          </div>

          {/* Services Card */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="font-bold text-lg mb-4">Our Dental Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/general-dentistry" className="text-primary hover:underline">
                  General Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services/dental-implants" className="text-primary hover:underline">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href="/services/cosmetic-dentistry" className="text-primary hover:underline">
                  Cosmetic Dentistry
                </Link>
              </li>
              <li>
                <Link href="/services/root-canal-treatment" className="text-primary hover:underline">
                  Root Canal Treatment
                </Link>
              </li>
              <li>
                <Link href="/services/orthodontics" className="text-primary hover:underline">
                  Orthodontic Treatment
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <Link href="/services" className="text-primary text-sm hover:underline">
                View All Services →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
