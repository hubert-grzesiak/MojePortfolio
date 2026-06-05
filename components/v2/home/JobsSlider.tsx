"use client";
import { Slider } from "@/components/ui/slider";
import { useCounterStore } from "@app/store";
import { cn } from "@lib/utils";

const JobsSlider = ({ className }: { className: string }) => {
  const count = useCounterStore((state) => state.count);
  const setCount = useCounterStore((state) => state.setCount);
  return (
    <div className={cn("h-[25px]", className)}>
      <Slider
        value={[count]}
        max={2}
        step={1}
        onValueChange={(value) => setCount(value[0])}
      />
    </div>
  );
};

export default JobsSlider;
