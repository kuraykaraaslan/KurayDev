import Carousel from "@/components/default/Carousel"
import Welcome from "@/components/default/heros/Welcome"
import Resume from "@/components/default/heros/Resume"
import ControlViewCube from "@/components/default/heros/ControlViewCube"
import InstaFollowStudio from "@/components/default/heros/InstaFollowStudio"
import DateWave from "@/components/default/heros/DateWave"
import Toolbox from "@/components/default/heros/Toolbox"
import Testimonials from "@/components/default/heros/Testimonials"
import Contact from "@/components/default/heros/Contact"
import ContactNew from "@/components/default/heros/ContactNew"
import HireMe from "@/components/default/heros/HireMe"
import Projects from "@/components/default/heros/Projects"
import Timeline from "@/components/default/heros/Timeline"


export default function Home() {

  const carouselItems = [

    {
      htmlDOM: <ControlViewCube />
    },
    {
      htmlDOM: <InstaFollowStudio />
    }, 
    {
      htmlDOM: <Resume />
    },
    {
      htmlDOM: <DateWave />
    },
  ]

  return (
    <>
      <HireMe />
      <Carousel>
        <ControlViewCube />
        <InstaFollowStudio />
        <Resume />
        <DateWave />
      </Carousel>
      <Projects />
      <Timeline />
      <Toolbox />
      <ContactNew />
    </>
  )
}
