import Image from "next/image";
import { StarIcon } from "./icons";
import Typography from "./Typography";
import React, { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@lib/utils";

interface Props extends ComponentPropsWithoutRef<"div"> {
  imageUrl?: string;
  imageAlt?: string;
  image?: React.ReactNode;
  description?: string;
  name?: string;
  jobTitle?: string;
}

const CarouselCard: FC<Props> = ({
  imageUrl,
  imageAlt = "",
  image,
  description,
  name,
  jobTitle,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex h-[328px] w-full items-center justify-center gap-[26px] bg-white-800 dark:bg-black-300",
        className,
      )}
    >
      <Image
        src={imageUrl ? imageUrl : image}
        width={328}
        height={328}
        className="h-[328px] w-[328px] rounded-[16px] object-cover"
        alt={imageAlt}
      />
      <div className="w-full max-w-[748px]">
        <div className="mb-6 mt-[17px] flex gap-[4px]">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <Typography className="mb-8 leading-[31px] text-white-500 dark:text-white-800 md:text-[20px] md:leading-[30px] lg:text-[24px]">
          {description}
        </Typography>
        <Typography className="mb-1 text-[18px] font-semibold leading-[29px] text-black-300 dark:text-white-900">
          — {name}
        </Typography>
        <Typography
          variant={"body-regular"}
          className="text-white-500 dark:text-white-800"
        >
          {jobTitle}
        </Typography>
      </div>
    </div>
  );
};

export default CarouselCard;
