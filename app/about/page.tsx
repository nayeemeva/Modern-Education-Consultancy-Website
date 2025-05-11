import PageHeader from "@/components/page-header"
import CTASection from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, Award, Users, Globe, BookOpen, Briefcase, Star } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About AZ Global Education"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-red-600">
                Your Trusted Partner for International Education
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
                <Link href="/contact">Contact Us Today</Link>
              </Button>
            </div>

            <div>
              <div className="relative h-[500px] rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/placeholder.svg?height=1000&width=800"
                  alt="About AZ Global Education"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Vision & Mission</h2>
            <p className="text-slate-600">
              We are committed to transforming the international education landscape by providing exceptional guidance
              and support to students worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <Star className="h-5 w-5 text-red-600" />
                </div>
                Our Vision
              </h3>
              <p className="text-slate-600 mb-6">
                To be the leading global education consultancy, recognized for our excellence in guiding students
                towards successful international education experiences and empowering them to achieve their full
                potential.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Creating a world where quality education is accessible to all</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">
                    Building bridges between students and global educational opportunities
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Fostering cross-cultural understanding through education</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-2xl font-bold text-slate-800 mb-4 flex items-center">
                <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                  <Briefcase className="h-5 w-5 text-red-600" />
                </div>
                Our Mission
              </h3>
              <p className="text-slate-600 mb-6">
                To provide comprehensive, personalized guidance to students seeking international education, ensuring
                they make informed decisions that align with their academic goals, career aspirations, and personal
                circumstances.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Delivering expert guidance with integrity and transparency</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">Supporting students throughout their educational journey</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-slate-700">
                    Continuously improving our services to meet evolving student needs
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose AZ Global Education?</h2>
            <p className="text-slate-600">
              We stand out from other education consultancies through our commitment to excellence, personalized
              approach, and comprehensive support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Users className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Expert Consultants</h3>
              <p className="text-slate-600">
                Our team consists of experienced education consultants who have firsthand knowledge of international
                education systems and have helped thousands of students achieve their academic goals abroad.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Global University Network</h3>
              <p className="text-slate-600">
                We have established partnerships with over 200 universities across the United States, United Kingdom,
                Canada, Australia, New Zealand, Europe, and Asia, giving our students access to a wide range of
                educational opportunities.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <BookOpen className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Personalized Approach</h3>
              <p className="text-slate-600">
                We recognize that each student is unique, with specific goals, preferences, and circumstances. Our
                guidance is tailored to your individual profile, ensuring that you receive advice that is relevant and
                practical for your situation.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Proven Success Record</h3>
              <p className="text-slate-600">
                With a success rate of over 98%, we have helped thousands of students secure admissions to their
                preferred universities and successfully navigate the visa process, enabling them to pursue their
                academic dreams abroad.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Briefcase className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Comprehensive Services</h3>
              <p className="text-slate-600">
                We offer end-to-end support for your international education journey, from career guidance and
                university selection to application processing, visa assistance, and post-arrival support, ensuring a
                smooth and successful experience.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-6 transition-transform hover:translate-y-[-5px]">
              <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Ethical Practices</h3>
              <p className="text-slate-600">
                We are committed to maintaining the highest ethical standards in our operations. We provide transparent
                information, honest advice, and prioritize your best interests in all our recommendations and services.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact in Numbers</h2>
            <p className="text-slate-300">
              Over the years, we have made a significant impact on the lives of students seeking international education
              opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">5000+</div>
              <p className="text-slate-300">Students Assisted</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">200+</div>
              <p className="text-slate-300">Partner Universities</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">50+</div>
              <p className="text-slate-300">Countries Covered</p>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-red-500 mb-2">15+</div>
              <p className="text-slate-300">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Meet Our Team</h2>
            <p className="text-slate-600">
              Our team of experienced education consultants is dedicated to helping you achieve your academic and career
              goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1">Sarah Johnson</h3>
                <p className="text-red-600 font-medium mb-4">Founder & CEO</p>
                <p className="text-slate-600 mb-4">
                  With over 15 years of experience in international education, Sarah has helped thousands of students
                  achieve their academic dreams abroad.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1">Michael Chen</h3>
                <p className="text-red-600 font-medium mb-4">Senior Education Consultant</p>
                <p className="text-slate-600 mb-4">
                  Michael specializes in guiding students towards top universities in the United States and Canada, with
                  expertise in STEM programs.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image src="/placeholder.svg?height=400&width=400" alt="Team Member" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1">Priya Sharma</h3>
                <p className="text-red-600 font-medium mb-4">UK & Europe Specialist</p>
                <p className="text-slate-600 mb-4">
                  Priya has extensive knowledge of UK and European universities and helps students navigate the unique
                  application processes for these regions.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href="#" className="text-slate-400 hover:text-slate-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild className="bg-red-600 hover:bg-red-700">
              <Link href="/contact">Meet Our Full Team</Link>
            </Button>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
