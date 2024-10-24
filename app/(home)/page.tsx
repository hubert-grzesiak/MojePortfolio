import FeaturedProjects from "@components/home/sections/FeaturedProjects";
import Hero from "@components/home/sections/Hero";
import Service from "@components/home/sections/Service";
import Skills from "@components/home/sections/Skills";
import WorkExperience from "@components/home/sections/WorkExperience";
import Opinions from "@components/home/sections/Opinions";
import GetInTouch from "@components/shared/sections/GetInTouch";
import { Alert, AlertDescription, AlertTitle } from "@components/ui/alert";
import { RocketIcon } from "lucide-react";
import Link from "next/link";

const Page = () => {
  return (
    <main className="w-full">
      <Hero />
      <Alert className="fixed top-[0] z-[9999] max-w-[300px]">
        <RocketIcon className="h-4 w-4" />
        <AlertTitle>Hi</AlertTitle>
        <AlertDescription>
          <div>There is a new version of this website available.</div>
          <Link href="/v2" className="text-blue-500 hover:underline">
            Check it out
          </Link>
        </AlertDescription>
      </Alert>
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
