import { cn } from "@lib/utils";
import React, { ComponentPropsWithoutRef, FC } from "react";
import Typography from "./Typography";

interface ServiceCardProps extends ComponentPropsWithoutRef<"div"> {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  className,
}) => {
  return (
    <div
      className={cn(
        "dark:shadow-serviceDarkShadow group w-full rounded-[10px] p-[25px] shadow-serviceShadow md:h-[239px] md:max-w-[450px] lg:h-[265px] lg:max-w-[300px]",
        "hover:scale-105 hover:bg-primary-light dark:hover:bg-primary-dark",
        "transition-transform duration-300 ease-in-out",
        "bg-[#F3F8FF] dark:bg-black-300",
        className,
      )}
    >
      <div
        className={cn(
          "flex h-[62px] w-[62px] items-center justify-center rounded-[10px] shadow-serviceIconShadow transition-transform",
          "group-hover:bg-white-900 dark:group-hover:text-primary-dark [&>svg>g>path]:group-hover:fill-primary-light [&>svg>g>path]:group-hover:dark:fill-primary-dark [&>svg>path]:group-hover:fill-primary-light [&>svg>path]:group-hover:dark:fill-primary-dark",
          "bg-primary-light dark:bg-primary-dark",
        )}
      >
        {icon}
      </div>
      <div className="mt-9 flex flex-col gap-2.5">
        <Typography
          className={cn(
            "text-[24px] font-semibold leading-[31px]",
            "group-hover:text-white-900",
            "text-black-200 dark:text-white-900",
          )}
        >
          {title}
        </Typography>
        <Typography
          variant={"small-regular"}
          className={cn(
            "group-hover:text-white-800",
            "text-white-500 dark:text-white-800",
          )}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default ServiceCard;
