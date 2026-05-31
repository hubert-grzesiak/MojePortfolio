import FeaturedProjects from "@components/home/sections/FeaturedProjects";
import GetInTouch from "@components/shared/sections/GetInTouch";
import Hero from "@components/home/sections/Hero";
import Opinions from "@components/home/sections/Opinions";
import Service from "@components/home/sections/Service";
import Skills from "@components/home/sections/Skills";
import WorkExperience from "@components/home/sections/WorkExperience";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: "Hubert Grzesiak",
            url: "https://hubertgrzesiak.com",
            jobTitle: "Frontend Developer",
            sameAs: [
              "https://www.linkedin.com/in/hubert-grzesiak",
              "https://github.com/HubertGrzesiak",
            ],
          }),
        }}
      />
    </main>
  );
};

export default Page;
