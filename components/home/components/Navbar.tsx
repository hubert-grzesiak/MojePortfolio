"use client";
import LogoBlack from "../../../public/images/logo-black.png";
import Image from "next/image";
import Typography from "./Typography";
import { cn } from "@lib/utils";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <div className="sticky top-0 flex w-full items-center justify-between">
      <Image
        src={LogoBlack}
        alt="Hubert Grzesiak logo"
        className="h-[48px] w-[48px] shrink-0"
      />
      <div className="text-white-500 flex max-h-[24px] gap-9">
        <a href="/">
          <Typography
            variant={pathname === "/" ? "small-bold" : "small-regular"}
            className={cn(pathname === "/" && "text-blue-500")}
          >
            Home
          </Typography>
        </a>
        <a href="/case-studies">
          <Typography
            variant={
              pathname === "/case-studies" ? "small-bold" : "small-regular"
            }
            className={cn(pathname === "/case-studies" && "text-blue-500")}
          >
            Case Studies
          </Typography>
        </a>
        <a href="/contact">
          <Typography
            variant={pathname === "/contact" ? "small-bold" : "small-regular"}
            className={cn(pathname === "/contact" && "text-blue-500")}
          >
            Contact
          </Typography>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
