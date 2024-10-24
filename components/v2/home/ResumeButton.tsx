"use client";

import Typography from "@components/shared/Typography";
import { DownloadIcon } from "@components/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ResumeButton = () => {
  return (
    <Typography
      as="div"
      className="flex gap-[3px] text-black-200 dark:text-white-900"
      variant={"small-regular"}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              href="/RESUME_EN_Hubert_Grzesiak.pdf"
              download="RESUME_Hubert_Grzesiak.pdf"
            >
              <DownloadIcon className="h-[21px] w-[21px] shrink-0 hover:cursor-pointer dark:[&>path]:fill-white-900" />
            </a>
          </TooltipTrigger>
          <TooltipContent side={"bottom"}>
            <span>Download Resume</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <a
              className="flex w-full items-center gap-[3px]"
              href="/RESUME_EN_Hubert_Grzesiak.pdf"
              target="_blank"
            >
              <span>Resume</span>
            </a>
          </TooltipTrigger>
          <TooltipContent side={"bottom"}>
            <span>Open Resume in new tab</span>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Typography>
  );
};

export default ResumeButton;
