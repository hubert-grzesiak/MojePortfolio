"use client";

import Typography from "../components/Typography";
import copyImage from "../../../public/svgs/copy-button.svg";
import Image from "next/image";
import { toast } from "sonner";

const CopyButton = () => {
  return (
    <Typography
      as="div"
      className="flex h-[48px] items-center justify-between rounded-[9000px] bg-white-900 px-4 py-[14px] text-[14px] font-semibold leading-[22px] text-white-500 dark:bg-black-200 dark:text-white-900 md:h-[69px] md:justify-normal md:gap-[18px] md:px-6 md:py-5 md:text-[16px] lg:text-[18px]"
    >
      <span>hubertgrzesiak.dev@gmail.com</span>
      <Image
        onClick={() => {
          navigator.clipboard.writeText("hubertgrzesiak.dev@gmail.com");
          toast("Email copied to clipboard!");
        }}
        src={copyImage}
        alt="copy button"
        className="h-[16px] w-[16px] shrink-0 hover:cursor-pointer md:h-[21px] md:w-[21px]"
      />
    </Typography>
  );
};

export default CopyButton;
