import { Button } from "@/components/ui/button"
import Link from "next/link"

const CTASection = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Ready to Start Your International Education Journey?
        </h2>
        <p className="text-white/90 text-lg max-w-3xl mx-auto mb-8">
          Get personalized guidance from our expert consultants and take the first step towards your academic success
          abroad.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild size="lg" className="bg-white text-red-600 hover:bg-slate-100">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            <Link href="/services">Explore Our Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

export default CTASection
