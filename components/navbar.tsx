"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, Phone, X } from "lucide-react"
import { cn } from "@/lib/utils"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      <div className="bg-slate-800 text-white py-2 px-4 text-sm">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="hidden md:inline">75A, Changkat, Bukit Bintang, 50200, Kuala Lumpur</span>
            </div>
            <div className="hidden md:flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 mr-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span>info@azglobaleducation.com</span>
            </div>
          </div>
          <div className="flex items-center">
            <Phone className="h-4 w-4 mr-1" />
            <span>+60 111 22 3 444</span>
          </div>
        </div>
      </div>

      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-white shadow-md py-2" : "bg-white/95 backdrop-blur-sm py-4",
        )}
      >
        <div className="container mx-auto flex justify-between items-center px-4">
          <Link href="/" className="flex items-center">
            <div className="relative h-12 w-12 mr-2">
              <Image
                src="/placeholder.svg?height=48&width=48"
                alt="AZ Global Education Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight text-slate-800">AZ GLOBAL EDUCATION</span>
              <span className="text-sm font-medium text-slate-600">CONSULTANCY</span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-slate-700 hover:text-red-600 font-medium transition-colors">
              HOME
            </Link>
            <Link href="/about" className="text-slate-700 hover:text-red-600 font-medium transition-colors">
              ABOUT
            </Link>
            <div className="relative group">
              <Link
                href="/services"
                className="text-slate-700 hover:text-red-600 font-medium transition-colors flex items-center"
              >
                SERVICES
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </Link>
              <div className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20 transform opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 origin-top-left hidden group-hover:block">
                <Link
                  href="/services/career-pathway-guidance"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600"
                >
                  Career Pathway Guidance
                </Link>
                <Link
                  href="/services/university-selection-guidance"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600"
                >
                  University Selection Guidance
                </Link>
                <Link
                  href="/services/application-processing"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600"
                >
                  Application Processing
                </Link>
                <Link
                  href="/services/visa-processing"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600"
                >
                  Visa Processing
                </Link>
                <Link
                  href="/services/student-consultation"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600"
                >
                  Student Consultation
                </Link>
                <Link
                  href="/services/post-arrival-service"
                  className="block px-4 py-2 text-sm text-slate-700 hover:bg-red-50 hover:text-red-600"
                >
                  Post Arrival Service
                </Link>
              </div>
            </div>
            <Link href="/success-stories" className="text-slate-700 hover:text-red-600 font-medium transition-colors">
              SUCCESS STORIES
            </Link>
            <Link href="/blog" className="text-slate-700 hover:text-red-600 font-medium transition-colors">
              BLOG
            </Link>
            <Link href="/contact" className="text-slate-700 hover:text-red-600 font-medium transition-colors">
              CONTACT
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2 text-red-600" />
              <span className="font-medium">+60 1111 22 3 444</span>
            </div>
            <Button className="bg-red-600 hover:bg-red-700">FREE ASSESSMENT</Button>
          </div>

          <button className="lg:hidden text-slate-700 focus:outline-none" onClick={toggleMenu}>
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <div className="font-bold text-lg">Menu</div>
            <button className="text-slate-700 focus:outline-none" onClick={toggleMenu}>
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-slate-700 hover:text-red-600 font-medium"
                  onClick={toggleMenu}
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block py-2 text-slate-700 hover:text-red-600 font-medium"
                  onClick={toggleMenu}
                >
                  ABOUT
                </Link>
              </li>
              <li className="border-b pb-2">
                <div className="block py-2 text-slate-700 font-medium">SERVICES</div>
                <ul className="pl-4 space-y-2 mt-2">
                  <li>
                    <Link
                      href="/services/career-pathway-guidance"
                      className="block py-1 text-slate-600 hover:text-red-600"
                      onClick={toggleMenu}
                    >
                      Career Pathway Guidance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/university-selection-guidance"
                      className="block py-1 text-slate-600 hover:text-red-600"
                      onClick={toggleMenu}
                    >
                      University Selection Guidance
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/application-processing"
                      className="block py-1 text-slate-600 hover:text-red-600"
                      onClick={toggleMenu}
                    >
                      Application Processing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/visa-processing"
                      className="block py-1 text-slate-600 hover:text-red-600"
                      onClick={toggleMenu}
                    >
                      Visa Processing
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/student-consultation"
                      className="block py-1 text-slate-600 hover:text-red-600"
                      onClick={toggleMenu}
                    >
                      Student Consultation
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services/post-arrival-service"
                      className="block py-1 text-slate-600 hover:text-red-600"
                      onClick={toggleMenu}
                    >
                      Post Arrival Service
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  href="/success-stories"
                  className="block py-2 text-slate-700 hover:text-red-600 font-medium"
                  onClick={toggleMenu}
                >
                  SUCCESS STORIES
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="block py-2 text-slate-700 hover:text-red-600 font-medium"
                  onClick={toggleMenu}
                >
                  BLOG
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block py-2 text-slate-700 hover:text-red-600 font-medium"
                  onClick={toggleMenu}
                >
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>
          <div className="p-4 border-t">
            <Button className="w-full bg-red-600 hover:bg-red-700">FREE ASSESSMENT</Button>
            <div className="mt-4 flex items-center justify-center">
              <Phone className="h-5 w-5 mr-2 text-red-600" />
              <span className="font-medium">+60 1111 22 3 444</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Navbar
