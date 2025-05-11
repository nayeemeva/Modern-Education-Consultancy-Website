import PageHeader from "@/components/page-header"
import ServiceSidebar from "@/components/service-sidebar"
import CTASection from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, FileCheck, Calendar, MessageCircle, Briefcase, Shield, Globe } from "lucide-react"

export default function VisaProcessingPage() {
  return (
    <>
      <PageHeader
        title="Visa Processing"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Visa Processing", href: "/services/visa-processing" },
        ]}
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-red-600">
                  Expert Student Visa Processing Services
                </h2>

                <p className="text-slate-600 mb-6">
                  Securing a student visa is a critical step in your international education journey. The visa
                  application process can be complex and varies significantly from country to country. Our Visa
                  Processing service provides expert guidance and support to help you navigate this process
                  successfully, ensuring that you can begin your studies abroad without unnecessary delays or
                  complications.
                </p>

                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Visa Processing"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Comprehensive Visa Processing Service</h3>

                <p className="text-slate-600 mb-6">
                  At AZ Global Education, we provide end-to-end support for your student visa application, tailored to
                  the specific requirements of your destination country:
                </p>

                <div className="space-y-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Globe className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Country-Specific Visa Guidance</h4>
                    </div>
                    <p className="text-slate-600">
                      We provide detailed information about the visa requirements, application procedures, and
                      processing times for your destination country, ensuring you have all the information you need.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <FileCheck className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Document Preparation</h4>
                    </div>
                    <p className="text-slate-600">
                      We help you prepare all necessary documents for your visa application, including financial
                      statements, accommodation proof, travel insurance, and other supporting documents required by the
                      embassy or consulate.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Briefcase className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Application Form Assistance</h4>
                    </div>
                    <p className="text-slate-600">
                      We guide you through the visa application form, ensuring that all information is accurate and
                      complete, reducing the risk of delays or rejections due to errors.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <MessageCircle className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Interview Preparation</h4>
                    </div>
                    <p className="text-slate-600">
                      For countries that require visa interviews, we provide comprehensive preparation, including mock
                      interviews, common questions, and guidance on how to present yourself confidently.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Calendar className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Appointment Scheduling</h4>
                    </div>
                    <p className="text-slate-600">
                      We assist you in scheduling visa application appointments and biometric appointments, ensuring
                      that you meet all deadlines for your intended start date.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Shield className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Application Submission & Follow-up</h4>
                    </div>
                    <p className="text-slate-600">
                      We guide you through the submission process and follow up on your application status, addressing
                      any additional requirements or queries from the visa office promptly.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Benefits of Our Visa Processing Service</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Minimize the risk of visa rejection due to errors or incomplete applications
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Save time and reduce stress during the visa application process
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Receive country-specific guidance from experienced consultants
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Prepare effectively for visa interviews with expert coaching</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Stay updated on changing visa requirements and procedures</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Ensure all documentation meets the specific requirements of your destination country
                    </span>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Our Visa Success Rate</h4>
                  <p className="text-slate-600">
                    With our expert guidance and meticulous attention to detail, our students have achieved a 97%
                    success rate in securing student visas for their destination countries. Our consultants stay updated
                    with the latest visa requirements and procedures, ensuring that your application has the best chance
                    of approval.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Success Stories</h3>

                <div className="bg-slate-50 p-6 rounded-lg mb-8">
                  <blockquote className="text-slate-600 italic mb-4">
                    "I was extremely nervous about my US student visa interview, but the preparation I received from AZ
                    Global Education was invaluable. They guided me through every step of the process, from document
                    preparation to interview coaching. I received my visa without any issues and am now studying at my
                    dream university in the United States!"
                  </blockquote>
                  <div className="font-medium text-slate-800">
                    - Rahul Sharma, Computer Science Student at University of California, Berkeley
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="/contact">Start Your Visa Process</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <ServiceSidebar currentService="visa-processing" />

                <div className="bg-slate-800 text-white rounded-lg overflow-hidden shadow-md">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Need Visa Assistance?</h3>
                    <p className="text-slate-300 mb-6">
                      Our expert consultants will guide you through the entire visa application process, maximizing your
                      chances of approval.
                    </p>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/contact">Get Visa Guidance</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Visa Resources</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/blog/us-student-visa-guide"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>US Student Visa Guide</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/uk-tier-4-visa-requirements"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>UK Student Visa Requirements</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/canada-study-permit-process"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Canada Study Permit Process</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/australia-student-visa-guide"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Australia Student Visa Guide</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/visa-interview-tips"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Visa Interview Tips and Tricks</span>
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
