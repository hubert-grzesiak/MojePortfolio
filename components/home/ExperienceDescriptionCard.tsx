import { cn } from "@lib/utils";
import React, { ComponentPropsWithoutRef, FC } from "react";
import Typography from "../shared/Typography";
import { TabsContent } from "@components/ui/tabs";
import JobsSlider from "./JobsSlider";

interface ExperienceCardProps extends ComponentPropsWithoutRef<"div"> {
  title?: string;
  description?: string;
  secondDescription?: string;
  shortDescription?: string;
  value: string;
}

const ExperienceDescriptionCard: FC<ExperienceCardProps> = ({
  title = "Work Experience",
  description = "Take a trip through my career, where I've not only paved the way but also reached important goals, taken on different roles, worked on impressive projects, and accomplished notable things.",
  secondDescription = "",
  shortDescription = "",
  value,
  className,
}) => {
  const higlihtedText = title.split(" ")[0];
  const restText = title.split(" ")[1];
  return (
    <TabsContent
      value={value}
      className={cn(
        "mt-0 flex min-h-[373px] w-full min-w-[345px] flex-col justify-between rounded-[10px] bg-white-800 px-[38px] pb-[38px] pt-[58px] shadow-workShadow dark:bg-black-300 md:h-[474px] md:w-full md:max-w-[422px] md:px-5 md:pb-[33px] md:pt-[34px] lg:h-full lg:max-h-[680px] lg:min-h-[590px] lg:max-w-[607px] lg:pb-9 lg:pl-11 lg:pr-[92px] lg:pt-20",
        className,
      )}
    >
      <div>
        <Typography className="mb-[23px] text-[36px] !font-bold leading-[41px] md:mb-[24px] md:text-[44px] md:leading-[50px] md:tracking-[-0.44px] lg:mb-[26px] lg:text-[48px] lg:leading-[55px]">
          <span className="highlighted-text-service">{higlihtedText}</span>{" "}
          <span>{restText}</span>
        </Typography>

        <Typography
          dangerouslySetInnerHTML={{ __html: shortDescription }}
          className="block text-[14px] leading-[21px] text-white-500 dark:text-white-800 md:hidden md:text-[14px] md:leading-[21px] lg:text-[18px] lg:leading-[29px]"
        />
        <div className="hidden md:block">
          <Typography
            dangerouslySetInnerHTML={{ __html: description }}
            className="text-white-500 dark:text-white-800 md:text-[14px] md:leading-[21px] lg:text-[18px] lg:leading-[29px]"
          />
          <Typography
            dangerouslySetInnerHTML={{ __html: secondDescription }}
            className="text-white-500 dark:text-white-800 md:text-[14px] md:leading-[21px] lg:text-[18px] lg:leading-[29px]"
          />
        </div>
      </div>
      <div>
        <Typography className="hidden text-white-500 dark:text-white-800 md:block md:text-[14px] md:leading-[21px]">
          👉 Slide the bar to reveal details of my web experience.
        </Typography>
        <JobsSlider className="mt-[51px]" />
      </div>
    </TabsContent>
  );
};

export default ExperienceDescriptionCard;
