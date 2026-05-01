import { SiteNavbar } from "@/components/site-navbar"
import { HeroSection } from "@/components/hero-section"
import { PhilosophySection } from "@/components/philosophy-section"
import { SpecialtiesSection } from "@/components/specialties-section"
import { MarketSection } from "@/components/market-section"
import { StorySection } from "@/components/story-section"
import { ReservationSection } from "@/components/reservation-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <SiteNavbar />
      <main className="flex-1">
        <HeroSection />
        <PhilosophySection />
        <SpecialtiesSection />
        <MarketSection />
        <StorySection />
        <ReservationSection />
      </main>
      <SiteFooter />
    </div>
  )
}
