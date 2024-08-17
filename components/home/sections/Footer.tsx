import React from "react";
import Typography from "../components/Typography";
import { socials } from "../components/icons/socials";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white-900 py-[52px]">
      <div className="mx-auto flex w-full max-w-[1400px] justify-between border-t border-white-800 pt-8">
        <Typography variant={"body-regular"} className="text-black-400">
          © {currentYear} Hubert. All rights reserved.
        </Typography>
        <div className="flex gap-6">
          {socials.map((item) => {
            const Icon = item.icon;
            return (
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${item.name} link`}
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
