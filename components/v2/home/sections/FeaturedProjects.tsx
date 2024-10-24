import { Button } from "@components/ui/button";
import ProjectCard from "@components/home/ProjectCard";
import Typography from "@components/shared/Typography";
import { ButtonArrow } from "@components/icons";
import Link from "next/link";
import GradientImage from "@//public/images/gradient-brutalism.png";
import Image from "next/image";

const FeaturedProjects = () => {
  return (
    <section className="relative w-full rounded-2xl bg-white-900 px-[24px] py-[48px] dark:bg-black-200 md:px-0 md:py-[72px]">
      <Image src={GradientImage} fill alt="bg" className="rounded-[20px]" />

      <div className="relative mx-auto w-full max-w-[1270px] md:px-[30px]">
        <Typography
          as="h2"
          className="mx-auto mb-10 w-full text-center text-[36px] !font-bold leading-[40px] dark:text-black-200 md:text-[48px] md:leading-[55px] lg:text-[48px]"
        >
          Featured <span className="highlighted-text-service">Projects</span>
        </Typography>
        <div className="flex flex-col gap-9 lg:gap-12">
          <ProjectCard
            title="Restly - A Stay <br/>Booking App"
            technologies={["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]}
            className="brutalism [&>div>div>div>div]:brutalismv2 bg-[#416CEA]/70"
            href="restly"
          />
          <ProjectCard
            title="Restly - A Stay <br/>Booking App"
            technologies={["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]}
            className="brutalism [&>div>div>div>div]:brutalismv2 bg-[#0BAB7C]/70"
            href="restly"
          />
          <ProjectCard
            title="Restly - A Stay <br/>Booking App"
            technologies={["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]}
            className="brutalism [&>div>div>div>div]:brutalismv2 bg-[#FF6934]/70"
            href="restly"
          />
          <Link
            href="/case-studies"
            className="mx-auto block w-full max-w-[323px]"
          >
            <Button className="brutalism h-auto w-full rounded-full bg-primary-light px-3 py-5 hover:bg-primary-light/90 dark:bg-primary-dark">
              <Typography className="flex items-center gap-2.5 text-center text-[18px] font-semibold leading-[29px] text-white-900">
                See more case studies
                <ButtonArrow />
              </Typography>
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
