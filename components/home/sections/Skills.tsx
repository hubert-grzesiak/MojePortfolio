"use client";
import React from "react";
import Typography from "@components/shared/Typography";
import { skillsIcons } from "@components/icons";
import { cn } from "@lib/utils";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  return (
    <section className="w-full bg-white-900 px-6 py-[48px] dark:bg-black-200 md:px-0 md:py-[72px]">
      <div className="mx-auto flex w-full max-w-[1270px] flex-col gap-10 md:px-[30px]">
        <Typography
          as="h2"
          className="highlighted-text-skill mx-auto w-full max-w-[160px] text-center text-[36px] !font-bold leading-[40px] dark:text-white-900 md:max-w-[207px] md:text-[48px] md:leading-[55px] lg:text-[48px]"
        >
          My skills
        </Typography>
        <div className="flex w-full flex-wrap items-center justify-center gap-x-10 gap-y-[48px] md:gap-x-5 md:gap-y-6 lg:gap-x-[43px] lg:gap-y-[58px]">
          {skillsIcons.map((icon, index) => {
            const Icon = icon.icon;
            return (
              <div
                data-tooltip-id={icon.name}
                className={cn(
                  "flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white-800 dark:bg-black-300 md:h-[100px] md:w-[100px]",
                  icon.name === "React" &&
                    "bg-white-900 shadow-customShadow md:h-[120px] md:w-[120px]",
                )}
                key={index}
              >
                <Icon
                  className={cn(
                    "h-[27px] w-[27px] md:h-[50px] md:w-[50px]",
                    icon.name === "React" &&
                      "h-[62px] fill-[#53C1DE] md:w-[62px]",
                  )}
                />
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
