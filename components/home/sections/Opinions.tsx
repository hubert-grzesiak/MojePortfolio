import React from "react";
import Typography from "@components/shared/Typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "@components/home/CarouselCard";
import emilyPhoto from "../../../public/images/opinions/emily.webp";
import szymonPhoto from "../../../public/images/opinions/szymon.webp";
import kacperPhoto from "../../../public/images/opinions/kacper.webp";

const Opinions = () => {
  return (
    <section className="w-full bg-white-800 px-[24px] py-[48px] dark:bg-black-300 md:px-0 md:py-[72px] lg:px-[30px]">
      <div className="mx-auto flex w-full max-w-[1270px] flex-col items-center gap-9 md:gap-[64px]">
        <Typography
          as="h2"
          className="mx-auto w-full text-center text-[36px] !font-bold leading-[41px] tracking-[-0.48px] md:text-[48px] md:leading-[55px] lg:text-[48px]"
        >
          What <span className="highlighted-text-service">they say</span> about
          me
        </Typography>
        <div className="flex w-full justify-center md:mx-[30px]">
          <Carousel className="relative w-full md:px-[64px]">
            <CarouselContent className="lg:max-w-[1137px]">
              <CarouselItem>
                <CarouselCard
                  jobTitle="Full Stack Developer"
                  description="I have had the pleasure of working with Hubert as a Software Developer and can confidently say that he is a valuable asset to any team. He is highly skilled in ReactJS, NextJS, Typescript, Tailwind CSS and Git, and consistently delivers high-quality code. "
                  name="Szymon"
                  image={szymonPhoto}
                />
              </CarouselItem>
              <CarouselItem>
                <CarouselCard
                  jobTitle="Frontend Developer"
                  description="Working with Hubert has been an incredible experience. His expertise in modern frontend technologies like ReactJS, CSS frameworks, and responsive design is second to none. Hubert is a true professional who brings creativity and precision to every project."
                  name="Emily"
                  image={emilyPhoto}
                />
              </CarouselItem>
              <CarouselItem>
                <CarouselCard
                  jobTitle="Frontend Developer"
                  description="I have had the privilege of collaborating with Hubert, and I can confidently say he is one of the most talented developers I've worked with. His in-depth knowledge of React and NextJS, along with his excellent problem-solving skills, make him a key player in any development team."
                  name="Kacper"
                  image={kacperPhoto}
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute right-[64px] top-0 h-[48px] w-[48px] md:right-[96px] md:top-0 md:h-[56px] md:w-[56px] md:translate-y-[-35px] lg:left-0 lg:top-1/2" />
            <CarouselNext className="absolute right-[0px] top-0 h-[48px] w-[48px] md:right-[30px] md:top-0 md:h-[56px] md:w-[56px] md:translate-y-[-35px] lg:right-0 lg:top-1/2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Opinions;
