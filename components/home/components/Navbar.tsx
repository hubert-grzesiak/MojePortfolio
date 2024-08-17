"use client";
import LogoBlack from "../../../public/images/logo-black.png";
import Image from "next/image";
import Typography from "./Typography";
import { cn } from "@lib/utils";
import { usePathname, useRouter } from "next/navigation";
import ResumeButton from "./ResumeButton";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <div className={cn("flex w-full items-center justify-between", className)}>
      <Image
        src={LogoBlack}
        alt="Hubert Grzesiak logo"
        className="h-[48px] w-[48px] shrink-0 hover:cursor-pointer"
        onClick={() => router.push("/")}
      />

      <div className="flex max-h-[24px] gap-9 text-white-500">
        <a href="/">
          <Typography
            variant={pathname === "/" ? "small-bold" : "small-regular"}
            className={cn(pathname === "/" && "text-gradient")}
          >
            Home
          </Typography>
        </a>
        <a href="/case-studies">
          <Typography
            variant={
              pathname === "/case-studies" ? "small-bold" : "small-regular"
            }
            className={cn(pathname === "/case-studies" && "text-gradient")}
          >
            Case Studies
          </Typography>
        </a>
        <a href="/contact">
          <Typography
            variant={pathname === "/contact" ? "small-bold" : "small-regular"}
            className={cn(pathname === "/contact" && "text-gradient")}
          >
            Contact
          </Typography>
        </a>
        <ResumeButton />
        <div className="h-[24px] w-[1px] bg-white-500" />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
