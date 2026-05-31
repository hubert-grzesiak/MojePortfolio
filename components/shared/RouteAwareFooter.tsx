"use client";

import Footer from "@components/shared/sections/Footer";
import { usePathname } from "next/navigation";

const RouteAwareFooter = () => {
  const pathname = usePathname();
  const shouldUseDarkFooter = pathname === "/" || pathname === "/versions";

  return (
    <Footer
      className={
        shouldUseDarkFooter
          ? "border-t border-white/10 bg-black dark:bg-black"
          : undefined
      }
    />
  );
};

export default RouteAwareFooter;
