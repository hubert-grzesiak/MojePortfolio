import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";

// Definicja wariantów stylów za pomocą CVA
const typography = cva("", {
  variants: {
    variant: {
      h1: "font-poppins font-bold text-[64px] leading-[83.2px] tracking-[-0.01em] text-center",
      h2: "font-poppins font-bold text-[48px] leading-[55.2px] tracking-[-0.01em] text-center",
      h3: "font-poppins font-semibold text-[32px] leading-[33.6px] tracking-[-0.005em] text-center",
      "base-regular":
        "font-poppins font-normal text-[24px] leading-[31.2px] text-left",
      "base-bold":
        "font-poppins font-semibold text-[24px] leading-[31.2px] text-left",
      "p-regular":
        "font-poppins font-normal text-[20px] leading-[30px] text-left",
      "p-bold":
        "font-poppins font-semibold text-[20px] leading-[26px] text-left",
      "body-regular":
        "font-poppins font-normal text-[18px] leading-[28.8px] text-left",
      "body-bold":
        "font-poppins font-semibold text-[18px] leading-[28.8px] text-left",
      "small-regular":
        "font-poppins font-normal text-[14px] leading-[21.7px] text-left",
      "small-bold":
        "font-poppins font-semibold text-[14px] leading-[20.3px] text-left",
    },
  },
  defaultVariants: {
    variant: "body-regular",
  },
});

interface TypographyProps extends VariantProps<typeof typography> {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
}

const Typography: React.FC<TypographyProps> = ({
  children,
  className,
  variant,
  as = "p",
}) => {
  const Component = as;
  const classes = clsx(typography({ variant }), className);

  return <Component className={classes}>{children}</Component>;
};

export default Typography;
