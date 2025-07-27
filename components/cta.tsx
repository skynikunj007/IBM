import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CTA() {
  return (
    <section className="py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-8 tracking-tight leading-tight">
            Ready to make
            <br />a difference?
          </h2>

          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join thousands of people who are choosing repair over replacement. Start your sustainable journey today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/repair-request">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 rounded-full text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 group">
                Start your first repair
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </Link>

            <Link href="/repair-heroes">
              <Button
                variant="outline"
                className="px-8 py-4 rounded-full text-lg font-medium border-2 border-gray-300 hover:border-gray-900 hover:text-gray-900 transition-all duration-300 bg-transparent"
              >
                Become a repair hero
              </Button>
            </Link>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            Free to join and use • Local repair experts • Earn rewards for repairs
          </div>
        </div>
      </div>
    </section>
  )
}
