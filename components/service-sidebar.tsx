import Link from "next/link"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface ServiceSidebarProps {
  currentService?: string
}

const services = [
  {
    name: "Career Pathway Guidance",
    href: "/services/career-pathway-guidance",
    id: "career-pathway-guidance",
  },
  {
    name: "University Selection Guidance",
    href: "/services/university-selection-guidance",
    id: "university-selection-guidance",
  },
  {
    name: "Application Processing",
    href: "/services/application-processing",
    id: "application-processing",
  },
  {
    name: "Visa Processing",
    href: "/services/visa-processing",
    id: "visa-processing",
  },
  {
    name: "Student Consultation",
    href: "/services/student-consultation",
    id: "student-consultation",
  },
  {
    name: "Post Arrival Service",
    href: "/services/post-arrival-service",
    id: "post-arrival-service",
  },
]

const ServiceSidebar = ({ currentService }: ServiceSidebarProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="bg-slate-800 text-white py-4 px-6">
        <h3 className="text-xl font-bold">Our Services</h3>
      </div>
      <div className="divide-y divide-slate-100">
        {services.map((service) => (
          <Link
            key={service.id}
            href={service.href}
            className={cn(
              "flex items-center justify-between px-6 py-4 hover:bg-red-50 transition-colors",
              currentService === service.id ? "bg-red-50 text-red-600 font-medium" : "text-slate-700",
            )}
          >
            <span>{service.name}</span>
            <ChevronRight
              className={cn("h-5 w-5", currentService === service.id ? "text-red-600" : "text-slate-400")}
            />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ServiceSidebar
