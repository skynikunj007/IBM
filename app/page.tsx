import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { ImpactStats } from "@/components/impact-stats"
import { Testimonials } from "@/components/testimonials"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <ImpactStats />
      <Testimonials />
      <CTA />
    </main>
  )
}
