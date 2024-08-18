"use client";
import React from "react";
import Typography from "../components/Typography";
import { skillsIcons } from "../components/icons";
import { cn } from "@lib/utils";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  return (
    <section className="w-full bg-white-900 py-[72px] dark:bg-black-200">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col md:gap-10 md:px-[30px]">
        <Typography
          as="h2"
          className="highlighted-text-skill mx-auto w-full max-w-[207px] font-bold dark:text-white-900"
          variant={"h2"}
        >
          My skills
        </Typography>
        <div className="flex w-full flex-wrap items-center justify-center md:gap-x-5 md:gap-y-6 lg:gap-x-[43px] lg:gap-y-[58px]">
          {skillsIcons.map((icon, index) => {
            const Icon = icon.icon;
            return (
              <div
                data-tooltip-id={icon.name}
                className={cn(
                  "flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white-800 dark:bg-black-300",
                  icon.name === "React" &&
                    "h-[120px] w-[120px] bg-white-900 shadow-customShadow",
                )}
                key={index}
              >
                <Icon className="dark:fill-black-400" />
                <Tooltip
                  id={icon.name}
                  place="top"
                  content={icon.name}
                  style={{
                    borderRadius: "20px",
                  }}
                  className="dark:bg-black-400"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
