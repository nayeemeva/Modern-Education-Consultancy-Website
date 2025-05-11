import PageHeader from "@/components/page-header"
import ServiceSidebar from "@/components/service-sidebar"
import CTASection from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle, ArrowRight, Home, CreditCard, BookOpen, Briefcase, Users, Phone } from "lucide-react"

export default function PostArrivalServicePage() {
  return (
    <>
      <PageHeader
        title="Post Arrival Service"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Post Arrival Service", href: "/services/post-arrival-service" },
        ]}
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="text-3xl font-bold text-slate-800 mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-red-600">
                  Comprehensive Post-Arrival Support Services
                </h2>

                <p className="text-slate-600 mb-6">
                  Arriving in a new country to begin your studies is an exciting but challenging time. Our Post-Arrival
                  Service ensures that you have all the support you need to settle in smoothly and focus on your
                  academic journey. We provide comprehensive assistance with everything from accommodation and banking
                  to local transportation and cultural adaptation.
                </p>

                <div className="relative h-[400px] rounded-lg overflow-hidden mb-8">
                  <Image
                    src="/placeholder.svg?height=800&width=1200"
                    alt="Post Arrival Service"
                    fill
                    className="object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Comprehensive Post-Arrival Support</h3>

                <p className="text-slate-600 mb-6">
                  At AZ Global Education, we understand that the transition to life in a new country can be
                  overwhelming. Our post-arrival services are designed to provide you with the support you need in
                  various aspects of your new life:
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Home className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Accommodation Assistance</h4>
                    </div>
                    <p className="text-slate-600">
                      We help you find suitable accommodation, whether it's on-campus housing, shared apartments, or
                      homestays, and assist with lease agreements and understanding tenant rights.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <CreditCard className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Banking & Financial Setup</h4>
                    </div>
                    <p className="text-slate-600">
                      We guide you through opening a local bank account, understanding banking services, setting up
                      mobile banking, and managing your finances in a new country.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Phone className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Local SIM & Utilities</h4>
                    </div>
                    <p className="text-slate-600">
                      We help you get a local SIM card and set up essential utilities like internet, electricity, and
                      water, ensuring you're connected and comfortable in your new home.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <BookOpen className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">University Orientation</h4>
                    </div>
                    <p className="text-slate-600">
                      We provide guidance on navigating your university campus, understanding academic systems,
                      accessing student services, and making the most of your educational experience.
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
                      We help you understand local customs, social norms, and cultural practices, and provide tips on
                      overcoming culture shock and building a social network in your new environment.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                        <Briefcase className="h-6 w-6 text-red-600" />
                      </div>
                      <h4 className="text-xl font-bold text-slate-800">Part-time Work Guidance</h4>
                    </div>
                    <p className="text-slate-600">
                      We provide information about part-time work opportunities, work rights for international students,
                      resume preparation, and job search strategies in your new country.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Post-Arrival Support Process</h3>

                <div className="space-y-6 mb-8">
                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">1. Pre-Departure Briefing</h4>
                    <p className="text-slate-600">
                      Before you leave your home country, we provide a comprehensive briefing on what to expect upon
                      arrival, including airport pickup arrangements, initial accommodation, and essential items to
                      pack.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">2. Arrival Assistance</h4>
                    <p className="text-slate-600">
                      We arrange airport pickup and help you settle into your initial accommodation, providing essential
                      information about your new surroundings and immediate necessities.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">3. Orientation Program</h4>
                    <p className="text-slate-600">
                      We conduct a comprehensive orientation program to familiarize you with your new environment,
                      including local transportation, shopping areas, healthcare facilities, and other essential
                      services.
                    </p>
                  </div>

                  <div className="bg-slate-50 p-6 rounded-lg">
                    <h4 className="text-xl font-bold text-slate-800 mb-3">4. Ongoing Support</h4>
                    <p className="text-slate-600">
                      We provide ongoing support throughout your stay, with regular check-ins and assistance with any
                      challenges or questions that arise as you adjust to life in your new country.
                    </p>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Benefits of Our Post-Arrival Service</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Smooth transition to life in a new country</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Reduced stress and anxiety during the settling-in period</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Expert guidance on navigating local systems and services</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Support from consultants familiar with the challenges of relocation
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">
                      Faster adaptation to your new academic and social environment
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-red-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-slate-700">Peace of mind for you and your family back home</span>
                  </div>
                </div>

                <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
                  <h4 className="text-xl font-bold text-slate-800 mb-2">Our Local Network</h4>
                  <p className="text-slate-600">
                    We have established networks of local partners and resources in major study destinations around the
                    world. This allows us to provide you with reliable recommendations for services and support,
                    ensuring that you have access to trusted providers for all your needs in your new country.
                  </p>
                </div>

                <h3 className="text-2xl font-bold text-slate-800 mb-4">Success Stories</h3>

                <div className="bg-slate-50 p-6 rounded-lg mb-8">
                  <blockquote className="text-slate-600 italic mb-4">
                    "Moving to Australia for my studies was a big step, and I was nervous about how I would manage
                    everything in a new country. The post-arrival support from AZ Global Education was invaluable. They
                    helped me find a great apartment, set up my bank account, and even introduced me to other students
                    from my home country. Their support made my transition so much smoother than I expected!"
                  </blockquote>
                  <div className="font-medium text-slate-800">
                    - Li Wei, Engineering Student at University of Sydney
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button asChild size="lg" className="bg-red-600 hover:bg-red-700">
                    <Link href="/contact">Enquire About Post-Arrival Support</Link>
                  </Button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <ServiceSidebar currentService="post-arrival-service" />

                <div className="bg-slate-800 text-white rounded-lg overflow-hidden shadow-md">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-4">Moving Abroad Soon?</h3>
                    <p className="text-slate-300 mb-6">
                      Let us help you settle into your new life abroad with our comprehensive post-arrival support
                      services.
                    </p>
                    <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                      <Link href="/contact">Get Post-Arrival Support</Link>
                    </Button>
                  </div>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">Settling-In Resources</h3>
                    <ul className="space-y-4">
                      <li>
                        <Link
                          href="/blog/finding-accommodation-abroad"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Finding Accommodation Abroad: A Guide</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/banking-for-international-students"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Banking for International Students</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/overcoming-culture-shock"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Overcoming Culture Shock: Tips and Strategies</span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/blog/part-time-work-opportunities"
                          className="flex items-center text-slate-700 hover:text-red-600"
                        >
                          <ArrowRight className="h-4 w-4 mr-2 text-red-600" />
                          <span>Part-time Work Opportunities for International Students</span>
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
