"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Heart, Users, Globe, Award, Recycle, CheckCircle } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Arjun Patel",
    role: "Founder & CEO",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Environmental engineer passionate about circular economy and sustainable living.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Priya Sharma",
    role: "Head of Operations",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Operations expert with 10+ years in marketplace platforms and community building.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    name: "Raj Kumar",
    role: "Lead Developer",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Full-stack developer building scalable solutions for sustainable technology.",
    gradient: "from-green-500 to-blue-500",
  },
  {
    name: "Kavya Reddy",
    role: "Community Manager",
    avatar: "/placeholder.svg?height=80&width=80",
    bio: "Community builder connecting repair heroes with people who need help.",
    gradient: "from-yellow-500 to-orange-500",
  },
]

const values = [
  {
    icon: Heart,
    title: "Sustainability First",
    description: "Every repair prevents waste and reduces environmental impact",
    gradient: "from-green-500 to-blue-500",
  },
  {
    icon: Users,
    title: "Community Driven",
    description: "Building connections between neighbors and local experts",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    title: "Accessible to All",
    description: "Making repair services affordable and available everywhere",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: Award,
    title: "Quality Assured",
    description: "Verified experts providing guaranteed quality repairs",
    gradient: "from-yellow-500 to-orange-500",
  },
]

const milestones = [
  { year: "2023", title: "Founded RepairNet", desc: "Started with a vision to reduce electronic waste" },
  { year: "2023", title: "First 100 Heroes", desc: "Onboarded skilled repair professionals across 5 cities" },
  { year: "2024", title: "10K+ Repairs", desc: "Reached milestone of 10,000 successful repairs" },
  { year: "2024", title: "National Expansion", desc: "Expanded to 129+ cities across India" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 via-blue-50 to-orange-50 animate-gradient-x"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-20 animate-fade-in-up">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient-x bg-300%">
              About RepairNet
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-8">
            We're building India's largest circular economy repair network, connecting communities with skilled repair
            heroes to create a sustainable future.
          </p>
          <Badge className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 text-lg rounded-full animate-pulse">
            🌱 Sustainable • 🤝 Community-Driven • 🔧 Expert-Verified
          </Badge>
        </div>

        {/* Mission Statement */}
        <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl mb-20 overflow-hidden animate-fade-in-up animation-delay-200">
          <CardContent className="p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Our Mission
                  </span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed mb-6">
                  To create a world where fixing is the first choice, not the last resort. We believe every broken item
                  deserves a second chance, and every community deserves access to skilled repair services.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                      50T+
                    </div>
                    <div className="text-sm text-gray-600">CO₂ Saved</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                      12K+
                    </div>
                    <div className="text-sm text-gray-600">Items Repaired</div>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="w-full h-64 bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-3xl flex items-center justify-center">
                  <div className="text-center">
                    <Recycle className="w-16 h-16 text-purple-600 mx-auto mb-4 animate-spin-slow" />
                    <p className="text-purple-700 font-semibold">Circular Economy in Action</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-20 animate-fade-in-up animation-delay-400">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Our Values
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <Card
                  key={index}
                  className="bg-white/90 backdrop-blur-lg border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
                >
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${value.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20 animate-fade-in-up animation-delay-600">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Meet Our Team
            </span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-white/90 backdrop-blur-lg border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 group"
              >
                <CardContent className="p-8 text-center">
                  <div className="relative mb-6">
                    <Avatar className="w-20 h-20 mx-auto ring-4 ring-white shadow-xl">
                      <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                      <AvatarFallback className={`bg-gradient-to-r ${member.gradient} text-white text-xl`}>
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div
                      className={`absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r ${member.gradient} rounded-full flex items-center justify-center shadow-lg`}
                    >
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <Badge className={`bg-gradient-to-r ${member.gradient} text-white mb-4`}>{member.role}</Badge>
                  <p className="text-gray-600 text-sm leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20 animate-fade-in-up animation-delay-800">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-yellow-600 via-orange-600 to-red-600 bg-clip-text text-transparent">
              Our Journey
            </span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 via-pink-500 to-orange-500 rounded-full"></div>

              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`relative flex items-center mb-12 ${index % 2 === 0 ? "justify-start" : "justify-end"}`}
                >
                  <Card
                    className={`w-80 bg-white/90 backdrop-blur-lg border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105 ${index % 2 === 0 ? "mr-8" : "ml-8"}`}
                  >
                    <CardContent className="p-6">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-3">
                        {milestone.year}
                      </Badge>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.desc}</p>
                    </CardContent>
                  </Card>

                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-white shadow-lg animate-pulse"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up animation-delay-1000">
          <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-12">
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Join our mission
                </span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Be part of India's sustainable repair revolution. Whether you're looking to fix something or become a
                repair hero, we'd love to have you join our community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/repair-request">
                  <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
                    Start Your First Repair
                  </Button>
                </Link>
                <Link href="/repair-heroes">
                  <Button
                    variant="outline"
                    className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-purple-300 hover:border-purple-500 hover:bg-purple-50 transition-all duration-300 bg-transparent"
                  >
                    Become a Repair Hero
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
