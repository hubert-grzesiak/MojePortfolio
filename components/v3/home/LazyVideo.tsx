"use client";

import type { VideoHTMLAttributes } from "react";
import { useEffect, useRef, useState } from "react";

type LazyVideoProps = Omit<
  VideoHTMLAttributes<HTMLVideoElement>,
  "autoPlay" | "children" | "preload" | "src"
> & {
  eager?: boolean;
  preload?: "auto" | "metadata" | "none";
  rootMargin?: string;
  src: string;
};

const LazyVideo = ({
  eager = false,
  preload,
  rootMargin = "420px 0px",
  src,
  ...props
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [isVisible, setIsVisible] = useState(eager);

  useEffect(() => {
    if (eager) {
      return;
    }

    const video = videoRef.current;

    if (!video || !("IntersectionObserver" in window)) {
      setShouldLoad(true);
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        const nextVisible = entry.isIntersecting;

        setIsVisible(nextVisible);

        if (nextVisible) {
          setShouldLoad(true);
        }
      },
      {
        rootMargin,
        threshold: 0.01,
      },
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, [eager, rootMargin]);

  useEffect(() => {
    const video = videoRef.current;

    if (!video || !shouldLoad) {
      return;
    }

    if (eager || isVisible) {
      void video.play().catch(() => undefined);
      return;
    }

    video.pause();
  }, [eager, isVisible, shouldLoad]);

  return (
    <video
      ref={videoRef}
      src={shouldLoad ? src : undefined}
      muted
      loop
      playsInline
      autoPlay={eager || isVisible}
      preload={preload ?? (eager ? "metadata" : "none")}
      {...props}
    />
  );
};

export default LazyVideo;
