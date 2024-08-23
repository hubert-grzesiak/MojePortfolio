import React from "react";
import Typography from "../Typography";
import { socials } from "@components/icons/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white-900 px-6 py-[48px] dark:bg-black-200 md:px-[30px] md:py-[52px]">
      <div className="mx-auto flex w-full max-w-[1270px] flex-col justify-between border-white-800 dark:border-black-300 md:flex-row md:border-t md:pt-8">
        <Typography
          variant={"body-regular"}
          className="pb-4 text-center text-[14px] leading-[26px] text-black-400 md:pb-0 md:text-left md:text-[16px]"
        >
          © {currentYear} Hubert Grzesiak. All rights reserved.
        </Typography>
        <div className="flex w-full justify-center gap-6 md:w-auto md:justify-normal">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.name} link`}
                key={item.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
