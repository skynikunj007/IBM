"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Wrench, MapPin, Play, Award, MessageCircle, CheckCircle, TrendingUp } from "lucide-react"
import Link from "next/link"

const serviceDetails = [
  {
    id: "repair-request",
    icon: Wrench,
    title: "Repair Request Flow",
    description: "Our intelligent repair request system makes getting your items fixed as simple as taking a photo.",
    gradient: "from-purple-500 to-pink-500",
    features: [
      "AI-powered damage assessment",
      "Instant cost estimation",
      "Smart hero matching",
      "Real-time progress tracking",
      "Quality guarantee",
      "Pickup & delivery service",
    ],
    process: [
      { step: 1, title: "Upload Photos", desc: "Take photos of your broken item" },
      { step: 2, title: "Get Matched", desc: "AI finds the perfect repair hero" },
      { step: 3, title: "Schedule", desc: "Choose convenient time & location" },
      { step: 4, title: "Get Fixed", desc: "Professional repair with warranty" },
    ],
    stats: { requests: "2,547", success: "98.5%", avgTime: "2.3 hours", satisfaction: "4.9/5" },
  },
  {
    id: "heroes",
    icon: MapPin,
    title: "Repair Heroes Network",
    description: "Connect with verified, skilled repair professionals in your neighborhood.",
    gradient: "from-blue-500 to-purple-500",
    features: [
      "Verified professional profiles",
      "Real customer reviews",
      "Skill-based matching",
      "Location proximity",
      "Instant messaging",
      "Secure payments",
    ],
    process: [
      { step: 1, title: "Search", desc: "Find heroes by location & skill" },
      { step: 2, title: "Compare", desc: "Check reviews, rates & availability" },
      { step: 3, title: "Connect", desc: "Message directly with heroes" },
      { step: 4, title: "Book", desc: "Schedule your repair service" },
    ],
    stats: { heroes: "547", cities: "129", avgRating: "4.8/5", response: "< 1 hour" },
  },
  {
    id: "tutorials",
    icon: Play,
    title: "DIY Tutorial Library",
    description: "Learn to fix things yourself with our comprehensive video tutorial library.",
    gradient: "from-green-500 to-blue-500",
    features: [
      "HD video tutorials",
      "Step-by-step guides",
      "Difficulty ratings",
      "Tool requirements",
      "Progress tracking",
      "Community support",
    ],
    process: [
      { step: 1, title: "Browse", desc: "Find tutorials by category" },
      { step: 2, title: "Learn", desc: "Follow step-by-step videos" },
      { step: 3, title: "Practice", desc: "Apply skills to your items" },
      { step: 4, title: "Share", desc: "Help others in community" },
    ],
    stats: { tutorials: "1,247", hours: "500+", completion: "87%", rating: "4.7/5" },
  },
  {
    id: "points",
    icon: Award,
    title: "Repair Points System",
    description: "Earn points for every repair and unlock exclusive rewards and achievements.",
    gradient: "from-yellow-500 to-orange-500",
    features: [
      "Points for every repair",
      "Achievement badges",
      "Leaderboards",
      "Exclusive rewards",
      "Level progression",
      "Community challenges",
    ],
    process: [
      { step: 1, title: "Repair", desc: "Complete repairs or tutorials" },
      { step: 2, title: "Earn", desc: "Collect points & badges" },
      { step: 3, title: "Level Up", desc: "Unlock new tiers & rewards" },
      { step: 4, title: "Redeem", desc: "Use points for discounts" },
    ],
    stats: { totalPoints: "2.5M+", activeUsers: "5,247", rewards: "200+", avgEarning: "150/month" },
  },
  {
    id: "chat",
    icon: MessageCircle,
    title: "Live Expert Chat",
    description: "Get instant help from repair experts through our 24/7 chat support system.",
    gradient: "from-pink-500 to-red-500",
    features: [
      "24/7 availability",
      "Expert matching",
      "Image sharing",
      "Video calls",
      "Follow-up support",
      "Multi-language support",
    ],
    process: [
      { step: 1, title: "Connect", desc: "Start chat with available expert" },
      { step: 2, title: "Describe", desc: "Share photos & describe issue" },
      { step: 3, title: "Get Help", desc: "Receive expert guidance" },
      { step: 4, title: "Follow Up", desc: "Get continued support" },
    ],
    stats: { experts: "150+", response: "< 5 min", resolved: "94%", satisfaction: "4.8/5" },
  },
]

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("repair-request")

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 via-blue-50 to-orange-50 animate-gradient-x"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-196 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h1 className="text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient-x bg-300%">
              Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Comprehensive repair solutions designed to make fixing things easy, rewarding, and sustainable.
          </p>
        </div>

        {/* Service Tabs */}
        <div className="max-w-7xl mx-auto">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full h-full grid-cols-2 lg:grid-cols-5 mb-12 bg-white/80 backdrop-blur-lg rounded-2xl p-2 shadow-xl">
              {serviceDetails.map((service) => {
                const Icon = service.icon
                return (
                  <TabsTrigger
                    key={service.id}
                    value={service.id}
                    className={`flex items-center space-x-2 rounded-xl py-4 px-6 transition-all duration-300 ${
                      activeTab === service.id
                        ? `bg-gradient-to-r ${service.gradient} text-white shadow-lg`
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="hidden sm:inline font-medium">{service.title.split(" ")[0]}</span>
                  </TabsTrigger>
                )
              })}
            </TabsList>

            {serviceDetails.map((service) => {
              const Icon = service.icon
              return (
                <TabsContent key={service.id} value={service.id} className="space-y-8">
                  {/* Service Overview */}
                  <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl overflow-hidden">
                    <CardContent className="p-12">
                      <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">
                          <div
                            className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center shadow-xl animate-pulse`}
                          >
                            <Icon className="w-10 h-10 text-white" />
                          </div>
                          <h2 className="text-4xl font-bold text-gray-900">{service.title}</h2>
                          <p className="text-xl text-gray-600 leading-relaxed">{service.description}</p>
                          <Link href={`/${service.id}`}>
                            <Button
                              className={`bg-gradient-to-r ${service.gradient} hover:shadow-xl text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300`}
                            >
                              Get Started Now
                            </Button>
                          </Link>
                        </div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-6">
                          {Object.entries(service.stats).map(([key, value], index) => (
                            <Card
                              key={index}
                              className="bg-white/70 backdrop-blur-sm border-0 shadow-lg rounded-2xl hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                              <CardContent className="p-6 text-center">
                                <div
                                  className={`text-3xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent mb-2`}
                                >
                                  {value}
                                </div>
                                <div className="text-sm text-gray-600 capitalize font-medium">
                                  {key.replace(/([A-Z])/g, " $1")}
                                </div>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Features & Process */}
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Features */}
                    <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl rounded-3xl">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                          <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                          Key Features
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {service.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 p-3 rounded-xl hover:bg-gray-50 transition-colors duration-200"
                          >
                            <div
                              className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                            >
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span className="text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    {/* Process */}
                    <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl rounded-3xl">
                      <CardHeader>
                        <CardTitle className="text-2xl font-bold text-gray-900 flex items-center">
                          <TrendingUp className="w-6 h-6 text-blue-500 mr-3" />
                          How It Works
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        {service.process.map((step, index) => (
                          <div key={index} className="flex items-start space-x-4">
                            <div
                              className={`w-10 h-10 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center text-white font-bold shadow-lg flex-shrink-0`}
                            >
                              {step.step}
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900 mb-1">{step.title}</h4>
                              <p className="text-gray-600">{step.desc}</p>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              )
            })}
          </Tabs>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20 animate-fade-in-up animation-delay-800">
          <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-12">
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
                  Ready to start your repair journey?
                </span>
              </h3>
              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Join thousands of people who are making a difference through sustainable repair practices.
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
                    Find Repair Heroes
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
