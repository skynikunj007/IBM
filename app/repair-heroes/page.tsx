"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import {
  MapPin,
  Star,
  Filter,
  Search,
  Phone,
  MessageCircle,
  Award,
  CheckCircle,
  Wrench,
  Smartphone,
  Shirt,
  Sofa,
} from "lucide-react"

const initialRepairHeroes = [
  {
    id: 1,
    name: "Priya Electronics",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.9,
    reviews: 127,
    specialties: ["Electronics", "Smartphones", "Laptops"],
    location: "2.3 km away",
    description: "15+ years fixing electronics. Specializes in monsoon damage recovery.",
    price: "₹500-900/hour",
    responseTime: "< 2 hours",
    repairPoints: 2840,
    verified: true,
  },
  {
    id: 2,
    name: "Raj's Bike Repairs",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.8,
    reviews: 89,
    specialties: ["Bicycles", "E-bikes", "Scooters"],
    location: "1.8 km away",
    description: "Passionate cyclist helping keep bikes running in Indian traffic sustainably.",
    price: "₹400-700/hour",
    responseTime: "< 1 hour",
    repairPoints: 1950,
    verified: true,
  },
  {
    id: 3,
    name: "Meera's Textile Studio",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5.0,
    reviews: 203,
    specialties: ["Clothing", "Alterations", "Leather"],
    location: "3.1 km away",
    description: "Sustainable fashion advocate. Expert in saree and traditional wear restoration.",
    price: "₹300-600/hour",
    responseTime: "< 3 hours",
    repairPoints: 3200,
    verified: true,
  },
  {
    id: 4,
    name: "Arjun's Tool Workshop",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.7,
    reviews: 156,
    specialties: ["Furniture", "Wood", "Tools"],
    location: "4.2 km away",
    description: "Traditional craftsman bringing furniture back to life.",
    price: "₹600-1000/hour",
    responseTime: "< 4 hours",
    repairPoints: 2650,
    verified: true,
  },
  {
    id: 5,
    name: "Kavya Appliance Fix",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.6,
    reviews: 98,
    specialties: ["Appliances", "Washing Machine", "Refrigerator"],
    location: "5.1 km away",
    description: "Home appliance specialist with 12+ years experience.",
    price: "₹700-1200/hour",
    responseTime: "< 6 hours",
    repairPoints: 2100,
    verified: true,
  },
  {
    id: 6,
    name: "Rohit Mobile Care",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.8,
    reviews: 234,
    specialties: ["Smartphones", "Tablets", "Accessories"],
    location: "1.5 km away",
    description: "Quick mobile repairs with genuine parts guarantee.",
    price: "₹400-800/hour",
    responseTime: "< 1 hour",
    repairPoints: 3100,
    verified: true,
  },
]

const additionalHeroes = [
  {
    id: 7,
    name: "Sunita Fashion Fix",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.9,
    reviews: 145,
    specialties: ["Clothing", "Embroidery", "Tailoring"],
    location: "3.8 km away",
    description: "Expert in traditional Indian wear and modern fashion repairs.",
    price: "₹350-650/hour",
    responseTime: "< 4 hours",
    repairPoints: 2750,
    verified: true,
  },
  {
    id: 8,
    name: "Vikram Electronics Hub",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.7,
    reviews: 189,
    specialties: ["Electronics", "Gaming", "Audio"],
    location: "6.2 km away",
    description: "Gaming console and audio equipment specialist.",
    price: "₹550-950/hour",
    responseTime: "< 3 hours",
    repairPoints: 2400,
    verified: true,
  },
  {
    id: 9,
    name: "Deepika Home Solutions",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 4.8,
    reviews: 167,
    specialties: ["Furniture", "Home Decor", "Upholstery"],
    location: "4.7 km away",
    description: "Complete home furniture restoration and repair services.",
    price: "₹500-900/hour",
    responseTime: "< 5 hours",
    repairPoints: 2900,
    verified: true,
  },
]

const categories = ["All", "Electronics", "Clothing", "Furniture", "Appliances", "Bicycles", "Smartphones"]
const sortOptions = ["Distance", "Rating", "Price", "Response Time"]

export default function RepairHeroesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSort, setSelectedSort] = useState("Distance")
  const [repairHeroes, setRepairHeroes] = useState(initialRepairHeroes)
  const [showFilters, setShowFilters] = useState(false)

  const filteredHeroes = repairHeroes
    .filter((hero) => {
      const matchesSearch =
        hero.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hero.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        hero.specialties.some((specialty) => specialty.toLowerCase().includes(searchTerm.toLowerCase()))

      const matchesCategory = selectedCategory === "All" || hero.specialties.includes(selectedCategory)

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (selectedSort) {
        case "Rating":
          return b.rating - a.rating
        case "Price":
          return (
            Number.parseInt(a.price.split("-")[0].replace("₹", "")) -
            Number.parseInt(b.price.split("-")[0].replace("₹", ""))
          )
        case "Response Time":
          return (
            Number.parseInt(a.responseTime.replace(/[^\d]/g, "")) -
            Number.parseInt(b.responseTime.replace(/[^\d]/g, ""))
          )
        default:
          return Number.parseFloat(a.location.split(" ")[0]) - Number.parseFloat(b.location.split(" ")[0])
      }
    })

  const loadMoreHeroes = () => {
    const newHeroes = additionalHeroes.map((hero) => ({
      ...hero,
      id: hero.id + repairHeroes.length,
    }))
    setRepairHeroes([...repairHeroes, ...newHeroes])
  }

  const getSpecialtyIcon = (specialty: string) => {
    switch (specialty.toLowerCase()) {
      case "electronics":
      case "smartphones":
        return <Smartphone className="w-4 h-4" />
      case "clothing":
      case "alterations":
        return <Shirt className="w-4 h-4" />
      case "furniture":
      case "wood":
        return <Sofa className="w-4 h-4" />
      default:
        return <Wrench className="w-4 h-4" />
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 animate-gradient-x"></div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>

      <div className="container mx-auto px-4 py-32 relative z-10">
        <div className="text-center mb-8 animate-fade-in-up">
          <h1 className="text-5xl lg:text-6xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              Meet Our Repair Heroes
            </span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            Skilled professionals ready to fix your items sustainably
          </p>
        </div>

        {/* Search and Filter */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <Input
                    placeholder="Search by name, skill, or location..."
                    className="pl-10 rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full md:w-48 rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-white/20">
                    {categories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Popover open={showFilters} onOpenChange={setShowFilters}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                    >
                      <Filter className="w-4 h-4 mr-2" />
                      Filters
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-80 bg-slate-800/95 backdrop-blur-xl border-white/20 rounded-2xl">
                    <div className="space-y-4">
                      <h4 className="font-semibold text-white">Sort by</h4>
                      <Select value={selectedSort} onValueChange={setSelectedSort}>
                        <SelectTrigger className="rounded-xl border-white/20 bg-white/10 text-white">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-white/20">
                          {sortOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-white">Quick Filters</h4>
                        <div className="flex flex-wrap gap-2">
                          <Badge className="bg-green-500/20 text-green-300 border border-green-500/30 cursor-pointer hover:bg-green-500/30">
                            <CheckCircle className="w-3 h-3 mr-1" />
                            Verified Only
                          </Badge>
                          <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 cursor-pointer hover:bg-blue-500/30">
                            <Star className="w-3 h-3 mr-1" />
                            4.5+ Rating
                          </Badge>
                          <Badge className="bg-purple-500/20 text-purple-300 border border-purple-500/30 cursor-pointer hover:bg-purple-500/30">
                            Available Today
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </PopoverContent>
                </Popover>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Map Section */}
        <div className="max-w-6xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl">
            <CardHeader>
              <CardTitle className="flex items-center text-white">
                <MapPin className="w-5 h-5 mr-2 text-blue-400" />
                Repair Heroes Near You
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur-sm rounded-xl h-64 flex items-center justify-center border border-blue-400/30">
                <div className="text-center text-white/80">
                  <MapPin className="w-12 h-12 mx-auto mb-2" />
                  <p className="font-medium">Interactive Map</p>
                  <p className="text-sm">Showing {filteredHeroes.length} repair heroes in your area</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Heroes Grid */}
        <div className="max-w-6xl mx-auto animate-fade-in-up animation-delay-600">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredHeroes.map((hero) => (
              <Card
                key={hero.id}
                className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="relative">
                        <Avatar className="w-12 h-12 ring-2 ring-blue-400/50">
                          <AvatarImage src={hero.avatar || "/placeholder.svg"} alt={hero.name} />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                            {hero.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        {hero.verified && (
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center border-2 border-white">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                        )}
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{hero.name}</h3>
                        <div className="flex items-center text-sm text-white/70">
                          <MapPin className="w-3 h-3 mr-1" />
                          {hero.location}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center text-yellow-400 mb-1">
                        <Star className="w-4 h-4 fill-current animate-pulse" />
                        <span className="ml-1 text-sm font-medium text-white">{hero.rating}</span>
                      </div>
                      <p className="text-xs text-white/60">({hero.reviews} reviews)</p>
                    </div>
                  </div>

                  <p className="text-white/80 text-sm mb-4 leading-relaxed">{hero.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {hero.specialties.map((specialty) => (
                      <Badge
                        key={specialty}
                        className="bg-white/10 backdrop-blur-sm text-white/90 border border-white/20 rounded-full text-xs"
                      >
                        {getSpecialtyIcon(specialty)}
                        <span className="ml-1">{specialty}</span>
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex justify-between">
                      <span className="text-white/70">Price:</span>
                      <span className="font-medium text-white">{hero.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Response:</span>
                      <span className="font-medium text-green-400">{hero.responseTime}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70">Repair Points:</span>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 text-yellow-400 mr-1" />
                        <span className="font-medium text-white">{hero.repairPoints.toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      <Phone className="w-4 h-4 mr-2" />
                      Contact
                    </Button>
                    <Button
                      variant="outline"
                      className="rounded-full border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-8 animate-fade-in-up animation-delay-800">
          <Button
            onClick={loadMoreHeroes}
            variant="outline"
            className="rounded-full px-8 py-3 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            Load More Heroes
          </Button>
        </div>
      </div>
    </div>
  )
}
