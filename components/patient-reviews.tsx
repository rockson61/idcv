import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"

const reviews = [
  {
    name: "Rajesh Kumar",
    location: "Gandhi Nagar, Vellore",
    review:
      "Dr. Rockson Samuel provided excellent care for my root canal treatment. The procedure was painless and his explanation of the process was very thorough. Best dentist in Vellore for RCT!",
    rating: 5,
    date: "2024-01-15",
  },
  {
    name: "Priya Sharma",
    location: "Katpadi, Vellore",
    review:
      "From regular cleanings to my recent dental implant procedure, Dr. Rockson Samuel and his team provide top-notch care. Indira Dental Clinic is truly the best dental clinic in Vellore.",
    rating: 5,
    date: "2024-01-10",
  },
  {
    name: "Mohammed Ali",
    location: "Sathuvachari, Vellore",
    review:
      "Had a dental emergency and Dr. Rockson Samuel saw me immediately. Very professional and caring approach to patient care. Grateful for their 24/7 emergency dental services in Vellore.",
    rating: 5,
    date: "2024-01-05",
  },
  {
    name: "Lakshmi Venkatesh",
    location: "Bagayam, Vellore",
    review:
      "I got my braces done at Indira Dental Clinic, and the results are amazing! Dr. Rockson Samuel is undoubtedly the best orthodontist in Vellore. Highly recommend for anyone looking for teeth alignment.",
    rating: 5,
    date: "2024-01-20",
  },
  {
    name: "Arjun Reddy",
    location: "Rangapuram, Vellore",
    review:
      "Had a great experience with teeth whitening at Indira Dental Clinic with Dr. Rockson Samuel. The staff was friendly, and the results exceeded my expectations. Best cosmetic dentistry in Vellore!",
    rating: 5,
    date: "2024-01-25",
  },
  {
    name: "Sneha Patel",
    location: "Sainathapuram, Vellore",
    review:
      "Dr. Rockson Samuel's expertise in dental implants is unmatched. The whole process was smooth, and I can't stop smiling now. Thank you for restoring my confidence!",
    rating: 5,
    date: "2024-02-01",
  },
  {
    name: "Karthik Rajan",
    location: "Thorapadi, Vellore",
    review:
      "I've been coming to Indira Dental Clinic for years, and their preventive care under Dr. Rockson Samuel is excellent. Regular check-ups and cleanings have kept my teeth in great shape.",
    rating: 5,
    date: "2024-02-05",
  },
  {
    name: "Fathima Begum",
    location: "Kosapet, Vellore",
    review:
      "Had a wisdom tooth extraction done by Dr. Rockson Samuel. The procedure was quick, and recovery was smooth. Best oral surgeon in Vellore, hands down!",
    rating: 5,
    date: "2024-02-10",
  },
  {
    name: "Vijay Kumar",
    location: "Alamelumangapuram, Vellore",
    review:
      "Got a same-day crown at Indira Dental Clinic thanks to Dr. Rockson Samuel. The technology they use is impressive, and the fit is perfect. Grateful for their advanced dental services in Vellore.",
    rating: 5,
    date: "2024-02-15",
  },
  {
    name: "Ananya Krishnan",
    location: "Gandhi Road, Vellore",
    review:
      "My child had her first dental visit here with Dr. Rockson Samuel, and he was so patient and kind. Best pediatric dentist in Vellore for sure!",
    rating: 5,
    date: "2024-02-20",
  },
  {
    name: "Ramesh Sundaram",
    location: "Saidapet, Vellore",
    review:
      "Had gum surgery done at Indira Dental Clinic by Dr. Rockson Samuel. His expertise in periodontics is evident. The care and follow-up were exceptional.",
    rating: 5,
    date: "2024-02-25",
  },
  {
    name: "Divya Chandran",
    location: "Ariyur, Vellore",
    review:
      "Got Invisalign treatment here with Dr. Rockson Samuel, and I'm thrilled with the results. His attention to detail is impressive. Best place for clear aligners in Vellore!",
    rating: 5,
    date: "2024-03-01",
  },
  {
    name: "Suresh Babu",
    location: "Vallalar Nagar, Vellore",
    review:
      "Had a dental bridge done at Indira Dental Clinic by Dr. Rockson Samuel. The quality of work is outstanding, and it blends perfectly with my natural teeth.",
    rating: 5,
    date: "2024-03-05",
  },
  {
    name: "Meena Kumari",
    location: "Kalinjur, Vellore",
    review:
      "Dr. Rockson Samuel performed a root canal retreatment for me. His expertise saved my tooth from extraction. Truly the best endodontist in Vellore.",
    rating: 5,
    date: "2024-03-10",
  },
  {
    name: "Abdul Rahman",
    location: "Sathuvachari, Vellore",
    review:
      "The dental hygienists at Indira Dental Clinic are fantastic, especially under the guidance of Dr. Rockson Samuel. My teeth cleaning sessions are always thorough and comfortable.",
    rating: 5,
    date: "2024-03-15",
  },
  {
    name: "Shalini Menon",
    location: "Katpadi, Vellore",
    review:
      "Got veneers done by Dr. Rockson Samuel, and I'm in love with my new smile! The best cosmetic dentist in Vellore for sure.",
    rating: 5,
    date: "2024-03-20",
  },
  {
    name: "Gopal Krishnan",
    location: "Gandhi Nagar, Vellore",
    review:
      "Had a severe toothache and visited Indira Dental Clinic. Dr. Rockson Samuel's emergency dental care is prompt and effective. Thank you for the quick relief!",
    rating: 5,
    date: "2024-03-25",
  },
  {
    name: "Anjali Nair",
    location: "Bagayam, Vellore",
    review:
      "My experience with dental implants at Indira Dental Clinic with Dr. Rockson Samuel was fantastic. His skill and the latest technology they use are impressive.",
    rating: 5,
    date: "2024-04-01",
  },
  {
    name: "Prakash Raj",
    location: "Rangapuram, Vellore",
    review:
      "Had a smile makeover done at Indira Dental Clinic with Dr. Rockson Samuel. The transformation is amazing! Best place for cosmetic dentistry in Vellore.",
    rating: 5,
    date: "2024-04-05",
  },
  {
    name: "Saraswathi Venkat",
    location: "Thorapadi, Vellore",
    review:
      "Dr. Rockson Samuel's approach to pediatric dentistry is wonderful. My kids actually look forward to their dental check-ups now!",
    rating: 5,
    date: "2024-04-10",
  },
  {
    name: "Arun Kumar",
    location: "Saidapet, Vellore",
    review:
      "Got a dental crown at Indira Dental Clinic thanks to Dr. Rockson Samuel. The fit is perfect, and it looks so natural. Highly recommend their restorative dentistry services.",
    rating: 5,
    date: "2024-04-15",
  },
  {
    name: "Kavitha Ramanan",
    location: "Kosapet, Vellore",
    review:
      "Dr. Rockson Samuel's expertise in treating gum disease is remarkable. My periodontal health has improved significantly under his care.",
    rating: 5,
    date: "2024-04-20",
  },
  {
    name: "Senthil Kumar",
    location: "Alamelumangapuram, Vellore",
    review:
      "The dental implant procedure at Indira Dental Clinic with Dr. Rockson Samuel was smooth and painless. His skill is unmatched in Vellore.",
    rating: 5,
    date: "2024-04-25",
  },
  {
    name: "Riya Mathew",
    location: "Gandhi Road, Vellore",
    review:
      "Had my wisdom teeth removed at Indira Dental Clinic by Dr. Rockson Samuel. The oral surgery was quick, and recovery was easier than I expected.",
    rating: 5,
    date: "2024-05-01",
  },
  {
    name: "Vikram Singh",
    location: "Sathuvachari, Vellore",
    review:
      "Dr. Rockson Samuel's approach to conservative dentistry is commendable. He saved my tooth with a minimally invasive procedure.",
    rating: 5,
    date: "2024-05-05",
  },
  {
    name: "Lakshmi Priya",
    location: "Katpadi, Vellore",
    review:
      "The teeth whitening treatment at Indira Dental Clinic with Dr. Rockson Samuel gave me amazing results. Best cosmetic dental services in Vellore!",
    rating: 5,
    date: "2024-05-10",
  },
  {
    name: "Rahul Menon",
    location: "Ariyur, Vellore",
    review:
      "Got braces at Indira Dental Clinic, and the whole experience with Dr. Rockson Samuel has been great. He is truly the best orthodontist in Vellore.",
    rating: 5,
    date: "2024-05-15",
  },
  {
    name: "Preethi Shankar",
    location: "Bagayam, Vellore",
    review:
      "The dental hygienists at Indira Dental Clinic are thorough and gentle, thanks to Dr. Rockson Samuel's training. Best place for professional teeth cleaning in Vellore.",
    rating: 5,
    date: "2024-05-20",
  },
  {
    name: "Manoj Patel",
    location: "Gandhi Nagar, Vellore",
    review:
      "Dr. Rockson Samuel's expertise in treating TMJ disorders is impressive. I've found significant relief after starting treatment here.",
    rating: 5,
    date: "2024-05-25",
  },
  {
    name: "Sujatha Krishnan",
    location: "Thorapadi, Vellore",
    review:
      "Had a dental emergency on a Sunday, and Indira Dental Clinic with Dr. Rockson Samuel was there to help. Their 24/7 emergency service is a blessing!",
    rating: 5,
    date: "2024-06-01",
  },
  {
    name: "Rajesh Sharma",
    location: "Saidapet, Vellore",
    review:
      "The Invisalign treatment at Indira Dental Clinic with Dr. Rockson Samuel has been life-changing. His expertise in orthodontics is evident.",
    rating: 5,
    date: "2024-06-05",
  },
  {
    name: "Anita Reddy",
    location: "Kosapet, Vellore",
    review:
      "Got a full mouth reconstruction at Indira Dental Clinic with Dr. Rockson Samuel. The results are beyond my expectations. Best prosthodontist in Vellore!",
    rating: 5,
    date: "2024-06-10",
  },
  {
    name: "Karthikeyan Subramanian",
    location: "Rangapuram, Vellore",
    review:
      "Dr. Rockson Samuel's approach to geriatric dentistry is commendable. He takes extra care with elderly patients like my father.",
    rating: 5,
    date: "2024-06-15",
  },
  {
    name: "Deepa Chandran",
    location: "Alamelumangapuram, Vellore",
    review:
      "The dental sealants applied for my kids at Indira Dental Clinic by Dr. Rockson Samuel have been effective in preventing cavities. Great preventive care!",
    rating: 5,
    date: "2024-06-20",
  },
  {
    name: "Vivek Nair",
    location: "Gandhi Road, Vellore",
    review:
      "Had a complicated root canal treatment, and Dr. Rockson Samuel handled it expertly. Best endodontist in Vellore, no doubt!",
    rating: 5,
    date: "2024-06-25",
  },
  {
    name: "Saranya Venkatesh",
    location: "Sathuvachari, Vellore",
    review:
      "The dental bonding procedure at Indira Dental Clinic with Dr. Rockson Samuel was quick and effective. My chipped tooth looks as good as new!",
    rating: 5,
    date: "2024-07-01",
  },
  {
    name: "Arjun Menon",
    location: "Katpadi, Vellore",
    review:
      "Dr. Rockson Samuel's expertise in treating sleep apnea with dental appliances has significantly improved my sleep quality.",
    rating: 5,
    date: "2024-07-05",
  },
  {
    name: "Nithya Raman",
    location: "Ariyur, Vellore",
    review:
      "The laser dentistry treatments at Indira Dental Clinic with Dr. Rockson Samuel are amazing. Painless and quick procedures with great results!",
    rating: 5,
    date: "2024-07-10",
  },
  {
    name: "Srinivas Rao",
    location: "Bagayam, Vellore",
    review:
      "Got dental implants at Indira Dental Clinic, and I'm thrilled with the results thanks to Dr. Rockson Samuel. He is the best implantologist in Vellore.",
    rating: 5,
    date: "2024-07-15",
  },
  {
    name: "Lakshmi Narayan",
    location: "Gandhi Nagar, Vellore",
    review:
      "The orthodontic treatment for my teenager at Indira Dental Clinic with Dr. Rockson Samuel has been a great experience. He is patient and skilled.",
    rating: 5,
    date: "2024-07-20",
  },
  {
    name: "Rajesh Khanna",
    location: "Thorapadi, Vellore",
    review:
      "Had a smile makeover done at Indira Dental Clinic with Dr. Rockson Samuel. The results are stunning! Best cosmetic dentistry services in Vellore.",
    rating: 5,
    date: "2024-07-25",
  },
  {
    name: "Priya Murugan",
    location: "Saidapet, Vellore",
    review:
      "Dr. Rockson Samuel's approach to minimally invasive dentistry is commendable. He saved my tooth structure while fixing my cavity.",
    rating: 5,
    date: "2024-08-01",
  },
  {
    name: "Aravind Kumar",
    location: "Kosapet, Vellore",
    review:
      "The dental crown I got at Indira Dental Clinic with Dr. Rockson Samuel is perfect. It matches my natural teeth perfectly. His attention to detail is impressive.",
    rating: 5,
    date: "2024-08-05",
  },
  {
    name: "Meenakshi Sundaram",
    location: "Rangapuram, Vellore",
    review:
      "The pediatric dentistry services at Indira Dental Clinic with Dr. Rockson Samuel are excellent. My kids love coming here for their check-ups.",
    rating: 5,
    date: "2024-08-10",
  },
  {
    name: "Karthik Subramanian",
    location: "Alamelumangapuram, Vellore",
    review:
      "Had a complicated wisdom tooth extraction, and Dr. Rockson Samuel handled it expertly. Best oral surgeon in Vellore!",
    rating: 5,
    date: "2024-08-15",
  },
  {
    name: "Divya Prakash",
    location: "Gandhi Road, Vellore",
    review:
      "The Invisalign treatment at Indira Dental Clinic with Dr. Rockson Samuel has been so convenient. His expertise in orthodontics is evident.",
    rating: 5,
    date: "2024-08-20",
  },
  {
    name: "Venkatesh Iyer",
    location: "Sathuvachari, Vellore",
    review:
      "Got veneers at Indira Dental Clinic, and I can't stop smiling! The best cosmetic dentistry services in Vellore thanks to Dr. Rockson Samuel.",
    rating: 5,
    date: "2024-08-25",
  },
]

export function PatientReviews() {
  return (
    <section className="py-20 bg-gradient-to-b from-background via-primary/5 to-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Patients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.slice(0, 9).map((review, index) => (
            <Card key={index}>
              <CardHeader>
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <CardTitle className="text-lg">{review.name}</CardTitle>
                <p className="text-sm text-muted-foreground">{review.location}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.review}</p>
                <p className="text-sm text-muted-foreground mt-2">{new Date(review.date).toLocaleDateString()}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button variant="outline">View All 50 Reviews</Button>
        </div>
      </div>
    </section>
  )
}
