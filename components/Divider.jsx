import { cn } from "@lib/utils";
import React from "react";

const Divider = ({ width, className }) => {
  return <div className={cn("bg-[#c8c6c6a4] h-[1px]", className)} />;
};

export default Divider;
