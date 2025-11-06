"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wrench, MapPin, Play, Award, MessageCircle, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"

const services = [
  {
    icon: Wrench,
    title: "Repair Request",
    description: "Simple step-by-step process to get your items fixed",
    href: "/repair-request",
    gradient: "from-purple-500 to-pink-500",
    features: ["Visual progress", "Photo upload", "Smart matching", "Real-time updates"],
    stats: { requests: "2.5K+", avgTime: "< 2hrs", satisfaction: "98%" },
  },
  {
    icon: MapPin,
    title: "Repair Heroes",
    description: "Directory of skilled local repair professionals",
    href: "/repair-heroes",
    gradient: "from-blue-500 to-purple-500",
    features: ["Location search", "Reviews & ratings", "Specialty filter", "Direct contact"],
    stats: { heroes: "500+", cities: "129", avgRating: "4.9" },
  },
  {
    icon: Play,
    title: "DIY Tutorials",
    description: "Video tutorials for fixing things yourself",
    href: "/tutorials",
    gradient: "from-green-500 to-blue-500",
    features: ["Step-by-step", "Difficulty levels", "Tool requirements", "Progress track"],
    stats: { tutorials: "1.2K+", hours: "500+", completion: "87%" },
  },
  {
    icon: Award,
    title: "Repair Points",
    description: "Gamified rewards system for sustainable behavior",
    href: "/dashboard",
    gradient: "from-yellow-500 to-orange-500",
    features: ["Points for repairs", "Achievement badges", "Leaderboards", "Exclusive rewards"],
    stats: { points: "2.5M+", users: "5K+", rewards: "200+" },
  },
  {
    icon: MessageCircle,
    title: "Live Expert Chat",
    description: "Instant access to repair experts for quick advice",
    href: "/chat",
    gradient: "from-pink-500 to-red-500",
    features: ["24/7 available", "Specialist match", "Image sharing", "Follow-up support"],
    stats: { experts: "150+", response: "< 5min", solved: "94%" },
  },
]

export function Services() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  return (
    <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 via-blue-50 to-orange-50 animate-gradient-x"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 sm:mb-20 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 tracking-tight px-2 sm:px-0">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient-x bg-300%">
              Everything you need
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 bg-clip-text text-transparent animate-gradient-x bg-300% animation-delay-1000">
              to repair & restore
            </span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Our comprehensive platform connects you with repair experts, teaches you DIY skills, and rewards sustainable
            choices.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => {
              const Icon = service.icon
              const isExpanded = expandedIndex === index

              return (
                <Card
                  key={index}
                  className={`relative bg-white/80 backdrop-blur-lg border-0 shadow-xl rounded-2xl sm:rounded-3xl transition-all duration-500 hover:scale-105 group cursor-pointer overflow-hidden`}
                  onClick={() => setExpandedIndex(isExpanded ? null : index)}
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${service.gradient} rounded-2xl sm:rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>

                  <CardContent className="p-4 sm:p-6 md:p-8 relative z-10">
                    <div
                      className={`w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br ${service.gradient} rounded-xl sm:rounded-2xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features List - Mobile Optimized */}
                    <div
                      className={`space-y-2 mb-4 sm:mb-6 transition-all duration-500 ${isExpanded ? "opacity-100 max-h-40" : "opacity-0 max-h-0 overflow-hidden"}`}
                    >
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-xs sm:text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 mr-2 sm:mr-3 flex-shrink-0" />
                          <span className="truncate">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats - Mobile Optimized */}
                    <div
                      className={`grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6 transition-all duration-500 ${isExpanded ? "opacity-100 max-h-20" : "opacity-0 max-h-0 overflow-hidden"}`}
                    >
                      {Object.entries(service.stats).map(([key, value], statIndex) => (
                        <div key={statIndex} className="text-center">
                          <div
                            className={`text-base sm:text-lg font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent truncate`}
                          >
                            {value}
                          </div>
                          <div className="text-xs text-gray-500 capitalize truncate">{key}</div>
                        </div>
                      ))}
                    </div>

                    <Link href={service.href}>
                      <Button
                        className={`w-full bg-gradient-to-r ${service.gradient} hover:shadow-lg hover:shadow-purple-500/30 text-white rounded-full font-medium transition-all duration-300 group/btn text-sm sm:text-base py-2 sm:py-3`}
                      >
                        <span className="flex items-center justify-center gap-1 sm:gap-2">
                          Explore
                          <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </span>
                      </Button>
                    </Link>

                    <div
                      className={`absolute top-4 right-4 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r ${service.gradient} rounded-full opacity-20 group-hover:opacity-40 group-hover:scale-125 transition-all duration-500`}
                    ></div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up animation-delay-600">
          <Link href="/services">
            <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold shadow-xl shadow-purple-500/30 hover:shadow-2xl hover:shadow-purple-500/40 transform hover:scale-110 transition-all duration-500">
              View All Services
              <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
