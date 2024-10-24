import React from "react";
import Typography from "@components/shared/Typography";
import ServiceCard from "@components/v2/home/ServiceCard";
import { serviceData } from "./data";
import Image from "next/image";
import GradientImage from "@//public/images/gradient-brutalism.png";

const Service = () => {
  return (
    <section className="relative w-full rounded-2xl px-[24px] py-[48px] md:px-[30px] md:py-[72px]">
      <Image src={GradientImage} alt="bg" fill className="rounded-[20px]" />
      <div className="relative z-[2] mx-auto flex w-full max-w-[1270px] flex-col gap-10">
        <Typography
          as="h2"
          className="mx-auto w-full text-center text-[36px] !font-bold leading-[42px] text-black-200 md:text-[48px] md:leading-[55px] lg:text-[48px]"
        >
          What <span className="highlighted-text-service">service</span>{" "}
          <br className="md:hidden" />
          do I provide
        </Typography>
        <div className="flex w-full flex-wrap justify-center gap-10 md:gap-[32px]">
          {serviceData.map((item) => {
            const Icon = item.icon;
            return (
              <ServiceCard
                key={item.title}
                icon={<Icon />}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
