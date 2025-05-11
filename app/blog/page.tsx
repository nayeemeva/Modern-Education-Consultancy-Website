import PageHeader from "@/components/page-header"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Calendar, User, ArrowRight, Search } from "lucide-react"

export default function BlogPage() {
  return (
    <>
      <PageHeader
        title="Our Blog"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Blog", href: "/blog" },
        ]}
        backgroundImage="/placeholder.svg?height=600&width=1600"
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 gap-12">
                {/* Featured Blog Post */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-[400px]">
                    <Image
                      src="/placeholder.svg?height=800&width=1200"
                      alt="Featured Blog Post"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>May 10, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>Sarah Johnson</span>
                      </div>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-800 mb-3 hover:text-red-600 transition-colors">
                      <Link href="/blog/top-universities-for-international-students-2023">
                        Top Universities for International Students in 2023
                      </Link>
                    </h2>
                    <p className="text-slate-600 mb-4">
                      Discover the best universities for international students in 2023, based on factors like academic
                      reputation, student support services, scholarship opportunities, and campus diversity.
                    </p>
                    <Button asChild variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      <Link href="/blog/top-universities-for-international-students-2023">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Blog Post 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-[300px] md:h-full">
                    <Image src="/placeholder.svg?height=600&width=800" alt="Blog Post" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>April 25, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>Michael Chen</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-3 hover:text-red-600 transition-colors">
                      <Link href="/blog/scholarship-opportunities-for-international-students">
                        Scholarship Opportunities for International Students
                      </Link>
                    </h2>
                    <p className="text-slate-600 mb-4">
                      Explore various scholarship opportunities available for international students, including
                      university scholarships, government scholarships, and private foundation grants.
                    </p>
                    <Button asChild variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      <Link href="/blog/scholarship-opportunities-for-international-students">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Blog Post 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-[300px] md:h-full">
                    <Image src="/placeholder.svg?height=600&width=800" alt="Blog Post" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>April 12, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>Priya Sharma</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-3 hover:text-red-600 transition-colors">
                      <Link href="/blog/preparing-for-study-abroad-essential-checklist">
                        Preparing for Study Abroad: Essential Checklist
                      </Link>
                    </h2>
                    <p className="text-slate-600 mb-4">
                      A comprehensive checklist to help you prepare for your study abroad journey, covering everything
                      from visa requirements to packing essentials.
                    </p>
                    <Button asChild variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      <Link href="/blog/preparing-for-study-abroad-essential-checklist">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Blog Post 3 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-[300px] md:h-full">
                    <Image src="/placeholder.svg?height=600&width=800" alt="Blog Post" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>March 28, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>David Kim</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-3 hover:text-red-600 transition-colors">
                      <Link href="/blog/navigating-cultural-differences-as-an-international-student">
                        Navigating Cultural Differences as an International Student
                      </Link>
                    </h2>
                    <p className="text-slate-600 mb-4">
                      Tips and strategies for adapting to a new culture, overcoming culture shock, and making the most
                      of your international education experience.
                    </p>
                    <Button asChild variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      <Link href="/blog/navigating-cultural-differences-as-an-international-student">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Blog Post 4 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-[300px] md:h-full">
                    <Image src="/placeholder.svg?height=600&width=800" alt="Blog Post" fill className="object-cover" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center text-sm text-slate-500 mb-3">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>March 15, 2023</span>
                      </div>
                      <div className="flex items-center">
                        <User className="h-4 w-4 mr-1" />
                        <span>Sarah Johnson</span>
                      </div>
                    </div>
                    <h2 className="text-xl font-bold text-slate-800 mb-3 hover:text-red-600 transition-colors">
                      <Link href="/blog/choosing-the-right-course-and-university">
                        Choosing the Right Course and University: A Guide
                      </Link>
                    </h2>
                    <p className="text-slate-600 mb-4">
                      Factors to consider when selecting a course and university, including academic reputation,
                      location, cost, and career prospects.
                    </p>
                    <Button asChild variant="outline" className="text-red-600 border-red-600 hover:bg-red-50">
                      <Link href="/blog/choosing-the-right-course-and-university">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-center mt-8">
                  <nav className="flex items-center space-x-2">
                    <Button variant="outline" className="w-10 h-10 p-0 rounded-md">
                      <span className="sr-only">Previous Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                    <Button variant="default" className="w-10 h-10 p-0 rounded-md bg-red-600 hover:bg-red-700">
                      1
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0 rounded-md">
                      2
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0 rounded-md">
                      3
                    </Button>
                    <Button variant="outline" className="w-10 h-10 p-0 rounded-md">
                      <span className="sr-only">Next Page</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </Button>
                  </nav>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Search */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Search</h3>
                  <div className="flex">
                    <Input placeholder="Search blog posts..." className="rounded-r-none" />
                    <Button className="rounded-l-none bg-red-600 hover:bg-red-700">
                      <Search className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Categories</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link
                        href="/blog/category/study-abroad"
                        className="flex items-center justify-between text-slate-700 hover:text-red-600"
                      >
                        <span>Study Abroad</span>
                        <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-full">
                          12
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/category/scholarships"
                        className="flex items-center justify-between text-slate-700 hover:text-red-600"
                      >
                        <span>Scholarships</span>
                        <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-full">
                          8
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/category/visa-information"
                        className="flex items-center justify-between text-slate-700 hover:text-red-600"
                      >
                        <span>Visa Information</span>
                        <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-full">
                          10
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/category/university-life"
                        className="flex items-center justify-between text-slate-700 hover:text-red-600"
                      >
                        <span>University Life</span>
                        <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-full">
                          15
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/category/career-advice"
                        className="flex items-center justify-between text-slate-700 hover:text-red-600"
                      >
                        <span>Career Advice</span>
                        <span className="bg-slate-100 text-slate-700 text-xs font-medium px-2 py-1 rounded-full">
                          7
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Recent Posts */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Recent Posts</h3>
                  <ul className="space-y-4">
                    <li>
                      <Link href="/blog/top-universities-for-international-students-2023" className="flex items-start">
                        <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="Recent Post"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-slate-800 hover:text-red-600 line-clamp-2">
                            Top Universities for International Students in 2023
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">May 10, 2023</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/scholarship-opportunities-for-international-students"
                        className="flex items-start"
                      >
                        <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="Recent Post"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-slate-800 hover:text-red-600 line-clamp-2">
                            Scholarship Opportunities for International Students
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">April 25, 2023</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/preparing-for-study-abroad-essential-checklist" className="flex items-start">
                        <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="Recent Post"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-slate-800 hover:text-red-600 line-clamp-2">
                            Preparing for Study Abroad: Essential Checklist
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">April 12, 2023</p>
                        </div>
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/blog/navigating-cultural-differences-as-an-international-student"
                        className="flex items-start"
                      >
                        <div className="relative w-16 h-16 rounded overflow-hidden flex-shrink-0">
                          <Image
                            src="/placeholder.svg?height=100&width=100"
                            alt="Recent Post"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="ml-4">
                          <h4 className="text-sm font-medium text-slate-800 hover:text-red-600 line-clamp-2">
                            Navigating Cultural Differences as an International Student
                          </h4>
                          <p className="text-xs text-slate-500 mt-1">March 28, 2023</p>
                        </div>
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Tags */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    <Link
                      href="/blog/tag/study-abroad"
                      className="bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      Study Abroad
                    </Link>
                    <Link
                      href="/blog/tag/scholarships"
                      className="bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      Scholarships
                    </Link>
                    <Link
                      href="/blog/tag/visa"
                      className="bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      Visa
                    </Link>
                    <Link
                      href="/blog/tag/university"
                      className="bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      University
                    </Link>
                    <Link
                      href="/blog/tag/accommodation"
                      className="bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      Accommodation
                    </Link>
                    <Link
                      href="/blog/tag/career"
                      className="bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      Career
                    </Link>
                    <Link
                      href="/blog/tag/culture"
                      className="bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      Culture
                    </Link>
                    <Link
                      href="/blog/tag/language"
                      className="bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      Language
                    </Link>
                    <Link
                      href="/blog/tag/finance"
                      className="bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      Finance
                    </Link>
                    <Link
                      href="/blog/tag/health"
                      className="bg-slate-100 text-slate-700 hover:bg-red-100 hover:text-red-600 px-3 py-1 rounded-full text-sm"
                    >
                      Health
                    </Link>
                  </div>
                </div>

                {/* Newsletter */}
                <div className="bg-slate-800 rounded-lg shadow-md p-6 text-white">
                  <h3 className="text-xl font-bold mb-4">Subscribe to Our Newsletter</h3>
                  <p className="text-slate-300 mb-4">
                    Stay updated with the latest news, tips, and insights about studying abroad.
                  </p>
                  <div className="space-y-3">
                    <Input
                      placeholder="Your email address"
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
                    />
                    <Button className="w-full bg-red-600 hover:bg-red-700">Subscribe</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
