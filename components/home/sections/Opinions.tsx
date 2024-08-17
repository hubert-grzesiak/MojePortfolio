import React from "react";
import Typography from "../components/Typography";
import ServiceCard from "../components/ServiceCard";
import { serviceData } from "./data";
import { cn } from "@lib/utils";

const Opinions = () => {
  return (
    <section className="w-full bg-white-800 py-[72px]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col items-center gap-[64px]">
        <Typography as="h2" className="mx-auto w-full font-bold" variant={"h2"}>
          What <span className="highlighted-text-service">they say</span> about
          me
        </Typography>
        <div className="flex h-[450px] w-full max-w-[1137px] justify-center bg-red-100">
          Carousel
        </div>
      </div>
    </section>
  );
};

export default Opinions;
