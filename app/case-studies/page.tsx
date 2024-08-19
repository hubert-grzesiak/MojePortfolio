import GetInTouch from "@components/shared/sections/GetInTouch";
import Hero from "@components/case-studies/sections/Hero";
import ProjectsGrid from "@components/case-studies/sections/ProjectsGrid";

const Page = () => {
  return (
    <main className="w-full">
      <Hero />
      <ProjectsGrid />
      <GetInTouch />
    </main>
  );
};

export default Page;
