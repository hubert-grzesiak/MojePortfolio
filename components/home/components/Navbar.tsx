"use client";
import LogoBlack from "../../../public/images/logo-black.png";
import Image from "next/image";
import Typography from "./Typography";
import { cn } from "@lib/utils";
import { usePathname, useRouter } from "next/navigation";
import ResumeButton from "./ResumeButton";
import ThemeSwitcher from "./ThemeSwitcher";
import MobileMenu from "./MobileMenu";

const Navbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav
      className={cn(
        "fixed top-0 z-10 w-full bg-white-800 pt-6 dark:bg-black-300 md:pt-9",
        className,
      )}
    >
      <div className="mx-auto flex items-center justify-between px-6 md:px-[30px] lg:max-w-[1270px]">
        <Image
          src={LogoBlack}
          alt="Hubert Grzesiak logo"
          className="h-[48px] w-[48px] shrink-0 hover:cursor-pointer"
          onClick={() => router.push("/")}
        />

        <div className="max-h-[24px] gap-9 text-white-500 dark:text-white-800 md:flex">
          <div className="hidden gap-9 md:flex">
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
                variant={
                  pathname === "/contact" ? "small-bold" : "small-regular"
                }
                className={cn(pathname === "/contact" && "text-gradient")}
              >
                Contact
              </Typography>
            </a>
            <ResumeButton />
            <div className="h-[24px] w-[1px] bg-white-500" />
          </div>
          <div className="flex gap-[14px]">
            <ThemeSwitcher />
            <MobileMenu pathname={pathname} className="md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
