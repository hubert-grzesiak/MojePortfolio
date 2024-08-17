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
        "flex w-[607px] items-center justify-start gap-9 rounded-[10px] border border-white-800 p-8 hover:cursor-pointer",
        "data-[state=active]:translate-x-[30px] data-[state=inactive]:translate-x-0 data-[state=active]:border-none data-[state=active]:shadow-lg",
        className,
      )}
    >
      {icon ? (
        <div>{icon}</div>
      ) : (
        <img src={iconUrl} className="h-[58px] w-[58px] rounded-[10px]" />
      )}
      <div>
        <Typography className="mb-2.5 text-[24px] font-semibold leading-[31px] data-[state=active]:!text-red-500">
          {title}
        </Typography>
        <Typography variant={"small-regular"} className="text-white-500">
          {description}
        </Typography>
      </div>
    </TabsTrigger>
  );
};

export default JobCard;
