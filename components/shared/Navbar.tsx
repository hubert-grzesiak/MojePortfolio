"use client";
import LogoBlack from "../../public/images/logo-black.png";
import Image from "next/image";
import Typography from "./Typography";
import { cn } from "@lib/utils";
import { usePathname, useRouter } from "next/navigation";
import ResumeButton from "../home/ResumeButton";
import ThemeSwitcher from "./ThemeSwitcher.jsx";
import MobileMenu from "./MobileMenu";
import { Link } from "next-view-transitions";

const Navbar = ({ className }: { className?: string }) => {
  const pathname = usePathname();
  const router = useRouter();
  return (
    <nav
      className={cn(
        "fixed top-0 z-[20] w-full bg-white-800 pt-6 dark:bg-black-300 md:pt-9",
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

        <div className="max-h-[32px] gap-9 text-white-500 dark:text-white-800 md:flex">
          <div className="hidden gap-9 md:flex md:items-center">
            <Link href="/">
              <Typography
                variant={pathname === "/" ? "small-bold" : "small-regular"}
                className={cn(pathname === "/" && "text-gradient")}
              >
                Home
              </Typography>
            </Link>
            <Link href="/case-studies">
              <Typography
                variant={
                  pathname === "/case-studies" ? "small-bold" : "small-regular"
                }
                className={cn(pathname === "/case-studies" && "text-gradient")}
              >
                Case Studies
              </Typography>
            </Link>
            <Link href="/contact">
              <Typography
                variant={
                  pathname === "/contact" ? "small-bold" : "small-regular"
                }
                className={cn(pathname === "/contact" && "text-gradient")}
              >
                Contact
              </Typography>
            </Link>
            <Link href="/blog">
              <Typography
                variant={pathname === "/blog" ? "small-bold" : "small-regular"}
                className={cn(pathname === "/blog" && "text-gradient")}
              >
                Blog
              </Typography>
            </Link>
            <ResumeButton />
            <div className="h-[24px] w-[1px] bg-white-500" />
          </div>
          <div className="flex items-center gap-[14px]">
            <ThemeSwitcher />
            <MobileMenu pathname={pathname} className="md:hidden" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
