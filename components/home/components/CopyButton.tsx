"use client";

import Typography from "../components/Typography";
import copyImage from "../../../public/images/copy.png";
import Image from "next/image";
import { toast } from "sonner";

const CopyButton = () => {
  return (
    <Typography className="flex h-[69px] items-center gap-[18px] rounded-[9000px] bg-white-900 px-6 py-5 font-semibold text-white-500">
      hubertgrzesiak.dev@gmail.com
      <Image
        onClick={() => {
          navigator.clipboard.writeText("hubertgrzesiak.dev@gmail.com");
          toast("Email copied to clipboard!");
        }}
        src={copyImage}
        alt="contact button"
        className="h-[21px] w-[21px] shrink-0 hover:cursor-pointer"
      />
    </Typography>
  );
};

export default CopyButton;
