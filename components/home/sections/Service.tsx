import React from "react";
import Typography from "../components/Typography";
import ServiceCard from "../components/ServiceCard";
import { serviceData } from "./data";

const Service = () => {
  return (
    <section className="w-full bg-white-800 py-[72px] dark:bg-black-300 md:px-[30px]">
      <div className="mx-auto flex w-full max-w-[1270px] flex-col gap-10">
        <Typography
          as="h2"
          className="mx-auto w-full font-bold dark:text-white-900"
          variant={"h2"}
        >
          What <span className="highlighted-text-service">service</span> do I
          provide
        </Typography>
        <div className="flex w-full flex-wrap justify-center md:gap-[32px]">
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
