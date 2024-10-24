import FeaturedProjects from "@components/v2/home/sections/FeaturedProjects";
import Hero from "@components/v2/home/sections/Hero";
import Service from "@components/v2/home/sections/Service";
import Skills from "@components/v2/home/sections/Skills";
import WorkExperience from "@components/v2/home/sections/WorkExperience";
import Opinions from "@components/v2/home/sections/Opinions";
import GetInTouch from "@components/v2/home/sections/GetInTouch";

const Page = () => {
  return (
    <main className="flex w-full flex-col gap-4 bg-black pt-4">
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
