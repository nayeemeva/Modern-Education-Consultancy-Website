import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import CTASection from "@/components/cta-section"
import { GraduationCap, Globe, FileText, Stamp, Users, Briefcase, CheckCircle, ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=800&width=1920"
            alt="Students studying abroad"
            fill
            className="object-cover opacity-30"
            priority
          />
        </div>
        <div className="relative z-10 container mx-auto px-4 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Your Gateway to Global Education Excellence
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Personalized guidance for international students seeking quality education abroad. Let us help you
              navigate your educational journey with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/contact">Get Free Assessment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=800&width=1200"
                  alt="About AZ Global Education"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-red-600">
                About AZ Global Education
              </h2>
              <p className="text-slate-600 mb-6">
                AZ Global Education Consultancy is a premier educational consulting firm dedicated to helping students
                achieve their dreams of studying abroad. With years of experience and a team of expert consultants, we
                provide comprehensive guidance throughout your educational journey.
              </p>
              <p className="text-slate-600 mb-8">
                Our mission is to empower students with the knowledge and resources they need to make informed decisions
                about their education and future careers. We take pride in our personalized approach, tailoring our
                services to meet the unique needs of each student.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Expert Consultants</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Personalized Guidance</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">University Partnerships</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Proven Success Record</span>
                </div>
              </div>
              <Button asChild className="bg-red-600 hover:bg-red-700">
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Comprehensive Services</h2>
            <p className="text-slate-600">
              We offer a wide range of services to support students at every stage of their international education
              journey, from career guidance to post-arrival support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <GraduationCap className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Career Pathway Guidance</h3>
                <p className="text-slate-600 mb-6">
                  Get expert advice on choosing the right career path based on your interests, skills, and market
                  demand. We help you align your academic choices with your career goals.
                </p>
                <Link
                  href="/services/career-pathway-guidance"
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Globe className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">University Selection Guidance</h3>
                <p className="text-slate-600 mb-6">
                  Find the perfect university that matches your academic profile, budget, and career aspirations. We
                  provide detailed information about universities worldwide.
                </p>
                <Link
                  href="/services/university-selection-guidance"
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <FileText className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Application Processing</h3>
                <p className="text-slate-600 mb-6">
                  We handle the entire application process, from document preparation to submission, ensuring that your
                  applications are complete and compelling.
                </p>
                <Link
                  href="/services/application-processing"
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Stamp className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Visa Processing</h3>
                <p className="text-slate-600 mb-6">
                  Navigate the complex visa application process with our expert guidance. We help you prepare all
                  necessary documents and prepare for visa interviews.
                </p>
                <Link
                  href="/services/visa-processing"
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Student Consultation</h3>
                <p className="text-slate-600 mb-6">
                  Get personalized advice on all aspects of studying abroad, from choosing the right program to
                  understanding cultural differences and preparing for your journey.
                </p>
                <Link
                  href="/services/student-consultation"
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Service 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:translate-y-[-5px]">
              <div className="p-6">
                <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Briefcase className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">Post Arrival Service</h3>
                <p className="text-slate-600 mb-6">
                  Our support doesn't end when you leave. We provide assistance with accommodation, local
                  transportation, banking, and other essential services after you arrive.
                </p>
                <Link
                  href="/services/post-arrival-service"
                  className="inline-flex items-center text-red-600 font-medium hover:text-red-700"
                >
                  Learn More <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">5000+</div>
              <p className="text-slate-300">Students Assisted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">98%</div>
              <p className="text-slate-300">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">200+</div>
              <p className="text-slate-300">Partner Universities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">15+</div>
              <p className="text-slate-300">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What Our Students Say</h2>
            <p className="text-slate-600">
              Hear from students who have successfully achieved their international education goals with our guidance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Sarah Johnson</h4>
                  <p className="text-sm text-slate-500">Studying at University of Melbourne</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "AZ Global Education made my dream of studying in Australia come true. Their guidance throughout the
                application and visa process was invaluable. I couldn't have done it without them!"
              </p>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Ahmed Hassan</h4>
                  <p className="text-sm text-slate-500">Studying at University of Toronto</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "The team at AZ Global Education provided exceptional support from start to finish. Their expertise in
                Canadian universities helped me secure admission to my top choice program."
              </p>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-slate-50 rounded-lg p-6 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image src="/placeholder.svg?height=100&width=100" alt="Student" fill className="object-cover" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Priya Patel</h4>
                  <p className="text-sm text-slate-500">Studying at Imperial College London</p>
                </div>
              </div>
              <p className="text-slate-600 italic">
                "I was overwhelmed by the UK visa process, but AZ Global Education simplified everything. Their
                step-by-step guidance and prompt responses to my queries made the journey smooth."
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/success-stories">Read More Success Stories</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection />
    </>
  )
}
