"use client"

import { useParams, useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Wrench, MapPin, Play, Award, MessageCircle, CheckCircle, Star, ArrowLeft } from "lucide-react"
import Link from "next/link"

const serviceDetails = {
  "repair-request": {
    icon: Wrench,
    title: "Repair Request Flow",
    description: "Our intelligent repair request system makes getting your items fixed as simple as taking a photo.",
    gradient: "from-blue-500 to-purple-500",
    longDescription:
      "Transform your broken items into working treasures with our streamlined repair request system. Our AI-powered platform analyzes your item's condition, matches you with the perfect repair hero, and guides you through every step of the process.",
    features: [
      "AI-powered damage assessment",
      "Instant cost estimation",
      "Smart hero matching",
      "Real-time progress tracking",
      "Quality guarantee",
      "Pickup & delivery service",
      "24/7 customer support",
      "Insurance coverage",
    ],
    benefits: [
      "Save up to 70% compared to buying new",
      "Reduce environmental impact",
      "Support local repair experts",
      "Get items fixed within 24-48 hours",
    ],
    pricing: {
      basic: { price: "₹99", features: ["Basic assessment", "Local hero matching", "Standard support"] },
      premium: { price: "₹199", features: ["AI assessment", "Priority matching", "Premium support", "Pickup service"] },
      enterprise: {
        price: "₹499",
        features: ["Everything in Premium", "Same-day service", "Dedicated manager", "Bulk discounts"],
      },
    },
    stats: { requests: "2,547", success: "98.5%", avgTime: "2.3 hours", satisfaction: "4.9/5" },
    testimonials: [
      { name: "Priya Sharma", rating: 5, text: "Amazing service! My phone was fixed within hours." },
      { name: "Raj Kumar", rating: 5, text: "Professional and affordable. Highly recommended!" },
    ],
  },
  "repair-heroes": {
    icon: MapPin,
    title: "Repair Heroes Directory",
    description: "Connect with verified, skilled repair professionals in your neighborhood.",
    gradient: "from-green-500 to-blue-500",
    longDescription:
      "Discover a network of skilled repair professionals who are passionate about fixing things and reducing waste. Our heroes are verified experts with proven track records.",
    features: [
      "Verified professional profiles",
      "Real customer reviews",
      "Skill-based matching",
      "Location proximity",
      "Instant messaging",
      "Secure payments",
      "Background checks",
      "Insurance coverage",
    ],
    benefits: [
      "Find experts within 5km radius",
      "Compare prices and reviews",
      "Direct communication",
      "Guaranteed quality work",
    ],
    pricing: {
      basic: { price: "Free", features: ["Browse heroes", "View profiles", "Basic messaging"] },
      premium: { price: "₹99/month", features: ["Priority booking", "Advanced filters", "Premium support"] },
      enterprise: { price: "₹299/month", features: ["Bulk bookings", "Dedicated heroes", "Custom pricing"] },
    },
    stats: { heroes: "547", cities: "129", avgRating: "4.8/5", response: "< 1 hour" },
    testimonials: [
      { name: "Arjun Patel", rating: 5, text: "Found the perfect repair expert for my laptop!" },
      { name: "Meera Singh", rating: 5, text: "Great platform with verified professionals." },
    ],
  },
  tutorials: {
    icon: Play,
    title: "DIY Tutorial Library",
    description: "Learn to fix things yourself with our comprehensive video tutorial library.",
    gradient: "from-purple-500 to-pink-500",
    longDescription:
      "Empower yourself with knowledge! Our extensive library of video tutorials teaches you how to fix common problems yourself, saving money and building valuable skills.",
    features: [
      "HD video tutorials",
      "Step-by-step guides",
      "Difficulty ratings",
      "Tool requirements",
      "Progress tracking",
      "Community support",
      "Downloadable guides",
      "Expert Q&A",
    ],
    benefits: [
      "Learn at your own pace",
      "Save money on repairs",
      "Build practical skills",
      "Join a community of makers",
    ],
    pricing: {
      basic: { price: "Free", features: ["Basic tutorials", "Community access", "Progress tracking"] },
      premium: { price: "₹149/month", features: ["All tutorials", "HD videos", "Expert support", "Certificates"] },
      enterprise: {
        price: "₹499/month",
        features: ["Custom tutorials", "Team access", "Analytics", "Priority support"],
      },
    },
    stats: { tutorials: "1,247", hours: "500+", completion: "87%", rating: "4.7/5" },
    testimonials: [
      { name: "Kavya Reddy", rating: 5, text: "Learned so much! Fixed my bike myself." },
      { name: "Rohit Gupta", rating: 5, text: "Clear instructions and great video quality." },
    ],
  },
  "repair-points": {
    icon: Award,
    title: "Repair Points System",
    description: "Earn points for every repair and unlock exclusive rewards and achievements.",
    gradient: "from-yellow-500 to-orange-500",
    longDescription:
      "Turn your sustainable choices into rewards! Our gamified points system motivates you to repair more, learn more, and contribute to a circular economy.",
    features: [
      "Points for every repair",
      "Achievement badges",
      "Leaderboards",
      "Exclusive rewards",
      "Level progression",
      "Community challenges",
      "Referral bonuses",
      "Seasonal events",
    ],
    benefits: [
      "Earn rewards for good choices",
      "Unlock exclusive discounts",
      "Compete with friends",
      "Track your impact",
    ],
    pricing: {
      basic: { price: "Free", features: ["Basic points", "Standard rewards", "Community access"] },
      premium: { price: "₹99/month", features: ["2x points", "Premium rewards", "Early access", "Exclusive badges"] },
      enterprise: { price: "₹299/month", features: ["Custom rewards", "Team challenges", "Analytics", "Bulk points"] },
    },
    stats: { totalPoints: "2.5M+", activeUsers: "5,247", rewards: "200+", avgEarning: "150/month" },
    testimonials: [
      { name: "Anita Sharma", rating: 5, text: "Love earning points for being sustainable!" },
      { name: "Vikram Singh", rating: 5, text: "Great rewards and fun challenges." },
    ],
  },
  "live-chat": {
    icon: MessageCircle,
    title: "Live Expert Chat",
    description: "Get instant help from repair experts through our 24/7 chat support system.",
    gradient: "from-pink-500 to-red-500",
    longDescription:
      "Never feel stuck again! Our live chat connects you instantly with repair experts who can guide you through any problem, big or small.",
    features: [
      "24/7 availability",
      "Expert matching",
      "Image sharing",
      "Video calls",
      "Follow-up support",
      "Multi-language support",
      "Screen sharing",
      "File sharing",
    ],
    benefits: ["Instant expert help", "No appointment needed", "Visual problem solving", "Follow-up support included"],
    pricing: {
      basic: { price: "₹49/chat", features: ["Text chat", "Image sharing", "Basic support"] },
      premium: { price: "₹99/chat", features: ["Video calls", "Screen sharing", "Priority support", "Follow-up"] },
      enterprise: { price: "₹299/month", features: ["Unlimited chats", "Dedicated experts", "Custom integrations"] },
    },
    stats: { experts: "150+", response: "< 5 min", resolved: "94%", satisfaction: "4.8/5" },
    testimonials: [
      { name: "Deepak Kumar", rating: 5, text: "Got help instantly! Expert was very knowledgeable." },
      { name: "Sunita Patel", rating: 5, text: "Video call feature is amazing for complex issues." },
    ],
  },
}

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const serviceId = params.serviceId as string
  const service = serviceDetails[serviceId as keyof typeof serviceDetails]

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <Link href="/services">
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full">
              Back to Services
            </Button>
          </Link>
        </div>
      </div>
    )
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Back Button */}
        <div className="mb-8 animate-fade-in-up">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="text-white/80 hover:text-white hover:bg-white/10 rounded-full backdrop-blur-sm"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Services
          </Button>
        </div>

        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in-up animation-delay-200">
          <div
            className={`w-24 h-24 bg-gradient-to-br ${service.gradient} rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-2xl animate-pulse`}
          >
            <Icon className="w-12 h-12 text-white" />
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span
              className={`bg-gradient-to-r ${service.gradient.replace("to-", "via-white to-")} bg-clip-text text-transparent`}
            >
              {service.title}
            </span>
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">{service.longDescription}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {Object.entries(service.stats).map(([key, value], index) => (
              <Badge key={index} className={`bg-gradient-to-r ${service.gradient} text-white px-4 py-2 text-lg`}>
                {value} {key.replace(/([A-Z])/g, " $1").toLowerCase()}
              </Badge>
            ))}
          </div>
        </div>

        {/* Features & Benefits */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl animate-fade-in-up animation-delay-400">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                Key Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                >
                  <div
                    className={`w-8 h-8 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center flex-shrink-0`}
                  >
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Benefits */}
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl animate-fade-in-up animation-delay-600">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white flex items-center">
                <Star className="w-6 h-6 text-yellow-400 mr-3" />
                Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 p-3 rounded-xl hover:bg-white/5 transition-colors duration-200"
                >
                  <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Star className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white/90 font-medium">{benefit}</span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Pricing */}
        <div className="mb-16 animate-fade-in-up animation-delay-800">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              Choose Your Plan
            </span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(service.pricing).map(([plan, details], index) => (
              <Card
                key={index}
                className={`bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-500 hover:scale-105 ${
                  plan === "premium" ? "ring-2 ring-blue-400/50" : ""
                }`}
              >
                <CardContent className="p-8 text-center">
                  {plan === "premium" && (
                    <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white mb-4">Most Popular</Badge>
                  )}
                  <h3 className="text-2xl font-bold text-white mb-4 capitalize">{plan}</h3>
                  <div className="text-4xl font-bold mb-6">
                    <span className={`bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}>
                      {details.price}
                    </span>
                  </div>
                  <div className="space-y-3 mb-8">
                    {details.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-white/80">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Link href="/repair-request">
                    <Button
                      className={`w-full ${
                        plan === "premium"
                          ? `bg-gradient-to-r ${service.gradient} hover:shadow-xl`
                          : "bg-white/10 hover:bg-white/20 border border-white/20"
                      } text-white rounded-full py-3 font-semibold transition-all duration-300 hover:scale-105`}
                    >
                      Get Started
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16 animate-fade-in-up animation-delay-1000">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
              What Our Users Say
            </span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {service.testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-500 hover:scale-105"
              >
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-white/90 mb-6 text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-bold">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">{testimonial.name}</h4>
                      <p className="text-white/60 text-sm">Verified Customer</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-fade-in-up animation-delay-1200">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl max-w-4xl mx-auto overflow-hidden">
            <CardContent className="p-12">
              <h3 className="text-4xl font-bold mb-6">
                <span
                  className={`bg-gradient-to-r ${service.gradient.replace("to-", "via-white to-")} bg-clip-text text-transparent`}
                >
                  Ready to get started?
                </span>
              </h3>
              <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
                Join thousands of people who are already using {service.title.toLowerCase()} to make their lives easier.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/repair-request">
                  <Button
                    className={`bg-gradient-to-r ${service.gradient} hover:shadow-2xl text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300`}
                  >
                    Request Service Now
                  </Button>
                </Link>
                <Link href="/chat">
                  <Button
                    variant="outline"
                    className="px-8 py-4 rounded-full text-lg font-semibold border-2 border-white/20 hover:border-white/40 hover:bg-white/10 transition-all duration-300 bg-transparent text-white"
                  >
                    Chat with Expert
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
