"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Upload, MapPin, Calendar, MessageCircle } from "lucide-react"

const steps = [
  { id: 1, title: "Item Details", icon: Upload },
  { id: 2, title: "Location", icon: MapPin },
  { id: 3, title: "Schedule", icon: Calendar },
  { id: 4, title: "Confirmation", icon: CheckCircle },
]

export default function RepairRequestPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    itemType: "",
    description: "",
    images: [],
    location: "",
    preferredDate: "",
    urgency: "",
  })
  const router = useRouter()

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleDashboardClick = () => {
    router.push("/dashboard")
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 py-32 relative z-10 max-w-4xl">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Request a Repair
            </span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">Let's get your item fixed by our repair heroes!</p>
        </div>

        {/* Progress Steps */}
        <div className="flex justify-center mb-12 animate-fade-in-up animation-delay-200">
          <div className="flex items-center space-x-4">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isActive = currentStep === step.id
              const isCompleted = currentStep > step.id

              return (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`
                    flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300
                    ${
                      isActive
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white scale-110 shadow-lg"
                        : isCompleted
                          ? "bg-gradient-to-r from-green-500 to-blue-500 text-white"
                          : "bg-white/10 backdrop-blur-sm text-white/60 border border-white/20"
                    }
                  `}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`ml-2 text-sm font-medium ${isActive ? "text-blue-300" : "text-white/60"}`}>
                    {step.title}
                  </span>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-8 h-0.5 mx-4 ${isCompleted ? "bg-gradient-to-r from-green-500 to-blue-500" : "bg-white/20"}`}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Steps */}
        <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl animate-fade-in-up animation-delay-400">
          <CardContent className="p-8">
            {currentStep === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-6">What needs fixing?</h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="itemType" className="text-white/90">
                      Item Category
                    </Label>
                    <Select
                      value={formData.itemType}
                      onValueChange={(value) => setFormData({ ...formData, itemType: value })}
                    >
                      <SelectTrigger className="rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white">
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="electronics">Electronics (Mobiles, Laptops, etc.)</SelectItem>
                        <SelectItem value="clothing">Clothing & Textiles (Sarees, Curtains, etc.)</SelectItem>
                        <SelectItem value="furniture">Furniture (Chairs, Tables, Beds, etc.)</SelectItem>
                        <SelectItem value="appliances">
                          Home Appliances (Mixer, Grinder, Washing Machine, etc.)
                        </SelectItem>
                        <SelectItem value="bikes">Bicycles</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="description" className="text-white/90">
                      Describe the problem
                    </Label>
                    <Textarea
                      id="description"
                      placeholder="Tell us what's wrong with your item..."
                      className="rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50 min-h-[120px]"
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label className="text-white/90">Upload Photos (Optional)</Label>
                    <div className="border-2 border-dashed border-white/20 rounded-xl p-8 text-center bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                      <Upload className="w-12 h-12 text-white/60 mx-auto mb-4" />
                      <p className="text-white/80">Drag & drop photos or click to browse</p>
                      <Button
                        variant="outline"
                        className="mt-4 rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20"
                      >
                        Choose Files
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-6">Where are you located?</h2>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="location" className="text-white/90">
                      Your Address
                    </Label>
                    <Input
                      id="location"
                      placeholder="Enter your address or PIN code"
                      className="rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 h-64 flex items-center justify-center border border-white/20">
                    <div className="text-center text-white/60">
                      <MapPin className="w-12 h-12 mx-auto mb-2" />
                      <p>Interactive map will appear here</p>
                      <p className="text-sm">Showing nearby repair heroes in your city</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-semibold text-white mb-6">When would you like the repair?</h2>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="preferredDate" className="text-white/90">
                      Preferred Date
                    </Label>
                    <Input
                      id="preferredDate"
                      type="date"
                      className="rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    />
                  </div>

                  <div>
                    <Label htmlFor="urgency" className="text-white/90">
                      Urgency Level
                    </Label>
                    <Select
                      value={formData.urgency}
                      onValueChange={(value) => setFormData({ ...formData, urgency: value })}
                    >
                      <SelectTrigger className="rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white">
                        <SelectValue placeholder="How urgent?" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-white/20">
                        <SelectItem value="low">Low - Within 2 weeks</SelectItem>
                        <SelectItem value="medium">Medium - Within 1 week</SelectItem>
                        <SelectItem value="high">High - Within 3 days</SelectItem>
                        <SelectItem value="urgent">Urgent - ASAP</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl p-6 border border-blue-400/30">
                  <h3 className="font-semibold text-white mb-2">💡 Pro Tip</h3>
                  <p className="text-white/80">Flexible dates help us find the best repair hero in your city!</p>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="text-center space-y-6">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>

                <h2 className="text-2xl font-semibold text-white">Request Submitted!</h2>
                <p className="text-white/80 max-w-md mx-auto">
                  We're matching you with the perfect repair hero. You'll receive a confirmation email shortly with next
                  steps.
                </p>

                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-sm rounded-xl p-6 border border-green-400/30">
                  <h3 className="font-semibold text-white mb-2">What happens next?</h3>
                  <ul className="text-left text-white/80 space-y-2">
                    <li>• We'll find 2-3 qualified repair heroes near you</li>
                    <li>• You'll receive quotes within 24 hours</li>
                    <li>• Choose your preferred hero and schedule</li>
                    <li>• Get your item fixed and earn repair points!</li>
                  </ul>
                </div>

                <Button
                  onClick={handleDashboardClick}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-8 py-3 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  View My Dashboard
                </Button>
              </div>
            )}

            {/* Navigation Buttons */}
            {currentStep < 4 && (
              <div className="flex justify-between mt-8 pt-6 border-t border-white/20">
                <Button
                  variant="outline"
                  onClick={prevStep}
                  disabled={currentStep === 1}
                  className="rounded-full px-6 bg-white/10 border-white/20 text-white hover:bg-white/20 disabled:opacity-50"
                >
                  Previous
                </Button>
                <Button
                  onClick={nextStep}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  {currentStep === 3 ? "Submit Request" : "Next Step"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Live Chat Button */}
        <div className="fixed bottom-6 right-6">
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full w-14 h-14 shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300">
            <MessageCircle className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
