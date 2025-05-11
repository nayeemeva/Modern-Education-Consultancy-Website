import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="relative h-12 w-12 mr-2 bg-white rounded-full p-2">
                <Image
                  src="/placeholder.svg?height=48&width=48"
                  alt="AZ Global Education Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-lg leading-tight">AZ GLOBAL EDUCATION</span>
                <span className="text-sm font-medium text-slate-300">CONSULTANCY</span>
              </div>
            </div>
            <p className="text-slate-300 mb-6">
              Your trusted partner for international education guidance. We help students achieve their academic dreams
              abroad.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-300 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-red-600 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-slate-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-300 hover:text-white transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/success-stories" className="text-slate-300 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-slate-300 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-300 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-red-600 pb-2">
              Our Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/services/career-pathway-guidance"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Career Pathway Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/university-selection-guidance"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  University Selection Guidance
                </Link>
              </li>
              <li>
                <Link
                  href="/services/application-processing"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Application Processing
                </Link>
              </li>
              <li>
                <Link href="/services/visa-processing" className="text-slate-300 hover:text-white transition-colors">
                  Visa Processing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/student-consultation"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Student Consultation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/post-arrival-service"
                  className="text-slate-300 hover:text-white transition-colors"
                >
                  Post Arrival Service
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-6 relative after:absolute after:bottom-0 after:left-0 after:w-12 after:h-0.5 after:bg-red-600 pb-2">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex">
                <MapPin className="h-5 w-5 mr-3 text-red-500 flex-shrink-0 mt-1" />
                <span className="text-slate-300">75A, Changkat, Bukit Bintang, 50200, Kuala Lumpur</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" />
                <span className="text-slate-300">+60 1111 22 3 444</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 mr-3 text-red-500 flex-shrink-0" />
                <span className="text-slate-300">info@azglobaleducation.com</span>
              </li>
            </ul>

            <div className="mt-6">
              <h4 className="font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <Input type="email" placeholder="Your email" className="bg-slate-800 border-slate-700 text-white" />
                <Button className="ml-2 bg-red-600 hover:bg-red-700">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} AZ Global Education Consultancy. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy-policy" className="text-slate-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-slate-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
