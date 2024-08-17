"use client";
import React from "react";
import Typography from "../components/Typography";
import { skillsIcons } from "../components/icons";
import { cn } from "@lib/utils";
import { Tooltip } from "react-tooltip";

const Skills = () => {
  return (
    <section className="w-full bg-white-900 py-[72px]">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-10">
        <Typography
          as="h2"
          className="highlighted-text-skill mx-auto w-full max-w-[207px] font-bold"
          variant={"h2"}
        >
          My skills
        </Typography>
        <div className="flex w-full flex-wrap items-center justify-center gap-[43px]">
          {skillsIcons.map((icon, index) => {
            const Icon = icon.icon;
            return (
              <div
                data-tooltip-id={icon.name}
                className={cn(
                  "flex h-[100px] w-[100px] items-center justify-center rounded-full bg-white-800",
                  icon.name === "React" &&
                    "shadow-customShadow h-[120px] w-[120px] bg-white-900",
                )}
                key={index}
              >
                <Icon />
                <Tooltip
                  id={icon.name}
                  place="top"
                  content={icon.name}
                  style={{
                    borderRadius: "20px",
                  }}
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
