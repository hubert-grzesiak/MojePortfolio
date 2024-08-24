"use client";

import Typography from "@components/shared/Typography";
import { DownloadIcon } from "../icons";

const ResumeButton = () => {
  return (
    <Typography
      as="div"
      className="text-black-200 dark:text-white-900"
      variant={"small-regular"}
    >
      <a
        className="flex w-full items-center gap-[3px]"
        href="/CV_EN_Hubert_Grzesiak.pdf"
        target="_blank"
      >
        <DownloadIcon
          onClick={() => {}}
          className="h-[21px] w-[21px] shrink-0 hover:cursor-pointer dark:[&>path]:fill-white-900"
        />
        <span>Resume</span>
      </a>
    </Typography>
  );
};

export default ResumeButton;
