"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children: ReactNode;
  delay?: number;
}

const Reveal = ({ children, className, delay = 0, ...props }: RevealProps) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return (
      <motion.div className={className} initial={false} {...props}>
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
      transition={{
        delay,
        duration: 0.72,
        ease: [0.16, 1, 0.3, 1],
      }}
      viewport={{
        amount: 0.18,
        margin: "0px 0px -90px 0px",
        once: true,
      }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
