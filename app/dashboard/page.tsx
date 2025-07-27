"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Award, Recycle, Clock, TrendingUp, Star, Calendar, MapPin, Play, CheckCircle, Target, Zap } from "lucide-react"

const userStats = {
  name: "Arjun Sharma",
  avatar: "/placeholder.svg?height=80&width=80",
  repairPoints: 1250,
  level: "Eco Warrior",
  nextLevel: "Repair Master",
  pointsToNext: 250,
  itemsRepaired: 23,
  co2Saved: 145,
  moneySaved: 18500,
  streak: 12,
}

const recentActivity = [
  {
    id: 1,
    type: "repair",
    title: "Phone screen repair completed",
    date: "2 days ago",
    points: 150,
    status: "completed",
  },
  {
    id: 2,
    type: "tutorial",
    title: "Watched: Fix Wobbly Chair Legs",
    date: "5 days ago",
    points: 25,
    status: "completed",
  },
  {
    id: 3,
    type: "repair",
    title: "Bicycle tune-up scheduled",
    date: "1 week ago",
    points: 0,
    status: "scheduled",
  },
]

const achievements = [
  { name: "First Repair", icon: "🔧", unlocked: true },
  { name: "Tutorial Master", icon: "📚", unlocked: true },
  { name: "Eco Champion", icon: "🌱", unlocked: true },
  { name: "Streak Keeper", icon: "🔥", unlocked: false },
  { name: "Community Helper", icon: "🤝", unlocked: false },
  { name: "Repair Guru", icon: "⚡", unlocked: false },
]

const upcomingRepairs = [
  {
    id: 1,
    item: "Laptop keyboard",
    hero: "Priya Electronics",
    date: "Tomorrow, 2:00 PM",
    location: "Your location",
  },
  {
    id: 2,
    item: "Vintage jacket",
    hero: "Meera's Textile Studio",
    date: "Friday, 10:00 AM",
    location: "Workshop visit",
  },
]

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 py-12">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-xl rounded-3xl">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={userStats.avatar || "/placeholder.svg"} alt={userStats.name} />
                  <AvatarFallback>AS</AvatarFallback>
                </Avatar>

                <div className="flex-1 text-center md:text-left">
                  <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome back, {userStats.name}!</h1>
                  <div className="flex flex-col md:flex-row items-center md:items-start space-y-2 md:space-y-0 md:space-x-4">
                    <Badge className="bg-green-100 text-green-700 px-3 py-1">
                      <Award className="w-4 h-4 mr-1" />
                      {userStats.level}
                    </Badge>
                    <div className="flex items-center text-gray-600">
                      <Zap className="w-4 h-4 mr-1 text-yellow-500" />
                      {userStats.repairPoints} Repair Points
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Target className="w-4 h-4 mr-1 text-blue-500" />
                      {userStats.pointsToNext} to {userStats.nextLevel}
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress to {userStats.nextLevel}</span>
                      <span>
                        {Math.round((userStats.repairPoints / (userStats.repairPoints + userStats.pointsToNext)) * 100)}
                        %
                      </span>
                    </div>
                    <Progress
                      value={(userStats.repairPoints / (userStats.repairPoints + userStats.pointsToNext)) * 100}
                      className="h-3 bg-gray-200"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-xl rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Recycle className="w-6 h-6 text-green-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{userStats.itemsRepaired}</p>
              <p className="text-sm text-gray-600">Items Repaired</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-xl rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{userStats.co2Saved}kg</p>
              <p className="text-sm text-gray-600">CO₂ Saved</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-xl rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Star className="w-6 h-6 text-yellow-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">₹{userStats.moneySaved}</p>
              <p className="text-sm text-gray-600">Money Saved</p>
            </CardContent>
          </Card>

          <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-xl rounded-3xl">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-red-600" />
              </div>
              <p className="text-2xl font-bold text-gray-800">{userStats.streak}</p>
              <p className="text-sm text-gray-600">Day Streak</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="w-5 h-5 mr-2 text-blue-500" />
                  Recent Activity
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-center justify-between p-4 bg-white/50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.status === "completed" ? "bg-green-100" : "bg-yellow-100"
                        }`}
                      >
                        {activity.status === "completed" ? (
                          <CheckCircle className="w-5 h-5 text-green-600" />
                        ) : (
                          <Calendar className="w-5 h-5 text-yellow-600" />
                        )}
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">{activity.title}</p>
                        <p className="text-sm text-gray-600">{activity.date}</p>
                      </div>
                    </div>
                    {activity.points > 0 && (
                      <Badge className="bg-green-100 text-green-700">+{activity.points} points</Badge>
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Upcoming Repairs */}
            <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-xl rounded-3xl mt-6">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2 text-green-500" />
                  Upcoming Repairs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingRepairs.map((repair) => (
                  <div key={repair.id} className="p-4 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-medium text-gray-800">{repair.item}</h3>
                      <Badge variant="outline" className="bg-white/70">
                        Scheduled
                      </Badge>
                    </div>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {repair.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {repair.location}
                      </div>
                      <p>
                        Repair Hero: <span className="font-medium">{repair.hero}</span>
                      </p>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Achievements */}
          <div>
            <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-xl rounded-3xl">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="w-5 h-5 mr-2 text-yellow-500" />
                  Achievements
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-3">
                  {achievements.map((achievement, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-xl text-center transition-all duration-300 ${
                        achievement.unlocked
                          ? "bg-gradient-to-br from-yellow-100 to-orange-100 shadow-md"
                          : "bg-gray-100 opacity-50"
                      }`}
                    >
                      <div className="text-2xl mb-1">{achievement.icon}</div>
                      <p className="text-xs font-medium text-gray-700">{achievement.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="backdrop-blur-lg bg-white/80 border-0 shadow-xl rounded-3xl mt-6">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-xl">
                  <Recycle className="w-4 h-4 mr-2" />
                  Request New Repair
                </Button>
                <Button variant="outline" className="w-full rounded-xl border-0 bg-white/70">
                  <Play className="w-4 h-4 mr-2" />
                  Watch Tutorials
                </Button>
                <Button variant="outline" className="w-full rounded-xl border-0 bg-white/70">
                  <MapPin className="w-4 h-4 mr-2" />
                  Find Repair Heroes
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
