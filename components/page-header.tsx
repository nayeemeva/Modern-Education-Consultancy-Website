import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface PageHeaderProps {
  title: string
  breadcrumbs: {
    label: string
    href: string
  }[]
  backgroundImage?: string
}

const PageHeader = ({
  title,
  breadcrumbs,
  backgroundImage = "/placeholder.svg?height=600&width=1600",
}: PageHeaderProps) => {
  return (
    <div
      className="relative bg-slate-900 py-24 md:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.8), rgba(15, 23, 42, 0.8)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">{title}</h1>
        <div className="flex justify-center items-center text-slate-300">
          {breadcrumbs.map((breadcrumb, index) => (
            <div key={index} className="flex items-center">
              {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
              <Link
                href={breadcrumb.href}
                className={`hover:text-white transition-colors ${
                  index === breadcrumbs.length - 1 ? "text-red-400" : "text-slate-300"
                }`}
              >
                {breadcrumb.label}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PageHeader
