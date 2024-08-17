import { Button } from "@components/ui/button";
import ProjectCard from "../components/ProjectCard";
import Typography from "../components/Typography";

const FeaturedProjects = () => {
  return (
    <section className="w-full bg-white-900 py-[72px]">
      <div className="mx-auto w-full max-w-[1400px]">
        <Typography
          as="h2"
          className="mx-auto mb-10 w-full font-bold"
          variant={"h2"}
        >
          Featured <span className="highlighted-text-service">Projects</span>
        </Typography>
        <div className="flex flex-col gap-12">
          <ProjectCard
            title="Restly - A Stay <br/>Booking App"
            technologies={["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]}
            className="bg-[#416CEA]"
          />
          <ProjectCard
            title="Restly - A Stay <br/>Booking App"
            technologies={["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]}
            className="bg-[#0BAB7C]"
          />
          <Button className="mx-auto h-auto w-full max-w-[323px] rounded-full bg-primary-light px-3 py-5 hover:bg-primary-light/90">
            <Typography className="text-center text-[18px] font-semibold leading-[29px] text-white-900">
              See more case studies
            </Typography>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
