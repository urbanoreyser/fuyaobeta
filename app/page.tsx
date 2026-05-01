import { HeroSlider } from "@/components/hero-slider"
import { PopularDishes } from "@/components/popular-dishes"
import { StorySection } from "@/components/story-section"
import { ValueProps } from "@/components/value-props"

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <ValueProps />
      <PopularDishes />
      <StorySection />
    </>
  )
}
