"use client";
import { cn } from "@lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="nav lg:p-[20px] p-[10px] shadow-lg">
      <Link
        href="/"
        className={cn("nav-item is-active", pathname === "/" && "item-active")}
        active-color="orange">
        Home
      </Link>
      <Link
        href="/resume"
        className={cn(
          "nav-item is-active",
          pathname === "/resume" && "item-active"
        )}
        active-color="green">
        Resume
      </Link>
      <Link
        href="/projects"
        className={cn(
          "nav-item is-active",
          pathname === "/projects" && "item-active"
        )}
        active-color="blue">
        Projects
      </Link>
      <Link
        href="/contact"
        className={cn(
          "nav-item is-active",
          pathname === "/contact" && "item-active"
        )}
        active-color="rebeccapurple">
        Contact
      </Link>
      <span className="nav-indicator"></span>
    </nav>
  );
};

export default Navbar;
