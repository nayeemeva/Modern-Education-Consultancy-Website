import PageHeader from "@/components/page-header"
import ServiceSidebar from "@/components/service-sidebar"
import CTASection from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight } from "lucide-react"

export default function CareerPathwayGuidancePage() {
  return (
    <>
      <PageHeader
        title="Career Pathway Guidance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Career Pathway Guidance", href: "/services/career-pathway-guidance" },
        ]}
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-red-600">
                  Find Your Perfect Career Path
                </h2>

                <p className="text-slate-600 mb-6">
                  Choosing the right career path is one of the most important decisions you'll make in your life. At AZ
                  Global Education, we understand that this decision can be overwhelming, which is why our Career
                  Pathway Guidance service is designed to help you navigate this crucial choice with confidence.
                </p>

                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Career Guidance Session"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">How Our Career Pathway Guidance Works</h3>

                <p className="text-slate-600 mb-6">
                  Our comprehensive career guidance process is tailored to your unique skills, interests, and
                  aspirations. We follow a structured approach to help you discover the career path that's right for
                  you:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">1. Personal Assessment</h4>
                    <p className="text-slate-600">
                      We begin with a thorough assessment of your academic background, skills, interests, and career
                      aspirations. Our expert consultants use specialized tools and techniques to identify your
                      strengths and areas of interest.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">2. Career Exploration</h4>
                    <p className="text-slate-600">
                      Based on your assessment, we explore various career options that align with your profile. We
                      provide detailed information about each career path, including job prospects, salary expectations,
                      and growth opportunities.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">3. Education Planning</h4>
                    <p className="text-slate-600">
                      Once you've identified your preferred career path, we help you plan your education journey. This
                      includes selecting the right courses, universities, and countries that offer the best programs in
                      your chosen field.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">4. Skill Development Guidance</h4>
                    <p className="text-slate-600">
                      We identify the key skills required for your chosen career and provide guidance on how to develop
                      these skills through academic and extracurricular activities.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Benefits of Our Career Pathway Guidance</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Make informed career decisions based on expert guidance</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Discover careers that match your skills and interests</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Understand the educational requirements for your chosen career
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Develop a clear roadmap for your academic and professional journey
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Stay updated on the latest industry trends and job market demands
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Gain confidence in your career choices</span>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Why Choose Us for Career Guidance?</h4>
                  <p className="text-slate-600">
                    Our career consultants have extensive experience in guiding students towards successful career
                    paths. We stay updated with the latest industry trends and job market demands to provide you with
                    relevant and practical advice. Our personalized approach ensures that you receive guidance tailored
                    to your unique profile and aspirations.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Success Stories</h3>

                <div className="bg-slate-50 p-6 rounded-lg mb-8">
                  <blockquote className="text-slate-600 italic mb-4">
                    "I was confused about which career path to choose after high school. The career guidance team at AZ
                    Global Education helped me discover my passion for environmental science and guided me towards the
                    right university program. I'm now pursuing my dream career!"
                  </blockquote>
                  <div className="font-medium text-slate-800">
                    - Michael Chen, Environmental Science Student at University of British Columbia
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="/contact">Schedule a Career Guidance Session</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <ServiceSidebar currentService="career-pathway-guidance" />

                <div className="bg-slate-800 text-white rounded-lg overflow-hidden shadow-md">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Need Personalized Advice?</h3>
                    <p className="text-slate-300 mb-6">
                      Our expert consultants are ready to help you find the perfect career path. Schedule a free
                      consultation today.
                    </p>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/contact">Get Free Consultation</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Related Resources</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/blog/choosing-right-career-path"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>How to Choose the Right Career Path</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/top-careers-2023"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Top In-Demand Careers for 2023</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/skills-future-workforce"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Essential Skills for the Future Workforce</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/career-assessment-tools"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Career Assessment Tools: A Guide</span>
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
