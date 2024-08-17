import React from "react";
import Typography from "../components/Typography";
import ServiceCard from "../components/ServiceCard";
import { serviceData } from "./data";
import { cn } from "@lib/utils";

const Service = () => {
  return (
    <section className="w-full bg-white-800 py-[72px]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10">
        <Typography as="h2" className="mx-auto w-full font-bold" variant={"h2"}>
          What <span className="highlighted-text-service">service</span> do I
          provide
        </Typography>
        <div className="flex w-full flex-wrap justify-center gap-[43px] pb-[71px]">
          {serviceData.map((item) => {
            const Icon = item.icon;
            return (
              <ServiceCard
                key={item.title}
                icon={
                  <Icon
                    className={cn(
                      item.title === "Front-End Dev" ? "fill-black" : "",
                    )}
                  />
                }
                title={item.title}
                description={item.description}
                variant={item.title === "Front-End Dev" ? "blue" : "default"}
                className={
                  item.title === "Front-End Dev" ? "translate-y-[71px]" : ""
                }
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Service;
