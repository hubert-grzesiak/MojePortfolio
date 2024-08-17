import { cn } from "@lib/utils";
import React, { ComponentPropsWithoutRef, FC } from "react";
import Typography from "./Typography";
import { TabsContent } from "@components/ui/tabs";
import JobsSlider from "./JobsSlider";

interface ExperienceCardProps extends ComponentPropsWithoutRef<"div"> {
  title?: string;
  description?: string;
  secondDescription?: string;
  value: string;
}

const ExperienceDescriptionCard: FC<ExperienceCardProps> = ({
  title = "Work Experience",
  description = "Take a trip through my career, where I've not only paved the way but also reached important goals, taken on different roles, worked on impressive projects, and accomplished notable things.",
  secondDescription = "",
  value,
  className,
}) => {
  const higlihtedText = title.split(" ")[0];
  const restText = title.split(" ")[1];
  return (
    <TabsContent
      value={value}
      className={cn(
        "shadow-workShadow mt-0 flex h-[580px] flex-col justify-between rounded-[10px] bg-white-800 pb-9 pl-11 pr-[92px] pt-20",
        className,
      )}
    >
      <div>
        <Typography className="mb-[26px] text-[48px] !font-bold leading-[55px]">
          <span className="highlighted-text-service">{higlihtedText}</span>{" "}
          <span>{restText}</span>
        </Typography>
        <Typography
          variant={"body-regular"}
          dangerouslySetInnerHTML={{ __html: description }}
          className="text-white-500"
        />
        <Typography
          variant={"body-regular"}
          dangerouslySetInnerHTML={{ __html: secondDescription }}
          className="mt-4 text-white-500"
        />
      </div>
      <div>
        <Typography
          variant={"small-regular"}
          className="mt-[68px] text-white-500"
        >
          👉 Slide the bar to reveal details of my web experience.
        </Typography>
        <JobsSlider className="mt-[51px]" />
      </div>
    </TabsContent>
  );
};

export default ExperienceDescriptionCard;
