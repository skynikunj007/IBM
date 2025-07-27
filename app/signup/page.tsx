"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff, Mail, Lock, User, ArrowRight, Recycle, Sparkles, CheckCircle } from "lucide-react"

export default function SignupPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    subscribeNewsletter: true,
  })
  const [isLoading, setIsLoading] = useState(false)
  const [currentStep, setCurrentStep] = useState(1)
  const router = useRouter()

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate signup process
    setTimeout(() => {
      setIsLoading(false)
      setCurrentStep(4) // Success step
      setTimeout(() => {
        router.push("/dashboard")
      }, 2000)
    }, 2000)
  }

  return (
    <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
      {/* Darker Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-slate-900 to-black"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/30 to-pink-900/30 animate-gradient-x"></div>

      {/* Floating Gradient Orbs - Darker */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-gradient-to-r from-pink-600/20 to-blue-600/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="text-center mb-8 animate-fade-in-up">
            <Link href="/" className="inline-flex items-center space-x-3 group">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-2xl shadow-blue-600/40">
                  <Recycle className="w-6 h-6 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-yellow-500 to-orange-600 rounded-full animate-pulse">
                  <Sparkles className="w-3 h-3 text-white p-0.5" />
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                RepairNet
              </span>
            </Link>
          </div>

          {/* Progress Indicator */}
          {currentStep < 4 && (
            <div className="flex justify-center mb-8 animate-fade-in-up animation-delay-100">
              <div className="flex items-center space-x-4">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
                        currentStep >= step
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110"
                          : "bg-white/10 text-white/60 border border-white/20"
                      }`}
                    >
                      {currentStep > step ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <span className="font-semibold">{step}</span>
                      )}
                    </div>
                    {step < 3 && (
                      <div
                        className={`w-12 h-0.5 mx-2 transition-all duration-500 ${
                          currentStep > step ? "bg-gradient-to-r from-blue-600 to-purple-600" : "bg-white/20"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Signup Card */}
          <Card className="bg-white/5 backdrop-blur-2xl border border-white/10 shadow-2xl rounded-3xl animate-fade-in-up animation-delay-200 overflow-hidden">
            <CardHeader className="text-center pb-6 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
              <CardTitle className="text-3xl font-bold text-white mb-2">
                {currentStep === 4 ? "Welcome to RepairNet!" : "Join RepairNet"}
              </CardTitle>
              <p className="text-white/70">
                {currentStep === 1 && "Create your account to start repairing"}
                {currentStep === 2 && "Set up your secure password"}
                {currentStep === 3 && "Almost there! Just a few more details"}
                {currentStep === 4 && "Your account has been created successfully"}
              </p>
            </CardHeader>
            <CardContent className="p-8">
              {currentStep === 4 ? (
                // Success Step
                <div className="text-center space-y-6 animate-fade-in-up">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <CheckCircle className="w-10 h-10 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Account Created!</h3>
                    <p className="text-white/70">Redirecting you to your dashboard...</p>
                  </div>
                  <div className="w-full bg-white/10 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full animate-pulse"
                      style={{ width: "100%" }}
                    ></div>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={
                    currentStep === 3
                      ? handleSignup
                      : (e) => {
                          e.preventDefault()
                          handleNextStep()
                        }
                  }
                  className="space-y-6"
                >
                  {/* Step 1: Basic Info */}
                  {currentStep === 1 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-white/90 font-medium">
                          Full Name
                        </Label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                          <Input
                            id="name"
                            type="text"
                            placeholder="Enter your full name"
                            value={formData.name}
                            onChange={(e) => handleInputChange("name", e.target.value)}
                            className="pl-10 rounded-xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-white/90 font-medium">
                          Email Address
                        </Label>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                          <Input
                            id="email"
                            type="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={(e) => handleInputChange("email", e.target.value)}
                            className="pl-10 rounded-xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20"
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Password */}
                  {currentStep === 2 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <div className="space-y-2">
                        <Label htmlFor="password" className="text-white/90 font-medium">
                          Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                          <Input
                            id="password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Create a strong password"
                            value={formData.password}
                            onChange={(e) => handleInputChange("password", e.target.value)}
                            className="pl-10 pr-10 rounded-xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg"
                            onClick={() => setShowPassword(!showPassword)}
                          >
                            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-white/90 font-medium">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                          <Input
                            id="confirmPassword"
                            type={showConfirmPassword ? "text" : "password"}
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                            className="pl-10 pr-10 rounded-xl border-white/10 bg-white/5 backdrop-blur-sm text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20"
                            required
                          />
                          <Button
                            type="button"
                            variant="ghost"
                            size="sm"
                            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          >
                            {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                          </Button>
                        </div>
                      </div>

                      {/* Password Strength Indicator */}
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-white/70">Password Strength</span>
                          <span className="text-green-400">Strong</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2">
                          <div
                            className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
                            style={{ width: "80%" }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Terms & Preferences */}
                  {currentStep === 3 && (
                    <div className="space-y-6 animate-fade-in-up">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="terms"
                            checked={formData.agreeToTerms}
                            onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked)}
                            className="border-white/20 data-[state=checked]:bg-blue-600 data-[state=checked]:border-blue-600 mt-1"
                          />
                          <Label htmlFor="terms" className="text-white/80 text-sm leading-relaxed">
                            I agree to the{" "}
                            <Link href="/terms" className="text-blue-400 hover:text-blue-300 underline">
                              Terms of Service
                            </Link>{" "}
                            and{" "}
                            <Link href="/privacy" className="text-blue-400 hover:text-blue-300 underline">
                              Privacy Policy
                            </Link>
                          </Label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="newsletter"
                            checked={formData.subscribeNewsletter}
                            onCheckedChange={(checked) => handleInputChange("subscribeNewsletter", checked)}
                            className="border-white/20 data-[state=checked]:bg-purple-600 data-[state=checked]:border-purple-600 mt-1"
                          />
                          <Label htmlFor="newsletter" className="text-white/80 text-sm leading-relaxed">
                            Subscribe to our newsletter for repair tips, sustainability insights, and platform updates
                          </Label>
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20">
                        <h4 className="font-semibold text-white mb-2">🎉 Welcome Benefits</h4>
                        <ul className="text-white/80 text-sm space-y-1">
                          <li>• 100 free repair points to get started</li>
                          <li>• Access to exclusive beginner tutorials</li>
                          <li>• Priority matching with top-rated heroes</li>
                          <li>• 30-day premium features trial</li>
                        </ul>
                      </div>
                    </div>
                  )}

                  {/* Navigation Buttons */}
                  <div className="flex justify-between pt-6">
                    {currentStep > 1 && (
                      <Button
                        type="button"
                        onClick={handlePrevStep}
                        variant="outline"
                        className="rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300"
                      >
                        Previous
                      </Button>
                    )}

                    <Button
                      type="submit"
                      disabled={isLoading || (currentStep === 3 && !formData.agreeToTerms)}
                      className={`bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white rounded-xl py-3 px-8 font-semibold shadow-2xl shadow-blue-600/40 hover:shadow-3xl hover:shadow-blue-600/50 transform hover:scale-105 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed ${currentStep === 1 ? "ml-auto" : ""}`}
                    >
                      {isLoading ? (
                        <div className="flex items-center justify-center">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                          Creating Account...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          {currentStep === 3 ? "Create Account" : "Continue"}
                          <ArrowRight className="ml-2 w-5 h-5" />
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              )}

              {/* Sign In Link */}
              {currentStep < 4 && (
                <div className="text-center mt-8 pt-6 border-t border-white/10">
                  <p className="text-white/70">
                    Already have an account?{" "}
                    <Link
                      href="/login"
                      className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
                    >
                      Sign in
                    </Link>
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
