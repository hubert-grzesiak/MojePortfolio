import { cn } from "@lib/utils";
import React from "react";

const Divider = ({  className }: {
  className?: string;
}) => {
  return <div className={cn("bg-[#c8c6c6a4] h-[1px]", className)} />;
};

export default Divider;
