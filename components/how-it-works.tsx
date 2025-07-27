import { Card, CardContent } from "@/components/ui/card"
import { Upload, Search, Wrench, Award } from "lucide-react"

const steps = [
  {
    icon: Upload,
    title: "Submit Your Item",
    description:
      "Upload photos and describe what needs fixing. Our smart system will categorize and assess your repair needs.",
    color: "from-green-400 to-blue-500",
  },
  {
    icon: Search,
    title: "Find Your Hero",
    description: "We match you with qualified local repair experts based on location, specialty, and availability.",
    color: "from-blue-400 to-purple-500",
  },
  {
    icon: Wrench,
    title: "Get It Fixed",
    description: "Your repair hero fixes your item using sustainable practices and quality parts when needed.",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: Award,
    title: "Earn Rewards",
    description: "Collect repair points, unlock achievements, and track your positive environmental impact.",
    color: "from-yellow-400 to-orange-500",
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How It
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-blue-500"> Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Getting your items repaired is simple, sustainable, and rewarding. Here's how our circular economy network
            operates.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div key={index} className="relative">
                  <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-300 hover:scale-105 h-full">
                    <CardContent className="p-8 text-center">
                      <div className="relative mb-6">
                        <div
                          className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center mx-auto shadow-lg`}
                        >
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
                          <span className="text-sm font-bold text-gray-800">{index + 1}</span>
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </CardContent>
                  </Card>

                  {/* Connecting Arrow */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-blue-500"></div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-blue-500 border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
