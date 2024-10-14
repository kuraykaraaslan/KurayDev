import Carousel from "@/components/default/Carousel";
import Resume from "@/components/default/CarouselPartial/Resume";
import ControlViewCube from "@/components/default/CarouselPartial/ControlViewCube";
import Toolbox from "@/components/default/Hero/Toolbox";
import Contact from "@/components/default/Hero/Contact";
import HireMe from "@/components/default/Hero/HireMe";
import ProjectsHero from "@/components/default/Hero/ProjectsHero";
import Timeline from "@/components/default/Hero/Timeline";
import ExpoBoilerplate from "@/components/default/CarouselPartial/ExpoBoilerplate";
import NextFrontBoilerplate from "@/components/default/CarouselPartial/NextFrontBoilerplate";
import GitSection from "@/components/default/Hero/GitSection";
import ExpressBoilerplate from "@/components/default/CarouselPartial/ExpressBoilerplate";
import NextAdminBoilerplate from "@/components/default/CarouselPartial/NextAdminBoilerplate";

export default function Home() {
  return (
    <>
      <HireMe />
      <GitSection />
      <Carousel>
        <ExpressBoilerplate />
        <NextFrontBoilerplate />
        <NextAdminBoilerplate />
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
