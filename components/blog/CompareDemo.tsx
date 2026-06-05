import React from "react";
import { Compare } from "@/components/ui/compare";

type Props = {
  firstImage: string;
  secondImage: string;
};

export function CompareDemo({
  firstImage = "https://res.cloudinary.com/dev6yhoh3/image/upload/v1724429514/portfolio/solution_wo5uxi.png",
  secondImage = "https://res.cloudinary.com/dev6yhoh3/image/upload/v1724429515/portfolio/problem_yzvoho.png",
}: Props) {
  return (
    <div className="rounded-3xl border border-neutral-200 bg-neutral-100 p-4 px-4 dark:border-neutral-800 dark:bg-neutral-900">
      <Compare
        firstImage={firstImage}
        secondImage={secondImage}
        firstImageClassName="object-none object-top-left m-0"
        secondImageClassname="object-none object-top-left m-0"
        className=""
        slideMode="hover"
      />
    </div>
  );
}
