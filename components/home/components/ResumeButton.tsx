"use client";

import Typography from "../components/Typography";
import downloadIcon from "../../../public/svgs/download-icon.svg";
import Image from "next/image";

const ResumeButton = () => {
  return (
    <Typography
      as="div"
      className="flex items-center gap-[3px] text-black-200"
      variant={"small-regular"}
    >
      <Image
        onClick={() => {}}
        src={downloadIcon}
        alt="download icon"
        className="h-[21px] w-[21px] shrink-0 hover:cursor-pointer"
      />
      <span>Resume</span>
    </Typography>
  );
};

export default ResumeButton;
