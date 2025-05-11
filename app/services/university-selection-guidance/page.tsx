import PageHeader from "@/components/page-header"
import ServiceSidebar from "@/components/service-sidebar"
import CTASection from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Globe, Award, BookOpen, DollarSign, Users, Building } from "lucide-react"

export default function UniversitySelectionGuidancePage() {
  return (
    <>
      <PageHeader
        title="University Selection Guidance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "University Selection Guidance", href: "/services/university-selection-guidance" },
        ]}
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-red-600">
                  Find Your Perfect University Match
                </h2>

                <p className="text-slate-600 mb-6">
                  Choosing the right university is a critical decision that can shape your academic and professional
                  future. With thousands of universities worldwide, finding the perfect match can be overwhelming. Our
                  University Selection Guidance service helps you navigate this complex process with expert advice
                  tailored to your unique profile and aspirations.
                </p>

                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="University Selection Guidance"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Our Comprehensive University Selection Process
                </h3>

                <p className="text-slate-600 mb-6">
                  At AZ Global Education, we follow a structured approach to help you find universities that align with
                  your academic profile, career goals, and personal preferences:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Users className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Profile Assessment</h4>
                    </div>
                    <p className="text-slate-600">
                      We begin by thoroughly evaluating your academic background, test scores, extracurricular
                      activities, and career aspirations to understand your unique profile.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Globe className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Country & University Research</h4>
                    </div>
                    <p className="text-slate-600">
                      We research and identify countries and universities that offer programs aligned with your academic
                      interests and career goals.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Award className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Program Evaluation</h4>
                    </div>
                    <p className="text-slate-600">
                      We evaluate specific programs based on curriculum, faculty expertise, research opportunities, and
                      industry connections to ensure they meet your academic requirements.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <DollarSign className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Financial Consideration</h4>
                    </div>
                    <p className="text-slate-600">
                      We help you understand tuition fees, living costs, and available scholarships to find universities
                      that fit your budget.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Building className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Campus & Location</h4>
                    </div>
                    <p className="text-slate-600">
                      We consider factors like campus facilities, location, climate, and cultural environment to ensure
                      they align with your preferences and lifestyle.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <BookOpen className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Final Selection</h4>
                    </div>
                    <p className="text-slate-600">
                      We help you create a balanced list of universities, including reach, target, and safety schools,
                      to maximize your chances of admission.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Why Choose Our University Selection Guidance</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Access to our extensive database of universities worldwide</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Personalized recommendations based on your profile</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Insights into admission requirements and acceptance rates</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Information about scholarships and financial aid options</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Direct connections with university representatives</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Guidance from consultants with firsthand knowledge of universities
                    </span>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Our University Network</h4>
                  <p className="text-slate-600">
                    We have established partnerships with over 200 universities across the United States, United
                    Kingdom, Canada, Australia, New Zealand, Europe, and Asia. Our strong relationships with these
                    institutions give our students an edge in the application process and access to exclusive
                    scholarship opportunities.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Success Stories</h3>

                <div className="bg-slate-50 p-6 rounded-lg mb-8">
                  <blockquote className="text-slate-600 italic mb-4">
                    "I was overwhelmed by the number of universities offering business programs. AZ Global Education
                    helped me narrow down my options and find universities that perfectly matched my academic profile
                    and career aspirations. I'm now studying at my dream university in Canada!"
                  </blockquote>
                  <div className="font-medium text-slate-800">
                    - Sophia Rodriguez, Business Administration Student at University of Toronto
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="/contact">Schedule a University Selection Consultation</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <ServiceSidebar currentService="university-selection-guidance" />

                <div className="bg-slate-800 text-white rounded-lg overflow-hidden shadow-md">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Find Your Dream University</h3>
                    <p className="text-slate-300 mb-6">
                      Our expert consultants will help you discover universities that match your academic profile and
                      career goals. Get started today!
                    </p>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/contact">Get Free Consultation</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Top University Destinations</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/blog/studying-in-usa"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Studying in the United States</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/studying-in-uk"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Studying in the United Kingdom</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/studying-in-canada"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Studying in Canada</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/studying-in-australia"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Studying in Australia</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/studying-in-europe"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Studying in Europe</span>
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
