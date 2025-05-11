import PageHeader from "@/components/page-header"
import ServiceSidebar from "@/components/service-sidebar"
import CTASection from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, FileText, Clock, PenTool, MessageSquare, Award, ThumbsUp } from "lucide-react"

export default function ApplicationProcessingPage() {
  return (
    <>
      <PageHeader
        title="Application Processing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Application Processing", href: "/services/application-processing" },
        ]}
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-red-600">
                  Streamlined University Application Processing
                </h2>

                <p className="text-slate-600 mb-6">
                  The university application process can be complex and time-consuming, with each institution having its
                  own requirements and deadlines. Our Application Processing service takes the stress out of this
                  process by handling every aspect of your applications, from document preparation to submission,
                  ensuring that you present the strongest possible case to your chosen universities.
                </p>

                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Application Processing"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Our Comprehensive Application Processing Service
                </h3>

                <p className="text-slate-600 mb-6">
                  At AZ Global Education, we provide end-to-end support for your university applications, ensuring that
                  every detail is perfect and submitted on time:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <FileText className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Document Preparation</h4>
                    </div>
                    <p className="text-slate-600">
                      We help you prepare all necessary documents, including transcripts, certificates, and
                      identification documents, ensuring they meet the specific requirements of each university.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <PenTool className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Personal Statement & Essays</h4>
                    </div>
                    <p className="text-slate-600">
                      Our experienced consultants provide guidance on crafting compelling personal statements and essays
                      that highlight your strengths, achievements, and aspirations, making you stand out to admissions
                      committees.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <MessageSquare className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Recommendation Letters</h4>
                    </div>
                    <p className="text-slate-600">
                      We provide guidance on securing strong recommendation letters, including whom to ask and what
                      information to provide to your recommenders to ensure their letters support your application
                      effectively.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Award className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Resume/CV Development</h4>
                    </div>
                    <p className="text-slate-600">
                      We help you create or refine your resume or CV to effectively showcase your academic achievements,
                      extracurricular activities, work experience, and skills relevant to your chosen program.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Clock className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Application Timeline Management</h4>
                    </div>
                    <p className="text-slate-600">
                      We create a personalized application timeline, tracking all deadlines and requirements to ensure
                      timely submission of all applications and supporting documents.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <ThumbsUp className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Application Submission & Follow-up</h4>
                    </div>
                    <p className="text-slate-600">
                      We handle the submission of your applications and all supporting documents, and follow up with
                      universities to ensure everything has been received and is being processed.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">
                  Benefits of Our Application Processing Service
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Save time and reduce stress during the application process</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Ensure all applications are complete and error-free</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Present your profile in the best possible light</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Maximize your chances of admission to your preferred universities
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Receive guidance from consultants familiar with university requirements
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Stay on track with all application deadlines</span>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Our Application Success Rate</h4>
                  <p className="text-slate-600">
                    With our expert guidance and meticulous attention to detail, our students have achieved a 98%
                    success rate in securing admissions to their preferred universities. Our consultants stay updated
                    with the latest application requirements and trends, ensuring that your application stands out in a
                    competitive admissions landscape.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Success Stories</h3>

                <div className="bg-slate-50 p-6 rounded-lg mb-8">
                  <blockquote className="text-slate-600 italic mb-4">
                    "The application process seemed overwhelming until I found AZ Global Education. Their team guided me
                    through every step, from crafting my personal statement to submitting my applications. I received
                    offers from all five universities I applied to, including my top choice!"
                  </blockquote>
                  <div className="font-medium text-slate-800">
                    - David Kim, Engineering Student at Imperial College London
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="/contact">Start Your Application Process</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <ServiceSidebar currentService="application-processing" />

                <div className="bg-slate-800 text-white rounded-lg overflow-hidden shadow-md">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Ready to Apply?</h3>
                    <p className="text-slate-300 mb-6">
                      Let our experts handle your university applications and increase your chances of admission to your
                      dream universities.
                    </p>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/contact">Get Started Today</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Application Resources</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/blog/writing-effective-personal-statement"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Writing an Effective Personal Statement</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/securing-strong-recommendation-letters"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>How to Secure Strong Recommendation Letters</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/common-application-mistakes"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Common Application Mistakes to Avoid</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/application-deadlines-guide"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>University Application Deadlines Guide</span>
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
