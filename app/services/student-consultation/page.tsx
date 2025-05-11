import PageHeader from "@/components/page-header"
import ServiceSidebar from "@/components/service-sidebar"
import CTASection from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Users, BookOpen, Compass, Lightbulb, DollarSign, BarChart } from "lucide-react"

export default function StudentConsultationPage() {
  return (
    <>
      <PageHeader
        title="Student Consultation"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Student Consultation", href: "/services/student-consultation" },
        ]}
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-red-600">
                  Personalized Student Consultation Services
                </h2>

                <p className="text-slate-600 mb-6">
                  Every student's educational journey is unique, with specific goals, challenges, and aspirations. Our
                  Student Consultation service provides personalized guidance to help you navigate your international
                  education journey with confidence, addressing your specific concerns and helping you make informed
                  decisions at every step.
                </p>

                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Student Consultation"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Our Comprehensive Student Consultation Approach
                </h3>

                <p className="text-slate-600 mb-6">
                  At AZ Global Education, our student consultations are tailored to address your specific needs and
                  questions about studying abroad:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Compass className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Education Planning</h4>
                    </div>
                    <p className="text-slate-600">
                      We help you develop a comprehensive education plan that aligns with your academic background,
                      career goals, and personal preferences.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <BookOpen className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Course & Program Selection</h4>
                    </div>
                    <p className="text-slate-600">
                      We provide guidance on choosing the right courses and programs that match your interests, skills,
                      and career aspirations.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <DollarSign className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Financial Planning</h4>
                    </div>
                    <p className="text-slate-600">
                      We help you understand the costs associated with studying abroad and develop a financial plan,
                      including information about scholarships, loans, and part-time work opportunities.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Cultural Adaptation</h4>
                    </div>
                    <p className="text-slate-600">
                      We provide insights and advice on adapting to a new culture, including information about local
                      customs, lifestyle, and social norms in your destination country.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Lightbulb className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Test Preparation Guidance</h4>
                    </div>
                    <p className="text-slate-600">
                      We provide advice on preparing for standardized tests like IELTS, TOEFL, GRE, GMAT, and SAT,
                      including study strategies and resources.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <BarChart className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Career Development</h4>
                    </div>
                    <p className="text-slate-600">
                      We offer guidance on career development opportunities, including internships, networking, and
                      post-graduation work options in your destination country.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Consultation Process</h3>

                <div className="space-y-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">1. Initial Assessment</h4>
                    <p className="text-slate-600">
                      We begin with a comprehensive assessment of your academic background, career goals, and personal
                      preferences to understand your unique needs and aspirations.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">2. Personalized Consultation</h4>
                    <p className="text-slate-600">
                      Based on your assessment, we provide personalized advice and guidance on all aspects of studying
                      abroad, addressing your specific questions and concerns.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">3. Action Plan Development</h4>
                    <p className="text-slate-600">
                      We work with you to develop a detailed action plan, outlining the steps you need to take to
                      achieve your educational goals, with clear timelines and milestones.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">4. Ongoing Support</h4>
                    <p className="text-slate-600">
                      We provide ongoing support throughout your educational journey, with regular check-ins and
                      additional consultations as needed to address new questions or challenges.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Benefits of Our Student Consultation Service</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Receive personalized guidance tailored to your unique needs</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Make informed decisions about your education and career</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Develop a clear roadmap for your international education journey
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Address specific concerns and challenges with expert advice</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Gain confidence and peace of mind about your educational choices
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Access ongoing support throughout your educational journey</span>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Our Consultation Approach</h4>
                  <p className="text-slate-600">
                    Our consultations are conducted by experienced education advisors who have firsthand knowledge of
                    international education systems and student experiences. We take a holistic approach, considering
                    not just your academic goals but also your personal preferences, financial situation, and long-term
                    career aspirations to provide truly personalized guidance.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Success Stories</h3>

                <div className="bg-slate-50 p-6 rounded-lg mb-8">
                  <blockquote className="text-slate-600 italic mb-4">
                    "The student consultation service at AZ Global Education was transformative for me. I was
                    overwhelmed by all the options and unsure about which path to take. My consultant listened carefully
                    to my goals and concerns and provided clear, personalized guidance that helped me make confident
                    decisions about my education abroad. I'm now thriving at my university in Canada!"
                  </blockquote>
                  <div className="font-medium text-slate-800">
                    - Maria Rodriguez, Business Administration Student at McGill University
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="/contact">Schedule a Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <ServiceSidebar currentService="student-consultation" />

                <div className="bg-slate-800 text-white rounded-lg overflow-hidden shadow-md">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Have Questions About Studying Abroad?</h3>
                    <p className="text-slate-300 mb-6">
                      Our expert consultants are ready to provide personalized guidance to help you navigate your
                      international education journey.
                    </p>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/contact">Book a Free Consultation</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Student Resources</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/blog/preparing-for-study-abroad"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Preparing for Study Abroad: A Checklist</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/managing-finances-abroad"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Managing Your Finances While Studying Abroad</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/cultural-adaptation-tips"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Cultural Adaptation: Tips for International Students</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/test-preparation-strategies"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Effective Strategies for Test Preparation</span>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
