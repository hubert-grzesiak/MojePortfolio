import React from "react";
import Typography from "@components/shared/Typography";
import ServiceCard from "@components/home/ServiceCard";
import { serviceData } from "./data";

const Service = () => {
  return (
    <section className="w-full bg-white-800 px-[24px] py-[48px] dark:bg-black-300 md:px-[30px] md:py-[72px]">
      <div className="mx-auto flex w-full max-w-[1270px] flex-col gap-10">
        <Typography
          as="h2"
          className="mx-auto w-full text-center text-[36px] !font-bold leading-[42px] text-black-200 dark:text-white-900 md:text-[48px] md:leading-[55px] lg:text-[48px]"
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
