import { cn } from "@lib/utils";
import React, { ComponentPropsWithoutRef, FC } from "react";
import Typography from "./Typography";
import { TabsTrigger } from "@components/ui/tabs";

interface JobCardProps extends ComponentPropsWithoutRef<"div"> {
  icon?: React.ReactNode;
  iconUrl?: string;
  title?: string;
  description?: string;
  value: string;
}

const JobCard: FC<JobCardProps> = ({
  icon,
  iconUrl,
  title = "Helpfind",
  description = "Frontend Developer— August 2023 - Present",
  value,
  className,
}) => {
  return (
    <TabsTrigger
      value={value}
      className={cn(
        "flex w-full items-center justify-start whitespace-break-spaces rounded-[10px] border border-white-800 bg-white-900 hover:cursor-pointer dark:border-black-200 dark:bg-black-200 md:w-full md:max-w-[500px] md:gap-[14px] md:p-5 lg:max-w-[607px] lg:gap-8 lg:p-8",
        "data-[state=active]:border-none data-[state=active]:shadow-lg data-[state=active]:dark:!bg-black-300 md:data-[state=active]:translate-x-[14px] md:data-[state=inactive]:translate-x-0 lg:data-[state=active]:translate-x-[30px] lg:data-[state=inactive]:translate-x-0",
        className,
      )}
    >
      {icon ? (
        <div>{icon}</div>
      ) : (
        <img src={iconUrl} className="h-[58px] w-[58px] rounded-[10px]" />
      )}
      <div>
        <Typography
          data-h2
          as="h2"
          className="font-semibold md:mb-[5px] lg:mb-2.5 lg:text-[24px] lg:leading-[31px]"
        >
          {title}
        </Typography>
        <Typography
          variant={"small-regular"}
          className="text-white-500 dark:text-white-800"
        >
          {description}
        </Typography>
      </div>
    </TabsTrigger>
  );
};

export default JobCard;
