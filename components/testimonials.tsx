import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Environmental Advocate",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "This platform has completely changed how I think about broken items. Instead of throwing things away, I now see them as opportunities to learn and contribute to a sustainable future.",
  },
  {
    name: "Rahul Gupta",
    role: "Software Engineer",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "The repair heroes are incredibly skilled and passionate. My laptop was fixed perfectly during the monsoon season, and I learned so much from watching the process.",
  },
  {
    name: "Kavya Patel",
    role: "Engineering Student",
    avatar: "/placeholder.svg?height=60&width=60",
    rating: 5,
    text: "As an engineering student on a tight budget, this service has been a lifesaver. I've saved thousands of rupees by repairing instead of replacing.",
  },
]

export function Testimonials() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">What our community says</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Real stories from real people who are making a difference through sustainable repair practices.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border border-gray-100 shadow-sm rounded-3xl">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <p className="text-gray-700 mb-8 leading-relaxed text-lg">{testimonial.text}</p>

                  <div className="flex items-center">
                    <Avatar className="w-12 h-12 mr-4">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
