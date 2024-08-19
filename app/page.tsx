import FeaturedProjects from "@components/home/sections/FeaturedProjects";
import Hero from "@components/home/sections/Hero";
import Service from "@components/home/sections/Service";
import Skills from "@components/home/sections/Skills";
import WorkExperience from "@components/home/sections/WorkExperience";
import Opinions from "@components/home/sections/Opinions";
import GetInTouch from "@components/home/sections/GetInTouch";

const Page = () => {
  return (
    <main className="w-full">
      <Hero />
      <Skills />
      <Service />
      <WorkExperience />
      <FeaturedProjects />
      <Opinions />
      <GetInTouch />
    </main>
  );
};

export default Page;
