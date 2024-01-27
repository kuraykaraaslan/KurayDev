import Carousel from "@/components/default/Carousel"
import Welcome from "@/components/default/heros/Welcome"
import Resume from "@/components/default/heros/Resume"
import ControlViewCube from "@/components/default/heros/ControlViewCube"
import InstaFollowStudio from "@/components/default/heros/InstaFollowStudio"
import DateWave from "@/components/default/heros/DateWave"
import Toolbox from "@/components/default/heros/Toolbox"
import Testimonials from "@/components/default/heros/Testimonials"
import Contact from "@/components/default/heros/Contact"
import HireMe from "@/components/default/heros/HireMe"

export default function Home() {

  const carouselItems = [
    {
      htmlDOM: <HireMe />
    },

    {
      htmlDOM: <Resume />
    },
    {
      htmlDOM: <ControlViewCube />
    },
    {
      htmlDOM: <InstaFollowStudio />
    },
    {
      htmlDOM: <DateWave />
    },
  ]

  return (
    <>
    <Carousel children={carouselItems as any} />
    <Toolbox />
    <Contact />

    </>
  )
}
