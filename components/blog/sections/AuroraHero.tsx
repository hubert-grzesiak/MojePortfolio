"use client";
import { cn } from "@/lib/utils";
import Typography from "@components/shared/Typography";
import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "@components/ui/aurora-background";

export function AuroraBackgroundDemo({ className }: { className?: string }) {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center"
      >
        <section
          className={cn(
            "w-full overflow-hidden px-6 pt-[72px] md:pt-[186px]",
            className,
          )}
        >
          <div className="relative mx-auto flex w-full max-w-[740px] flex-col items-center justify-center py-[48px] md:py-0 md:pb-[108px]">
            <Typography
              as="h1"
              className="mb-5 text-center text-[42px] !font-bold leading-[48px] tracking-[-0.64px] text-black-200 dark:text-white-900 md:mb-[28px] md:text-[64px] md:leading-[83px]"
            >
              Welcome to my <span className="highlighted-text">Blog</span>
            </Typography>
          </div>
        </section>
      </motion.div>
    </AuroraBackground>
  );
}
