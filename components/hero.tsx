"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Wrench, Smartphone, Star, Award, TrendingUp, Sparkles, Heart, Zap } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen relative overflow-hidden flex items-center pt-20 sm:pt-0">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-72 h-72 bg-gradient-to-r from-pink-400/30 to-blue-400/30 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-3 sm:px-4 py-12 sm:py-20 relative z-10 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Animated Testimonial */}
          <div className="flex items-center justify-center mb-6 sm:mb-8 animate-fade-in-up">
            <div className="bg-white/10 backdrop-blur-xl rounded-full p-3 sm:p-4 shadow-2xl shadow-blue-500/20 border border-white/20">
              <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-0">
                <Avatar className="w-6 h-6 sm:w-8 sm:h-8 sm:mr-3 ring-2 ring-blue-300/50 ring-offset-2 ring-offset-transparent">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Priya Sharma" />
                  <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs">
                    PS
                  </AvatarFallback>
                </Avatar>
                <div className="text-xs sm:text-sm text-white/90">
                  <span className="font-semibold bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
                    Priya Sharma
                  </span>
                  <span className="mx-2 text-white/60 hidden sm:inline">•</span>
                  <span className="block sm:inline">Easiest repair ever! 🔧</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Headline with Gradient Animation */}
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12 animate-fade-in-up animation-delay-200">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 via-pink-300 to-blue-300 bg-clip-text text-transparent animate-gradient-x bg-300% inline-block">
                Fix it,
              </span>
              <br />
              <span className="bg-gradient-to-r from-pink-300 via-purple-300 via-blue-300 to-pink-300 bg-clip-text text-transparent animate-gradient-x bg-300% animation-delay-1000 inline-block">
                don't bin it
              </span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
              By connecting you with India's most
              <br className="hidden sm:block" />
              <span className="bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent font-semibold">
                skilled repair heroes.
              </span>
            </p>
          </div>

          {/* Animated CTA Button */}
          <div className="mb-8 sm:mb-16 animate-fade-in-up animation-delay-400">
            <Link href="/repair-request">
              <Button className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white px-6 sm:px-12 py-3 sm:py-6 rounded-full text-sm sm:text-xl font-semibold shadow-2xl shadow-blue-500/40 hover:shadow-3xl hover:shadow-blue-500/50 transform hover:scale-105 sm:hover:scale-110 transition-all duration-500 group overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Start repairing
                  <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 animate-spin" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent animate-shimmer"></div>
              </Button>
            </Link>
          </div>

          {/* Social Proof */}
          <div className="text-xs sm:text-sm text-white/60 animate-fade-in-up animation-delay-600 px-4 sm:px-0">
            Used by <span className="font-semibold text-blue-300">5,000+</span> households in{" "}
            <span className="font-semibold text-purple-300">129+</span> cities
          </div>
        </div>
      </div>

      {/* Enhanced Floating Elements with Glass Effect */}
      {/* Phone Repair Card - Top Left */}
      <div className="absolute top-20 left-8 transform -rotate-12 hidden 2xl:block animate-float">
        <Card className="w-64 bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                <Smartphone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Screen Repair</h3>
                <p className="text-sm text-white/70">₹2,500</p>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Status</span>
                <span className="text-green-400 font-medium flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  Completed
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-white/70">Rating</span>
                <div className="flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
                  <span className="ml-1 font-medium text-white">4.9</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Repair Points Card - Top Right */}
      <div className="absolute top-32 right-12 transform rotate-6 hidden 2xl:block animate-float animation-delay-1000">
        <Card className="w-48 bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg animate-pulse">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h3 className="font-bold text-2xl bg-gradient-to-r from-blue-300 to-purple-300 bg-clip-text text-transparent">
              1,250
            </h3>
            <p className="text-sm text-white/70">Repair Points</p>
            <div className="mt-3 bg-gradient-to-r from-green-400/20 to-blue-400/20 backdrop-blur-sm text-green-300 text-xs px-3 py-1 rounded-full animate-bounce border border-green-400/30">
              +150 today
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Impact Stats - Bottom Left */}
      <div className="absolute bottom-32 left-16 transform rotate-3 hidden 2xl:block animate-float animation-delay-2000">
        <Card className="w-56 bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <TrendingUp className="w-6 h-6 text-green-400 mr-3 animate-bounce" />
              <h3 className="font-semibold text-white">Your Impact</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-white/70">CO₂ Saved</span>
                <span className="font-semibold bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                  145kg
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white/70">Money Saved</span>
                <span className="font-semibold bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                  ₹18,500
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-white/70">Items Fixed</span>
                <span className="font-semibold bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text text-transparent">
                  23
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Repair Hero Profile - Bottom Right */}
      <div className="absolute bottom-20 right-8 transform -rotate-6 hidden 2xl:block animate-float animation-delay-3000">
        <Card className="w-64 bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 rounded-3xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
          <CardContent className="p-6">
            <div className="flex items-center mb-4">
              <Avatar className="w-12 h-12 mr-4 ring-2 ring-purple-300/50 ring-offset-2 ring-offset-transparent">
                <AvatarImage src="/placeholder.svg?height=48&width=48" alt="Raj Kumar" />
                <AvatarFallback className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">RK</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-white">Raj Kumar</h3>
                <p className="text-sm text-white/70">Electronics Expert</p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current animate-pulse" />
                <span className="ml-1 text-sm font-medium text-white">4.9</span>
                <span className="ml-1 text-sm text-white/70">(127)</span>
              </div>
              <div className="text-sm text-white/70">2.3 km away</div>
            </div>
            <div className="mt-3 text-xs text-green-300 bg-gradient-to-r from-green-400/20 to-blue-400/20 backdrop-blur-sm px-3 py-1 rounded-full inline-block animate-pulse border border-green-400/30">
              Available now
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Floating Animated Icons */}
      <div className="absolute top-1/2 left-4 transform -translate-y-1/2 rotate-45 hidden 2xl:block animate-spin-slow">
        <div className="w-16 h-16 bg-gradient-to-br from-orange-400/80 to-red-500/80 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-xl border border-white/20">
          <Wrench className="w-8 h-8 text-white" />
        </div>
      </div>

      <div className="absolute top-1/3 right-4 transform rotate-12 hidden 2xl:block animate-bounce">
        <div className="w-12 h-12 bg-gradient-to-br from-purple-400/80 to-pink-500/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/20">
          <Heart className="w-6 h-6 text-white" />
        </div>
      </div>

      <div className="absolute bottom-1/3 left-1/4 transform -rotate-12 hidden 2xl:block animate-pulse">
        <div className="w-14 h-14 bg-gradient-to-br from-blue-400/80 to-green-500/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-xl border border-white/20">
          <Zap className="w-7 h-7 text-white" />
        </div>
      </div>
    </section>
  )
}
