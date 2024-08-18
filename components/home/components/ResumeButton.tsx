"use client";

import Typography from "../components/Typography";
import { DownloadIcon } from "./icons";

const ResumeButton = () => {
  return (
    <Typography
      as="div"
      className="flex items-center gap-[3px] text-black-200 dark:text-white-900"
      variant={"small-regular"}
    >
      <DownloadIcon
        onClick={() => {}}
        className="h-[21px] w-[21px] shrink-0 hover:cursor-pointer dark:[&>path]:fill-white-900"
      />
      <span>Resume</span>
    </Typography>
  );
};

export default ResumeButton;
