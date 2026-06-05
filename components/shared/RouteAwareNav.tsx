"use client";

import V3Navbar from "@components/v3/shared/V3Navbar";
import { usePathname } from "next/navigation";

const RouteAwareNav = () => {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return <V3Navbar />;
};

export default RouteAwareNav;
