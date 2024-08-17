import { cn } from "@lib/utils";
import React, { ComponentPropsWithoutRef, FC } from "react";
import Typography from "./Typography";

interface ServiceCardProps extends ComponentPropsWithoutRef<"div"> {
  icon: React.ReactNode;
  title: string;
  description: string;
  variant?: "blue" | "default";
}

const ServiceCard: FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  variant = "default",
  className,
}) => {
  return (
    <div
      className={cn(
        "shadow-serviceShadow h-[265px] w-full max-w-[300px] rounded-[10px] p-[25px]",
        variant === "blue" ? "bg-primary-light" : "bg-[#F3F8FF]",
        className,
      )}
    >
      <div
        className={cn(
          "shadow-serviceIconShadow flex h-[62px] w-[62px] items-center justify-center rounded-[10px] bg-primary-light",
          variant === "blue" ? "bg-white-900" : "bg-primary-light",
        )}
      >
        {icon}
      </div>
      <div className="mt-9 flex flex-col gap-2.5">
        <Typography
          className={cn(
            "text-[24px] font-semibold leading-[31px]",
            variant === "blue" ? "text-white-900" : "text-black-200",
          )}
        >
          {title}
        </Typography>
        <Typography
          variant={"small-regular"}
          className={cn(
            variant === "blue" ? "text-[#F3F8FF]" : "text-white-500",
          )}
        >
          {description}
        </Typography>
      </div>
    </div>
  );
};

export default ServiceCard;
