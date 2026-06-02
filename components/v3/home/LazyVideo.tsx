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
  sources?: Array<{
    src: string;
    media?: string;
    type?: string;
  }>;
  src: string;
};

const LazyVideo = ({
  className,
  eager = false,
  onError,
  poster,
  preload,
  rootMargin = "420px 0px",
  sources,
  src,
  ...props
}: LazyVideoProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [shouldLoad, setShouldLoad] = useState(eager);
  const [isVisible, setIsVisible] = useState(eager);
  const [hasError, setHasError] = useState(false);

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

  if (hasError && poster) {
    return <img aria-hidden="true" alt="" className={className} src={poster} />;
  }

  return (
    <video
      className={className}
      onError={(event) => {
        setHasError(true);
        onError?.(event);
      }}
      poster={poster}
      ref={videoRef}
      muted
      loop
      playsInline
      autoPlay={eager || isVisible}
      preload={preload ?? (eager ? "metadata" : "none")}
      {...props}
    >
      {shouldLoad && sources
        ? sources.map((source) => (
            <source
              key={`${source.src}-${source.media ?? "default"}`}
              {...source}
            />
          ))
        : null}
      {shouldLoad && !sources ? <source src={src} /> : null}
    </video>
  );
};

export default LazyVideo;
