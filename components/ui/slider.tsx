"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/lib/utils";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className,
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-[2px] w-full grow overflow-hidden rounded-full bg-[#151E2C66] dark:bg-black-400">
      <SliderPrimitive.Range className="absolute h-full bg-[#151E2C66] dark:bg-black-400" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block rounded-full border-2 border-primary bg-black-200 ring-offset-background transition-colors hover:ring-1 hover:ring-[#151E2C66] hover:ring-offset-white-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 dark:bg-white-900 dark:hover:ring-black-400 dark:hover:ring-offset-black-200 md:h-[30px] md:w-[30px] md:hover:ring-offset-[8px] md:focus-visible:ring-offset-[8px] lg:h-11 lg:w-11 lg:hover:ring-offset-[13px] lg:focus-visible:ring-offset-[13px]" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
