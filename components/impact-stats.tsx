"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

const stats = [
  {
    value: 12547,
    label: "Items Repaired",
    suffix: "+",
  },
  {
    value: 89.2,
    label: "Tonnes CO₂ Saved",
    suffix: "T",
  },
  {
    value: 3421,
    label: "Active Members",
    suffix: "+",
  },
  {
    value: 32.5,
    label: "Money Saved",
    suffix: "L",
    prefix: "₹",
  },
]

export function ImpactStats() {
  const [counters, setCounters] = useState(stats.map(() => 0))

  useEffect(() => {
    const intervals = stats.map((stat, index) => {
      const increment = stat.value / 100
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev]
          if (newCounters[index] < stat.value) {
            newCounters[index] = Math.min(newCounters[index] + increment, stat.value)
          }
          return newCounters
        })
      }, 20)
    })

    return () => intervals.forEach(clearInterval)
  }, [])

  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-5xl font-bold text-gray-900 mb-6 tracking-tight">Making a real impact</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Together, we're creating a sustainable future through community-driven repair practices.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const displayValue = Math.floor(counters[index])

              return (
                <Card key={index} className="bg-white border-0 shadow-sm rounded-3xl text-center">
                  <CardContent className="p-8">
                    <div className="text-4xl font-bold text-gray-900 mb-2">
                      {stat.prefix}
                      {displayValue.toLocaleString()}
                      {stat.suffix}
                    </div>
                    <h3 className="text-lg font-medium text-gray-600">{stat.label}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Trusted by section */}
        <div className="mt-20 text-center">
          <p className="text-sm text-gray-500 mb-8">Used by 5,000+ businesses & freelancers in 129+ countries</p>
          <div className="flex items-center justify-center space-x-12 opacity-40">
            <div className="text-2xl font-bold text-gray-400">Flipkart</div>
            <div className="text-2xl font-bold text-gray-400">Zomato</div>
            <div className="text-2xl font-bold text-gray-400">Swiggy</div>
            <div className="text-2xl font-bold text-gray-400">Paytm</div>
            <div className="text-2xl font-bold text-gray-400">Ola</div>
          </div>
        </div>
      </div>
    </section>
  )
}
