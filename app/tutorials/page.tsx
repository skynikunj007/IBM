"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, Users, BookOpen, Search, Star, Award } from "lucide-react"

const initialTutorials = [
  {
    id: 1,
    title: "Fix a Cracked Phone Screen",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "12:34",
    difficulty: "Intermediate",
    views: "45.2K",
    rating: 4.8,
    category: "Electronics",
    description: "Step-by-step guide to replacing your smartphone screen safely.",
    tools: ["Screwdriver set", "Heat gun", "Suction cup"],
    repairPoints: 150,
  },
  {
    id: 2,
    title: "Sew a Button Back On",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "5:21",
    difficulty: "Beginner",
    views: "28.7K",
    rating: 4.9,
    category: "Clothing",
    description: "Quick and easy button reattachment for any garment.",
    tools: ["Needle", "Thread", "Scissors"],
    repairPoints: 25,
  },
  {
    id: 3,
    title: "Unclog a Vacuum Cleaner",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "8:45",
    difficulty: "Beginner",
    views: "67.1K",
    rating: 4.7,
    category: "Appliances",
    description: "Restore your vacuum's suction power with these simple steps.",
    tools: ["Screwdriver", "Cleaning brush"],
    repairPoints: 75,
  },
  {
    id: 4,
    title: "Fix Wobbly Chair Legs",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "15:22",
    difficulty: "Intermediate",
    views: "32.4K",
    rating: 4.6,
    category: "Furniture",
    description: "Stabilize your furniture and extend its lifespan.",
    tools: ["Wood glue", "Clamps", "Sandpaper"],
    repairPoints: 100,
  },
  {
    id: 5,
    title: "Patch Bicycle Inner Tube",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "7:18",
    difficulty: "Beginner",
    views: "89.3K",
    rating: 4.9,
    category: "Bicycles",
    description: "Never be stranded with a flat tire again!",
    tools: ["Patch kit", "Tire levers", "Pump"],
    repairPoints: 50,
  },
  {
    id: 6,
    title: "Replace Laptop Keyboard Keys",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "10:56",
    difficulty: "Advanced",
    views: "23.8K",
    rating: 4.5,
    category: "Electronics",
    description: "Restore your laptop keyboard to perfect working condition.",
    tools: ["Plastic prying tools", "Replacement keys"],
    repairPoints: 125,
  },
]

const additionalTutorials = [
  {
    id: 7,
    title: "Repair Torn Jeans",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "9:15",
    difficulty: "Beginner",
    views: "41.2K",
    rating: 4.7,
    category: "Clothing",
    description: "Creative ways to fix and style torn denim.",
    tools: ["Fabric patches", "Needle", "Thread"],
    repairPoints: 60,
  },
  {
    id: 8,
    title: "Fix Microwave Not Heating",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "14:30",
    difficulty: "Advanced",
    views: "35.8K",
    rating: 4.6,
    category: "Appliances",
    description: "Troubleshoot and repair common microwave issues.",
    tools: ["Multimeter", "Screwdriver set", "Safety gloves"],
    repairPoints: 180,
  },
  {
    id: 9,
    title: "Restore Wooden Table Finish",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "22:45",
    difficulty: "Intermediate",
    views: "19.6K",
    rating: 4.8,
    category: "Furniture",
    description: "Bring back the shine to your wooden furniture.",
    tools: ["Sandpaper", "Wood stain", "Brushes"],
    repairPoints: 140,
  },
  {
    id: 10,
    title: "Fix Bluetooth Headphones",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "11:20",
    difficulty: "Intermediate",
    views: "52.3K",
    rating: 4.5,
    category: "Electronics",
    description: "Common Bluetooth headphone repairs and troubleshooting.",
    tools: ["Small screwdrivers", "Soldering kit", "Replacement parts"],
    repairPoints: 110,
  },
  {
    id: 11,
    title: "Mend Leather Shoes",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "16:40",
    difficulty: "Advanced",
    views: "27.9K",
    rating: 4.9,
    category: "Clothing",
    description: "Professional leather repair techniques at home.",
    tools: ["Leather glue", "Patches", "Dye"],
    repairPoints: 160,
  },
  {
    id: 12,
    title: "Fix Washing Machine Drain",
    thumbnail: "/placeholder.svg?height=200&width=300",
    duration: "13:55",
    difficulty: "Intermediate",
    views: "38.7K",
    rating: 4.4,
    category: "Appliances",
    description: "Clear blockages and restore proper drainage.",
    tools: ["Pliers", "Drain snake", "Bucket"],
    repairPoints: 130,
  },
]

const categories = ["All", "Electronics", "Clothing", "Appliances", "Furniture", "Bicycles", "Home & Garden"]
const difficulties = ["All", "Beginner", "Intermediate", "Advanced"]

export default function TutorialsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedDifficulty, setSelectedDifficulty] = useState("All")
  const [tutorials, setTutorials] = useState(initialTutorials)

  const filteredTutorials = tutorials.filter((tutorial) => {
    const matchesSearch =
      tutorial.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tutorial.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === "All" || tutorial.category === selectedCategory
    const matchesDifficulty = selectedDifficulty === "All" || tutorial.difficulty === selectedDifficulty

    return matchesSearch && matchesCategory && matchesDifficulty
  })

  const loadMoreTutorials = () => {
    const newTutorials = additionalTutorials.map((tutorial) => ({
      ...tutorial,
      id: tutorial.id + tutorials.length,
    }))
    setTutorials([...tutorials, ...newTutorials])
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-500/20 text-green-300 border-green-500/30"
      case "Intermediate":
        return "bg-yellow-500/20 text-yellow-300 border-yellow-500/30"
      case "Advanced":
        return "bg-red-500/20 text-red-300 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-300 border-gray-500/30"
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
              DIY Repair Tutorials
            </span>
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">Learn to fix things yourself and earn repair points!</p>
        </div>

        {/* Search and Filters */}
        <div className="max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
                  <Input
                    placeholder="Search tutorials..."
                    className="pl-10 rounded-xl border-white/20 bg-white/10 backdrop-blur-sm text-white placeholder:text-white/50"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>

                <div className="flex flex-wrap gap-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-white/80 self-center">Category:</span>
                    {categories.map((category) => (
                      <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "outline"}
                        size="sm"
                        className={`rounded-full transition-all duration-300 ${
                          selectedCategory === category
                            ? "bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white shadow-lg"
                            : "border-white/20 bg-white/10 text-white hover:bg-white/20"
                        }`}
                        onClick={() => setSelectedCategory(category)}
                      >
                        {category}
                      </Button>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <span className="text-sm font-medium text-white/80 self-center">Difficulty:</span>
                    {difficulties.map((difficulty) => (
                      <Button
                        key={difficulty}
                        variant={selectedDifficulty === difficulty ? "default" : "outline"}
                        size="sm"
                        className={`rounded-full transition-all duration-300 ${
                          selectedDifficulty === difficulty
                            ? "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg"
                            : "border-white/20 bg-white/10 text-white hover:bg-white/20"
                        }`}
                        onClick={() => setSelectedDifficulty(difficulty)}
                      >
                        {difficulty}
                      </Button>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Featured Tutorial */}
        <div className="max-w-6xl mx-auto mb-8 animate-fade-in-up animation-delay-400">
          <Card className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <div className="relative h-64 md:h-full bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-4 mx-auto mb-4 shadow-2xl animate-pulse" />
                    <p className="text-white font-medium">Featured Tutorial</p>
                  </div>
                </div>
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="mb-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-white border-0">
                  🔥 Most Popular
                </Badge>
                <h2 className="text-2xl font-bold text-white mb-4">Master Phone Screen Repairs</h2>
                <p className="text-white/80 mb-6 leading-relaxed">
                  Our most comprehensive guide to smartphone screen replacement. Perfect for beginners with detailed
                  explanations and safety tips.
                </p>
                <div className="flex items-center space-x-4 mb-6 text-sm text-white/70">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    45 minutes
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    125K views
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1 text-yellow-400" />
                    200 points
                  </div>
                </div>
                <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white rounded-full px-8 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Now
                </Button>
              </div>
            </div>
          </Card>
        </div>

        {/* Tutorials Grid */}
        <div className="max-w-6xl mx-auto animate-fade-in-up animation-delay-600">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTutorials.map((tutorial) => (
              <Card
                key={tutorial.id}
                className="bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl overflow-hidden hover:shadow-3xl transition-all duration-500 hover:scale-105 group"
              >
                <div className="relative">
                  <img
                    src={tutorial.thumbnail || "/placeholder.svg"}
                    alt={tutorial.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button className="bg-white/90 text-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300">
                      <Play className="w-5 h-5" />
                    </Button>
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs backdrop-blur-sm">
                    {tutorial.duration}
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge className={`${getDifficultyColor(tutorial.difficulty)} border backdrop-blur-sm`}>
                      {tutorial.difficulty}
                    </Badge>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <Badge className="bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-full backdrop-blur-sm">
                      {tutorial.category}
                    </Badge>
                    <div className="flex items-center text-yellow-400">
                      <Star className="w-4 h-4 fill-current animate-pulse" />
                      <span className="ml-1 text-sm text-white/80">{tutorial.rating}</span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-white mb-2 leading-tight">{tutorial.title}</h3>
                  <p className="text-white/70 text-sm mb-4 leading-relaxed">{tutorial.description}</p>

                  <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {tutorial.views} views
                    </div>
                    <div className="flex items-center text-green-400">
                      <Award className="w-4 h-4 mr-1" />+{tutorial.repairPoints} points
                    </div>
                  </div>

                  <div className="space-y-2">
                    <p className="text-xs text-white/60 font-medium">Tools needed:</p>
                    <div className="flex flex-wrap gap-1">
                      {tutorial.tools.map((tool, index) => (
                        <Badge
                          key={index}
                          className="text-xs rounded-full bg-white/10 text-white/80 border border-white/20 backdrop-blur-sm"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Load More */}
        <div className="text-center mt-8 animate-fade-in-up animation-delay-800">
          <Button
            onClick={loadMoreTutorials}
            variant="outline"
            className="rounded-full px-8 py-3 border-white/20 bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
          >
            <BookOpen className="w-4 h-4 mr-2" />
            Load More Tutorials
          </Button>
        </div>
      </div>
    </div>
  )
}
