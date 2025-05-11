import PageHeader from "@/components/page-header"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-800 mb-6 relative pb-4 after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-red-600">
                Get in Touch
              </h2>

              <p className="text-slate-600 mb-8">
                Have questions about studying abroad? Want to learn more about our services? Our team is here to help.
                Fill out the form below, and one of our education consultants will get back to you shortly.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                      First Name*
                    </label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                      Last Name*
                    </label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-700">
                    Email Address*
                  </label>
                  <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="Enter your phone number" />
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-slate-700">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    className="w-full rounded-md border border-slate-300 py-2 px-3 text-slate-700 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="career-pathway-guidance">Career Pathway Guidance</option>
                    <option value="university-selection-guidance">University Selection Guidance</option>
                    <option value="application-processing">Application Processing</option>
                    <option value="visa-processing">Visa Processing</option>
                    <option value="student-consultation">Student Consultation</option>
                    <option value="post-arrival-service">Post Arrival Service</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-slate-700">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your education goals and how we can help you"
                    rows={5}
                  />
                </div>

                <Button type="submit" className="bg-red-600 hover:bg-red-700 w-full md:w-auto">
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
                <div className="relative h-[300px]">
                  <Image src="/placeholder.svg?height=600&width=800" alt="Our Office" fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>

                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-1">Our Office</h4>
                        <p className="text-slate-600">75A, Changkat, Bukit Bintang, 50200, Kuala Lumpur, Malaysia</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Phone className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-1">Phone</h4>
                        <p className="text-slate-600">+60 1111 22 3 444</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Mail className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-1">Email</h4>
                        <p className="text-slate-600">info@azglobaleducation.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <Clock className="h-5 w-5 text-red-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-slate-800 mb-1">Office Hours</h4>
                        <p className="text-slate-600">
                          Monday - Friday: 9:00 AM - 6:00 PM
                          <br />
                          Saturday: 10:00 AM - 2:00 PM
                          <br />
                          Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative h-[300px]">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.7748830970427!2d101.70942661475855!3d3.1488700977076934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc37d12d669c1f%3A0x9e3afdd17c8a9056!2sBukit%20Bintang%2C%20Kuala%20Lumpur%2C%20Federal%20Territory%20of%20Kuala%20Lumpur%2C%20Malaysia!5e0!3m2!1sen!2sus!4v1620812345678!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    title="Office Location"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">
              Find answers to common questions about our services and the study abroad process.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">How do I schedule a consultation?</h3>
              <p className="text-slate-600">
                You can schedule a consultation by filling out the contact form on this page, calling our office, or
                sending us an email. One of our consultants will get back to you within 24 hours to arrange a convenient
                time.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Are your consultations free?</h3>
              <p className="text-slate-600">
                Yes, we offer a free initial consultation to understand your needs and explain how our services can help
                you achieve your educational goals. This consultation can be conducted in person, over the phone, or via
                video call.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                What documents should I bring to my consultation?
              </h3>
              <p className="text-slate-600">
                For the initial consultation, it's helpful to bring your academic transcripts, standardized test scores
                (if available), and a resume or CV. This will help our consultants provide more personalized guidance
                based on your profile.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">How long does the application process take?</h3>
              <p className="text-slate-600">
                The application process timeline varies depending on the country, university, and program. Generally, we
                recommend starting the process 12-18 months before your intended start date to ensure ample time for
                preparation, application submission, and visa processing.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Do you offer scholarships?</h3>
              <p className="text-slate-600">
                While we don't directly offer scholarships, we provide comprehensive guidance on available scholarship
                opportunities and help you prepare strong scholarship applications to maximize your chances of receiving
                financial aid.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-bold text-slate-800 mb-3">Can you help with visa applications?</h3>
              <p className="text-slate-600">
                Yes, our Visa Processing service provides comprehensive support for student visa applications, including
                document preparation, application form assistance, and interview preparation to maximize your chances of
                visa approval.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
