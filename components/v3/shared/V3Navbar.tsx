"use client";

import { cn } from "@lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LogoBlack from "../../../public/images/logo-black.png";

interface V3NavbarProps {
  className?: string;
  inHero?: boolean;
}

const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Work", href: "/#work" },
  { label: "Blog", href: "/blog" },
  { label: "Versions", href: "/versions" },
];

const V3Navbar = ({ className, inHero = false }: V3NavbarProps) => {
  const pathname = usePathname();

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-40 px-4 pt-4 sm:px-6 sm:pt-6",
        inHero && "pointer-events-none",
        className,
      )}
    >
      <nav
        className="liquid-glass pointer-events-auto mx-auto flex max-w-[1120px] items-center justify-between gap-4 rounded-full px-3 py-2.5 sm:px-5"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          className="relative z-[1] flex min-w-max items-center gap-2.5 text-[15px] leading-none font-semibold text-white sm:gap-3 sm:text-[17px]"
        >
          <Image
            src={LogoBlack}
            alt="Hubert Grzesiak logo"
            className="h-10 w-10 shrink-0 rounded-full object-contain sm:h-11 sm:w-11"
            priority
          />
          <span className="hidden sm:inline">Hubert Grzesiak</span>
        </Link>

        <div className="relative z-[1] hidden items-center gap-6 text-[14px] font-medium text-white/72 lg:flex">
          {navLinks.map((link) => {
            const isActive =
              link.href === pathname ||
              (link.href.startsWith("/#") && pathname === "/");

            return (
              <Link
                className={cn(
                  "transition-colors hover:text-white",
                  isActive && link.href === pathname && "text-white",
                )}
                href={link.href}
                key={link.href}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        <a
          className="liquid-glass relative z-[1] inline-flex h-10 items-center justify-center rounded-full px-4 text-[14px] font-semibold text-white transition-colors hover:bg-white/[0.05]"
          href="/RESUME_EN_Hubert_Grzesiak.pdf"
          target="_blank"
          rel="noreferrer"
        >
          Resume
        </a>
      </nav>
    </header>
  );
};

export default V3Navbar;
