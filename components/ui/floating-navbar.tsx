"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Typography from "@components/shared/Typography";
import { usePathname, useRouter } from "next/navigation";
import LogoBlack from "../../public/images/logo-black.png";
import Image from "next/image";
import ResumeButton from "../home/ResumeButton";
import ThemeSwitch from "@components/shared/ThemeSwitcher";
import MobileMenu from "../shared/MobileMenu";

export const FloatingNav = ({ className }: { className?: string }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (direction > 0 && scrollYProgress.get() > 0.15) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });
  const pathname = usePathname();
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.nav
        initial={{
          opacity: 1,
        }}
        animate={{
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "fixed top-0 z-[1000] w-full bg-white-800/60 pt-6 backdrop-blur-[32px] dark:bg-black-300/60 md:pt-9",
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
                    pathname === "/case-studies"
                      ? "small-bold"
                      : "small-regular"
                  }
                  className={cn(
                    pathname === "/case-studies" && "text-gradient",
                  )}
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
                  variant={
                    pathname === "/blog" ? "small-bold" : "small-regular"
                  }
                  className={cn(pathname === "/blog" && "text-gradient")}
                >
                  Blog
                </Typography>
              </Link>
              <ResumeButton />
              <div className="h-[24px] w-[1px] bg-white-500" />
            </div>
            <div className="flex items-center gap-[14px]">
              <ThemeSwitch />
              <MobileMenu pathname={pathname} className="md:hidden" />
            </div>
          </div>
        </div>
      </motion.nav>
    </AnimatePresence>
  );
};
