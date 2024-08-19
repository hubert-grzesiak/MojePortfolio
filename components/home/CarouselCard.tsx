import Image, { StaticImageData } from "next/image";
import { StarIcon } from "../icons";
import Typography from "../shared/Typography";
import React, { ComponentPropsWithoutRef, FC } from "react";
import { cn } from "@lib/utils";
import szymonPhoto from "../../public/images/opinions/szymon.webp";

interface Props extends ComponentPropsWithoutRef<"div"> {
  imageUrl?: string;
  imageAlt?: string;
  image?: string | StaticImageData;
  description?: string;
  name?: string;
  jobTitle?: string;
}

const CarouselCard: FC<Props> = ({
  imageAlt = "",
  image = szymonPhoto,
  description,
  name,
  jobTitle,
  className,
}) => {
  return (
    <div
      className={cn(
        "flex min-h-[328px] flex-col items-center justify-center bg-white-800 dark:bg-black-300 md:flex-row md:gap-[20px] lg:max-w-[1137px] lg:gap-[26px]",
        className,
      )}
    >
      <Image
        src={image}
        width={328}
        height={328}
        className="h-[200px] w-[200px] self-start rounded-[16px] object-cover md:h-[328px] md:w-[328px]"
        alt={imageAlt}
      />
      <div className="w-full max-w-[748px]">
        <div className="mb-4 mt-10 flex gap-[4px] md:mb-6 md:mt-[17px]">
          {[...Array(5)].map((_, index) => (
            <StarIcon key={index} />
          ))}
        </div>
        <Typography className="mb-6 text-[18px] leading-[29px] text-white-500 dark:text-white-800 md:text-[20px] lg:mb-8 lg:text-[24px]">
          {description}
        </Typography>
        <Typography className="mb-1 text-[18px] font-semibold leading-[29px] text-black-300 dark:text-white-900">
          — {name}
        </Typography>
        <Typography
          variant={"body-regular"}
          className="text-[18px] text-white-500 dark:text-white-800"
        >
          {jobTitle}
        </Typography>
      </div>
    </div>
  );
};

export default CarouselCard;
