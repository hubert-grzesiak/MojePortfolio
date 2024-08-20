"use client";
import { Button } from "@components/ui/button";
import { HamburgerIcon } from "@components/icons";
import LogoBlack from "../../public/images/logo-black.png";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import Typography from "./Typography";
import { cn } from "@lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const MobileMenu = ({
  pathname,
  className,
}: {
  pathname: string;
  className?: string;
}) => {
  const router = useRouter();

  return (
    <div className={cn(className)}>
      <Dialog>
        <DialogTrigger asChild>
          <HamburgerIcon className="hover:cursor-pointer dark:[&>path]:fill-white" />
        </DialogTrigger>
        <DialogContent className="h-[362px] w-full max-w-[345px] rounded-[10px]">
          <div className="flex max-h-[24px] flex-col gap-2 text-white-500 dark:text-white-800">
            <div className="mb-[30px]">
              <Image
                src={LogoBlack}
                alt="Hubert Grzesiak logo"
                className="h-[30px] w-[30px] shrink-0 hover:cursor-pointer"
                onClick={() => router.push("/")}
              />{" "}
            </div>
            <Link href="/">
              <Typography
                variant={pathname === "/" ? "small-bold" : "small-regular"}
                className={cn(
                  "rounded-[100px] px-6 py-3 transition-colors hover:bg-[#fea92e]/50 hover:text-black-200",
                  pathname === "/" && "bg-[#fea92e] text-white-900",
                )}
              >
                Home
              </Typography>
            </Link>
            <Link href="/case-studies">
              <Typography
                variant={
                  pathname === "/case-studies" ? "small-bold" : "small-regular"
                }
                className={cn(
                  "rounded-[100px] px-6 py-3 transition-colors hover:bg-[#fea92e]/50 hover:text-black-200",
                  pathname === "/case-studies" && "bg-[#fea92e] text-white-900",
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
                className={cn(
                  "transition-color rounded-[100px] px-6 py-3 hover:bg-[#fea92e]/50 hover:text-black-200 hover:dark:text-black",
                  pathname === "/contact" && "bg-[#fea92e] text-white-900",
                )}
              >
                Contact
              </Typography>
            </Link>
            <a
              className="mt-[12px] block w-full"
              href="/CV_EN_Hubert_Grzesiak.pdf"
              download="CV_EN_Hubert_Grzesiak.pdf"
            >
              <Button
                type="submit"
                className="w-full rounded-[100px] bg-white-800 text-[14px] font-semibold leading-[20px] tracking-wide text-[#f49818] dark:bg-black-300 hover:dark:bg-black-200"
              >
                Resume
              </Button>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default MobileMenu;
