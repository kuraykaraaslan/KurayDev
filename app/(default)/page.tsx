import Carousel from "@/components/default/Carousel";
import Welcome from "@/components/default/Hero/Welcome";
import Resume from "@/components/default/CarouselPartial/Resume";
import ControlViewCube from "@/components/default/CarouselPartial/ControlViewCube";
import InstaFollowStudio from "@/components/default/CarouselPartial/InstaFollowStudio";
import DateWave from "@/components/default/CarouselPartial/DateWave";
import Toolbox from "@/components/default/Hero/Toolbox";
import Testimonials from "@/components/default/Hero/Testimonials";
import Contact from "@/components/default/Hero/Contact";
import HireMe from "@/components/default/Hero/HireMe";
import ProjectsHero from "@/components/default/Hero/ProjectsHero";
import Timeline from "@/components/default/Hero/Timeline";
import ExpoBoilerplate from "@/components/default/CarouselPartial/ExpoBoilerplate";
import Pegasus from "@/components/default/CarouselPartial/Pegasus";

export default function Home() {
  return (
    <>
      <HireMe />
      <Carousel>
        <Pegasus />
        <ExpoBoilerplate />
        <ControlViewCube />
        <Resume />
      </Carousel>
      <ProjectsHero />
      <Timeline />
      <Toolbox />
      <Contact />
    </>
  );
}
