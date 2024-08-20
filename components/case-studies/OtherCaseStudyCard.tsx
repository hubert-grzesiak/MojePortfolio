import Typography from "@components/shared/Typography";
import { cn } from "@lib/utils";
import Image, { StaticImageData } from "next/image";
import React, { ComponentPropsWithoutRef } from "react";
import restlyImageDesktop from "../../public/images/projects/restly-bg-project.png";
import Link from "next/link";
import { Button } from "@components/ui/button";

interface ProjectCardProps extends ComponentPropsWithoutRef<"div"> {
  title?: string;
  description?: string;
  image?: StaticImageData;
  href?: string;
}

const OtherCaseStudyCard = ({
  title = "Restly",
  description = "Jobit, a web app made with React and JSearch API, links developers to millions of job openings. It offers easy job search by...",
  image = restlyImageDesktop,
  href = "restly",
  className,
}: ProjectCardProps) => {
  return (
    <div
      className={cn(
        "shadow-otherCaseStudyCardLight dark:shadow-otherCaseStudyCardDark h-[385px] w-[345px] rounded-[20px] bg-white-900 dark:bg-black-300 md:h-[481px] md:w-[430px]",
        className,
      )}
    >
      <Image
        src={image}
        alt="Project Image"
        className="h-[186px] w-[365px] rounded-t-[20px] object-cover md:h-[232px] md:w-[430px]"
      />
      <div className="flex flex-col gap-4 px-5 pb-6 pt-5 md:px-6 md:pb-[34px] md:pt-6">
        <div className="flex flex-col gap-1.5 md:gap-2">
          <Typography className="text-[20px] !font-semibold leading-[26px] text-primary-light dark:text-primary-dark md:text-[24px] md:leading-[31px]">
            {title}
          </Typography>
          <Typography className="text-[14px] leading-[22px] text-white-500 dark:text-white-800 md:text-[16px] md:leading-[22px] lg:text-[18px] lg:leading-[29px]">
            {description}
          </Typography>
        </div>
        <Link
          href={`/case-studies/${href}`}
          className="flex h-[47px] w-full justify-end md:h-auto"
        >
          <Button className="h-[41px] w-full rounded-full bg-primary-light px-2 py-[14px] hover:bg-primary-light/90 dark:bg-primary-dark dark:hover:bg-primary-dark/90 md:h-[48px] md:px-3 md:py-5">
            <Typography className="flex items-center gap-2.5 text-center text-[12px] font-semibold leading-[17px] text-white-900 md:text-[14px] md:leading-[20px]">
              See Case Study
            </Typography>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default OtherCaseStudyCard;
