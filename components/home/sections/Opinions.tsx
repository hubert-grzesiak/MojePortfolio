import React from "react";
import Typography from "../components/Typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import CarouselCard from "../components/CarouselCard";
import alicePhoto from "../../../public/images/opinions/alice.webp";
import szymonPhoto from "../../../public/images/opinions/szymon.webp";
import kacperPhoto from "../../../public/images/opinions/kacper.webp";

const Opinions = () => {
  return (
    <section className="w-full bg-white-800 py-[72px] dark:bg-black-300">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-[64px] md:px-[30px]">
        <Typography as="h2" className="mx-auto w-full font-bold" variant={"h2"}>
          What <span className="highlighted-text-service">they say</span> about
          me
        </Typography>
        <div className="flex w-full justify-center md:max-w-[900pxpx] lg:max-w-[1267px]">
          <Carousel>
            <CarouselContent>
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
                  name="Alice"
                  image={alicePhoto}
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
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Opinions;
