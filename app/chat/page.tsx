"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Paperclip, ImageIcon, Video, Phone, MoreVertical, Smile, Zap, CheckCircle, Clock } from "lucide-react"

const experts = [
  {
    id: 1,
    name: "Raj Electronics Expert",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Electronics & Gadgets",
    status: "online",
    responseTime: "< 2 min",
    rating: 4.9,
    gradient: "from-blue-500 to-purple-500",
  },
  {
    id: 2,
    name: "Priya Appliance Pro",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Home Appliances",
    status: "online",
    responseTime: "< 5 min",
    rating: 4.8,
    gradient: "from-green-500 to-blue-500",
  },
  {
    id: 3,
    name: "Arjun Furniture Fix",
    avatar: "/placeholder.svg?height=40&width=40",
    specialty: "Furniture & Wood",
    status: "away",
    responseTime: "< 10 min",
    rating: 4.7,
    gradient: "from-yellow-500 to-orange-500",
  },
]

const chatMessages = [
  {
    id: 1,
    sender: "expert",
    message: "Hi! I'm Raj, your electronics repair expert. How can I help you today?",
    time: "2:30 PM",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 2,
    sender: "user",
    message: "Hi! My phone screen is cracked and it's not responding to touch in some areas. Can you help?",
    time: "2:31 PM",
  },
  {
    id: 3,
    sender: "expert",
    message: "I'd be happy to help! Can you share a photo of the damage? Also, what's the phone model?",
    time: "2:31 PM",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: 4,
    sender: "user",
    message: "It's an iPhone 13. Let me take a photo...",
    time: "2:32 PM",
  },
  {
    id: 5,
    sender: "expert",
    message:
      "Perfect! Based on what you've described, it sounds like the digitizer might be damaged along with the screen. The repair typically costs ₹8,000-12,000 depending on the extent of damage. Would you like me to connect you with a verified repair hero in your area?",
    time: "2:33 PM",
    avatar: "/placeholder.svg?height=32&width=32",
  },
]

export default function ChatPage() {
  const [selectedExpert, setSelectedExpert] = useState(experts[0])
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState(chatMessages)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const sendMessage = () => {
    if (message.trim()) {
      const newMessage = {
        id: messages.length + 1,
        sender: "user" as const,
        message: message,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      }
      setMessages([...messages, newMessage])
      setMessage("")

      // Simulate expert response
      setTimeout(() => {
        const expertResponse = {
          id: messages.length + 2,
          sender: "expert" as const,
          message: "Thanks for your message! Let me help you with that...",
          time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
          avatar: selectedExpert.avatar,
        }
        setMessages((prev) => [...prev, expertResponse])
      }, 1000)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-pink-50 via-blue-50 to-orange-50 animate-gradient-x"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-green-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient-x bg-300%">
              Live Expert Chat
            </span>
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Get instant help from verified repair experts. Share photos, ask questions, and get professional guidance in
            real-time.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-8">
          {/* Expert Sidebar */}
          <div className="lg:col-span-1 space-y-6 animate-fade-in-up animation-delay-200">
            <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center">
                  <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                  Available Experts
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {experts.map((expert) => (
                  <div
                    key={expert.id}
                    className={`p-4 rounded-2xl cursor-pointer transition-all duration-300 hover:scale-105 ${
                      selectedExpert.id === expert.id
                        ? `bg-gradient-to-r ${expert.gradient} text-white shadow-lg`
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => setSelectedExpert(expert)}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={expert.avatar || "/placeholder.svg"} alt={expert.name} />
                          <AvatarFallback className={selectedExpert.id === expert.id ? "bg-white/20" : "bg-gray-200"}>
                            {expert.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div
                          className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white ${
                            expert.status === "online" ? "bg-green-500" : "bg-yellow-500"
                          } animate-pulse`}
                        ></div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3
                          className={`font-semibold text-sm truncate ${
                            selectedExpert.id === expert.id ? "text-white" : "text-gray-900"
                          }`}
                        >
                          {expert.name}
                        </h3>
                        <p
                          className={`text-xs truncate ${
                            selectedExpert.id === expert.id ? "text-white/80" : "text-gray-500"
                          }`}
                        >
                          {expert.specialty}
                        </p>
                        <div className="flex items-center mt-1">
                          <Clock className="w-3 h-3 mr-1" />
                          <span className="text-xs">{expert.responseTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-gray-900">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-xl hover:shadow-lg transition-all duration-300">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Share Photo
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-purple-200 hover:bg-purple-50 transition-all duration-300 bg-transparent"
                >
                  <Video className="w-4 h-4 mr-2" />
                  Video Call
                </Button>
                <Button
                  variant="outline"
                  className="w-full rounded-xl border-pink-200 hover:bg-pink-50 transition-all duration-300 bg-transparent"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Voice Call
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Chat Interface */}
          <div className="lg:col-span-3 animate-fade-in-up animation-delay-400">
            <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-2xl rounded-3xl h-[600px] flex flex-col overflow-hidden">
              {/* Chat Header */}
              <CardHeader className={`bg-gradient-to-r ${selectedExpert.gradient} text-white rounded-t-3xl`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="w-12 h-12 ring-2 ring-white/30">
                        <AvatarImage src={selectedExpert.avatar || "/placeholder.svg"} alt={selectedExpert.name} />
                        <AvatarFallback className="bg-white/20 text-white">
                          {selectedExpert.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{selectedExpert.name}</h3>
                      <p className="text-white/80 text-sm">{selectedExpert.specialty}</p>
                      <div className="flex items-center mt-1">
                        <CheckCircle className="w-3 h-3 mr-1" />
                        <span className="text-xs">Verified Expert • {selectedExpert.rating} ⭐</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-full">
                      <Video className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-full">
                      <Phone className="w-5 h-5" />
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20 rounded-full">
                      <MoreVertical className="w-5 h-5" />
                    </Button>
                  </div>
                </div>
              </CardHeader>

              {/* Messages */}
              <CardContent className="flex-1 overflow-y-auto p-6 space-y-4">
                {messages.map((msg) => (
                  <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                    <div
                      className={`flex items-end space-x-2 max-w-xs lg:max-w-md ${msg.sender === "user" ? "flex-row-reverse space-x-reverse" : ""}`}
                    >
                      {msg.sender === "expert" && (
                        <Avatar className="w-8 h-8">
                          <AvatarImage src={msg.avatar || "/placeholder.svg"} alt="Expert" />
                          <AvatarFallback className="bg-gray-200 text-xs">EX</AvatarFallback>
                        </Avatar>
                      )}
                      <div
                        className={`px-4 py-3 rounded-2xl ${
                          msg.sender === "user"
                            ? `bg-gradient-to-r ${selectedExpert.gradient} text-white rounded-br-md`
                            : "bg-gray-100 text-gray-900 rounded-bl-md"
                        }`}
                      >
                        <p className="text-sm">{msg.message}</p>
                        <p className={`text-xs mt-1 ${msg.sender === "user" ? "text-white/70" : "text-gray-500"}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </CardContent>

              {/* Message Input */}
              <div className="p-6 border-t border-gray-100">
                <div className="flex items-center space-x-4">
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 rounded-full">
                    <Paperclip className="w-5 h-5" />
                  </Button>
                  <Button variant="ghost" size="sm" className="text-gray-500 hover:text-gray-700 rounded-full">
                    <ImageIcon className="w-5 h-5" />
                  </Button>
                  <div className="flex-1 relative">
                    <Input
                      placeholder="Type your message..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      className="rounded-full border-gray-200 pr-12 focus:border-purple-300 focus:ring-purple-200"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 rounded-full"
                    >
                      <Smile className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button
                    onClick={sendMessage}
                    className={`bg-gradient-to-r ${selectedExpert.gradient} text-white rounded-full w-12 h-12 p-0 hover:shadow-lg transition-all duration-300 hover:scale-110`}
                  >
                    <Send className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 animate-fade-in-up animation-delay-600">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Instant Response</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get help within minutes from verified repair experts available 24/7.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Verified</h3>
                <p className="text-gray-600 leading-relaxed">
                  All our experts are verified professionals with proven track records.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/90 backdrop-blur-lg border-0 shadow-xl rounded-3xl hover:shadow-2xl transition-all duration-500 hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <ImageIcon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Visual Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Share photos and videos to get accurate diagnosis and solutions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
